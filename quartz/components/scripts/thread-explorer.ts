import {
  prepareIndex,
  search,
  matchContext,
  stateFromUrl,
  urlFor,
  tokensFor,
  parallelConnector,
  relationLabel,
  type Dataset,
  type Direction,
  type Entry,
  type IndexedItem,
  type ExplorerState,
} from "./thread-explorer-model"

const escape = (value: unknown) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  )
const PAGE_SIZE = 40,
  BRANCH_BATCH = 3
const dateLabel = (value: string) => {
  const parsed = new Date(value + "T12:00:00Z")
  return !value
    ? "Undated"
    : Number.isNaN(parsed.valueOf())
      ? value
      : parsed.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        })
}
const welcome = `<div class="welcome"><p class="eyebrow">A connected reading space</p><h2>Find a piece.<br>See where it leads.</h2><p>Choose an item on the left. Its earlier and later connections will appear here, ready to expand.</p><p class="small">Search names, places, tags, statements, source excerpts, and review notes. Multiple words can appear anywhere in a record.</p></div>`
const shellMarkup = `
  <aside class="search-sidebar" aria-label="Search results">
    <div class="search-area"><h2>Follow the thread.</h2>
      <form data-te="search-form" role="search" aria-label="Thread items"><label for="thread-query">Search all thread items</label><div class="search-row"><input id="thread-query" data-te="query" type="search" placeholder="Search names, places, words…" autocomplete="off" aria-describedby="thread-search-help"><button type="submit">Find</button></div></form>
      <p class="search-help" id="thread-search-help">Tags, entities, aliases &amp; full record text.</p>
      <div class="count-row"><span data-te="result-count" role="status"></span><button class="text-button" data-te="clear-search" type="button" hidden>Clear</button></div>
    </div>
    <div class="result-scroll" data-te="result-scroll"><ol class="result-list" data-te="results"></ol></div>
    <nav class="pagination" aria-label="Result pages" data-te="pagination" hidden><button data-te="previous-page" type="button">← Prev</button><span data-te="page-label"></span><button data-te="next-page" type="button">Next →</button></nav>
    <p class="dataset-note" data-te="dataset-note"></p>
  </aside>
  <section class="reader-shell" aria-label="Connected reading space">
    <div class="toolbar"><div class="toolbar-left"><button data-te="back" type="button" disabled>← Back</button><button class="mobile-results" data-te="show-results" type="button">Results</button><span class="toolbar-label" data-te="toolbar-label"></span></div><div class="size-controls" role="group" aria-label="Reading text size"><button data-te="smaller" type="button" aria-label="Decrease reading text size">A−</button><span data-te="text-size">18px</span><button data-te="larger" type="button" aria-label="Increase reading text size">A+</button></div></div>
    <div class="reader" data-te="reader" tabindex="-1" role="region" aria-label="Selected item and direct connections"><div class="reader-inner" data-te="content"></div></div>
  </section>`

export async function initThreadExplorer(
  container: HTMLElement,
  localHref: (href: string) => string,
) {
  container.dataset.initialized = "true"
  const controller = new AbortController()
  const { signal } = controller
  let searchTimer = 0,
    scrollTimer = 0,
    connectorFrame = 0
  const connectorObserver = new ResizeObserver(() => scheduleConnectors())
  window.addCleanup(() => {
    controller.abort()
    clearTimeout(searchTimer)
    clearTimeout(scrollTimer)
    cancelAnimationFrame(connectorFrame)
    connectorObserver.disconnect()
    delete container.dataset.initialized
  })
  const loading = container.querySelector<HTMLElement>("[data-thread-loading]")!
  const shell = container.querySelector<HTMLElement>("[data-thread-browser-shell]")!
  let data: Dataset
  try {
    // Do not reuse the old headline-only payload after the explorer upgrade.
    const indexUrl = new URL(localHref(container.dataset.indexPath!), location.href)
    indexUrl.searchParams.set("v", "2")
    const response = await fetch(indexUrl, { signal })
    if (!response.ok) throw new Error(`Index request returned ${response.status}`)
    data = await response.json()
  } catch (error) {
    if (signal.aborted) return
    loading.setAttribute("role", "alert")
    loading.textContent = `The evidence index could not load. Reload this page to try again. ${error instanceof Error ? error.message : ""}`
    return
  }
  if (signal.aborted) return
  const index = prepareIndex(data)
  const path = location.pathname
  const saved = history.state?.threadExplorer
  let state: ExplorerState = {
    ...stateFromUrl(location.href, index),
    ...(saved?.path === path ? saved.state : {}),
  }
  if (!index.byId.has(state.item)) state.item = ""
  let matches: IndexedItem[] = [],
    editingSearch = false
  shell.innerHTML = shellMarkup
  loading.hidden = true
  shell.hidden = false
  const $ = <T extends HTMLElement = HTMLElement>(key: string) =>
    container.querySelector<T>(`[data-te="${key}"]`)!
  const query = $<HTMLInputElement>("query")
  const reader = $("reader"),
    content = $("content"),
    resultsPane = $("result-scroll")

  function storeState(push = false) {
    if (location.pathname !== path || signal.aborted) return
    history[push ? "pushState" : "replaceState"](
      { ...history.state, threadExplorer: { path, state } },
      "",
      urlFor(state, location.href),
    )
  }
  function remember() {
    if (location.pathname !== path || signal.aborted) return
    state.expanded = [
      ...content.querySelectorAll<HTMLDetailsElement>("details[data-expand][open]"),
    ].map((el) => el.dataset.expand!)
    state.sidebarScroll = resultsPane.scrollTop
    state.readerScroll = reader.scrollTop
    state.windowScroll = window.scrollY
    storeState()
  }
  function navigate(patch: Partial<ExplorerState>, replace = false) {
    remember()
    const readerChanged =
      ("item" in patch && patch.item !== state.item) || ("q" in patch && patch.q !== state.q)
    state = {
      ...state,
      ...patch,
      depth: replace ? state.depth : state.depth + 1,
      ...(readerChanged ? { expanded: [], beforePage: 1, afterPage: 1, readerScroll: 0 } : {}),
      ...("q" in patch || "page" in patch ? { sidebarScroll: 0 } : {}),
    }
    storeState(!replace)
    render()
  }
  function applySearch() {
    clearTimeout(searchTimer)
    const q = query.value.trim()
    if (q === state.q) return
    navigate({ q, item: "", page: 1 }, editingSearch)
    editingSearch = true
  }
  const itemUrl = (id: string) => escape(urlFor({ ...state, item: id }, location.href).href)
  const itemLink = (id: string, text: string) =>
    `<a class="open-item" data-item="${escape(id)}" data-router-ignore href="${itemUrl(id)}">${escape(text)}</a>`
  const metadata = (item: IndexedItem) =>
    `${escape(dateLabel(item.date))} · ${escape(item.speakers.join(", ") || "Unresolved speaker")}`
  function sourceLink(value: string, text: string) {
    if (!value) return ""
    try {
      const url = new URL(/^\/(?!\/)/.test(value) ? localHref(value) : value, location.href)
      if (!["https:", "http:"].includes(url.protocol)) return ""
      const external = url.origin !== location.origin
      return `<a href="${escape(url.href)}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${escape(text)}${external ? " ↗" : ""}</a>`
    } catch {
      return ""
    }
  }
  function highlighted(text: string) {
    const tokens = tokensFor(state.q).map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    if (!tokens.length) return escape(text)
    return text
      .split(new RegExp(`(${tokens.join("|")})`, "gi"))
      .map((part, i) => (i % 2 ? `<mark>${escape(part)}</mark>` : escape(part)))
      .join("")
  }
  function renderResults() {
    matches = search(index, state.q)
    const pages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE))
    state.page = Math.min(state.page, pages)
    const offset = (state.page - 1) * PAGE_SIZE
    $("result-count").textContent =
      `${matches.length.toLocaleString()} ${state.q ? "matches" : "items"}`
    $("clear-search").hidden = !state.q
    $("results").innerHTML = matches.length
      ? matches
          .slice(offset, offset + PAGE_SIZE)
          .map((item) => {
            const context = matchContext(item, state.q)
            return `<li><a class="result" href="${itemUrl(item.id)}" data-item="${escape(item.id)}" data-router-ignore aria-current="${item.id === state.item}" aria-label="${escape(item.label)} — ${escape(dateLabel(item.date))}">
        <span class="result-meta">${escape(dateLabel(item.date))}</span><span class="result-title">${highlighted(item.label)}</span><span class="result-speaker">${escape(item.speakers.join(", "))}</span>
        <p class="result-context"><span class="match-type">${escape(context.label)}</span>${highlighted(context.text)}</p><p class="result-connections">${index.before.get(item.id)?.length || 0} before · ${index.after.get(item.id)?.length || 0} after</p></a></li>`
          })
          .join("")
      : '<li class="empty-results"><strong>No matching items.</strong><p>Try fewer words or a different name.</p><button class="text-button" data-search="">Show all items</button></li>'
    $("pagination").hidden = pages <= 1
    $("page-label").textContent =
      `${offset + (matches.length ? 1 : 0)}–${Math.min(offset + PAGE_SIZE, matches.length)} of ${matches.length}`
    $<HTMLButtonElement>("previous-page").disabled = state.page <= 1
    $<HTMLButtonElement>("next-page").disabled = state.page >= pages
  }
  function evidenceMarkup(item: IndexedItem, compact = false) {
    return (
      item.evidence
        .slice(0, compact ? 1 : undefined)
        .map((evidence, i) => {
          const excerpt = evidence.excerpts.join("\n\n")
          const attribution =
            evidence.reported_by && evidence.reported_by !== evidence.speaker
              ? `${evidence.speaker}, as reported by ${evidence.reported_by}`
              : evidence.speaker
          const markup = `<p class="source-heading">${excerpt ? "Source excerpt" : "Statement record"} · ${escape(attribution)}</p><blockquote class="source-excerpt">${escape(excerpt || evidence.text)}</blockquote>
        <div class="source-links">${sourceLink(evidence.href, "Statement record")}${sourceLink(evidence.source_href, `Transcript · ${evidence.time}`)}${sourceLink(item.source_url, "Original source")}</div>`
          return i === 0
            ? markup
            : `<details class="review" data-expand="evidence-${i}"><summary>Additional statement · ${escape(evidence.speaker)}</summary>${markup}</details>`
        })
        .join("") || '<p class="small">No linked source statement is available for this item.</p>'
    )
  }
  function branchBody(entry: Entry) {
    const { item, link } = entry
    return `<p>${escape(item.proposition)}</p><p class="connection-note"><strong>Why these connect:</strong> ${escape(link.review_note || "This reviewed link has no explanatory note.")}</p>${evidenceMarkup(item, true)}<div class="branch-actions">${itemLink(item.id, "Open this item →")}<span class="small">${index.before.get(item.id)?.length || 0} before · ${index.after.get(item.id)?.length || 0} after</span></div>`
  }
  function branchSection(direction: Direction, item: IndexedItem) {
    const entries = index[direction].get(item.id) || []
    const limit = state[`${direction}Page`] * BRANCH_BATCH
    return `<section class="linked-section" aria-label="${direction === "before" ? "Before this item" : "After this item"}"><div class="section-heading"><h3>${direction === "before" ? "Before this" : "Follows after"}</h3><span class="number">${entries.length} direct</span></div>
      ${
        entries.length
          ? `<ol class="branch-stack">${entries
              .slice(0, limit)
              .map(({ item: related, link }, i) => {
                const key = `${direction}-${i}`,
                  open = state.expanded.includes(key)
                return `<li><details class="branch" data-expand="${key}" data-direction="${direction}" data-index="${i}" ${open ? "open" : ""}><summary><span class="branch-summary"><span class="relation" data-type="${escape(link.type)}">${escape(relationLabel(link.type, direction))}</span><span class="branch-title">${escape(related.label)}</span><span class="branch-meta">${metadata(related)}</span></span></summary><div class="branch-content">${open ? branchBody(entries[i]) : ""}</div></details></li>`
              })
              .join(
                "",
              )}</ol>${entries.length > limit ? `<button class="branch-more" data-more="${direction}">Show ${Math.min(BRANCH_BATCH, entries.length - limit)} more of ${entries.length - limit} remaining</button>` : ""}`
          : '<p class="no-connections">No linked items in this direction.</p>'
      }</section>`
  }
  function renderReader() {
    connectorObserver.disconnect()
    const item = index.byId.get(state.item)
    container.dataset.selected = String(Boolean(item))
    $("toolbar-label").textContent = item
      ? `${dateLabel(item.date)} · ${item.speakers.join(", ")}`
      : "Search → select → follow connections"
    $<HTMLButtonElement>("back").disabled = state.depth === 0
    if (!item) {
      content.innerHTML = welcome
      return
    }
    const inResults = matches.some((result) => result.id === item.id)
    content.innerHTML = `${!inResults ? '<p class="scope-warning">This connected item is outside the current search. Your results are unchanged; Back returns to the previous view.</p>' : ""}
      <p class="reading-help">Each line connects directly to the selected item. Stacked cards are separate branches, not a sequence.</p>
      <div class="lineage"><svg class="connectors" aria-hidden="true" focusable="false"></svg>${branchSection("before", item)}
      <div class="focus-wrap"><article class="focus-card" aria-label="Selected item"><p class="eyebrow">Selected item</p><h2>${escape(item.label)}</h2><div class="focus-meta">${metadata(item)}</div><p class="proposition">${escape(item.proposition)}</p>${evidenceMarkup(item)}
      <details class="review" data-expand="review"><summary>Context &amp; review notes</summary><p>${escape(item.review_note || "No additional review note.")}</p>${item.evidence
        .map((e) => {
          const v = e.verification
          return v.notes || v.status
            ? `<p><strong>Statement verification · ${escape([v.status, v.veracity, v.confidence].filter(Boolean).join(" · "))}:</strong> ${escape(v.notes || "No verification note.")}</p><div class="source-links">${(v.sources || []).map((s) => sourceLink(s.url, s.title || "Verification source")).join("")}</div>`
            : ""
        })
        .join("")}</details>
      ${item.tags.length || item.entity_names.length ? `<div class="tags"><span class="tag-label">SEARCH BY ${item.tags.length ? "TAG OR " : ""}ENTITY</span>${[...new Set([...item.tags, ...item.entity_names])].map((tag) => `<button data-search="${escape(tag)}">${escape(tag)}</button>`).join("")}</div>` : ""}
      <p class="attribution">Dates show when the account appeared. An attributed account is not, by itself, proof of the underlying claim.</p></article></div>${branchSection("after", item)}</div>`
    for (const detail of content.querySelectorAll<HTMLDetailsElement>("details[data-expand]"))
      detail.open = state.expanded.includes(detail.dataset.expand!)
    connectorObserver.observe(content.querySelector(".lineage")!)
    drawConnectors()
  }
  function setSize(delta = 0) {
    state.readerSize = Math.max(16, Math.min(24, state.readerSize + delta))
    container.style.setProperty("--reader-size", `${state.readerSize}px`)
    $("text-size").textContent = `${state.readerSize}px`
    $<HTMLButtonElement>("smaller").disabled = state.readerSize === 16
    $<HTMLButtonElement>("larger").disabled = state.readerSize === 24
    scheduleConnectors()
  }
  function render() {
    if (query.value !== state.q) query.value = state.q
    setSize()
    renderResults()
    renderReader()
    resultsPane.scrollTop = state.sidebarScroll
    reader.scrollTop = state.readerScroll
    window.scrollTo({ top: state.windowScroll })
    storeState()
  }
  function scheduleConnectors() {
    cancelAnimationFrame(connectorFrame)
    connectorFrame = requestAnimationFrame(drawConnectors)
  }
  function drawConnectors() {
    const lineage = content.querySelector<HTMLElement>(".lineage")
    if (!lineage) return
    const branches = {
      before: [...lineage.querySelectorAll<HTMLElement>('.branch[data-direction="before"]')],
      after: [...lineage.querySelectorAll<HTMLElement>('.branch[data-direction="after"]')],
    }
    const gutter = Math.min(120, 26 + Math.max(branches.before.length, branches.after.length) * 12)
    lineage.style.setProperty("--connector-gutter", `${gutter}px`)
    const bounds = lineage.getBoundingClientRect(),
      selected = lineage.querySelector(".focus-card")!.getBoundingClientRect()
    const paths: string[] = []
    const markerId = `${data.id}-direct-arrow`
    for (const direction of ["before", "after"] as const)
      branches[direction].forEach((branch, i) => {
        const b = branch.getBoundingClientRect(),
          summary = branch.querySelector("summary")!.getBoundingClientRect()
        const entry = index[direction].get(state.item)![Number(branch.dataset.index)]
        const points = parallelConnector({
          direction,
          index: i,
          count: branches[direction].length,
          gutter,
          branchX: b.left - bounds.left - 1,
          branchY: summary.top - bounds.top + summary.height / 2,
          selectedX: selected.left - bounds.left - 1,
          selectedTop: selected.top - bounds.top,
          selectedBottom: selected.bottom - bounds.top,
        })
        const pathData = points
          .map(([x, y], at) => `${at ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`)
          .join(" ")
        const color = ["contradicts", "refutes", "retracts"].includes(entry.link.type)
          ? "var(--te-rust)"
          : "var(--te-green)"
        paths.push(
          `<g class="direct-edge" data-from="${escape(entry.link.from)}" data-to="${escape(entry.link.to)}" stroke="${color}"><path d="${pathData}" marker-end="url(#${escape(markerId)})"/><circle cx="${points[0][0]}" cy="${points[0][1]}" r="2.5" fill="var(--light)"/></g>`,
        )
      })
    const svg = lineage.querySelector("svg")!
    svg.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`)
    svg.innerHTML = `<defs><marker id="${escape(markerId)}" markerWidth="5" markerHeight="5" refX="4.5" refY="2.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L5,2.5 L0,5 Z" fill="context-stroke"/></marker></defs>${paths.join("")}`
  }

  $("search-form").addEventListener(
    "submit",
    (event) => {
      event.preventDefault()
      applySearch()
      editingSearch = false
    },
    { signal },
  )
  query.addEventListener(
    "input",
    () => {
      clearTimeout(searchTimer)
      searchTimer = window.setTimeout(applySearch, 150)
    },
    { signal },
  )
  query.addEventListener(
    "blur",
    () => {
      applySearch()
      editingSearch = false
    },
    { signal },
  )
  $("clear-search").addEventListener(
    "click",
    () => {
      query.value = ""
      applySearch()
      editingSearch = false
      query.focus()
    },
    { signal },
  )
  $("previous-page").addEventListener(
    "click",
    () => {
      editingSearch = false
      navigate({ page: state.page - 1 })
    },
    { signal },
  )
  $("next-page").addEventListener(
    "click",
    () => {
      editingSearch = false
      navigate({ page: state.page + 1 })
    },
    { signal },
  )
  $("back").addEventListener(
    "click",
    () => {
      if (state.depth) {
        remember()
        history.back()
      }
    },
    { signal },
  )
  $("show-results").addEventListener(
    "click",
    () => {
      navigate({ item: "" })
      query.focus({ preventScroll: true })
      container.scrollIntoView({ block: "start" })
    },
    { signal },
  )
  $("smaller").addEventListener(
    "click",
    () => {
      setSize(-2)
      remember()
    },
    { signal },
  )
  $("larger").addEventListener(
    "click",
    () => {
      setSize(2)
      remember()
    },
    { signal },
  )
  container.addEventListener(
    "click",
    (event) => {
      const target = (event.target as Element).closest<HTMLElement>(
        "[data-item], [data-search], [data-more]",
      )
      if (!target || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
      if (target.hasAttribute("data-item")) {
        event.preventDefault()
        // Keep Quartz's global anchor highlighter from scrolling past the incoming branches.
        event.stopPropagation()
        clearTimeout(searchTimer)
        editingSearch = false
        if (target.dataset.item !== state.item) {
          navigate({ item: target.dataset.item })
          reader.focus({ preventScroll: true })
        }
      } else if (target.hasAttribute("data-search")) {
        editingSearch = false
        query.value = target.dataset.search!
        applySearch()
        editingSearch = false
      } else {
        remember()
        const direction = target.dataset.more as Direction
        const firstNew = state[`${direction}Page`] * BRANCH_BATCH
        state[`${direction}Page`] += 1
        renderReader()
        reader.scrollTop = state.readerScroll
        content
          .querySelector<HTMLElement>(
            `.branch[data-direction="${direction}"][data-index="${firstNew}"] summary`,
          )
          ?.focus({ preventScroll: true })
        remember()
      }
    },
    { signal },
  )
  content.addEventListener(
    "toggle",
    (event) => {
      const detail = event.target
      if (!(detail instanceof HTMLDetailsElement) || !detail.dataset.expand || !detail.isConnected)
        return
      if (detail.open && detail.dataset.direction) {
        const entry = index[detail.dataset.direction as Direction].get(state.item)?.[
          Number(detail.dataset.index)
        ]
        const body = detail.querySelector<HTMLElement>(".branch-content")!
        if (entry && !body.childElementCount) body.innerHTML = branchBody(entry)
      }
      remember()
      scheduleConnectors()
    },
    { capture: true, signal },
  )
  for (const pane of [reader, resultsPane, window])
    pane.addEventListener(
      "scroll",
      () => {
        clearTimeout(scrollTimer)
        scrollTimer = window.setTimeout(remember, 80)
      },
      { passive: true, signal },
    )
  document.addEventListener("prenav", remember, { signal })
  window.addEventListener(
    "popstate",
    (event) => {
      clearTimeout(searchTimer)
      clearTimeout(scrollTimer)
      editingSearch = false
      // Own only this explorer's same-page entries. Cross-page navigation stays with Quartz.
      if (location.pathname !== path || event.state?.threadExplorer?.path !== path) return
      event.stopImmediatePropagation()
      state = { ...stateFromUrl(location.href, index), ...event.state.threadExplorer.state }
      render()
    },
    { capture: true, signal },
  )
  window.addEventListener(
    "hashchange",
    () => {
      const next = stateFromUrl(location.href, index)
      if (next.item !== state.item) {
        state = next
        render()
      }
    },
    { signal },
  )
  $("dataset-note").textContent =
    `${index.items.length.toLocaleString()} items · ${data.links.length.toLocaleString()} reviewed links`
  render()
  if (saved?.path === path) window.scrollTo({ top: state.windowScroll })
  else if (state.item || state.q) container.scrollIntoView({ block: "start" })
}

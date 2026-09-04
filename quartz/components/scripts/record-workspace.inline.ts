import {
  readNotebook,
  writeNotebook,
  recordKey,
  savedKey,
  citation,
  csvCell,
  type SavedItem,
} from "./research-notebook"
import {
  defaults,
  dateLabel,
  datalistOptions,
  assessmentLabel,
  entityFilterIds,
  entityReasons,
  entityViews,
  entityTypeLabel,
  escapeHtml as esc,
  filterRecords,
  highlight,
  label,
  matchPassage,
  matchesKind,
  outcomeFor,
  prepareRecords,
  readState,
  recordMetadata,
  recordUrl,
  stateUrl,
} from "./record-workspace-model"
import { normalizeRelativeURLs } from "../../util/path"
import type {
  Appearance,
  EpisodeMeta,
  IndexedRecord,
  Manifest,
  RecordItem,
  WorkspaceRoute,
  WorkspaceState,
} from "./record-workspace-model"

type Paragraph = {
  id: string
  index: number
  start: number
  text: string
  speaker: string
  anchor: string
  time: string
}
type Payload = { records: RecordItem[]; paragraphs?: Paragraph[] }
type SavedView = {
  workspace: string
  state: WorkspaceState
  depth: number
  listScroll: number
  readerScroll: number
  windowScroll?: number
  resultsWindowScroll?: number
  reading: boolean
  open: string[] | null
}
const requests = new Map<string, Promise<any>>()
const PAGE_SIZE = 20
function json<T>(url: string): Promise<T> {
  if (!requests.has(url)) {
    if (requests.size >= 10) requests.delete(requests.keys().next().value!)
    requests.set(
      url,
      fetch(url)
        .then((response) => {
          if (!response.ok) throw new Error(`Data request failed (${response.status})`)
          return response.json()
        })
        .catch((error) => {
          requests.delete(url)
          throw error
        }),
    )
  }
  return requests.get(url)!
}
const kindNames: Record<string, string> = {
  all: "All records",
  statement: "Statements",
  entity: "Entities",
  episode: "Episodes",
  event: "Events",
  relationship: "Relationships",
  source: "Research sources",
  mention: "Mentions",
  mentions: "Mentions",
  passage: "Transcript",
  transcript: "Transcripts",
  development: "Reviewed developments",
  about: "Statements about",
  by: "Said by",
}
const kindName = (kind: string) => kindNames[kind] || label(kind)
async function initWorkspace(root: HTMLElement) {
  if (root.dataset.initialized) return
  root.dataset.initialized = "true"
  const route: WorkspaceRoute = JSON.parse(root.dataset.route!)
  const path = location.pathname
  const mobile = () => window.matchMedia("(max-width: 700px)").matches
  const entityCatalog = route.catalog === "entity" && !route.entity
  const base = new URL(`${root.dataset.root}/`, location.href)
  const local = (href: string) => new URL(href.replace(/^\//, ""), base).href
  const safe = (href = "") => {
    try {
      const url = href.startsWith("/") ? new URL(local(href)) : new URL(href, base)
      return ["https:", "http:"].includes(url.protocol) ? esc(url.href) : "#"
    } catch {
      return "#"
    }
  }
  const asset = (file: string, revision = root.dataset.version!) =>
    `${local(`/assets/workspace/${file}`)}?v=${encodeURIComponent(revision)}`
  const $ = <T extends HTMLElement = HTMLElement>(selector: string) =>
    root.querySelector<T>(selector)!
  const abort = new AbortController()
  let active = true,
    timer: ReturnType<typeof setTimeout> | undefined,
    scrollTimer: ReturnType<typeof setTimeout> | undefined,
    readerGeneration = 0,
    size = 18
  window.addCleanup(() => {
    active = false
    abort.abort()
    clearTimeout(timer)
    clearTimeout(scrollTimer)
  })
  const live = () => active && root.isConnected
  const feedback = (message: string) => {
    if (live()) $(".rw-feedback").textContent = message
  }
  try {
    const manifest = await json<Manifest>(asset("manifest.json"))
    if (!live()) return
    if (manifest.schema !== 1)
      throw new Error("This view needs a newer site version. Refresh the page.")
    let state = readState(new URL(location.href), route)
    let notebook = readNotebook()
    const discovering = Boolean(
      route.home && !state.q && !state.item && !state.saved && !state.compare,
    )
    const load = (name: string) => json<Payload>(asset(name, manifest.revision))
    const payloads = route.entity
      ? [await load(`entities/${route.entity}.json`)]
      : route.episode
        ? [await load(`episodes/${route.episode}.json`)]
        : await Promise.all(
            (discovering
              ? ["development", "episode"].filter((k) => k in manifest.catalogs)
              : route.catalog === "all"
                ? Object.keys(manifest.catalogs)
                : [route.catalog]
            ).map((kind) => load(`catalogs/${kind}.json`)),
          )
    const extraKeys = new Set([state.item, ...notebook.map(savedKey), ...state.compare.split(",")])
    if (state.saved || state.compare || state.item.includes("::")) {
      const episodeIds = [
        ...new Set([...extraKeys].filter((k) => k.includes("::")).map((k) => k.split("::")[0])),
      ]
      const extras = await Promise.allSettled(
        episodeIds.filter((id) => manifest.episodes[id]).map((id) => load(`episodes/${id}.json`)),
      )
      for (const extra of extras)
        if (extra.status === "fulfilled")
          payloads.push({ records: extra.value.records.filter((r) => extraKeys.has(recordKey(r))) })
    }
    if (!live()) return
    const records = prepareRecords(
      payloads
        .flatMap((p) => p.records)
        .map((r) =>
          route.episode && ["statement", "relationship"].includes(r.kind)
            ? { ...r, date: manifest.episodes[route.episode].date }
            : r,
        ),
      manifest,
    )
    const byId = new Map(
      records.flatMap(
        (r) =>
          [
            [r.id, r],
            [recordKey(r), r],
          ] as [string, IndexedRecord][],
      ),
    )
    for (const [alias, id] of Object.entries(manifest.aliases || {}))
      if (byId.has(id)) byId.set(alias, byId.get(id)!)
    if (manifest.aliases?.[state.item]) state.item = manifest.aliases[state.item]
    const identity = (r: RecordItem) => (route.episode ? r.id : recordKey(r))
    const savedRecord = (item: SavedItem) => byId.get(savedKey(item))
    const filteredRecords = () =>
      state.saved
        ? records.filter((r) => notebook.some((item) => savedRecord(item) === r))
        : route.episode && state.kind !== "mentions"
          ? records.filter((r) => r.kind !== "mention")
          : records

    const restoring = history.state?.workspace === path
    let saved: SavedView =
      history.state?.workspace === path
        ? history.state
        : {
            workspace: path,
            state,
            depth: 0,
            listScroll: 0,
            readerScroll: 0,
            reading: Boolean(state.item),
            open: null,
          }
    let matches: IndexedRecord[] = []
    const entity = route.entity ? manifest.entities[route.entity] : undefined
    const episode = route.episode ? manifest.episodes[route.episode] : undefined
    if (entity || episode) $("h1").textContent = entity?.name || episode!.title
    $(".rw-overview").innerHTML = entity
      ? `<p>${esc(entityTypeLabel(entity.type))} · ${records.length.toLocaleString()} evidence records</p><details><summary>Aliases & record information</summary><p>${esc(entity.aliases.length ? `Also known as: ${entity.aliases.join(", ")}` : "No aliases recorded.")}</p><p>${esc(entity.tags.join(" · "))}</p><p>${esc(entity.verification.note || "")}</p>${entity.verification.source_url ? `<a href="${safe(entity.verification.source_url)}" target="_blank" rel="noopener">${esc(entity.verification.source_title || "Identity source")} ↗</a>` : ""}</details>`
      : episode
        ? `<p>${esc(dateLabel(episode.date))} · ${esc(episode.channel)}</p><a href="${safe(episode.url)}" target="_blank" rel="noopener">Original source ↗</a>`
        : `<p>${records.length.toLocaleString()} ${entityCatalog ? "entities" : "searchable records"}</p>`
    const kinds = entity
      ? [
          ...entityViews
            .filter(
              (v) =>
                v.kind !== "by" ||
                state.kind === "by" ||
                records.some((r) => r.kind === "statement" && r.speakerId === entity.id),
            )
            .map((v) => v.kind),
          ...(["about", "factual_claim"].includes(state.kind) ? [state.kind] : []),
        ]
      : episode
        ? ["all", "passage", "statement", "relationship", "event"]
        : route.catalog === "all"
          ? [
              "all",
              "statement",
              ...(state.saved ? ["passage", "mentions"] : ["transcript"]),
              "entity",
              "episode",
              "event",
              "source",
              "development",
              "relationship",
            ]
          : ["all", ...new Set(records.map((r) => r.type))]
    const filterKindName = (kind: string) =>
      entity && entityViews.some((v) => v.kind === kind)
        ? entityViews.find((v) => v.kind === kind)!.label
        : kind === "all"
          ? entityCatalog
            ? "All entity types"
            : entity || episode
              ? "All records"
              : kindName(kind)
          : entityCatalog
            ? entityTypeLabel(kind)
            : kindName(kind)
    const options = (values: string[], current: string) =>
      values
        .map(
          (value) =>
            `<option value="${esc(value)}"${value === current ? " selected" : ""}>${esc(filterKindName(value))}</option>`,
        )
        .join("")
    const entityIds = new Set(records.flatMap(entityFilterIds))
    const entities = [...entityIds]
      .map((id) => manifest.entities[id])
      .filter(Boolean)
      .filter((e) => e.id !== route.entity)
      .sort((a, b) => a.name.localeCompare(b.name))
    const searchLabel = entityCatalog
      ? "Find an entity"
      : entity
        ? "Search this entity’s records"
        : episode
          ? "Search within this episode"
          : "Search this catalog"
    const kindLabel = entityCatalog
      ? "Entity type"
      : entity || episode
        ? "Evidence type"
        : "Record type"
    $(".rw-controls").innerHTML = `
      <form class="rw-search" role="search"><label class="sr-only" for="rw-query">${searchLabel}</label><input id="rw-query" type="search" name="q" placeholder="${entityCatalog ? "Find a name, alias, or organization…" : "Search this research…"}" autocomplete="off"><button type="submit">Search</button></form>
      <div class="rw-filter-line"><label class="rw-kind-select"><span>${entity ? "Show" : "Search in"}</span><select name="kind">${options(kinds, state.kind)}</select></label>
      <details class="rw-filter-details"><summary>Filters</summary><div id="rw-filter-panel"><div class="rw-filters">
      <label class="rw-tag-filter"><span>${entity ? "Also about" : "About"}</span><input type="search" name="entity" list="rw-entity-options" placeholder="Person, place, organization" autocomplete="off"><datalist id="rw-entity-options">${datalistOptions(entities)}</datalist></label>
      <label><span>Speaker</span><input type="search" name="speaker" list="rw-speaker-options" placeholder="Any speaker" autocomplete="off"><datalist id="rw-speaker-options">${datalistOptions([...new Set(records.map((r) => r.speaker).filter(Boolean))].sort().map((name) => ({ name })))}</datalist></label>
      <label class="rw-date-filter"><span>${route.catalog === "event" ? "Event date from" : "From"}</span><input type="date" name="from"></label><label class="rw-date-filter"><span>To</span><input type="date" name="to"></label>
      <label><span>Assessment</span><select name="outcome"><option value="">Any assessment</option>${[
        ...new Set(records.map(outcomeFor)),
      ]
        .sort()
        .map((value) => `<option value="${esc(value)}">${esc(assessmentLabel(value))}</option>`)
        .join("")}</select></label>
      </div><p class="rw-help" id="rw-filter-help">Filters apply to the records shown.</p></div></details><button type="button" data-action="reset" class="rw-text-button">Clear filters</button></div>
      <p class="rw-view-help" id="rw-view-help" hidden></p><div class="rw-active-filters"></div>`
    $(".rw-result-options").innerHTML =
      `<label><span class="sr-only">Sort results</span><select name="sort"><option value="relevance">Most relevant</option>${entityCatalog ? '<option value="name">Name A–Z</option><option value="mentions">Most mentions</option>' : '<option value="newest">Newest first</option><option value="oldest">Oldest first</option>'}</select></label>${entity || episode ? '<button type="button" data-action="group" aria-pressed="false">Group by episode</button>' : ""}`
    if (kinds.length < 3 && !entity && !episode && route.catalog !== "all")
      $(".rw-kind-select").hidden = true
    if (!records.some((r) => r.date) || entityCatalog)
      root.querySelectorAll<HTMLElement>(".rw-date-filter").forEach((el) => (el.hidden = true))
    if (new Set(records.map(outcomeFor)).size <= 1)
      $("[name=outcome]").closest<HTMLElement>("label")!.hidden = true
    function remember() {
      if (location.pathname !== path) return
      saved = {
        ...saved,
        state: { ...state },
        listScroll: $(".rw-result-scroll").scrollTop,
        readerScroll: $(".rw-reader").scrollTop,
        windowScroll: window.scrollY,
        resultsWindowScroll: saved.reading ? saved.resultsWindowScroll : window.scrollY,
        open: [...root.querySelectorAll<HTMLDetailsElement>(".rw-reader details[open][id]")].map(
          (el) => el.id,
        ),
      }
      history.replaceState(
        { ...history.state, ...saved },
        "",
        stateUrl(new URL(location.href), state, route),
      )
    }
    function change(patch: Partial<WorkspaceState>, reset = true) {
      clearTimeout(timer)
      clearTimeout(scrollTimer)
      remember()
      state = { ...state, ...patch }
      if (state.kind === "mentions") state.entity = ""
      if (reset) state.page = 1
      saved = {
        ...saved,
        state,
        depth: saved.depth + 1,
        listScroll: reset || patch.page !== undefined ? 0 : saved.listScroll,
        readerScroll: 0,
        reading: Boolean(state.item),
        open: null,
      }
      history.pushState(saved, "", stateUrl(new URL(location.href), state, route))
      render()
      if (patch.view === "workspace") $(".rw-reading").scrollIntoView({ block: "start" })
      if ((mobile() || entityCatalog) && (patch.item || patch.page !== undefined)) {
        $(patch.item ? ".rw-reading" : ".rw-results").scrollIntoView({ block: "start" })
        remember()
      }
    }
    const chosenApp = (r: RecordItem) =>
      r.appearances[Math.min(state.appearance, r.appearances.length - 1)]
    const itemUrl = (record: RecordItem) =>
      recordUrl({ ...record, id: identity(record) }, new URL(location.href), state, route, base)
        .href
    const topicUrl = (id: string) => local(`/index/threads?entity=${encodeURIComponent(id)}`)
    function recordActions(r: RecordItem) {
      const key = recordKey(r),
        isSaved = notebook.some((item) => savedRecord(item) === r)
      const comparing = state.compare.split(",").includes(key)
      return `<div class="rw-record-actions"><button type="button" data-action="save" data-key="${esc(key)}" aria-pressed="${isSaved}">${isSaved ? "Saved ✓" : "Save evidence"}</button><button type="button" data-action="compare" data-key="${esc(key)}" aria-pressed="${comparing}">${comparing ? "In comparison ✓" : "Compare"}</button><button type="button" data-action="citation" data-key="${esc(key)}">Copy citation</button></div>`
    }
    function persistNotebook() {
      const durable = writeNotebook(notebook)
      feedback(
        durable
          ? "Saved on this device."
          : "Available for this session. Device storage is unavailable; export your research to keep it.",
      )
    }
    function topicCards() {
      return (manifest.topics || [])
        .map(
          (topic) =>
            `<a class="rw-topic-card" href="${esc(topicUrl(topic.id))}"><span class="rw-eyebrow">Topic</span><h2>${esc(topic.name)}</h2><p>Follow attributed statements, responses, and their original source passages.</p><small>${topic.count.toLocaleString()} reviewed developments · ${topic.episodes} episodes</small><span class="rw-card-action">Explore topic →</span></a>`,
        )
        .join("")
    }
    function renderDiscovery() {
      const topicIndex = Boolean(route.topics && !state.entity && !state.q && !state.item)
      const landing = discovering || topicIndex
      root.dataset.discovery = String(landing)
      const discovery = $(".rw-discovery")
      discovery.hidden = !landing
      if (landing) {
        const latest = records
          .filter((r) => r.kind === "development")
          .sort((a, b) => b.date.localeCompare(a.date))
          .slice(0, 3)
        discovery.innerHTML = `<div class="rw-discover-heading"><p class="rw-eyebrow">${topicIndex ? "Ways into the research" : "Follow a question. Read the evidence."}</p><h1>${topicIndex ? "Explore the topics." : "Where do you want to begin?"}</h1><p>Follow a topic across episodes, inspect what was said, and return to the source.</p></div>
          <form class="rw-discover-search" role="search" action="${safe("/index/explorer")}"><label for="discover-query" class="sr-only">Search all research</label><input id="discover-query" name="q" type="search" placeholder="Search a person, topic, or phrase…"><button type="submit">Search research →</button></form>
          <div class="rw-section-heading"><h2>Start with a topic</h2><a href="${safe("/index/explorer")}">Browse all research →</a></div><div class="rw-topic-grid">${topicCards() || "<p>No topic views are available in this publication.</p>"}</div>
          ${topicIndex ? `<details class="rw-thread-directory"><summary>About these topics and the reviewed thread</summary><p>Topics are views of existing reviewed developments linked through their statements. They are not separate investigations or findings.</p>${(manifest.threads || []).map((t) => `<p>${recordLink(`/threads/${t.id}`, t.title)}</p>`).join("")}</details>` : `<div class="rw-section-heading"><h2>Recent developments</h2><a href="${safe("/index/threads")}">All topics →</a></div><div class="rw-recent-grid">${latest.map((r) => `<a href="${safe(r.href)}"><time>${esc(dateLabel(r.date))}</time><h3>${esc(r.text)}</h3><p>${esc(r.notes || "")}</p></a>`).join("")}</div>`}
          <p class="rw-coverage">${Object.keys(manifest.episodes).length} source episodes · ${manifest.catalogs.statement?.toLocaleString() || 0} attributed statements · Coverage through ${esc(
            dateLabel(
              Object.values(manifest.episodes)
                .map((ep) => ep.date)
                .sort()
                .at(-1) || "",
            ),
          )}. Follow the evidence before drawing conclusions.</p>`
      }
      const topic = (manifest.topics || []).find(
        (t) => t.id === state.entity || t.name === state.entity,
      )
      if (topic && route.topics) {
        $(".rw-heading h1").textContent = topic.name
        $(".rw-heading .rw-eyebrow").textContent = "Topic"
        $(".rw-overview").textContent =
          `${topic.count.toLocaleString()} reviewed developments · ${topic.episodes} episodes`
        $(".rw-results-heading h2").textContent = "Chronology"
      }
      const overview = $(".rw-topic-intro")
      overview.hidden = landing || Boolean(state.item) || state.saved || (!entity && !topic)
      if (!overview.hidden) {
        const name = entity?.name || topic!.name
        const relevantTopics = entity
          ? (manifest.topics || []).filter((t) =>
              records.some((r) => r.kind === "development" && r.entityIds.includes(t.id)),
            )
          : []
        overview.innerHTML = entity
          ? `<p>Explore statements, documented connections, and source passages linked to <strong>${esc(name)}</strong>.</p><div class="rw-overview-links"><button data-kind="statement">Statements</button>${records.some((r) => r.kind === "statement" && r.speakerId === entity.id) ? `<button data-kind="by">Said by ${esc(name)}</button>` : ""}<button data-kind="relationship">Connections</button><button data-kind="event">Events</button><button data-kind="mentions">All mentions</button></div>${relevantTopics.length ? `<p class="rw-topic-links">Related topics: ${relevantTopics.map((t) => `<a href="${esc(topicUrl(t.id))}">${esc(t.name)}</a>`).join(" · ")}</p>` : ""}`
          : `<p>Reviewed developments linked through statements about or attributed to <strong>${esc(name)}</strong>. Dates show when the account appeared.</p><div class="rw-overview-links"><a href="${safe(`/entities/${topic!.id}`)}">Entity record →</a><a href="${safe(`/index/explorer?entity=${encodeURIComponent(topic!.id)}&kind=statement`)}">All statements →</a></div><p class="rw-help">A reviewed narrative connection does not establish the underlying allegation.</p>`
      }
    }
    function renderCollection() {
      const collection = $(".rw-collection"),
        comparison = state.compare.split(",").filter(Boolean)
      collection.hidden = !state.saved && !comparison.length
      if (collection.hidden) return
      if (state.saved) {
        $(".rw-heading h1").textContent = "Saved research"
        $(".rw-heading .rw-eyebrow").textContent = "Notebook"
        $(".rw-overview").textContent =
          `${notebook.length} saved ${notebook.length === 1 ? "item" : "items"}`
      }
      collection.innerHTML = `${
        state.saved
          ? `<div class="rw-collection-heading"><div><h2>Your evidence, in one place.</h2><p>Saved on this device. Add notes and export citations to take your research with you.</p></div>${notebook.length ? '<div><button data-action="export-md">Export Markdown</button> <button data-action="export-csv">Export CSV</button></div>' : ""}</div>${
              notebook.length
                ? `<details class="rw-saved-notes"><summary>Research notes (${notebook.length})</summary>${notebook
                    .map((item) => {
                      const r = savedRecord(item)
                      return `<div class="rw-saved-note"><label>${esc(r?.text || `Unavailable record: ${item.id}`)}<textarea data-note="${esc(savedKey(item))}" rows="2" placeholder="Your research note…">${esc(item.note)}</textarea></label><button data-remove="${esc(savedKey(item))}">Remove saved item</button>${r ? "" : "<p>This record is not available in the current publication. Your note is retained.</p>"}</div>`
                    })
                    .join("")}</details>`
                : `<p class="rw-empty">Open a statement or transcript passage and choose <strong>Save evidence</strong>. ${recordLink("/", "Discover research")}</p>`
            }`
          : ""
      }
        ${
          comparison.length
            ? `<section class="rw-comparison" aria-label="Compare evidence"><div class="rw-section-heading"><h2>Compare evidence</h2><button data-action="clear-compare">Close comparison</button></div><p class="rw-help">Compare wording, attribution, and sources. Similarity alone does not establish agreement or contradiction.</p><div class="rw-compare-grid">${comparison
                .map((key, index) => {
                  const r = byId.get(key)
                  if (!r) return `<article><p>Record unavailable: ${esc(key)}</p></article>`
                  const appearance = Number(state.compareAt.split(",")[index]) || 0
                  const app = r.appearances[Math.min(appearance, r.appearances.length - 1)]
                  const ep = app && manifest.episodes[app.episode]
                  return `<article><p class="rw-eyebrow">${esc(kindName(r.kind))}</p><h3>${esc(r.text)}</h3><dl><dt>Speaker</dt><dd>${esc(r.speaker || "Not recorded")}${r.reportedBy ? ` · reported by ${esc(r.reportedBy)}` : ""}</dd><dt>Source date</dt><dd>${esc(dateLabel(ep?.date || r.date))}</dd><dt>Source</dt><dd>${esc(ep?.title || r.domain || "Not recorded")}${app ? ` · ${esc(app.time)}` : ""}</dd><dt>Assessment</dt><dd>${esc(r.kind === "development" ? "Narrative link reviewed; allegation not assessed here" : assessmentLabel(outcomeFor(r)))}</dd></dl>${app?.snippet ? `<blockquote>${esc(app.snippet)}</blockquote>` : ""}${recordLink(r.href, "Open record")} <button data-action="compare" data-key="${esc(key)}" aria-label="Remove ${esc(r.text)} from comparison">Remove from comparison</button></article>`
                })
                .join(
                  "",
                )}${comparison.length === 1 ? '<article class="rw-compare-empty"><h3>Choose another statement</h3><p>Open a second record below and choose Compare. Your first selection stays here.</p></article>' : ""}</div></section>`
            : ""
        }`
    }
    let transcriptGeneration = 0
    async function renderTranscriptSearch() {
      const generation = ++transcriptGeneration
      if (state.kind !== "transcript") return
      $(".rw-count").textContent = state.q ? "Searching transcripts…" : "Search source passages"
      $(".rw-list").innerHTML =
        '<li class="rw-empty">Enter words or a phrase to search across episode transcripts.</li>'
      $(".rw-pagination").innerHTML = ""
      if (!state.q.trim()) return
      try {
        const pagefind = await import(local("/pagefind/pagefind.js"))
        const result = await pagefind.search(state.q, { filters: { kind: "transcript" } })
        if (!live() || generation !== transcriptGeneration) return
        const pages = Math.max(1, Math.ceil(result.results.length / PAGE_SIZE))
        state.page = Math.min(state.page, pages)
        const hits = await Promise.all(
          result.results
            .slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE)
            .map(
              (hit: {
                data: () => Promise<{ url: string; excerpt: string; meta: { title: string } }>
              }) => hit.data(),
            ),
        )
        if (!live() || generation !== transcriptGeneration) return
        $(".rw-count").textContent = `${result.results.length.toLocaleString()} transcript passages`
        $(".rw-list").innerHTML =
          hits
            .map((hit) => {
              let url = new URL(hit.url, base)
              if (!url.pathname.startsWith(base.pathname))
                url = new URL(hit.url.replace(/^\//, ""), base)
              url.searchParams.set("q", state.q)
              const excerpt = document.createElement("div")
              excerpt.innerHTML = hit.excerpt
              return `<li><a class="rw-result" href="${safe(url.href)}"><div class="rw-result-topline">Transcript passage</div><div class="rw-result-text">${esc(hit.meta.title)}</div><p class="rw-result-match">${highlight(excerpt.textContent || "", state.q)}</p><p class="rw-result-source">Open passage with surrounding context →</p></a></li>`
            })
            .join("") ||
          '<li class="rw-empty">No transcript passages match. Try fewer words or check the spelling.</li>'
        $(".rw-pagination").innerHTML =
          `<button data-page="${state.page - 1}" aria-label="Previous results page" ${state.page <= 1 ? "disabled" : ""}>←</button><span>Page ${state.page} of ${pages}</span><button data-page="${state.page + 1}" aria-label="Next results page" ${state.page >= pages ? "disabled" : ""}>→</button>`
      } catch {
        if (live() && generation === transcriptGeneration)
          $(".rw-list").innerHTML =
            '<li class="rw-empty" role="alert">Transcript search could not load. <button data-action="retry-transcripts">Try again</button> or browse Episodes.</li>'
      }
    }
    function resultHtml(r: IndexedRecord) {
      const passage = matchPassage(r, state.q),
        app = r.appearances.find((a) => a.episode === route.episode) || r.appearances[0],
        ep = manifest.episodes[app?.episode],
        metadata = recordMetadata(r)
      return `<li><a class="rw-result" ${r.kind === "entity" ? "" : `data-record="${esc(identity(r))}"`} href="${esc(itemUrl(r))}" ${byId.get(state.item) === r ? 'aria-current="true"' : ""}><div class="rw-result-topline"><span>${entity && r.kind === "statement" && r.type === "factual_claim" ? `<span class="rw-review-badge" data-outcome="${esc(outcomeFor(r))}">${esc(assessmentLabel(outcomeFor(r)))}</span>` : entityCatalog ? esc(entityTypeLabel(r.type)) : `${esc(kindName(r.kind))}${r.type !== r.kind ? ` · ${esc(label(r.type))}` : ""}`}</span>${r.kind === "entity" ? "<span>Open entity →</span>" : byId.get(state.item) === r ? "<span>Reading ↗</span>" : ""}</div><div class="rw-result-text">${highlight(r.text.slice(0, 270) + (r.text.length > 270 ? "…" : ""), state.q)}</div>${state.q && passage.label !== "Record" ? `<p class="rw-result-match"><small>Matched in ${esc(passage.label.toLowerCase())}</small>${highlight(passage.text, state.q)}</p>` : ""}${metadata.label || metadata.date ? `<div class="rw-result-meta">${metadata.label ? `<span>${esc(metadata.label)}</span>` : ""}${metadata.date ? `<time>${esc(metadata.date)}</time>` : ""}</div>` : ""}${entity ? `<p class="rw-result-why">${esc(entityReasons(r, entity.id).join(" · "))}</p>` : ep ? `<p class="rw-result-source">${esc(ep.title)} · ${esc(app.time)}</p>` : ""}</a></li>`
    }
    function renderResults() {
      matches = filterRecords(filteredRecords(), state, route.entity)
      if (entity) {
        const view = entityViews.find((v) => v.kind === state.kind)
        $(".rw-view-help").textContent =
          view?.help ||
          "Records explicitly linked to this entity. Original classifications are unchanged."
        $(".rw-results-heading h2").textContent = state.kind === "claims" ? "Claims" : "Results"
        const outcomes = [
          ...new Set(
            records
              .filter((r) => matchesKind(r, state.kind, entity.id) && r.kind === "statement")
              .map(outcomeFor),
          ),
        ].sort()
        const review = $<HTMLSelectElement>("[name=outcome]")
        review.closest<HTMLElement>("label")!.hidden = !outcomes.length && !state.outcome
        if (state.outcome && !outcomes.includes(state.outcome)) outcomes.push(state.outcome)
        review.innerHTML =
          '<option value="">Any assessment</option>' +
          outcomes
            .map((value) => `<option value="${esc(value)}">${esc(assessmentLabel(value))}</option>`)
            .join("")
      }

      for (const key of [
        "q",
        "kind",
        "entity",
        "speaker",
        "from",
        "to",
        "outcome",
        "sort",
      ] as const) {
        const control = $<HTMLInputElement>(`[name="${key}"]`)
        if (control && document.activeElement !== control) control.value = state[key]
      }
      root.dataset.searchScope = state.kind
      $(".rw-result-options").hidden = state.kind === "transcript"
      $(".rw-filter-details").hidden = state.kind === "transcript"
      $(".rw-tag-filter").hidden = state.kind === "mentions" || !entities.length
      $("#rw-filter-help").hidden = state.kind === "mentions" || !entities.length
      const choosingEntity = entityCatalog || state.kind === "entity"
      $(".rw-tag-filter > span").textContent = choosingEntity
        ? "Entity"
        : entity
          ? "Also tagged with"
          : "Tagged entity"
      $("#rw-filter-help").textContent = choosingEntity
        ? "Find canonical names and aliases."
        : "About filters use explicit record tags. Shared mentions do not establish a connection."
      $("[name=speaker]").closest<HTMLElement>("label")!.hidden = !records.some((r) => r.speaker)
      const activeFilters = ["kind", "entity", "speaker", "from", "to", "outcome"].filter(
        (key) =>
          state[key as keyof WorkspaceState] &&
          (key !== "kind" || (!entity && state.kind !== "all")),
      )
      const filterToggle = $(".rw-filter-toggle")
      if (filterToggle)
        filterToggle.textContent = `Filters${activeFilters.length ? ` (${activeFilters.length})` : ""}`
      $(".rw-active-filters").innerHTML = ["q", ...activeFilters]
        .filter((key) => state[key as keyof WorkspaceState])
        .map(
          (key) =>
            `<button type="button" data-clear="${key}" aria-label="Clear ${key === "kind" ? kindLabel.toLowerCase() : key} filter">${esc(key === "q" ? "Search" : key === "kind" ? kindLabel : label(key))}: ${esc(key === "kind" ? filterKindName(state.kind) : key === "entity" ? manifest.entities[state.entity]?.name || state.entity : state[key as keyof WorkspaceState])} ×</button>`,
        )
        .join("")
      const pages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE))
      if (state.kind !== "transcript") state.page = Math.min(state.page, pages)
      const visible = matches.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE)
      let html = visible.map(resultHtml).join("")
      if (state.group || (state.q && state.kind === "all" && !entity && !episode)) {
        const groups = new Map<string, IndexedRecord[]>()
        for (const r of visible) {
          const key = state.group ? r.appearances[0]?.episode || "" : r.kind
          if (!groups.has(key)) groups.set(key, [])
          groups.get(key)!.push(r)
        }
        html = [...groups]
          .map(
            ([key, rows]) =>
              `<li class="rw-source-group"><h3>${esc(state.group ? manifest.episodes[key]?.title || "Other records" : kindName(key))}</h3><ol>${rows.map(resultHtml).join("")}</ol></li>`,
          )
          .join("")
      }
      $(".rw-list").innerHTML =
        html ||
        '<li class="rw-empty">No records match. Try a broader phrase or clear a filter.</li>'
      $(".rw-count").textContent = `${matches.length.toLocaleString()} found`
      $(".rw-pagination").innerHTML =
        `<button type="button" data-page="${state.page - 1}" aria-label="Previous results page" ${state.page <= 1 ? "disabled" : ""}>←</button><span>Page ${state.page} of ${pages}</span><button type="button" data-page="${state.page + 1}" aria-label="Next results page" ${state.page >= pages ? "disabled" : ""}>→</button>`
      root.querySelector('[data-action="group"]')?.setAttribute("aria-pressed", String(state.group))
      $(".rw-result-scroll").scrollTop = saved.listScroll
    }
    const recordLink = (href: string, title: string) =>
      `<a href="${safe(href)}">${esc(title)} →</a>`
    async function linkedTranscript(ep: EpisodeMeta) {
      try {
        const payload = await json<{ html: string }>(asset(`../transcripts/${ep.slug}.json`))
        const content = document.createElement("div")
        content.innerHTML = payload.html
        normalizeRelativeURLs(content, local(`/episodes/${ep.slug}`))
        if (state.q.trim()) {
          const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT)
          const nodes: Text[] = []
          while (walker.nextNode()) nodes.push(walker.currentNode as Text)
          for (const node of nodes) {
            const marked = highlight(node.data, state.q)
            if (!marked.includes("<mark>")) continue
            const span = document.createElement("span")
            span.innerHTML = marked
            node.replaceWith(span)
          }
        }
        return content.innerHTML
      } catch {
        // The existing paragraph data remains readable if a transcript asset is unavailable.
        return ""
      }
    }
    function transcriptTools(payload: Payload, inline = false) {
      const paragraphs = payload.paragraphs || []
      return `<div class="rw-transcript-tools"><div>${inline ? "" : "<h2>Full transcript</h2>"}<p>${paragraphs.length.toLocaleString()} passages · Continuous reading</p></div><label><span${inline ? ' class="sr-only"' : ""}>Jump to a passage</span><select name="transcript-jump"><option value="">Jump to a timestamp</option>${paragraphs.map((p) => `<option value="${esc(p.id)}" ${p.id === state.item ? "selected" : ""}>${esc(p.time)} · ${esc(p.speaker)}</option>`).join("")}</select></label>${inline ? "" : '<button type="button" data-action="smaller" aria-label="Decrease transcript text size">A−</button><button type="button" data-action="larger" aria-label="Increase transcript text size">A+</button>'}</div><p class="rw-caveat">Auto-transcribed; speaker identification may be imperfect. Linked names open entity records, not verification of the claims.</p>`
    }
    function transcriptFallback(ep: EpisodeMeta, payload: Payload) {
      const paragraphRecords = new Map(payload.records.map((record) => [record.id, record]))
      return (
        (payload.paragraphs || [])
          .map((p) => {
            const record = paragraphRecords.get(p.id)
            return `<section id="${esc(p.id.replace(/^passage-/, ""))}" class="rw-transcript-passage"><header><strong>${esc(p.time)} · ${esc(p.speaker)}</strong></header><p>${highlight(p.text, state.q)}</p><div class="rw-tags">${(record?.entityIds || []).map((id) => recordLink(`/entities/${id}`, manifest.entities[id]?.name || id)).join("")}</div>${recordLink(`/episodes/${ep.slug}?item=${p.id}`, "Passage details")}</section>`
          })
          .join("") || "<p>No transcript is recorded for this source.</p>"
      )
    }
    async function renderTranscript(restoreWindow = false) {
      if (!episode) return
      root.dataset.mode = state.view
      root.querySelectorAll<HTMLAnchorElement>("[data-episode-view]").forEach((link) => {
        const view = link.dataset.episodeView as WorkspaceState["view"]
        link.href = stateUrl(new URL(location.href), { ...state, view }, route).href
        if (view === state.view) link.setAttribute("aria-current", "page")
        else link.removeAttribute("aria-current")
      })
      const transcript = $(".rw-transcript")
      transcript.hidden = state.view !== "transcript"
      if (transcript.hidden) return
      transcript.innerHTML = `${transcriptTools(payloads[0])}<div class="rw-linked-transcript"><p role="status">Loading full transcript…</p></div>`
      const body = transcript.querySelector<HTMLElement>(".rw-linked-transcript")!
      const html = await linkedTranscript(episode)
      if (!live() || !body.isConnected) return
      body.innerHTML = html || transcriptFallback(episode, payloads[0])
      if (!restoreWindow) scrollToTranscriptSelection()
    }
    function sourceHtml(r: RecordItem, app: Appearance) {
      const ep = manifest.episodes[app.episode]
      let external: URL | undefined
      try {
        if (ep?.url) external = new URL(ep.url)
      } catch {
        /* Keep the internal transcript available. */
      }
      if (external && /(^|\.)youtube\.com$|(^|\.)youtu\.be$/.test(external.hostname))
        external.searchParams.set("t", `${Math.floor(app.at)}s`)
      return `<section class="rw-evidence"><p class="rw-eyebrow">Source evidence</p>${r.appearances.length > 1 ? `<label class="rw-appearance"><span>Source appearance (${r.appearances.length})</span><select name="appearance">${r.appearances.map((a, i) => `<option value="${i}" ${i === state.appearance ? "selected" : ""}>${esc(dateLabel(manifest.episodes[a.episode]?.date || ""))} · ${esc(manifest.episodes[a.episode]?.title || a.episode)} · ${esc(a.time)}</option>`).join("")}</select></label>` : ""}<h3>${esc(ep?.title || "Source not recorded")}</h3><p class="rw-source-meta">${esc(dateLabel(ep?.date || ""))} · ${esc(app.time)}</p>${r.kind !== "passage" && r.kind !== "mention" ? `<blockquote>${highlight(app.snippet || "No excerpt attached. Check the transcript.", state.q)}</blockquote>` : ""}${app.note ? `<p>${esc(app.note)}</p>` : ""}<div class="rw-source-actions">${ep ? recordLink(`/episodes/${ep.slug}?view=transcript#${app.anchor}`, "Full transcript") : ""}${external ? `<a href="${safe(external.href)}" target="_blank" rel="noopener">Original source ↗</a>` : ""}</div><details id="rw-context"><summary>Read surrounding transcript</summary><div class="rw-context-body" data-episode="${esc(app.episode)}" data-index="${app.index}"><p>Loading source context…</p></div></details></section>`
    }
    async function renderReader() {
      const generation = ++readerGeneration
      const r = byId.get(state.item),
        selected = state.item
      if (r) state.appearance = Math.min(state.appearance, Math.max(0, r.appearances.length - 1))
      root.dataset.reading = String(Boolean(state.item) && saved.reading)
      const back = $<HTMLButtonElement>('[data-action="back"]')
      if (back) back.disabled = history.length <= 1
      if (entity) $<HTMLButtonElement>('[data-action="results"]').disabled = !r
      $(".rw-selection-label").textContent = r ? `${label(r.kind)} detail` : ""
      if (!r) {
        $(".rw-content").innerHTML =
          `<div class="rw-welcome"><p>${state.item ? "Record unavailable in this view. Select another result." : "Select a result."}</p></div>`
        return
      }
      if (r.kind === "episode") {
        const ep = manifest.episodes[r.id]
        const readerScroll = saved.readerScroll
        $(".rw-selection-label").textContent = "Full episode transcript"
        $(".rw-content").innerHTML =
          `<article class="rw-episode-reader" aria-label="Selected episode transcript"><p class="rw-eyebrow">Episode transcript</p><h2 class="rw-record-title">${esc(r.text)}</h2><p class="rw-source-meta">${esc(dateLabel(r.date))} · ${esc(r.speaker)}</p><div class="rw-source-actions">${recordLink(`${r.href}?view=transcript`, "Open full page")}${recordLink(r.href, "Search this episode’s evidence")}${ep?.url ? `<a href="${safe(ep.url)}" target="_blank" rel="noopener">Original source ↗</a>` : ""}</div><div class="rw-episode-transcript"><p role="status">Loading full transcript…</p></div></article>`
        try {
          const [payload, html] = await Promise.all([
            load(`episodes/${r.id}.json`),
            ep ? linkedTranscript(ep) : Promise.resolve(""),
          ])
          if (!live() || generation !== readerGeneration) return
          $(".rw-episode-transcript").innerHTML =
            `${transcriptTools(payload, true)}<div class="rw-linked-transcript">${html || (ep ? transcriptFallback(ep, payload) : "No transcript is recorded for this source.")}</div>`
          $(".rw-reader").scrollTop = readerScroll
        } catch {
          if (live() && generation === readerGeneration)
            $(".rw-episode-transcript").innerHTML =
              `<p>Could not load the transcript. ${recordLink(`${r.href}?view=transcript`, "Open the episode to retry")}</p>`
        }
        return
      }
      const app = chosenApp(r)
      const outcome = outcomeFor(r),
        verification = r.verification,
        metadata = recordMetadata(
          r,
          app && r.kind === "statement" ? manifest.episodes[app.episode]?.date : undefined,
        )
      const sources =
        verification.sources ||
        (verification.source_url
          ? [{ url: verification.source_url, title: verification.source_title }]
          : [])
      const contextName =
        r.kind === "mention"
          ? "Transcript mention"
          : r.kind === "passage"
            ? "Transcript passage"
            : entity && r.kind === "statement"
              ? [
                  r.speakerId === route.entity ? "Said by" : "",
                  r.entityIds.includes(route.entity!) ? "About" : "",
                ]
                  .filter(Boolean)
                  .join(" & ") + ` ${entity.name}`
              : kindName(r.kind)
      const caveat =
        r.kind === "mention"
          ? "A transcript mention is not necessarily a claim about this entity."
          : r.kind === "statement"
            ? r.type === "factual_claim"
              ? "A factual claim is an assertion that can be examined—not an established fact. Extracted wording may not be verbatim."
              : "Extracted statement, not necessarily verbatim. Attribution does not establish the underlying claim."
            : r.kind === "relationship"
              ? "An extracted relationship supported by the recorded excerpts—not an independently verified finding."
              : r.kind === "event"
                ? "An event recorded in the research dataset. Dates may be approximate; inspect the source wording."
                : r.kind === "passage"
                  ? "Automatically transcribed source material; speaker identification may be imperfect."
                  : r.kind === "development"
                    ? "A reviewed change in the on-channel account. Review establishes the narrative link, not the underlying allegation."
                    : ""
      $(".rw-content").innerHTML =
        `${!matches.some((item) => item.id === r.id) ? '<p class="rw-outside">This selection is outside the current results. Back restores your previous view.</p>' : ""}<article class="rw-record" aria-label="Full selected record"><div class="rw-record-topline"><p class="rw-eyebrow">${esc(contextName)} / ${esc(label(r.type))}</p>${r.kind === "statement" ? `<span class="rw-review-badge" data-outcome="${esc(outcome)}">${esc(assessmentLabel(outcome))}</span>` : ""}</div>${["passage", "mention"].includes(r.kind) ? `<h2 class="rw-record-title">${r.kind === "passage" ? "Transcript passage" : "Transcript mention"}</h2><p class="rw-passage-text">${highlight(r.text, state.q)}</p>` : `<h2 class="rw-record-title">${highlight(r.text, state.q)}</h2>`}${metadata.date ? (r.speaker ? `<p class="rw-attribution"><strong>${esc(r.speaker)}</strong>${r.reportedBy ? ` · reported by ${esc(r.reportedBy)}` : ""}<small>${esc(metadata.date)}${app ? ` · ${esc(app.time)}` : ""}</small></p>` : `<p class="rw-source-meta">${esc(metadata.date)}${r.datePrecision ? ` · ${esc(r.datePrecision)} precision` : ""}</p>`) : ""}

        ${caveat ? `<p class="rw-caveat">${caveat}</p>` : ""}
        ${r.notes ? `<section><h3>${r.kind === "source" ? "Why this source was cited" : "Record notes"}</h3><p class="rw-notes">${highlight(r.notes, state.q)}</p></section>` : ""}
        ${r.dateAsStated ? `<p>Source date wording: ${esc(r.dateAsStated)}</p>` : ""}
        ${r.url ? `<p><a href="${safe(r.url)}" target="_blank" rel="noopener">${esc(r.domain || "Original source")} ↗</a></p>` : ""}
        ${recordActions(r)}
        ${app ? sourceHtml(r, app) : ""}
        ${r.links.length ? `<section class="rw-related"><h3>Follow this development</h3><ul>${r.links.map((link) => `<li>${recordLink(link.href, link.title)}</li>`).join("")}</ul><p class="rw-help">Reviewed record links. They do not establish the underlying claim.</p></section>` : ""}
        ${r.kind === "statement" || verification.note || sources.length ? `<details id="rw-review" class="rw-review" ${!entity && ["mixed", "false", "unverifiable"].includes(outcome) ? "open" : ""}><summary>Verification notes & sources (${sources.length})${r.kind === "statement" ? ` · ${esc(assessmentLabel(outcome))}` : ""}</summary><p class="rw-notes">${esc(verification.notes || verification.note || "No review explanation recorded. Do not assume this statement has been established.")}</p>${sources.length ? `<ul>${sources.map((s) => `<li><a href="${safe(s.url)}" target="_blank" rel="noopener">${esc(s.title || s.url)}</a>${s.relevance ? ` — ${esc(s.relevance)}` : ""}</li>`).join("")}</ul>` : ""}<p class="rw-help">Existing dataset assessment, not a new fact-check.${verification.confidence ? ` Recorded confidence: ${esc(verification.confidence)}.` : ""}</p></details>` : ""}
        ${r.entityIds.length ? `<section><h3>Tagged on this record</h3><p class="rw-help">These tags belong to this record. A shared tag does not establish a relationship.</p><div class="rw-tags">${r.entityIds.map((id) => `<a href="${safe(`/entities/${id}`)}">${esc(manifest.entities[id]?.name || id)}</a>`).join("")}</div></section>` : ""}
        ${r.statementIds?.length ? `<section class="rw-cited-statements"><h3>${r.kind === "source" ? "Cited for" : "Evidence from"} ${r.statementIds.length} ${r.statementIds.length === 1 ? "statement" : "statements"}</h3><div>Loading linked statements…</div></section>` : ""}

        <p class="rw-record-id">${esc(r.id)}${!["mention", "passage", "source"].includes(r.kind) ? ` · ${recordLink(r.href, "Permanent record")}` : ""}</p></article>`
      if (saved.open)
        root.querySelectorAll<HTMLDetailsElement>(".rw-reader details[id]").forEach((detail) => {
          detail.open = saved.open!.includes(detail.id)
        })
      $(".rw-reader").scrollTop = saved.readerScroll
      if (app) {
        const detail = $<HTMLDetailsElement>("#rw-context")
        detail.querySelector("summary")!.textContent = "Read before and after this passage"
        let pendingContext: Promise<void> | undefined
        const ensureContext = () =>
          (pendingContext ||= (async () => {
            try {
              const payload = await load(`episodes/${app.episode}.json`)
              if (!live() || generation !== readerGeneration || state.item !== selected) return
              const rows = app.index >= 0 ? payload.paragraphs || [] : []
              const section = $(".rw-context-body")
              section.innerHTML =
                rows
                  .slice(Math.max(0, app.index - 1), app.index + 2)
                  .map(
                    (p) =>
                      `<section class="rw-context-passage ${p.index === app.index ? "rw-current-passage" : ""}"><p class="rw-eyebrow">${p.index === app.index ? "Selected passage" : p.index < app.index ? "Immediately before" : "Immediately after"} · ${esc(p.time)} · ${esc(p.speaker)}</p><p>${highlight(p.text, state.q)}</p><a href="${safe(`/episodes/${manifest.episodes[app.episode].slug}?item=${p.id}`)}">Open this passage →</a></section>`,
                  )
                  .join("") || "No surrounding transcript is available."
              $(".rw-reader").scrollTop = saved.readerScroll
            } catch {
              if (live() && generation === readerGeneration)
                $(".rw-context-body").innerHTML =
                  "<p>Could not load context. Use the full transcript link above.</p>"
            }
          })())
        detail.addEventListener(
          "toggle",
          () => {
            if (detail.open) void ensureContext()
          },
          { signal: abort.signal },
        )
        if (detail.open) await ensureContext()
      }
      if (r.statementIds?.length) {
        try {
          const payload = await load("catalogs/statement.json")
          if (!live() || generation !== readerGeneration) return
          const ids = new Set(r.statementIds)
          $(".rw-cited-statements > div").innerHTML = `<ul>${payload.records
            .filter((s) => ids.has(s.id))
            .map((s) => `<li>${recordLink(s.href, s.text)}</li>`)
            .join("")}</ul>`
        } catch {
          if (live() && generation === readerGeneration)
            $(".rw-cited-statements > div").textContent =
              "Linked statements could not be loaded. Try again after refreshing."
        }
      }
    }
    function render(restoreWindow = false) {
      renderResults()
      renderDiscovery()
      renderCollection()
      void renderTranscriptSearch()
      const pendingTranscript = renderTranscript(restoreWindow)
      const selected = state.item
      const top = saved.windowScroll || 0
      const pendingReader = renderReader()
      if (restoreWindow) {
        window.scrollTo({ top })
        const reached = window.scrollY
        // Expanded transcript context can arrive after the initial history restoration.
        void Promise.all([pendingReader, pendingTranscript]).then(() => {
          if (live() && state.item === selected && window.scrollY === reached)
            window.scrollTo({ top })
        })
      }
      history.replaceState(
        { ...history.state, ...saved, state },
        "",
        stateUrl(new URL(location.href), state, route),
      )
    }
    root.addEventListener(
      "submit",
      (event) => {
        if (!(event.target as HTMLElement).matches(".rw-search")) return
        event.preventDefault()
        change({ q: $<HTMLInputElement>('[name="q"]').value, item: "", appearance: 0 })
      },
      { signal: abort.signal },
    )
    root.addEventListener(
      "input",
      (event) => {
        const input = event.target as HTMLInputElement
        if (input.dataset.note) {
          const item = notebook.find((i) => savedKey(i) === input.dataset.note)
          if (item) {
            item.note = input.value
            persistNotebook()
          }
          return
        }
        if (input.closest(".rw-discover-search")) return
        if (!["q", "entity", "speaker"].includes(input.name)) return
        clearTimeout(timer)
        timer = setTimeout(
          () => change({ [input.name]: input.value, item: "", appearance: 0 }),
          220,
        )
      },
      { signal: abort.signal },
    )
    root.addEventListener(
      "change",
      (event) => {
        const input = event.target as HTMLInputElement
        if (["kind", "from", "to", "outcome", "sort"].includes(input.name))
          change({
            [input.name]: input.value,
            item: "",
            appearance: 0,
            ...(entity && input.name === "kind" ? { outcome: "" } : {}),
          })
        if (input.name === "appearance") change({ appearance: Number(input.value) }, false)
        if (input.name === "transcript-jump" && input.value) {
          if (route.episode) {
            change({ item: input.value }, false)
            scrollToTranscriptSelection()
          } else {
            $(".rw-linked-transcript")
              .querySelector(`#${CSS.escape(input.value.replace(/^passage-/, ""))}`)
              ?.scrollIntoView({ block: "start" })
          }
        }
      },
      { signal: abort.signal },
    )
    root.addEventListener(
      "click",
      (event) => {
        const target = (event.target as HTMLElement).closest<HTMLElement>(
          "[data-record],[data-kind],[data-action],[data-page],[data-clear],[data-episode-view],[data-remove]",
        )
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0)
          return
        if (!target) {
          const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href]")
          if (link && route.episode) {
            const url = new URL(link.href)
            const next = readState(url, route)
            if (
              url.origin === location.origin &&
              url.pathname === path &&
              byId.has(next.item) &&
              (url.searchParams.has("item") || /t-\d\d-\d\d-\d\d/.test(url.hash))
            ) {
              event.preventDefault()
              event.stopPropagation()
              change({ item: next.item, view: next.view, kind: next.kind, appearance: 0 }, false)
              scrollToTranscriptSelection()
            }
          }
          return
        }
        event.preventDefault()
        event.stopPropagation()
        if (target.dataset.remove) {
          notebook = notebook.filter((item) => savedKey(item) !== target.dataset.remove)
          persistNotebook()
          render()
        } else if (target.dataset.episodeView) {
          change({ view: target.dataset.episodeView as WorkspaceState["view"] }, false)
          scrollToTranscriptSelection()
        } else if (target.dataset.record) {
          const r = byId.get(target.dataset.record)!
          change(
            {
              item: target.dataset.record,
              appearance: Math.max(
                0,
                r.appearances.findIndex((a) => a.episode === route.episode),
              ),
            },
            false,
          )
          $(".rw-reader").focus({ preventScroll: true })
        } else if (target.dataset.kind)
          change({
            kind: target.dataset.kind,
            item: "",
            appearance: 0,
            ...(entity ? { outcome: "" } : {}),
          })
        else if (target.dataset.page) {
          change({ page: Number(target.dataset.page) }, false)
          $(".rw-result-scroll").scrollTop = 0
        } else if (target.dataset.clear)
          change({ [target.dataset.clear]: target.dataset.clear === "kind" ? "all" : "", item: "" })
        else
          switch (target.dataset.action) {
            case "save": {
              const r = byId.get(target.dataset.key!)
              if (!r) break
              const existing = notebook.find((item) => savedRecord(item) === r)
              notebook = existing
                ? notebook.filter((item) => item !== existing)
                : [
                    ...notebook,
                    {
                      id: r.id,
                      episode: ["passage", "mention"].includes(r.kind)
                        ? r.appearances[0]?.episode || ""
                        : "",
                      appearance: state.appearance,
                      note: "",
                    },
                  ]
              persistNotebook()
              render()
              break
            }
            case "compare": {
              const key = target.dataset.key!,
                selected = state.compare.split(",").filter(Boolean),
                appearances = state.compareAt.split(",")
              if (!selected.includes(key) && selected.length === 2) {
                feedback(
                  "Two records are selected. Remove one from the comparison before adding another.",
                )
                break
              }
              const pairs = selected.map((id, i) => ({ id, appearance: appearances[i] || "0" }))
              const next = selected.includes(key)
                ? pairs.filter((p) => p.id !== key)
                : [...pairs, { id: key, appearance: String(state.appearance) }]
              change(
                {
                  compare: next.map((p) => p.id).join(","),
                  compareAt: next.map((p) => p.appearance).join(","),
                },
                false,
              )
              $(".rw-collection").scrollIntoView({ block: "start" })
              break
            }
            case "clear-compare":
              change({ compare: "", compareAt: "" }, false)
              break
            case "citation": {
              const r = byId.get(target.dataset.key!)
              if (r) {
                const text = citation(r, manifest, base, state.appearance)
                void navigator.clipboard.writeText(text).then(
                  () => feedback("Citation copied with record and source links."),
                  () => {
                    if (!live() || !target.isConnected) return
                    const box =
                      root.querySelector<HTMLTextAreaElement>(".rw-citation-copy") ||
                      document.createElement("textarea")
                    box.className = "rw-citation-copy"
                    box.readOnly = true
                    box.setAttribute("aria-label", "Citation to copy")
                    box.value = text
                    target.closest(".rw-record-actions")?.after(box)
                    box.select()
                    feedback("Citation selected. Press Ctrl+C or ⌘C to copy it.")
                  },
                )
              }
              break
            }
            case "export-md":
            case "export-csv": {
              const rows = notebook.map((item) => {
                const r = savedRecord(item)
                return {
                  item,
                  r,
                  text: r
                    ? citation(r, manifest, base, item.appearance)
                    : `Unavailable record: ${item.id}`,
                }
              })
              const csv = target.dataset.action === "export-csv"
              const body = csv
                ? [
                    ["Record", "Citation", "Research note"],
                    ...rows.map(({ item, text }) => [item.id, text, item.note]),
                  ]
                    .map((row) => row.map(csvCell).join(","))
                    .join("\r\n")
                : rows
                    .map(
                      ({ item, text }) =>
                        `${text}${item.note ? `\n\nResearch note: ${item.note}` : ""}`,
                    )
                    .join("\n\n---\n\n")
              const url = URL.createObjectURL(
                new Blob([body], {
                  type: csv ? "text/csv;charset=utf-8" : "text/markdown;charset=utf-8",
                }),
              )
              const a = document.createElement("a")
              a.href = url
              a.download = `candace-research.${csv ? "csv" : "md"}`
              a.click()
              setTimeout(() => URL.revokeObjectURL(url), 1000)
              feedback("Research exported with citations and notes.")
              break
            }
            case "retry-transcripts":
              void renderTranscriptSearch()
              break
            case "back":
              if (history.length > 1) history.back()
              break
            case "results": {
              const top = saved.resultsWindowScroll || 0
              change({ item: "", appearance: 0 }, false)
              window.scrollTo({ top })
              remember()
              $(".rw-result-scroll").focus({ preventScroll: true })
              break
            }
            case "filters":
              root.dataset.filtersOpen = String(root.dataset.filtersOpen !== "true")
              target.setAttribute("aria-expanded", root.dataset.filtersOpen)
              break
            case "reset":
              change({
                ...defaults,
                saved: state.saved,
                compare: state.compare,
                compareAt: state.compareAt,
                kind: route.kind || "all",
                sort: readState(new URL(location.pathname, location.origin), route).sort,
              })
              break
            case "group":
              change({ group: !state.group }, false)
              break
            case "smaller":
            case "larger":
              size = Math.max(
                16,
                Math.min(26, size + (target.dataset.action === "larger" ? 1 : -1)),
              )
              root.style.setProperty("--rw-reader-size", `${size}px`)
              feedback(`Reading text: ${size}px`)
              break
            case "copy":
              void navigator.clipboard.writeText(location.href).then(
                () => feedback("View link copied"),
                () => feedback("Copy the address from your browser to share this view."),
              )
              break
          }
      },
      { signal: abort.signal },
    )
    window.addEventListener(
      "popstate",
      (event) => {
        if (location.pathname !== path) return
        event.stopImmediatePropagation()
        const previous = event.state as SavedView | null
        clearTimeout(timer)
        clearTimeout(scrollTimer)
        state = readState(new URL(location.href), route)
        saved =
          previous?.workspace === path
            ? previous
            : {
                workspace: path,
                state,
                depth: 0,
                listScroll: 0,
                readerScroll: 0,
                reading: Boolean(state.item),
                open: null,
              }
        render(true)
      },
      { capture: true, signal: abort.signal },
    )
    document.addEventListener("prenav", remember, { signal: abort.signal })
    for (const pane of [window, $(".rw-result-scroll"), $(".rw-reader")])
      pane.addEventListener(
        "scroll",
        () => {
          clearTimeout(scrollTimer)
          scrollTimer = setTimeout(remember, 80)
        },
        { passive: true, signal: abort.signal },
      )
    if (route.episode && !state.item && !state.q) {
      state.item = records.find((r) => r.kind === "passage")?.id || ""
      saved.reading = false
    }
    function scrollToTranscriptSelection() {
      if (state.view === "transcript" && state.item)
        root
          .querySelector(
            `.rw-linked-transcript #${CSS.escape(state.item.replace(/^passage-/, ""))}`,
          )
          ?.scrollIntoView({ block: "start" })
    }
    // Upgrade old catalog ?item=entity links, retaining the search as the Back destination.
    const selectedEntity = byId.get(state.item)
    if (selectedEntity?.kind === "entity") {
      state.item = ""
      state.appearance = 0
      saved.reading = false
    }
    render(restoring)
    if (
      state.view === "transcript" &&
      !restoring &&
      (new URL(location.href).searchParams.has("item") || location.hash)
    )
      scrollToTranscriptSelection()
    if (selectedEntity?.kind === "entity") {
      remember()
      window.location.assign(itemUrl(selectedEntity))
      return
    }
    if (mobile() && saved.reading && !restoring) $(".rw-reading").scrollIntoView({ block: "start" })
    remember()
  } catch (error) {
    if (live())
      $(".rw-controls").innerHTML =
        `<p role="alert">This workspace could not be loaded. ${esc(error instanceof Error ? error.message : error)}</p><button type="button" class="rw-retry">Try again</button>`
    root.querySelector(".rw-retry")?.addEventListener(
      "click",
      () => {
        abort.abort()
        delete root.dataset.initialized
        void initWorkspace(root)
      },
      { once: true },
    )
  }
}
document.addEventListener("nav", () =>
  document
    .querySelectorAll<HTMLElement>("[data-record-workspace]")
    .forEach((root) => void initWorkspace(root)),
)

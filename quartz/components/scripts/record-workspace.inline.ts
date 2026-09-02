import {
  defaults,
  dateLabel,
  escapeHtml as esc,
  filterRecords,
  highlight,
  label,
  matchPassage,
  matchesKind,
  normalize,
  outcomeFor,
  prepareRecords,
  readState,
  recordMetadata,
  stateUrl,
} from "./record-workspace-model"
import type {
  Appearance,
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
    const load = (name: string) => json<Payload>(asset(name, manifest.revision))
    const payloads = route.entity
      ? [await load(`entities/${route.entity}.json`)]
      : route.episode
        ? [await load(`episodes/${route.episode}.json`)]
        : await Promise.all(
            (route.catalog === "all" ? Object.keys(manifest.catalogs) : [route.catalog]).map(
              (kind) => load(`catalogs/${kind}.json`),
            ),
          )
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
    const byId = new Map(records.map((r) => [r.id, r]))
    let state = readState(new URL(location.href), route)
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
      ? `<p>${esc(label(entity.type))} · ${records.length.toLocaleString()} evidence records</p><details><summary>Aliases & record information</summary><p>${esc(entity.aliases.length ? `Also known as: ${entity.aliases.join(", ")}` : "No aliases recorded.")}</p><p>${esc(entity.tags.join(" · "))}</p><p>${esc(entity.verification.note || "")}</p>${entity.verification.source_url ? `<a href="${safe(entity.verification.source_url)}" target="_blank" rel="noopener">${esc(entity.verification.source_title || "Identity source")} ↗</a>` : ""}</details>`
      : episode
        ? `<p>${esc(dateLabel(episode.date))} · ${esc(episode.channel)}</p><a href="${safe(episode.url)}" target="_blank" rel="noopener">Original source ↗</a>`
        : `<p>${records.length.toLocaleString()} searchable records</p><p>Read-only research snapshot</p>`
    const kinds = entity
      ? ["all", "about", "by", "mentions", "relationship", "event"]
      : episode
        ? ["all", "passage", "statement", "relationship", "event"]
        : route.catalog === "all"
          ? ["all", ...Object.keys(manifest.catalogs)]
          : ["all", ...new Set(records.map((r) => r.type))]
    const primaryKinds = entity
      ? kinds.slice(0, 4)
      : episode
        ? kinds.slice(0, 3)
        : route.catalog === "all"
          ? ["all", "statement", "entity", "episode"]
          : ["all"]
    const options = (values: string[], current: string) =>
      values
        .map(
          (value) =>
            `<option value="${esc(value)}"${value === current ? " selected" : ""}>${esc(kindName(value))}</option>`,
        )
        .join("")
    const entityIds = new Set(records.flatMap((r) => r.entityIds))
    const entities = [...entityIds]
      .map((id) => manifest.entities[id])
      .filter(Boolean)
      .filter((e) => e.id !== route.entity)
      .sort((a, b) => a.name.localeCompare(b.name))
    $(".rw-controls").innerHTML =
      `<form class="rw-search" role="search"><label class="sr-only" for="rw-query">Search this view</label><input id="rw-query" type="search" name="q" placeholder="Search words, tags, names or source excerpts…" autocomplete="off"><button type="submit">Search ↵</button><span class="rw-scope">${esc(entity ? `Within ${entity.name}’s record` : episode ? "Within this episode" : route.catalog === "all" ? "Across statements, people, events & sources" : `Within ${kindName(route.catalog).toLowerCase()}`)}</span></form>
      <button type="button" class="rw-mobile rw-filter-toggle" data-action="filters" aria-expanded="false" aria-controls="rw-filter-panel">Filters</button><div id="rw-filter-panel">
      <div class="rw-filter-line">${primaryKinds.length > 1 ? `<div class="rw-kinds" role="group" aria-label="Record types">${primaryKinds.map((kind) => `<button type="button" data-kind="${kind}">${esc(kindName(kind))} <span></span></button>`).join("")}</div>` : ""}<label class="rw-kind-select"><span>${entityCatalog ? "Entity type" : "Record type"}</span><select name="kind">${options(kinds, state.kind)}</select></label><button type="button" data-action="reset" class="rw-text-button">Reset</button></div>
      <div class="rw-filters"><label class="rw-tag-filter"><span>${entity ? "Also tagged with" : "Tagged entity"}</span><input type="search" name="entity" list="rw-entity-options" placeholder="Name or alias" aria-describedby="rw-filter-help"><datalist id="rw-entity-options"></datalist></label><label><span>Speaker</span><input type="search" name="speaker" list="rw-speaker-options" placeholder="Any speaker"><datalist id="rw-speaker-options">${[
        ...new Set(records.map((r) => r.speaker).filter(Boolean)),
      ]
        .sort()
        .slice(0, 80)
        .map((s) => `<option value="${esc(s)}"></option>`)
        .join(
          "",
        )}</datalist></label><details class="rw-more-filters"><summary>${entityCatalog ? "Review filters" : "Date & review filters"}</summary><div>${entityCatalog ? "" : '<label><span>From</span><input type="date" name="from"></label><label><span>To</span><input type="date" name="to"></label>'}<label><span>Recorded review</span><select name="outcome"><option value="">Any assessment</option>${[
        ...new Set(records.map(outcomeFor)),
      ]
        .sort()
        .map((s) => `<option value="${esc(s)}">${esc(label(s))}</option>`)
        .join("")}</select></label></div></details></div>
      <p class="rw-help" id="rw-filter-help">Tags are attached to the individual record—not everything mentioned in the same episode. Raw mention records have no additional entity tags.</p></div><div class="rw-active-filters"></div>`
    $(".rw-result-options").innerHTML =
      `<label><span class="sr-only">Sort results</span><select name="sort"><option value="relevance">Most relevant</option>${entityCatalog ? '<option value="name">Name A–Z</option><option value="mentions">Most mentions</option>' : '<option value="newest">Newest first</option><option value="oldest">Oldest first</option>'}</select></label>${entity || episode ? '<button type="button" data-action="group" aria-pressed="false">Group by episode</button>' : ""}`
    function suggestions() {
      $("#rw-entity-options").innerHTML = entities
        .filter((e) =>
          normalize([e.name, ...e.aliases].join(" ")).includes(normalize(state.entity)),
        )
        .slice(0, 40)
        .map((e) => `<option value="${esc(e.name)}"></option>`)
        .join("")
    }
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
      if (mobile() && (patch.item || patch.page !== undefined)) {
        $(patch.item ? ".rw-reading" : ".rw-results").scrollIntoView({ block: "start" })
        remember()
      }
    }
    const chosenApp = (r: RecordItem) =>
      r.appearances[Math.min(state.appearance, r.appearances.length - 1)]
    const itemUrl = (id: string) =>
      stateUrl(new URL(location.href), { ...state, item: id, appearance: 0 }, route).href
    function resultHtml(r: IndexedRecord) {
      const passage = matchPassage(r, state.q),
        app = r.appearances.find((a) => a.episode === route.episode) || r.appearances[0],
        ep = manifest.episodes[app?.episode],
        metadata = recordMetadata(r)
      return `<li><a class="rw-result" data-record="${esc(r.id)}" href="${esc(itemUrl(r.id))}" ${state.item === r.id ? 'aria-current="true"' : ""}><div class="rw-result-topline"><span>${esc(kindName(r.kind))}${r.type !== r.kind ? ` · ${esc(label(r.type))}` : ""}</span>${state.item === r.id ? "<span>Reading ↗</span>" : ""}</div><div class="rw-result-text">${highlight(r.text.slice(0, 220) + (r.text.length > 220 ? "…" : ""), state.q)}</div>${state.q && passage.label !== "Record" ? `<p class="rw-result-match"><small>Matched ${esc(passage.label.toLowerCase())}</small>${highlight(passage.text, state.q)}</p>` : ""}${metadata.label || metadata.date ? `<div class="rw-result-meta">${metadata.label ? `<span>${esc(metadata.label)}</span>` : ""}${metadata.date ? `<time>${esc(metadata.date)}</time>` : ""}</div>` : ""}${ep ? `<p class="rw-result-source">${esc(ep.title)} · ${esc(app.time)}</p>` : ""}</a></li>`
    }
    function renderResults() {
      matches = filterRecords(records, state, route.entity)
      const untyped = filterRecords(
        records,
        { ...state, kind: "all", ...(state.kind === "mentions" ? { entity: "" } : {}) },
        route.entity,
      )
      root.querySelectorAll<HTMLButtonElement>("[data-kind]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.kind === state.kind))
        button.querySelector("span")!.textContent = String(
          untyped.filter((r) => matchesKind(r, button.dataset.kind!, route.entity)).length,
        )
      })
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
      $(".rw-tag-filter").hidden = state.kind === "mentions" || !entities.length
      $("#rw-filter-help").hidden = state.kind === "mentions" || !entities.length
      $("[name=speaker]").closest<HTMLElement>("label")!.hidden = !records.some((r) => r.speaker)
      const activeFilters = ["kind", "entity", "speaker", "from", "to", "outcome"].filter(
        (key) => state[key as keyof WorkspaceState] && (key !== "kind" || state.kind !== "all"),
      )
      $(".rw-filter-toggle").textContent =
        `Filters${activeFilters.length ? ` (${activeFilters.length})` : ""}`
      $(".rw-active-filters").innerHTML = ["q", ...activeFilters]
        .filter((key) => state[key as keyof WorkspaceState])
        .map(
          (key) =>
            `<button type="button" data-clear="${key}" aria-label="Clear ${key} filter">${esc(key === "q" ? "Search" : label(key))}: ${esc(state[key as keyof WorkspaceState])} ×</button>`,
        )
        .join("")
      const pages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE))
      state.page = Math.min(state.page, pages)
      const visible = matches.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE)
      let html = visible.map(resultHtml).join("")
      if (state.group) {
        const groups = new Map<string, IndexedRecord[]>()
        for (const r of visible) {
          const key = r.appearances[0]?.episode || ""
          if (!groups.has(key)) groups.set(key, [])
          groups.get(key)!.push(r)
        }
        html = [...groups]
          .map(
            ([key, rows]) =>
              `<li class="rw-source-group"><h3>${esc(manifest.episodes[key]?.title || "Other records")}</h3><ol>${rows.map(resultHtml).join("")}</ol></li>`,
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
      suggestions()
    }
    const recordLink = (href: string, title: string) =>
      `<a href="${safe(href)}">${esc(title)} →</a>`
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
      return `<section class="rw-evidence"><p class="rw-eyebrow">Source evidence</p>${r.appearances.length > 1 ? `<label class="rw-appearance"><span>Source appearance (${r.appearances.length})</span><select name="appearance">${r.appearances.map((a, i) => `<option value="${i}" ${i === state.appearance ? "selected" : ""}>${esc(dateLabel(manifest.episodes[a.episode]?.date || ""))} · ${esc(manifest.episodes[a.episode]?.title || a.episode)} · ${esc(a.time)}</option>`).join("")}</select></label>` : ""}<h3>${esc(ep?.title || "Source not recorded")}</h3><p class="rw-source-meta">${esc(dateLabel(ep?.date || ""))} · ${esc(app.time)}</p>${r.kind !== "passage" && r.kind !== "mention" ? `<blockquote>${highlight(app.snippet || "No excerpt attached. Check the transcript.", state.q)}</blockquote>` : ""}${app.note ? `<p>${esc(app.note)}</p>` : ""}<div class="rw-source-actions">${ep ? recordLink(`/episodes/${ep.slug}#${app.anchor}`, "Full transcript") : ""}${external ? `<a href="${safe(external.href)}" target="_blank" rel="noopener">Original source ↗</a>` : ""}</div><details id="rw-context"><summary>Read surrounding transcript</summary><div class="rw-context-body" data-episode="${esc(app.episode)}" data-index="${app.index}"><p>Loading source context…</p></div></details></section>`
    }
    async function renderReader() {
      const generation = ++readerGeneration
      const r = byId.get(state.item),
        selected = state.item
      root.dataset.reading = String(Boolean(r) && saved.reading)
      $<HTMLButtonElement>('[data-action="back"]').disabled = history.length <= 1
      $(".rw-selection-label").textContent = r
        ? `Selected ${kindName(r.kind).toLowerCase()}`
        : "Reading space"
      if (!r) {
        $(".rw-content").innerHTML =
          `<div class="rw-welcome"><p class="rw-eyebrow">${state.item ? "Record not found in this snapshot" : "Start with the information"}</p><h2>${state.q ? "Find the passage.<br>Keep the context." : "The evidence,<br>without the detour."}</h2><p>${state.item ? "This saved record is not available in this view. Choose another result or return to your previous screen." : "Choose a result to read its full content, attribution, and source evidence here."}</p><p class="rw-help">Episode titles identify the source. They no longer stand between you and the content.</p>${route.catalog === "all" ? "<p>For every word of a transcript, open an episode or use Search transcripts below.</p>" : ""}</div>`
        return
      }
      const outcome = outcomeFor(r),
        verification = r.verification,
        metadata = recordMetadata(r)
      const sources =
        verification.sources ||
        (verification.source_url
          ? [{ url: verification.source_url, title: verification.source_title }]
          : [])
      const app = chosenApp(r)
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
      $(".rw-content").innerHTML =
        `${!matches.some((item) => item.id === r.id) ? '<p class="rw-outside">This selection is outside the current results. Back restores your previous view.</p>' : ""}<article class="rw-record" aria-label="Full selected record"><div class="rw-record-topline"><p class="rw-eyebrow">${esc(contextName)} / ${esc(label(r.type))}</p>${r.kind === "statement" ? `<span class="rw-review-badge" data-outcome="${esc(outcome)}">${outcome === "recorded" ? "Verification recorded" : `Recorded review: ${esc(label(outcome))}`}</span>` : ""}</div><h2 class="rw-record-title">${highlight(r.text, state.q)}</h2>${metadata.date ? (r.speaker ? `<p class="rw-attribution"><strong>${esc(r.speaker)}</strong>${r.reportedBy ? ` · reported by ${esc(r.reportedBy)}` : ""}<small>${esc(metadata.date)}${app ? ` · ${esc(app.time)}` : ""}</small></p>` : `<p class="rw-source-meta">${esc(metadata.date)}${r.datePrecision ? ` · ${esc(r.datePrecision)} precision` : ""}</p>`) : ""}
        <p class="rw-caveat">${r.kind === "mention" ? "A transcript mention is not necessarily a claim about this entity." : r.kind === "statement" ? "Extracted statement, not necessarily verbatim. Attribution does not establish the underlying claim." : r.kind === "relationship" ? "An extracted relationship supported by the recorded excerpts—not an independently verified finding." : r.kind === "event" ? "An event recorded in the research dataset. Dates may be approximate; inspect the source wording." : r.kind === "passage" ? "Automatically transcribed source material; speaker identification may be imperfect." : "Follow the evidence and source material before drawing conclusions."}</p>
        ${
          r.kind === "entity"
            ? `<div class="rw-record-counts">${Object.entries(r.counts || {})
                .map(
                  ([k, v]) =>
                    `<span><strong>${v.toLocaleString()}</strong> ${esc(kindName(k).toLowerCase())}</span>`,
                )
                .join(
                  "",
                )}</div><p>${esc((r.aliases || []).join(" · "))}</p><p class="rw-open-scope">${recordLink(r.href, "Explore this entity’s evidence")}</p>`
            : ""
        }
        ${r.kind === "episode" ? `<p class="rw-open-scope">${recordLink(r.href, "Search this episode’s transcript & evidence")}</p>` : ""}
        ${r.notes ? `<section><h3>${r.kind === "source" ? "Why this source was cited" : "Record notes"}</h3><p class="rw-notes">${highlight(r.notes, state.q)}</p></section>` : ""}
        ${r.dateAsStated ? `<p>Source date wording: ${esc(r.dateAsStated)}</p>` : ""}
        ${r.url ? `<p><a href="${safe(r.url)}" target="_blank" rel="noopener">${esc(r.domain || "Original source")} ↗</a></p>` : ""}
        ${app ? sourceHtml(r, app) : ""}
        ${r.kind === "statement" || verification.note || sources.length ? `<details id="rw-review" class="rw-review" ${["mixed", "false", "unverifiable"].includes(outcome) ? "open" : ""}><summary>Verification notes${r.kind === "statement" ? ` · ${esc(label(outcome))}` : ""}</summary><p class="rw-notes">${esc(verification.notes || verification.note || "No review explanation recorded. Do not assume this statement has been established.")}</p>${sources.length ? `<ul>${sources.map((s) => `<li><a href="${safe(s.url)}" target="_blank" rel="noopener">${esc(s.title || s.url)}</a>${s.relevance ? ` — ${esc(s.relevance)}` : ""}</li>`).join("")}</ul>` : ""}<p class="rw-help">Existing dataset assessment, not a new fact-check.</p></details>` : ""}
        ${r.entityIds.length ? `<section><h3>Tagged on this record</h3><p class="rw-help">These tags belong to this record. A shared tag does not establish a relationship.</p><div class="rw-tags">${r.entityIds.map((id) => `<a href="${safe(`/entities/${id}`)}">${esc(manifest.entities[id]?.name || id)}</a>`).join("")}</div></section>` : ""}
        ${r.statementIds?.length ? `<section class="rw-cited-statements"><h3>Cited for ${r.statementIds.length} statements</h3><div>Loading linked statements…</div></section>` : ""}
        ${r.links.length ? `<section><h3>Follow in a reviewed theory thread</h3><ul>${r.links.map((link) => `<li>${recordLink(link.href, link.title)}</li>`).join("")}</ul></section>` : ""}
        <p class="rw-record-id">${esc(r.id)}${!["mention", "passage", "source"].includes(r.kind) ? ` · ${recordLink(r.href, "Permanent record")}` : ""}</p></article>`
      if (saved.open)
        root.querySelectorAll<HTMLDetailsElement>(".rw-reader details[id]").forEach((detail) => {
          detail.open = saved.open!.includes(detail.id)
        })
      $(".rw-reader").scrollTop = saved.readerScroll
      if (app) {
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
      const selected = state.item
      const top = saved.windowScroll || 0
      const pendingReader = renderReader()
      if (restoreWindow && mobile()) {
        window.scrollTo({ top })
        const reached = window.scrollY
        // Expanded transcript context can arrive after the initial history restoration.
        void pendingReader.then(() => {
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
        event.preventDefault()
        change({ q: $<HTMLInputElement>('[name="q"]').value, item: "", appearance: 0 })
      },
      { signal: abort.signal },
    )
    root.addEventListener(
      "input",
      (event) => {
        const input = event.target as HTMLInputElement
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
          change({ [input.name]: input.value, item: "", appearance: 0 })
        if (input.name === "appearance") change({ appearance: Number(input.value) }, false)
      },
      { signal: abort.signal },
    )
    root.addEventListener(
      "click",
      (event) => {
        const target = (event.target as HTMLElement).closest<HTMLElement>(
          "[data-record],[data-kind],[data-action],[data-page],[data-clear]",
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
              change({ item: next.item, appearance: 0 }, false)
            }
          }
          return
        }
        event.preventDefault()
        event.stopPropagation()
        if (target.dataset.record) {
          const r = byId.get(target.dataset.record)!
          change(
            {
              item: r.id,
              appearance: Math.max(
                0,
                r.appearances.findIndex((a) => a.episode === route.episode),
              ),
            },
            false,
          )
          $(".rw-reader").focus({ preventScroll: true })
        } else if (target.dataset.kind) change({ kind: target.dataset.kind, item: "" })
        else if (target.dataset.page) {
          change({ page: Number(target.dataset.page) }, false)
          $(".rw-result-scroll").scrollTop = 0
        } else if (target.dataset.clear)
          change({ [target.dataset.clear]: target.dataset.clear === "kind" ? "all" : "", item: "" })
        else
          switch (target.dataset.action) {
            case "back":
              if (history.length > 1) history.back()
              break
            case "results":
              remember()
              saved.reading = false
              root.dataset.reading = "false"
              if (mobile()) window.scrollTo({ top: saved.resultsWindowScroll || 0 })
              remember()
              $(".rw-result-scroll").focus({ preventScroll: true })
              break
            case "filters":
              root.dataset.filtersOpen = String(root.dataset.filtersOpen !== "true")
              target.setAttribute("aria-expanded", root.dataset.filtersOpen)
              break
            case "reset":
              change({
                ...defaults,
                kind: route.kind || "all",
                sort: route.episode ? "oldest" : "relevance",
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
    render(restoring)
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

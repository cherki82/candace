import { normalize, tokensFor } from "./thread-explorer-model"
export { normalize, tokensFor }

export type Appearance = {
  episode: string
  at: number
  time: string
  anchor: string
  index: number
  snippet: string
  note?: string
}
export type RecordItem = {
  id: string
  kind: string
  text: string
  type: string
  date: string
  speaker: string
  speakerId: string
  reportedBy: string
  entityIds: string[]
  tags: string[]
  appearances: Appearance[]
  verification: {
    status?: string
    veracity?: string
    confidence?: string
    notes?: string
    note?: string
    source_url?: string
    source_title?: string
    sources?: { url: string; title?: string; relevance?: string }[]
  }
  links: { href: string; title: string }[]
  href: string
  aliases?: string[]
  notes?: string
  url?: string
  domain?: string
  statementIds?: string[]
  counts?: Record<string, number>
  datePrecision?: string
  dateAsStated?: string
  modality?: string
  linkHealth?: string
}
export type EntityMeta = {
  id: string
  name: string
  type: string
  aliases: string[]
  tags: string[]
  counts: Record<string, number>
  verification: RecordItem["verification"]
}
export type EpisodeMeta = {
  id: string
  slug: string
  title: string
  date: string
  url: string
  channel: string
}
export type Manifest = {
  schema: number
  revision: string
  entities: Record<string, EntityMeta>
  episodes: Record<string, EpisodeMeta>
  catalogs: Record<string, number>
}
export type WorkspaceRoute = {
  catalog: string
  title: string
  entity?: string
  episode?: string
  item?: string
  kind?: string
  q?: string
}
export type WorkspaceState = {
  q: string
  kind: string
  entity: string
  speaker: string
  from: string
  to: string
  outcome: string
  sort: string
  page: number
  item: string
  group: boolean
  appearance: number
}
export const defaults: WorkspaceState = {
  q: "",
  kind: "all",
  entity: "",
  speaker: "",
  from: "",
  to: "",
  outcome: "",
  sort: "relevance",
  page: 1,
  item: "",
  group: false,
  appearance: 0,
}

export function workspaceRoute(slug: string): WorkspaceRoute | undefined {
  const path = slug.replace(/\.html$/, "").replace(/\/index$/, "")
  const catalogs: Record<string, [string, string]> = {
    index: ["all", "Find the information. Keep the context."],
    "index/explorer": ["all", "Search the record"],
    "index/entities": ["entity", "Entities"],
    entities: ["entity", "Entities"],
    "index/episodes": ["episode", "Episodes"],
    episodes: ["episode", "Episodes"],
    "index/statements": ["statement", "Statements"],
    statements: ["statement", "Statements"],
    "index/claims": ["statement", "Factual claims"],
    claims: ["statement", "Factual claims"],
    "index/event-explorer": ["event", "Events"],
    "index/timeline": ["event", "Timeline"],
    events: ["event", "Events"],
    "index/sources": ["source", "Research sources"],
    sources: ["source", "Research sources"],
    "index/relationships": ["relationship", "Relationships"],
    relationships: ["relationship", "Relationships"],
    tags: ["all", "Browse tagged records"],
    timestamps: ["episode", "Find a transcript passage"],
  }
  if (catalogs[path])
    return {
      catalog: catalogs[path][0],
      title: catalogs[path][1],
      ...(path.endsWith("claims") ? { kind: "factual_claim" } : {}),
    }
  const [section, id, anchor] = path.split("/")
  if (!id) return undefined
  if (section === "entities") return { catalog: "entity", entity: id, title: "Entity evidence" }
  if (section === "episodes" || section === "timestamps")
    return {
      catalog: "episode",
      episode: id.replace(/^ep-/, ""),
      kind: "passage",
      title: "Source evidence",
      ...(anchor ? { item: `passage-${anchor}` } : {}),
    }
  if (["statements", "events", "relationships"].includes(section))
    return {
      catalog: section.slice(0, -1),
      title: section[0].toUpperCase() + section.slice(1),
      item: id,
    }
  if (section === "tags")
    return {
      catalog: "all",
      title: `Tagged: ${id}`,
      q: decodeURIComponent(id).replaceAll("-", " "),
    }
}

export const escapeHtml = (value: unknown) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  )
export const label = (value: string) =>
  value.replaceAll("_", " ").replace(/^./, (c) => c.toUpperCase())
export const outcomeFor = (r: RecordItem) =>
  r.kind === "statement" && r.type !== "factual_claim"
    ? r.verification.status === "verified"
      ? "recorded"
      : r.verification.status || "unreviewed"
    : r.verification.veracity || r.verification.status || "unreviewed"
export type IndexedRecord = RecordItem & {
  fields: { label: string; text: string; normalized: string }[]
  haystack: string
  entityText: string
}
export function prepareRecords(records: RecordItem[], manifest: Manifest): IndexedRecord[] {
  return records.map((record) => {
    const entities = record.entityIds.map((id) => manifest.entities[id]).filter(Boolean)
    const fields = [
      ["Record", record.text],
      ["Tag", [...record.tags, ...entities.flatMap((e) => [e.name, ...e.tags])].join(" · ")],
      ["Alias", [...(record.aliases || []), ...entities.flatMap((e) => e.aliases)].join(" · ")],
      ["Speaker", `${record.speaker} ${record.reportedBy}`],
      [
        "Notes",
        [record.notes, record.verification.notes, record.verification.note]
          .filter(Boolean)
          .join("\n"),
      ],
      ...record.appearances.flatMap((a) => [
        ["Transcript excerpt", a.snippet],
        ["Episode", manifest.episodes[a.episode]?.title || ""],
      ]),
      ["ID", record.id],
      ["Type", record.type],
      ["Date", record.date],
    ].map(([label, text]) => ({ label, text, normalized: normalize(text) }))
    return {
      ...record,
      fields,
      haystack: fields.map((f) => f.normalized).join("\n"),
      entityText: normalize(entities.flatMap((e) => [e.name, ...e.aliases]).join("\n")),
    }
  })
}
export function matchesKind(r: RecordItem, kind: string, scopeEntity = "") {
  if (kind === "all") return true
  if (kind === "about") return r.kind === "statement" && r.entityIds.includes(scopeEntity)
  if (kind === "by") return r.kind === "statement" && r.speakerId === scopeEntity
  if (kind === "mentions") return r.kind === "mention"
  return r.kind === kind || r.type === kind
}
export function filterRecords(records: IndexedRecord[], state: WorkspaceState, scopeEntity = "") {
  const tokens = tokensFor(state.q)
  const tag = state.kind === "mentions" ? "" : state.entity
  return records
    .filter(
      (r) =>
        matchesKind(r, state.kind, scopeEntity) &&
        (!tag || r.entityIds.includes(tag) || r.entityText.includes(normalize(tag))) &&
        (!state.speaker || normalize(r.speaker).includes(normalize(state.speaker))) &&
        (!state.from || (r.date && r.date.padEnd(10, "9") >= state.from)) &&
        (!state.to || (r.date && r.date <= state.to)) &&
        (!state.outcome || outcomeFor(r) === state.outcome) &&
        tokens.every((t) => r.haystack.includes(t)),
    )
    .sort(
      (a, b) =>
        (state.sort === "relevance"
          ? tokens.reduce(
              (n, t) =>
                n +
                Number(b.fields[0].normalized.includes(t)) -
                Number(a.fields[0].normalized.includes(t)),
              0,
            )
          : 0) ||
        (state.sort === "oldest" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)) ||
        (a.appearances[0]?.episode === b.appearances[0]?.episode
          ? ((a.appearances[0]?.at || 0) - (b.appearances[0]?.at || 0)) *
            (state.sort === "oldest" ? 1 : -1)
          : 0) ||
        a.text.localeCompare(b.text) ||
        a.id.localeCompare(b.id),
    )
}
export function matchPassage(record: IndexedRecord, query: string) {
  const tokens = tokensFor(query)
  const best = record.fields.reduce((a, b) =>
    tokens.filter((t) => b.normalized.includes(t)).length >
    tokens.filter((t) => a.normalized.includes(t)).length
      ? b
      : a,
  )
  const positions = tokens.map((t) => best.normalized.indexOf(t)).filter((n) => n >= 0)
  const start = Math.max(0, (positions.length ? Math.min(...positions) : 0) - 55)
  return {
    label: best.label,
    text: `${start ? "…" : ""}${best.text.slice(start, start + 220)}${best.text.length > start + 220 ? "…" : ""}`,
  }
}
export function highlight(text: string, query: string): string {
  const terms = tokensFor(query)
  if (!terms.length) return escapeHtml(text)
  const positions: number[] = []
  let normalized = ""
  for (let i = 0; i < text.length; i++) {
    const part = normalize(text[i])
    normalized += part
    positions.push(...Array(part.length).fill(i))
  }
  const marked = new Set<number>()
  for (const term of terms)
    for (let i = normalized.indexOf(term); i >= 0; i = normalized.indexOf(term, i + term.length))
      for (let j = positions[i]; j <= positions[i + term.length - 1]; j++) marked.add(j)
  let result = "",
    active = false
  for (let i = 0; i < text.length; i++) {
    const next = marked.has(i)
    if (next !== active) result += next ? "<mark>" : "</mark>"
    active = next
    result += escapeHtml(text[i])
  }
  return result + (active ? "</mark>" : "")
}
export function readState(url: URL, route: WorkspaceRoute): WorkspaceState {
  const p = url.searchParams
  const state = {
    ...defaults,
    sort: route.episode ? "oldest" : "relevance",
    kind: route.kind || "all",
    q: route.q || "",
    item: route.item || "",
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
    "item",
  ] as const)
    if (p.has(key)) state[key] = p.get(key) || ""
  state.page = Math.max(1, Number.parseInt(p.get("page") || "1", 10) || 1)
  state.appearance = Math.max(0, Number.parseInt(p.get("appearance") || "0", 10) || 0)
  state.group = p.get("group") === "episode"
  if (state.kind === "mentions") state.entity = ""
  if (route.episode && !p.has("item") && /t-\d\d-\d\d-\d\d/.test(url.hash))
    state.item = `passage-${url.hash.match(/t-\d\d-\d\d-\d\d/)![0]}`
  return state
}
export function stateUrl(url: URL, state: WorkspaceState, route?: WorkspaceRoute) {
  const next = new URL(url)
  next.search = ""
  next.hash = ""
  const baseline = route ? readState(next, route) : defaults
  for (const key of [
    "q",
    "kind",
    "entity",
    "speaker",
    "from",
    "to",
    "outcome",
    "sort",
    "item",
    "page",
    "appearance",
  ] as const)
    if (state[key] !== baseline[key]) next.searchParams.set(key, String(state[key]))
  if (state.group) next.searchParams.set("group", "episode")
  return next
}

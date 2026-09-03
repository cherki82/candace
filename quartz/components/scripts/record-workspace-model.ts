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
export const dateLabel = (date: string) =>
  /^\d{4}-\d{2}-\d{2}$/.test(date)
    ? new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      })
    : date || "Date not recorded"

export function recordMetadata(record: RecordItem, sourceDate = record.date) {
  if (record.kind === "entity") {
    const label = ["mention", "statement"]
      .filter((kind) => typeof record.counts?.[kind] === "number")
      .map((kind) => {
        const count = record.counts![kind]
        return `${count.toLocaleString("en-GB")} ${kind}${count === 1 ? "" : "s"}`
      })
      .join(" · ")
    return { label, date: "" }
  }
  return { label: record.speaker || record.domain || "", date: dateLabel(sourceDate) }
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
  view: "workspace" | "transcript"
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
  view: "workspace",
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

export function workspaceContext(route: WorkspaceRoute) {
  if (route.entity)
    return {
      view: "entity-profile",
      eyebrow: "Entity profile",
      subtitle: "Statements, mentions and connections linked to this entity.",
      parent: { title: "All entities", href: "/index/entities" },
    }
  if (route.episode)
    return {
      view: "episode",
      eyebrow: "Episode transcript & evidence",
      subtitle: "Search and read within this episode's source material.",
      parent: { title: "All episodes", href: "/index/episodes" },
    }
  if (route.item)
    return {
      view: "record",
      eyebrow: "Record detail",
      subtitle: "Read the selected record, its attribution and source evidence.",
      parent: {
        title: `All ${route.catalog}s`,
        href: route.catalog === "event" ? "/index/event-explorer" : `/index/${route.catalog}s`,
      },
    }
  const directory = route.catalog === "entity"
  return {
    view: directory ? "entity-directory" : "catalog",
    eyebrow: directory ? "Entity directory" : "Browse the corpus",
    subtitle: directory
      ? "Find a person, place, organization or other entity. Open their profile to explore the evidence."
      : "Search across records. Choose a result to read it in context.",
    parent: undefined,
  }
}

export const escapeHtml = (value: unknown) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  )
// Keep the complete list available to the browser's native name/alias filtering.
export const datalistOptions = (values: { name: string; aliases?: string[] }[]) =>
  values
    .map(
      ({ name, aliases }) =>
        `<option value="${escapeHtml(name)}"${aliases?.length ? ` label="${escapeHtml(aliases.join(" · "))}"` : ""}></option>`,
    )
    .join("")
export const label = (value: string) =>
  value.replaceAll("_", " ").replace(/^./, (c) => c.toUpperCase())
export const entityTypeLabel = (value: string) => {
  const type = value.toLowerCase()
  return type === "gpe" ? "Place" : type === "org" ? "Organization" : label(type)
}
export const outcomeFor = (r: RecordItem) =>
  r.kind === "statement" && r.type !== "factual_claim"
    ? r.verification.status === "verified"
      ? "recorded"
      : r.verification.status || "unreviewed"
    : r.verification.veracity || r.verification.status || "unreviewed"
export const assessmentLabel = (value: string) =>
  (
    ({
      true: "Assessed true",
      false: "Assessed false",
      mixed: "Mixed assessment",
      recorded: "Review recorded",
      unreviewed: "Not reviewed",
      pending_sources: "Sources pending",
      attempted: "Review attempted",
    }) as Record<string, string>
  )[value] || label(value)

export const entityViews = [
  {
    kind: "all",
    label: "All records",
    help: "All records explicitly linked to this entity, including statements, mentions, connections and dated events.",
  },
  {
    kind: "statement",
    label: "Statements",
    help: "Statements about or attributed to this entity, including factual claims and other statement types.",
  },
  {
    kind: "claims",
    label: "Claims about",
    help: "Statements classified as factual claims and explicitly tagged to this entity—not a finding that they are true.",
  },
  {
    kind: "other",
    label: "Other statements",
    help: "Statements classified as opinions, accusations or other types, explicitly tagged to this entity. Original classifications are unchanged.",
  },
  {
    kind: "by",
    label: "Statements by",
    help: "Statements attributed to this entity, including quotations reported by someone else. These can overlap with claims about the entity.",
  },
  {
    kind: "mentions",
    label: "Mentions",
    help: "Name occurrences in the transcript—not necessarily assertions about the entity.",
  },
  {
    kind: "relationship",
    label: "Connections",
    help: "Explicitly recorded relationships involving this entity. Shared episodes alone do not establish a connection.",
  },
  {
    kind: "event",
    label: "Events",
    help: "Dated events explicitly linked to this entity in the published snapshot.",
  },
]
export function entityReasons(record: RecordItem, entity: string) {
  const result = []
  if (record.kind === "statement" && record.entityIds.includes(entity))
    result.push("Directly tagged to this entity")
  if (record.kind === "statement" && record.speakerId === entity)
    result.push("Attributed to this entity")
  if (record.kind === "mention") result.push("Name occurrence in the transcript")
  if (record.kind === "relationship" && record.entityIds.includes(entity))
    result.push("Recorded relationship involving this entity")
  return result.length ? result : ["Explicitly linked in this entity’s record"]
}
export type IndexedRecord = RecordItem & {
  fields: { label: string; text: string; normalized: string }[]
  haystack: string
  entityText: string
}
export const entityFilterIds = (record: RecordItem) =>
  record.kind === "entity" ? [record.id] : record.entityIds
export function prepareRecords(records: RecordItem[], manifest: Manifest): IndexedRecord[] {
  return records.map((record) => {
    const entities = entityFilterIds(record)
      .map((id) => manifest.entities[id])
      .filter(Boolean)
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
  if (kind === "claims" || kind === "other")
    return (
      r.kind === "statement" &&
      r.entityIds.includes(scopeEntity) &&
      (kind === "claims" ? r.type === "factual_claim" : r.type !== "factual_claim")
    )
  if (kind === "about") return r.kind === "statement" && r.entityIds.includes(scopeEntity)
  if (kind === "by") return r.kind === "statement" && r.speakerId === scopeEntity
  if (kind === "mentions") return r.kind === "mention"
  if (kind === "relationship" && scopeEntity)
    return r.kind === "relationship" && r.entityIds.includes(scopeEntity)
  return r.kind === kind || r.type === kind
}
export function filterRecords(records: IndexedRecord[], state: WorkspaceState, scopeEntity = "") {
  const tokens = tokensFor(state.q)
  const tag = state.kind === "mentions" ? "" : state.entity
  return records
    .filter(
      (r) =>
        matchesKind(r, state.kind, scopeEntity) &&
        (!tag || entityFilterIds(r).includes(tag) || r.entityText.includes(normalize(tag))) &&
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
        (state.sort === "mentions"
          ? (b.counts?.mention || 0) - (a.counts?.mention || 0)
          : state.sort === "name"
            ? a.text.localeCompare(b.text)
            : state.sort === "oldest"
              ? a.date.localeCompare(b.date)
              : b.date.localeCompare(a.date)) ||
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
    sort: route.episode
      ? "oldest"
      : route.entity || route.catalog === "episode"
        ? "newest"
        : "relevance",
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
  state.view = route.episode && p.get("view") === "transcript" ? "transcript" : "workspace"
  if (state.kind === "mentions") state.entity = ""
  if (route.catalog === "entity" && !route.entity) {
    state.from = state.to = ""
    if (!["relevance", "name", "mentions"].includes(state.sort)) state.sort = "relevance"
  }
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
    "view",
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

export function recordUrl(
  record: RecordItem,
  url: URL,
  state: WorkspaceState,
  route: WorkspaceRoute,
  base: URL,
) {
  // Entity searches identify the entity, not a filter on its evidence.
  return record.kind === "entity"
    ? new URL(record.href.replace(/^\//, ""), base)
    : stateUrl(url, { ...state, item: record.id, appearance: 0 }, route)
}

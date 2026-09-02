export type Evidence = {
  id: string
  text: string
  speaker: string
  reported_by: string
  excerpts: string[]
  href: string
  source_href: string
  time: string
  verification: {
    status?: string
    veracity?: string
    confidence?: string
    notes?: string
    sources?: { url: string; title?: string }[]
  }
}

export type Milestone = {
  id: string
  label: string
  date: string
  timestamp: number
  kind: string
  proposition: string
  review_note: string
  tags: string[]
  entity_names: string[]
  aliases: string[]
  speakers: string[]
  evidence: Evidence[]
  episode_title: string
  source_url: string
}
export type ThreadLink = { from: string; to: string; type: string; review_note: string }
export type Dataset = { id: string; title: string; milestones: Milestone[]; links: ThreadLink[] }
type Field = { label: string; text: string; normalized: string }
export type IndexedItem = Milestone & { fields: Field[]; haystack: string }
export type Entry = { item: IndexedItem; link: ThreadLink }
export type Direction = "before" | "after"
export type ExplorerState = {
  q: string
  item: string
  page: number
  depth: number
  expanded: string[]
  beforePage: number
  afterPage: number
  sidebarScroll: number
  readerScroll: number
  windowScroll: number
  readerSize: number
}

export const normalize = (value: string) =>
  value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
export const tokensFor = (query: string) => [
  ...new Set(normalize(query).trim().split(/\s+/).filter(Boolean)),
]
const chronological = (a: Milestone, b: Milestone) =>
  a.date.localeCompare(b.date) || a.timestamp - b.timestamp || a.id.localeCompare(b.id)

export function prepareIndex(data: Dataset) {
  const items: IndexedItem[] = data.milestones
    .map((item) => {
      const fields = [
        ["Title", item.label],
        ["Tag", item.tags.join(" · ")],
        ["Entity", item.entity_names.join(" · ")],
        ["Alias", item.aliases.join(" · ")],
        ["Account", item.proposition],
        ...item.evidence.flatMap((s) => [
          ["Statement", s.text],
          ...s.excerpts.map((text) => ["Source excerpt", text]),
          ["Verification note", s.verification.notes || ""],
        ]),
        ["Speaker", item.speakers.join(" · ")],
        ["Source", item.episode_title],
        ["Review note", item.review_note],
        ["Date", item.date],
        ["Type", item.kind],
        ["Record ID", item.id],
      ].map(([label, text]) => ({ label, text, normalized: normalize(text) }))
      return { ...item, fields, haystack: fields.map((field) => field.normalized).join("\n") }
    })
    .sort(chronological)
  const byId = new Map(items.map((item) => [item.id, item]))
  const before = new Map<string, Entry[]>(),
    after = new Map<string, Entry[]>()
  for (const link of data.links) {
    const parent = byId.get(link.from),
      child = byId.get(link.to)
    if (!parent || !child) continue
    if (!before.has(link.to)) before.set(link.to, [])
    if (!after.has(link.from)) after.set(link.from, [])
    before.get(link.to)!.push({ item: parent, link })
    after.get(link.from)!.push({ item: child, link })
  }
  for (const entries of [...before.values(), ...after.values()])
    entries.sort((a, b) => chronological(a.item, b.item))
  return { items, byId, before, after }
}
export type ThreadIndex = ReturnType<typeof prepareIndex>

export function search(index: ThreadIndex, query: string) {
  const tokens = tokensFor(query)
  // ponytail: benchmark this in-memory scan before adding a search dependency.
  return index.items.filter((item) => tokens.every((token) => item.haystack.includes(token)))
}

export function matchContext(item: IndexedItem, query: string) {
  const tokens = tokensFor(query)
  const readable = [
    "Account",
    "Statement",
    "Source excerpt",
    "Tag",
    "Entity",
    "Alias",
    "Review note",
    "Verification note",
    "Title",
  ]
  const priority = (field: Field) =>
    readable.includes(field.label) ? readable.indexOf(field.label) : readable.length
  const ranked = item.fields
    .map((field) => ({
      ...field,
      hits: tokens.filter((token) => field.normalized.includes(token)).length,
    }))
    .sort((a, b) => b.hits - a.hits || priority(a) - priority(b))
  const best = ranked[0]
  if (!best?.hits)
    return {
      label: "Account",
      text: item.proposition.slice(0, 150) + (item.proposition.length > 150 ? "…" : ""),
    }
  const start = Math.max(
    0,
    Math.min(...tokens.map((token) => best.normalized.indexOf(token)).filter((at) => at >= 0)) - 40,
  )
  return {
    label: best.label,
    text: `${start ? "…" : ""}${best.text.slice(start, start + 150)}${best.text.length > start + 150 ? "…" : ""}`,
  }
}

export function stateFromUrl(href: string, index: ThreadIndex): ExplorerState {
  const url = new URL(href)
  let id = url.searchParams.get("item") || ""
  try {
    id = decodeURIComponent(url.hash.slice(1)) || id
  } catch {
    /* A malformed fragment is not a record ID. */
  }
  return {
    q: url.searchParams.get("q") || "",
    item: index.byId.has(id) ? id : "",
    page: Math.max(1, parseInt(url.searchParams.get("page") || "", 10) || 1),
    depth: 0,
    expanded: [],
    beforePage: 1,
    afterPage: 1,
    sidebarScroll: 0,
    readerScroll: 0,
    windowScroll: 0,
    readerSize: 18,
  }
}

export function urlFor(state: ExplorerState, currentUrl: string) {
  const url = new URL(currentUrl)
  for (const key of ["q", "page", "item"]) url.searchParams.delete(key)
  if (state.q) url.searchParams.set("q", state.q)
  if (state.page > 1) url.searchParams.set("page", String(state.page))
  url.hash = state.item
  return url
}

const relations: Record<string, [string, string]> = {
  refines: ["Refined by selected item", "Adds detail to selected item"],
  contradicts: ["Challenged by selected item", "Challenges selected item"],
  supports: ["Supported by selected item", "Supports selected item"],
  corroborates: ["Corroborated by selected item", "Corroborates selected item"],
  repeats: ["Repeated by selected item", "Repeats selected item"],
  retracts: ["Retracted by selected item", "Retracts selected item"],
  expands: ["Expanded by selected item", "Expands on selected item"],
  reframes: ["Reframed by selected item", "Reframes selected item"],
  adds_evidence: ["Evidence added by selected item", "Adds evidence to selected item"],
  narrows: ["Narrowed by selected item", "Narrows selected item"],
  refutes: ["Refuted by selected item", "Refutes selected item"],
}
export const relationLabel = (type: string, direction: Direction) =>
  relations[type]?.[direction === "before" ? 0 : 1] ||
  `Linked ${direction === "before" ? "to" : "from"} selected item · ${type.replaceAll("_", " ")}`

// Each edge has its own lane and selected-card port; siblings never form a chain.
export function parallelConnector({
  direction,
  index,
  count,
  branchX,
  branchY,
  selectedX,
  selectedTop,
  selectedBottom,
  gutter,
}: {
  direction: Direction
  index: number
  count: number
  branchX: number
  branchY: number
  selectedX: number
  selectedTop: number
  selectedBottom: number
  gutter: number
}) {
  const laneGap = Math.min(12, (gutter - 22) / Math.max(1, count - 1))
  const portGap = Math.min(10, (selectedBottom - selectedTop - 48) / Math.max(1, count - 1))
  const lane = direction === "before" ? index : count - index - 1
  const laneX = 10 + lane * laneGap
  const selectedY =
    direction === "before"
      ? selectedTop + 24 + (count - index - 1) * portGap
      : selectedBottom - 24 - index * portGap
  return direction === "before"
    ? [
        [branchX, branchY],
        [laneX, branchY],
        [laneX, selectedY],
        [selectedX, selectedY],
      ]
    : [
        [selectedX, selectedY],
        [laneX, selectedY],
        [laneX, branchY],
        [branchX, branchY],
      ]
}

import { dateLabel, type RecordItem, type Manifest } from "./record-workspace-model"

export type SavedItem = { id: string; episode: string; appearance: number; note: string }
const storageKey = "candace-research-notebook-v1"
let memory: SavedItem[] | undefined
export function savedKey(item: Pick<SavedItem, "id" | "episode">) {
  return item.episode ? `${item.episode}::${item.id}` : item.id
}
export function recordKey(record: RecordItem) {
  return savedKey({
    id: record.id,
    episode: ["passage", "mention"].includes(record.kind)
      ? record.appearances[0]?.episode || ""
      : "",
  })
}
export function parseSaved(value: string): SavedItem[] {
  try {
    const rows: unknown = JSON.parse(value)
    if (!Array.isArray(rows)) return []
    return [
      ...new Map(
        rows
          .filter((r) => r && typeof r.id === "string" && typeof r.episode === "string")
          .map((r) => {
            const item = {
              id: r.id,
              episode: r.episode,
              appearance: Math.max(0, Number.parseInt(r.appearance, 10) || 0),
              note: typeof r.note === "string" ? r.note : "",
            }
            return [savedKey(item), item] as const
          }),
      ).values(),
    ]
  } catch {
    return []
  }
}
export function readNotebook(): SavedItem[] {
  if (memory) return memory
  try {
    return parseSaved(localStorage.getItem(storageKey) || "[]")
  } catch {
    return []
  }
}
export function writeNotebook(items: SavedItem[]): boolean {
  memory = items
  try {
    localStorage.setItem(storageKey, JSON.stringify(items))
    memory = undefined
    return true
  } catch {
    return false
  }
}
export function citation(record: RecordItem, manifest: Manifest, base: URL, appearance = 0) {
  const app = record.appearances[Math.min(appearance, record.appearances.length - 1)]
  const ep = app && manifest.episodes[app.episode]
  const href = new URL(record.href.replace(/^\//, ""), base).href
  const passage = record.kind === "passage" ? record.id : `passage-${app?.anchor}`
  const transcript = ep
    ? new URL(`episodes/${ep.slug}?view=transcript&item=${passage}`, base).href
    : ""
  return [
    record.text,
    [record.speaker, ep?.title, dateLabel(ep?.date || record.date), app?.time]
      .filter(Boolean)
      .join(" · "),
    `Record: ${href}`,
    transcript ? `Transcript: ${transcript}` : "",
    app?.snippet ? `Excerpt: ${app.snippet}` : "",
  ]
    .filter(Boolean)
    .join("\n")
}
// Prevent spreadsheet programs from treating source text or notes as formulas.
export const csvCell = (value: string) =>
  `"${(/^[\s]*[=+@-]/.test(value) ? "'" + value : value).replaceAll('"', '""')}"`

// Workspace pages are lightweight shells; index their source records, not placeholders.
import { readFile } from "node:fs/promises"
import { resolve, join } from "node:path"
import { createIndex, close } from "pagefind"

const publicDir = resolve(process.argv[2] || "public")
const dataDir = join(publicDir, "assets/workspace")
const read = async (file) => JSON.parse(await readFile(join(dataDir, file), "utf8"))
const manifest = await read("manifest.json")
const { index, errors } = await createIndex({ forceLanguage: "en" })
if (!index || errors.length) throw new Error(errors.join("\n"))
const check = (result) => {
  if (result.errors.length) throw new Error(result.errors.join("\n"))
}
let count = 0
try {
  // Keep reviewed theory pages searchable alongside the record and transcript index.
  check(await index.addDirectory({ path: publicDir, glob: "threads/**/*.html" }))
  for (const kind of Object.keys(manifest.catalogs)) {
    const { records } = await read(`catalogs/${kind}.json`)
    for (const r of records) {
      const entities = r.entityIds.map((id) => manifest.entities[id]).filter(Boolean)
      check(
        await index.addCustomRecord({
          url: r.href.replace(/^\//, ""),
          language: "en",
          content: [
            r.text,
            r.notes,
            r.speaker,
            r.reportedBy,
            ...r.tags,
            ...(r.aliases || []),
            ...entities.flatMap((e) => [e.name, ...e.aliases]),
            r.verification.notes,
            ...r.appearances.map((a) => a.snippet),
          ]
            .filter(Boolean)
            .join("\n"),
          meta: { title: r.text.slice(0, 150) },
          filters: { kind: [kind] },
        }),
      )
      count++
    }
  }
  for (const id of Object.keys(manifest.episodes)) {
    const { records } = await read(`episodes/${id}.json`)
    for (const r of records.filter((r) => r.kind === "passage")) {
      const app = r.appearances[0],
        episode = manifest.episodes[app.episode]
      check(
        await index.addCustomRecord({
          url: r.href.replace(/^\//, ""),
          content: r.text,
          language: "en",
          meta: { title: `${episode.title} · ${app.time}` },
          filters: { kind: ["transcript"] },
        }),
      )
      count++
    }
  }
  check(await index.writeFiles({ outputPath: join(publicDir, "pagefind") }))
  console.log(`Indexed ${count.toLocaleString()} evidence records and transcript passages.`)
} finally {
  await close()
}

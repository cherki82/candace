import assert from "node:assert/strict"
import { test } from "node:test"
import { parseSaved, savedKey, recordKey, citation, csvCell } from "./research-notebook"
import type { RecordItem, Manifest } from "./record-workspace-model"

test("saved passages remain distinct between episodes and malformed storage is tolerated", () => {
  const rows = parseSaved(
    JSON.stringify([
      { id: "passage-t-00-01-00", episode: "one", appearance: -1, note: "First source" },
      { id: "passage-t-00-01-00", episode: "two", appearance: 0, note: "Other source" },
      { id: "s1", episode: "", appearance: 2, note: "Keep" },
      { id: "s1", episode: "", appearance: 3, note: "Updated" },
      null,
      {},
      { id: 5, episode: "" },
    ]),
  )
  assert.equal(rows.length, 3)
  assert.equal(rows[0].appearance, 0)
  assert.notEqual(savedKey(rows[0]), savedKey(rows[1]))
  assert.equal(rows[2].note, "Updated")
  assert.deepEqual(parseSaved("broken"), [])
  assert.deepEqual(parseSaved("{}"), [])
})

test("citations retain source attribution, deployment prefix and simultaneous passage identity", () => {
  const record = {
    id: "passage-t-00-01-00-2",
    kind: "passage",
    text: "A source excerpt",
    speaker: "Alice",
    date: "2026-01-01",
    href: "/episodes/ep-one?item=passage-t-00-01-00-2",
    appearances: [
      {
        episode: "one",
        anchor: "t-00-01-00",
        time: "00:01:00",
        snippet: "Exact transcript",
        at: 60,
        index: 2,
      },
    ],
  } as RecordItem
  const manifest = {
    schema: 1,
    revision: "test",
    entities: {},
    catalogs: {},
    episodes: {
      one: {
        id: "one",
        slug: "ep-one",
        title: "Original episode",
        date: "2026-01-01",
        url: "",
        channel: "",
      },
    },
  } satisfies Manifest
  assert.equal(recordKey(record), "one::passage-t-00-01-00-2")
  const text = citation(record, manifest, new URL("https://example.test/candace/"))
  assert.ok(text.includes("Alice · Original episode · 1 Jan 2026 · 00:01:00"))
  assert.ok(
    text.includes(
      "Transcript: https://example.test/candace/episodes/ep-one?view=transcript&item=passage-t-00-01-00-2",
    ),
  )
  assert.ok(text.includes("Excerpt: Exact transcript"))
})

test("CSV exports quote multiline notes and cannot turn source text into spreadsheet formulas", () => {
  assert.equal(csvCell('A "quote"\nNote'), '"A ""quote""\nNote"')
  assert.equal(csvCell(" =1+1"), '"\' =1+1"')
  assert.equal(csvCell("Plain text"), '"Plain text"')
})

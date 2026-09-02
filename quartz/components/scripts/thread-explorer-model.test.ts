import assert from "node:assert/strict"
import { test } from "node:test"
import {
  prepareIndex,
  search,
  matchContext,
  stateFromUrl,
  urlFor,
  parallelConnector,
  relationLabel,
  type Milestone,
  type Dataset,
} from "./thread-explorer-model"

const item = (id: string, patch: Partial<Milestone> = {}): Milestone => ({
  id,
  label: id,
  date: "2026-01-01",
  timestamp: 0,
  kind: "refined",
  proposition: "An account",
  review_note: "",
  tags: [],
  entity_names: [],
  aliases: [],
  speakers: [],
  evidence: [],
  episode_title: "",
  source_url: "",
  ...patch,
})
const data: Dataset = {
  id: "thread-a",
  title: "Test thread",
  milestones: [
    item("a", { tags: ["Hamptons"], aliases: ["Snow"], entity_names: ["Fort Huachuca"] }),
    item("b", {
      date: "2026-01-02",
      review_note: "Café account",
      evidence: [
        {
          id: "s-a",
          text: "Egyptian connection",
          speaker: "A",
          reported_by: "B",
          excerpts: ["The full Hamptons excerpt"],
          time: "00:00:10",
          href: "/statements/s-a",
          source_href: "/episodes/a#t-00-00-10",
          verification: { notes: "Unresolved airfield detail" },
        },
      ],
    }),
    item("c", { date: "2026-01-03" }),
    item("unrelated"),
  ],
  links: [
    { from: "a", to: "c", type: "adds_evidence", review_note: "A direct link" },
    { from: "b", to: "c", type: "contradicts", review_note: "Another direct link" },
    { from: "missing", to: "c", type: "refines", review_note: "Dangling" },
  ],
}
const index = prepareIndex(data)

test("search covers tags, aliases, statements, source excerpts and verification notes", () => {
  assert.deepEqual(
    search(index, "hamptons").map((i) => i.id),
    ["a", "b"],
  )
  for (const query of ["Egyptian", "airfield", "cafe"])
    assert.deepEqual(
      search(index, query).map((i) => i.id),
      ["b"],
    )
  assert.deepEqual(
    search(index, "Snow Fort Huachuca").map((i) => i.id),
    ["a"],
  )
  assert.deepEqual(
    search(index, "Huachuca Snow Fort").map((i) => i.id),
    ["a"],
  )
  assert.equal(search(index, "hamptons nonexistent").length, 0)
  assert.equal(search(index, "").length, data.milestones.length)
})

test("results explain a match outside the headline", () => {
  assert.equal(matchContext(index.byId.get("a")!, "Hamptons").label, "Tag")
  assert.equal(matchContext(index.byId.get("b")!, "Hamptons").label, "Source excerpt")
  assert.equal(matchContext(index.byId.get("b")!, "airfield").label, "Verification note")
  assert.ok(matchContext(index.byId.get("b")!, "Egyptian").text.includes("Egyptian"))
})

test("before/after indexes include only explicit direct links, never chronological siblings", () => {
  assert.deepEqual(
    index.before.get("c")?.map((e) => e.item.id),
    ["a", "b"],
  )
  assert.deepEqual(
    index.after.get("a")?.map((e) => e.item.id),
    ["c"],
  )
  assert.equal(index.before.has("b"), false)
  assert.equal(index.after.has("unrelated"), false)
})

test("old milestone hashes and prototype item URLs both resolve without losing the deployment prefix", () => {
  const base = "https://example.test/candace/threads/test?q=hamptons&page=2#b"
  const state = stateFromUrl(base, index)
  assert.equal(state.item, "b")
  assert.equal(state.page, 2)
  assert.equal(state.readerSize, 18)
  assert.equal(urlFor(state, base).href, base)
  assert.equal(stateFromUrl("https://example.test/thread?item=a", index).item, "a")
  assert.equal(stateFromUrl("https://example.test/thread?page=-2#missing", index).page, 1)
  assert.equal(stateFromUrl("https://example.test/thread#missing", index).item, "")
  assert.equal(
    urlFor({ ...state, item: "", q: "", page: 1 }, base).href,
    "https://example.test/candace/threads/test",
  )
})

for (const direction of ["before", "after"] as const)
  test(`${direction}: every branch gets a separate lane and selected-card port`, () => {
    const paths = Array.from({ length: 11 }, (_, i) =>
      parallelConnector({
        direction,
        index: i,
        count: 11,
        gutter: 120,
        branchX: 120,
        branchY: direction === "before" ? i * 100 : 1800 + i * 100,
        selectedX: 120,
        selectedTop: 1200,
        selectedBottom: 1700,
      }),
    )
    assert.equal(new Set(paths.map((p) => p[1][0])).size, 11)
    const selectedEnds = paths.map((p) => (direction === "before" ? p[3] : p[0]))
    assert.equal(new Set(selectedEnds.map((p) => p[1])).size, 11)
    assert.ok(selectedEnds.every(([x, y]) => x === 120 && y > 1200 && y < 1700))
    assert.ok(paths.every((p) => p.every((point) => point.every(Number.isFinite))))
  })

test("relationship labels always name the selected item and preserve direction", () => {
  assert.equal(relationLabel("adds_evidence", "after"), "Adds evidence to selected item")
  assert.equal(relationLabel("adds_evidence", "before"), "Evidence added by selected item")
  for (const type of [
    "refines",
    "contradicts",
    "expands",
    "narrows",
    "corroborates",
    "adds_evidence",
    "refutes",
    "retracts",
    "repeats",
    "unknown",
  ])
    for (const direction of ["before", "after"] as const)
      assert.ok(relationLabel(type, direction).includes("selected item"))
})

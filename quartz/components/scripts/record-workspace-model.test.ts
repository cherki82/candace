import assert from "node:assert/strict"
import { test } from "node:test"
import {
  defaults,
  workspaceRoute,
  readState,
  stateUrl,
  prepareRecords,
  filterRecords,
  highlight,
  outcomeFor,
  matchPassage,
  type RecordItem,
  type Manifest,
} from "./record-workspace-model"

const manifest: Manifest = {
  schema: 1,
  revision: "test",
  catalogs: {},
  episodes: {},
  entities: {
    a: {
      id: "a",
      name: "The Hamptons",
      aliases: ["East End"],
      tags: ["location"],
      type: "place",
      counts: {},
      verification: {},
    },
  },
}
const record = (id: string, patch: Partial<RecordItem> = {}): RecordItem => ({
  id,
  kind: "statement",
  type: "factual_claim",
  text: "A meeting occurred",
  date: "2026-01-01",
  speaker: "Speaker",
  speakerId: "s",
  reportedBy: "",
  entityIds: [],
  tags: [],
  appearances: [],
  verification: {},
  links: [],
  href: `/statements/${id}`,
  ...patch,
})
const records = prepareRecords(
  [
    record("tagged", { entityIds: ["a"] }),
    record("word", { text: "Hamptons visit" }),
    record("snippet", {
      appearances: [
        {
          episode: "ep",
          at: 0,
          time: "00:00:00",
          anchor: "t-00-00-00",
          index: 0,
          snippet: "Meeting in Hamptons",
        },
      ],
    }),
    record("unknown", { date: "", kind: "mention" }),
    record("by", { speakerId: "a" }),
  ],
  manifest,
)

test("the main catalogs, details and legacy transcript links share the workspace", () => {
  for (const slug of [
    "index",
    "index/entities",
    "index/episodes",
    "index/statements",
    "index/sources",
    "index/relationships",
    "index/event-explorer",
    "index/timeline",
    "index/explorer",
    "entities/index",
    "entities/a",
    "statements/a",
    "events/a",
    "relationships/a",
    "episodes/ep-abc",
    "timestamps/ep-abc/t-00-01-00",
    "tags/index",
    "tags/person",
  ])
    assert.ok(workspaceRoute(slug), slug)
  assert.equal(workspaceRoute("threads/theory"), undefined)
  assert.equal(workspaceRoute("episodes/ep-abc")?.episode, "abc")
})
test("search finds direct words, tags, aliases and attached excerpts", () => {
  assert.deepEqual(
    filterRecords(records, { ...defaults, q: "Hamptons" })
      .map((r) => r.id)
      .sort(),
    ["snippet", "tagged", "word"],
  )
  assert.equal(filterRecords(records, { ...defaults, q: "east end" })[0].id, "tagged")
  assert.equal(matchPassage(records[0], "Hamptons").label, "Tag")
})
test("about, by and raw mentions remain distinct, with no episode tag leakage", () => {
  assert.deepEqual(
    filterRecords(records, { ...defaults, kind: "about" }, "a").map((r) => r.id),
    ["tagged"],
  )
  assert.deepEqual(
    filterRecords(records, { ...defaults, kind: "by" }, "a").map((r) => r.id),
    ["by"],
  )
  assert.deepEqual(
    filterRecords(records, { ...defaults, entity: "Hamptons" }).map((r) => r.id),
    ["tagged"],
  )
  assert.deepEqual(
    filterRecords(records, { ...defaults, kind: "mentions", entity: "Hamptons" }).map((r) => r.id),
    ["unknown"],
  )
})
test("date range excludes unknown dates", () => {
  assert.ok(
    !filterRecords(records, { ...defaults, from: "2025-01-01" }).some((r) => r.id === "unknown"),
  )
})
test("URLs round trip cleared detail selections and default filters", () => {
  for (const route of [
    workspaceRoute("statements/a")!,
    workspaceRoute("index/claims")!,
    workspaceRoute("tags/hamptons")!,
    workspaceRoute("episodes/ep-abc")!,
  ]) {
    const url = stateUrl(new URL("https://example.test/candace/statements/a#old"), defaults, route)
    assert.deepEqual(readState(url, route), defaults)
    assert.equal(url.hash, "")
  }
  const state = {
    ...defaults,
    q: "Café & Hamptons",
    kind: "about",
    item: "s",
    page: 3,
    group: true,
    appearance: 2,
  }
  assert.deepEqual(
    readState(stateUrl(new URL("https://example.test"), state), { catalog: "all", title: "" }),
    state,
  )
})
test("legacy timestamp anchors select the matching passage", () => {
  assert.equal(
    readState(
      new URL("https://example.test/episodes/ep-abc#ent-a-t-00-01-00"),
      workspaceRoute("episodes/ep-abc")!,
    ).item,
    "passage-t-00-01-00",
  )
})
test("search highlighting escapes HTML and matches accents", () => {
  assert.equal(
    highlight("<script>Café</script>", "cafe"),
    "&lt;script&gt;<mark>Café</mark>&lt;/script&gt;",
  )
})
test("non-factual statements cannot acquire a true badge", () => {
  assert.equal(
    outcomeFor(
      record("opinion", {
        type: "opinion",
        verification: { status: "verified", veracity: "true" },
      }),
    ),
    "recorded",
  )
})

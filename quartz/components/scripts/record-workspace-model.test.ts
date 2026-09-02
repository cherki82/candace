import assert from "node:assert/strict"
import { test } from "node:test"
import {
  defaults,
  workspaceRoute,
  workspaceContext,
  entityTypeLabel,
  readState,
  stateUrl,
  prepareRecords,
  filterRecords,
  highlight,
  outcomeFor,
  matchPassage,
  recordMetadata,
  recordUrl,
  entityReasons,
  entityViews,
  assessmentLabel,
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
test("entity metadata shows evidence counts rather than an inapplicable date", () => {
  const entity = record("person", {
    kind: "entity",
    date: "",
    counts: { mention: 1234, statement: 1 },
  })
  assert.deepEqual(recordMetadata(entity), { label: "1,234 mentions · 1 statement", date: "" })
  assert.deepEqual(recordMetadata({ ...entity, counts: { mention: 0, statement: 0 } }), {
    label: "0 mentions · 0 statements",
    date: "",
  })
  assert.deepEqual(recordMetadata({ ...entity, counts: undefined }), { label: "", date: "" })
  assert.equal(recordMetadata(record("dated")).date, "1 Jan 2026")
  assert.equal(recordMetadata(record("undated", { date: "" })).date, "Date not recorded")
})
test("directory, profile, source and record levels have distinct context and parent links", () => {
  for (const [slug, view, parent] of [
    ["index/entities", "entity-directory", undefined],
    ["entities/index", "entity-directory", undefined],
    ["entities/person-charlie-kirk", "entity-profile", "/index/entities"],
    ["episodes/ep-abc", "episode", "/index/episodes"],
    ["timestamps/ep-abc/t-00-01-00", "episode", "/index/episodes"],
    ["statements/a", "record", "/index/statements"],
    ["events/a", "record", "/index/event-explorer"],
    ["relationships/a", "record", "/index/relationships"],
    ["index/explorer", "catalog", undefined],
  ]) {
    const context = workspaceContext(workspaceRoute(slug!)!)
    assert.equal(context.view, view)
    assert.equal(context.parent?.href, parent)
    assert.ok(context.eyebrow)
    assert.ok(context.subtitle)
  }
})
test("entity types use readable names without changing stored values", () => {
  assert.equal(entityTypeLabel("PERSON"), "Person")
  assert.equal(entityTypeLabel("gpe"), "Place")
  assert.equal(entityTypeLabel("ORG"), "Organization")
  assert.equal(entityTypeLabel("ANONYMOUS_SOURCE"), "Anonymous source")
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
test("entity catalogs discard inapplicable dates and sort by name or mention count", () => {
  const route = workspaceRoute("index/entities")!
  const url = new URL(
    "https://example.test/index/entities?from=2026-01-01&to=2026-02-01&sort=newest",
  )
  const state = readState(url, route)
  assert.equal(state.from, "")
  assert.equal(state.to, "")
  assert.equal(state.sort, "relevance")
  assert.equal(readState(url, workspaceRoute("entities/a")!).from, "2026-01-01")
  const entities = prepareRecords(
    [
      record("z", { kind: "entity", text: "Zulu", date: "", counts: { mention: 10 } }),
      record("a", { kind: "entity", text: "Alpha", date: "", counts: { mention: 2 } }),
      record("b", { kind: "entity", text: "Beta", date: "" }),
    ],
    manifest,
  )
  assert.deepEqual(
    filterRecords(entities, { ...state, sort: "name" }).map((r) => r.id),
    ["a", "b", "z"],
  )
  assert.deepEqual(
    filterRecords(entities, { ...state, sort: "mentions" }).map((r) => r.id),
    ["z", "a", "b"],
  )
  assert.equal(
    readState(new URL("https://example.test/index/entities?sort=mentions"), route).sort,
    "mentions",
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
test("entity results open the full entity workspace without carrying catalog filters", () => {
  const entity = record("person-charlie-kirk", {
    kind: "entity",
    href: "/entities/person-charlie-kirk",
  })
  const state = { ...defaults, q: "charlie kirk", kind: "person", page: 3, appearance: 2 }
  for (const prefix of ["/", "/candace/"])
    for (const slug of ["index/entities", "index/explorer", "index"]) {
      const base = new URL(`https://example.test${prefix}`)
      const current = new URL(`${slug}?q=charlie+kirk&item=old#old`, base)
      assert.equal(
        recordUrl(entity, current, state, workspaceRoute(slug)!, base).href,
        new URL("entities/person-charlie-kirk", base).href,
      )
      assert.equal(current.searchParams.get("item"), "old")
      assert.equal(state.q, "charlie kirk")
    }
})
test("other results still open inline and preserve the current search", () => {
  const route = workspaceRoute("index/explorer")!
  const base = new URL("https://example.test/candace/")
  const current = new URL("index/explorer", base)
  const state = { ...defaults, q: "Hamptons", page: 2, appearance: 3 }
  for (const kind of ["statement", "event", "relationship", "source", "episode"])
    assert.deepEqual(
      readState(recordUrl(record("selected", { kind }), current, state, route, base), route),
      { ...state, item: "selected", appearance: 0 },
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

test("entity claims are directly tagged factual statements, not opinions or incidental matches", () => {
  const items = prepareRecords(
    [
      record("direct", { entityIds: ["a"] }),
      record("both", { entityIds: ["a"], speakerId: "a" }),
      record("opinion", { entityIds: ["a"], type: "opinion" }),
      record("accusation", { entityIds: ["a"], type: "accusation" }),
      record("by", { speakerId: "a" }),
      record("unrelated", { text: "Hamptons", tags: ["Hamptons"] }),
      record("mention", { kind: "mention" }),
      record("connection", { kind: "relationship", entityIds: ["a"] }),
      record("event", { kind: "event", entityIds: ["a"] }),
    ],
    manifest,
  )
  const ids = (kind: string) =>
    filterRecords(items, { ...defaults, kind }, "a")
      .map((r) => r.id)
      .sort()
  assert.deepEqual(ids("claims"), ["both", "direct"])
  assert.deepEqual(ids("other"), ["accusation", "opinion"])
  assert.deepEqual(ids("by"), ["both", "by"])
  assert.deepEqual(ids("mentions"), ["mention"])
  assert.deepEqual(ids("relationship"), ["connection"])
  assert.equal(ids("all").length, items.length)
  assert.deepEqual(ids("about"), ["accusation", "both", "direct", "opinion"])
  assert.deepEqual(entityReasons(items[1], "a"), [
    "Directly tagged to this entity",
    "Attributed to this entity",
  ])
  assert.deepEqual(entityReasons(items[6], "a"), ["Name occurrence in the transcript"])
  assert.equal(entityViews.length, 6)
  assert.equal(assessmentLabel("mixed"), "Mixed assessment")
  assert.equal(
    assessmentLabel(
      outcomeFor(
        record("opinion", {
          type: "opinion",
          verification: { status: "verified", veracity: "true" },
        }),
      ),
    ),
    "Review recorded",
  )
})
test("entity views default to claims but preserve legacy and explicit filters in share URLs", () => {
  const route = workspaceRoute("entities/a")!
  const url = new URL("https://example.test/candace/entities/a")
  assert.equal(readState(url, route).kind, "claims")
  assert.equal(readState(url, route).sort, "newest")
  for (const kind of [...entityViews.map((v) => v.kind), "about", "event", "factual_claim"]) {
    const state = { ...defaults, kind, q: "Hamptons", item: "both", page: 2, appearance: 1 }
    assert.deepEqual(readState(stateUrl(url, state, route), route), state)
  }
  assert.equal(readState(new URL(`${url}?kind=about`), route).kind, "about")
  assert.equal(readState(new URL(`${url}?kind=mentions&entity=unrelated`), route).entity, "")
  assert.equal(recordMetadata(record("multi-source"), "2025-06-17").date, "17 Jun 2025")
})
test("full transcript links retain their reading mode and timestamp across navigation", () => {
  const route = workspaceRoute("episodes/ep-abc")!
  const url = new URL("https://example.test/candace/episodes/ep-abc?view=transcript#t-00-01-00")
  const state = readState(url, route)
  assert.equal(state.view, "transcript")
  assert.equal(state.item, "passage-t-00-01-00")
  assert.deepEqual(readState(stateUrl(url, state, route), route), state)
  assert.equal(
    readState(new URL("https://example.test/candace/episodes/ep-abc?view=workspace"), route).view,
    "workspace",
  )
  assert.equal(readState(url, workspaceRoute("entities/a")!).view, "workspace")
})

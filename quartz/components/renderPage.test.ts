import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

test("content index fetch remains lazy and shared", async () => {
  const source = await readFile(new URL("./renderPage.tsx", import.meta.url), "utf8")
  assert.match(source, /const fetchData = \(\) => contentIndexPromise \?\?= fetch/)
  assert.doesNotMatch(source, /const fetchData = fetch/)
})

test("core assets are versioned together to prevent mixed-release pages", async () => {
  const source = await readFile(new URL("./renderPage.tsx", import.meta.url), "utf8")
  for (const name of ["index.css", "prescript.js", "postscript.js", "static/contentIndex.json"])
    assert.ok(source.includes(`asset("${name}")`))
  assert.ok(source.includes("encodeURIComponent(version)"))
})

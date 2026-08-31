import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

test("content index fetch remains lazy and shared", async () => {
  const source = await readFile(new URL("./renderPage.tsx", import.meta.url), "utf8")
  assert.match(source, /const fetchData = \(\) => contentIndexPromise \?\?= fetch/)
  assert.doesNotMatch(source, /const fetchData = fetch/)
})

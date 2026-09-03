import assert from "node:assert/strict"
import { mkdtemp, readFile, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { test } from "node:test"
import { VFile } from "vfile"
import type { Root } from "hast"
import type { BuildCtx } from "../../util/ctx"
import type { FullSlug } from "../../util/path"
import { Transcripts } from "./transcripts"

test("lazy transcripts preserve links and distinguish speaker turns at the same timestamp", async () => {
  const output = await mkdtemp(join(tmpdir(), "quartz-transcripts-"))
  try {
    const tree: Root = {
      type: "root",
      children: [1, 2].map(() => ({
        type: "element",
        tagName: "p",
        properties: {},
        children: [
          {
            type: "element",
            tagName: "strong",
            properties: {},
            children: [
              {
                type: "element",
                tagName: "a",
                properties: {
                  href: "../timestamps/ep-a/t-00-01-00",
                  className: ["timestamp-link"],
                },
                children: [{ type: "text", value: "00:01:00" }],
              },
            ],
          },
          {
            type: "element",
            tagName: "a",
            properties: { href: "../entities/person-a" },
            children: [{ type: "text", value: "Alice" }],
          },
        ],
      })),
    }
    const episode = new VFile()
    episode.data.slug = "episodes/ep-a" as FullSlug
    const catalog = new VFile()
    catalog.data.slug = "index/episodes" as FullSlug
    const emitted = []
    for await (const path of await Transcripts().emit(
      { argv: { output } } as BuildCtx,
      [
        [tree, episode],
        [tree, catalog],
      ],
      { css: [], js: [], additionalHead: [] },
    ))
      emitted.push(path)
    assert.equal(emitted.length, 1)
    const { html } = JSON.parse(await readFile(emitted[0], "utf8"))
    assert.match(html, /id="t-00-01-00"/)
    assert.match(html, /id="t-00-01-00-2"/)
    assert.equal(html.match(/href="\.\.\/entities\/person-a"/g).length, 2)
  } finally {
    await rm(output, { recursive: true, force: true })
  }
})

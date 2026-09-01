import assert from "node:assert/strict"
import test from "node:test"
import { Element, Root } from "hast"
import { VFile } from "vfile"
import { BuildCtx } from "../../util/ctx"
import { FullSlug } from "../../util/path"
import { CrawlLinks } from "./links"

function transformLinkText(text: string, href: string): string {
  const link: Element = {
    type: "element",
    tagName: "a",
    properties: { href },
    children: [{ type: "text", value: text }],
  }
  const tree: Root = { type: "root", children: [link] }
  const file = new VFile()
  file.data.slug = "index" as FullSlug
  const plugins = CrawlLinks({ markdownLinkResolution: "absolute" }).htmlPlugins!({
    allSlugs: ["episodes/example" as FullSlug],
  } as BuildCtx)

  ;(plugins[0] as () => (tree: Root, file: VFile) => void)()(tree, file)
  assert.equal(link.children[0].type, "text")
  return link.children[0].value
}

test("pretty links preserve aliases containing slashes", () => {
  assert.equal(
    transformLinkText("Exclusive footage from 9/10", "/episodes/example"),
    "Exclusive footage from 9/10",
  )
  assert.equal(transformLinkText("/episodes/example", "/episodes/example"), "example")
})

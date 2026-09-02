import test from "node:test"
import assert from "node:assert/strict"
import { render } from "preact-render-to-string"
import { h } from "preact"
import ArticleTitle from "./ArticleTitle"
import { QuartzComponentProps } from "./types"

const Title = ArticleTitle()
function markup(title: string, heading: string) {
  const props = {
    fileData: { frontmatter: { title } },
    tree: {
      type: "root",
      children: [
        {
          type: "element",
          tagName: "h1",
          properties: {},
          children: [{ type: "text", value: heading }],
        },
      ],
    },
  } as unknown as QuartzComponentProps
  return render(h(Title, props))
}
test("an appendix heading must not suppress the page title", () => {
  assert.match(markup("Episode title", "Appendix: Knowledge Graph Data"), />Episode title<\/h1>/)
})
test("a matching content heading avoids duplication, including smart punctuation", () => {
  assert.equal(markup("Donald J. Trump", "Donald J. Trump"), "")
  assert.equal(markup("Charlie's account", "Charlie’s account"), "")
})

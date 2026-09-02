import test from "node:test"
import assert from "node:assert/strict"
import { render } from "preact-render-to-string"
import { h } from "preact"
import SiteHeader from "./SiteHeader"
import { QuartzComponentProps } from "./types"

const Header = SiteHeader()
function markup(slug: string) {
  return render(
    h(Header, {
      fileData: { slug },
      cfg: { pageTitle: "Candace Knowledge Graph", baseUrl: "example.com/candace" },
    } as QuartzComponentProps),
  )
}

test("shared header keeps all destinations reachable under the deployment prefix", () => {
  for (const slug of [
    "index",
    "entities/person-donald-trump",
    "episodes/ep-test",
    "tags/example",
    "relationships/a/b",
  ]) {
    const html = markup(slug)
    assert.match(html, /aria-label="Candace Knowledge Graph home"/)
    assert.match(html, /Candace<br\/><strong>Knowledge Graph<\/strong>/)
    assert.doesNotMatch(html, /Content Knowledge Graph|Content<br/)
    const page = new URL(`https://example.com/candace/${slug === "index" ? "" : slug}`)
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => new URL(m[1], page))
    assert.equal(new Set(hrefs.map((url) => url.href)).size, 12)
    assert.ok(hrefs.every((url) => url.pathname.startsWith("/candace/")))
    assert.ok(
      hrefs.some((url) =>
        url.pathname.endsWith("/threads/thread-charlie-kirk-assassination-alternative-theories"),
      ),
    )
    assert.ok(hrefs.some((url) => url.hash === "#transcript-search"))
    assert.match(html, /<details class="site-more"/)
    assert.match(html, /<summary>More<\/summary>/)
  }
})

test("active navigation is rendered for detail, index, and secondary pages", () => {
  for (const [slug, label] of [
    ["entities/person-donald-trump", "Entities"],
    ["index/entities", "Entities"],
    ["episodes/ep-test", "Episodes"],
    ["events/event-test", "Events"],
    ["index/threads", "Theory threads"],
    ["statements/statement-test", "All statements"],
  ]) {
    const html = markup(slug)
    assert.match(html, new RegExp(`aria-current="page">${label}</a>`))
    const active = [...html.matchAll(/aria-current="page">([^<]+)<\/a>/g)]
    assert.ok(active.length > 0 && active.every((match) => match[1] === label))
  }
  assert.match(markup("index/claims"), /data-active="true"/)
  assert.doesNotMatch(markup("index"), /aria-current/)
})

test("404 navigation works even when the missing URL is deeply nested", () => {
  const html = markup("404")
  const page = new URL("https://example.com/candace/missing/deep/page")
  const links = [...html.matchAll(/href="([^"#]+)"/g)].map((m) => new URL(m[1], page))
  assert.ok(links.every((url) => !url.pathname.includes("missing")))
  assert.ok(links.every((url) => url.pathname.startsWith("/candace/")))
})

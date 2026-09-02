import test from "node:test"
import assert from "node:assert/strict"
import { runInNewContext } from "node:vm"
import PagefindSearch from "./PagefindSearch"

test("overlapping initial and SPA loads create one transcript search", async () => {
  let instances = 0
  let searchOptions: { baseUrl: string; bundlePath: string } | undefined
  const onLoad: (() => void)[] = []
  const events = new Map<string, () => void>()
  const container = { isConnected: true, id: "", querySelector: () => (instances ? {} : null) }
  const script = {
    addEventListener: (event: string, callback: () => void) => {
      if (event === "load") onLoad.push(callback)
    },
    dataset: {},
    src: "",
  }
  let appendedScript: typeof script | undefined
  const window: {
    PagefindUI?: new (options: { baseUrl: string; bundlePath: string }) => object
    location: { href: string }
  } = {
    location: { href: "https://example.com/candace/" },
  }
  const document = {
    readyState: "complete",
    querySelectorAll: () => [container],
    querySelector: (selector: string) =>
      selector.includes('href*="index.css"')
        ? { href: "https://example.com/candace/index.css?v=test-version" }
        : selector.startsWith("script")
          ? appendedScript
          : null,
    createElement: (tag: string) => (tag === "script" ? script : {}),
    head: {
      appendChild: (element: object) => {
        if (element === script) appendedScript = script
      },
    },
    addEventListener: (event: string, callback: () => void) => events.set(event, callback),
  }
  runInNewContext(PagefindSearch().afterDOMLoaded as string, { document, window, URL, console })
  events.get("nav")!()
  window.PagefindUI = class {
    constructor(options: { baseUrl: string; bundlePath: string }) {
      instances++
      searchOptions = options
    }
  }
  onLoad.forEach((resolve) => resolve())
  await Promise.resolve()
  assert.equal(instances, 1)
  assert.equal(searchOptions?.baseUrl, "/candace/")
  assert.equal(searchOptions?.bundlePath, "/candace/pagefind/")
  events.get("nav")!()
  await Promise.resolve()
  assert.equal(instances, 1)
})

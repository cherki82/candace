import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const links = [
  { text: "Discover", href: "", prefix: "index" },
  { text: "Topics", href: "index/threads", prefix: "threads/" },
  { text: "Saved", href: "index/explorer?saved=1", prefix: "saved/" },
]
const moreLinks = [
  { text: "People, places & organizations", href: "index/entities", prefix: "entities/" },
  { text: "Episodes", href: "index/episodes", prefix: "episodes/" },
  { text: "Events & timeline", href: "index/event-explorer", prefix: "events/" },
  { text: "Statements", href: "index/statements", prefix: "statements/" },
  { text: "Factual claims", href: "index/claims", prefix: "claims/" },
  { text: "External sources", href: "index/sources", prefix: "sources/" },
  { text: "Relationships", href: "index/relationships", prefix: "relationships/" },
]

const SiteHeader: QuartzComponent = ({ fileData, cfg }) => {
  const slug = fileData.slug!
  // GitHub Pages can render 404.html at any depth; its links must be root-relative.
  const base =
    slug === "404"
      ? new URL(`https://${cfg.baseUrl ?? "example.com"}`).pathname.replace(/\/$/, "")
      : pathToRoot(slug)
  const active = (link: (typeof links)[number]) =>
    link.href === ""
      ? slug === "index"
      : slug === link.href ||
        slug === `index/${link.prefix.slice(0, -1)}` ||
        slug.startsWith(link.prefix)
  const navLink = (link: (typeof links)[number]) => (
    <a href={`${base}/${link.href}`} aria-current={active(link) ? "page" : undefined}>
      {link.text}
    </a>
  )
  return (
    <div class="site-masthead">
      <a class="site-brand" href={`${base}/`} aria-label={`${cfg.pageTitle} home`}>
        <span class="site-brand-name">Candace</span>
        <span class="site-brand-caption">Research library</span>
      </a>
      <nav class="site-navigation" aria-label="Site navigation">
        <div class="site-primary-links">{links.map(navLink)}</div>
        <details class="site-more" data-active={moreLinks.some(active)}>
          <summary>
            <span class="site-desktop-menu-label">Browse</span>
            <span class="site-mobile-menu-label">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
              Menu
            </span>
          </summary>
          <div class="site-more-links">
            <div class="site-mobile-links">{links.map(navLink)}</div>
            {moreLinks.map(navLink)}
            <a href={`${base}/index/explorer?kind=transcript`}>Search transcripts</a>
          </div>
        </details>
      </nav>
      <form
        class="site-search"
        action={`${base}/index/explorer`}
        role="search"
        aria-label="Search all research"
      >
        <label for="site-query" class="site-sr-only">
          Search all research
        </label>
        <input
          id="site-query"
          name="q"
          type="search"
          placeholder="Search all research…"
          autoComplete="off"
        />
        <button type="submit" aria-label="Search">
          ↵
        </button>
      </form>
      <nav class="site-return" aria-label="Return to research" hidden>
        <a />
      </nav>
    </div>
  )
}

// Native details supplies disclosure semantics and Enter/Space interaction.
// Close on navigation (including same-page anchors), outside click, and Escape.
SiteHeader.afterDOMLoaded = `
document.addEventListener("nav", () => {
  const menu = document.querySelector(".site-more")
  const query = document.querySelector("#site-query")
  const params = new URLSearchParams(location.search)
  if (query) query.value = params.get("q") || ""
  const root = new URL(document.querySelector(".site-brand").href)
  const valid = (value) => { try { const url = new URL(value, root); return url.origin === root.origin && url.pathname.startsWith(root.pathname) && !url.username && !url.password ? url.href : null } catch { return null } }
  const returning = document.querySelector(".site-return")
  try {
    const previous = JSON.parse(sessionStorage.getItem("candace-research-origin") || "null")
    if (previous && valid(previous.url) && previous.url !== location.href && !location.pathname.split("/").includes("index") && ["entities", "episodes", "threads", "statements", "events", "relationships"].some(part => location.pathname.split("/").includes(part))) {
      returning.hidden = false
      returning.querySelector("a").href = valid(previous.url)
      returning.querySelector("a").textContent = "← Return to " + previous.label
    }
  } catch {}
  const capture = (event) => {
    const link = event.target.closest?.("a[href]")
    const workspace = document.querySelector(".record-workspace")
    if (!link || !workspace || !valid(link.href) || new URL(link.href).pathname === location.pathname) return
    if (!(location.pathname.includes("/index/") || location.pathname === root.pathname) && workspace.dataset.discovery !== "true") return
    const current = new URLSearchParams(location.search)
    const heading = [...workspace.querySelectorAll("h1")].find(h => h.getClientRects().length)
    try { sessionStorage.setItem("candace-research-origin", JSON.stringify({url: location.href, label: current.get("q") ? 'search for “' + current.get("q") + '”' : heading?.textContent || "research"})) } catch {}
  }
  document.addEventListener("click", capture, true)
  const click = (event) => {
    if (menu?.open && event.target instanceof Element &&
        (!menu.contains(event.target) || event.target.closest("a"))) menu.open = false
  }
  const keydown = (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault()
      const input = [...document.querySelectorAll('.rw-search input[type="search"], .rw-discover-search input[type="search"], #site-query')].find(input => input.getClientRects().length)
      input?.focus()
    }
    if (event.key === "Escape" && menu?.open) {
      menu.open = false
      menu.querySelector("summary").focus()
    }
  }
  document.addEventListener("click", click)
  document.addEventListener("keydown", keydown)
  window.addCleanup(() => {
    document.removeEventListener("click", capture, true)
    document.removeEventListener("click", click)
    document.removeEventListener("keydown", keydown)
  })
})
`
export default (() => SiteHeader) satisfies QuartzComponentConstructor

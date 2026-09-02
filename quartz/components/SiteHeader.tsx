import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const links = [
  { text: "Search site", href: "index/explorer", prefix: "research/" },
  {
    text: "Theory threads",
    href: "threads/thread-charlie-kirk-assassination-alternative-theories",
    prefix: "threads/",
  },
  { text: "Entities", href: "index/entities", prefix: "entities/" },
  { text: "Episodes", href: "index/episodes", prefix: "episodes/" },
  { text: "Events", href: "index/event-explorer", prefix: "events/" },
  { text: "Sources", href: "index/sources", prefix: "sources/" },
]
const moreLinks = [
  { text: "Timeline", href: "index/timeline", prefix: "timeline/" },
  { text: "Factual claims", href: "index/claims", prefix: "claims/" },
  { text: "All statements", href: "index/statements", prefix: "statements/" },
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
    slug === link.href ||
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
        <span class="site-brand-mark" aria-hidden="true">
          K
        </span>
        <span>
          Content
          <br />
          <strong>Knowledge Graph</strong>
        </span>
      </a>
      <nav class="site-navigation" aria-label="Site navigation">
        <div class="site-primary-links">{links.map(navLink)}</div>
        <details class="site-more" data-active={moreLinks.some(active)}>
          <summary>More</summary>
          <div class="site-more-links">
            <div class="site-mobile-links">{links.slice(3).map(navLink)}</div>
            {moreLinks.map(navLink)}
            <a href="#transcript-search">Search transcripts</a>
          </div>
        </details>
      </nav>
    </div>
  )
}

// Native details supplies keyboard interaction; SPA navigation replaces the menu.
export default (() => SiteHeader) satisfies QuartzComponentConstructor

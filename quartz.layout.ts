import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.MobileOnly(Component.PagefindSearch()),
    Component.Share(),
    Component.PageFilter(),
    Component.AnchorHighlight(),
    Component.YouTubeTimestampLinks(),
    Component.ResearchWorkbench(),
  ],
  footer: Component.Footer({ links: {} }),
}

const mobileLinks = [
  {
    text: "Theory Threads",
    href: "threads/thread-charlie-kirk-assassination-alternative-theories",
  },
  { text: "Research Explorer", href: "index/explorer" },
  { text: "Event Explorer", href: "index/event-explorer" },
  { text: "Claims", href: "index/claims" },
  { text: "Episodes", href: "index/episodes" },
  { text: "Entities", href: "index/entities" },
  { text: "Timeline", href: "index/timeline" },
  { text: "Research Sources", href: "index/sources" },
  { text: "All Statements", href: "index/statements" },
  { text: "Relationships", href: "index/relationships" },
]

const InvestigateNavigation = Component.Navigation({
  title: "Investigate",
  links: [
    {
      text: "Theory Threads",
      href: "threads/thread-charlie-kirk-assassination-alternative-theories",
    },
    { text: "Research Explorer", href: "index/explorer" },
    { text: "Event Explorer", href: "index/event-explorer" },
  ],
})

const CorpusNavigation = Component.Navigation({
  title: "Browse the corpus",
  links: [
    { text: "Episodes", href: "index/episodes" },
    { text: "Entities", href: "index/entities" },
    { text: "Timeline", href: "index/timeline" },
  ],
})

const EvidenceNavigation = Component.Navigation({
  title: "Audit the evidence",
  links: [
    { text: "Research Sources", href: "index/sources" },
    { text: "Claims", href: "index/claims" },
    { text: "All Statements", href: "index/statements" },
    { text: "Relationships", href: "index/relationships" },
  ],
})

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.TagList()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(
      Component.Flex({
        gap: "0.5rem",
        components: [
          {
            Component: Component.MobileNavigation({
              links: mobileLinks,
            }),
            shrink: false,
          },
          { Component: Component.Search(), grow: true },
          { Component: Component.Darkmode(), shrink: false },
        ],
      }),
    ),
    Component.DesktopOnly(
      Component.Flex({
        components: [
          {
            Component: Component.Search(),
            grow: true,
          },
          { Component: Component.Darkmode() },
        ],
      }),
    ),
    Component.DesktopOnly(InvestigateNavigation),
    Component.DesktopOnly(CorpusNavigation),
    Component.DesktopOnly(EvidenceNavigation),
    Component.DesktopOnly(Component.PagefindSearch()),
  ],
  right: [Component.DesktopOnly(Component.TableOfContents())],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(
      Component.Flex({
        gap: "0.5rem",
        components: [
          {
            Component: Component.MobileNavigation({
              links: mobileLinks,
            }),
            shrink: false,
          },
          { Component: Component.Search(), grow: true },
          { Component: Component.Darkmode(), shrink: false },
        ],
      }),
    ),
    Component.DesktopOnly(
      Component.Flex({
        components: [
          {
            Component: Component.Search(),
            grow: true,
          },
          { Component: Component.Darkmode() },
        ],
      }),
    ),
    Component.DesktopOnly(InvestigateNavigation),
    Component.DesktopOnly(CorpusNavigation),
    Component.DesktopOnly(EvidenceNavigation),
    Component.DesktopOnly(Component.PagefindSearch()),
  ],
  right: [Component.DesktopOnly(Component.TableOfContents())],
}

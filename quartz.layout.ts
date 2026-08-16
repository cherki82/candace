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
  ],
  footer: Component.Footer({ links: {} }),
}

// Main navigation with links to index pages
const MainNavigation = Component.Navigation({
  title: "Browse",
  links: [
    { text: "Episodes", href: "index/episodes" },
    { text: "Entities", href: "index/entities" },
    { text: "Timeline", href: "index/timeline" },
    { text: "Statements", href: "index/statements" },
    { text: "Relationships", href: "index/relationships" },
  ],
})

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(
      Component.Flex({
        components: [
          { Component: Component.MobileNavigation({
            links: [
              { text: "Episodes", href: "index/episodes" },
              { text: "Entities", href: "index/entities" },
              { text: "Timeline", href: "index/timeline" },
              { text: "Statements", href: "index/statements" },
              { text: "Relationships", href: "index/relationships" },
            ],
          }) },
          { Component: Component.Search(), grow: true },
          { Component: Component.Darkmode() },
        ],
      })
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
      })
    ),
    Component.DesktopOnly(MainNavigation),
    Component.DesktopOnly(Component.PagefindSearch()),
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(
      Component.Flex({
        components: [
          { Component: Component.MobileNavigation({
            links: [
              { text: "Episodes", href: "index/episodes" },
              { text: "Entities", href: "index/entities" },
              { text: "Timeline", href: "index/timeline" },
              { text: "Statements", href: "index/statements" },
              { text: "Relationships", href: "index/relationships" },
            ],
          }) },
          { Component: Component.Search(), grow: true },
          { Component: Component.Darkmode() },
        ],
      })
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
      })
    ),
    Component.DesktopOnly(MainNavigation),
    Component.DesktopOnly(Component.PagefindSearch()),
  ],
  right: [],
}

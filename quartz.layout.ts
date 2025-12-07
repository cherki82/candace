import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// Custom Explorer for main navigation
const IndexExplorer = Component.Explorer({
  title: "Navigation",
  folderDefaultState: "open",
  folderClickBehavior: "link",
  sortFn: (a, b) => {
    // Custom sort: index folder first, then alphabetical
    const order = ["index", "episodes", "entities", "claims", "timestamps"]
    const aIdx = order.indexOf(a.name)
    const bIdx = order.indexOf(b.name)
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx
    if (aIdx !== -1) return -1
    if (bIdx !== -1) return 1
    return a.displayName.localeCompare(b.displayName)
  },
  filterFn: (node) => {
    // Hide individual claim, entity, episode, and timestamp files (too many)
    // But show their parent folders
    const slug = node.file?.slug || ""

    // Always show folders
    if (!node.file) return true

    // Show files in the index folder (these are the main navigation pages)
    if (slug.startsWith("index/")) return true

    // Hide individual content files
    if (slug.startsWith("claims/")) return false
    if (slug.startsWith("entities/")) return false
    if (slug.startsWith("episodes/ep-")) return false
    if (slug.startsWith("timestamps/")) return false

    // Show everything else
    return true
  },
  mapFn: (node) => {
    // Friendly names for folders
    if (node.name === "index") node.displayName = "Browse"
    if (node.name === "episodes") node.displayName = "Episodes"
    if (node.name === "entities") node.displayName = "Entities"
    if (node.name === "claims") node.displayName = "Claims"
    return node
  },
})

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    IndexExplorer,
  ],
  right: [
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    IndexExplorer,
  ],
  right: [],
}

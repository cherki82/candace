import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// One shared masthead and search entry point on content, folder, and tag pages.
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.SiteHeader(), Component.Search(), Component.Darkmode()],
  afterBody: [
    Component.PagefindSearch(),
    Component.Share(),
    Component.PageFilter(),
    Component.AnchorHighlight(),
    Component.YouTubeTimestampLinks(),
    Component.ResearchWorkbench(),
  ],
  footer: Component.Footer({ links: {} }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.TagList()],
  left: [],
  right: [Component.DesktopOnly(Component.TableOfContents())],
}

export const defaultListPageLayout: PageLayout = {
  ...defaultContentPageLayout,
  beforeBody: [Component.ArticleTitle()],
}

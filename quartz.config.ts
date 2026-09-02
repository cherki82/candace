import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Content Knowledge Graph",
    pageTitleSuffix: " | Knowledge Graph",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "cherki82.github.io/candace",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "Georgia",
        body: "Avenir Next",
        code: "SFMono-Regular",
      },
      colors: {
        lightMode: {
          light: "#f5f3ec",
          lightgray: "#d5dbd1",
          gray: "#5e6c64",
          darkgray: "#34463c",
          dark: "#283831",
          secondary: "#175d50",
          tertiary: "#914b30",
          highlight: "rgba(23, 93, 80, 0.08)",
          textHighlight: "#f0dfa4",
        },
        darkMode: {
          light: "#18221e",
          lightgray: "#3b4b41",
          gray: "#afbbb1",
          darkgray: "#d5ded4",
          dark: "#f3f1e7",
          secondary: "#9ad3bb",
          tertiary: "#efb190",
          highlight: "rgba(154, 211, 187, 0.1)",
          textHighlight: "#665b2f",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "absolute" }),
      Plugin.Description(),
      // Plugin.Latex({ renderEngine: "katex" }),  // Disabled - causes warnings with em-dashes in transcripts
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Plugin.CustomOgImages(),  // Disabled - 8min build time
    ],
  },
}

export default config

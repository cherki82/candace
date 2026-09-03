import { QuartzTransformerPlugin } from "../types"
import { workspaceRoute } from "../../components/scripts/record-workspace-model"

// Search indexes the derived records directly. Don't parse/render the superseded
// multi-megabyte lists into a second, invisible UI or the quick-jump index.
export const WorkspaceShell: QuartzTransformerPlugin = () => ({
  name: "WorkspaceShell",
  textTransform(_ctx, src, file) {
    if (!file?.data.slug || !workspaceRoute(file.data.slug)) return src
    // Retain YAML metadata, including aliases and publication dates, verbatim.
    const header = src.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/)?.[0] || ""
    // Compile the original linked transcript once for lazy loading in readers.
    // The large evidence appendices and timestamp pages remain stripped.
    if (file.data.slug.startsWith("episodes/")) {
      const transcript = src.match(
        /<details>\s*<summary>(?:<strong\b[^>]*>)?Transcript(?:<\/strong>)?<\/summary>([\s\S]*?)<\/details>/i,
      )
      return header + (transcript?.[1] || "")
    }
    return header
  },
  markdownPlugins() {
    return [
      () => (tree, file) => {
        if (workspaceRoute(file.data.slug!) && !file.data.slug!.startsWith("episodes/")) {
          tree.children = [
            {
              type: "paragraph",
              children: [
                { type: "text", value: file.data.frontmatter?.title || "Evidence workspace" },
              ],
            },
          ]
        }
      },
    ]
  },
})

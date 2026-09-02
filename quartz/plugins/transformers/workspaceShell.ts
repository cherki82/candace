import { QuartzTransformerPlugin } from "../types"
import { workspaceRoute } from "../../components/scripts/record-workspace-model"

// Search indexes the derived records directly. Don't parse/render the superseded
// multi-megabyte lists into a second, invisible UI or the quick-jump index.
export const WorkspaceShell: QuartzTransformerPlugin = () => ({
  name: "WorkspaceShell",
  textTransform(_ctx, src, file) {
    if (!file?.data.slug || !workspaceRoute(file.data.slug)) return src
    // Retain YAML metadata, including aliases and publication dates, verbatim.
    return src.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/)?.[0] || ""
  },
  markdownPlugins() {
    return [
      () => (tree, file) => {
        if (workspaceRoute(file.data.slug!)) {
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

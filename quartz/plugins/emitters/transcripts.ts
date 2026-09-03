import { toHtml } from "hast-util-to-html"
import { visit } from "unist-util-visit"
import { QuartzEmitterPlugin } from "../types"
import { FullSlug } from "../../util/path"
import { write } from "./helpers"
import { workspaceRoute } from "../../components/scripts/record-workspace-model"

// Preserve the existing Markdown entity/event links, not a second name matcher.
export const Transcripts: QuartzEmitterPlugin = () => {
  const emit: ReturnType<QuartzEmitterPlugin>["emit"] = async function* (ctx, content) {
    for (const [tree, file] of content) {
      const slug = file.data.slug!
      if (!workspaceRoute(slug)?.episode) continue
      // Several speaker turns may start in the same second. Match the workspace's
      // passage IDs while retaining the original timestamp/entity anchors.
      const occurrences = new Map<string, number>()
      visit(tree, "element", (node) => {
        if (node.tagName !== "p") return
        const heading = node.children[0]
        if (heading?.type !== "element" || heading.tagName !== "strong") return
        const timestamp = heading.children.find(
          (child) =>
            child.type === "element" &&
            Array.isArray(child.properties.className) &&
            child.properties.className.includes("timestamp-link"),
        )
        if (timestamp?.type !== "element") return
        const anchor = String(timestamp.properties.href).split("/").pop()!
        const count = (occurrences.get(anchor) || 0) + 1
        occurrences.set(anchor, count)
        node.properties.id = count === 1 ? anchor : `${anchor}-${count}`
      })
      yield write({
        ctx,
        slug: `assets/transcripts/${slug.slice("episodes/".length)}` as FullSlug,
        ext: ".json",
        content: JSON.stringify({ html: toHtml(tree) }),
      })
    }
  }
  return {
    name: "Transcripts",
    emit,
    partialEmit(ctx, content, resources, changes) {
      const changed = new Set(changes.map((change) => change.file?.data.slug))
      return emit(
        ctx,
        content.filter(([, file]) => changed.has(file.data.slug)),
        resources,
      )
    },
  }
}

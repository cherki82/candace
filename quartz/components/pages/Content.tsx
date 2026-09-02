import { ComponentChildren } from "preact"
import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import Workspace from "../RecordWorkspace"
import { workspaceRoute } from "../scripts/record-workspace-model"
const RecordWorkspace = Workspace()

const Content: QuartzComponent = (props: QuartzComponentProps) => {
  const { fileData, tree } = props
  if (workspaceRoute(fileData.slug!)) return <RecordWorkspace {...props} />
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <article class={classString}>{content}</article>
}
Content.css = RecordWorkspace.css
Content.afterDOMLoaded = RecordWorkspace.afterDOMLoaded

export default (() => Content) satisfies QuartzComponentConstructor

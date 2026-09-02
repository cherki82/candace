import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { toString } from "hast-util-to-string"

const normalizeTitle = (title: string) =>
  title.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim().toLowerCase()
const containsTitle = (node: any, title: string): boolean =>
  (node?.type === "element" &&
    node.tagName === "h1" &&
    normalizeTitle(toString(node)) === normalizeTitle(title)) ||
  (Array.isArray(node?.children) && node.children.some((child: any) => containsTitle(child, title)))

const ArticleTitle: QuartzComponent = ({ fileData, displayClass, tree }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title && !containsTitle(tree, title)) {
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor

import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const containsH1 = (node: any): boolean =>
  (node?.type === "element" && node.tagName === "h1") ||
  (Array.isArray(node?.children) && node.children.some(containsH1))

const ArticleTitle: QuartzComponent = ({ fileData, displayClass, tree }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title && !containsH1(tree)) {
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

// @ts-ignore
import pageFilterScript from "./scripts/pagefilter.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const PageFilter: QuartzComponent = () => <></>

PageFilter.afterDOMLoaded = pageFilterScript

export default (() => PageFilter) satisfies QuartzComponentConstructor

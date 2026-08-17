// @ts-ignore
import script from "./scripts/research-workbench.inline"
import style from "./styles/research-workbench.scss"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const ResearchWorkbench: QuartzComponent = () => <></>

ResearchWorkbench.css = style
ResearchWorkbench.afterDOMLoaded = script

export default (() => ResearchWorkbench) satisfies QuartzComponentConstructor

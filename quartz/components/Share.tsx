// @ts-ignore
import shareScript from "./scripts/share.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Share: QuartzComponent = () => <></>

Share.afterDOMLoaded = shareScript

export default (() => Share) satisfies QuartzComponentConstructor

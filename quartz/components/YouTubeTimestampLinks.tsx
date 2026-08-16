import { QuartzComponent, QuartzComponentConstructor } from "./types"

const YouTubeTimestampLinks: QuartzComponent = () => null

YouTubeTimestampLinks.afterDOMLoaded = `
document.addEventListener("click", (event) => {
  const link = event.target?.closest?.("a.youtube-timestamp-link")
  if (!link) return
  event.preventDefault()
  const opened = window.open(link.href, "_blank", "noopener,noreferrer")
  if (!opened) window.location.href = link.href
})
`

export default (() => YouTubeTimestampLinks) satisfies QuartzComponentConstructor

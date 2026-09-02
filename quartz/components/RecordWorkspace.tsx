import { QuartzComponent, QuartzComponentConstructor } from "./types"
import { pathToRoot } from "../util/path"
import { workspaceRoute } from "./scripts/record-workspace-model"
// @ts-ignore
import script from "./scripts/record-workspace.inline"
import style from "./styles/record-workspace.scss"

const RecordWorkspace: QuartzComponent = ({ fileData, ctx }) => {
  const route = workspaceRoute(fileData.slug!)
  if (!route) return null
  return (
    <section
      class="record-workspace"
      data-record-workspace
      data-route={JSON.stringify(route)}
      data-root={pathToRoot(fileData.slug!)}
      data-version={ctx.buildId}
      aria-label="Search and read the evidence"
    >
      <header class="rw-heading">
        <div>
          <p class="rw-eyebrow">Evidence workspace</p>
          <h1>{route.entity || route.episode ? fileData.frontmatter?.title : route.title}</h1>
          <p class="rw-subtitle">Search the information. Read it in context. Check the source.</p>
        </div>
        <div class="rw-overview" />
      </header>
      <div class="rw-controls">
        <p role="status">Loading this view’s searchable records…</p>
      </div>
      <div class="rw-desk">
        <aside class="rw-results" aria-label="Search results">
          <div class="rw-results-heading">
            <h2>Results</h2>
            <output class="rw-count" aria-live="polite" />
          </div>
          <div class="rw-result-options" />
          <div class="rw-result-scroll" tabIndex={-1}>
            <ol class="rw-list" />
          </div>
          <nav class="rw-pagination" aria-label="Result pages" />
        </aside>
        <section class="rw-reading" aria-label="Selected record">
          <div class="rw-toolbar">
            <button type="button" data-action="back" disabled>
              ← Back
            </button>
            <button type="button" data-action="results" class="rw-mobile">
              ← Results
            </button>
            <span class="rw-selection-label">Reading space</span>
            <button type="button" data-action="smaller" aria-label="Decrease reading text size">
              A−
            </button>
            <button type="button" data-action="larger" aria-label="Increase reading text size">
              A+
            </button>
            <button type="button" data-action="copy">
              Copy link
            </button>
          </div>
          <div class="rw-reader" tabIndex={-1}>
            <div class="rw-content">
              <div class="rw-welcome">
                <p class="rw-eyebrow">Start with the information</p>
                <h2>
                  The evidence,
                  <br />
                  without the detour.
                </h2>
                <p>
                  Search or choose a result. Its full record, attribution, and source context will
                  open here.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <p class="rw-feedback" role="status" aria-live="polite" />
      <noscript>
        This interactive workspace requires JavaScript. Enable JavaScript to search and read the
        records.
      </noscript>
    </section>
  )
}
RecordWorkspace.css = style
RecordWorkspace.afterDOMLoaded = script
export default (() => RecordWorkspace) satisfies QuartzComponentConstructor

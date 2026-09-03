import { QuartzComponent, QuartzComponentConstructor } from "./types"
import { pathToRoot } from "../util/path"
import { workspaceContext, workspaceRoute } from "./scripts/record-workspace-model"
// @ts-ignore
import script from "./scripts/record-workspace.inline"
import style from "./styles/record-workspace.scss"

const RecordWorkspace: QuartzComponent = ({ fileData, ctx }) => {
  const route = workspaceRoute(fileData.slug!)
  if (!route) return null
  const context = workspaceContext(route)
  const root = pathToRoot(fileData.slug!)
  return (
    <section
      class="record-workspace"
      data-record-workspace
      data-view={context.view}
      data-route={JSON.stringify(route)}
      data-root={root}
      data-version={ctx.buildId}
      aria-label="Search and read the evidence"
    >
      {context.parent && (
        <nav class="rw-breadcrumbs" aria-label="Breadcrumb">
          <a href={`${root}${context.parent.href}`}>← {context.parent.title}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{context.eyebrow}</span>
        </nav>
      )}
      <header class={`rw-heading${context.parent ? " rw-identity" : ""}`}>
        <div>
          <p class="rw-eyebrow">{context.eyebrow}</p>
          <h1>{route.entity || route.episode ? fileData.frontmatter?.title : route.title}</h1>
          <p class="rw-subtitle">{context.subtitle}</p>
        </div>
        <div class="rw-overview" />
      </header>
      {route.episode && (
        <nav class="rw-episode-views" aria-label="Episode views">
          <a data-episode-view="transcript" href="?view=transcript">
            Read full transcript
          </a>
          <a data-episode-view="workspace" href="?view=workspace">
            Search & evidence
          </a>
        </nav>
      )}
      <div class="rw-controls">
        <p role="status">Loading this view’s searchable records…</p>
      </div>
      <div class="rw-desk">
        <aside class="rw-results" aria-label="Search results">
          <div class="rw-results-heading">
            <h2>
              {context.view === "entity-directory"
                ? "Entities"
                : context.parent
                  ? "Evidence"
                  : "Results"}
            </h2>
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
            {route.entity ? (
              <button type="button" data-action="results">
                ← Back to results
              </button>
            ) : (
              <>
                <button type="button" data-action="back" disabled>
                  ← Back
                </button>
                <button type="button" data-action="results" class="rw-mobile">
                  ← Results
                </button>
              </>
            )}
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
      {route.episode && (
        <section class="rw-transcript" aria-label="Full episode transcript" hidden />
      )}
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

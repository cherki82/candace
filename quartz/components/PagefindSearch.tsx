import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const PagefindSearch: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <section
        id="transcript-search"
        aria-label="Search transcripts"
        class={classNames(displayClass, "pagefind-search")}
      >
        <h2>Search transcripts</h2>
        <p>Find words in the source material across episodes.</p>
        <div class="pagefind-search-target"></div>
      </section>
    )
  }

  PagefindSearch.css = `
.pagefind-search {
  margin-bottom: 1rem;
}

/* Override Pagefind UI styles to match site theme */
.pagefind-ui {
  --pagefind-ui-scale: 0.9;
  --pagefind-ui-primary: var(--secondary);
  --pagefind-ui-text: var(--darkgray);
  --pagefind-ui-background: var(--light);
  --pagefind-ui-border: var(--lightgray);
  --pagefind-ui-tag: var(--gray);
  --pagefind-ui-border-width: 1px;
  --pagefind-ui-border-radius: 4px;
  --pagefind-ui-font: inherit;
}

.pagefind-ui .pagefind-ui__search-input {
  font-size: 1rem;
  padding: 0.6rem 1rem;
}

.pagefind-ui .pagefind-ui__result-link {
  color: var(--secondary);
}

.pagefind-ui .pagefind-ui__result-link:hover {
  color: var(--tertiary);
}

.pagefind-ui .pagefind-ui__result-excerpt {
  color: var(--gray);
  font-size: 0.9rem;
}

.pagefind-ui mark {
  background-color: rgba(var(--tertiary-rgb), 0.3);
  color: inherit;
}
`

  PagefindSearch.afterDOMLoaded = `
// Load Pagefind UI
const loadPagefind = async () => {
  const containers = [...document.querySelectorAll('.pagefind-search-target')]
    .filter(container => !container.querySelector('.pagefind-ui'))
  if (!containers.length) return

  // Quartz emits index.css at the site root, which gives us the deployment
  // prefix without guessing from the current route (e.g. /candace on Pages).
  const siteStyles = document.querySelector('link[rel="stylesheet"][href$="index.css"]')
  const basePath = siteStyles
    ? new URL(siteStyles.href, window.location.href).pathname.replace(/\\/index\\.css$/, '')
    : ''
  const pagefindBase = basePath + '/pagefind'

  try {
    // Load CSS if not already loaded
    if (!document.querySelector('link[href*="pagefind-ui.css"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = pagefindBase + '/pagefind-ui.css'
      document.head.appendChild(link)
    }

    // Pagefind's browser bundle is a classic script: it installs
    // window.PagefindUI rather than exporting an ES module constructor.
    if (!window.PagefindUI) {
      await new Promise((resolve, reject) => {
        const src = pagefindBase + '/pagefind-ui.js'
        const existing = document.querySelector('script[data-pagefind-ui]')
        const script = existing || document.createElement('script')
        script.addEventListener('load', resolve, { once: true })
        script.addEventListener('error', reject, { once: true })
        if (!existing) {
          script.src = src
          script.dataset.pagefindUi = 'true'
          document.head.appendChild(script)
        }
      })
    }

    const PagefindUI = window.PagefindUI
    if (typeof PagefindUI !== 'function') throw new Error('PagefindUI did not load')

    containers.forEach((container, index) => {
      // DOM-ready and SPA navigation can overlap while the script is loading.
      if (!container.isConnected || container.querySelector('.pagefind-ui')) return
      container.id = 'pagefind-search-' + index
      new PagefindUI({
        element: '#' + container.id,
        showSubResults: true,
        showImages: false,
        excerptLength: 25,
        resetStyles: false,
        bundlePath: pagefindBase + '/',
        translations: {
          placeholder: "Search transcripts...",
          zero_results: "No results for [SEARCH_TERM]"
        }
      })
    })
  } catch (e) {
    console.warn('Pagefind not available:', e)
    containers.forEach(container => {
      container.innerHTML = '<p style="color: var(--gray); font-size: 0.9rem;">Quick jump searches page titles. Use Research Explorer for statements and transcript snippets.</p>'
    })
  }
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadPagefind)
} else {
  loadPagefind()
}

// Re-initialize on navigation (for SPA-style navigation)
document.addEventListener('nav', loadPagefind)
`

  return PagefindSearch
}) satisfies QuartzComponentConstructor

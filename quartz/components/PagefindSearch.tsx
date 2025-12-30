import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const PagefindSearch: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={classNames(displayClass, "pagefind-search")}>
        <div id="pagefind-search"></div>
      </div>
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
  const container = document.getElementById('pagefind-search')
  if (!container) return

  // Already initialized?
  if (container.querySelector('.pagefind-ui')) return

  // Determine base path from current URL (handles subdirectory deployments)
  const pathParts = window.location.pathname.split('/').filter(Boolean)
  // For cherki82.github.io/candace/, basePath should be '/candace'
  const basePath = pathParts.length > 0 && !pathParts[0].includes('.')
    ? '/' + pathParts[0]
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

    // Load and initialize Pagefind UI
    const { PagefindUI } = await import(/* webpackIgnore: true */ pagefindBase + '/pagefind-ui.js')

    new PagefindUI({
      element: "#pagefind-search",
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
  } catch (e) {
    console.warn('Pagefind not available:', e)
    container.innerHTML = '<p style="color: var(--gray); font-size: 0.9rem;">Full-text search unavailable. Use Ctrl+K for title search.</p>'
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

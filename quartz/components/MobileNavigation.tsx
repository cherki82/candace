import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface MobileNavigationOptions {
  links: { text: string; href: string }[]
}

const defaultOptions: MobileNavigationOptions = {
  links: [],
}

export default ((userOpts?: Partial<MobileNavigationOptions>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const MobileNavigation: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const baseDir = pathToRoot(fileData.slug!)

    return (
      <div class={`mobile-navigation ${displayClass ?? ""}`}>
        <button class="mobile-nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <svg class="hamburger-icon" viewBox="0 0 24 24" width="24" height="24">
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg class="close-icon" viewBox="0 0 24 24" width="24" height="24">
            <line
              x1="6"
              y1="6"
              x2="18"
              y2="18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="6"
              y1="18"
              x2="18"
              y2="6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div class="mobile-nav-overlay"></div>
        <nav class="mobile-nav-drawer" aria-label="Primary navigation">
          <div class="mobile-nav-header">
            <span>Browse</span>
          </div>
          <ul>
            {opts.links.map((link) => (
              <li>
                <a href={`${baseDir}/${link.href}`}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }

  MobileNavigation.css = `
    .mobile-navigation {
      position: relative;
    }

    .mobile-nav-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      padding: 0;
      background: var(--lightgray);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      color: var(--darkgray);
      transition: all 0.2s ease;
    }

    .mobile-nav-toggle:hover {
      background: var(--gray);
      color: var(--dark);
    }

    .mobile-nav-toggle .close-icon {
      display: none;
    }

    .mobile-nav-toggle[aria-expanded="true"] .hamburger-icon {
      display: none;
    }

    .mobile-nav-toggle[aria-expanded="true"] .close-icon {
      display: block;
    }

    .mobile-nav-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(2px);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      z-index: 998;
    }

    .mobile-nav-overlay.active {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    .mobile-nav-drawer {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 280px;
      max-width: 85vw;
      background: var(--light);
      box-shadow: 4px 0 20px rgba(0, 0, 0, 0.2);
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      z-index: 999;
      overflow-y: auto;
      pointer-events: none;
    }

    .mobile-nav-drawer.active {
      transform: translateX(0);
      pointer-events: auto;
    }

    .mobile-nav-header {
      padding: 1.25rem 1rem;
      border-bottom: 1px solid var(--lightgray);
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--dark);
      background: linear-gradient(to bottom, var(--light), color-mix(in srgb, var(--lightgray) 30%, var(--light)));
    }

    .mobile-nav-drawer ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .mobile-nav-drawer li {
      border-bottom: 1px solid var(--lightgray);
    }

    .mobile-nav-drawer a {
      display: block;
      padding: 1rem 1.25rem;
      min-height: 44px;
      box-sizing: border-box;
      color: var(--secondary);
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .mobile-nav-drawer a:hover {
      background: var(--highlight);
      color: var(--tertiary);
      padding-left: 1.5rem;
    }
  `

  MobileNavigation.afterDOMLoaded = `
    document.querySelectorAll('.mobile-nav-toggle').forEach(toggle => {
      const container = toggle.closest('.mobile-navigation')
      const overlay = container.querySelector('.mobile-nav-overlay')
      const drawer = container.querySelector('.mobile-nav-drawer')

      function openMenu() {
        toggle.setAttribute('aria-expanded', 'true')
        overlay.classList.add('active')
        drawer.classList.add('active')
        document.body.style.overflow = 'hidden'
      }

      function closeMenu() {
        toggle.setAttribute('aria-expanded', 'false')
        overlay.classList.remove('active')
        drawer.classList.remove('active')
        document.body.style.overflow = ''
      }

      toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true'
        if (isExpanded) {
          closeMenu()
        } else {
          openMenu()
        }
      })

      overlay.addEventListener('click', closeMenu)

      // Close on link click
      drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu)
      })

      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          closeMenu()
        }
      })
    })
  `

  return MobileNavigation
}) satisfies QuartzComponentConstructor

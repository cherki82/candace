import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface NavigationOptions {
  title?: string
  links: { text: string; href: string }[]
}

const defaultOptions: NavigationOptions = {
  title: "Navigation",
  links: [],
}

export default ((userOpts?: Partial<NavigationOptions>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const Navigation: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const baseDir = pathToRoot(fileData.slug!)

    return (
      <nav class={`navigation ${displayClass ?? ""}`} aria-label={opts.title}>
        <h3>{opts.title}</h3>
        <ul>
          {opts.links.map((link) => (
            <li>
              <a href={`${baseDir}/${link.href}`}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  Navigation.css = `
    .navigation {
      margin-top: 1rem;
    }
    .navigation h3 {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .navigation ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .navigation li {
      margin: 0.3rem 0;
    }
    .navigation a {
      color: var(--secondary);
      text-decoration: none;
      font-size: 0.95rem;
    }
    .navigation a:hover {
      color: var(--tertiary);
    }
  `

  return Navigation
}) satisfies QuartzComponentConstructor

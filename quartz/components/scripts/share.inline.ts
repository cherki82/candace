// Share modal functionality
let lastShareTrigger: HTMLElement | null = null

function shareSiteRoot(): string {
  const stylesheet = document.querySelector('link[rel="stylesheet"][href*="index.css"]')
  if (!stylesheet) return ""
  return new URL((stylesheet as HTMLLinkElement).href, window.location.href).pathname.replace(
    /\/index\.css$/,
    "",
  )
}

function shareLocalPath(): string {
  const root = shareSiteRoot()
  const path = window.location.pathname
  if (root && path.startsWith(root)) return path.slice(root.length) || "/"
  return path
}

function getPageType(): string {
  const path = window.location.pathname
  if (path.includes("/claims/")) return "claim"
  if (path.includes("/entities/")) return "entity"
  if (path.includes("/episodes/")) return "episode"
  if (path.includes("/timestamps/")) return "timestamp"
  if (path.includes("/index/relationships")) return "relationships"
  if (path.includes("/index/timeline")) return "timeline"
  return "page"
}

function generateSnippet(): string {
  const pageType = getPageType()
  const title = document.querySelector("h1")?.textContent || document.title
  const url = window.location.href
  const description =
    document.querySelector('meta[name="description"]')?.getAttribute("content") || ""

  let snippet = ""

  switch (pageType) {
    case "claim":
      const claimText = document.querySelector("blockquote")?.textContent?.trim() || title
      const episodeLink = document.querySelector('a[href*="/episodes/"]')
      const episodeName = episodeLink?.textContent || "Content Knowledge Graph"
      snippet = `"${claimText}"
— ${episodeName}
📖 ${url}`
      break

    case "entity":
      const entityType =
        document.querySelector("em")?.textContent?.replace("Type: ", "") || "Entity"
      const mentionCount = document.querySelectorAll(".mentions li")?.length || 0
      snippet = `${title} (${entityType})
${mentionCount > 0 ? `Mentioned in ${mentionCount} episodes` : ""}
📖 ${url}`
      break

    case "episode":
      const stats = document.querySelector("p strong")?.parentElement?.textContent || ""
      const youtubeLink =
        document.querySelector('a[href*="youtube.com"]')?.getAttribute("href") || ""
      snippet = `${title}
${stats}
▶ ${youtubeLink}
📖 ${url}`
      break

    case "timestamp":
      const transcript = document.querySelector("blockquote")?.textContent?.trim() || ""
      const tsYoutubeLink =
        document.querySelector('a[href*="youtube.com"]')?.getAttribute("href") || ""
      snippet = `${title}
"${transcript.slice(0, 200)}${transcript.length > 200 ? "..." : ""}"
▶ ${tsYoutubeLink}`
      break

    default:
      snippet = `${title}
${description}
📖 ${url}`
  }

  return snippet.trim()
}

function createShareModal(): HTMLElement {
  const overlay = document.createElement("div")
  overlay.className = "share-modal-overlay"
  overlay.setAttribute("aria-hidden", "true")
  overlay.innerHTML = `
    <div class="share-modal" role="dialog" aria-modal="true" aria-labelledby="share-modal-title" aria-describedby="share-modal-content" tabindex="-1">
      <h3 id="share-modal-title">Share this page</h3>
      <div class="share-modal-content" id="share-modal-content"></div>
      <div class="share-modal-actions">
        <button type="button" class="share-modal-btn primary" id="copy-snippet">Copy to clipboard</button>
        <button type="button" class="share-modal-btn secondary" id="close-share-modal">Close</button>
      </div>
      <span class="copy-success" role="status" aria-live="polite" style="display:none">Copied!</span>
    </div>
  `

  const closeModal = () => {
    overlay.classList.remove("active")
    overlay.setAttribute("aria-hidden", "true")
    lastShareTrigger?.focus()
  }

  // Close on overlay click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal()
    }
  })

  // Close button
  overlay.querySelector("#close-share-modal")?.addEventListener("click", () => {
    closeModal()
  })

  overlay.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal()
    if (event.key !== "Tab") return
    const focusable = [...overlay.querySelectorAll<HTMLElement>("button:not([disabled])")]
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable.at(-1)!
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  })

  // Copy button
  overlay.querySelector("#copy-snippet")?.addEventListener("click", async () => {
    const content = overlay.querySelector(".share-modal-content")?.textContent || ""
    try {
      await navigator.clipboard.writeText(content)
      const success = overlay.querySelector(".copy-success") as HTMLElement
      if (success) {
        success.style.display = "inline"
        setTimeout(() => {
          success.style.display = "none"
        }, 2000)
      }
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  })

  return overlay
}

function addShareButton(): void {
  if (document.querySelector("[data-record-workspace]")) return
  // Keep the homepage focused on its primary research actions.
  if (["/", "/index", "/index.html"].includes(shareLocalPath())) {
    return
  }

  // Find the article title or first h1
  const titleEl = document.querySelector(".article-title") || document.querySelector("h1")
  if (!titleEl) return

  // Check if button already exists
  if (document.querySelector(".share-btn")) return

  // Create share button
  const shareBtn = document.createElement("button")
  shareBtn.className = "share-btn"
  shareBtn.type = "button"
  shareBtn.textContent = "Share"
  shareBtn.title = "Copy shareable snippet"

  // Insert after title
  titleEl.parentNode?.insertBefore(shareBtn, titleEl.nextSibling)

  // Create modal (once)
  let modal = document.querySelector(".share-modal-overlay") as HTMLElement
  if (!modal) {
    modal = createShareModal()
    document.body.appendChild(modal)
  }

  // Open modal on click
  shareBtn.addEventListener("click", () => {
    lastShareTrigger = shareBtn
    const snippet = generateSnippet()
    const content = modal.querySelector(".share-modal-content")
    if (content) {
      content.textContent = snippet
    }
    modal.classList.add("active")
    modal.setAttribute("aria-hidden", "false")
    ;(modal.querySelector("#copy-snippet") as HTMLButtonElement)?.focus()
  })
}

// Run on page load and navigation
document.addEventListener("nav", () => {
  addShareButton()
})

// Also run immediately in case nav event already fired
if (document.readyState === "complete") {
  addShareButton()
} else {
  window.addEventListener("load", addShareButton)
}

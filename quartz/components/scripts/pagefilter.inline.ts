// Filter generated index records without counting their nested list markup.
document.addEventListener("nav", () => {
  const article = document.querySelector("article")
  const filter = document.querySelector(".page-filter") as HTMLInputElement
  const clearBtn = document.querySelector(".filter-clear") as HTMLButtonElement
  const countSpan = document.querySelector(".filter-count") as HTMLOutputElement
  if (!article || !filter) return
  const filterRoot = article

  const records = [...filterRoot.querySelectorAll<HTMLElement>(".filter-item")]
  const listItems = records.length ? [] : [...filterRoot.querySelectorAll<HTMLElement>("li")]
  const primaryItems = records.length ? records : listItems
  const keyFor = (item: HTMLElement, index: number) => item.dataset.filterKey || `record-${index}`

  function doFilter() {
    const term = filter.value.toLowerCase().trim()

    primaryItems.forEach((item) => {
      const text = item.textContent?.toLowerCase() || ""
      item.classList.toggle("filter-hidden", !!term && !text.includes(term))
    })

    // Work from inner sections outward so empty nested groups disappear too.
    const details = [...filterRoot.querySelectorAll<HTMLDetailsElement>("details")].reverse()
    details.forEach((section) => {
      if (!term) {
        section.classList.remove("filter-hidden")
        return
      }
      const visibleSelector = records.length
        ? ".filter-item:not(.filter-hidden)"
        : "li:not(.filter-hidden)"
      const hasVisibleRecord = Boolean(section.querySelector(visibleSelector))
      section.classList.toggle("filter-hidden", !hasVisibleRecord)
      if (hasVisibleRecord) section.open = true
    })

    filterRoot.querySelectorAll<HTMLElement>("h2, h3").forEach((heading) => {
      if (!term) {
        heading.classList.remove("filter-hidden")
        return
      }
      let sibling = heading.nextElementSibling
      let hasVisibleContent = false
      while (sibling && !sibling.matches("h2, h3")) {
        if (!sibling.classList.contains("filter-hidden")) {
          const visibleSelector = records.length
            ? ".filter-item:not(.filter-hidden)"
            : "li:not(.filter-hidden)"
          if (sibling.matches(visibleSelector) || sibling.querySelector(visibleSelector)) {
            hasVisibleContent = true
            break
          }
        }
        sibling = sibling.nextElementSibling
      }
      heading.classList.toggle("filter-hidden", !hasVisibleContent)
    })

    if (countSpan) {
      const totalKeys = new Set(primaryItems.map(keyFor))
      const visibleKeys = new Set(
        primaryItems.filter((item) => !item.classList.contains("filter-hidden")).map(keyFor),
      )
      countSpan.textContent = term ? `${visibleKeys.size} of ${totalKeys.size}` : ""
    }

    if (clearBtn) clearBtn.style.display = filter.value ? "block" : "none"
  }

  filter.addEventListener("input", doFilter)
  clearBtn?.addEventListener("click", () => {
    filter.value = ""
    doFilter()
    filter.focus()
  })

  filter.value = ""
  if (clearBtn) clearBtn.style.display = "none"
  if (countSpan) countSpan.textContent = ""
  filterRoot
    .querySelectorAll(".filter-hidden")
    .forEach((element) => element.classList.remove("filter-hidden"))
})

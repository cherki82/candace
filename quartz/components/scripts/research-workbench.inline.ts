type IndexRecord = Record<string, any>

const escapeHtml = (value: unknown) =>
  String(value ?? "").replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]!,
  )

const label = (value: string) =>
  value.replaceAll("_", " ").replace(/^./, (character) => character.toUpperCase())

const verificationBadge = (item: IndexRecord) => {
  const outcome =
    item.statement_type === "factual_claim"
      ? item.veracity
      : item.verification_status === "verified"
        ? "recorded"
        : item.verification_status || "unreviewed"
  const text = outcome === "recorded" ? "Verification recorded" : label(outcome)
  return `<span class="status-badge status-${escapeHtml(outcome)}">${escapeHtml(text)}</span>`
}

const stylesheet = document.querySelector<HTMLLinkElement>(
  'link[rel="stylesheet"][href$="index.css"]',
)
const siteRoot = stylesheet
  ? new URL(stylesheet.href, location.href).pathname.replace(/\/index\.css$/, "")
  : ""

const localHref = (href: string) => (href.startsWith("/") ? `${siteRoot}${href}` : href)

const optionValues = (items: IndexRecord[], key: string) => {
  const counts = new Map<string, number>()
  items.forEach((item) => {
    const values = Array.isArray(item[key]) ? item[key] : [item[key]]
    values
      .filter(Boolean)
      .forEach((value) => counts.set(String(value), (counts.get(String(value)) ?? 0) + 1))
  })
  return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]))
}

const control = (name: string, title: string, values: [string, number][], selected: string) => `
  <label><span>${escapeHtml(title)}</span><select name="${name}">
    <option value="">All</option>
    ${values.map(([value, count]) => `<option value="${escapeHtml(value)}" ${selected === value ? "selected" : ""}>${escapeHtml(label(value))} (${count})</option>`).join("")}
  </select></label>`

const searchableControl = (
  name: string,
  title: string,
  values: [string, number][],
  selected: string,
) => `
  <label><span>${escapeHtml(title)}</span><input type="search" name="${name}" list="research-${name}-options" value="${escapeHtml(selected)}" placeholder="All" autocomplete="off">
    <datalist id="research-${name}-options">${values.map(([value, count]) => `<option value="${escapeHtml(value)}">${count} matches</option>`).join("")}</datalist>
  </label>`

const optionalControl = (
  name: string,
  title: string,
  values: [string, number][],
  selected: string,
) => (values.length > 1 ? control(name, title, values, selected) : "")

const paramsObject = (defaults: Record<string, string> = {}) => ({
  ...defaults,
  ...Object.fromEntries(new URLSearchParams(location.search)),
})

const writeParams = (form: HTMLFormElement, page = 1) => {
  const params = new URLSearchParams()
  new FormData(form).forEach((value, key) => {
    if (String(value)) params.set(key, String(value))
  })
  if (page > 1) params.set("page", String(page))
  const query = params.toString()
  history.replaceState({}, "", `${location.pathname}${query ? `?${query}` : ""}${location.hash}`)
}

const pageButtons = (page: number, pages: number) => `
  <nav class="research-pages" aria-label="Results pages">
    <button type="button" data-page="${page - 1}" ${page <= 1 ? "disabled" : ""}>← Previous</button>
    <span>Page ${page} of ${Math.max(1, pages)}</span>
    <button type="button" data-page="${page + 1}" ${page >= pages ? "disabled" : ""}>Next →</button>
  </nav>`

const timestampLabel = (seconds: number) => {
  const value = Math.max(0, Math.floor(seconds || 0))
  return [Math.floor(value / 3600), Math.floor((value % 3600) / 60), value % 60]
    .map((part) => String(part).padStart(2, "0"))
    .join(":")
}

const expandStatements = (payload: IndexRecord[] | IndexRecord) => {
  if (Array.isArray(payload)) {
    return payload.flatMap((item) => {
      if (!Array.isArray(item.appearances)) return [item]
      const { appearances, ...statement } = item
      return appearances.map((appearance: IndexRecord, index: number) => ({
        ...statement,
        ...appearance,
        id: `${item.statement_id}:${index}`,
      }))
    })
  }
  return (payload.statements || []).flatMap((item: IndexRecord) => {
    const entities = (item.entity_ids || []).map((id: string) => ({
      id,
      ...(payload.entities[id] || { name: id, type: "UNKNOWN" }),
    }))
    return item.appearances.map((appearance: IndexRecord, index: number) => {
      const episode = payload.episodes[appearance.episode_id] || {}
      return {
        ...item,
        ...appearance,
        id: `${item.statement_id}:${index}`,
        entities,
        episode_title: episode.title || appearance.episode_id || "Unknown source",
        published: episode.published || "",
        channel: episode.channel || "Unspecified",
        timestamp_label: timestampLabel(appearance.timestamp),
        transcript_href: episode.slug
          ? `/episodes/${episode.slug}#${appearance.transcript_anchor}`
          : "",
        statement_href: `/statements/${item.statement_id}`,
        first_appearance: index === 0,
        appearance_count: item.appearances.length,
      }
    })
  })
}

const groupStatements = (items: IndexRecord[]) => {
  const groups = new Map<string, IndexRecord>()
  items.forEach((item) => {
    const existing = groups.get(item.statement_id)
    if (existing) existing.matching_appearances.push(item)
    else groups.set(item.statement_id, { ...item, matching_appearances: [item] })
  })
  return [...groups.values()]
}

const statementControls = (items: IndexRecord[], params: Record<string, string>) => {
  const entities = new Map<string, number>()
  const entityTypes = new Map<string, number>()
  items.forEach((item) =>
    item.entities?.forEach((entity: IndexRecord) => {
      entities.set(entity.name, (entities.get(entity.name) ?? 0) + 1)
      entityTypes.set(entity.type, (entityTypes.get(entity.type) ?? 0) + 1)
    }),
  )
  return `
    <form class="research-controls">
      <div class="research-search-row">
        <label class="research-query"><span>Search statements or transcript snippets</span><input type="search" name="q" value="${escapeHtml(params.q)}" placeholder="Search the evidence record…"></label>
        <button type="button" class="copy-research-link">Copy view link</button>
        <button type="reset">Reset</button>
      </div>
      <div class="research-filter-grid research-primary-filters">
        <label><span>From</span><input type="date" name="from" value="${escapeHtml(params.from)}"></label>
        <label><span>To</span><input type="date" name="to" value="${escapeHtml(params.to)}"></label>
        ${searchableControl(
          "entity",
          "Entity",
          [...entities.entries()].sort((a, b) => a[0].localeCompare(b[0])),
          params.entity,
        )}
        ${control("veracity", "Outcome", optionValues(items, "veracity"), params.veracity)}
      </div>
      <details><summary>More filters</summary><div class="research-filter-grid">
        ${control("channel", "Source / channel", optionValues(items, "channel"), params.channel)}
        ${searchableControl("episode", "Episode", optionValues(items, "episode_title"), params.episode)}
        ${searchableControl("speaker", "Speaker", optionValues(items, "speaker"), params.speaker)}
        ${control("context", "Speaker context", optionValues(items, "speaker_context"), params.context)}
        ${control("entityType", "Entity type", [...entityTypes.entries()].sort(), params.entityType)}
        ${control("type", "Statement type", optionValues(items, "statement_type"), params.type)}
        ${control("modality", "Modality", optionValues(items, "modality"), params.modality)}
        ${control("conveyance", "Speech", optionValues(items, "conveyance"), params.conveyance)}
        ${control("verification", "Verification", optionValues(items, "verification_status"), params.verification)}
        ${control("confidence", "Confidence", optionValues(items, "confidence"), params.confidence)}
        <label class="research-check"><input type="checkbox" name="sources" value="1" ${params.sources === "1" ? "checked" : ""}><span>Has external sources</span></label>
        <label class="research-check"><input type="checkbox" name="first" value="1" ${params.first === "1" ? "checked" : ""}><span>First appearances only</span></label>
      </div></details>
      <div class="research-sort-row"><div class="research-view-controls"><label><span>Show</span><select name="view"><option value="statements" ${(params.view || "statements") === "statements" ? "selected" : ""}>Unique statements</option><option value="appearances" ${params.view === "appearances" ? "selected" : ""}>Every appearance</option></select></label><label><span>Sort</span><select name="sort">
        ${[
          ["recent", "Most recent"],
          ["oldest", "Chronological"],
          ["relevance", "Relevance"],
          ["first", "First appearance"],
          ["recurrence", "Recurrence"],
          ["confidence", "Verification confidence"],
        ]
          .map(
            ([value, title]) =>
              `<option value="${value}" ${(params.sort || "recent") === value ? "selected" : ""}>${title}</option>`,
          )
          .join("")}
      </select></label></div><output class="research-result-count" aria-live="polite"></output></div>
    </form>
    <aside class="research-collection" aria-live="polite" hidden></aside>
    <div class="research-results"></div>`
}

const statementMatches = (item: IndexRecord, params: Record<string, string>) => {
  const haystack = [
    item.text,
    item.snippet,
    item.speaker,
    item.episode_title,
    ...item.entities.map((entity: IndexRecord) => entity.name),
  ]
    .join(" ")
    .toLowerCase()
  return (
    (!params.q || haystack.includes(params.q.toLowerCase())) &&
    (!params.from || item.published >= params.from) &&
    (!params.to || item.published <= params.to) &&
    (!params.channel || item.channel === params.channel) &&
    (!params.episode || item.episode_title.toLowerCase().includes(params.episode.toLowerCase())) &&
    (!params.speaker || item.speaker.toLowerCase().includes(params.speaker.toLowerCase())) &&
    (!params.context || item.speaker_context === params.context) &&
    (!params.entity ||
      item.entities.some((entity: IndexRecord) =>
        entity.name.toLowerCase().includes(params.entity.toLowerCase()),
      )) &&
    (!params.entityType ||
      item.entities.some((entity: IndexRecord) => entity.type === params.entityType)) &&
    (!params.type || item.statement_type === params.type) &&
    (!params.modality || item.modality === params.modality) &&
    (!params.conveyance || item.conveyance === params.conveyance) &&
    (!params.verification || item.verification_status === params.verification) &&
    (!params.veracity || item.veracity === params.veracity) &&
    (!params.confidence || item.confidence === params.confidence) &&
    (params.sources !== "1" || item.external_source_count > 0) &&
    (params.first !== "1" || item.first_appearance)
  )
}

const statementSort = (items: IndexRecord[], params: Record<string, string>) => {
  const confidence = { high: 3, medium: 2, low: 1, unrated: 0 } as Record<string, number>
  const relevance = (item: IndexRecord) => {
    if (!params.q) return 0
    const query = params.q.toLowerCase()
    return (
      (item.text.toLowerCase().split(query).length - 1) * 2 +
      (item.snippet.toLowerCase().includes(query) ? 1 : 0)
    )
  }
  return items.sort((a, b) => {
    if (params.sort === "oldest" || params.sort === "first")
      return `${a.published}:${a.timestamp}`.localeCompare(`${b.published}:${b.timestamp}`)
    if (params.sort === "recurrence") return b.appearance_count - a.appearance_count
    if (params.sort === "confidence") return confidence[b.confidence] - confidence[a.confidence]
    if (params.sort === "relevance")
      return relevance(b) - relevance(a) || b.published.localeCompare(a.published)
    return `${b.published}:${b.timestamp}`.localeCompare(`${a.published}:${a.timestamp}`)
  })
}

const appearanceList = (items: IndexRecord[]) =>
  items.length > 1
    ? `<details class="research-appearances"><summary>Compare ${items.length} matching appearances</summary><ol>${items
        .map(
          (appearance) =>
            `<li><time datetime="${escapeHtml(appearance.published)}">${escapeHtml(appearance.published || "Date unknown")}</time> · ${escapeHtml(appearance.episode_title)}${appearance.transcript_href ? ` · <a href="${escapeHtml(localHref(appearance.transcript_href))}">${escapeHtml(appearance.timestamp_label)} transcript</a>` : ""}</li>`,
        )
        .join("")}</ol></details>`
    : ""

const statementCard = (item: IndexRecord, query: string, selected: Set<string>) => {
  const matchedTranscript =
    query &&
    item.snippet.toLowerCase().includes(query.toLowerCase()) &&
    !item.text.toLowerCase().includes(query.toLowerCase())
  return `
  <article class="research-result-card">
    <div class="research-result-topline"><span class="record-type">${escapeHtml(label(item.statement_type))}</span>${verificationBadge(item)}<label class="research-collect"><input type="checkbox" data-collect-statement="${escapeHtml(item.statement_id)}" ${selected.has(item.statement_id) ? "checked" : ""}><span>Collect</span></label></div>
    <h2><a href="${escapeHtml(localHref(item.statement_href))}">${escapeHtml(item.text)}</a></h2>
    <p class="research-provenance"><strong>${escapeHtml(item.speaker)}</strong> · ${escapeHtml(label(item.speaker_context))} · ${escapeHtml(label(item.conveyance))}</p>
    <p class="research-source-line"><time datetime="${escapeHtml(item.published)}">${escapeHtml(item.published || "Date unknown")}</time> · ${escapeHtml(item.episode_title)}${item.transcript_href ? ` · <a href="${escapeHtml(localHref(item.transcript_href))}">${escapeHtml(item.timestamp_label)} transcript</a>` : ""}</p>
    ${matchedTranscript ? `<p class="research-match-context"><span>Matched transcript context</span>${escapeHtml(item.snippet)}</p>` : ""}
    ${item.entities.length ? `<p class="research-entities">${item.entities.map((entity: IndexRecord) => `<a href="${escapeHtml(localHref(`/entities/${entity.id}`))}">${escapeHtml(entity.name)}</a>`).join(" ")}</p>` : ""}
    ${appearanceList(item.matching_appearances || [])}
    <div class="research-card-footer"><span>${item.external_source_count} external source${item.external_source_count === 1 ? "" : "s"}</span><span>${item.appearance_count} appearance${item.appearance_count === 1 ? "" : "s"}</span>${item.first_appearance ? "<span>First appearance</span>" : ""}${item.thread_count ? `<span>${item.thread_count} thread${item.thread_count === 1 ? "" : "s"}</span>` : ""}</div>
  </article>`
}

const collectionKey = "candace-research-collection"
const loadCollection = () => {
  try {
    return new Set<string>(JSON.parse(localStorage.getItem(collectionKey) || "[]"))
  } catch {
    return new Set<string>()
  }
}
const saveCollection = (selected: Set<string>) => {
  try {
    localStorage.setItem(collectionKey, JSON.stringify([...selected]))
  } catch {
    // The collection remains usable for this page when storage is unavailable.
  }
}

const csvCell = (value: unknown) => `"${String(value ?? "").replaceAll('"', '""')}"`

const initCollection = (container: HTMLElement, items: IndexRecord[], selected: Set<string>) => {
  const tray = container.querySelector<HTMLElement>(".research-collection")!
  const representatives = new Map<string, IndexRecord>()
  items.forEach((item) => {
    const current = representatives.get(item.statement_id)
    if (!current || item.first_appearance) representatives.set(item.statement_id, item)
  })
  const selectedItems = () =>
    [...selected].map((id) => representatives.get(id)).filter(Boolean) as IndexRecord[]
  const citation = (item: IndexRecord) =>
    `“${item.text}” — ${item.speaker}, ${item.episode_title} (${item.published || "date unknown"}), ${item.transcript_href ? new URL(localHref(item.transcript_href), location.origin).href : new URL(localHref(item.statement_href), location.origin).href}`
  const update = () => {
    const chosen = selectedItems()
    tray.hidden = chosen.length === 0
    tray.innerHTML = chosen.length
      ? `<div><strong>${chosen.length} statement${chosen.length === 1 ? "" : "s"} collected</strong><span>Compare, copy, or export this working set.</span></div><details><summary>Review selection</summary><ol>${chosen.map((item) => `<li><a href="${escapeHtml(localHref(item.statement_href))}">${escapeHtml(item.text)}</a></li>`).join("")}</ol></details><div class="research-collection-actions"><button type="button" data-collection-action="copy">Copy citations</button><button type="button" data-collection-action="csv">Export CSV</button><button type="button" data-collection-action="clear">Clear</button></div>`
      : ""
    container.querySelectorAll<HTMLInputElement>("[data-collect-statement]").forEach((input) => {
      input.checked = selected.has(input.dataset.collectStatement!)
    })
  }
  container.addEventListener("change", (event) => {
    const input = (event.target as Element).closest<HTMLInputElement>("[data-collect-statement]")
    if (!input) return
    input.checked
      ? selected.add(input.dataset.collectStatement!)
      : selected.delete(input.dataset.collectStatement!)
    saveCollection(selected)
    update()
  })
  container.addEventListener("click", async (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>("[data-collection-action]")
    if (!button) return
    const chosen = selectedItems()
    if (button.dataset.collectionAction === "copy") {
      await navigator.clipboard.writeText(chosen.map(citation).join("\n\n"))
      button.textContent = "Copied"
      setTimeout(() => (button.textContent = "Copy citations"), 1200)
    } else if (button.dataset.collectionAction === "csv") {
      const rows = [
        ["statement_id", "statement", "speaker", "date", "episode", "transcript"],
        ...chosen.map((item) => [
          item.statement_id,
          item.text,
          item.speaker,
          item.published,
          item.episode_title,
          item.transcript_href
            ? new URL(localHref(item.transcript_href), location.origin).href
            : "",
        ]),
      ]
      const blob = new Blob([rows.map((row) => row.map(csvCell).join(",")).join("\n")], {
        type: "text/csv;charset=utf-8",
      })
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = "candace-statements.csv"
      link.click()
      URL.revokeObjectURL(link.href)
    } else {
      selected.clear()
      saveCollection(selected)
      update()
    }
  })
  return update
}

const initStatements = (container: HTMLElement, items: IndexRecord[]) => {
  const defaults: Record<string, string> = container.dataset.defaultType
    ? { type: container.dataset.defaultType }
    : {}
  container.innerHTML = statementControls(items, paramsObject(defaults))
  const form = container.querySelector<HTMLFormElement>("form")!
  const results = container.querySelector(".research-results")!
  const count = container.querySelector(".research-result-count")!
  const selected = loadCollection()
  const updateCollection = initCollection(container, items, selected)
  const uniqueTotal = new Set(items.map((item) => item.statement_id)).size

  const render = (requestedPage?: number) => {
    writeParams(form, requestedPage ?? 1)
    const params = paramsObject(defaults)
    const filtered = statementSort(
      items.filter((item) => statementMatches(item, params)),
      params,
    )
    const displayItems = params.view === "appearances" ? filtered : groupStatements(filtered)
    const pages = Math.ceil(displayItems.length / 25)
    const page = Math.min(
      Math.max(requestedPage ?? (Number(params.page) || 1), 1),
      Math.max(pages, 1),
    )
    count.textContent =
      params.view === "appearances"
        ? `${filtered.length.toLocaleString()} of ${items.length.toLocaleString()} appearances`
        : `${displayItems.length.toLocaleString()} statements · ${filtered.length.toLocaleString()} matching appearances · ${uniqueTotal.toLocaleString()} total statements`
    results.innerHTML =
      displayItems
        .slice((page - 1) * 25, page * 25)
        .map((item) => statementCard(item, params.q || "", selected))
        .join("") || '<p class="research-empty">No statements match this view.</p>'
    results.insertAdjacentHTML("beforeend", pageButtons(page, pages))
    results.querySelectorAll<HTMLButtonElement>("[data-page]").forEach((button) =>
      button.addEventListener("click", () => {
        render(Number(button.dataset.page))
        container.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        })
      }),
    )
    updateCollection()
  }
  form.addEventListener("input", () => render(1))
  form.addEventListener("reset", () => setTimeout(() => render(1)))
  form.querySelector(".copy-research-link")?.addEventListener("click", async (event) => {
    await navigator.clipboard.writeText(location.href)
    const button = event.currentTarget as HTMLButtonElement
    button.textContent = "Copied"
    setTimeout(() => (button.textContent = "Copy view link"), 1200)
  })
  render(Number(paramsObject(defaults).page) || 1)
}

const sourceControls = (items: IndexRecord[], params: Record<string, string>) => {
  const missingType = items.filter((item) => item.source_type === "unspecified").length
  const missingPublished = items.filter((item) => !item.published_date).length
  const unchecked = items.filter((item) => item.link_health === "unchecked").length
  const missingArchive = items.filter((item) => !item.archived_url).length
  return `
  <div class="ledger-health" role="note" aria-label="Source metadata coverage">
    <span><strong>${missingType.toLocaleString()}</strong> types unclassified</span>
    <span><strong>${missingPublished.toLocaleString()}</strong> publication dates missing</span>
    <span><strong>${unchecked.toLocaleString()}</strong> links unchecked</span>
    <span><strong>${missingArchive.toLocaleString()}</strong> archives unavailable</span>
  </div>
  <form class="research-controls">
    <div class="research-search-row"><label class="research-query"><span>Search titles, domains, entities, or relevance notes</span><input type="search" name="q" value="${escapeHtml(params.q)}" placeholder="Search the source ledger…"></label><button type="reset">Reset</button></div>
    <div class="research-filter-grid">
      ${searchableControl("domain", "Domain", optionValues(items, "domain"), params.domain)}
      ${optionalControl("sourceType", "Source type", optionValues(items, "source_type"), params.sourceType)}
      ${optionalControl("stance", "Stance", optionValues(items, "stances"), params.stance)}
      ${control("outcome", "Verification outcome", optionValues(items, "verification_outcomes"), params.outcome)}
      <label><span>Sort</span><select name="sort"><option value="citations">Most cited</option><option value="recent" ${params.sort === "recent" ? "selected" : ""}>Recently retrieved</option><option value="title" ${params.sort === "title" ? "selected" : ""}>Title</option></select></label>
    </div><output class="research-result-count" aria-live="polite"></output>
  </form><div class="research-results"></div>`
}

let sourceDependenciesPromise: Promise<Record<string, IndexRecord>> | null = null
const loadSourceDependencies = () => {
  sourceDependenciesPromise ??= fetch(localHref("/assets/source-dependencies.json"))
    .then((response) => {
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
      return response.json()
    })
    .catch((error) => {
      sourceDependenciesPromise = null
      throw error
    })
  return sourceDependenciesPromise
}

const sourceCard = (item: IndexRecord) => `
  <article class="research-result-card source-ledger-card">
    <div class="research-result-topline"><span class="record-type">${escapeHtml(item.domain)}</span><span>${item.reference_count} dependent statement${item.reference_count === 1 ? "" : "s"}</span></div>
    <h2><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h2>
    <p class="research-source-line">Published ${escapeHtml((item.published_date || "unknown").slice(0, 10))} · Retrieved ${escapeHtml((item.retrieved_date || "unknown").slice(0, 10))} · ${item.source_type === "unspecified" ? "Source type not classified" : escapeHtml(label(item.source_type))} · Link ${escapeHtml(item.link_health)}${item.archived_url ? ` · <a href="${escapeHtml(item.archived_url)}" target="_blank" rel="noopener noreferrer">Archived copy</a>` : ""}</p>
    <p class="research-entities">${item.stances
      .filter((stance: string) => stance !== "unspecified")
      .map((stance: string) => `<span>${escapeHtml(label(stance))}</span>`)
      .join(
        " ",
      )} ${item.verification_outcomes.map((outcome: string) => `<span class="status-badge status-${escapeHtml(outcome)}">${escapeHtml(label(outcome))}</span>`).join(" ")}</p>
    ${item.relevance.length ? `<ul class="source-relevance">${item.relevance.map((note: string) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>` : ""}
    <details data-source-dependencies="${escapeHtml(item.dependent_statement_ids.join(","))}"><summary>Dependent statements (${item.dependent_statement_ids.length})</summary><ol class="source-dependencies"><li>Open to load statement details.</li></ol></details>
  </article>`

const hydrateSourceDependencies = async (details: HTMLDetailsElement) => {
  if (!details.open || details.dataset.loaded) return
  details.dataset.loaded = "true"
  const list = details.querySelector<HTMLOListElement>(".source-dependencies")!
  list.innerHTML = "<li>Loading statement details…</li>"
  try {
    const dependencies = await loadSourceDependencies()
    const ids = details.dataset.sourceDependencies?.split(",").filter(Boolean) || []
    list.innerHTML = ids
      .map((id) => {
        const statement = dependencies[id]
        return statement
          ? `<li><a href="${escapeHtml(localHref(`/statements/${id}`))}">${escapeHtml(statement.text)}</a>${verificationBadge(statement)}</li>`
          : `<li><a href="${escapeHtml(localHref(`/statements/${id}`))}">${escapeHtml(id)}</a></li>`
      })
      .join("")
  } catch (error) {
    details.dataset.loaded = ""
    list.innerHTML = `<li class="research-error">Statement details could not be loaded. ${escapeHtml(error)}</li>`
  }
}

const initSources = (container: HTMLElement, items: IndexRecord[]) => {
  container.innerHTML = sourceControls(items, paramsObject())
  const form = container.querySelector<HTMLFormElement>("form")!
  const results = container.querySelector(".research-results")!
  const count = container.querySelector(".research-result-count")!
  const render = (requestedPage?: number) => {
    writeParams(form, requestedPage ?? 1)
    const params = paramsObject()
    const query = (params.q || "").toLowerCase()
    const filtered = items
      .filter(
        (item) =>
          (!query ||
            [item.title, item.domain, ...item.entity_names, ...item.relevance]
              .join(" ")
              .toLowerCase()
              .includes(query)) &&
          (!params.domain || item.domain.toLowerCase().includes(params.domain.toLowerCase())) &&
          (!params.sourceType || item.source_type === params.sourceType) &&
          (!params.stance || item.stances.includes(params.stance)) &&
          (!params.outcome || item.verification_outcomes.includes(params.outcome)),
      )
      .sort((a, b) =>
        params.sort === "recent"
          ? String(b.retrieved_date).localeCompare(String(a.retrieved_date))
          : params.sort === "title"
            ? a.title.localeCompare(b.title)
            : b.reference_count - a.reference_count,
      )
    const pages = Math.ceil(filtered.length / 25)
    const page = Math.min(
      Math.max(requestedPage ?? (Number(params.page) || 1), 1),
      Math.max(pages, 1),
    )
    count.textContent = `${filtered.length.toLocaleString()} of ${items.length.toLocaleString()} unique sources`
    results.innerHTML =
      filtered
        .slice((page - 1) * 25, page * 25)
        .map(sourceCard)
        .join("") || '<p class="research-empty">No sources match this view.</p>'
    results.insertAdjacentHTML("beforeend", pageButtons(page, pages))
    results
      .querySelectorAll<HTMLDetailsElement>("[data-source-dependencies]")
      .forEach((details) =>
        details.addEventListener("toggle", () => hydrateSourceDependencies(details)),
      )
    results
      .querySelectorAll<HTMLButtonElement>("[data-page]")
      .forEach((button) =>
        button.addEventListener("click", () => render(Number(button.dataset.page))),
      )
  }
  form.addEventListener("input", () => render(1))
  form.addEventListener("reset", () => setTimeout(() => render(1)))
  render(Number(paramsObject().page) || 1)
}

const eventControls = (items: IndexRecord[], params: Record<string, string>) => {
  const mentions = items.flatMap((item) => item.mentions || [])
  return `
  <form class="research-controls">
    <div class="research-search-row"><label class="research-query"><span>Search events or transcript evidence</span><input type="search" name="q" value="${escapeHtml(params.q)}" placeholder="Search descriptions, source language, or discrepancies…"></label><button type="button" class="copy-research-link">Copy view link</button><button type="reset">Reset</button></div>
    <div class="research-filter-grid research-primary-filters">
      <label><span>From</span><input type="date" name="from" value="${escapeHtml(params.from)}"></label>
      <label><span>To</span><input type="date" name="to" value="${escapeHtml(params.to)}"></label>
      ${searchableControl("episode", "Episode", optionValues(mentions, "episode_title"), params.episode)}
      ${control("precision", "Date precision", optionValues(items, "date_precision"), params.precision)}
    </div>
    <details><summary>More filters</summary><div class="research-filter-grid">
      ${searchableControl("channel", "Source / channel", optionValues(mentions, "channel"), params.channel)}
      ${control("confidence", "Confidence", optionValues(items, "confidence"), params.confidence)}
      <label class="research-check"><input type="checkbox" name="source" value="1" ${params.source === "1" ? "checked" : ""}><span>Has external corroboration</span></label>
      <label class="research-check"><input type="checkbox" name="discrepancy" value="1" ${params.discrepancy === "1" ? "checked" : ""}><span>Has a date discrepancy</span></label>
    </div></details>
    <div class="research-sort-row"><label><span>Sort</span><select name="sort"><option value="recent">Newest event date</option><option value="oldest" ${params.sort === "oldest" ? "selected" : ""}>Oldest event date</option><option value="mentions" ${params.sort === "mentions" ? "selected" : ""}>Most discussed</option></select></label><output class="research-result-count" aria-live="polite"></output></div>
  </form><div class="research-results"></div>`
}

const eventMatches = (item: IndexRecord, params: Record<string, string>) => {
  const query = (params.q || "").toLowerCase()
  const dateParts = String(item.date || "").split("-")
  const eventStart =
    dateParts.length === 1
      ? `${item.date}-01-01`
      : dateParts.length === 2
        ? `${item.date}-01`
        : item.date
  const eventEnd =
    dateParts.length === 1
      ? `${item.date}-12-31`
      : dateParts.length === 2
        ? `${item.date}-${new Date(Date.UTC(Number(dateParts[0]), Number(dateParts[1]), 0)).getUTCDate()}`
        : item.date
  const matchingMention = (mention: IndexRecord) =>
    (!params.episode ||
      mention.episode_title.toLowerCase().includes(params.episode.toLowerCase())) &&
    (!params.channel || mention.channel.toLowerCase().includes(params.channel.toLowerCase()))
  const haystack = [
    item.description,
    item.date,
    item.date_as_stated,
    item.enrichment_note,
    ...item.mentions.flatMap((mention: IndexRecord) => [
      mention.snippet,
      mention.episode_title,
      mention.channel,
      mention.date_as_stated,
      mention.date_discrepancy_note,
    ]),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
  return (
    (!query || haystack.includes(query)) &&
    (!params.from || eventEnd >= params.from) &&
    (!params.to || eventStart <= params.to) &&
    ((!params.episode && !params.channel) || item.mentions.some(matchingMention)) &&
    (!params.precision || item.date_precision === params.precision) &&
    (!params.confidence || item.confidence === params.confidence) &&
    (params.source !== "1" || item.source_url) &&
    (params.discrepancy !== "1" || item.has_discrepancy)
  )
}

const eventCard = (item: IndexRecord) => `
  <article class="research-result-card event-result-card">
    <div class="research-result-topline"><span class="record-type">${escapeHtml(label(item.date_precision))} precision</span><span>${item.mention_count} transcript mention${item.mention_count === 1 ? "" : "s"}</span>${item.has_discrepancy ? '<span class="status-badge status-mixed">Date discrepancy</span>' : ""}</div>
    <h2><a href="${escapeHtml(localHref(item.event_href))}">${escapeHtml(item.description)}</a></h2>
    <p class="research-source-line"><time datetime="${escapeHtml(item.date)}${item.time ? `T${escapeHtml(item.time)}` : ""}">${escapeHtml(item.date || "Date unknown")}${item.time ? ` · ${escapeHtml(item.time)}` : ""}</time>${item.date_as_stated ? ` · Source wording: “${escapeHtml(item.date_as_stated)}”` : ""}</p>
    <p class="research-provenance">${item.source_url ? `<a href="${escapeHtml(item.source_url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.source_title)}</a> · ${escapeHtml(label(item.confidence))} confidence` : "No external corroborating source recorded"}</p>
    ${item.enrichment_note ? `<p class="research-match-context"><span>Dating note</span>${escapeHtml(item.enrichment_note)}</p>` : ""}
    <details class="event-mentions"><summary>Transcript evidence (${item.mentions.length})</summary><ol>${item.mentions
      .map(
        (mention: IndexRecord) =>
          `<li><p><strong>${escapeHtml(mention.episode_title)}</strong> · <time datetime="${escapeHtml(mention.published)}">${escapeHtml(mention.published || "Date unknown")}</time>${mention.transcript_href ? ` · <a href="${escapeHtml(localHref(mention.transcript_href))}">${escapeHtml(mention.timestamp_label)} transcript</a>` : ""}</p><blockquote>${escapeHtml(mention.snippet || "No evidence snippet recorded.")}</blockquote>${mention.date_as_stated ? `<p>Source date wording: “${escapeHtml(mention.date_as_stated)}”</p>` : ""}${mention.date_discrepancy_note ? `<p class="event-discrepancy"><strong>Discrepancy:</strong> ${escapeHtml(mention.date_discrepancy_note)}</p>` : ""}</li>`,
      )
      .join("")}</ol></details>
  </article>`

const initEvents = (container: HTMLElement, items: IndexRecord[]) => {
  container.innerHTML = eventControls(items, paramsObject())
  const form = container.querySelector<HTMLFormElement>("form")!
  const results = container.querySelector(".research-results")!
  const count = container.querySelector(".research-result-count")!
  const render = (requestedPage?: number) => {
    writeParams(form, requestedPage ?? 1)
    const params = paramsObject()
    const filtered = items
      .filter((item) => eventMatches(item, params))
      .sort((a, b) =>
        params.sort === "oldest"
          ? `${a.date}:${a.time || ""}`.localeCompare(`${b.date}:${b.time || ""}`)
          : params.sort === "mentions"
            ? b.mention_count - a.mention_count
            : `${b.date}:${b.time || ""}`.localeCompare(`${a.date}:${a.time || ""}`),
      )
    const pages = Math.ceil(filtered.length / 20)
    const page = Math.min(
      Math.max(requestedPage ?? (Number(params.page) || 1), 1),
      Math.max(pages, 1),
    )
    count.textContent = `${filtered.length.toLocaleString()} of ${items.length.toLocaleString()} events`
    results.innerHTML =
      filtered
        .slice((page - 1) * 20, page * 20)
        .map(eventCard)
        .join("") || '<p class="research-empty">No events match this view.</p>'
    results.insertAdjacentHTML("beforeend", pageButtons(page, pages))
    results
      .querySelectorAll<HTMLButtonElement>("[data-page]")
      .forEach((button) =>
        button.addEventListener("click", () => render(Number(button.dataset.page))),
      )
  }
  form.addEventListener("input", () => render(1))
  form.addEventListener("reset", () => setTimeout(() => render(1)))
  form.querySelector(".copy-research-link")?.addEventListener("click", async (event) => {
    await navigator.clipboard.writeText(location.href)
    const button = event.currentTarget as HTMLButtonElement
    button.textContent = "Copied"
    setTimeout(() => (button.textContent = "Copy view link"), 1200)
  })
  render(Number(paramsObject().page) || 1)
}

document.addEventListener("nav", () => {
  document
    .querySelectorAll<HTMLElement>(".research-workbench:not([data-initialized])")
    .forEach(async (container) => {
      container.dataset.initialized = "true"
      try {
        const response = await fetch(localHref(container.dataset.indexPath!))
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
        const items = await response.json()
        container.dataset.researchView === "sources"
          ? initSources(container, items)
          : container.dataset.researchView === "events"
            ? initEvents(container, items)
            : initStatements(container, expandStatements(items))
      } catch (error) {
        container.innerHTML = `<p class="research-error" role="alert">The research index could not be loaded. ${escapeHtml(error)}</p>`
      }
    })
})

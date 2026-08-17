type IndexRecord = Record<string, any>

const escapeHtml = (value: unknown) =>
  String(value ?? "").replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]!,
  )

const label = (value: string) =>
  value.replaceAll("_", " ").replace(/^./, (character) => character.toUpperCase())

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

const optionalControl = (
  name: string,
  title: string,
  values: [string, number][],
  selected: string,
) => (values.length > 1 ? control(name, title, values, selected) : "")

const paramsObject = () => Object.fromEntries(new URLSearchParams(location.search))

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
        ${control(
          "entity",
          "Entity",
          [...entities.entries()].sort((a, b) => a[0].localeCompare(b[0])),
          params.entity,
        )}
        ${control("veracity", "Outcome", optionValues(items, "veracity"), params.veracity)}
      </div>
      <details><summary>More filters</summary><div class="research-filter-grid">
        ${control("channel", "Source / channel", optionValues(items, "channel"), params.channel)}
        ${control("episode", "Episode", optionValues(items, "episode_title"), params.episode)}
        ${control("speaker", "Speaker", optionValues(items, "speaker"), params.speaker)}
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
      <div class="research-sort-row"><label><span>Sort</span><select name="sort">
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
      </select></label><output class="research-result-count" aria-live="polite"></output></div>
    </form>
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
    (!params.episode || item.episode_title === params.episode) &&
    (!params.speaker || item.speaker === params.speaker) &&
    (!params.context || item.speaker_context === params.context) &&
    (!params.entity ||
      item.entities.some((entity: IndexRecord) => entity.name === params.entity)) &&
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

const statementCard = (item: IndexRecord, query: string) => {
  const matchedTranscript =
    query &&
    item.snippet.toLowerCase().includes(query.toLowerCase()) &&
    !item.text.toLowerCase().includes(query.toLowerCase())
  return `
  <article class="research-result-card">
    <div class="research-result-topline"><span class="record-type">${escapeHtml(label(item.statement_type))}</span><span class="status-badge status-${escapeHtml(item.veracity)}">${escapeHtml(label(item.veracity))}</span></div>
    <h2><a href="${escapeHtml(item.statement_href)}">${escapeHtml(item.text)}</a></h2>
    <p class="research-provenance"><strong>${escapeHtml(item.speaker)}</strong> · ${escapeHtml(label(item.speaker_context))} · ${escapeHtml(label(item.conveyance))}</p>
    <p class="research-source-line"><time datetime="${escapeHtml(item.published)}">${escapeHtml(item.published || "Date unknown")}</time> · ${escapeHtml(item.episode_title)}${item.transcript_href ? ` · <a href="${escapeHtml(item.transcript_href)}">${escapeHtml(item.timestamp_label)} transcript</a>` : ""}</p>
    ${matchedTranscript ? `<p class="research-match-context"><span>Matched transcript context</span>${escapeHtml(item.snippet)}</p>` : ""}
    ${item.entities.length ? `<p class="research-entities">${item.entities.map((entity: IndexRecord) => `<a href="/entities/${escapeHtml(entity.id)}">${escapeHtml(entity.name)}</a>`).join(" ")}</p>` : ""}
    <div class="research-card-footer"><span>${item.external_source_count} external source${item.external_source_count === 1 ? "" : "s"}</span><span>${item.appearance_count} appearance${item.appearance_count === 1 ? "" : "s"}</span>${item.first_appearance ? "<span>First appearance</span>" : ""}${item.thread_ids.length ? `<span>${item.thread_ids.length} thread${item.thread_ids.length === 1 ? "" : "s"}</span>` : ""}</div>
  </article>`
}

const initStatements = (container: HTMLElement, items: IndexRecord[]) => {
  container.innerHTML = statementControls(items, paramsObject())
  const form = container.querySelector<HTMLFormElement>("form")!
  const results = container.querySelector(".research-results")!
  const count = container.querySelector(".research-result-count")!

  const render = (requestedPage?: number) => {
    writeParams(form, requestedPage ?? 1)
    const params = paramsObject()
    const filtered = statementSort(
      items.filter((item) => statementMatches(item, params)),
      params,
    )
    const pages = Math.ceil(filtered.length / 25)
    const page = Math.min(
      Math.max(requestedPage ?? (Number(params.page) || 1), 1),
      Math.max(pages, 1),
    )
    count.textContent = `${filtered.length.toLocaleString()} of ${items.length.toLocaleString()} appearances`
    results.innerHTML =
      filtered
        .slice((page - 1) * 25, page * 25)
        .map((item) => statementCard(item, params.q || ""))
        .join("") || '<p class="research-empty">No statement appearances match this view.</p>'
    results.insertAdjacentHTML("beforeend", pageButtons(page, pages))
    results.querySelectorAll<HTMLButtonElement>("[data-page]").forEach((button) =>
      button.addEventListener("click", () => {
        render(Number(button.dataset.page))
        container.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        })
      }),
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

const sourceControls = (items: IndexRecord[], params: Record<string, string>) => `
  <form class="research-controls">
    <div class="research-search-row"><label class="research-query"><span>Search titles, domains, entities, or relevance notes</span><input type="search" name="q" value="${escapeHtml(params.q)}" placeholder="Search the source ledger…"></label><button type="reset">Reset</button></div>
    <div class="research-filter-grid">
      ${control("domain", "Domain", optionValues(items, "domain"), params.domain)}
      ${optionalControl("sourceType", "Source type", optionValues(items, "source_type"), params.sourceType)}
      ${optionalControl("stance", "Stance", optionValues(items, "stances"), params.stance)}
      ${control("outcome", "Verification outcome", optionValues(items, "verification_outcomes"), params.outcome)}
      <label><span>Sort</span><select name="sort"><option value="citations">Most cited</option><option value="recent" ${params.sort === "recent" ? "selected" : ""}>Recently retrieved</option><option value="title" ${params.sort === "title" ? "selected" : ""}>Title</option></select></label>
    </div><output class="research-result-count" aria-live="polite"></output>
  </form><div class="research-results"></div>`

const sourceCard = (item: IndexRecord) => `
  <article class="research-result-card source-ledger-card">
    <div class="research-result-topline"><span class="record-type">${escapeHtml(item.domain)}</span><span>${item.reference_count} dependent statement${item.reference_count === 1 ? "" : "s"}</span></div>
    <h2><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h2>
    <p class="research-source-line">Retrieved ${escapeHtml((item.retrieved_date || "unknown").slice(0, 10))} · ${item.source_type === "unspecified" ? "Source type not classified" : escapeHtml(label(item.source_type))} · Link ${escapeHtml(item.link_health)}</p>
    <p class="research-entities">${item.stances
      .filter((stance: string) => stance !== "unspecified")
      .map((stance: string) => `<span>${escapeHtml(label(stance))}</span>`)
      .join(
        " ",
      )} ${item.verification_outcomes.map((outcome: string) => `<span class="status-badge status-${escapeHtml(outcome)}">${escapeHtml(label(outcome))}</span>`).join(" ")}</p>
    ${item.relevance[0] ? `<p>${escapeHtml(item.relevance[0])}</p>` : ""}
    <details><summary>Dependent statements</summary><ol class="source-dependencies">${item.dependent_statements
      .slice(0, 12)
      .map(
        (statement: IndexRecord) =>
          `<li><a href="/statements/${escapeHtml(statement.id)}">${escapeHtml(statement.text)}</a><span class="status-badge status-${escapeHtml(statement.veracity)}">${escapeHtml(label(statement.veracity))}</span></li>`,
      )
      .join(
        "",
      )}</ol>${item.dependent_statements.length > 12 ? `<p>${item.dependent_statements.length - 12} more dependent statements.</p>` : ""}</details>
  </article>`

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
          (!params.domain || item.domain === params.domain) &&
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
      .querySelectorAll<HTMLButtonElement>("[data-page]")
      .forEach((button) =>
        button.addEventListener("click", () => render(Number(button.dataset.page))),
      )
  }
  form.addEventListener("input", () => render(1))
  form.addEventListener("reset", () => setTimeout(() => render(1)))
  render(Number(paramsObject().page) || 1)
}

document.addEventListener("nav", () => {
  document
    .querySelectorAll<HTMLElement>(".research-workbench:not([data-initialized])")
    .forEach(async (container) => {
      container.dataset.initialized = "true"
      try {
        const response = await fetch(container.dataset.indexPath!)
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
        const items = await response.json()
        container.dataset.researchView === "sources"
          ? initSources(container, items)
          : initStatements(container, items)
      } catch (error) {
        container.innerHTML = `<p class="research-error" role="alert">The research index could not be loaded. ${escapeHtml(error)}</p>`
      }
    })
})

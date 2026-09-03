import assert from "node:assert/strict"
import { test } from "node:test"
import { VFile } from "vfile"
import { WorkspaceShell } from "./workspaceShell"
import type { BuildCtx } from "../../util/ctx"
import type { FullSlug } from "../../util/path"

test("workspace shells retain exact metadata without parsing legacy lists", () => {
  const header = '---\ntitle: "Entity"\naliases: ["Alias"]\ndescription: "Source context"\n---\n'
  const file = new VFile()
  file.data.slug = "entities/person-a" as FullSlug
  assert.equal(
    WorkspaceShell().textTransform!({} as BuildCtx, header + "Very large legacy body", file),
    header,
  )
  file.data.slug = "threads/theory" as FullSlug
  assert.equal(
    WorkspaceShell().textTransform!({} as BuildCtx, header + "Reviewed lineage", file),
    header + "Reviewed lineage",
  )
})

test("episode readers retain original entity links and timestamps without appendices", () => {
  const file = new VFile()
  file.data.slug = "episodes/ep-a" as FullSlug
  const header = '---\ntitle: "Episode"\n---\n'
  const transcript =
    '\n\n**00:01:00:** <a href="/entities/person-a.md">Alice</a> spoke. ^t-00-01-00\n\n'
  const source =
    header +
    'Metadata\n<details>\n<summary><strong class="section-title">Transcript</strong></summary>' +
    transcript +
    "</details>\n# Appendix\nLarge evidence lists"
  assert.equal(WorkspaceShell().textTransform!({} as BuildCtx, source, file), header + transcript)
  file.data.slug = "timestamps/ep-a/t-00-01-00" as FullSlug
  assert.equal(WorkspaceShell().textTransform!({} as BuildCtx, source, file), header)
})

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

import { readFileSync } from "node:fs"
import { expect, test } from "bun:test"

test("release notifications identify the mm repository", () => {
  const workflow = readFileSync(
    new URL("../.github/workflows/bun-pver-release.yml", import.meta.url),
    "utf8",
  )
  const notificationSteps = workflow
    .split(/^      - /m)
    .filter((step) =>
      step.startsWith("name: Notify release-tracker of version update\n"),
    )

  expect(notificationSteps).toHaveLength(1)
  const repositoryFields = notificationSteps[0].match(/\\"repo\\"\s*:/g) ?? []
  expect(repositoryFields).toHaveLength(1)
  const repositories = Array.from(
    notificationSteps[0].matchAll(/\\"repo\\"\s*:\s*\\"([^"\\]+)\\"/g),
    (match) => match[1],
  )
  expect(repositories).toEqual(["tscircuit/mm"])
})

import { test, expect } from "bun:test"
import mm from ".."

test("inches", () => {
  expect(mm("1in")).toBeCloseTo(25.4)
})
test("mm", () => {
  expect(mm("10mm")).toBeCloseTo(10)
})

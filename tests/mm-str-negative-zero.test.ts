import { expect, test } from "bun:test"
import { mmStr } from "../index"

test("mmStr normalizes negative floating-point residue to zero", () => {
  expect(mmStr(-7.105427357601002e-15)).toBe("0mm")
})

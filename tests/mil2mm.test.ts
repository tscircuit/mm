import { expect, test } from "bun:test"
import { mil2mm } from "../index"

test.each([
  ["1.5", 0.0381],
  ["-10", -0.254],
  ["+10", 0.254],
  [".5", 0.0127],
  ["-.5", -0.0127],
  ["5.", 0.127],
  [" 10 ", 0.254],
  ["1e3", 25.4],
  ["1E-3", 0.0000254],
] as const)(
  "treats unitless %s as mils like its numeric equivalent",
  (input, expected) => {
    expect(mil2mm(input)).toBeCloseTo(expected, 15)
    expect(mil2mm(input)).toBe(mil2mm(Number(input)))
  },
)

test("converts small numeric mil values without parsing exponent notation as units", () => {
  expect(mil2mm(1e-7)).toBeCloseTo(2.54e-9, 15)
  expect(mil2mm(-1e-7)).toBeCloseTo(-2.54e-9, 15)
})

test("preserves explicitly supplied units and integer strings", () => {
  expect(mil2mm("10")).toBeCloseTo(0.254, 15)
  expect(mil2mm("1.5mil")).toBeCloseTo(0.0381, 15)
  expect(mil2mm("1.5mm")).toBe(1.5)
  expect(mil2mm("0.1in")).toBe(2.54)
  expect(() => mil2mm("10yards")).toThrow("Unsupported unit")
})

test("rejects nonfinite mil values", () => {
  for (const input of [NaN, Infinity, -Infinity, "1e309"]) {
    expect(() => mil2mm(input)).toThrow()
  }
})

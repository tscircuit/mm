import convert from "convert-units"

export const mm = (n: number | string): number => {
  const unit = typeof n === "number" ? "mm" : n.replace(/^[^a-zA-Z]+/g, "")
  const val = typeof n === "number" ? n : parseFloat(n.split(unit)[0])
  return convert(val)
    .from(unit as convert.Unit)
    .to("mm")
}

export const mmStr = (n: number | string): string => {
  return `${mm(n)}mm`
}

export default mm

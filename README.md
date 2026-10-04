# @tscircuit/mm

```ts
import mm from "@tscircuit/mm"

mm("10mm") // 10
mm("10cm") // 100
mm("10m") // 10000
mm("1in") // 25.4
mm("1ft") // 304.8
```

```bash
npm install -g @tscircuit/mm
```

## Extra Features

```ts
import { mmStr } from "@tscircuit/mm"

mmStr(10) // 10mm
mmStr("0.1in") // 2.54mm
```

Use `mil2mm` when unitless input represents mils (thousandths of an inch).
Numbers and numeric strings use the same conversion, including fractional,
signed, and scientific-notation values. Explicit units still take precedence.

```ts
import { mil2mm } from "@tscircuit/mm"

mil2mm(1.5) // approximately 0.0381
mil2mm("1.5") // approximately 0.0381
mil2mm("-10") // -0.254
mil2mm("1e3") // 25.4
mil2mm("1.5mm") // 1.5
```

# Primitive Tokens

**Source:** `packages/tokens/src/primitive/*.json`
**Rule:** Never overridden in dark mode. Referenced only by semantic tier.

---

## Breakpoints
```json
{
  "primitive.breakpoint.xs": "444px",
  "primitive.breakpoint.sm": "600px",
  "primitive.breakpoint.md": "900px",
  "primitive.breakpoint.lg": "1200px",
  "primitive.breakpoint.xl": "1536px"
}
```
Note: `xs = 444px` is intentional (Decision #001). Do not reset to MUI default.

---

## Color Palette
Raw color ramp values only. No semantic meaning at this tier.
Scales: `50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900`

Palettes defined:
- `primitive.color.blue.*`
- `primitive.color.purple.*`
- `primitive.color.green.*`
- `primitive.color.red.*`
- `primitive.color.yellow.*`
- `primitive.color.orange.*`
- `primitive.color.neutral.*` (grey scale)

---

## Spacing
Base-4px scale.
```json
{
  "primitive.spacing.1":  "4px",
  "primitive.spacing.2":  "8px",
  "primitive.spacing.3":  "12px",
  "primitive.spacing.4":  "16px",
  "primitive.spacing.5":  "20px",
  "primitive.spacing.6":  "24px",
  "primitive.spacing.8":  "32px",
  "primitive.spacing.10": "40px",
  "primitive.spacing.12": "48px",
  "primitive.spacing.16": "64px",
  "primitive.spacing.20": "80px",
  "primitive.spacing.24": "96px"
}
```

---

## Typography
```
primitive.typography.family.sans        (system sans-serif stack)
primitive.typography.family.mono        (system monospace stack)
primitive.typography.weight.regular     400
primitive.typography.weight.medium      500
primitive.typography.weight.semibold    600
primitive.typography.weight.bold        700
primitive.typography.size.xs            "12px"
primitive.typography.size.sm            "14px"
primitive.typography.size.base          "16px"
primitive.typography.size.lg            "18px"
primitive.typography.size.xl            "20px"
primitive.typography.size.2xl           "24px"
primitive.typography.size.3xl           "30px"
primitive.typography.size.4xl           "36px"
primitive.typography.size.5xl           "48px"
primitive.typography.size.7xl           "72px"
primitive.typography.lineHeight.tight   1.25
primitive.typography.lineHeight.normal  1.5
primitive.typography.lineHeight.relaxed 1.75
```

---

## Border
```
primitive.border.radius.none   "0px"
primitive.border.radius.xs     "2px"
primitive.border.radius.sm     "4px"
primitive.border.radius.md     "8px"
primitive.border.radius.lg     "12px"
primitive.border.radius.xl     "16px"
primitive.border.radius.full   "9999px"
primitive.border.width.thin    "1px"
primitive.border.width.base    "2px"
primitive.border.width.thick   "4px"
```

---

## Shadow (Elevation)
Scale: `primitive.shadow.0` through `primitive.shadow.24`
Format: array of shadow layer objects.
Transformed to `box-shadow` CSS value by `ep/shadow-css` Style Dictionary transform.

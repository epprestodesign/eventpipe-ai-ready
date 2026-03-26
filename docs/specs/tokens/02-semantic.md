# Semantic Tokens

**Source:**
- Colors: `packages/tokens/src/semantic/color/light.json` and `semantic/color/dark.json`
- Spacing: `packages/tokens/src/semantic/spacing.json`
- Typography: `packages/tokens/src/semantic/typography.json`

**Rule:** References primitives only. Color tokens have explicit light/dark variants.
`dark.json` contains ONLY values that differ from `light.json` — no duplication.

---

## Color — Action (State Overlays)
Used for interactive state layers. See Decision #003 for implementation patterns.

```json
// semantic/color/light.json
{
  "semantic.color.action.hover":           "#0000000A",
  "semantic.color.action.hoverOpacity":    0.04,
  "semantic.color.action.selected":        "#00000014",
  "semantic.color.action.selectedOpacity": 0.08,
  "semantic.color.action.focus":           "#0000001F",
  "semantic.color.action.focusOpacity":    0.12
}

// semantic/color/dark.json — only differing values (never duplicate light values here)
{
  "semantic.color.action.hoverOpacity":    0.08,
  "semantic.color.action.selectedOpacity": 0.16
}
```
Note: `hoverOpacity` differs by theme (0.04 light / 0.08 dark). This is why
`primitive.state.*` tokens were rejected — see Decision #003.

---

## Color — Brand
```
semantic.color.brand.primary       → primitive.color.blue.600
semantic.color.brand.primaryDark   → primitive.color.blue.800
semantic.color.brand.primaryLight  → primitive.color.blue.300
semantic.color.brand.secondary     → primitive.color.purple.500
```

---

## Color — Roles
```
semantic.color.background.default   → primitive.color.neutral.50  (light)
semantic.color.background.paper     → #FFFFFF                     (light)
semantic.color.surface.default      → #FFFFFF                     (light)
semantic.color.text.primary         → primitive.color.neutral.900 (light)
semantic.color.text.secondary       → primitive.color.neutral.600 (light)
semantic.color.text.disabled        → primitive.color.neutral.400 (light)
semantic.color.border.default       → primitive.color.neutral.200 (light)
semantic.color.border.strong        → primitive.color.neutral.400 (light)
semantic.color.divider              → primitive.color.neutral.200 (light)
```
Dark variants defined in `semantic/color/dark.json`. Only differing values included.

---

## Spacing — Contextual
```
semantic.spacing.stack.xs   → primitive.spacing.2  (8px)
semantic.spacing.stack.sm   → primitive.spacing.3  (12px)
semantic.spacing.stack.md   → primitive.spacing.4  (16px)
semantic.spacing.stack.lg   → primitive.spacing.6  (24px)
semantic.spacing.stack.xl   → primitive.spacing.10 (40px)
semantic.spacing.inline.xs  → primitive.spacing.1  (4px)
semantic.spacing.inline.sm  → primitive.spacing.2  (8px)
semantic.spacing.inline.md  → primitive.spacing.3  (12px)
semantic.spacing.inline.lg  → primitive.spacing.4  (16px)
```

---

## Typography — Semantic Scale
```
semantic.typography.display.fontSize    → primitive.typography.size.7xl
semantic.typography.h1.fontSize         → primitive.typography.size.5xl
semantic.typography.h2.fontSize         → primitive.typography.size.4xl
semantic.typography.h3.fontSize         → primitive.typography.size.3xl
semantic.typography.h4.fontSize         → primitive.typography.size.2xl
semantic.typography.h5.fontSize         → primitive.typography.size.xl
semantic.typography.h6.fontSize         → primitive.typography.size.lg
semantic.typography.body1.fontSize      → primitive.typography.size.base
semantic.typography.body2.fontSize      → primitive.typography.size.sm
semantic.typography.caption.fontSize    → primitive.typography.size.xs
semantic.typography.overline.fontSize   → primitive.typography.size.xs
```

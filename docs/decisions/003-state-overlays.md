---
id: "003"
title: State Overlay Implementation
status: DECIDED
---

## Decision
Two implementation patterns. No `primitive.state.*` tokens. No `semantic.color.on-surface`.

## Pattern 1 — Generic Surface Overlay
Apply `semantic.color.action.*` directly as a background layer.

```css
/* hover */
background: var(--ep-semantic-color-action-hover);
/* selected */
background: var(--ep-semantic-color-action-selected);
```

## Pattern 2 — Role-Specific Tinted Overlay
Use `color-mix()` for brand/role-colored overlays.

```css
background: color-mix(
  in srgb,
  var(--ep-semantic-color-brand-primary)
    calc(var(--ep-semantic-color-action-hoverOpacity) * 100%),
  transparent
);
```

## Why No `primitive.state.*`
Hover opacity differs by theme: **light = 0.04, dark = 0.08**.
Putting theme-varying values in the primitive tier violates "primitives never
overridden" rule. The correct home is `semantic.color.action.*`.

## Browser Compatibility
`color-mix(in srgb, ...)` supported in Chrome 111+, Safari 16.2+, Firefox 113+.
All browsers in Decision #006 matrix qualify.

## Authoritative Token Values
See `docs/specs/tokens/02-semantic.md` → `semantic.color.action.*`.

## Rejected
- `primitive.state.*` tokens: layer violation; universal values are factually wrong
- `semantic.color.on-surface`: unnecessary abstraction; action tokens are sufficient

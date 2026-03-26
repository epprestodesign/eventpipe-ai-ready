---
id: "002"
title: Token Format and Naming Convention
status: DECIDED
---

## Decision
W3C DTCG token format, 3-tier hierarchy, CSS custom property naming:
`--ep-{tier}-{category}-{path}`

## Tier Rules
| Tier        | Prefix             | Dark-mode override? | May reference     |
|-------------|--------------------|--------------------|-------------------|
| Primitive   | `ep.primitive.*`   | No                 | Nothing           |
| Semantic    | `ep.semantic.*`    | Yes                | Primitives only   |
| Component   | `ep.component.*`   | Via semantic       | Semantic only     |

**Never skip tiers.** Component tokens must not reference primitive tokens directly.

## CSS Custom Property Examples
```
--ep-primitive-color-blue-500
--ep-semantic-color-brand-primary
--ep-component-button-background-primary
```

## Figma Locale Bug
44 token paths contain comma-decimal separators from Figma locale settings
(e.g., `1,5rem`). Normalized by `ep/locale-normalize` Style Dictionary transform.
17 unique affected key patterns. See `docs/specs/tokens/04-style-dictionary.md`.

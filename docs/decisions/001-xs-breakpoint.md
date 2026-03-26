---
id: "001"
title: xs Breakpoint Value
status: DECIDED
date: 2024-01-01
---

## Decision
`primitive.breakpoint.xs = 444px`

## Context
MUI default xs is `0px` (meaning "all viewports"). EventPipe xs represents the
smallest intentional viewport — narrow mobile devices (320–444px). Setting xs = 0px
eliminates it as a meaningful breakpoint tier.

## Consequences
- Figma canvas mapping: xs maps to the 444px artboard, **not** 0px
- `ep/locale-normalize` Style Dictionary transform preserves this; do not remap
- All responsive logic treats 444px as the xs floor
- MUI theme override required: `createTheme({ breakpoints: { values: { xs: 444 } } })`

## Rejected
- **0px (MUI default):** Makes xs = "all viewports", eliminating the tier as useful

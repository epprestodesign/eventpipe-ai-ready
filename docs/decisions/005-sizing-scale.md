---
id: "005"
title: Component Sizing Scale
status: DECIDED
---

## Decision
Components are assigned to exactly one sizing category. Every component spec must
declare its category. New components must declare a category before implementation.

---

## Sizing Category Matrix

### Category 1 — Action Controls
**Scale: `'xs' | 'sm' | 'md' | 'lg' | 'xl'` (5-tier)**

| Component   | Notes |
|-------------|-------|
| Button      | Full range: compact inline → hero CTA |
| IconButton  | Matches Button; touch target ≥ 44px enforced at all sizes |

**Rationale:** MUI Button exposes `small | medium | large` natively, giving us clean
override points above (`xl`) and below (`xs`). These are the most context-variable
components in the system — they appear at radically different scales.

---

### Category 2 — Status + Indicator
**Scale: `'xs' | 'sm' | 'md' | 'lg' | 'xl'` (5-tier)**

| Component       | Notes |
|-----------------|-------|
| Avatar          | xs = 24px avatar in list rows; xl = 72px profile header |
| Badge           | Dot/count indicator overlaid on other components |
| CircularProgress| Embedded spinner (xs = inline button spinner; xl = page-level loader) |

**Rationale:** These components are embedded inside other components at extreme scales —
a button loading spinner must be `xs`, a page-level skeleton loader needs `xl`.
Full 5-tier range is required for correct composition.

---

### Category 3 — Feedback + Navigation
**Scale: `'xs' | 'sm' | 'md' | 'lg' | 'xl'` (5-tier)**

| Component   | Notes |
|-------------|-------|
| Alert       | xs = inline field hint; xl = page-level system banner |
| Pagination  | xs = compact table footer; xl = prominent list nav |

**Rationale:** Both components appear in radically different density contexts.
Alert particularly spans from sub-component (field error) to full-viewport (system alert).

---

### Category 4 — Form Text Inputs
**Scale: `'sm' | 'md' | 'lg'` (3-tier)**

| Component      | Notes |
|----------------|-------|
| TextField      | `standard` variant dropped; `outlined` and `filled` only |
| Select         | Includes trigger + dropdown |
| Autocomplete   | Renders TextField internally — size flows through |

**Rationale:** MUI exposes only `small | medium` for these controls internally. `lg` is
already a non-trivial override (input padding, font size, border radius). Adding `xs` or
`xl` would require re-implementing input internals — disproportionate effort for the
marginal design range. These controls have natural density bounds: too small = unusable
touch targets; too large = spatially wasteful in forms.

---

### Category 5 — Form Controls (Non-text)
**Scale: `'sm' | 'md' | 'lg'` (3-tier)**

| Component | Notes |
|-----------|-------|
| Checkbox  | Touch target ≥ 44px automatically met at `sm` |
| Radio     | Same constraint as Checkbox |
| Switch    | Thumb + track scale together |
| Slider    | Track height and thumb scale together |

**Rationale:** Identical constraint to Category 4. MUI exposes `small | medium` for all
four. The 3-tier range covers all realistic form density needs (compact table row → large
touch screen form).

---

### Category 6 — Chips
**Scale: `'sm' | 'md' | 'lg'` (3-tier)**

| Component | Notes |
|-----------|-------|
| Chip      | Includes filter, input, and action chip variants |

**Rationale:** MUI Chip exposes `small | medium`. Natural density upper bound: a `xl`
chip would be indistinguishable from a Button. `lg` is the practical maximum.

---

### Category 7 — Data Tables
**Scale: `'sm' | 'md' | 'lg'` (3-tier)**

| Component | Notes |
|-----------|-------|
| Table     | Size cascades to all TableCell children via context |
| TableCell | Can override Table size locally |

**Rationale:** Maps directly to MUI's `dense` table pattern. Three density modes cover
all real data table use cases (compact dashboards → spacious content tables).

---

### Category 8 — Constrained (2-tier)
**Scale: `'sm' | 'md'` (2-tier)**

| Component | Notes |
|-----------|-------|
| Tooltip   | Content density has a hard upper bound |

**Rationale:** A `lg` or `xl` tooltip is visually inappropriate — at that scale the
pattern should be a Popover or Dialog instead. `sm | md` covers all real tooltip needs.
This is the only 2-tier component. No other component should use this scale without
a new decision.

---

### Category 9 — No Size Prop (token-controlled)
**Scale: none — spacing and typography set by semantic tokens**

| Component       | Why |
|-----------------|-----|
| Menu / MenuItem | Internal density via `dense` boolean, not size |
| Card            | Content size determined by children, not container |
| List            | `dense` boolean only |
| Tabs / Tab      | Fixed typography; no meaningful scale |
| Dialog          | Uses `maxWidth` for width — not a size scale |
| Snackbar        | Fixed height |
| Divider         | Fixed |
| Paper           | Fixed |
| Backdrop        | Fixed |
| Skeleton        | Width/height via `sx` |
| AppBar          | Fixed height |
| Drawer          | Fixed width |
| Accordion       | Fixed |
| Stepper         | Fixed |
| Breadcrumbs     | Fixed typography |

**Layout primitives** (PageLayout, SectionLayout, InlineGroup): spacing controlled via
semantic spacing tokens, not a size prop.

---

## Enforcement Rules

1. **Every component spec must declare its sizing category** (1–9 above).
2. **New components require a sizing decision** — no implementation without declared category.
3. **No component may mix scale tiers** — a component is in exactly one category.
4. **`xs` or `xl` are forbidden in 3-tier components** — even via `sx` override of the
   size prop type. The prop type enforces the range at compile time.
5. **The only 2-tier component is Tooltip.** Any proposal for a new 2-tier component
   requires a new decision document.

---

## Token Implication

Each size category maps to a set of component token suffixes:

| Category | Token size keys |
|----------|----------------|
| 5-tier   | `.xs` `.sm` `.md` `.lg` `.xl` |
| 3-tier   | `.sm` `.md` `.lg` |
| 2-tier   | `.sm` `.md` |
| No size  | (no size suffix — single token value) |

Example: `ep.component.button.padding.xs`, `ep.component.button.padding.xl`
Example: `ep.component.text-field.padding.sm`, `ep.component.text-field.padding.lg`

---

## Summary Table

| Category | Scale | Components |
|----------|-------|-----------|
| 1 — Action Controls | `xs\|sm\|md\|lg\|xl` | Button, IconButton |
| 2 — Status + Indicator | `xs\|sm\|md\|lg\|xl` | Avatar, Badge, CircularProgress |
| 3 — Feedback + Navigation | `xs\|sm\|md\|lg\|xl` | Alert, Pagination |
| 4 — Form Text Inputs | `sm\|md\|lg` | TextField, Select, Autocomplete |
| 5 — Form Controls | `sm\|md\|lg` | Checkbox, Radio, Switch, Slider |
| 6 — Chips | `sm\|md\|lg` | Chip |
| 7 — Data Tables | `sm\|md\|lg` | Table, TableCell |
| 8 — Constrained | `sm\|md` | Tooltip only |
| 9 — No Size | — | Menu, Card, List, Tabs, Dialog, Snackbar, Divider, Paper, Backdrop, Skeleton, AppBar, Drawer, Accordion, Stepper, Breadcrumbs, layout primitives |

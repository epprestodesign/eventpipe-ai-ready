# Shared Prop Vocabulary

**Authoritative cross-component prop contracts.**
Component specs reference these definitions — do not redefine them in individual component files.

---

## Color
```ts
type EpColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'neutral';
```
All colored components accept `color?: EpColor`. Default: `'primary'`.
`'neutral'` maps to the grey/neutral palette role.

---

## Size
**Authoritative matrix:** `docs/decisions/005-sizing-scale.md`

Every component belongs to exactly one sizing category. New components must declare a
category before implementation. No mixing of size tiers within a component.

```ts
type EpSize5 = 'xs' | 'sm' | 'md' | 'lg' | 'xl';  // Categories 1, 2, 3
type EpSize3 = 'sm' | 'md' | 'lg';                  // Categories 4, 5, 6, 7
type EpSize2 = 'sm' | 'md';                          // Category 8 (Tooltip only)
```

| Type | Components |
|------|-----------|
| `EpSize5` | Button, IconButton, Avatar, Badge, Alert, Pagination, CircularProgress |
| `EpSize3` | TextField, Select, Autocomplete, Checkbox, Radio, Switch, Slider, Chip, Table, TableCell |
| `EpSize2` | Tooltip only |
| No size prop | Menu, Card, List, Tabs, Dialog, Snackbar, and others — see Decision #005 |

Default: `'md'` for all sized components.

---

## Focus Ring
Applied via `:focus-visible`. Uniform 2px width, 2px offset across all interactive components.

**Static color** (no `color` prop): Use a `focusRing.color` token → `{semantic.color.brand.primary}`.
Applies to: Button, Card (interactive), IconButton, Pagination items.

**Dynamic color** (has `color?: EpColor` prop): Focus ring color = `TOKEN.color(epColor)` — the same color as the control's accent. Do not add a separate `focusRing.color` token.
Applies to: Checkbox, Radio, Switch, Chip, and other form controls with a color prop.

**List-like surfaces** (Menu items, List items, Autocomplete options): Use `backgroundFocus` state change instead of outline ring. Outline rings clip inside Portal-rendered and `overflow: hidden` containers.

Do not override with `:focus` unless an explicit accessibility requirement mandates it.

---

## Loading State
```ts
loading?: boolean;
```
Shows inline spinner, disables interaction, preserves element dimensions.
**Components with `loading`:** Button, IconButton, TextField, Select, Autocomplete, Dialog (async confirm)

---

## EventPipe Variant Additions
| Variant   | Components                   | Description                            |
|-----------|------------------------------|----------------------------------------|
| `'soft'`  | Button, IconButton, Alert, Chip | Low-emphasis tinted background      |

These extend MUI's native `variant` prop union. They must not conflict with MUI variants.
MUI variants retained: `contained`, `outlined`, `text` (Button); `filled`, `standard`, `outlined` (inputs, minus exceptions).

---

## TextField: `standard` Variant Dropped
TextField, FilledInput, OutlinedInput, Select, Autocomplete only expose:
- `'outlined'` (default)
- `'filled'`

`'standard'` (underline-only) is removed from EventPipe's API surface.

---

## Ref Forwarding
All components forward refs to their root DOM element via `React.forwardRef`.

## `className` and `sx`
All components accept `className?: string` and `sx?: SxProps<Theme>` (MUI sx prop).
`sx` is passed through to the MUI base component unchanged.

---

## Required State
```ts
required?: boolean;
```
**Components with `required`:** TextField, Select, Autocomplete, Checkbox, Radio, Switch.
Sets `aria-required="true"` on the underlying input. Propagated by FormField context.

## Severity (Alert + Snackbar Exception)
Alert and Snackbar use `severity` instead of `color`:
```ts
severity?: 'error' | 'warning' | 'info' | 'success';
```
Alert: drives background/icon color. Snackbar: when provided, renders an embedded Alert.
These components do **not** accept `color?: EpColor`.

## Dense Mode
```ts
dense?: boolean;
```
Compact padding for toolbar/settings contexts. Default: `false`.
**Components with `dense`:** Menu (via `dense` on `MenuItem`), List (via `dense` on `List` or `ListItem`).
When `dense={true}`, components read `--ep-component-{name}-item-dense-padding-*` tokens.

## Slot / Adornment Vocabulary
Naming differs by component category to preserve MUI compatibility:
| Components                      | Leading          | Trailing         | Notes |
|---------------------------------|------------------|------------------|-------|
| Button, IconButton              | `startSlot`      | `endSlot`        | Any ReactNode |
| TextField, Select, Autocomplete | `startAdornment` | `endAdornment`   | Any ReactNode |
| MenuItem, ListItem, Chip        | `startIcon`      | `endIcon`        | Icon-only; wrapped in `aria-hidden` span |
| Alert                           | `icon` (override) | `action` (right) | Single slot |

Icon slot rules: always wrap in an `aria-hidden="true"` span. Never put an `aria-label` on the icon inside a named interactive element (the parent carries the accessible name).

## MUI Internal Primitives (Not Public API)
**FilledInput, OutlinedInput, InputAdornment** are MUI primitives used internally by
TextField and Select. **Do not expose or consume these directly.** Always use `TextField`
or `Select` instead. They are listed in Decision #005 for internal sizing context only.

## FormField Context Propagation
See `docs/specs/patterns/formfield.md` for the full `FormFieldContext` contract.
Short version: `disabled`, `error`, `required` flow from parent → child (parent wins).
`size`, `fullWidth` — explicit child prop wins over FormField context.

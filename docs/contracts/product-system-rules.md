# Product System Rules

**Extracted from Wave 3 DataTable architecture. Expanded with consistency audit from Wave 3B extraction.**
These rules apply across DataTable, future FilterBar, Command palette, and any other product-level data surface.
Apply them without needing per-component decisions.

> **Document structure**
> - Rules 1–7: DataTable patterns (original extraction)
> - Rules 8–11: Cross-cutting rules discovered during audit
> - Pattern Catalog: Six DataTable patterns with full behavioral specs
> - Consistency Audit: Inconsistencies and unification opportunities across all shipped components
> - Future System Mapping: Which patterns apply to FilterBar, Search, Command, Dashboards
> - Missing Abstractions: Identified gaps — not implemented yet

---

## Rule 1: Sort affordance

**Applies to:** Any sortable column header, sortable list header, or sortable control.

**Rule:** Sort state always lives in the consumer. Components receive `sortDirection` and `onSort` as presentational props. No internal sort state inside any component.

```ts
// Component API — always this shape:
sortDirection?: 'asc' | 'desc' | false;  // undefined = not sortable; false = sortable, inactive
onSort?: () => void;                      // undefined = not sortable
```

**Icon mapping** (always use these icons — never substitute):
| State | Icon | Token |
|---|---|---|
| Not sortable | None | — |
| Sortable, inactive | `sort` (UnfoldMore) | `--ep-component-table-header-sort-icon-color` |
| Active ascending | `chevron-up` | `--ep-component-table-header-sort-icon-color-active` |
| Active descending | `chevron-down` | `--ep-component-table-header-sort-icon-color-active` |

**ARIA mapping** (always derive from `sortDirection`):
| `sortDirection` | `aria-sort` |
|---|---|
| `undefined` | omitted |
| `false` | `"none"` |
| `'asc'` | `"ascending"` |
| `'desc'` | `"descending"` |

**Never use `MuiTableSortLabel`** — it imports from `@mui/icons-material` directly.

---

## Rule 2: Row action menu

**Applies to:** Any table row, list item, or card with contextual actions.

**Rule:** One `Menu` instance per list/table, anchored to a trigger element by row ID. Never mount one `Menu` per row.

```tsx
// Anchor state shape — always this pattern:
const [anchor, setAnchor] = useState<{ el: HTMLElement; id: string } | null>(null);

// Trigger (always this composition):
<Button variant="text" size="sm" aria-label="Row actions"
  onClick={(e) => setAnchor({ el: e.currentTarget, id: row.id })}>
  <Icon name="more-vertical" />
</Button>

// Menu (single instance outside the row map):
<Menu anchorEl={anchor?.el ?? null} open={anchor?.id === row.id}
  onClose={() => setAnchor(null)}>
  ...
</Menu>
```

**Rules:**
- Trigger is always `Button variant="text" size="sm"` with `Icon name="more-vertical"`
- `aria-label="Row actions"` on every trigger
- Actions column is always last, `align="right"`
- Destructive actions are always last after `MenuDivider`
- Do not use `IconButton` here — `Button variant="text" size="sm"` is the standard

---

## Rule 3: Sticky / pinned positioning

**Applies to:** Table headers, toolbar, sidebar headers, any fixed-position structural element.

**Rule:** Sticky/fixed positioning is a structural behavior, never a design token.

- Use inline style or a `stickyHeader` boolean prop that applies `position: sticky; top: 0; z-index: {n}`
- Never create a token for `z-index` — z-index values are structural constants owned by MUI's theme
- Never create a token for `position: sticky` — it is not a visual design decision
- The height constraint that enables sticky scrolling belongs on the consumer container, not the component

---

## Rule 4: Selection presentation

**Applies to:** Any multi-select surface (table rows, list items, card grids).

**Rule:** Selection state always lives in the consumer. Components receive `selected?: boolean` as a presentational prop only.

```tsx
// Component API — always this shape:
<TableRow selected={selectedIds.has(row.id)}>

// Never: <TableRow onSelect={() => ...} />  ← logic inside primitive
```

**Checkbox in selection column:**
- Always `size="sm"` in table/list contexts
- `aria-label` names the specific item: `aria-label={`Select ${row.name}`}`
- Header "select all" checkbox: `aria-label="Select all rows"` (or `"Select all {entity}s"`)
- `indeterminate` when `someSelected && !allSelected`

**Visual rules:**
- Selected row background: `--ep-component-table-row-background-selected`
- Selected toolbar background: `--ep-component-table-toolbar-selected-background`
- Never show a visual count badge on the row itself — show count only in the toolbar

---

## Rule 5: Toolbar selected-state

**Applies to:** Any toolbar above a selectable list or table.

**Rule:** Toolbar visual state switches when `selectionCount > 0`. Consumer controls the count.

```tsx
// Component API — always this shape:
<TableToolbar
  title="Events"                          // shown when selectionCount === 0
  selectionCount={selected.size}           // drives the state switch
  selectionTitle={`${selected.size} selected`}  // consumer provides for i18n
  actions={<ExportButton />}               // default actions slot
  selectionActions={<DeleteButton />}      // bulk actions slot (shown when selected)
/>
```

**Rules:**
- `selectionTitle` is always consumer-provided — never auto-generated inside the component (i18n)
- `selectionActions` replaces `actions` when `selectionCount > 0` — they do not coexist
- Toolbar background switches to `--ep-component-table-toolbar-selected-background` automatically
- `aria-live="polite"` on the selection count region for screen reader announcements

---

## Rule 6: Loading vs empty state sequencing

**Applies to:** Any data list, table, or grid with async data.

**Rule:** Three distinct states — never overlap them.

| State | Condition | Show |
|---|---|---|
| Loading | `isLoading === true` | Skeleton rows / shimmer |
| Empty | `!isLoading && data.length === 0` | Empty state pattern |
| Data | `!isLoading && data.length > 0` | Data rows |

- Never show an empty state while loading
- Never show skeleton rows when data exists
- Skeleton row count should match the expected page size
- Use `Skeleton variant="text"` inside cells — not `variant="rectangular"`

---

## Rule 7: Column count discipline

**Applies to:** All table and grid surfaces.

**Rule:** Every rendering branch (loading, empty, data) must use the same column count.

```tsx
// Define once:
const COLUMN_COUNT = hasSelection ? columns.length + 1  // +1 for checkbox
                   : hasActions  ? columns.length + 1   // +1 for actions
                   :               columns.length;

// Use everywhere:
<TableCell colSpan={COLUMN_COUNT}>   // in empty state cell
```

This prevents table layout shifts when state changes.

---

## Rule 8: Focus ring strategy

**Applies to:** Every interactive component in the system.

**Rule:** Two distinct focus strategies exist. Use the correct one based on surface type.

| Surface type | Strategy | Selector | Color |
|---|---|---|---|
| Button / form control (standalone) | Outline ring | `&:focus-visible` or `&.Mui-focusVisible` | See color rule below |
| List-like surface (Menu, List) | Background change | `&.Mui-focusVisible` | `TOKEN.itemBgFocus()` |

**Color sub-rule:**

| Component type | Focus color | Why |
|---|---|---|
| Components with a `color` prop (Checkbox, Radio, Switch, Chip) | Dynamic — matches `TOKEN.color(epColor)` | Focus ring reinforces the active color |
| Components without a color prop (Button, Pagination, SortButton) | Static — `TOKEN.focusColor()` resolves to brand.primary | No active color to follow |

**MUI selector choice:**
- `&.Mui-focusVisible` — use for MUI-based interactive elements (MUI manages the class)
- `&:focus-visible` — use for native HTML elements (`<button>`, `<a>`) not rendered by MUI (e.g. SortButton which is `styled('button')`)
- Never mix the two for the same element type

**Why:** Menu was deliberately designed with background-change focus because outline rings clip inside Portal-rendered overflow containers. This is the correct behavior for list-like scrollable surfaces — it is not a deficiency to fix. The rule is: button/form-control → outline ring; list/menu item → background change.

---

## Rule 9: Event signature normalization

**Applies to:** EP components that wrap MUI components with multi-argument event callbacks.

**Two categories with different rules:**

### Category A — Form controls: keep `ChangeEventHandler<HTMLInputElement>`

Checkbox, Radio, Switch expose `onChange?: ChangeEventHandler<HTMLInputElement>`.

**Why:** These are HTML form controls. Their `onChange` signature is part of the form control contract — React Hook Form, Formik, and native HTML forms rely on `event.target.checked`, `event.target.name`, and `event.target.value`. Stripping the event would break all form library integration.

```ts
// Form controls — always keep:
onChange?: ChangeEventHandler<HTMLInputElement>;  // (event) => void, event.target.checked = value
```

### Category B — Navigation / selection controls: strip the synthetic event

For controls where the event object has no semantic value to the consumer, expose only the semantic value.

```ts
// MUI's Pagination signature — never expose:
onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;

// EP's Pagination signature — expose only:
onChange?: (page: number) => void;

// Implementation (inside the component):
onChange={onChange ? (_event, p) => onChange(p) : undefined}
```

**Applies to:** Pagination (done), and any future navigation control (tab switching, wizard step change).

**Does not apply to:** `onClick` — always keep `React.MouseEvent` (consumers need `e.currentTarget` for anchor state).

**Current adoption status:**
- ✓ Pagination: `(event, page) → (page)` — correct
- ✓ Checkbox, Radio, Switch: `ChangeEventHandler<HTMLInputElement>` — correct (Category A)
- ✓ Tabs `onChange` (when built): should follow Category B → `(value: string | number) => void`

---

## Rule 10: Icon slot naming convention

**Applies to:** Any component with icon affordances in content slots.

**Rule:** Use `startIcon`/`endIcon` for semantic content slots. Use `startSlot`/`endSlot` only when the slot can hold arbitrary non-icon content.

| Suffix | When to use | Examples |
|---|---|---|
| `startIcon` / `endIcon` | Slot is specifically for icons (Icon component or similar) | Chip, MenuItem, TextField adornments |
| `startSlot` / `endSlot` | Slot can hold any ReactNode (icon, badge, spinner, avatar) | Button |

**Current inconsistency:** Button uses `startSlot`/`endSlot`. Chip and MenuItem use `startIcon`/`endIcon`. This is an **accepted divergence** — Button's slots intentionally accept wider content (e.g. spinners, avatars). The distinction is semantic, not cosmetic.

**Rule for new components:** Default to `startIcon`/`endIcon`. Upgrade to `startSlot`/`endSlot` only if the slot design explicitly allows non-icon content.

**Icon rendering inside slots:** Always wrap the Icon in a `<span aria-hidden="true">` inside the component. Never ask the consumer to provide the `aria-hidden` wrapper.

---

## Rule 11: Polymorphic component (component prop) pattern

**Applies to:** Any component that needs to render as a different HTML element or router Link.

**Rule:** Use the explicit `polymorphicProps` spread pattern to work around `styled()` losing `OverridableComponent` typing.

```tsx
// In component body:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const polymorphicProps = { component: component ?? (href ? 'a' : 'button') } as any;

return (
  <StyledComponent {...polymorphicProps} ref={ref} ...>
```

**Rules:**
- Always provide a fallback: `href` present → `'a'`; otherwise → the natural element (`'button'`, `'li'`)
- The `component` prop is removed from `StyledProps` (not passed as `epComponent`) because it must reach the underlying MUI element as `component`, not as a custom prop
- Always add the eslint disable comment — the cast to `any` is intentional and scoped

**Applies to:** Button, MenuItem, BreadcrumbLink (and any future polymorphic component).

---

---

# Pattern Catalog

Six patterns extracted from DataTable. Each pattern defines: behavior, API shape, visual states, token rules, accessibility, and component/pattern/composition boundaries.

---

## Pattern A: Sort affordance

**Behavior:** A sortable column shows a muted sort icon when inactive and a directional icon when active. Sort direction cycles on repeated activation: inactive → asc → desc → asc. The component never owns sort state.

**API shape:**
```ts
// Component receives (TableHeaderCell):
sortDirection?: 'asc' | 'desc' | false;  // undefined = not sortable
onSort?: () => void;

// Consumer owns state:
const [sort, setSort] = useState<{ col: string; dir: 'asc' | 'desc' } | null>(null);
const dirFor = (col: string): SortDirection =>
  sort?.col === col ? sort.dir : sort !== null ? false : undefined;
```

**Visual states:**
| State | Icon | Icon color token |
|---|---|---|
| Not sortable | None | — |
| Sortable, inactive | `sort` (UnfoldMore) | `--ep-component-table-header-sort-icon-color` (muted) |
| Active ascending | `chevron-up` | `--ep-component-table-header-sort-icon-color-active` (brand) |
| Active descending | `chevron-down` | `--ep-component-table-header-sort-icon-color-active` (brand) |

**Token rules:**
- Sort icon color is set via inline `style={{ color: TOKEN.sortIconColor() }}` on a span wrapper (Icon does not expose a `style` prop — same pattern as Breadcrumbs separator)
- No separate sort token namespace — sort icon tokens live at `--ep-component-table-header-sort-icon-*`

**Accessibility:**
- `aria-sort` is derived from `sortDirection` and applied to the `<th>` automatically by MUI TableCell
- The `<button>` inside the `<th>` handles keyboard interaction; `<th>` carries ARIA semantics
- `scope="col"` is fixed internally — never exposed as a prop

**Boundaries:**
- **Component (TableHeaderCell):** Renders the icon, applies aria-sort, wraps in SortButton if onSort is provided
- **Pattern (consumer):** Owns sort state; provides `dirFor` helper; calls API (sort + fetch)
- **Composition:** TableHeaderCell + state hook + data fetch = complete sortable column

**Reuse in future systems:** FilterBar column headers (if tabular), DataGrid (Wave 5), CommandPalette result sorting.

---

## Pattern B: Row selection

**Behavior:** Multi-select surface. Rows have a visual selected state. A header checkbox drives select-all / deselect-all. Selection count drives toolbar state. No selection logic inside components.

**API shape:**
```tsx
// State (consumer):
const [selected, setSelected] = useState(new Set<string>());
const allSelected = data.length > 0 && selected.size === data.length;
const someSelected = selected.size > 0 && !allSelected;

// Header checkbox:
<Checkbox
  size="sm"
  checked={allSelected}
  indeterminate={someSelected}
  onChange={(checked) => setSelected(checked ? new Set(data.map(r => r.id)) : new Set())}
  aria-label="Select all rows"
/>

// Row checkbox:
<Checkbox
  size="sm"
  checked={selected.has(row.id)}
  onChange={(checked) => setSelected(prev => { const s = new Set(prev); checked ? s.add(row.id) : s.delete(row.id); return s; })}
  aria-label={`Select ${row.name}`}
/>

// Row:
<TableRow selected={selected.has(row.id)}>
```

**Visual states:**
| State | Row background token | Checkbox state |
|---|---|---|
| Default | `--ep-component-table-row-background` (transparent) | Unchecked |
| Selected | `--ep-component-table-row-background-selected` | Checked |
| Hover (default) | `--ep-component-table-row-background-hover` | — |
| Hover (selected) | `--ep-component-table-row-background-selected-hover` | — |
| Header indeterminate | No row change | Indeterminate |

**Token rules:**
- Row background tokens are applied per-row via `selected` prop (presentational only)
- Toolbar background switches via `selectionCount` — uses `--ep-component-table-toolbar-selected-background`
- Never duplicate the count visually in the row itself — count belongs only in the toolbar

**Accessibility:**
- Checkbox `aria-label` names the specific item (not just "Select")
- Header checkbox uses `aria-label="Select all rows"` or `"Select all {entity}s"`
- `indeterminate` when `someSelected && !allSelected` — required for screen readers
- Toolbar `aria-live="polite"` announces selection changes

**Boundaries:**
- **Component:** TableRow (`selected` → background token), Checkbox (`indeterminate` prop), TableToolbar (`selectionCount` → state switch)
- **Pattern:** Selection state (`Set<string>`), toggle logic, indeterminate calculation
- **Composition:** Checkbox column + TableRow selected + TableToolbar selectionCount = complete selectable table

---

## Pattern C: Toolbar selected-state

**Behavior:** A toolbar above a selectable list switches visual state and content slots when one or more items are selected. Default state shows a title and generic actions. Selected state shows a count/label and bulk actions. Transition is smooth (150ms).

**API shape:**
```tsx
<TableToolbar
  title="Events"                            // left slot, default state
  selectionCount={selected.size}            // drives state switch
  selectionTitle={`${selected.size} selected`}  // left slot, selected state (i18n)
  actions={<Button>Export</Button>}         // right slot, default state
  selectionActions={<Button color="error">Delete</Button>}  // right slot, selected state
/>
```

**Visual states:**
| `selectionCount` | Background token | Left slot | Right slot |
|---|---|---|---|
| 0 (default) | `--ep-component-table-toolbar-background` (transparent) | `title` | `actions` |
| > 0 (selected) | `--ep-component-table-toolbar-selected-background` (brand tint) | `selectionTitle` | `selectionActions` |

**Token rules:**
- `minHeight: 52px` is structural (prevents layout shift between states) — not tokenized
- `borderRadius: 4px 4px 0 0` is structural (matches table container top) — not tokenized
- `transition: background-color 150ms ease` is structural — not tokenized
- Only the background color is token-driven

**Accessibility:**
- `role="toolbar"` on the root
- `aria-live="polite"` so screen readers announce count changes
- `selectionTitle` is always consumer-provided — never auto-generated (i18n requirement)

**Boundaries:**
- **Component (TableToolbar):** Slot switching logic, background token, aria-live
- **Pattern:** `selectionCount` computation (lives in consumer alongside selection state)
- **Composition:** TableToolbar + selection state = complete toolbar pattern

**Generalization:** This pattern applies to any "contextual toolbar" — not just tables. Any list surface where multi-select drives a bulk action bar should use this same shape. The only table-specific detail is the token namespace.

---

## Pattern D: Row actions (overflow menu)

**Behavior:** Each row has an overflow trigger (`more-vertical` icon). One Menu instance is mounted outside the row loop, anchored by `{ el, id }` state. Only one menu is open at a time. The trigger and menu are decoupled.

**API shape:**
```tsx
// Anchor state:
const [anchor, setAnchor] = useState<{ el: HTMLElement; id: string } | null>(null);

// Trigger (inside row — always this exact composition):
<Button
  variant="text"
  size="sm"
  aria-label="Row actions"
  onClick={(e) => setAnchor({ el: e.currentTarget, id: row.id })}
>
  <Icon name="more-vertical" />
</Button>

// Menu (outside row loop — one instance):
<Menu
  anchorEl={anchor?.el ?? null}
  open={Boolean(anchor)}
  onClose={() => setAnchor(null)}
>
  <MenuItem onClick={() => { handleEdit(anchor!.id); setAnchor(null); }}>Edit</MenuItem>
  <MenuDivider />
  <MenuItem onClick={() => { handleDelete(anchor!.id); setAnchor(null); }}>Delete</MenuItem>
</Menu>
```

**Visual states:** No component-level visual state — the trigger is a standard Button `variant="text"`. Menu open/close state is all that exists.

**Token rules:** No dedicated token for the trigger button — it inherits from Button tokens. Menu uses its own token namespace.

**Accessibility:**
- Trigger always has `aria-label="Row actions"` (or specific: `aria-label={`Actions for ${row.name}`}`)
- Destructive actions always last, after a `MenuDivider`
- Keyboard: Menu handles arrow navigation, Escape close, typeahead — do not re-implement
- Actions column always `align="right"` and always last

**Boundaries:**
- **Component:** Button (trigger), Icon, Menu, MenuItem, MenuDivider
- **Pattern:** `anchor` state shape, single-instance mounting, `onClose` cleanup
- **Composition:** Anchor state + trigger inside row + single Menu outside row = complete pattern

**Rules:**
- Never `IconButton` — always `Button variant="text" size="sm"`
- Never one Menu per row — always one Menu for the whole table
- Trigger `onClick` always stores `e.currentTarget` (not `e.target`) as anchor element

---

## Pattern E: Loading state

**Behavior:** While data is loading, skeleton rows replace data rows. The table structure (headers, column count, toolbar) remains visible. No spinner overlay unless the load is blocking a user action.

**API shape:**
```tsx
// Consumer provides isLoading from data fetching state:
{isLoading ? (
  Array.from({ length: pageSize }).map((_, i) => (
    <TableRow key={i} hover={false}>
      {hasSelection && <TableCell padding="checkbox"><Skeleton variant="text" width={20} /></TableCell>}
      {columns.map((col) => (
        <TableCell key={col.id}>
          <Skeleton variant="text" width={col.skeletonWidth ?? '80%'} />
        </TableCell>
      ))}
      {hasActions && <TableCell align="right"><Skeleton variant="text" width={32} /></TableCell>}
    </TableRow>
  ))
) : (
  data.map(row => <DataRow key={row.id} row={row} />)
)}
```

**Visual states:**
| State | Show |
|---|---|
| `isLoading === true` | Skeleton rows (count = pageSize) |
| `!isLoading && data.length > 0` | Data rows |
| `!isLoading && data.length === 0` | Empty state |

**Token rules:** Skeleton uses its own token namespace. No table-specific loading tokens.

**Accessibility:**
- `hover={false}` on skeleton rows — not interactive
- Skeleton rows have no interactive content — no `aria-label` needed
- Consider `aria-busy="true"` on the TableBody container when loading (not yet implemented)

**Boundaries:**
- **Component:** Skeleton (variant="text"), TableRow (hover=false), TableCell
- **Pattern:** `isLoading` → row branch; skeleton count = pageSize
- **Composition:** Loading branch + empty branch + data branch = complete async surface

**Rules:**
- Always `Skeleton variant="text"` inside cells — never `variant="rectangular"` (avoids height mismatch)
- Never show skeleton rows when data exists (even stale data)
- Skeleton row count must match expected page size — prevents layout shift on data arrival

---

## Pattern F: Empty state

**Behavior:** When data is absent (never populated) or filtered to zero results, a full-width cell spanning all columns shows a contextual empty message. Two sub-types: "no data yet" (first-use) and "no results" (post-filter).

**API shape:**
```tsx
// Empty cell (always full-colSpan):
<TableRow hover={false}>
  <TableCell colSpan={COLUMN_COUNT} align="center" padding="none">
    <div style={{ padding: '48px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <Icon name="inbox" size="lg" />           // or appropriate contextual icon
      <div style={{ fontWeight: 600 }}>No events yet</div>
      <div style={{ color: 'var(--ep-semantic-color-text-secondary)', fontSize: '0.875rem' }}>
        {isFiltered ? 'No events match the active filters.' : 'Create your first event to get started.'}
      </div>
      {!isFiltered && <Button variant="contained" size="sm">Create event</Button>}
      {isFiltered && <Button variant="outlined" size="sm" onClick={clearFilters}>Clear filters</Button>}
    </div>
  </TableCell>
</TableRow>
```

**Visual states:**
| Sub-type | Trigger | Icon | CTA |
|---|---|---|---|
| First-use (no data) | `data.length === 0 && !isFiltered` | Contextual (inbox, calendar, etc.) | Create action |
| Filtered (no results) | `data.length === 0 && isFiltered` | Filter or search icon | Clear filters |
| Error | `hasError` (optional) | `alert-circle` | Retry action |

**Token rules:** Empty state content uses semantic color tokens directly (`--ep-semantic-color-text-secondary`) — not table component tokens. This is acceptable: the empty state is not a table primitive; it is page-level content rendered inside a table cell.

**Accessibility:**
- `hover={false}` on the empty row — not interactive
- `colSpan={COLUMN_COUNT}` must match the exact column count of the table (see Rule 7)
- Icon is decorative — `aria-hidden="true"` is handled by `<Icon>` internally

**Boundaries:**
- **Component:** TableCell (colSpan), Icon, Button
- **Pattern:** `isFiltered` flag drives sub-type; COLUMN_COUNT from Rule 7
- **Composition:** colSpan cell + conditionally rendered content = complete empty state

---

---

# Consistency Audit

Observations from reading all shipped components side-by-side. **Do not refactor yet** — only track.

---

## Inconsistency 1: Focus ring selector mismatch

**Components affected:** Button, TableHeaderCell SortButton (native elements) vs Checkbox, Radio, Switch, Chip, Menu, Pagination (MUI elements).

**Observation:**
- `styled('button')` and `styled(MuiButton)` — Button uses `&:focus-visible` (native CSS pseudo-class)
- All MUI-based controls use `&.Mui-focusVisible` (MUI class, set by FocusVisibleManager)

**Status:** Correct behavior — Rule 8 documents when each selector is appropriate. Not an error.

**Action needed:** Document Rule 8 (done above). No code change.

---

## Inconsistency 2: Selected state mechanism varies by component

**Components affected:** Chip, TableRow, MenuItem, Pagination.

| Component | Selected mechanism | Why |
|---|---|---|
| TableRow | `selected` prop → `epSelected` styled prop | MUI TableRow doesn't reliably manage `.Mui-selected`; manual control needed |
| Chip | `selected` prop → `ep-chip-selected` className | MUI Chip has no `.Mui-selected` support; className approach chosen |
| MenuItem | `selected` prop → `.Mui-selected` MUI class | MUI MenuItem manages this class natively and correctly |
| Pagination | n/a (page number item selection is internal to MUI) | `.Mui-selected` managed by MUI |

**Status:** Acceptable divergence — each component uses the mechanism that works for its MUI base. No universal standard is possible here.

**Action needed:** Document this observation. No code change.

---

## Inconsistency 3: `disabled` opacity strategy

**Components affected:** Button, Menu/MenuItem, Chip, Pagination.

| Component | Disabled opacity approach |
|---|---|
| Button (contained) | `TOKEN.disabledBg()` token replaces color; no explicit opacity change |
| Button (outlined/text) | `TOKEN.disabledOpacity()` applied to whole element |
| Menu/MenuItem | `opacity: 1` + dedicated `TOKEN.itemColorDisabled()` |
| Chip | `opacity: 1` + dedicated `TOKEN.disabledBg/disabledText/disabledBorder()` |
| Pagination | `opacity: 1` + dedicated `TOKEN.colorDisabled/bgDisabled()` |
| Checkbox, Radio | `color: TOKEN.disabledBorder()` — no opacity change |

**Inconsistency:** Button uses `disabledOpacity` for outlined/text variants. All others use `opacity: 1` with color tokens. The `disabledOpacity` pattern in Button means outlined/text disabled buttons become semi-transparent, while other disabled controls use opaque but muted colors.

**Impact:** Visual inconsistency at the system level. A disabled outlined Button and a disabled Chip in the same UI will have different disabled expressions.

**Action needed:** Log for future wave. Unify disabled expression in a dedicated pass. Options: (a) replace Button's `disabledOpacity` with color tokens, or (b) add `disabledOpacity` tokens to all other components. Do not resolve during Wave 3B.

---

## Inconsistency 4: Icon slot naming

**Observation:** Button uses `startSlot`/`endSlot`. Chip and MenuItem use `startIcon`/`endIcon`.

**Rule established (Rule 10 above):** This is an intentional semantic distinction, not an inconsistency to fix. `startSlot` = arbitrary content; `startIcon` = icon-only. The divergence is correct.

**Action needed:** Apply Rule 10 consistently in all future components. No retroactive change.

---

## Inconsistency 5: Toolbar font sizing is hardcoded

**Observation:** In `TableToolbar.tsx`, the title text uses `fontSize: '0.9375rem'` and `fontWeight: 600` as hardcoded values (not TOKEN references). This is because no `--ep-component-table-toolbar-font-*` tokens were defined.

**Impact:** The toolbar title font cannot be overridden by the token system.

**Action needed:** Add `toolbar-font-size` and `toolbar-font-weight` tokens to `table.json` in a future token pass. Do not implement during Wave 3B.

---

## Overlap 1: Toolbar pattern is not table-specific

**Observation:** `TableToolbar` implements a "contextual action bar with selection state" pattern. The same pattern is needed for: FilterBar selected-filter display, List selection bulk actions, Card grid multi-select.

**Current state:** The component is named `TableToolbar` and its tokens live in `--ep-component-table-toolbar-*`.

**Future opportunity:** Extract a `Toolbar` or `ActionBar` primitive in Wave 4 or 5. `TableToolbar` becomes a composition of that primitive with table-specific tokens. Do not extract yet — only one use case exists.

---

## Overlap 2: Sort and filter share "active indicator" logic

**Observation:** Sort affordance (active column indicator via icon color) and Filter affordance (active filter indicator via Chip selected state) share a behavioral pattern: "this control is active; show a visual indicator."

**Current state:** Sort uses icon color tokens. Filter chips will use `Chip selected` (className-based). These are separate mechanisms.

**Future opportunity:** When designing FilterBar (Wave 3B), ensure the active-indicator tokens follow the same semantic naming (`--ep-component-*-active-color`) so the pattern is recognizable across surfaces.

---

## Overlap 3: `pointerEvents: auto` + `cursor: not-allowed` pattern

**Observation:** Checkbox, Radio, Switch, and Button all apply `cursor: not-allowed` with `pointerEvents: auto` to disabled states. This is identical logic across 4 components.

**Current state:** Each component independently applies this in its `&.Mui-disabled` or `&:disabled` block.

**Status:** This is correct and expected. CSS cannot be shared via CSS-in-JS inheritance for `styled()` components without creating a shared style object. A utility const would be premature.

**Action needed:** None. Note that this is a deliberate repetition by design.

---

---

# Future System Mapping

Which patterns apply to each planned system.

---

## Wave 3B: FilterBar

| Pattern | How it applies |
|---|---|
| Sort affordance (A) | Not directly — filters don't sort. But `active indicator` sub-pattern applies to active filter chips. |
| Row selection (B) | Not directly — FilterBar doesn't select rows. But **Chip selected state** (active filter chip) uses the same `selected` prop pattern. |
| Toolbar selected-state (C) | **Direct reuse.** FilterBar toolbar shows active filter count and a "Clear all" action — same slot-switching pattern as TableToolbar. |
| Row actions (D) | Not applicable. |
| Loading state (E) | **Partial reuse.** Filter option dropdowns may need a loading state (async option fetch). Same `isLoading → Skeleton` rule applies. |
| Empty state (F) | **Direct reuse.** Post-filter empty state ("No results match") reuses Pattern F exactly. |

**New pattern needed for Wave 3B:** FilterChip active state — a Chip that represents an active filter with a `onDelete` affordance. The composition is Chip + selected + onDelete, but the state management pattern (which filter is active, how to clear) is new and needs to be specified.

---

## Wave 3C: DatePicker

| Pattern | How it applies |
|---|---|
| Sort affordance (A) | Not applicable. |
| Row selection (B) | **Partial.** Day selection in calendar grid mirrors row selection: `selected` prop on day cell, consumer owns selected date. |
| Toolbar selected-state (C) | Not directly — but date range picker will need a "both dates selected" vs "selecting second date" state, which mirrors the toolbar state switch. |
| Row actions (D) | Not applicable. |
| Loading state (E) | **Partial.** Calendar month navigation may need a loading state (async data). |
| Empty state (F) | Not applicable. |

---

## Wave 4: Stepper, Timeline, ConfirmDialog, TransferList

| Component | Applicable patterns |
|---|---|
| Stepper | Toolbar selected-state (step = active indicator), Loading state per step |
| Timeline | Empty state (no events), Loading state |
| ConfirmDialog | Row actions (D) as entry point — confirm before destructive action |
| TransferList | Row selection (B) fully — checkbox + selected + bulk move |

---

## Wave 5: DataGrid, CommandPalette

| Component | Applicable patterns |
|---|---|
| DataGrid | All six patterns — sort, selection, toolbar, row actions, loading, empty. DataGrid is a DataTable superset. |
| CommandPalette | Row actions (D) as the core — each result is an action. Loading (E) for async search. Empty (F) for no results. |

---

---

# Missing Abstractions

Identified gaps. **Not to be implemented until explicitly scoped.**

---

## MA-1: FilterChip composition pattern

**Gap:** Chip has `selected` + `onDelete` props, but no formalized pattern for "active filter chip" behavior — how the selection state persists, how clearing one chip vs all chips works, and how the chip communicates back to a filter state object.

**Needed by:** Wave 3B (FilterBar).

**Shape hint:**
```ts
// What the pattern will likely look like:
interface ActiveFilter {
  id: string;
  label: string;
  value: FilterValue;
}
// FilterBar owns: ActiveFilter[]
// Each chip: selected={true} onDelete={() => removeFilter(f.id)}
```

---

## MA-2: Debounced input pattern

**Gap:** No pattern for a `TextField` (or any input) with debounced `onChange`. Needed for search-as-you-type, filter-as-you-type, and command search. No shared utility or hook exists.

**Needed by:** Wave 3B (SearchBar), Wave 5 (CommandPalette).

---

## MA-3: Async option loading for Select/Autocomplete

**Gap:** Neither Select nor Autocomplete has a formalized loading state for async option fetching. Currently, consumers would need to pass `options={[]}` and render a Skeleton themselves, but this is not standardized.

**Needed by:** Wave 3B (FilterBar with server-side filter options).

---

## MA-4: Formal `aria-busy` loading contract

**Gap:** Rule 6 defines loading state sequencing (Skeleton vs data vs empty) but does not define the `aria-busy` contract. Screen readers do not automatically know that skeleton content is loading content. `aria-busy="true"` on the container while loading would address this.

**Current state:** Not implemented on any component. `aria-live="polite"` exists on TableToolbar for count changes, but not on data containers during load.

**Action when scoped:** Add `aria-busy` to the loading container rule in Rule 6.

---

## MA-5: Generic Toolbar / ActionBar primitive

**Gap:** `TableToolbar` implements a general "contextual toolbar with selection state" pattern but is named and tokened as table-specific. When the same pattern is needed for a List, Card grid, or FilterBar, the implementation will diverge.

**Recommended:** Do not extract until a second non-table use case exists. When Wave 4 TransferList or Wave 5 DataGrid needs this, extract a generic `Toolbar` primitive and make `TableToolbar` a thin composition on top.

---

## MA-6: Event signature normalization contract — RESOLVED

**Verified during Wave 3B extraction.** Checkbox, Radio, Switch all expose `ChangeEventHandler<HTMLInputElement>` — the full React event. This is correct (Category A — form controls, see Rule 9). Not a violation.

Pagination correctly exposes `(page: number) => void` (Category B). No changes needed across any shipped component.


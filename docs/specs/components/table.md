# Table

**Package:** `@eventpipe/ui` — `packages/ui/src/Table/`
**Wave:** 3A
**MUI Base:** `MuiTableContainer`, `MuiTable`, `MuiTableHead`, `MuiTableBody`, `MuiTableRow`, `MuiTableCell`

---

## Components in this family

| Component | MUI base | Exported |
|---|---|---|
| `Table` | `MuiTableContainer` + `MuiTable` | ✓ |
| `TableHead` | `MuiTableHead` | ✓ |
| `TableBody` | `MuiTableBody` | ✓ |
| `TableRow` | `MuiTableRow` | ✓ |
| `TableCell` | `MuiTableCell` | ✓ |
| `TableHeaderCell` | `MuiTableCell` | ✓ |
| `TableToolbar` | Custom `div` | ✓ |

All seven ship from `packages/ui/src/Table/` with one token file: `packages/tokens/src/component/table.json`.

---

## TypeScript interfaces

```ts
// ─── Size context ────────────────────────────────────────────────────────────
type TableSize = 'sm' | 'md' | 'lg';   // EpSize3

// ─── Table (root) ────────────────────────────────────────────────────────────
interface TableProps {
  /** Cascades via React context to all TableCell and TableHeaderCell children.
   *  Individual cells may override with their own size prop.
   *  @default 'md' */
  size?: TableSize;
  /** Applies position:sticky + top:0 + z-index:1 to TableHead cells.
   *  Structural behavior only — not tokenized. */
  stickyHeader?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
  children: ReactNode;
}

// ─── TableHead ───────────────────────────────────────────────────────────────
interface TableHeadProps {
  className?: string;
  sx?: SxProps<Theme>;
  children: ReactNode;
}

// ─── TableBody ───────────────────────────────────────────────────────────────
interface TableBodyProps {
  className?: string;
  sx?: SxProps<Theme>;
  children: ReactNode;
}

// ─── TableRow ────────────────────────────────────────────────────────────────
interface TableRowProps {
  /** When true, applies selected background token. Consumer manages state. */
  selected?: boolean;
  /** When false, disables hover background. Default true. */
  hover?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
  children: ReactNode;
}

// ─── TableCell ───────────────────────────────────────────────────────────────
interface TableCellProps {
  /** Overrides Table context size for this cell only. */
  size?: TableSize;
  align?: 'left' | 'center' | 'right';   // default 'left'
  /** 'checkbox' applies reduced padding for selection column.
   *  'none' removes all padding (custom content cells). */
  padding?: 'normal' | 'checkbox' | 'none';
  colSpan?: number;
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

// ─── TableHeaderCell ─────────────────────────────────────────────────────────
interface TableHeaderCellProps {
  /** Overrides Table context size for this header only. */
  size?: TableSize;
  align?: 'left' | 'center' | 'right';
  padding?: 'normal' | 'checkbox' | 'none';
  colSpan?: number;
  /** undefined = column is not sortable (no sort icon rendered)
   *  false = column is sortable but not currently the active sort
   *  'asc' | 'desc' = column is the active sort with direction */
  sortDirection?: 'asc' | 'desc' | false;
  /** Called when the header is clicked. If undefined, column is not interactive. */
  onSort?: () => void;
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}
// Note: scope="col" is fixed internally — not exposed as a prop.
// Note: aria-sort is derived from sortDirection automatically.

// ─── TableToolbar ────────────────────────────────────────────────────────────
interface TableToolbarProps {
  /** Shown in the left slot when selectionCount is 0 or undefined. */
  title?: ReactNode;
  /** When > 0, toolbar switches to selected-background token and shows selectionTitle. */
  selectionCount?: number;
  /** Shown in left slot when selectionCount > 0. Consumer provides for i18n control.
   *  Example: `{selectionCount} rows selected` */
  selectionTitle?: ReactNode;
  /** Right slot: shown when selectionCount is 0 or undefined. Typically Buttons. */
  actions?: ReactNode;
  /** Right slot: shown when selectionCount > 0. Typically bulk-action Buttons. */
  selectionActions?: ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}
```

---

## Size cascade

`Table` provides a `TableSizeContext` (React context). Default value: `'md'`.

```ts
const TableSizeContext = React.createContext<TableSize>('md');
```

`TableCell` and `TableHeaderCell` read this context via `useContext(TableSizeContext)`. If the cell has its own `size` prop, it overrides the context value.

This avoids prop drilling through `TableHead → TableRow → TableCell`.

---

## Sort affordance

**Rule:** Sort state is always consumer-managed. Components are purely presentational.

`TableHeaderCell` renders a sort icon only when `sortDirection !== undefined`:

| `sortDirection` | Icon rendered | `aria-sort` |
|---|---|---|
| `undefined` | None | None |
| `false` | `<Icon name="sort" />` (muted color) | `"none"` |
| `'asc'` | `<Icon name="chevron-up" />` (active color) | `"ascending"` |
| `'desc'` | `<Icon name="chevron-down" />` (active color) | `"descending"` |

When `onSort` is provided, the header cell renders as a `<button>` via MUI's `TableSortLabel`-less pattern (see deviation below). When `onSort` is undefined, no interactive element is rendered.

---

## Row action pattern

- Overflow trigger: `Button variant="text" size="sm"` with `Icon name="more-vertical"`, `aria-label="Row actions"`
- Placed in the last `TableCell` with `padding="none"` or `padding="checkbox"`
- `Menu` anchored to the button element (standard Menu pattern)
- The `Menu` is not mounted inside `TableRow` — it renders in a Portal (standard MUI behavior)

---

## Selectable rows

- `TableRow selected={boolean}` applies `var(--ep-component-table-row-background-selected)`
- `Checkbox` placed in a `TableCell padding="checkbox"` in the first column
- `Checkbox checked` state is consumer-managed — `TableRow` does not wire it automatically
- "Select all" checkbox lives in a `TableHeaderCell padding="checkbox"` in the header row
- Selection count passed to `TableToolbar selectionCount={n}`

---

## Sticky header

```tsx
<Table stickyHeader>
  <TableHead>...</TableHead>  {/* cells receive position:sticky; top:0; z-index:1 */}
</Table>
```

Structural rule: sticky header uses inline style (not a CSS var). Never tokenize z-index or sticky positioning.

---

## Loading state

Replace data rows with `Skeleton` rows:

```tsx
<TableBody>
  {isLoading
    ? Array.from({ length: 5 }).map((_, i) => (
        <TableRow key={i}>
          <TableCell colSpan={columnCount}>
            <Skeleton variant="text" />
          </TableCell>
        </TableRow>
      ))
    : rows.map(row => <DataRow key={row.id} row={row} />)
  }
</TableBody>
```

---

## Empty state

Use the EmptyStates pattern inside a full-width cell:

```tsx
<TableBody>
  {rows.length === 0 && !isLoading && (
    <TableRow>
      <TableCell colSpan={columnCount} padding="none">
        <EmptyStateComposition ... />
      </TableCell>
    </TableRow>
  )}
</TableBody>
```

---

## Accessibility

- `TableHead` cells: `scope="col"` (fixed internally in `TableHeaderCell`)
- Sort state: `aria-sort="ascending" | "descending" | "none"` derived from `sortDirection`
- Sortable header as interactive button: `role="button"` via `component="button"` on the cell wrapper
- Selection checkbox column: `aria-label="Select row"` on each `Checkbox`; `aria-label="Select all rows"` on the header checkbox
- `TableToolbar` selection count: announced via `aria-live="polite"` region

---

## Deviations

| Deviation | Reason |
|---|---|
| No `MuiTableSortLabel` used | `TableSortLabel` imports `ArrowDownwardIcon` from `@mui/icons-material` directly, violating the icon system contract. Sort UI implemented directly in `TableHeaderCell` using `Icon`. |
| `scope="col"` fixed internally in `TableHeaderCell` | Prevents misuse. `scope` is not a design decision — it is a structural accessibility requirement for column headers. |

---

## Token file

`packages/tokens/src/component/table.json` — see token spec below.
~35 tokens covering: container, header, row states, cell padding (3 sizes), toolbar, focus ring.

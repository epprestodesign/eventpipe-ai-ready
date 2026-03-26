# DataTable patterns

**Wave:** 3A
**Related component spec:** `docs/specs/components/table.md`
**Related system rules:** `docs/contracts/product-system-rules.md`

These patterns document how to compose Table primitives for common product scenarios.
No new components are produced by these patterns — they are assembly guides only.

---

## Pattern 1: Selectable rows

**Primitives used:** `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell`, `TableHeaderCell`, `TableToolbar`, `Checkbox`

```tsx
const [selected, setSelected] = React.useState<Set<string>>(new Set());
const allSelected = selected.size === rows.length && rows.length > 0;
const someSelected = selected.size > 0 && selected.size < rows.length;

const toggleAll = () => {
  setSelected(allSelected ? new Set() : new Set(rows.map(r => r.id)));
};
const toggleRow = (id: string) => {
  setSelected(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
};

<TableToolbar
  title="Events"
  selectionCount={selected.size}
  selectionTitle={`${selected.size} selected`}
  actions={<Button variant="outlined" size="sm">Export</Button>}
  selectionActions={<Button variant="outlined" size="sm" color="error">Delete</Button>}
/>

<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell padding="checkbox">
        <Checkbox
          checked={allSelected}
          indeterminate={someSelected}
          onChange={toggleAll}
          aria-label="Select all rows"
          size="sm"
        />
      </TableHeaderCell>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Status</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map(row => (
      <TableRow key={row.id} selected={selected.has(row.id)}>
        <TableCell padding="checkbox">
          <Checkbox
            checked={selected.has(row.id)}
            onChange={() => toggleRow(row.id)}
            aria-label={`Select ${row.name}`}
            size="sm"
          />
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.status}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

**Rules:**
- Selection state always lives in the consumer — never inside table primitives
- `indeterminate` on the header checkbox when some (not all) rows are selected
- `aria-label` on every selection Checkbox — the label must name the row
- Toolbar receives `selectionCount` and `selectionActions` for bulk actions

---

## Pattern 2: Sortable headers

**Primitives used:** `TableHeaderCell` with `sortDirection` + `onSort`

```tsx
type SortField = 'name' | 'date' | 'status';
type SortDirection = 'asc' | 'desc';

const [sortField, setSortField] = React.useState<SortField>('name');
const [sortDir, setSortDir] = React.useState<SortDirection>('asc');

const handleSort = (field: SortField) => {
  if (sortField === field) {
    setSortDir(d => d === 'asc' ? 'desc' : 'asc');
  } else {
    setSortField(field);
    setSortDir('asc');
  }
};

// sortDirectionFor: returns 'asc' | 'desc' for active field, false for sortable-but-inactive
const sortDirectionFor = (field: SortField) =>
  sortField === field ? sortDir : false;

<TableHeaderCell
  sortDirection={sortDirectionFor('name')}
  onSort={() => handleSort('name')}
>
  Name
</TableHeaderCell>
<TableHeaderCell
  sortDirection={sortDirectionFor('date')}
  onSort={() => handleSort('date')}
>
  Date
</TableHeaderCell>
// Non-sortable column — no sortDirection or onSort props:
<TableHeaderCell>Actions</TableHeaderCell>
```

**Rules:**
- `sortDirection={false}` means "sortable, but not the active sort column" — icon renders muted
- `sortDirection={undefined}` (prop omitted) means "not sortable" — no icon rendered at all
- `onSort` must toggle direction when the active column is clicked again
- Sort icon uses `Icon name="sort"` (neutral), `chevron-up` (asc), `chevron-down` (desc)
- `aria-sort` is set automatically from `sortDirection`

---

## Pattern 3: Row actions

**Primitives used:** `TableCell`, `Button`, `Menu`, `MenuItem`

```tsx
const [anchor, setAnchor] = React.useState<{ el: HTMLElement; rowId: string } | null>(null);

<TableCell padding="none" align="right">
  <Button
    variant="text"
    size="sm"
    aria-label="Row actions"
    onClick={(e) => setAnchor({ el: e.currentTarget, rowId: row.id })}
  >
    <Icon name="more-vertical" />
  </Button>
</TableCell>

<Menu
  anchorEl={anchor?.el ?? null}
  open={anchor?.rowId === row.id}
  onClose={() => setAnchor(null)}
>
  <MenuItem onClick={() => { handleEdit(row.id); setAnchor(null); }}>Edit</MenuItem>
  <MenuItem onClick={() => { handleDuplicate(row.id); setAnchor(null); }}>Duplicate</MenuItem>
  <MenuDivider />
  <MenuItem onClick={() => { handleDelete(row.id); setAnchor(null); }}>Delete</MenuItem>
</Menu>
```

**Rules:**
- One Menu instance per table (controlled by `rowId` in anchor state) — not one per row
- Actions column is the last column, right-aligned
- Destructive action goes last, after a `MenuDivider`
- Button uses `variant="text" size="sm"` to minimize visual weight inside a cell
- `aria-label="Row actions"` on the trigger button

---

## Pattern 4: Loading state

**Primitives used:** `TableBody`, `TableRow`, `TableCell`, `Skeleton`

```tsx
const SKELETON_ROW_COUNT = 5;

<TableBody>
  {isLoading
    ? Array.from({ length: SKELETON_ROW_COUNT }).map((_, i) => (
        <TableRow key={`skeleton-${i}`}>
          {columns.map((col) => (
            <TableCell key={col.key}>
              <Skeleton variant="text" width={col.skeletonWidth ?? '80%'} />
            </TableCell>
          ))}
        </TableRow>
      ))
    : rows.map(row => <YourDataRow key={row.id} row={row} />)
  }
</TableBody>
```

**Rules:**
- Render the same column count in skeleton rows as in data rows — preserves layout
- Use `Skeleton variant="text"` inside cells, not `variant="rectangular"` (too tall)
- Skeleton row count should match the expected page size (typically 10–25)
- Do not show an empty state during loading — only show it after loading resolves with no data

---

## Pattern 5: Empty state

**Primitives used:** `TableBody`, `TableRow`, `TableCell`; EmptyStates pattern

```tsx
<TableBody>
  {!isLoading && rows.length === 0 && (
    <TableRow>
      <TableCell colSpan={totalColumnCount} padding="none">
        <div style={{ padding: '48px 24px', textAlign: 'center' }}>
          {/* Use EmptyStates pattern — see Patterns/Empty states */}
          <Typography variant="h6">No events yet</Typography>
          <Typography variant="body2" color="text.secondary">
            Create your first event to get started.
          </Typography>
          <Button variant="contained" style={{ marginTop: 16 }}>
            Create event
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )}
</TableBody>
```

**Rules:**
- `colSpan` must equal the total column count including checkbox and actions columns
- `padding="none"` on the cell — the empty state owns its own internal spacing
- Render only when `!isLoading && rows.length === 0` — never during load
- Empty state content follows the EmptyStates pattern guidelines

---

## Pattern 6: Sticky header

```tsx
<Table stickyHeader>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
      ...
    </TableRow>
  </TableHead>
  <TableBody>
    ...
  </TableBody>
</Table>
```

The `Table` component must have a constrained height for sticky to take effect:

```tsx
// Wrap in a height-constrained container:
<div style={{ maxHeight: 600, overflow: 'auto' }}>
  <Table stickyHeader>...</Table>
</div>
```

**Rules:**
- `stickyHeader` applies `position:sticky; top:0; z-index:1` to header cells — structural, not tokenized
- The height constraint lives on the consumer container, not on `Table`
- Do not apply sticky header to tables that render all rows (no scroll needed)

---

## Pagination integration

Use the existing `Pagination` component below the table:

```tsx
<Table>...</Table>
<div style={{ display: 'flex', justifyContent: 'flex-end', padding: '12px 0' }}>
  <Pagination
    count={totalPages}
    page={currentPage}
    onChange={(_, page) => setCurrentPage(page)}
    variant="outlined"
    shape="rounded"
  />
</div>
```

**Rules:**
- `Pagination` is always placed outside and below the `Table`
- Right-aligned by default for data tables; centered for list/search results
- Always pair with a visible page size indicator (text or Select)
- `count` = total pages (not total items); `page` is 1-indexed

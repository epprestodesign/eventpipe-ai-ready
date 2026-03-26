import { useState, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';
import type { MouseEvent } from 'react';
import type { DataGridProps } from './DataGrid.types';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  TableToolbar,
} from '../Table';
import { Checkbox } from '../Checkbox';
import { Menu, MenuItem, MenuDivider } from '../Menu';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Pagination } from '../Pagination';

// ─── Token helpers ─────────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-data-grid-* custom properties.
// Row / cell / header / toolbar styling delegates to the Table token namespace.

const TOKEN = {
  // Container
  containerBg:     () => `var(--ep-component-data-grid-container-background)`,
  containerBorder: () => `var(--ep-component-data-grid-container-border-color)`,
  containerRadius: () => `var(--ep-component-data-grid-container-border-radius)`,
  // Footer (pagination row)
  footerPy:        () => `var(--ep-component-data-grid-footer-padding-y)`,
  footerPx:        () => `var(--ep-component-data-grid-footer-padding-x)`,
  footerBorder:    () => `var(--ep-component-data-grid-footer-border-color)`,
  // Empty state (Pattern F)
  emptyPy:         () => `var(--ep-component-data-grid-empty-padding-y)`,
  emptyColor:      () => `var(--ep-component-data-grid-empty-color)`,
  emptyFontSize:   () => `var(--ep-component-data-grid-empty-font-size)`,
  // Actions column
  actionsColWidth: () => `var(--ep-component-data-grid-actions-column-width)`,
} as const;

// ─── Constants ─────────────────────────────────────────────────────────────────

const DEFAULT_PAGE_SIZE = 10;
const SKELETON_ROW_COUNT = 5;

// Cycling widths for skeleton cell placeholders (Pattern E)
const SKELETON_WIDTHS = [80, 120, 100, 60, 90, 110, 70, 95] as const;

// ─── DataGrid ─────────────────────────────────────────────────────────────────

/**
 * DataGrid — production-ready data table built by composing existing systems.
 *
 * Composes: Table, TableToolbar, FilterBar slot, Pagination, Checkbox, Menu.
 * Patterns: B (selection), C (bulk toolbar state), E (loading), F (empty).
 *
 * Sorting is client-side by default. Pagination is client-side by default;
 * pass `rowCount` for server-side total when you manage your own slicing.
 *
 * Generic over row type T.
 *
 * ```tsx
 * <DataGrid
 *   rows={events}
 *   columns={[
 *     { id: 'name',  header: 'Name',  accessor: r => r.name },
 *     { id: 'date',  header: 'Date',  accessor: r => r.date },
 *   ]}
 *   getRowId={r => r.id}
 *   selectable
 *   sortable
 *   pagination
 *   pageSize={20}
 * />
 * ```
 */
export function DataGrid<T = Record<string, unknown>>({
  rows,
  columns,
  getRowId,
  size = 'md',
  selectable = false,
  onSelectionChange,
  sortable = false,
  pagination = false,
  pageSize: pageSizeProp,
  page: pageProp,
  rowCount,
  onPageChange,
  loading = false,
  title,
  toolbarActions,
  filterBar,
  rowActions,
  emptyMessage = 'No data',
  className,
  sx,
}: DataGridProps<T>): JSX.Element {
  const pageSize = pageSizeProp ?? DEFAULT_PAGE_SIZE;

  // ── Internal state ─────────────────────────────────────────────────────────

  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [internalPage, setInternalPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [menuAnchor, setMenuAnchor] = useState<Element | null>(null);
  const [menuRowId, setMenuRowId] = useState<string | null>(null);

  // ── Derived values ─────────────────────────────────────────────────────────

  const currentPage = pageProp ?? internalPage;

  const resolveId = useCallback(
    (row: T, index: number): string =>
      getRowId ? getRowId(row, index) : String(index),
    [getRowId]
  );

  // ── Sort ───────────────────────────────────────────────────────────────────

  const handleSort = (colId: string) => {
    if (sortCol === colId) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortCol(colId);
      setSortDir('asc');
    }
  };

  const sortedRows = useMemo(() => {
    if (!sortCol) return rows;
    const col = columns.find(c => c.id === sortCol);
    if (!col) return rows;
    return [...rows].sort((a, b) => {
      const av = col.accessor(a);
      const bv = col.accessor(b);
      let cmp = 0;
      if (av == null && bv == null) cmp = 0;
      else if (av == null) cmp = -1;
      else if (bv == null) cmp = 1;
      else if (typeof av === 'number' && typeof bv === 'number') cmp = av - bv;
      else cmp = String(av).localeCompare(String(bv));
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [rows, columns, sortCol, sortDir]);

  // ── Pagination ─────────────────────────────────────────────────────────────

  const totalRows = rowCount ?? rows.length;
  const pageCount = Math.max(1, Math.ceil(totalRows / pageSize));

  // Offset for resolving global row index when paginating
  const pageOffset = pagination ? (currentPage - 1) * pageSize : 0;

  const displayedRows = useMemo(() => {
    if (!pagination) return sortedRows;
    const start = pageOffset;
    return sortedRows.slice(start, start + pageSize);
  }, [pagination, sortedRows, pageOffset, pageSize]);

  const handlePageChange = useCallback(
    (p: number) => {
      if (pageProp === undefined) setInternalPage(p);
      onPageChange?.(p);
    },
    [pageProp, onPageChange]
  );

  // ── Selection ──────────────────────────────────────────────────────────────

  const pageRowIds = useMemo(
    () => displayedRows.map((r, i) => resolveId(r, pageOffset + i)),
    [displayedRows, resolveId, pageOffset]
  );

  const isAllSelected =
    pageRowIds.length > 0 && pageRowIds.every(id => selectedIds.has(id));
  const isSomeSelected = pageRowIds.some(id => selectedIds.has(id));

  const updateSelection = useCallback(
    (next: Set<string>) => {
      setSelectedIds(next);
      onSelectionChange?.(next);
    },
    [onSelectionChange]
  );

  const handleSelectAll = () => {
    const next = new Set(selectedIds);
    if (isAllSelected) {
      pageRowIds.forEach(id => next.delete(id));
    } else {
      pageRowIds.forEach(id => next.add(id));
    }
    updateSelection(next);
  };

  const handleSelectRow = (rowId: string) => {
    const next = new Set(selectedIds);
    if (next.has(rowId)) next.delete(rowId);
    else next.add(rowId);
    updateSelection(next);
  };

  // ── Row actions ────────────────────────────────────────────────────────────

  // Find the row the open menu belongs to — T | null
  const menuRow: T | null = useMemo(() => {
    if (!menuRowId) return null;
    return (
      displayedRows.find(
        (r, i) => resolveId(r, pageOffset + i) === menuRowId
      ) ?? null
    );
  }, [menuRowId, displayedRows, resolveId, pageOffset]);

  const handleOpenMenu = (e: MouseEvent<HTMLButtonElement>, rowId: string) => {
    setMenuAnchor(e.currentTarget);
    setMenuRowId(rowId);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
    setMenuRowId(null);
  };

  const hasRowActions = rowActions != null && rowActions.length > 0;

  // Partition row actions: non-destructive first, destructive last (product-system rule)
  const [normalActions, destructiveActions] = useMemo(() => {
    if (!rowActions) return [[], []];
    return [
      rowActions.filter(a => !a.destructive),
      rowActions.filter(a => a.destructive),
    ] as const;
  }, [rowActions]);

  // ── Column count for empty/loading colSpan ─────────────────────────────────

  const colCount =
    columns.length + (selectable ? 1 : 0) + (hasRowActions ? 1 : 0);

  // ── Toolbar visibility ─────────────────────────────────────────────────────
  // Show toolbar when any of: title, toolbarActions, or selectable are present.

  const showToolbar = Boolean(title ?? toolbarActions ?? selectable);

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <Box
      className={className}
      sx={sx}
      style={{
        backgroundColor: TOKEN.containerBg(),
        border:          `1px solid ${TOKEN.containerBorder()}`,
        borderRadius:    TOKEN.containerRadius(),
        overflow:        'hidden',
      }}
    >
      {/* ── FilterBar slot ─────────────────────────────────────────────────── */}
      {filterBar && (
        <Box style={{
          borderBottom: `1px solid ${TOKEN.containerBorder()}`,
          paddingLeft:  TOKEN.footerPx(),
          paddingRight: TOKEN.footerPx(),
        }}>
          {filterBar}
        </Box>
      )}

      {/* ── TableToolbar — Pattern C: state switches on selectionCount ────── */}
      {showToolbar && (
        <TableToolbar
          title={title}
          selectionCount={selectable ? selectedIds.size : 0}
          selectionTitle={`${selectedIds.size} selected`}
          actions={toolbarActions}
          selectionActions={
            <Button
              variant="text"
              size="sm"
              onClick={() => updateSelection(new Set())}
            >
              Clear selection
            </Button>
          }
        />
      )}

      {/* ── Table ──────────────────────────────────────────────────────────── */}
      <Table size={size}>
        <TableHead>
          <TableRow>
            {/* Select-all checkbox header */}
            {selectable && (
              <TableHeaderCell padding="checkbox">
                <Checkbox
                  checked={isAllSelected}
                  indeterminate={isSomeSelected && !isAllSelected}
                  onChange={() => handleSelectAll()}
                  aria-label="Select all rows on this page"
                />
              </TableHeaderCell>
            )}

            {/* Column headers */}
            {columns.map(col => {
              const colSortable = sortable && col.sortable !== false;
              const direction = colSortable
                ? sortCol === col.id
                  ? sortDir
                  : false
                : undefined;
              return (
                <TableHeaderCell
                  key={col.id}
                  align={col.align}
                  sortDirection={direction}
                  onSort={colSortable ? () => handleSort(col.id) : undefined}
                  sx={col.width ? { width: col.width } : undefined}
                >
                  {col.header}
                </TableHeaderCell>
              );
            })}

            {/* Row actions column header — fixed width, no label */}
            {hasRowActions && (
              <TableHeaderCell
                align="right"
                sx={{ width: TOKEN.actionsColWidth() }}
              />
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {/* ── Loading state (Pattern E) — skeleton rows ─────────────────── */}
          {loading &&
            Array.from({ length: SKELETON_ROW_COUNT }, (_, i) => (
              <TableRow key={`skeleton-${i}`}>
                {selectable && (
                  <TableCell padding="checkbox">
                    <MuiSkeleton variant="rectangular" width={16} height={16} />
                  </TableCell>
                )}
                {columns.map((col, j) => (
                  <TableCell key={col.id}>
                    <MuiSkeleton
                      variant="text"
                      width={
                        SKELETON_WIDTHS[
                          (i * columns.length + j) % SKELETON_WIDTHS.length
                        ]
                      }
                    />
                  </TableCell>
                ))}
                {hasRowActions && <TableCell />}
              </TableRow>
            ))}

          {/* ── Empty state (Pattern F) ────────────────────────────────────── */}
          {!loading && displayedRows.length === 0 && (
            <TableRow>
              <TableCell colSpan={colCount} align="center">
                <div
                  style={{
                    padding:        `${TOKEN.emptyPy()} 0`,
                    color:          TOKEN.emptyColor(),
                    fontSize:       TOKEN.emptyFontSize(),
                    display:        'flex',
                    flexDirection:  'column',
                    alignItems:     'center',
                    gap:            '8px',
                  }}
                >
                  <Icon name="search" />
                  {emptyMessage}
                </div>
              </TableCell>
            </TableRow>
          )}

          {/* ── Data rows ─────────────────────────────────────────────────── */}
          {!loading &&
            displayedRows.map((row, i) => {
              const rowId = resolveId(row, pageOffset + i);
              const isSelected = selectedIds.has(rowId);

              return (
                <TableRow key={rowId} selected={isSelected} hover>
                  {/* Row checkbox — Pattern B: selection state is consumer-managed */}
                  {selectable && (
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={() => handleSelectRow(rowId)}
                        aria-label={`Select row ${rowId}`}
                      />
                    </TableCell>
                  )}

                  {/* Data cells */}
                  {columns.map(col => (
                    <TableCell key={col.id} align={col.align}>
                      {col.renderCell
                        ? col.renderCell(row)
                        : String(col.accessor(row) ?? '')}
                    </TableCell>
                  ))}

                  {/* Row actions trigger — product-system rule: Button text sm + more-vertical icon */}
                  {hasRowActions && (
                    <TableCell align="right" padding="none">
                      <Button
                        variant="text"
                        size="sm"
                        aria-label="Row actions"
                        onClick={e => handleOpenMenu(e, rowId)}
                      >
                        <Icon name="more-vertical" />
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>

      {/* ── Pagination footer ──────────────────────────────────────────────── */}
      {pagination && pageCount > 1 && (
        <Box
          style={{
            display:        'flex',
            justifyContent: 'flex-end',
            alignItems:     'center',
            padding:        `${TOKEN.footerPy()} ${TOKEN.footerPx()}`,
            borderTop:      `1px solid ${TOKEN.footerBorder()}`,
          }}
        >
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      )}

      {/* ── Row actions Menu — one instance, anchored by row trigger ────────
           Product-system rule: one Menu per list, anchored by row ID.
           Non-destructive actions first; destructive after MenuDivider.    */}
      {hasRowActions && (
        <Menu
          open={Boolean(menuAnchor)}
          anchorEl={menuAnchor}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {normalActions.map(action => (
            <MenuItem
              key={action.id}
              startIcon={action.icon ? <Icon name={action.icon} /> : undefined}
              disabled={
                menuRow != null
                  ? typeof action.disabled === 'function'
                    ? action.disabled(menuRow)
                    : (action.disabled ?? false)
                  : false
              }
              onClick={() => {
                if (menuRow != null) action.onClick(menuRow);
                handleCloseMenu();
              }}
            >
              {action.label}
            </MenuItem>
          ))}

          {destructiveActions.length > 0 && (
            <>
              <MenuDivider />
              {destructiveActions.map(action => (
                <MenuItem
                  key={action.id}
                  startIcon={action.icon ? <Icon name={action.icon} /> : undefined}
                  disabled={
                    menuRow != null
                      ? typeof action.disabled === 'function'
                        ? action.disabled(menuRow)
                        : (action.disabled ?? false)
                      : false
                  }
                  onClick={() => {
                    if (menuRow != null) action.onClick(menuRow);
                    handleCloseMenu();
                  }}
                >
                  {action.label}
                </MenuItem>
              ))}
            </>
          )}
        </Menu>
      )}
    </Box>
  );
}

DataGrid.displayName = 'DataGrid';

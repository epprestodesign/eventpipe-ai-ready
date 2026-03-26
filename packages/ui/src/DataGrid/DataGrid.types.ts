import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { IconName } from '../icons';
import type { TableSize } from '../Table';

// ─── ColumnDef ────────────────────────────────────────────────────────────────

/**
 * Definition for a single DataGrid column.
 * Generic over the row type T.
 */
export interface ColumnDef<T = Record<string, unknown>> {
  /** Unique identifier — used as React key and sort key. */
  id: string;
  /** Column header label. */
  header: string;
  /** Extracts the raw cell value from a row for rendering and sorting. */
  accessor: (row: T) => unknown;
  /**
   * Whether this column is sortable.
   * Requires `sortable` to be enabled on the DataGrid.
   * @default true (when grid-level sortable is on)
   */
  sortable?: boolean;
  /**
   * Suggested column width in pixels. Applied as a CSS width hint.
   * Not enforced — table-layout: auto distributes remaining space.
   */
  width?: number;
  /** @default 'left' */
  align?: 'left' | 'center' | 'right';
  /**
   * Custom cell renderer. When provided, replaces the default String(accessor(row)) output.
   * Receives the full row object.
   */
  renderCell?: (row: T) => ReactNode;
}

// ─── RowAction ────────────────────────────────────────────────────────────────

/**
 * A single action item in the per-row action Menu.
 * Destructive actions render below a MenuDivider and should be listed last.
 */
export interface RowAction<T = Record<string, unknown>> {
  /** Unique identifier. */
  id: string;
  /** Label shown in the menu item. */
  label: string;
  /** Optional leading icon from the icon registry. */
  icon?: IconName;
  /** Called when the action is selected. Receives the row the trigger belongs to. */
  onClick: (row: T) => void;
  /**
   * Whether this item is disabled for the given row.
   * Pass a boolean for static state or a function for row-conditional state.
   */
  disabled?: boolean | ((row: T) => boolean);
  /**
   * When true, renders after a MenuDivider.
   * Intended for destructive actions (delete, archive, etc.).
   * @default false
   */
  destructive?: boolean;
}

// ─── DataGridProps ─────────────────────────────────────────────────────────────

export interface DataGridProps<T = Record<string, unknown>> {
  // ── Data ───────────────────────────────────────────────────────────────────

  /** Row data array. */
  rows: T[];
  /** Column definitions. */
  columns: ColumnDef<T>[];
  /**
   * Derives a stable string ID from a row.
   * Falls back to row index when omitted.
   */
  getRowId?: (row: T, index: number) => string;

  // ── Size ───────────────────────────────────────────────────────────────────

  /**
   * Size scale passed to the underlying Table.
   * Controls cell padding and font size.
   * @default 'md'
   */
  size?: TableSize;

  // ── Selection ──────────────────────────────────────────────────────────────

  /**
   * Enables per-row checkboxes and a select-all header checkbox.
   * @default false
   */
  selectable?: boolean;
  /**
   * Called whenever the selected row ID set changes.
   * The Set contains the IDs of all currently selected rows across all pages.
   */
  onSelectionChange?: (selected: Set<string>) => void;

  // ── Sorting ────────────────────────────────────────────────────────────────

  /**
   * Enables column sorting. Client-side sort applied to the rows array.
   * Individual columns can opt out via `ColumnDef.sortable = false`.
   * @default false
   */
  sortable?: boolean;

  // ── Pagination ─────────────────────────────────────────────────────────────

  /**
   * Enables pagination controls below the table.
   * DataGrid handles client-side slicing when rows.length > pageSize.
   * @default false
   */
  pagination?: boolean;
  /**
   * Number of rows per page.
   * @default 10
   */
  pageSize?: number;
  /**
   * Current page (1-indexed). Controlled.
   * Omit to use uncontrolled internal state.
   */
  page?: number;
  /**
   * Total row count for server-side pagination.
   * Defaults to rows.length when omitted.
   */
  rowCount?: number;
  /** Called when the user navigates to a new page. Receives 1-indexed page number. */
  onPageChange?: (page: number) => void;

  // ── States ─────────────────────────────────────────────────────────────────

  /**
   * Shows skeleton rows instead of data rows. Pattern E.
   * @default false
   */
  loading?: boolean;

  // ── Toolbar ────────────────────────────────────────────────────────────────

  /**
   * Title shown in the left slot of the toolbar in default (non-selected) state.
   * When omitted and toolbarActions / selectable are also omitted, toolbar is hidden.
   */
  title?: ReactNode;
  /** Actions shown in the right slot of the toolbar in default state. */
  toolbarActions?: ReactNode;
  /**
   * Optional FilterBar slot rendered above the Table.
   * Consumer provides a configured <FilterBar /> — DataGrid does not manage filter state.
   */
  filterBar?: ReactNode;

  // ── Row actions ────────────────────────────────────────────────────────────

  /**
   * Per-row action menu items. Renders a `⋮` trigger in a fixed-width right column.
   * One Menu instance is shared across all rows (product-system rule).
   */
  rowActions?: RowAction<T>[];

  // ── Empty state ────────────────────────────────────────────────────────────

  /**
   * Message shown when rows is empty and loading is false. Pattern F.
   * @default 'No data'
   */
  emptyMessage?: string;

  // ── Escape hatches ─────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

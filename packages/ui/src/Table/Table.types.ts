import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpSize3 } from '../types/shared';

/** Size scale for the Table family — EpSize3 (sm | md | lg). */
export type TableSize = EpSize3;

/** Sort direction for a sortable column header. */
export type SortDirection = 'asc' | 'desc' | false;

/** Padding mode for table cells. */
export type TableCellPadding = 'normal' | 'checkbox' | 'none';

/** Horizontal alignment for cell content. */
export type TableCellAlign = 'left' | 'center' | 'right';

// ─── Table ───────────────────────────────────────────────────────────────────

export interface TableProps {
  /**
   * Size of all cells. Cascades via context to TableCell and TableHeaderCell.
   * Individual cells may override with their own size prop.
   * @default 'md'
   */
  size?: TableSize;
  /**
   * Applies position:sticky + top:0 to TableHead cells for scrollable containers.
   * Structural behavior — not tokenized.
   * @default false
   */
  stickyHeader?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

// ─── TableHead ───────────────────────────────────────────────────────────────

export interface TableHeadProps {
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

// ─── TableBody ───────────────────────────────────────────────────────────────

export interface TableBodyProps {
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

// ─── TableRow ────────────────────────────────────────────────────────────────

export interface TableRowProps {
  /**
   * When true, applies the selected-background token.
   * State is always consumer-managed — this is a presentational prop only.
   * @default false
   */
  selected?: boolean;
  /**
   * When false, disables the hover background effect.
   * @default true
   */
  hover?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

// ─── TableCell ───────────────────────────────────────────────────────────────

export interface TableCellProps {
  /**
   * Overrides the Table context size for this cell only.
   * Inherits from Table.size when omitted.
   */
  size?: TableSize;
  /** @default 'left' */
  align?: TableCellAlign;
  /**
   * 'checkbox' — reduced padding for selection column (content-driven width).
   * 'none'     — no padding; consumer controls all internal spacing.
   * @default 'normal'
   */
  padding?: TableCellPadding;
  colSpan?: number;
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

// ─── TableHeaderCell ─────────────────────────────────────────────────────────

export interface TableHeaderCellProps {
  /** Overrides the Table context size for this header only. */
  size?: TableSize;
  /** @default 'left' */
  align?: TableCellAlign;
  /** @default 'normal' */
  padding?: TableCellPadding;
  colSpan?: number;
  /**
   * Sort state for this column.
   * - undefined  — column is not sortable (no sort icon rendered)
   * - false      — column is sortable but not the active sort (muted icon)
   * - 'asc'      — column is sorted ascending (active icon)
   * - 'desc'     — column is sorted descending (active icon)
   *
   * aria-sort is derived from this value automatically.
   * scope="col" is fixed internally and not exposed.
   */
  sortDirection?: SortDirection;
  /**
   * Called when the header is clicked.
   * If undefined, the column renders as a non-interactive header.
   */
  onSort?: () => void;
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

// ─── TableToolbar ────────────────────────────────────────────────────────────

export interface TableToolbarProps {
  /** Shown in the left slot when selectionCount is 0 or undefined. */
  title?: ReactNode;
  /**
   * When > 0, switches toolbar to selected-background token
   * and shows selectionTitle + selectionActions.
   */
  selectionCount?: number;
  /**
   * Left slot content when selectionCount > 0.
   * Consumer provides for i18n control (e.g. `{selectionCount} rows selected`).
   */
  selectionTitle?: ReactNode;
  /** Right slot — shown when selectionCount is 0 or undefined. */
  actions?: ReactNode;
  /** Right slot — shown when selectionCount > 0. Replaces actions. */
  selectionActions?: ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

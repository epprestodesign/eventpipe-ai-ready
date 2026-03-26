import type { SxProps, Theme } from '@mui/material';
import type { EpSize3 } from '../types/shared';

export type PaginationVariant = 'text' | 'outlined';
export type PaginationShape   = 'circular' | 'rounded';

export interface PaginationProps {
  // ── Required ──────────────────────────────────────────────────────────────
  /** Total number of pages. */
  count: number;

  // ── Controlled / uncontrolled ──────────────────────────────────────────────
  /** Current page (controlled). */
  page?: number;

  /**
   * Initial page for uncontrolled usage.
   * @default 1
   */
  defaultPage?: number;

  /** Called when the page changes. Receives the new page number. */
  onChange?: (page: number) => void;

  // ── Appearance ───────────────────────────────────────────────────────────
  /**
   * Visual style.
   * @default 'text'
   */
  variant?: PaginationVariant;

  /**
   * Item shape.
   * @default 'circular'
   */
  shape?: PaginationShape;

  /**
   * Size of each pagination item.
   * @default 'md'
   */
  size?: EpSize3;

  // ── Visibility ────────────────────────────────────────────────────────────
  /** Hide the previous-page button. @default false */
  hidePrevButton?: boolean;

  /** Hide the next-page button. @default false */
  hideNextButton?: boolean;

  /** Show a button to jump to the first page. @default false */
  showFirstButton?: boolean;

  /** Show a button to jump to the last page. @default false */
  showLastButton?: boolean;

  // ── Range control ─────────────────────────────────────────────────────────
  /**
   * Number of page buttons on each side of the current page.
   * @default 1
   */
  siblingCount?: number;

  /**
   * Number of page buttons at the start and end of the range.
   * @default 1
   */
  boundaryCount?: number;

  // ── State ─────────────────────────────────────────────────────────────────
  /** Disables all pagination items. @default false */
  disabled?: boolean;

  // ── Accessibility ─────────────────────────────────────────────────────────
  /**
   * Custom aria-label for each item.
   * Receives type, page number, and selected state.
   */
  getItemAriaLabel?: (
    type: 'page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis',
    page: number,
    selected: boolean
  ) => string;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

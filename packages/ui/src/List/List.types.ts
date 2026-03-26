import type { MouseEventHandler, ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';

export interface ListProps {
  // ── Layout ────────────────────────────────────────────────────────────────
  /**
   * Reduce item padding — use in compact/sidebar lists.
   * @default false
   */
  dense?: boolean;

  /**
   * Remove the default 8px vertical padding from the list container.
   * @default false
   */
  disablePadding?: boolean;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

export interface ListItemProps {
  // ── Interaction ───────────────────────────────────────────────────────────
  onClick?: MouseEventHandler<HTMLElement>;
  /** Mark item as currently active/selected. */
  selected?: boolean;
  /** Prevents interaction. Announced as unavailable by screen readers. */
  disabled?: boolean;
  /** Reduced padding — use in dense lists. Overrides parent List dense context. */
  dense?: boolean;
  /** Renders a divider line below this item. */
  divider?: boolean;

  // ── Icon slots ────────────────────────────────────────────────────────────
  /** Leading icon — pass `<Icon name="..." />`. Wrapped in aria-hidden span. */
  startIcon?: ReactNode;
  /** Trailing icon (status, count, arrow, etc.). Wrapped in aria-hidden span. */
  endIcon?: ReactNode;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

export interface ListDividerProps {
  className?: string;
  sx?: SxProps<Theme>;
}

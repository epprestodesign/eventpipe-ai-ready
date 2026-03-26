import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';

export interface DividerProps {
  // ── Orientation ──────────────────────────────────────────────────────────
  /**
   * Direction of the divider line.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  // ── Variant ───────────────────────────────────────────────────────────────
  /**
   * Indentation style.
   * - `fullWidth` spans the full container (default).
   * - `inset` indents from the left — use in list contexts.
   * - `middle` indents on both sides — use as a section separator.
   * @default 'fullWidth'
   */
  variant?: 'fullWidth' | 'inset' | 'middle';

  // ── Text label ────────────────────────────────────────────────────────────
  /**
   * Horizontal alignment of the text label when `children` are provided.
   * Has no effect without children.
   * @default 'center'
   */
  textAlign?: 'center' | 'left' | 'right';

  // ── Flex layout ───────────────────────────────────────────────────────────
  /**
   * Allow a vertical Divider to stretch to full height in a flex container.
   * @default false
   */
  flexItem?: boolean;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;

  // ── Content ───────────────────────────────────────────────────────────────
  /** Optional text label — renders the divider with two flanking lines. */
  children?: ReactNode;
}

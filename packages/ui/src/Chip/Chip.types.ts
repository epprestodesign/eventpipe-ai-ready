import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpSize3, EpColor } from '../types/shared';

export type ChipVariant = 'filled' | 'outlined' | 'soft';

export interface ChipProps {
  // ── Appearance ───────────────────────────────────────────────────────────
  /**
   * Visual style.
   * @default 'filled'
   */
  variant?: ChipVariant;

  /**
   * Size — 3-tier scale. Controls height, font size, and padding.
   * @default 'md'
   */
  size?: EpSize3;

  /**
   * Chip color.
   * @default 'primary'
   */
  color?: EpColor;

  // ── Content ───────────────────────────────────────────────────────────────
  /** The chip label text. */
  label: string;

  // ── Icon slots ────────────────────────────────────────────────────────────
  /** Decorative leading icon. Pass `<Icon name="..." />`. */
  startIcon?: ReactNode;
  /**
   * Decorative trailing icon. Ignored when `onDelete` is also provided
   * (the delete button occupies the end slot).
   */
  endIcon?: ReactNode;

  // ── State ─────────────────────────────────────────────────────────────────
  /** Whether the chip is in a selected/active state (filter chip pattern). */
  selected?: boolean;
  /** Prevents interaction. */
  disabled?: boolean;

  // ── Interaction ───────────────────────────────────────────────────────────
  /** Makes the chip clickable. Adds hover/focus styles and button semantics. */
  onClick?: () => void;
  /**
   * Shows a delete button (close icon) in the end slot.
   * When provided, `endIcon` is ignored.
   */
  onDelete?: () => void;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

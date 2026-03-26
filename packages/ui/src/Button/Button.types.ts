import type { ElementType, MouseEventHandler, ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { ButtonVariant, EpColor, EpSize5 } from '../types/shared';

export interface ButtonProps {
  // ── Appearance ────────────────────────────────────────────────────────────
  /** @default 'contained' */
  variant?: ButtonVariant;
  /**
   * Sizing category 1 (Action Controls): xs | sm | md | lg | xl
   * Spec: docs/decisions/005-sizing-scale.md — Category 1
   * @default 'md'
   */
  size?: EpSize5;
  /** @default 'primary' */
  color?: EpColor;
  /** Stretches button to 100% of its container width. @default false */
  fullWidth?: boolean;

  // ── State ─────────────────────────────────────────────────────────────────
  /** Native disabled. Removed from tab order. @default false */
  disabled?: boolean;
  /**
   * Async loading state. Shows spinner, prevents click.
   * Uses aria-disabled (NOT disabled attr) — stays in tab order.
   * @default false
   */
  loading?: boolean;

  // ── Slots ─────────────────────────────────────────────────────────────────
  /** Leading icon or element. Do NOT use MUI startIcon directly. */
  startSlot?: ReactNode;
  /** Trailing icon or element. Do NOT use MUI endIcon directly. */
  endSlot?: ReactNode;

  // ── Navigation ────────────────────────────────────────────────────────────
  /** When set, renders as <a>. Use component="a" implicitly. */
  href?: string;
  /** Polymorphic root element. */
  component?: ElementType;

  // ── Events ────────────────────────────────────────────────────────────────
  onClick?: MouseEventHandler<HTMLButtonElement>;

  // ── Accessibility ─────────────────────────────────────────────────────────
  /**
   * Accessible label for icon-only buttons (no visible text children).
   * Required when `children` is purely decorative (e.g. an icon slot with no label text).
   */
  'aria-label'?: string;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;

  // ── Content ───────────────────────────────────────────────────────────────
  children: ReactNode;
}

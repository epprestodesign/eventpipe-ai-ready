import type { ElementType, ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

export type TypographyColor = 'primary' | 'secondary' | 'disabled';

export type TypographyAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps {
  // ── Appearance ───────────────────────────────────────────────────────────
  /**
   * Typography preset controlling font-size, weight, and line-height.
   * @default 'body1'
   */
  variant?: TypographyVariant;

  /**
   * Text color mapped to semantic text tokens.
   * @default 'primary'
   */
  color?: TypographyColor;

  /**
   * Text alignment.
   * @default 'inherit'
   */
  align?: TypographyAlign;

  /**
   * Truncate text with ellipsis on overflow.
   * @default false
   */
  noWrap?: boolean;

  /**
   * Adds bottom margin (0.35em).
   * @default false
   */
  gutterBottom?: boolean;

  // ── Polymorphism ─────────────────────────────────────────────────────────
  /** Override the rendered HTML element. */
  component?: ElementType;

  // ── Content ──────────────────────────────────────────────────────────────
  children?: ReactNode;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

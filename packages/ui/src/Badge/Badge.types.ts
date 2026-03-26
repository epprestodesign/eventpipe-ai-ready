import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpSize5, EpColor } from '../types/shared';

export type BadgeVariant = 'standard' | 'dot';
export type BadgeOverlap = 'rectangular' | 'circular';

export interface BadgeAnchorOrigin {
  vertical:   'top' | 'bottom';
  horizontal: 'left' | 'right';
}

export interface BadgeProps {
  // ── Appearance ───────────────────────────────────────────────────────────
  /**
   * `standard` shows count/content. `dot` is a size-only indicator.
   * @default 'standard'
   */
  variant?: BadgeVariant;

  /**
   * Size — 5-tier scale. Controls badge diameter, font size, and dot size.
   * @default 'md'
   */
  size?: EpSize5;

  /**
   * Badge color.
   * @default 'primary'
   */
  color?: EpColor;

  // ── Position ─────────────────────────────────────────────────────────────
  /**
   * Shape of the wrapped child — affects badge corner placement.
   * @default 'rectangular'
   */
  overlap?: BadgeOverlap;

  /**
   * Corner of the child element where the badge is anchored.
   * @default { vertical: 'top', horizontal: 'right' }
   */
  anchorOrigin?: BadgeAnchorOrigin;

  // ── Content ───────────────────────────────────────────────────────────────
  /** The number or content to display inside the badge. */
  badgeContent?: ReactNode;

  /**
   * Maximum number to display. When exceeded, shows `{max}+`.
   * @default 99
   */
  max?: number;

  /** Show badge when content is 0. @default false */
  showZero?: boolean;

  /** Hides the badge. @default false */
  invisible?: boolean;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;

  /** The element the badge is anchored to. */
  children: ReactNode;
}

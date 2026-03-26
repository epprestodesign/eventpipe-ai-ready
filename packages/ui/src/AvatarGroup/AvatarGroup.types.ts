import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpSize5 } from '../types/shared';
import type { AvatarVariant } from '../Avatar';

export type AvatarGroupSpacing = 'small' | 'medium';

export interface AvatarGroupProps {
  // ── Behaviour ──────────────────────────────────────────────────────────
  /**
   * Maximum number of avatars to display before showing overflow indicator.
   * @default 5
   */
  max?: number;

  /**
   * Override total count for the surplus calculation.
   * If omitted, total = number of children.
   */
  total?: number;

  // ── Appearance ──────────────────────────────────────────────────────────
  /**
   * Size forced on all child avatars.
   * @default 'md'
   */
  size?: EpSize5;

  /**
   * Overlap spacing between avatars.
   * @default 'medium'
   */
  spacing?: AvatarGroupSpacing;

  /**
   * Shape forced on all child avatars.
   * @default 'circular'
   */
  variant?: AvatarVariant;

  // ── A11y ────────────────────────────────────────────────────────────────
  /** Accessible label for the group. */
  'aria-label'?: string;

  // ── Content ──────────────────────────────────────────────────────────────
  /** Avatar elements. */
  children?: ReactNode;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

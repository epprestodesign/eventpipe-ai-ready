import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpSize5 } from '../types/shared';

export type AvatarVariant = 'circular' | 'rounded' | 'square';

export interface AvatarProps {
  // ── Appearance ───────────────────────────────────────────────────────────
  /**
   * Shape of the avatar.
   * @default 'circular'
   */
  variant?: AvatarVariant;

  /**
   * Size — 5-tier scale. Controls width, height, and fallback font size.
   * @default 'md'
   */
  size?: EpSize5;

  // ── Image ────────────────────────────────────────────────────────────────
  /** Image URL. Falls back to `children` then the person icon if load fails. */
  src?: string;

  /** Alt text for the image. Required when `src` is provided. */
  alt?: string;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;

  // ── Content ──────────────────────────────────────────────────────────────
  /**
   * Fallback content when no image is available.
   * Typically 1–2 initials (e.g. `"JD"`) or an `<Icon />`.
   * Truncate to 2 characters for initials — no automatic extraction from `alt`.
   */
  children?: ReactNode;
}

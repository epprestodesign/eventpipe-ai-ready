import type { SxProps, Theme } from '@mui/material';

export interface SkeletonProps {
  // ── Shape ──────────────────────────────────────────────────────────────────
  /**
   * Visual shape of the skeleton.
   * - `'text'` — short rounded bar, sized to a single line of text (default)
   * - `'circular'` — filled circle; set `width` + `height` to control size
   * - `'rectangular'` — sharp-cornered block; set `width` + `height`
   * - `'rounded'` — rounded-corner block; set `width` + `height`
   * @default 'text'
   */
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';

  // ── Animation ─────────────────────────────────────────────────────────────
  /**
   * Loading animation style.
   * - `'wave'` — horizontal shimmer sweep (default)
   * - `'pulse'` — opacity pulsation
   * - `false` — no animation (static placeholder)
   * @default 'wave'
   */
  animation?: 'pulse' | 'wave' | false;

  // ── Sizing ────────────────────────────────────────────────────────────────
  /** Explicit width. Accepts any CSS length value or number (treated as px). */
  width?: number | string;

  /** Explicit height. Accepts any CSS length value or number (treated as px). */
  height?: number | string;

  // ── Escape hatches ─────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

import type { AriaAttributes } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpColor } from '../types/shared';

export interface LinearProgressProps extends AriaAttributes {
  // ── Variant ────────────────────────────────────────────────────────────────
  /**
   * Progress mode.
   * - `'indeterminate'` — continuous animation (default, use when duration unknown)
   * - `'determinate'`   — bar width reflects `value` (0–100)
   * - `'buffer'`        — two bars: `value` = progress, `valueBuffer` = buffered amount
   * - `'query'`         — reversed indeterminate (pre-loading state)
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';

  // ── Color ──────────────────────────────────────────────────────────────────
  /**
   * Bar color. Maps to the EP color scale.
   * @default 'primary'
   */
  color?: EpColor;

  // ── Value ──────────────────────────────────────────────────────────────────
  /**
   * Progress percentage (0–100). Used by `determinate` and `buffer` variants.
   * Values outside 0–100 are clamped by MUI.
   */
  value?: number;

  /**
   * Buffer percentage (0–100). Used only by the `buffer` variant.
   * Represents the secondary (buffered) fill behind the primary bar.
   */
  valueBuffer?: number;

  // ── Shape ──────────────────────────────────────────────────────────────────
  /**
   * Applies rounded end-caps to the track and bar using the component's
   * `borderRadius` token.
   * @default false
   */
  rounded?: boolean;

  // ── Escape hatches ─────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

import type { SxProps, Theme } from '@mui/material';
import type { EpSize5, EpColor } from '../types/shared';

export interface CircularProgressProps {
  // ── Variant ────────────────────────────────────────────────────────────────
  /**
   * Spinner mode.
   * - `'indeterminate'` — continuous spin animation (default, use when duration is unknown)
   * - `'determinate'` — static arc showing `value` progress (0–100)
   * @default 'indeterminate'
   */
  variant?: 'indeterminate' | 'determinate';

  // ── Sizing ─────────────────────────────────────────────────────────────────
  /**
   * Diameter — 5-tier scale.
   * xs=16px · sm=24px · md=40px (default) · lg=56px · xl=72px
   * Spec: docs/decisions/005-sizing-scale.md — Category 1
   * @default 'md'
   */
  size?: EpSize5;

  // ── Color ──────────────────────────────────────────────────────────────────
  /**
   * Arc color. Maps to the EP color scale.
   * @default 'primary'
   */
  color?: EpColor;

  // ── Value ──────────────────────────────────────────────────────────────────
  /**
   * Progress percentage (0–100). Only relevant for `variant="determinate"`.
   * Values outside 0–100 are clamped by MUI.
   */
  value?: number;

  // ── Tuning ─────────────────────────────────────────────────────────────────
  /**
   * SVG stroke width of the arc, in SVG units (0–44 coordinate system).
   * @default 3.6
   */
  thickness?: number;

  /**
   * Disables the shrink animation in indeterminate mode.
   * Improves performance when many spinners render simultaneously.
   * @default false
   */
  disableShrink?: boolean;

  // ── Escape hatches ─────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

import type { SxProps, Theme } from '@mui/material';

export interface BackdropProps {
  // ── Visibility ─────────────────────────────────────────────────────────────
  /**
   * If `true`, the backdrop is visible and blocks interaction with the page.
   * @required
   */
  open: boolean;

  // ── Appearance ─────────────────────────────────────────────────────────────
  /**
   * If `true`, the backdrop is present in the DOM but rendered fully transparent.
   * Useful for capturing click-away events without a visible overlay.
   * @default false
   */
  invisible?: boolean;

  // ── Interaction ────────────────────────────────────────────────────────────
  /**
   * Callback fired when the backdrop is clicked.
   * Commonly used to close the overlaying dialog or drawer.
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  // ── Transition ─────────────────────────────────────────────────────────────
  /**
   * Duration for the fade-in/out transition, in milliseconds.
   * Defaults to the component token `--ep-component-backdrop-transition-duration` (225 ms).
   * Override here only when the consuming pattern requires a non-standard duration.
   */
  transitionDuration?: number;

  // ── Content ────────────────────────────────────────────────────────────────
  /**
   * Optional content rendered inside the backdrop (e.g. a centered spinner).
   */
  children?: React.ReactNode;

  // ── Escape hatches ─────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

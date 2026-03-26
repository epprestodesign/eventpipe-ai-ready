import type { ReactNode, SyntheticEvent } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { AlertSeverity } from '../types/shared';

export type SnackbarCloseReason = 'timeout' | 'clickaway' | 'escapeKeyDown';

export interface SnackbarProps {
  // ── Visibility ─────────────────────────────────────────────────────────────
  /** Controls whether the Snackbar is visible. @required */
  open: boolean;

  // ── Content ────────────────────────────────────────────────────────────────
  /**
   * The notification text or node.
   * When `severity` is set, rendered inside an embedded Alert.
   * When `children` is provided, `message` is ignored.
   */
  message?: ReactNode;

  /**
   * Optional action element (e.g., a Button or link) rendered at the end of the bar.
   * In plain mode: white-on-dark style via the `action.color` token.
   * In severity mode: passed to the embedded Alert's `action` slot.
   */
  action?: ReactNode;

  /**
   * When provided, the Snackbar renders an embedded Alert for the corresponding severity.
   * - `'error' | 'warning'` → `role="alert"` (assertive live region)
   * - `'info' | 'success'`  → `role="status"` (polite live region)
   *
   * EP addition — not present in MUI Snackbar.
   */
  severity?: AlertSeverity;

  /**
   * Render override — replaces both the plain and severity rendering.
   * Use when the built-in layouts don't satisfy a specific pattern.
   */
  children?: ReactNode;

  // ── Behavior ───────────────────────────────────────────────────────────────
  /**
   * Milliseconds before `onClose` is called with `reason: 'timeout'`.
   * Set to `null` to disable auto-hide.
   * Defaults to the `--ep-component-snackbar-auto-hide-duration` token value (4000 ms).
   * @default 4000
   */
  autoHideDuration?: number | null;

  /**
   * Position of the Snackbar on screen.
   * @default { vertical: 'bottom', horizontal: 'left' }
   */
  anchorOrigin?: {
    vertical:   'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };

  /**
   * Callback fired when the Snackbar requests to close.
   * `reason` is `'timeout'` | `'clickaway'` | `'escapeKeyDown'`.
   * Pattern: ignore `'clickaway'` — only close on timeout or explicit user action.
   */
  onClose?: (event: SyntheticEvent | Event, reason: SnackbarCloseReason) => void;

  // ── Transition ─────────────────────────────────────────────────────────────
  /**
   * Custom transition duration in milliseconds.
   * Defaults to 225 ms (matches `--ep-component-snackbar-transition-duration`).
   */
  transitionDuration?: number | { enter?: number; exit?: number };

  /**
   * If `true`, suppresses the hide-on-blur behavior (useful in tests).
   * @default false
   */
  disableWindowBlurListener?: boolean;

  // ── Escape hatches ─────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

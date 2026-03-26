import type { ReactNode, ComponentType, SyntheticEvent } from 'react';
import type { SxProps, Theme } from '@mui/material';

// ─── Dialog ───────────────────────────────────────────────────────────────────

export interface DialogProps {
  // ── Visibility ─────────────────────────────────────────────────────────────
  /** Controls whether the dialog is rendered and visible. @required */
  open: boolean;

  /**
   * Callback fired when the dialog requests to be closed.
   * `reason` distinguishes backdrop click from Escape key press.
   * Not fired when `loading={true}`.
   */
  onClose?: (event: SyntheticEvent | Event | {}, reason: 'backdropClick' | 'escapeKeyDown') => void;

  // ── Layout ─────────────────────────────────────────────────────────────────
  /**
   * If `true`, the dialog stretches to the full width of the `maxWidth` container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Maximum width of the dialog paper. Use `false` to remove any max-width constraint.
   * Dialog does NOT accept a `size` prop — width is controlled here.
   * Spec: docs/decisions/005-sizing-scale.md — Dialog uses maxWidth not size scale.
   * @default 'sm'
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

  /**
   * If `true`, the dialog fills the entire screen.
   * @default false
   */
  fullScreen?: boolean;

  /**
   * Determines which part of the dialog scrolls when content overflows.
   * - `'paper'` — the dialog paper scrolls (default)
   * - `'body'`  — the backdrop/page body scrolls
   * @default 'paper'
   */
  scroll?: 'paper' | 'body';

  // ── State ──────────────────────────────────────────────────────────────────
  /**
   * When `true`, a centered CircularProgress is shown over the dialog content.
   * All interactive elements are blocked. `onClose` is suppressed.
   * Use for async confirmation actions (e.g., "Deleting event…").
   * @default false
   */
  loading?: boolean;

  /**
   * If `true`, pressing Escape does not close the dialog.
   * @default false
   */
  disableEscapeKeyDown?: boolean;

  /**
   * If `true`, the dialog content is kept mounted in the DOM when closed.
   * Useful for preserving expensive children across visibility toggles.
   * @default false
   */
  keepMounted?: boolean;

  // ── Transition ─────────────────────────────────────────────────────────────
  /**
   * Custom transition duration in milliseconds (or enter/exit breakdown).
   * Defaults to 225 ms (matches `--ep-component-dialog-transition-duration`).
   */
  transitionDuration?: number | { enter?: number; exit?: number };

  /**
   * Custom transition component. Replaces MUI's default Fade transition.
   * Advanced use only.
   */
  TransitionComponent?: ComponentType;

  // ── Accessibility ──────────────────────────────────────────────────────────
  /** Id of the DialogTitle element. Use to connect `aria-labelledby`. */
  'aria-labelledby'?: string;
  /** Id of the DialogContent element. Use to connect `aria-describedby`. */
  'aria-describedby'?: string;

  // ── Escape hatches ─────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;

  // ── Content ────────────────────────────────────────────────────────────────
  /** Compose with Dialog.Title, Dialog.Content, and Dialog.Actions. */
  children?: ReactNode;
}

// ─── DialogTitle ─────────────────────────────────────────────────────────────

export interface DialogTitleProps {
  /**
   * If provided, renders a close (×) button in the top-right of the title area.
   * The button calls this handler when clicked or activated via keyboard.
   * Ensure the Dialog also handles `onClose` so Escape and backdrop-click also work.
   */
  onClose?: () => void;

  /** Id attribute — connect with `aria-labelledby` on the Dialog. */
  id?: string;

  className?: string;
  sx?: SxProps<Theme>;
  children: ReactNode;
}

// ─── DialogContent ───────────────────────────────────────────────────────────

export interface DialogContentProps {
  /**
   * If `true`, adds top and bottom borders to visually separate content from
   * the title and actions sections. Uses the `dialog.divider.color` token.
   * @default false
   */
  dividers?: boolean;

  /** Id attribute — connect with `aria-describedby` on the Dialog. */
  id?: string;

  className?: string;
  sx?: SxProps<Theme>;
  children: ReactNode;
}

// ─── DialogActions ───────────────────────────────────────────────────────────

export interface DialogActionsProps {
  /**
   * If `true`, removes the gap between action buttons.
   * @default false
   */
  disableSpacing?: boolean;

  className?: string;
  sx?: SxProps<Theme>;
  children: ReactNode;
}

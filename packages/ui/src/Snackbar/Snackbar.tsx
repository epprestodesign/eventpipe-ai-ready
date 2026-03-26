import type { ReactNode } from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiSnackbarContent from '@mui/material/SnackbarContent';
import { styled } from '@mui/material/styles';
import { Alert } from '../Alert';
import type { SnackbarProps } from './Snackbar.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-snackbar-* custom properties.

const TOKEN = {
  background:   () => `var(--ep-component-snackbar-background)`,
  color:        () => `var(--ep-component-snackbar-color)`,
  borderRadius: () => `var(--ep-component-snackbar-border-radius)`,
  shadow:       () => `var(--ep-component-snackbar-shadow)`,
  paddingY:     () => `var(--ep-component-snackbar-padding-y)`,
  paddingX:     () => `var(--ep-component-snackbar-padding-x)`,
  actionColor:  () => `var(--ep-component-snackbar-action-color)`,
  minWidth:     () => `var(--ep-component-snackbar-min-width)`,
  maxWidth:     () => `var(--ep-component-snackbar-max-width)`,
} as const;

// ─── Styled plain content ──────────────────────────────────────────────────
// Used for plain (no-severity) Snackbar. Emotion CSS lives in <head> — works
// inside MUI's Portal. No PAPER_SX needed: SnackbarContent is styled directly
// because it IS the content element, not a nested Paper inside a Portal.

const StyledSnackbarContent = styled(MuiSnackbarContent)({
  backgroundColor: TOKEN.background(),
  color:           TOKEN.color(),
  borderRadius:    TOKEN.borderRadius(),
  boxShadow:       TOKEN.shadow(),
  padding:         `${TOKEN.paddingY()} ${TOKEN.paddingX()}`,
  minWidth:        TOKEN.minWidth(),
  maxWidth:        TOKEN.maxWidth(),

  // Framework reset — MUI SnackbarContent sets flexWrap: 'wrap' and a fixed
  // paddingRight; we normalize layout here.
  flexWrap: 'nowrap',

  // Action slot — the color token drives the action button/link color
  '& .MuiSnackbarContent-action': {
    color:        TOKEN.actionColor(),
    paddingLeft:  TOKEN.paddingX(),
    // Framework reset — MUI adds marginRight: -8px to the action slot
    marginRight: 0,
  },

  // Message slot — ensure it fills available space when action is present
  '& .MuiSnackbarContent-message': {
    padding: 0,
  },
});

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Snackbar — transient notification bar at the edge of the screen.
 *
 * Non-blocking: does not interrupt user flow, has no focus trap.
 * Portal-rendered via MUI into `document.body` at z-index 1400 (above Dialog).
 *
 * Two rendering modes:
 * - **Plain** (no `severity`): dark bar with `message` + optional `action`
 * - **Severity** (`severity` provided): embedded Alert (standard variant)
 *   with appropriate live region semantics:
 *   - `error | warning` → `role="alert"` (assertive)
 *   - `info | success` → `role="status"` (polite)
 *
 * Dismiss pattern:
 * ```ts
 * const handleClose = (_, reason: SnackbarCloseReason) => {
 *   if (reason === 'clickaway') return;
 *   setOpen(false);
 * };
 * ```
 *
 * Overlay system: docs/contracts/overlay-pattern.md
 * Spec: docs/specs/components/snackbar.md
 */
export function Snackbar({
  open,
  message,
  action,
  severity,
  children,
  autoHideDuration  = 4000,
  anchorOrigin      = { vertical: 'bottom', horizontal: 'left' },
  onClose,
  transitionDuration,
  disableWindowBlurListener = false,
  className,
  sx,
}: SnackbarProps) {
  // Resolve what to render inside the Snackbar:
  // 1. children (explicit override — consumer controls rendering entirely)
  // 2. severity + message → embedded Alert
  // 3. message → plain StyledSnackbarContent

  let content: ReactNode;

  if (children != null) {
    content = children;
  } else if (severity) {
    // Severity mode — embed Alert wrapped in a live region div.
    // error/warning → role="alert" (assertive); info/success → role="status" (polite).
    const liveRole = (severity === 'error' || severity === 'warning') ? 'alert' : 'status';
    content = (
      <div role={liveRole} aria-atomic="true" style={{ width: '100%' }}>
        <Alert
          severity={severity}
          variant="standard"
          action={action}
          sx={{ minWidth: TOKEN.minWidth(), maxWidth: TOKEN.maxWidth() }}
        >
          {message}
        </Alert>
      </div>
    );
  } else {
    // Plain mode — styled dark content bar
    content = (
      <StyledSnackbarContent
        message={message}
        action={action}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      />
    );
  }

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      onClose={onClose}
      // 225ms matches --ep-component-snackbar-transition-duration token
      transitionDuration={transitionDuration ?? 225}
      disableWindowBlurListener={disableWindowBlurListener}
      className={className}
      sx={sx}
    >
      {/* React requires a single child when using children override in MuiSnackbar */}
      <div style={{ display: 'contents' }}>{content}</div>
    </MuiSnackbar>
  );
}

Snackbar.displayName = 'Snackbar';

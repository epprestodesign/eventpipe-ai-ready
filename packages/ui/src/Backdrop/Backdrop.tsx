import MuiBackdrop from '@mui/material/Backdrop';
import { styled } from '@mui/material/styles';
import type { BackdropProps } from './Backdrop.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-backdrop-* custom properties.

const TOKEN = {
  background:         () => `var(--ep-component-backdrop-background)`,
  transitionDuration: () => `var(--ep-component-backdrop-transition-duration)`,
} as const;

// ─── Styled root ───────────────────────────────────────────────────────────
// No ep-prefixed styled props — backdrop has no dynamic color or size dimensions.
// All token-driven values are static (background color, transition duration).

const StyledBackdrop = styled(MuiBackdrop)({
  backgroundColor:  TOKEN.background(),
  // Override MUI's hardcoded transition duration with the component token.
  // MUI Backdrop uses Fade internally; we target the generated class directly.
  transitionDuration: TOKEN.transitionDuration(),
});

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Backdrop — full-viewport semi-transparent overlay that blocks page interaction.
 *
 * Renders via MUI's portal into `document.body` — sits above all page content
 * at the correct z-index layer. Fade transition driven by the component's
 * `transitionDuration` token (225 ms default).
 *
 * Common patterns:
 * - Wrap a Dialog, Drawer, or Modal — pass `onClick` to close on backdrop click
 * - Render a CircularProgress inside `children` for full-page loading states
 * - Use `invisible` to capture click-away events without a visible scrim
 *
 * Accessibility: the backdrop itself is presentational. Ensure the content it
 * overlays has appropriate `aria-modal`, `role="dialog"`, or `role="alertdialog"`.
 *
 * Spec: docs/specs/components/backdrop.md
 */
export function Backdrop({
  open,
  invisible   = false,
  onClick,
  transitionDuration,
  children,
  className,
  sx,
}: BackdropProps) {
  return (
    <StyledBackdrop
      open={open}
      invisible={invisible}
      onClick={onClick}
      transitionDuration={transitionDuration}
      className={className}
      sx={sx}
    >
      {children}
    </StyledBackdrop>
  );
}

Backdrop.displayName = 'Backdrop';

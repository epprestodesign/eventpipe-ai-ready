import { forwardRef } from 'react';
import MuiLinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import type { LinearProgressProps } from './LinearProgress.types';
import type { EpColor } from '../types/shared';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-linear-progress-* custom properties.

const TOKEN = {
  height:       () => `var(--ep-component-linear-progress-height)`,
  borderRadius: () => `var(--ep-component-linear-progress-border-radius)`,
  track:        () => `var(--ep-component-linear-progress-track-color)`,
  bar:  (c: EpColor) => `var(--ep-component-linear-progress-bar-${c})`,
} as const;

// ─── Styled root ───────────────────────────────────────────────────────────
interface StyledLinearProgressProps {
  epColor:   EpColor;
  epRounded: boolean;
}

const StyledLinearProgress = styled(MuiLinearProgress, {
  shouldForwardProp: (prop) => prop !== 'epColor' && prop !== 'epRounded',
})<StyledLinearProgressProps>(({ epColor, epRounded }) => ({
  // Track
  height:          TOKEN.height(),
  borderRadius:    epRounded ? TOKEN.borderRadius() : 0,
  backgroundColor: TOKEN.track(),

  // Bar color — set `color` on root so MUI's color="inherit" propagates
  // `background-color: currentColor` down to .MuiLinearProgress-bar.
  color: TOKEN.bar(epColor),

  // Rounded end-caps on the moving bar element itself
  '& .MuiLinearProgress-bar': {
    borderRadius: epRounded ? TOKEN.borderRadius() : 0,
  },
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * LinearProgress — horizontal bar indicator for loading and progress states.
 *
 * Four modes:
 * - `indeterminate` — continuous animation; use when duration is unknown (default)
 * - `determinate`   — bar width reflects `value` (0–100 percent)
 * - `buffer`        — dual-bar showing progress + buffered amount
 * - `query`         — reversed indeterminate for pre-loading states
 *
 * Color accepts all `EpColor` values. Optional `rounded` prop applies
 * end-caps via the component borderRadius token.
 *
 * Non-interactive — no focus ring, no disabled state.
 * Accessibility: wrap in a `role="status"` region or pass `aria-label` via `sx`.
 *
 * Spec: docs/specs/components/linear-progress.md
 */
export const LinearProgress = forwardRef<HTMLSpanElement, LinearProgressProps>(
  function LinearProgress(
    {
      variant     = 'indeterminate',
      color       = 'primary',
      value,
      valueBuffer,
      rounded     = false,
      className,
      sx,
      ...rest
    },
    ref
  ) {
    return (
      <StyledLinearProgress
        ref={ref}
        epColor={color}
        epRounded={rounded}
        variant={variant}
        value={value}
        valueBuffer={valueBuffer}
        // color="inherit" disables MUI palette lookup; our CSS `color:` token
        // becomes currentColor, which MUI uses for .MuiLinearProgress-bar.
        color="inherit"
        className={className}
        sx={sx}
        {...rest}
      />
    );
  }
);

LinearProgress.displayName = 'LinearProgress';

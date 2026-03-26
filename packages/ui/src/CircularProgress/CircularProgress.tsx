import { forwardRef } from 'react';
import MuiCircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import type { CircularProgressProps } from './CircularProgress.types';
import type { EpColor, EpSize5 } from '../types/shared';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-circular-progress-* custom properties.

const TOKEN = {
  size:  (s: EpSize5) => `var(--ep-component-circular-progress-size-${s})`,
  color: (c: EpColor) => `var(--ep-component-circular-progress-color-${c})`,
} as const;

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledCircularProgressProps {
  epColor: EpColor;
}

const StyledCircularProgress = styled(MuiCircularProgress, {
  shouldForwardProp: (prop) => prop !== 'epColor',
})<StyledCircularProgressProps>(({ epColor }) => ({
  // Arc / indicator color
  color: TOKEN.color(epColor),
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * CircularProgress — spinning arc indicator for loading and progress states.
 *
 * Two modes:
 * - `indeterminate` — continuous spin; use when duration is unknown (default)
 * - `determinate` — arc length reflects `value` (0–100 percent)
 *
 * Size is a 5-tier named scale (xs–xl). Color accepts all `EpColor` values.
 *
 * Non-interactive — no focus ring, no disabled state.
 * Accessibility: set `aria-label` on the containing region or pass via `sx`.
 *
 * Spec: docs/specs/components/circular-progress.md
 */
export const CircularProgress = forwardRef<HTMLSpanElement, CircularProgressProps>(
  function CircularProgress(
    {
      variant      = 'indeterminate',
      size         = 'md',
      color        = 'primary',
      value,
      thickness,
      disableShrink = false,
      className,
      sx,
    },
    ref
  ) {
    return (
      <StyledCircularProgress
        ref={ref}
        epColor={color}
        variant={variant}
        // Pass CSS var string as MUI's size prop — MUI sets style={{ width, height }}
        // which CSS resolves correctly. MUI accepts `size?: number | string`.
        size={TOKEN.size(size)}
        value={value}
        thickness={thickness}
        disableShrink={disableShrink}
        // Pass color="inherit" so MUI uses our CSS color property instead of
        // its own palette lookup — all color control via TOKEN.color().
        color="inherit"
        className={className}
        sx={sx}
      />
    );
  }
);

CircularProgress.displayName = 'CircularProgress';

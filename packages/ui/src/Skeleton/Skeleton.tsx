import { forwardRef } from 'react';
import MuiSkeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import type { SkeletonProps } from './Skeleton.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-skeleton-* custom properties.

const TOKEN = {
  background:   ()                                   => `var(--ep-component-skeleton-background)`,
  borderRadius: (v: 'text' | 'rectangular' | 'rounded') => `var(--ep-component-skeleton-border-radius-${v})`,
} as const;

// ─── Styled root ──────────────────────────────────────────────────────────
// No ep-prefixed styled props — all variant-specific overrides are driven by
// MUI's own variant class names (.MuiSkeleton-text / -rectangular / -rounded).
// Circular borderRadius is 50% — a geometric constant, not a design token.

const StyledSkeleton = styled(MuiSkeleton)({
  // Base background — overrides MUI's rgba(0,0,0,0.11) default
  backgroundColor: TOKEN.background(),

  // ── Variant border-radius overrides ───────────────────────────────────
  '&.MuiSkeleton-text': {
    borderRadius: TOKEN.borderRadius('text'),
    // Framework reset — MUI adds bottom: -3px transform on text skeleton;
    // we keep that for natural text-line feel and only override the radius.
  },
  '&.MuiSkeleton-rectangular': {
    borderRadius: TOKEN.borderRadius('rectangular'),
  },
  '&.MuiSkeleton-rounded': {
    borderRadius: TOKEN.borderRadius('rounded'),
  },
  // MuiSkeleton-circular: 50% borderRadius applied by MUI — geometric constant,
  // no override needed.
});

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Skeleton — animated placeholder for content that is loading.
 *
 * Four shapes: `text` (single line), `circular` (avatar), `rectangular`
 * (image/card), `rounded` (card with rounded corners).
 *
 * Two animations: `wave` (shimmer sweep) and `pulse` (opacity fade).
 * Set `animation={false}` for a static placeholder.
 *
 * Sizing: use `width` and `height` props, or let the skeleton fill its
 * container by wrapping the actual content shape with it.
 *
 * Non-interactive — no focus ring, no color/size variants.
 *
 * Spec: docs/specs/components/skeleton.md
 */
export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(
  function Skeleton(
    {
      variant   = 'text',
      animation = 'wave',
      width,
      height,
      className,
      sx,
    },
    ref
  ) {
    return (
      <StyledSkeleton
        ref={ref}
        variant={variant}
        animation={animation}
        width={width}
        height={height}
        className={className}
        sx={sx}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

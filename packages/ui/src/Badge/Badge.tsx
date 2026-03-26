import { forwardRef } from 'react';
import MuiBadge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import type { BadgeProps } from './Badge.types';
import type { EpSize5, EpColor } from '../types/shared';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-badge-* custom properties.

const TOKEN = {
  borderRadius: ()             => `var(--ep-component-badge-border-radius)`,
  height:       (s: EpSize5)  => `var(--ep-component-badge-size-${s}-height)`,
  minWidth:     (s: EpSize5)  => `var(--ep-component-badge-size-${s}-min-width)`,
  fontSize:     (s: EpSize5)  => `var(--ep-component-badge-size-${s}-font-size)`,
  paddingX:     (s: EpSize5)  => `var(--ep-component-badge-size-${s}-padding-x)`,
  dotSize:      (s: EpSize5)  => `var(--ep-component-badge-size-${s}-dot-size)`,
  background:   (c: EpColor)  => `var(--ep-component-badge-color-${c}-background)`,
  badgeColor:   (c: EpColor)  => `var(--ep-component-badge-color-${c}-text)`,
} as const;

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledBadgeProps {
  epSize:  EpSize5;
  epColor: EpColor;
}

const StyledBadge = styled(MuiBadge, {
  shouldForwardProp: (prop) => prop !== 'epSize' && prop !== 'epColor',
})<StyledBadgeProps>(({ epSize, epColor }) => ({
  // ── Standard badge pip ──────────────────────────────────────────────────
  '& .MuiBadge-badge': {
    height:          TOKEN.height(epSize),
    minWidth:        TOKEN.minWidth(epSize),
    fontSize:        TOKEN.fontSize(epSize),
    padding:         `0 ${TOKEN.paddingX(epSize)}`,
    borderRadius:    TOKEN.borderRadius(),
    backgroundColor: TOKEN.background(epColor),
    color:           TOKEN.badgeColor(epColor),
    // Framework reset — MUI sets line-height: 1 and font-family: inherit; we rely on
    // our fontSize token and the inherited font-family from the root.
    lineHeight: 1,
  },

  // ── Dot variant ─────────────────────────────────────────────────────────
  // MUI adds .MuiBadge-dot alongside .MuiBadge-badge for variant="dot";
  // the dot class overrides sizing to produce an indicator circle.
  '& .MuiBadge-dot': {
    height:   TOKEN.dotSize(epSize),
    minWidth: TOKEN.dotSize(epSize),
    padding:  0,
  },
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Badge — overlaid indicator anchored to a child element.
 *
 * `standard` variant shows a count or content. `dot` is a presence indicator only.
 * Wraps any child element — commonly used with Avatar, Icon, or IconButton.
 *
 * Spec: docs/specs/components/badge.md
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge(
    {
      variant       = 'standard',
      size          = 'md',
      color         = 'primary',
      overlap       = 'rectangular',
      anchorOrigin  = { vertical: 'top', horizontal: 'right' },
      badgeContent,
      max           = 99,
      showZero      = false,
      invisible     = false,
      className,
      sx,
      children,
    },
    ref
  ) {
    return (
      <StyledBadge
        ref={ref}
        epSize={size}
        epColor={color}
        // Pass color="default" — all colors controlled via TOKEN overrides on .MuiBadge-badge
        color="default"
        variant={variant}
        overlap={overlap}
        anchorOrigin={anchorOrigin}
        badgeContent={badgeContent}
        max={max}
        showZero={showZero}
        invisible={invisible}
        className={className}
        sx={sx}
      >
        {children}
      </StyledBadge>
    );
  }
);

Badge.displayName = 'Badge';

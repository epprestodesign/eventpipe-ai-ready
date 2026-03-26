import { forwardRef } from 'react';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import type { SurfaceProps, SurfaceVariant, SurfaceBorder } from './Surface.types';
type SurfaceRadius = NonNullable<SurfaceProps['radius']>;
type SurfacePadding = NonNullable<SurfaceProps['padding']>;

// ─── Token maps ──────────────────────────────────────────────────────────────
// All values reference existing semantic tokens — no component token file needed.

const VARIANT_BG: Record<SurfaceVariant, string> = {
  plain:   'var(--ep-semantic-color-background-paper)',
  raised:  'var(--ep-semantic-color-background-paper)',
  overlay: 'var(--ep-semantic-color-surface-overlay)',
  panel:   'var(--ep-semantic-color-surface-overlay)',
  modal:   'var(--ep-semantic-color-surface-overlay)',
};

const VARIANT_SHADOW: Record<SurfaceVariant, string> = {
  plain:   'none',
  raised:  'var(--ep-semantic-elevation-raised)',
  overlay: 'var(--ep-semantic-elevation-overlay)',
  panel:   'var(--ep-semantic-elevation-panel)',
  modal:   'var(--ep-semantic-elevation-modal)',
};

const VARIANT_RADIUS: Record<SurfaceVariant, string> = {
  plain:   'var(--ep-semantic-radius-md)',
  raised:  'var(--ep-semantic-radius-lg)',
  overlay: 'var(--ep-semantic-radius-lg)',
  panel:   'var(--ep-semantic-radius-xl)',
  modal:   'var(--ep-semantic-radius-xl)',
};

const BORDER_MAP: Record<SurfaceBorder, string> = {
  none:    'none',
  default: '1px solid var(--ep-semantic-color-border-default)',
  strong:  '1px solid var(--ep-semantic-color-border-strong)',
};

const RADIUS_MAP: Record<SurfaceRadius, string> = {
  none: '0',
  xs:   'var(--ep-semantic-radius-xs)',
  sm:   'var(--ep-semantic-radius-sm)',
  md:   'var(--ep-semantic-radius-md)',
  lg:   'var(--ep-semantic-radius-lg)',
  xl:   'var(--ep-semantic-radius-xl)',
  pill: 'var(--ep-semantic-radius-pill)',
};

const PADDING_MAP: Record<SurfacePadding, string> = {
  none: '0',
  xs:   '8px',
  sm:   '12px',
  md:   '16px',
  lg:   '24px',
};

// ─── Styled root ─────────────────────────────────────────────────────────────

interface StyledSurfaceProps {
  epVariant: SurfaceVariant;
  epBorder: SurfaceBorder;
  epRadius: string;
  epPadding: string;
}

const StyledSurface = styled(MuiBox, {
  shouldForwardProp: (prop) =>
    prop !== 'epVariant' &&
    prop !== 'epBorder' &&
    prop !== 'epRadius' &&
    prop !== 'epPadding',
})<StyledSurfaceProps>(({ epVariant, epBorder, epRadius, epPadding }) => ({
  backgroundColor: VARIANT_BG[epVariant],
  boxShadow:       VARIANT_SHADOW[epVariant],
  borderRadius:    epRadius || VARIANT_RADIUS[epVariant],
  border:          BORDER_MAP[epBorder],
  padding:         epPadding,
}));

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Surface — semantic container that communicates visual depth through variant.
 *
 * Replaces generic MUI Paper usage. Not a layout primitive (use Box/Stack)
 * and not a structured card (use Card for header/footer/actions).
 */
export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  function Surface(
    {
      variant   = 'plain',
      border    = 'none',
      radius,
      padding   = 'none',
      component = 'div',
      className,
      sx,
      children,
    },
    ref
  ) {
    return (
      <StyledSurface
        ref={ref}
        component={component}
        epVariant={variant}
        epBorder={border}
        epRadius={radius ? RADIUS_MAP[radius] : ''}
        epPadding={PADDING_MAP[padding]}
        className={className}
        sx={sx}
      >
        {children}
      </StyledSurface>
    );
  }
);

Surface.displayName = 'Surface';

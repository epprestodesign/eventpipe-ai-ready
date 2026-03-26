import { forwardRef } from 'react';
import MuiLink from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import type { LinkProps, LinkColor } from './Link.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-link-* custom properties.

const TOKEN = {
  fontFamily:           () => `var(--ep-component-link-font-family)`,
  color:                () => `var(--ep-component-link-color)`,
  colorHover:           () => `var(--ep-component-link-color-hover)`,
  colorVisited:         () => `var(--ep-component-link-color-visited)`,
  colorSecondary:       () => `var(--ep-component-link-color-secondary)`,
  colorSecondaryHover:  () => `var(--ep-component-link-color-secondary-hover)`,
  focusColor:           () => `var(--ep-component-link-focus-ring-color)`,
  focusWidth:           () => `var(--ep-component-link-focus-ring-width)`,
  focusOffset:          () => `var(--ep-component-link-focus-ring-offset)`,
} as const;

// ─── Styled Link ───────────────────────────────────────────────────────────

interface StyledLinkProps {
  epColor: LinkColor;
}

const StyledLink = styled(MuiLink, {
  shouldForwardProp: (prop) => prop !== 'epColor',
})<StyledLinkProps>(({ epColor }) => ({
  // Explicit fontFamily — Link is an inline element that inherits font from context.
  // In isolated environments (Storybook canvas, email templates, portals), no ancestor
  // may provide the design system font. Explicit token guarantees correct typeface.
  // Consistent with Button's fontFamily approach (also token-driven, not 'inherit').
  fontFamily: TOKEN.fontFamily(),

  // Color by variant — 'inherit' falls through to parent color
  color: epColor === 'secondary'
    ? TOKEN.colorSecondary()
    : epColor === 'inherit'
      ? 'inherit'
      : TOKEN.color(),

  // Framework reset — MUI Link uses palette color lookup; override with token
  '&:hover': {
    color: epColor === 'secondary'
      ? TOKEN.colorSecondaryHover()
      : epColor === 'inherit'
        ? 'inherit'
        : TOKEN.colorHover(),
  },

  '&:visited': {
    color: epColor === 'secondary'
      ? TOKEN.colorSecondary()
      : epColor === 'inherit'
        ? 'inherit'
        : TOKEN.colorVisited(),
  },

  '&:focus-visible': {
    // Framework convention — 2px width and 2px offset are structural focus ring
    // geometry consistent with all EP interactive controls; color is the design decision.
    outline:       `${TOKEN.focusWidth()} solid ${TOKEN.focusColor()}`,
    outlineOffset: TOKEN.focusOffset(),
    borderRadius:  '2px', // structural — slight rounding on the focus ring
  },
}));

// ─── Link ─────────────────────────────────────────────────────────────────

/**
 * Link — inline typographic link element.
 *
 * Renders as `<a>` by default. Keyboard focusable with EP focus ring.
 * Color variants: primary (brand.primary), secondary (brand.secondary), inherit (parent color).
 * Underline: 'hover' (default), 'always', or 'none'.
 *
 * For external links: `target="_blank" rel="noopener noreferrer"`.
 *
 * Spec: docs/specs/components/link.md
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(
    {
      href,
      onClick,
      underline = 'hover',
      color     = 'primary',
      variant,
      target,
      rel,
      className,
      sx,
      children,
    },
    ref
  ) {
    return (
      <StyledLink
        ref={ref}
        href={href}
        onClick={onClick}
        underline={underline}
        // Pass color="inherit" to MUI to disable its palette lookup — StyledLink handles coloring
        color="inherit"
        epColor={color}
        variant={variant}
        target={target}
        rel={rel}
        className={className}
        sx={sx}
      >
        {children}
      </StyledLink>
    );
  }
);

Link.displayName = 'Link';

import { forwardRef } from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Icon } from '../Icon';
import type { BreadcrumbsProps, BreadcrumbItemProps, BreadcrumbLinkProps } from './Breadcrumbs.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-breadcrumbs-* custom properties.

const TOKEN = {
  fontFamily:      () => `var(--ep-component-breadcrumbs-font-family)`,
  itemColor:       () => `var(--ep-component-breadcrumbs-item-color)`,
  itemColorActive: () => `var(--ep-component-breadcrumbs-item-color-active)`,
  itemColorHover:  () => `var(--ep-component-breadcrumbs-item-color-hover)`,
  itemFontSize:    () => `var(--ep-component-breadcrumbs-item-font-size)`,
  separatorColor:  () => `var(--ep-component-breadcrumbs-separator-color)`,
  separatorGap:    () => `var(--ep-component-breadcrumbs-separator-gap)`,
  focusColor:      () => `var(--ep-component-breadcrumbs-focus-ring-color)`,
  focusWidth:      () => `var(--ep-component-breadcrumbs-focus-ring-width)`,
  focusOffset:     () => `var(--ep-component-breadcrumbs-focus-ring-offset)`,
} as const;

// ─── Default separator ─────────────────────────────────────────────────────
// chevron-right from EP icon system; span applies separator color so Icon inherits currentColor.

const DEFAULT_SEPARATOR = (
  <span style={{ color: TOKEN.separatorColor(), display: 'flex', alignItems: 'center' }}>
    <Icon name="chevron-right" size="xs" aria-hidden />
  </span>
);

// ─── Styled MuiBreadcrumbs ─────────────────────────────────────────────────

const StyledBreadcrumbs = styled(MuiBreadcrumbs)({
  fontFamily: TOKEN.fontFamily(),
  fontSize:   TOKEN.itemFontSize(),

  // Separator spacing — MUI wraps separator in .MuiBreadcrumbs-separator
  '& .MuiBreadcrumbs-separator': {
    color:      TOKEN.separatorColor(),
    marginLeft: TOKEN.separatorGap(),
    marginRight: TOKEN.separatorGap(),
  },

  // Collapsed ellipsis button — keep consistent color
  '& .MuiBreadcrumbs-ol': {
    flexWrap: 'wrap',
  },
});

// ─── Styled BreadcrumbLink ─────────────────────────────────────────────────

const StyledLink = styled(MuiLink)({
  fontFamily:     TOKEN.fontFamily(),
  color:          TOKEN.itemColor(),
  fontSize:       TOKEN.itemFontSize(),
  textDecoration: 'none',
  cursor:         'pointer',

  '&:hover': {
    color:          TOKEN.itemColorHover(),
    textDecoration: 'underline',
  },

  '&:focus-visible': {
    // Framework convention — 2px width and 2px offset are structural focus ring
    // geometry consistent with all EP interactive controls; color is the design decision.
    outline:       `${TOKEN.focusWidth()} solid ${TOKEN.focusColor()}`,
    outlineOffset: TOKEN.focusOffset(),
    borderRadius:  '2px', // structural — slight rounding on the focus ring
  },
});

// ─── Sub-components ────────────────────────────────────────────────────────

/**
 * BreadcrumbItem — non-interactive current-page crumb (last item).
 *
 * Carries aria-current="page" per ARIA breadcrumb spec.
 * Always the last child of Breadcrumbs.
 *
 * Spec: docs/specs/components/breadcrumbs.md
 */
export const BreadcrumbItem = forwardRef<HTMLSpanElement, BreadcrumbItemProps>(
  function BreadcrumbItem({ children, className, sx }, ref) {
    return (
      <MuiTypography
        ref={ref}
        component="span"
        aria-current="page"
        className={className}
        sx={{
          color:    TOKEN.itemColorActive(),
          fontSize: TOKEN.itemFontSize(),
          ...sx,
        }}
      >
        {children}
      </MuiTypography>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

/**
 * BreadcrumbLink — interactive link crumb.
 *
 * Preceding children in the Breadcrumbs list.
 * Pass `href` for standard navigation or `onClick` for custom handling.
 *
 * Spec: docs/specs/components/breadcrumbs.md
 */
export const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  function BreadcrumbLink({ href, onClick, children, className, sx }, ref) {
    return (
      <StyledLink
        ref={ref}
        href={href}
        onClick={onClick}
        underline="none"
        className={className}
        sx={sx}
      >
        {children}
      </StyledLink>
    );
  }
);

BreadcrumbLink.displayName = 'BreadcrumbLink';

// ─── Breadcrumbs ──────────────────────────────────────────────────────────

/**
 * Breadcrumbs — hierarchical navigation trail.
 *
 * Wraps children in a `<nav aria-label="breadcrumb"><ol>` per ARIA landmark spec.
 * Default separator: `<Icon name="chevron-right" size="xs" />` from EP icon system.
 * Last child should always be `BreadcrumbItem` (non-interactive, aria-current="page").
 * Preceding children should be `BreadcrumbLink` (interactive links).
 *
 * ```tsx
 * <Breadcrumbs aria-label="breadcrumb">
 *   <BreadcrumbLink href="/home">Home</BreadcrumbLink>
 *   <BreadcrumbLink href="/events">Events</BreadcrumbLink>
 *   <BreadcrumbItem>Summer Gala 2026</BreadcrumbItem>
 * </Breadcrumbs>
 * ```
 *
 * Spec: docs/specs/components/breadcrumbs.md
 */
export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  function Breadcrumbs(
    {
      maxItems            = 8,
      itemsBeforeCollapse = 1,
      itemsAfterCollapse  = 1,
      separator           = DEFAULT_SEPARATOR,
      'aria-label': ariaLabel = 'breadcrumb',
      className,
      sx,
      children,
    },
    ref
  ) {
    return (
      <StyledBreadcrumbs
        ref={ref}
        maxItems={maxItems}
        itemsBeforeCollapse={itemsBeforeCollapse}
        itemsAfterCollapse={itemsAfterCollapse}
        separator={separator}
        aria-label={ariaLabel}
        className={className}
        sx={sx}
      >
        {children}
      </StyledBreadcrumbs>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';

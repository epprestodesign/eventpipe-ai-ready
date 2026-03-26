import { forwardRef } from 'react';
import type { KeyboardEvent } from 'react';
import MuiCard from '@mui/material/Card';
import MuiCardHeader from '@mui/material/CardHeader';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from './Card.types';
import type { CardVariant } from '../types/shared';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-card-* custom properties.

const TOKEN = {
  // Root geometry
  borderRadius:    () => `var(--ep-component-card-border-radius)`,
  borderWidth:     () => `var(--ep-component-card-border-width)`,
  // Variant-specific surface and border
  background:      (v: CardVariant) => `var(--ep-component-card-background-${v})`,
  border:          (v: CardVariant) => `var(--ep-component-card-border-${v})`,
  // Shadow (elevated variant only)
  shadow:          () => `var(--ep-component-card-shadow)`,
  shadowHover:     () => `var(--ep-component-card-shadow-hover)`,
  // Interactive hover overlay
  hoverBackground: () => `var(--ep-component-card-hover-background)`,
  // Header slots
  headerTitleColor:     () => `var(--ep-component-card-header-title-color)`,
  headerSubheaderColor: () => `var(--ep-component-card-header-subheader-color)`,
  headerPaddingY:  () => `var(--ep-component-card-header-padding-y)`,
  headerPaddingX:  () => `var(--ep-component-card-header-padding-x)`,
  headerGap:       () => `var(--ep-component-card-header-gap)`,
  // Content area
  contentColor:    () => `var(--ep-component-card-content-color)`,
  contentPaddingY: () => `var(--ep-component-card-content-padding-y)`,
  contentPaddingX: () => `var(--ep-component-card-content-padding-x)`,
  // Footer area
  footerPaddingY:  () => `var(--ep-component-card-footer-padding-y)`,
  footerPaddingX:  () => `var(--ep-component-card-footer-padding-x)`,
  footerGap:       () => `var(--ep-component-card-footer-gap)`,
  // Shared focus ring (interactive mode)
  focusColor:  () => `var(--ep-component-card-focus-ring-color)`,
  focusWidth:  () => `var(--ep-component-card-focus-ring-width)`,
  focusOffset: () => `var(--ep-component-card-focus-ring-offset)`,
} as const;

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledCardProps {
  epVariant:     CardVariant;
  epInteractive: boolean;
}

const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== 'epVariant' && prop !== 'epInteractive',
})<StyledCardProps>(({ epVariant, epInteractive }) => ({
  // Geometry
  borderRadius:    TOKEN.borderRadius(),
  // Surface — variant-specific background and border
  backgroundColor: TOKEN.background(epVariant),
  border:          `${TOKEN.borderWidth()} solid ${TOKEN.border(epVariant)}`,
  // Shadow — elevated uses the shadow token; outlined/filled none (CSS keyword, not a design value)
  boxShadow:       epVariant === 'elevated' ? TOKEN.shadow() : 'none',
  // Smooth transitions for interactive variant
  transition:      'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',

  // ─── Interactive states ────────────────────────────────────────────────
  ...(epInteractive && {
    cursor: 'pointer',

    '&:hover': {
      // Layer hover overlay via background-image so it stacks transparently
      // over the variant's backgroundColor without replacing it
      backgroundImage: `linear-gradient(${TOKEN.hoverBackground()}, ${TOKEN.hoverBackground()})`,
      // Elevated cards deepen their shadow on hover; others stay shadowless
      boxShadow: epVariant === 'elevated' ? TOKEN.shadowHover() : 'none',
    },

    '&:focus-visible': {
      outline:       `${TOKEN.focusWidth()} solid ${TOKEN.focusColor()}`,
      outlineOffset: TOKEN.focusOffset(),
    },
  }),
}));

// ─── Styled CardHeader ─────────────────────────────────────────────────────
interface StyledCardHeaderProps {
  epDisablePadding: boolean;
}

const StyledCardHeader = styled(MuiCardHeader, {
  shouldForwardProp: (prop) => prop !== 'epDisablePadding',
})<StyledCardHeaderProps>(({ epDisablePadding }) => ({
  // Padding — controlled by token or zeroed when disablePadding
  padding: epDisablePadding
    ? 0
    : `${TOKEN.headerPaddingY()} ${TOKEN.headerPaddingX()}`,

  // Gap between avatar and content block
  '& .MuiCardHeader-avatar': {
    marginRight: TOKEN.headerGap(),
  },

  // Title color
  '& .MuiCardHeader-title': {
    color: TOKEN.headerTitleColor(),
  },

  // Subheader color
  '& .MuiCardHeader-subheader': {
    color: TOKEN.headerSubheaderColor(),
  },

  // Framework reset — MUI sets marginTop: -4px on action slot for alignment
  '& .MuiCardHeader-action': {
    marginTop: 0,
    marginRight: 0,
    alignSelf: 'center',
  },
}));

// ─── Styled CardContent ────────────────────────────────────────────────────
interface StyledCardContentProps {
  epDisablePadding: boolean;
}

const StyledCardContent = styled(MuiCardContent, {
  shouldForwardProp: (prop) => prop !== 'epDisablePadding',
})<StyledCardContentProps>(({ epDisablePadding }) => ({
  padding: epDisablePadding
    ? 0
    : `${TOKEN.contentPaddingY()} ${TOKEN.contentPaddingX()}`,

  color: TOKEN.contentColor(),

  // Framework reset — MUI adds paddingBottom: 24px to last CardContent child;
  // we normalize to our token value so spacing is consistent.
  '&:last-child': {
    paddingBottom: epDisablePadding ? 0 : TOKEN.contentPaddingY(),
  },
}));

// ─── Styled CardFooter ─────────────────────────────────────────────────────
interface StyledCardFooterProps {
  epDisableSpacing: boolean;
}

const StyledCardFooter = styled(MuiCardActions, {
  shouldForwardProp: (prop) => prop !== 'epDisableSpacing',
})<StyledCardFooterProps>(({ epDisableSpacing }) => ({
  padding: `${TOKEN.footerPaddingY()} ${TOKEN.footerPaddingX()}`,
  gap: epDisableSpacing ? 0 : TOKEN.footerGap(),
  // Framework reset — MUI CardActions adds marginLeft on children via > :not(:first-of-type)
  '& > :not(:first-of-type)': {
    marginLeft: 0,
  },
}));

// ─── Components ───────────────────────────────────────────────────────────

/**
 * Card — surface container component.
 *
 * Variants: elevated (shadow) | outlined (border) | filled (neutral bg).
 * Sub-components: CardHeader, CardContent, CardFooter.
 *
 * Interactive cards: pass `interactive` + `onClick`. The card gains
 * role="button", tabIndex=0, hover, and focus-ring behavior.
 * Do NOT use `interactive` when the card contains other interactive controls.
 *
 * Spec: docs/specs/components/card.md
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  function Card(
    {
      variant     = 'elevated',
      interactive = false,
      onClick,
      role,
      tabIndex,
      className,
      sx,
      children,
    },
    ref
  ) {
    const handleKeyDown = interactive
      ? (e: KeyboardEvent<HTMLDivElement>) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            // Cast to MouseEvent for the onClick signature — keyboard activation mirrors click
            onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>);
          }
        }
      : undefined;

    return (
      <StyledCard
        ref={ref}
        epVariant={variant}
        epInteractive={interactive}
        // elevation=0 — box-shadow fully controlled by our TOKEN overrides
        elevation={0}
        // Always pass variant="elevation" to MUI — we manage all visual variants via CSS tokens
        variant="elevation"
        onClick={interactive ? onClick : undefined}
        onKeyDown={handleKeyDown}
        role={interactive ? (role ?? 'button') : role}
        tabIndex={interactive ? (tabIndex ?? 0) : tabIndex}
        className={className}
        sx={sx}
      >
        {children}
      </StyledCard>
    );
  }
);

Card.displayName = 'Card';

// ─── CardHeader ───────────────────────────────────────────────────────────

/**
 * CardHeader — title / subheader / avatar / action row.
 * All slots are optional. Renders nothing if no props are passed.
 * Spec: docs/specs/components/card.md
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader(
    { title, subheader, avatar, action, disablePadding = false, className, sx },
    ref
  ) {
    return (
      <StyledCardHeader
        ref={ref}
        epDisablePadding={disablePadding}
        title={title}
        subheader={subheader}
        avatar={avatar}
        action={action}
        className={className}
        sx={sx}
      />
    );
  }
);

CardHeader.displayName = 'CardHeader';

// ─── CardContent ──────────────────────────────────────────────────────────

/**
 * CardContent — primary content area with token-driven padding.
 * Use `disablePadding` for flush content like images or code blocks.
 * Spec: docs/specs/components/card.md
 */
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  function CardContent(
    { disablePadding = false, className, sx, children },
    ref
  ) {
    return (
      <StyledCardContent
        ref={ref}
        epDisablePadding={disablePadding}
        className={className}
        sx={sx}
      >
        {children}
      </StyledCardContent>
    );
  }
);

CardContent.displayName = 'CardContent';

// ─── CardFooter ───────────────────────────────────────────────────────────

/**
 * CardFooter — action strip at the bottom of a Card.
 * Wraps MuiCardActions. Use for Button / icon-button rows.
 * Spec: docs/specs/components/card.md
 */
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  function CardFooter(
    { disableSpacing = false, className, sx, children },
    ref
  ) {
    return (
      <StyledCardFooter
        ref={ref}
        epDisableSpacing={disableSpacing}
        // Pass disableSpacing to MUI so it suppresses its own margin override
        disableSpacing={disableSpacing}
        className={className}
        sx={sx}
      >
        {children}
      </StyledCardFooter>
    );
  }
);

CardFooter.displayName = 'CardFooter';

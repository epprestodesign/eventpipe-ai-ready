import { forwardRef } from 'react';
import MuiButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import type { ButtonProps } from './Button.types';
import type { EpColor, EpSize5, ButtonVariant } from '../types/shared';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-button-* custom properties.
// No raw hex, no hardcoded px values, no semantic/primitive tokens consumed directly.

const TOKEN = {
  // Typography
  fontFamily: () => `var(--ep-component-button-font-family)`,
  fontSize:   (size: EpSize5) => `var(--ep-component-button-font-size-${size})`,
  // Padding
  py: (size: EpSize5) => `var(--ep-component-button-padding-${size}-y)`,
  px: (size: EpSize5) => `var(--ep-component-button-padding-${size}-x)`,
  // Icon slot gap (between slot wrapper and label text)
  iconGap: (size: EpSize5) => `var(--ep-component-button-icon-gap-${size})`,
  // Variant+color backgrounds, text, border
  bg:       (v: ButtonVariant, c: EpColor) => `var(--ep-component-button-${v}-${c}-background)`,
  bgHover:  (v: ButtonVariant, c: EpColor) => `var(--ep-component-button-${v}-${c}-background-hover)`,
  text:     (v: ButtonVariant, c: EpColor) => `var(--ep-component-button-${v}-${c}-text)`,
  border:   (v: ButtonVariant, c: EpColor) => `var(--ep-component-button-${v}-${c}-border)`,
  // Shared
  radius:          () => `var(--ep-component-button-border-radius)`,
  focusColor:  () => `var(--ep-component-button-focus-ring-color)`,
  focusWidth:  () => `var(--ep-component-button-focus-ring-width)`,
  focusOffset: () => `var(--ep-component-button-focus-ring-offset)`,
  disabledBg:  () => `var(--ep-component-button-disabled-background)`,
  disabledText:() => `var(--ep-component-button-disabled-text)`,
} as const;

// ── Spinner size — matches the semantic icon scale per button size ──────────
// Icon sizes: xs=12  sm=16  md=20  lg=24  xl=32
// Spinner matches exactly so the loading indicator occupies the same visual
// weight as an icon slot at the same tier.
const SPINNER_SIZE: Record<EpSize5, number> = {
  xs: 12, sm: 16, md: 20, lg: 24, xl: 32,
};

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledButtonProps {
  epVariant: ButtonVariant;
  epColor: EpColor;
  epSize: EpSize5;
  epLoading: boolean;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) =>
    prop !== 'epVariant' && prop !== 'epColor' && prop !== 'epSize' && prop !== 'epLoading',
})<StyledButtonProps>(({ epVariant, epColor, epSize, epLoading }) => ({
  // ── Typography reset ───────────────────────────────────────────────────
  // fontFamily: explicitly set via token — do NOT use 'inherit'.
  // MUI's theme sets Roboto which bleeds through even after 'inherit' if
  // there is no ancestor explicitly setting Inter on the body/html.
  textTransform: 'none',
  fontFamily:    TOKEN.fontFamily(),
  fontSize:      TOKEN.fontSize(epSize),
  fontWeight:    500,
  lineHeight:    1.5,
  letterSpacing: '0.02em',

  // ── Geometry ───────────────────────────────────────────────────────────
  padding:      `${TOKEN.py(epSize)} ${TOKEN.px(epSize)}`,
  borderRadius: TOKEN.radius(),

  // ── Variant + color ────────────────────────────────────────────────────
  backgroundColor: TOKEN.bg(epVariant, epColor),
  color:           TOKEN.text(epVariant, epColor),
  border:          `1px solid ${TOKEN.border(epVariant, epColor)}`,

  // ── Transitions ────────────────────────────────────────────────────────
  transition: 'background-color 150ms ease, box-shadow 150ms ease',
  boxShadow:  'none',

  '&:hover': {
    backgroundColor: TOKEN.bgHover(epVariant, epColor),
    border:          `1px solid ${TOKEN.border(epVariant, epColor)}`,
    boxShadow:       'none',
  },

  '&:active:not(:disabled):not([aria-disabled="true"])': {
    backgroundColor: TOKEN.bgHover(epVariant, epColor),
    boxShadow:       'none',
  },

  '&:focus-visible': {
    outline:       `${TOKEN.focusWidth()} solid ${TOKEN.focusColor()}`,
    outlineOffset: TOKEN.focusOffset(),
  },

  '&:disabled, &[aria-disabled="true"]': {
    backgroundColor: epVariant === 'contained' ? TOKEN.disabledBg() : 'transparent',
    color:           TOKEN.disabledText(),
    borderColor:     'transparent',
    cursor:          epLoading ? 'wait' : 'not-allowed',
    pointerEvents:   epLoading ? 'none' : 'auto',
    // Reset opacity explicitly — MUI applies its own disabled opacity on
    // ButtonBase. EP disabled appearance is communicated via token colors only,
    // never via opacity. Avoids double-attenuation on outlined/text variants.
    opacity:         1,
  },

  // ── Label row (ep-button-label) ────────────────────────────────────────
  // The label span wraps startSlot + children + endSlot.
  // inline-flex + align-items:center ensures icons and text share a common
  // midline. gap is tokenized per size so slot spacing scales with the button.
  '& .ep-button-label': {
    display:    'inline-flex',
    alignItems: 'center',
    gap:        TOKEN.iconGap(epSize),
  },

  // ── Icon slot (ep-button-slot) ─────────────────────────────────────────
  // Wraps the SVG icon node. Rules:
  //   display:inline-flex + align-items/justify-content:center → icon centered in wrapper
  //   line-height:0 → collapses the inline baseline gap that would otherwise
  //                   add phantom vertical space beneath a block-display SVG
  //   flex-shrink:0  → icon never compressed by long label text
  // width/height intentionally left auto — icon is sized by its own
  // --ep-semantic-icon-size-{size} token (set as font-size on the SVG).
  '& .ep-button-slot': {
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    lineHeight:     0,
    flexShrink:     0,
  },

  // ── Loading state ──────────────────────────────────────────────────────
  // Label row hidden via opacity:0 (not display:none) so button dimensions
  // are preserved. Spinner is absolutely centred over the hidden label area.
  // Slot geometry (inline-flex + align-items + line-height:0) mirrors
  // .ep-button-slot to eliminate any sub-pixel baseline drift.
  ...(epLoading && {
    position: 'relative',
    '& .ep-button-label': {
      display:    'inline-flex',
      alignItems: 'center',
      gap:        TOKEN.iconGap(epSize),
      opacity:    0,
    },
    '& .ep-button-spinner': {
      position:       'absolute',
      top:            '50%',
      left:           '50%',
      transform:      'translate(-50%, -50%)',
      // Slot geometry — mirrors .ep-button-slot so spinner sits on same
      // midline as icons and eliminates baseline gap beneath inline-flex SVG.
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      lineHeight:     0,
      // Restore color — the disabled rule on the root sets disabledText,
      // which would otherwise inherit into CircularProgress color="inherit".
      color:          TOKEN.text(epVariant, epColor),
    },
  }),
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Button — Category 1 (Action Controls), 5-tier sizing.
 *
 * Slot layout:
 *   .ep-button-label   → inline-flex row; gap from token; vertically centred
 *   .ep-button-slot    → icon wrapper; inline-flex; line-height:0; flex-shrink:0
 *
 * Typography:
 *   fontFamily explicitly set to the Inter token (not 'inherit') so the
 *   correct stack is guaranteed regardless of ancestor font-family.
 *
 * Icon rendering:
 *   Icon component already sets display:block + flexShrink:0 on the SVG.
 *   The ep-button-slot wrapper adds line-height:0 to eliminate the
 *   baseline gap that block-display inline elements otherwise create.
 *
 * Loading:
 *   Label row hidden via opacity. Spinner centered absolutely.
 *   Spinner size aligned to canonical icon scale per button size.
 *
 * Color coverage:
 *   contained  — all 7 colors (primary, secondary, error, warning, info, success, neutral)
 *   outlined   — primary, error, neutral only
 *   text       — primary, error, neutral only
 *   soft       — primary, error, neutral only
 *   Unsupported color+variant combos fall back to color="primary" and emit a
 *   dev-mode console.warn. Full 7-color coverage for outlined/text/soft is tracked
 *   in the hardening backlog.
 *
 * Spec: docs/specs/components/button.md
 * Sizing: docs/decisions/005-sizing-scale.md — Category 1
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant    = 'contained',
      size       = 'md',
      color      = 'primary',
      loading    = false,
      disabled   = false,
      fullWidth  = false,
      startSlot,
      endSlot,
      href,
      component,
      onClick,
      className,
      sx,
      children,
      'aria-label': ariaLabel,
    },
    ref
  ) {
    // Fallback to 'primary' for colors not yet fully tokenised.
    // outlined/text/soft only have tokens for primary, error, neutral.
    // contained has full 7-color coverage and is unaffected.
    const resolvedColor: EpColor =
      (variant === 'outlined' || variant === 'text' || variant === 'soft') &&
      (color === 'secondary' || color === 'info' || color === 'warning' || color === 'success')
        ? 'primary'
        : color;

    // Dev warning — silent color fallback.
    // Fires when a consumer passes a color that has no tokens for the chosen variant,
    // so they can see the mismatch immediately rather than debugging a visual regression.
    if (process.env.NODE_ENV !== 'production' && resolvedColor !== color) {
      console.warn(
        `[EP Button] color="${color}" is not yet tokenised for variant="${variant}". ` +
        `Falling back to color="primary". ` +
        `Supported colors for ${variant}: primary, error, neutral.`
      );
    }

    const isDisabled = disabled || loading;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const polymorphicProps = { component: component ?? (href ? 'a' : 'button') } as any;

    return (
      <StyledButton
        {...polymorphicProps}
        ref={ref}
        epVariant={variant}
        epColor={resolvedColor}
        epSize={size}
        epLoading={loading}
        variant="contained"
        disableRipple={false}
        disableElevation
        fullWidth={fullWidth}
        disabled={disabled}
        aria-disabled={loading ? true : undefined}
        aria-busy={loading ? true : undefined}
        aria-label={ariaLabel}
        href={href}
        onClick={isDisabled ? undefined : onClick}
        className={className}
        sx={sx}
        startIcon={undefined}
        endIcon={undefined}
      >
        {loading && (
          // ep-button-spinner: plain wrapper handles absolute centering.
          // CircularProgress MUST be a child, not the spinner root, because
          // MUI's indeterminate animation applies transform:rotate() to the
          // CircularProgress root element. CSS animations override static
          // transform declarations on the same element, which would nullify
          // translate(-50%,-50%). Keeping them on separate elements avoids
          // the conflict entirely.
          <span className="ep-button-spinner" aria-hidden="true">
            <CircularProgress
              size={SPINNER_SIZE[size]}
              color="inherit"
            />
          </span>
        )}
        {/* ep-button-label: flex row containing startSlot, children, endSlot */}
        <span className="ep-button-label">
          {startSlot && (
            // ep-button-slot: icon wrapper — line-height:0 kills baseline gap
            <span className="ep-button-slot" aria-hidden="true">
              {startSlot}
            </span>
          )}
          {children}
          {endSlot && (
            <span className="ep-button-slot" aria-hidden="true">
              {endSlot}
            </span>
          )}
        </span>
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

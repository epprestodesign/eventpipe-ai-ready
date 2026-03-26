import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import type { TypographyProps, TypographyVariant, TypographyColor, TypographyAlign } from './Typography.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled from --ep-semantic-typography-* and --ep-semantic-color-text-* custom properties.

const TOKEN = {
  fontFamily: () => `var(--ep-semantic-typography-font-family)`,
  fontSize:   (v: TypographyVariant) => `var(--ep-semantic-typography-${v}-font-size)`,
  fontWeight: (v: TypographyVariant) => `var(--ep-semantic-typography-${v}-font-weight)`,
  lineHeight: (v: TypographyVariant) => `var(--ep-semantic-typography-${v}-line-height)`,
  color:      (c: TypographyColor)   => `var(--ep-semantic-color-text-${c})`,
} as const;

// ─── Variant → default HTML element map ────────────────────────────────────
const VARIANT_ELEMENT_MAP: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  display:   'h1',
  h1:        'h1',
  h2:        'h2',
  h3:        'h3',
  h4:        'h4',
  h5:        'h5',
  h6:        'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1:     'p',
  body2:     'p',
  caption:   'span',
  overline:  'span',
};

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledTypographyProps {
  epVariant:      TypographyVariant;
  epColor:        TypographyColor;
  epAlign:        TypographyAlign;
  epNoWrap:       boolean;
  epGutterBottom: boolean;
}

const StyledTypography = styled('span', {
  shouldForwardProp: (prop) =>
    prop !== 'epVariant' &&
    prop !== 'epColor' &&
    prop !== 'epAlign' &&
    prop !== 'epNoWrap' &&
    prop !== 'epGutterBottom',
})<StyledTypographyProps>(({ epVariant, epColor, epAlign, epNoWrap, epGutterBottom }) => ({
  // Typography tokens
  // Explicit fontFamily — Typography may render in isolated contexts (Storybook canvas,
  // portals, email templates) with no design-system ancestor providing the font stack.
  // Consistent with Button, Link, DatePicker. preview-head.html also loads Inter globally
  // so inheritance works for all other components.
  fontFamily: TOKEN.fontFamily(),
  fontSize:   TOKEN.fontSize(epVariant),
  fontWeight: TOKEN.fontWeight(epVariant),
  lineHeight: TOKEN.lineHeight(epVariant),
  color:      TOKEN.color(epColor),

  // Alignment
  textAlign: epAlign,

  // Framework reset — no default margins
  margin: 0,
  padding: 0,

  // Gutter bottom
  ...(epGutterBottom && {
    marginBottom: '0.35em',
  }),

  // No wrap / truncation
  ...(epNoWrap && {
    overflow:     'hidden',
    textOverflow: 'ellipsis',
    whiteSpace:   'nowrap',
  }),

  // Overline: uppercase + letter-spacing
  ...(epVariant === 'overline' && {
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  }),
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Typography — renders text with design-system typography tokens.
 *
 * Renders the correct semantic HTML element by default based on variant.
 * The `component` prop overrides the element without losing styles.
 *
 * Spec: docs/specs/components/typography.md
 */
export const Typography = forwardRef<HTMLElement, TypographyProps>(
  function Typography(
    {
      variant      = 'body1',
      color        = 'primary',
      align        = 'inherit',
      noWrap       = false,
      gutterBottom = false,
      component,
      children,
      className,
      sx,
    },
    ref
  ) {
    const Element = component ?? VARIANT_ELEMENT_MAP[variant];

    return (
      <StyledTypography
        as={Element}
        ref={ref}
        epVariant={variant}
        epColor={color}
        epAlign={align}
        epNoWrap={noWrap}
        epGutterBottom={gutterBottom}
        className={className}
        sx={sx}
      >
        {children}
      </StyledTypography>
    );
  }
);

Typography.displayName = 'Typography';

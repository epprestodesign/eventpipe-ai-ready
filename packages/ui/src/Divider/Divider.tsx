import { forwardRef } from 'react';
import MuiDivider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import type { DividerProps } from './Divider.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-divider-* custom properties.

const TOKEN = {
  color:        () => `var(--ep-component-divider-color)`,
  thickness:    () => `var(--ep-component-divider-thickness)`,
  insetIndent:  () => `var(--ep-component-divider-inset-indent)`,
  middleIndent: () => `var(--ep-component-divider-middle-indent)`,
  textColor:    () => `var(--ep-component-divider-text-color)`,
  textFontSize: () => `var(--ep-component-divider-text-font-size)`,
  textGap:      () => `var(--ep-component-divider-text-gap)`,
} as const;

// ─── Styled root ──────────────────────────────────────────────────────────

const StyledDivider = styled(MuiDivider)(() => ({
  // Line color — applies to the hr border and is inherited by pseudo-elements
  borderColor: TOKEN.color(),

  // Thickness — Framework reset: MUI uses 'thin' keyword (= 1px); replaced by token
  borderBottomWidth: TOKEN.thickness(),

  // Vertical thickness — Framework reset: MUI uses 'thin' for borderRightWidth on vertical
  '&.MuiDivider-vertical': {
    borderRightWidth: TOKEN.thickness(),
  },

  // Inset indent — Framework reset: MUI default is 72px (list icon + gap column)
  '&.MuiDivider-inset': {
    marginLeft: TOKEN.insetIndent(),
  },

  // Middle indent — horizontal
  '&.MuiDivider-middle:not(.MuiDivider-vertical)': {
    marginLeft:  TOKEN.middleIndent(),
    marginRight: TOKEN.middleIndent(),
  },

  // Middle indent — vertical
  '&.MuiDivider-vertical.MuiDivider-middle': {
    marginTop:    TOKEN.middleIndent(),
    marginBottom: TOKEN.middleIndent(),
  },

  // Text label wrapper — typography
  '& .MuiDivider-wrapper': {
    color:        TOKEN.textColor(),
    fontSize:     TOKEN.textFontSize(),
    paddingLeft:  TOKEN.textGap(),
    paddingRight: TOKEN.textGap(),
  },

  // Framework reset — MUI hardcodes palette.divider in the ::before / ::after
  // border-top of text dividers; override with our token so the color is consistent.
  '&.MuiDivider-withChildren::before, &.MuiDivider-withChildren::after': {
    borderTopColor: TOKEN.color(),
  },
  '&.MuiDivider-withChildren.MuiDivider-vertical::before, &.MuiDivider-withChildren.MuiDivider-vertical::after': {
    borderLeftColor: TOKEN.color(),
  },
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Divider — visual separator between sections or list items.
 *
 * Renders as `<hr>` (or `<div role="separator">` when children are present).
 * Supports horizontal and vertical orientations, three indent variants,
 * and an optional text label with flanking lines.
 *
 * No `size` or `color` props — single thickness and color token throughout.
 *
 * Spec: docs/specs/components/divider.md
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  function Divider(
    {
      orientation = 'horizontal',
      variant     = 'fullWidth',
      textAlign   = 'center',
      flexItem    = false,
      className,
      sx,
      children,
    },
    ref
  ) {
    return (
      <StyledDivider
        ref={ref}
        orientation={orientation}
        variant={variant}
        textAlign={textAlign}
        flexItem={flexItem}
        className={className}
        sx={sx}
      >
        {children}
      </StyledDivider>
    );
  }
);

Divider.displayName = 'Divider';

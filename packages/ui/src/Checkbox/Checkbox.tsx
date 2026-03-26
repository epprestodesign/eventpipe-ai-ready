import { forwardRef } from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import type { CheckboxProps } from './Checkbox.types';
import type { EpColor, EpSize3 } from '../types/shared';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-checkbox-* custom properties.

const TOKEN = {
  iconSize:         (s: EpSize3) => `var(--ep-component-checkbox-icon-${s})`,
  color:            (c: EpColor) => `var(--ep-component-checkbox-color-${c})`,
  uncheckedBorder:  ()           => `var(--ep-component-checkbox-unchecked-border)`,
  uncheckedHoverBg: ()           => `var(--ep-component-checkbox-unchecked-hover-bg)`,
  disabledColor:    ()           => `var(--ep-component-checkbox-disabled-color)`,
  disabledBorder:   ()           => `var(--ep-component-checkbox-disabled-border)`,
  focusRingWidth:   ()           => `var(--ep-component-checkbox-focus-ring-width)`,
  focusRingOffset:  ()           => `var(--ep-component-checkbox-focus-ring-offset)`,
} as const;

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledCheckboxProps {
  epSize:  EpSize3;
  epColor: EpColor;
}

const StyledCheckbox = styled(MuiCheckbox, {
  shouldForwardProp: (prop) => prop !== 'epSize' && prop !== 'epColor',
})<StyledCheckboxProps>(({ epSize, epColor }) => ({
  // Base icon size — applies to the SVG rendered by MUI's unchecked/checked icons
  '& .MuiSvgIcon-root': {
    fontSize: TOKEN.iconSize(epSize),
  },

  // Unchecked: icon color = border token (outlines the empty square/indeterminate dash)
  color: TOKEN.uncheckedBorder(),

  // Checked / indeterminate: icon color = active component color token
  '&.Mui-checked, &.MuiCheckbox-indeterminate': {
    color: TOKEN.color(epColor),
  },

  // Hover: subtle background ripple on the ButtonBase touch area
  '&:hover': {
    backgroundColor: TOKEN.uncheckedHoverBg(),
  },
  // Framework reset — MUI adds its own hover background via the ripple mechanism;
  // we replace it with the action.hover token above.
  '&:hover .MuiTouchRipple-root': {
    color: TOKEN.color(epColor),
  },

  // Focus ring — on the root ButtonBase element (overflow:visible, not clipped)
  '&.Mui-focusVisible': {
    outline:       `${TOKEN.focusRingWidth()} solid ${TOKEN.color(epColor)}`,
    outlineOffset: TOKEN.focusRingOffset(),
    borderRadius:  '2px',
  },

  // Disabled unchecked
  '&.Mui-disabled': {
    color: TOKEN.disabledBorder(),
    cursor: 'not-allowed',
    pointerEvents: 'auto',
  },
  // Disabled checked / indeterminate
  '&.Mui-disabled.Mui-checked, &.Mui-disabled.MuiCheckbox-indeterminate': {
    color: TOKEN.disabledColor(),
  },

  // Framework reset — MUI adds padding for the ripple touch target;
  // we preserve it but reset backgroundColor so our hover token takes effect.
  padding: '8px',
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Checkbox — Category 5 (Form Controls), 3-tier sizing.
 *
 * Focus ring: outline on the ButtonBase root (overflow:visible).
 * Active color drives both the checked fill and the focus ring.
 *
 * Spec: docs/specs/components/checkbox.md
 */
export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  function Checkbox(
    {
      size           = 'md',
      color          = 'primary',
      checked,
      defaultChecked,
      indeterminate  = false,
      disabled       = false,
      required       = false,
      id,
      name,
      value,
      onChange,
      inputProps,
      className,
      sx,
    },
    ref
  ) {
    return (
      <StyledCheckbox
        ref={ref}
        epSize={size}
        epColor={color}
        // Pass color="default" — all colors controlled by our token overrides
        color="default"
        // Map our size to MUI's two-tier system; visual size overridden via TOKEN.iconSize
        size={size === 'sm' ? 'small' : 'medium'}
        checked={checked}
        defaultChecked={defaultChecked}
        indeterminate={indeterminate}
        disabled={disabled}
        required={required}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        inputProps={inputProps}
        className={className}
        sx={sx}
        disableRipple={false}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';

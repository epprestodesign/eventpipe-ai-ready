import { forwardRef } from 'react';
import MuiRadio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import type { RadioProps, RadioGroupProps } from './Radio.types';
import type { EpColor, EpSize3 } from '../types/shared';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-radio-* custom properties.
// Token structure mirrors Checkbox exactly — same semantic refs, separate var namespace.

const TOKEN = {
  iconSize:         (s: EpSize3) => `var(--ep-component-radio-icon-${s})`,
  color:            (c: EpColor) => `var(--ep-component-radio-color-${c})`,
  uncheckedBorder:  ()           => `var(--ep-component-radio-unchecked-border)`,
  uncheckedHoverBg: ()           => `var(--ep-component-radio-unchecked-hover-bg)`,
  disabledColor:    ()           => `var(--ep-component-radio-disabled-color)`,
  disabledBorder:   ()           => `var(--ep-component-radio-disabled-border)`,
  focusRingWidth:   ()           => `var(--ep-component-radio-focus-ring-width)`,
  focusRingOffset:  ()           => `var(--ep-component-radio-focus-ring-offset)`,
} as const;

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledRadioProps {
  epSize:  EpSize3;
  epColor: EpColor;
}

const StyledRadio = styled(MuiRadio, {
  shouldForwardProp: (prop) => prop !== 'epSize' && prop !== 'epColor',
})<StyledRadioProps>(({ epSize, epColor }) => ({
  '& .MuiSvgIcon-root': {
    fontSize: TOKEN.iconSize(epSize),
  },

  // Unchecked: outer ring color
  color: TOKEN.uncheckedBorder(),

  // Checked: filled dot color
  '&.Mui-checked': {
    color: TOKEN.color(epColor),
  },

  '&:hover': {
    backgroundColor: TOKEN.uncheckedHoverBg(),
  },
  '&:hover .MuiTouchRipple-root': {
    color: TOKEN.color(epColor),
  },

  '&.Mui-focusVisible': {
    outline:       `${TOKEN.focusRingWidth()} solid ${TOKEN.color(epColor)}`,
    outlineOffset: TOKEN.focusRingOffset(),
    borderRadius:  '50%',  // matches Radio's circular shape
  },

  '&.Mui-disabled': {
    color: TOKEN.disabledBorder(),
    cursor: 'not-allowed',
    pointerEvents: 'auto',
  },
  '&.Mui-disabled.Mui-checked': {
    color: TOKEN.disabledColor(),
  },

  padding: '8px',
}));

// ─── RadioGroup ────────────────────────────────────────────────────────────

/**
 * RadioGroup — thin wrapper around MUI RadioGroup.
 * Groups Radio controls, manages shared name and value context.
 * Spec: docs/specs/components/radio.md
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup(
    { value, defaultValue, name, row = false, children, onChange, className, sx },
    ref
  ) {
    return (
      <MuiRadioGroup
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        name={name}
        row={row}
        onChange={onChange}
        className={className}
        sx={sx}
      >
        {children}
      </MuiRadioGroup>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Radio — Category 5 (Form Controls), 3-tier sizing.
 * Use inside RadioGroup for group selection semantics.
 *
 * Focus ring: outline on the ButtonBase root, border-radius:50% matches circle shape.
 * Active color drives checked fill and focus ring.
 *
 * Spec: docs/specs/components/radio.md
 */
export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  function Radio(
    {
      size      = 'md',
      color     = 'primary',
      checked,
      disabled  = false,
      required  = false,
      value,
      id,
      name,
      onChange,
      inputProps,
      className,
      sx,
    },
    ref
  ) {
    return (
      <StyledRadio
        ref={ref}
        epSize={size}
        epColor={color}
        color="default"
        size={size === 'sm' ? 'small' : 'medium'}
        checked={checked}
        disabled={disabled}
        required={required}
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        inputProps={inputProps}
        className={className}
        sx={sx}
        disableRipple={false}
      />
    );
  }
);

Radio.displayName = 'Radio';

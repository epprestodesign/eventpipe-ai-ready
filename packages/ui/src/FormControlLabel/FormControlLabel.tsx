import { forwardRef, cloneElement } from 'react';
import { styled } from '@mui/material/styles';
import type { FormControlLabelProps, LabelPlacement } from './FormControlLabel.types';
import type { EpSize3 } from '../types/shared';

// ─── Token helpers ─────────────────────────────────────────────────────────

const TOKEN = {
  fontFamily:   () => `var(--ep-semantic-typography-font-family)`,
  textPrimary:  () => `var(--ep-semantic-color-text-primary)`,
  textDisabled: () => `var(--ep-semantic-color-text-disabled)`,
  statusError:  () => `var(--ep-semantic-color-status-error)`,
  body1Size:    () => `var(--ep-semantic-typography-body1-font-size)`,
  body2Size:    () => `var(--ep-semantic-typography-body2-font-size)`,
} as const;

// ─── Label font-size per size ──────────────────────────────────────────────
const LABEL_FONT_SIZE: Record<EpSize3, string> = {
  sm: TOKEN.body2Size(),
  md: TOKEN.body1Size(),
  lg: TOKEN.body1Size(),
};

// ─── Flex direction per label placement ────────────────────────────────────
const PLACEMENT_DIRECTION: Record<LabelPlacement, 'row' | 'row-reverse' | 'column' | 'column-reverse'> = {
  end:    'row',
  start:  'row-reverse',
  top:    'column-reverse',
  bottom: 'column',
};

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledLabelProps {
  epPlacement: LabelPlacement;
  epSize:      EpSize3;
  epDisabled:  boolean;
}

const StyledLabel = styled('label', {
  shouldForwardProp: (prop) =>
    prop !== 'epPlacement' && prop !== 'epSize' && prop !== 'epDisabled',
})<StyledLabelProps>(({ epPlacement, epSize, epDisabled }) => ({
  display:        'inline-flex',
  alignItems:     'center',
  cursor:         epDisabled ? 'default' : 'pointer',
  verticalAlign:  'middle',
  flexDirection:  PLACEMENT_DIRECTION[epPlacement],
  gap:            '8px',

  // Disabled: no pointer events on the wrapper
  ...(epDisabled && {
    pointerEvents: 'none',
  }),

  // Label text styling
  '& .ep-form-control-label-text': {
    fontFamily: TOKEN.fontFamily(),
    fontSize:   LABEL_FONT_SIZE[epSize],
    lineHeight: 1.5,
    color:      epDisabled ? TOKEN.textDisabled() : TOKEN.textPrimary(),
  },
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * FormControlLabel — wraps a form control (Checkbox, Radio, Switch) with a label.
 *
 * Renders a native `<label>` element for click-to-toggle accessibility.
 * Forwards size, disabled, checked, onChange, value, and name to the control via cloneElement.
 *
 * Spec: docs/specs/components/form-control-label.md
 */
export const FormControlLabel = forwardRef<HTMLLabelElement, FormControlLabelProps>(
  function FormControlLabel(
    {
      control,
      label,
      labelPlacement = 'end',
      size           = 'md',
      disabled       = false,
      required       = false,
      checked,
      onChange,
      value,
      name,
      className,
      sx,
    },
    ref
  ) {
    // Forward props to the control child
    const clonedControl = cloneElement(control, {
      size,
      disabled,
      ...(checked !== undefined && { checked }),
      ...(onChange !== undefined && { onChange }),
      ...(value !== undefined && { value }),
      ...(name !== undefined && { name }),
    });

    return (
      <StyledLabel
        ref={ref}
        epPlacement={labelPlacement}
        epSize={size}
        epDisabled={disabled}
        className={className}
        sx={sx}
      >
        {clonedControl}
        <span className="ep-form-control-label-text">
          {label}
          {required && (
            <span
              aria-hidden="true"
              style={{ color: TOKEN.statusError() }}
            >
              {' *'}
            </span>
          )}
        </span>
      </StyledLabel>
    );
  }
);

FormControlLabel.displayName = 'FormControlLabel';

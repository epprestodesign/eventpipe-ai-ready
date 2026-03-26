import { forwardRef } from 'react';
import MuiTextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import type { TextFieldProps } from './TextField.types';
import type { EpSize3 } from '../types/shared';
import { useBaseInput, SPINNER_SIZE } from '../BaseInput';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-text-field-* custom properties.
// No raw hex, no hardcoded px values, no semantic/primitive tokens consumed directly.

const TOKEN = {
  // Structure
  radius:               () => `var(--ep-component-text-field-border-radius)`,
  // Border
  borderWidth:          () => `var(--ep-component-text-field-border-width)`,
  borderWidthFocus:     () => `var(--ep-component-text-field-border-width-focus)`,
  borderDefault:        () => `var(--ep-component-text-field-border-default)`,
  borderHover:          () => `var(--ep-component-text-field-border-hover)`,
  borderFocus:          () => `var(--ep-component-text-field-border-focus)`,
  borderError:          () => `var(--ep-component-text-field-border-error)`,
  borderDisabled:       () => `var(--ep-component-text-field-border-disabled)`,
  // Background
  bgOutlined:           () => `var(--ep-component-text-field-background-outlined)`,
  bgFilled:             () => `var(--ep-component-text-field-background-filled)`,
  bgDisabled:           () => `var(--ep-component-text-field-background-disabled)`,
  // Input text
  inputColor:               () => `var(--ep-component-text-field-input-color)`,
  inputColorDisabled:       () => `var(--ep-component-text-field-input-color-disabled)`,
  inputColorPlaceholder:    () => `var(--ep-component-text-field-input-color-placeholder)`,
  inputFontSize:        (s: EpSize3) => `var(--ep-component-text-field-input-font-size-${s})`,
  // Label
  labelColor:           () => `var(--ep-component-text-field-label-color)`,
  labelColorFocus:      () => `var(--ep-component-text-field-label-color-focus)`,
  labelColorError:      () => `var(--ep-component-text-field-label-color-error)`,
  labelColorDisabled:   () => `var(--ep-component-text-field-label-color-disabled)`,
  labelTranslateX:        () => `var(--ep-component-text-field-label-translate-x)`,
  labelTranslateY:    (s: EpSize3) => `var(--ep-component-text-field-label-translate-y-${s})`,
  labelTranslateYFilled: (s: EpSize3) => `var(--ep-component-text-field-label-translate-y-filled-${s})`,
  labelFontSize:      (s: EpSize3) => `var(--ep-component-text-field-label-font-size-${s})`,
  // Helper text
  helperColor:          () => `var(--ep-component-text-field-helper-text-color)`,
  helperColorError:     () => `var(--ep-component-text-field-helper-text-color-error)`,
  helperColorDisabled:  () => `var(--ep-component-text-field-helper-text-color-disabled)`,
  helperFontSize:       () => `var(--ep-component-text-field-helper-text-font-size)`,
  // Padding — outlined (symmetric y)
  py: (s: EpSize3) => `var(--ep-component-text-field-padding-${s}-y)`,
  px: (s: EpSize3) => `var(--ep-component-text-field-padding-${s}-x)`,
  // Padding — filled (asymmetric: top reserves space for floating label)
  // MUI FilledInput geometry: medium → top:25px bottom:8px; small → top:21px bottom:4px
  // Our override must use individual properties (not shorthand) to preserve this contract.
  pyFilledTop:    (s: EpSize3) => `var(--ep-component-text-field-padding-filled-${s}-top)`,
  pyFilledBottom: (s: EpSize3) => `var(--ep-component-text-field-padding-filled-${s}-bottom)`,
} as const;

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledTextFieldProps {
  epSize: EpSize3;
}

const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: (prop) => prop !== 'epSize',
})<StyledTextFieldProps>(({ epSize }) => ({

  // ─── Outlined input ────────────────────────────────────────────────────
  '& .MuiOutlinedInput-root': {
    backgroundColor: TOKEN.bgOutlined(),
    borderRadius:    TOKEN.radius(),
    fontSize:        TOKEN.inputFontSize(epSize),
    color:           TOKEN.inputColor(),

    '& .MuiOutlinedInput-input': {
      padding: `${TOKEN.py(epSize)} ${TOKEN.px(epSize)}`,
      '&::placeholder': {
        color:   TOKEN.inputColorPlaceholder(),
        opacity: 1,  // override browser default that dims placeholder
      },
    },

    // MUI Autocomplete injects a 3-selector rule targeting .MuiAutocomplete-input
    // that overrides .MuiOutlinedInput-input padding. Match specificity here so
    // Emotion's insertion order (styled() after theme defaults) wins.
    '& .MuiAutocomplete-input': {
      padding:      `${TOKEN.py(epSize)} ${TOKEN.px(epSize)}`,
      // Override right side: must clear the absolutely-positioned end adornment.
      // endAdornment = popup-indicator (28px) + clear-button (28px) at right: 9px offset.
      // 9 + 28 + 28 = 65px. This is a layout constant — button sizes don't scale with size.
      paddingRight: '65px',
      lineHeight:   '1.4375em',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor:  TOKEN.borderDefault(),
      borderWidth:  TOKEN.borderWidth(),
      borderRadius: TOKEN.radius(),
    },

    '&:hover:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
      borderColor: TOKEN.borderHover(),
      // borderWidth unchanged on hover (stays 1px)
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: TOKEN.borderFocus(),
      borderWidth: TOKEN.borderWidthFocus(),
    },

    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: TOKEN.borderError(),
      borderWidth: TOKEN.borderWidthFocus(),
    },

    '&.Mui-disabled': {
      backgroundColor: TOKEN.bgDisabled(),
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: TOKEN.borderDisabled(),
      },
      '& .MuiOutlinedInput-input': {
        // WebkitTextFillColor overrides Chrome's disabled text override
        color:                TOKEN.inputColorDisabled(),
        WebkitTextFillColor:  TOKEN.inputColorDisabled(),
      },
    },
  },

  // ─── Filled input ──────────────────────────────────────────────────────
  '& .MuiFilledInput-root': {
    backgroundColor:             TOKEN.bgFilled(),
    borderRadius:                `${TOKEN.radius()} ${TOKEN.radius()} 0 0`,
    fontSize:                    TOKEN.inputFontSize(epSize),
    color:                       TOKEN.inputColor(),
    // Remove MUI's hover elevation fill
    '&:hover':                   { backgroundColor: TOKEN.bgFilled() },
    '&.Mui-focused':             { backgroundColor: TOKEN.bgFilled() },

    '& .MuiFilledInput-input': {
      // Use individual properties (NOT the shorthand `padding`) to preserve
      // MUI's asymmetric filled-input geometry: top must be tall enough to
      // clear the floating label area; bottom is the standard breathing room.
      // The `padding` shorthand would override all four values symmetrically
      // and collapse the top padding that the floating label needs.
      paddingTop:    TOKEN.pyFilledTop(epSize),
      paddingBottom: TOKEN.pyFilledBottom(epSize),
      paddingLeft:   TOKEN.px(epSize),
      paddingRight:  TOKEN.px(epSize),
      // Explicit line-height locks the text line box to MUI's expected 1.4375em
      // geometry. Without it, browsers use 'normal' (~1.2) which differs from
      // the 1.4375em content box MUI's padding contract was designed around.
      // Inter's tall ascender metrics amplify the mismatch — text appears to
      // float at the top of the line box when lineHeight is left unset.
      lineHeight: '1.4375em',
      '&::placeholder': {
        color:   TOKEN.inputColorPlaceholder(),
        opacity: 1,
      },
    },

    // Bottom border states
    '&::before': {
      borderBottom: `${TOKEN.borderWidth()} solid ${TOKEN.borderDefault()}`,
    },
    '&:hover:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled)::before': {
      borderBottom: `${TOKEN.borderWidth()} solid ${TOKEN.borderHover()}`,
    },
    '&::after': {
      borderBottom: `${TOKEN.borderWidthFocus()} solid ${TOKEN.borderFocus()}`,
    },
    '&.Mui-error': {
      '&::after': {
        borderBottom: `${TOKEN.borderWidthFocus()} solid ${TOKEN.borderError()}`,
      },
    },

    '&.Mui-disabled': {
      backgroundColor: TOKEN.bgDisabled(),
      '&::before': {
        // Override MUI's dashed disabled border with our solid disabled token
        borderBottomStyle: 'solid',
        borderBottom:      `${TOKEN.borderWidth()} solid ${TOKEN.borderDisabled()}`,
      },
      '& .MuiFilledInput-input': {
        color:               TOKEN.inputColorDisabled(),
        WebkitTextFillColor: TOKEN.inputColorDisabled(),
      },
    },
  },

  // ─── Label ─────────────────────────────────────────────────────────────
  '& .MuiInputLabel-root': {
    color:    TOKEN.labelColor(),
    fontSize: TOKEN.labelFontSize(epSize),

    // Override resting (non-floating) position only — MUI owns the shrink transform
    '&:not(.MuiInputLabel-shrink)': {
      transform: `translate(${TOKEN.labelTranslateX()}, ${TOKEN.labelTranslateY(epSize)}) scale(1)`,
    },

    // Filled variant resting position — the taller filled input (paddingTop reserves 25px+
    // for the floating label area) requires a larger Y to visually center the resting label.
    // MUI adds .MuiInputLabel-filled automatically when variant="filled".
    // This rule has equal specificity to the rule above so the later declaration wins for
    // filled inputs; outlined inputs are unaffected.
    '&.MuiInputLabel-filled:not(.MuiInputLabel-shrink)': {
      transform: `translate(${TOKEN.labelTranslateX()}, ${TOKEN.labelTranslateYFilled(epSize)}) scale(1)`,
    },

    '&.Mui-focused':  { color: TOKEN.labelColorFocus() },
    '&.Mui-error':    { color: TOKEN.labelColorError() },
    '&.Mui-disabled': { color: TOKEN.labelColorDisabled() },
  },

  // ─── Helper text ───────────────────────────────────────────────────────
  '& .MuiFormHelperText-root': {
    color:       TOKEN.helperColor(),
    fontSize:    TOKEN.helperFontSize(),
    // Framework reset — MUI adds 14px horizontal margin; we set it to match our padding
    marginLeft:  0,
    marginRight: 0,
    '&.Mui-error':    { color: TOKEN.helperColorError() },
    '&.Mui-disabled': { color: TOKEN.helperColorDisabled() },
  },
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * TextField — Category 4 (Form Inputs), 3-tier sizing.
 *
 * Focus indicator: border color + width change (1px → 2px, MUI convention).
 * Approved deviation from standard focusRing token pattern — see deviations register.
 * WCAG 2.1 AA met via non-color change (border width) + contrast ratio.
 *
 * Shared logic (ID generation, aria-busy, aria-describedby, aria-invalid)
 * delegated to useBaseInput — see packages/ui/src/BaseInput/useBaseInput.ts.
 *
 * Spec: docs/specs/components/text-field.md
 * Sizing: docs/decisions/005-sizing-scale.md — Category 4
 */
export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  function TextField(
    {
      variant       = 'outlined',
      size          = 'md',
      fullWidth     = false,
      label,
      helperText,
      placeholder,
      value,
      defaultValue,
      error         = false,
      disabled      = false,
      loading       = false,
      startAdornment,
      endAdornment,
      type          = 'text',
      multiline     = false,
      rows,
      maxRows,
      id: idProp,
      name,
      required      = false,
      onChange,
      onBlur,
      onFocus,
      className,
      sx,
      InputProps:  externalInputRootProps,
      inputProps:  externalInputNativeProps,
    },
    ref
  ) {
    // ── Shared logic from BaseInput ───────────────────────────────────────
    const { resolvedId, helperId, ariaProps } = useBaseInput({
      id: idProp,
      helperText,
      error,
      loading,
      disabled,
    });

    // Loading spinner replaces endAdornment
    const endSlot = loading ? (
      <InputAdornment position="end">
        <CircularProgress
          size={SPINNER_SIZE[size]}
          color="inherit"
          aria-hidden="true"
        />
      </InputAdornment>
    ) : endAdornment ? (
      <InputAdornment position="end">{endAdornment}</InputAdornment>
    ) : undefined;

    const startSlot = startAdornment ? (
      <InputAdornment position="start">{startAdornment}</InputAdornment>
    ) : undefined;

    return (
      <StyledTextField
        ref={ref}
        epSize={size}
        variant={variant}
        size={size === 'sm' ? 'small' : 'medium'}  // MUI only has small/medium
        fullWidth={fullWidth}
        label={label}
        helperText={helperText}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        error={error}
        disabled={disabled}
        type={type}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        id={resolvedId}
        name={name}
        required={required}
        // ── ARIA props from BaseInput ───────────────────────────────────
        // aria-busy: loading state announced to screen readers
        // aria-describedby: links helper text (when present)
        // aria-invalid: announced on error state (MUI doesn't add this natively)
        {...ariaProps}
        className={className}
        sx={sx}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        InputProps={{
          ...externalInputRootProps,
          startAdornment: externalInputRootProps?.startAdornment ?? startSlot,
          endAdornment:   externalInputRootProps?.endAdornment   ?? endSlot,
          readOnly:       loading,
        }}
        inputProps={{
          ...externalInputNativeProps,
          // aria-invalid on the native <input> for assistive technology
          // MUI does not add this automatically when error=true
          'aria-invalid': error ? 'true' : undefined,
          // Preserve the helperId link on the native input for JAWS/NVDA
          ...(helperText && { 'aria-describedby': helperId }),
        }}
      />
    );
  }
);

TextField.displayName = 'TextField';

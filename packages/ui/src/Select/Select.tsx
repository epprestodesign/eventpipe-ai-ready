import { forwardRef } from 'react';
import MuiSelect from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import FilledInput from '@mui/material/FilledInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import type { SelectProps, SelectOption } from './Select.types';
import type { EpSize3, SelectVariant } from '../types/shared';
import { Icon } from '../Icon';
import { useBaseInput, normalizeMultipleValue, SPINNER_SIZE } from '../BaseInput';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-select-* custom properties.
// No raw hex, no hardcoded px values, no semantic/primitive tokens consumed directly.

const TOKEN = {
  // Typography
  fontFamily:           () => `var(--ep-component-select-font-family)`,
  // Structure
  radius:               () => `var(--ep-component-select-border-radius)`,
  // Border
  borderWidth:          () => `var(--ep-component-select-border-width)`,
  borderWidthFocus:     () => `var(--ep-component-select-border-width-focus)`,
  borderDefault:        () => `var(--ep-component-select-border-default)`,
  borderHover:          () => `var(--ep-component-select-border-hover)`,
  borderFocus:          () => `var(--ep-component-select-border-focus)`,
  borderError:          () => `var(--ep-component-select-border-error)`,
  borderDisabled:       () => `var(--ep-component-select-border-disabled)`,
  // Background
  bgOutlined:           () => `var(--ep-component-select-background-outlined)`,
  bgFilled:             () => `var(--ep-component-select-background-filled)`,
  bgDisabled:           () => `var(--ep-component-select-background-disabled)`,
  // Input text
  inputColor:               () => `var(--ep-component-select-input-color)`,
  inputColorDisabled:       () => `var(--ep-component-select-input-color-disabled)`,
  inputColorPlaceholder:    () => `var(--ep-component-select-input-color-placeholder)`,
  inputFontSize:        (s: EpSize3) => `var(--ep-component-select-input-font-size-${s})`,
  // Label
  labelColor:           () => `var(--ep-component-select-label-color)`,
  labelColorFocus:      () => `var(--ep-component-select-label-color-focus)`,
  labelColorError:      () => `var(--ep-component-select-label-color-error)`,
  labelColorDisabled:   () => `var(--ep-component-select-label-color-disabled)`,
  labelTranslateX:        () => `var(--ep-component-select-label-translate-x)`,
  labelTranslateY:    (s: EpSize3) => `var(--ep-component-select-label-translate-y-${s})`,
  labelTranslateYFilled: (s: EpSize3) => `var(--ep-component-select-label-translate-y-filled-${s})`,
  labelFontSize:      (s: EpSize3) => `var(--ep-component-select-label-font-size-${s})`,
  // Helper text
  helperColor:          () => `var(--ep-component-select-helper-text-color)`,
  helperColorError:     () => `var(--ep-component-select-helper-text-color-error)`,
  helperColorDisabled:  () => `var(--ep-component-select-helper-text-color-disabled)`,
  helperFontSize:       () => `var(--ep-component-select-helper-text-font-size)`,
  // Padding — outlined (symmetric y)
  py:     (s: EpSize3) => `var(--ep-component-select-padding-${s}-y)`,
  px:     (s: EpSize3) => `var(--ep-component-select-padding-${s}-x)`,
  // Padding — filled (asymmetric: top reserves space for floating label)
  pyFilledTop:    (s: EpSize3) => `var(--ep-component-select-padding-filled-${s}-top)`,
  pyFilledBottom: (s: EpSize3) => `var(--ep-component-select-padding-filled-${s}-bottom)`,
  // Chevron icon
  iconColor:        () => `var(--ep-component-select-icon-color)`,
  iconColorDisabled:() => `var(--ep-component-select-icon-color-disabled)`,
  // Menu (portal — resolved from :root)
  menuBg:           () => `var(--ep-component-select-menu-background)`,
  menuRadius:       () => `var(--ep-component-select-menu-border-radius)`,
  // Menu items
  menuItemColor:                () => `var(--ep-component-select-menu-item-color)`,
  menuItemColorSelected:        () => `var(--ep-component-select-menu-item-color-selected)`,
  menuItemColorDisabled:        () => `var(--ep-component-select-menu-item-color-disabled)`,
  menuItemBg:                   () => `var(--ep-component-select-menu-item-background)`,
  menuItemBgHover:              () => `var(--ep-component-select-menu-item-background-hover)`,
  menuItemBgSelected:           () => `var(--ep-component-select-menu-item-background-selected)`,
  menuItemBgSelectedHover:      () => `var(--ep-component-select-menu-item-background-selected-hover)`,
  menuItemBgDisabled:           () => `var(--ep-component-select-menu-item-background-disabled)`,
  menuItemFontSize: (s: EpSize3) => `var(--ep-component-select-menu-item-font-size-${s})`,
  menuItemPy:       (s: EpSize3) => `var(--ep-component-select-menu-item-padding-${s}-y)`,
  menuItemPx:       (s: EpSize3) => `var(--ep-component-select-menu-item-padding-${s}-x)`,
} as const;

// ─── Chevron icon component ─────────────────────────────────────────────────
// MUI Select's IconComponent receives className (contains MuiSelect-icon) and
// an open-state class. We wrap our Icon in a span to receive these MUI classes.
// Deviation: MUI default icon is KeyboardArrowDown — using Icon system instead.
const SelectChevron = ({ className }: { className?: string }) => (
  <span className={className} aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
    <Icon name="chevron-down" size="sm" />
  </span>
);

// ─── Styled root (FormControl) ────────────────────────────────────────────
interface StyledFormControlProps {
  epSize: EpSize3;
  epVariant: SelectVariant;
}

const StyledFormControl = styled(FormControl, {
  shouldForwardProp: (prop) => prop !== 'epSize' && prop !== 'epVariant',
})<StyledFormControlProps>(({ epSize, epVariant }) => ({

  // Width contract: the Select fills whatever container it is placed in.
  // The container (wrapper div, grid cell, form layout) controls min-width.
  // MUI FormControl defaults to inline-flex with no width — this overrides
  // that so the full chain (FormControl → InputRoot → trigger slot) stretches.
  width: '100%',

  // ─── Outlined input ──────────────────────────────────────────────────
  '& .MuiOutlinedInput-root': {
    // fontFamily: explicitly set — MUI theme Roboto bleeds through without this.
    fontFamily:      TOKEN.fontFamily(),
    backgroundColor: TOKEN.bgOutlined(),
    borderRadius:    TOKEN.radius(),
    fontSize:        TOKEN.inputFontSize(epSize),
    color:           TOKEN.inputColor(),
    // Stretch to fill FormControl width.
    width:           '100%',

    // The Select trigger display area
    '& .MuiSelect-select': {
      paddingTop:    TOKEN.py(epSize),
      paddingBottom: TOKEN.py(epSize),
      paddingLeft:   TOKEN.px(epSize),
      // Framework reset — 32px clears the absolute-positioned dropdown icon
      paddingRight:  '32px',
      // Lock line box to MUI's 1.4375em content-box geometry (same fix as TextField).
      // MUI Select sets box-sizing:border-box on this element; without explicit
      // lineHeight, Inter's tall ascenders cause text to sit too high.
      lineHeight:    '1.4375em',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor:  TOKEN.borderDefault(),
      borderWidth:  TOKEN.borderWidth(),
      borderRadius: TOKEN.radius(),
    },

    '&:hover:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
      borderColor: TOKEN.borderHover(),
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
      '& .MuiSelect-select': {
        // WebkitTextFillColor overrides Chrome's disabled text colour
        color:               TOKEN.inputColorDisabled(),
        WebkitTextFillColor: TOKEN.inputColorDisabled(),
      },
    },

    // Chevron icon colour
    '& .MuiSelect-icon': {
      color: TOKEN.iconColor(),
    },
    '& .MuiSelect-icon.Mui-disabled, &.Mui-disabled .MuiSelect-icon': {
      color: TOKEN.iconColorDisabled(),
    },
  },

  // ─── Filled input ────────────────────────────────────────────────────
  ...(epVariant === 'filled' && {
    '& .MuiFilledInput-root': {
      fontFamily:                  TOKEN.fontFamily(),
      backgroundColor:             TOKEN.bgFilled(),
      borderRadius:                `${TOKEN.radius()} ${TOKEN.radius()} 0 0`,
      fontSize:                    TOKEN.inputFontSize(epSize),
      color:                       TOKEN.inputColor(),
      // Stretch to fill FormControl width.
      width:                       '100%',
      // Framework resets — prevent MUI hover/focus background tinting
      '&:hover':    { backgroundColor: TOKEN.bgFilled() },
      '&.Mui-focused': { backgroundColor: TOKEN.bgFilled() },

      '& .MuiSelect-select': {
        // Asymmetric padding: top must clear floating label area (same contract
        // as FilledInput). Cannot use symmetric TOKEN.py here.
        paddingTop:    TOKEN.pyFilledTop(epSize),
        paddingBottom: TOKEN.pyFilledBottom(epSize),
        paddingLeft:   TOKEN.px(epSize),
        // Framework reset — clearance for icon
        paddingRight:  '32px',
        // Lock line box to MUI's 1.4375em content-box geometry.
        lineHeight:    '1.4375em',
      },

      '&::before': {
        borderBottom: `${TOKEN.borderWidth()} solid ${TOKEN.borderDefault()}`,
      },
      '&:hover:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled)::before': {
        borderBottom: `${TOKEN.borderWidth()} solid ${TOKEN.borderHover()}`,
      },
      '&::after': {
        borderBottom: `${TOKEN.borderWidthFocus()} solid ${TOKEN.borderFocus()}`,
      },
      '&.Mui-error::after': {
        borderBottom: `${TOKEN.borderWidthFocus()} solid ${TOKEN.borderError()}`,
      },

      '&.Mui-disabled': {
        backgroundColor: TOKEN.bgDisabled(),
        '&::before': {
          // Framework reset — override MUI's dashed disabled border
          borderBottomStyle: 'solid',
          borderBottom: `${TOKEN.borderWidth()} solid ${TOKEN.borderDisabled()}`,
        },
        '& .MuiSelect-select': {
          color:               TOKEN.inputColorDisabled(),
          WebkitTextFillColor: TOKEN.inputColorDisabled(),
        },
      },

      '& .MuiSelect-icon': {
        color: TOKEN.iconColor(),
      },
      '& .MuiSelect-icon.Mui-disabled, &.Mui-disabled .MuiSelect-icon': {
        color: TOKEN.iconColorDisabled(),
      },
    },
  }),

  // ─── Label ───────────────────────────────────────────────────────────
  '& .MuiInputLabel-root': {
    fontFamily: TOKEN.fontFamily(),
    color:      TOKEN.labelColor(),
    fontSize:   TOKEN.labelFontSize(epSize),

    // Override resting (non-floating) position — MUI owns the shrink transform
    '&:not(.MuiInputLabel-shrink)': {
      transform: `translate(${TOKEN.labelTranslateX()}, ${TOKEN.labelTranslateY(epSize)}) scale(1)`,
    },

    // Filled variant resting position — taller filled input (paddingTop reserves
    // space for floating label) requires a larger Y to visually center the resting label.
    // MUI adds .MuiInputLabel-filled automatically when variant="filled".
    '&.MuiInputLabel-filled:not(.MuiInputLabel-shrink)': {
      transform: `translate(${TOKEN.labelTranslateX()}, ${TOKEN.labelTranslateYFilled(epSize)}) scale(1)`,
    },

    '&.Mui-focused':  { color: TOKEN.labelColorFocus() },
    '&.Mui-error':    { color: TOKEN.labelColorError() },
    '&.Mui-disabled': { color: TOKEN.labelColorDisabled() },
  },

  // ─── Helper text ─────────────────────────────────────────────────────
  '& .MuiFormHelperText-root': {
    fontFamily:  TOKEN.fontFamily(),
    color:       TOKEN.helperColor(),
    fontSize:    TOKEN.helperFontSize(),
    marginLeft:  0,
    marginRight: 0,
    '&.Mui-error':    { color: TOKEN.helperColorError() },
    '&.Mui-disabled': { color: TOKEN.helperColorDisabled() },
  },
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Select — Category 4 (Form Inputs), 3-tier sizing.
 *
 * Focus indicator: border color + width change (1px → 2px, same as TextField).
 * Approved deviation — see deviations register in component-build-workflow.md.
 *
 * Label + placeholder behaviour:
 *   When `placeholder` is set, `displayEmpty` is forced true and the label is
 *   forced to float (shrink=true + notched OutlinedInput). This prevents the
 *   resting label from overlapping the placeholder text in the trigger area.
 *   The notch is cut by passing an explicit `<OutlinedInput notched />` via
 *   MuiSelect's `input` prop — the only reliable MUI API for this use case.
 *
 * Multiple value safety:
 *   When `multiple=true`, value is normalised to an array via normalizeMultipleValue
 *   to prevent MUI from crashing on scalar input. A dev-mode error is also emitted.
 *
 * Shared logic (ID generation, aria props, labelShrink, isInteractionDisabled)
 *   delegated to useBaseInput — see packages/ui/src/BaseInput/useBaseInput.ts.
 *
 * Menu portal styles use CSS custom properties from :root — available globally.
 *
 * Spec: docs/specs/components/select.md
 * Sizing: docs/decisions/005-sizing-scale.md — Category 4
 */
export const Select = forwardRef<HTMLDivElement, SelectProps>(
  function Select(
    {
      variant      = 'outlined',
      size         = 'md',
      fullWidth    = false,
      label,
      helperText,
      placeholder,
      value,
      defaultValue,
      renderValue,
      multiple     = false,
      displayEmpty = false,
      open,
      onOpen,
      onClose,
      error        = false,
      disabled     = false,
      required     = false,
      loading      = false,
      id: idProp,
      name,
      onChange,
      className,
      sx,
      children,
      options,
      getOptionLabel:    getOptionLabelProp,
      getOptionValue:    getOptionValueProp,
      getOptionDisabled: getOptionDisabledProp,
      renderOption,
    },
    ref
  ) {
    // ── Shared logic from BaseInput ─────────────────────────────────────────
    const {
      resolvedId,
      labelId,
      helperId,
      labelShrink,
      isInteractionDisabled,
      ariaProps,
    } = useBaseInput({
      id: idProp,
      helperText,
      error,
      loading,
      disabled,
      multiple,
      value,
      displayEmpty,
      placeholder,
    });

    // ── Multiple value normalisation ────────────────────────────────────────
    // Wraps scalar → array when multiple=true to prevent MUI crash.
    // Dev warning already fired inside useBaseInput.
    const normalizedValue = normalizeMultipleValue(value, multiple);

    // ── Loading state ───────────────────────────────────────────────────────
    // Loading: swap chevron for spinner, prevent open
    const IconComp = loading
      ? () => (
          <span
            style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}
            aria-hidden="true"
          >
            <CircularProgress size={SPINNER_SIZE[size]} color="inherit" />
          </span>
        )
      : SelectChevron;

    // ── Placeholder renderValue ─────────────────────────────────────────────
    // Wrap renderValue to show styled placeholder text when value is empty
    const resolvedRenderValue: ((v: unknown) => React.ReactNode) | undefined =
      placeholder
        ? (val) => {
            if (renderValue) return renderValue(val);
            const isEmpty = val == null || val === '' || (Array.isArray(val) && val.length === 0);
            if (isEmpty) {
              return (
                <span style={{ color: `var(--ep-component-select-input-color-placeholder)` }}>
                  {placeholder}
                </span>
              );
            }
            return val as React.ReactNode;
          }
        : renderValue;

    // ── Options → MenuItem mapping ──────────────────────────────────────────
    const getOptionLabel    = getOptionLabelProp    ?? ((item: unknown) => String(item));
    const getOptionValue    = getOptionValueProp    ?? ((item: unknown) => String(item));
    const getOptionDisabled = getOptionDisabledProp ?? (() => false);

    let resolvedChildren = children;
    if (options && !children) {
      resolvedChildren = options.map((item) => {
        const optLabel    = getOptionLabel(item);
        const optValue    = getOptionValue(item);
        const optDisabled = getOptionDisabled(item);
        const resolved: SelectOption = { data: item, label: optLabel, value: optValue, disabled: optDisabled };

        if (renderOption) {
          return renderOption(resolved);
        }
        return (
          <MenuItem key={optValue} value={optValue} disabled={optDisabled}>
            {optLabel}
          </MenuItem>
        );
      });
    } else if (options && children && process.env.NODE_ENV !== 'production') {
      console.warn(
        '[EP Select] Both `options` and `children` were provided. `children` takes precedence; `options` will be ignored.'
      );
    }

    // ── Label shrink + notch fix ────────────────────────────────────────────
    // Problem: when displayEmpty=true (or placeholder is set), the Select renders
    // content in the trigger area even when value is "". MUI's FormControl context
    // does NOT set filled=true in that case, so InputLabel stays in resting position
    // and OVERLAPS the placeholder text.
    //
    // Fix: pass an explicit input to MuiSelect with notched=true so the legend
    // notch is cut open, and set shrink=true on InputLabel so the label floats.
    // This is the canonical MUI recommendation for displayEmpty + label combinations.
    const selectInput =
      labelShrink && variant === 'outlined'
        ? <OutlinedInput notched label={label} id={resolvedId} />
        : labelShrink && variant === 'filled'
        ? <FilledInput id={resolvedId} />
        : undefined;

    // ── Menu portal sx ──────────────────────────────────────────────────────
    const menuPaperSx = {
      backgroundColor: TOKEN.menuBg(),
      borderRadius:    TOKEN.menuRadius(),
      '& .MuiMenuItem-root': {
        fontFamily:    TOKEN.fontFamily(),
        color:        TOKEN.menuItemColor(),
        background:   TOKEN.menuItemBg(),
        fontSize:     TOKEN.menuItemFontSize(size),
        paddingTop:    TOKEN.menuItemPy(size),
        paddingBottom: TOKEN.menuItemPy(size),
        paddingLeft:   TOKEN.menuItemPx(size),
        paddingRight:  TOKEN.menuItemPx(size),
        '&:hover': {
          backgroundColor: TOKEN.menuItemBgHover(),
        },
        '&.Mui-selected': {
          backgroundColor: TOKEN.menuItemBgSelected(),
          color:           TOKEN.menuItemColorSelected(),
          '&:hover': {
            backgroundColor: TOKEN.menuItemBgSelectedHover(),
          },
        },
        '&.Mui-disabled': {
          color:           TOKEN.menuItemColorDisabled(),
          backgroundColor: TOKEN.menuItemBgDisabled(),
          // Framework reset — MUI dims disabled items to 0.38 opacity; we use color token instead
          opacity:         1,
        },
      },
    };

    return (
      <StyledFormControl
        ref={ref}
        epSize={size}
        epVariant={variant}
        variant={variant}
        size={size === 'sm' ? 'small' : 'medium'}
        fullWidth={fullWidth}
        error={error}
        disabled={isInteractionDisabled}
        required={required}
        className={className}
        sx={sx}
      >
        {label && (
          <InputLabel
            id={labelId}
            htmlFor={resolvedId}
            // Force label to float when placeholder/displayEmpty is active.
            // Without this, the resting label overlaps the placeholder text.
            shrink={labelShrink}
          >
            {label}
          </InputLabel>
        )}

        <MuiSelect
          labelId={label ? labelId : undefined}
          id={resolvedId}
          label={label}
          variant={variant}
          value={normalizedValue}
          defaultValue={defaultValue}
          multiple={multiple}
          displayEmpty={displayEmpty || !!placeholder}
          renderValue={resolvedRenderValue}
          open={loading ? false : open}
          onOpen={loading ? undefined : onOpen}
          onClose={onClose}
          name={name}
          onChange={onChange}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          IconComponent={IconComp as any}
          // Inject explicit OutlinedInput with notched=true when label must float.
          // This cuts the legend notch open so the label doesn't write through the border.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          input={selectInput as any}
          // ── ARIA props from BaseInput ─────────────────────────────────
          // aria-busy: loading state
          // aria-describedby: links helper text
          // aria-invalid: error state (MUI does not add this natively)
          {...ariaProps}
          MenuProps={{
            PaperProps: {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              sx: menuPaperSx as any,
            },
          }}
        >
          {resolvedChildren}
        </MuiSelect>

        {helperText && (
          <FormHelperText id={helperId}>
            {helperText}
          </FormHelperText>
        )}
      </StyledFormControl>
    );
  }
);

Select.displayName = 'Select';

import { forwardRef } from 'react';
import type React from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import MuiAutocomplete from '@mui/material/Autocomplete';
import type {
  AutocompleteRenderInputParams,
  AutocompleteRenderGetTagProps,
  AutocompleteRenderOptionState,
} from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import type { AutocompleteProps } from './Autocomplete.types';
import type { EpSize3 } from '../types/shared';
import { TextField } from '../TextField';
import { Chip } from '../Chip';
import { Icon } from '../Icon';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-autocomplete-* custom properties.

const TOKEN = {
  // Dropdown surface (portal — resolved from :root)
  dropdownBg:             () => `var(--ep-component-autocomplete-dropdown-background)`,
  dropdownRadius:         () => `var(--ep-component-autocomplete-dropdown-border-radius)`,
  dropdownShadow:         () => `var(--ep-component-autocomplete-dropdown-shadow)`,
  dropdownMaxHeight:      () => `var(--ep-component-autocomplete-dropdown-max-height)`,
  // Options (portal — inside Paper)
  optionColor:            () => `var(--ep-component-autocomplete-option-color)`,
  optionColorDisabled:    () => `var(--ep-component-autocomplete-option-color-disabled)`,
  optionBg:               () => `var(--ep-component-autocomplete-option-background)`,
  optionBgHover:          () => `var(--ep-component-autocomplete-option-background-hover)`,
  optionBgFocus:          () => `var(--ep-component-autocomplete-option-background-focus)`,
  optionBgSelected:       () => `var(--ep-component-autocomplete-option-background-selected)`,
  optionBgSelectedHover:  () => `var(--ep-component-autocomplete-option-background-selected-hover)`,
  optionBgDisabled:       () => `var(--ep-component-autocomplete-option-background-disabled)`,
  optionFontSize:         () => `var(--ep-component-autocomplete-option-font-size)`,
  optionPy:               () => `var(--ep-component-autocomplete-option-padding-y)`,
  optionPx:               () => `var(--ep-component-autocomplete-option-padding-x)`,
  // Tags (multi-select)
  tagGap:                 () => `var(--ep-component-autocomplete-tag-gap)`,
  tagMarginY:             () => `var(--ep-component-autocomplete-tag-margin-y)`,
  // Indicators (clear + popup buttons in the input)
  indicatorColor:         () => `var(--ep-component-autocomplete-indicator-color)`,
  // Loading / no-options text
  loadingColor:           () => `var(--ep-component-autocomplete-loading-color)`,
  loadingFontSize:        () => `var(--ep-component-autocomplete-loading-font-size)`,
} as const;

// ─── Portal-safe Paper sx ──────────────────────────────────────────────────
// Dropdown surface lives in a Portal — ancestor selectors from styled() cannot
// reach it. PaperProps.sx targets the Paper element itself; all option selectors
// are descendants of Paper and resolve correctly.
const PAPER_SX = {
  backgroundColor: TOKEN.dropdownBg(),
  borderRadius:    TOKEN.dropdownRadius(),
  boxShadow:       TOKEN.dropdownShadow(),

  '& .MuiAutocomplete-listbox': {
    maxHeight: TOKEN.dropdownMaxHeight(),
    padding:   0,
    overflow:  'auto',
  },

  // backgroundFocus pattern — list-like items use background change, not outline ring
  '& .MuiAutocomplete-option': {
    color:           TOKEN.optionColor(),
    backgroundColor: TOKEN.optionBg(),
    fontSize:        TOKEN.optionFontSize(),
    paddingTop:      TOKEN.optionPy(),
    paddingBottom:   TOKEN.optionPy(),
    paddingLeft:     TOKEN.optionPx(),
    paddingRight:    TOKEN.optionPx(),
    // Framework reset — MUI adds min-height; align with our spacing
    minHeight:       'unset',

    '&:hover': {
      backgroundColor: TOKEN.optionBgHover(),
    },
    // Keyboard-focused item (MUI adds Mui-focused)
    '&.Mui-focused': {
      backgroundColor: TOKEN.optionBgFocus(),
    },
    // Selected item (MUI sets aria-selected)
    '&[aria-selected="true"]': {
      backgroundColor: TOKEN.optionBgSelected(),
      '&:hover': {
        backgroundColor: TOKEN.optionBgSelectedHover(),
      },
      '&.Mui-focused': {
        backgroundColor: TOKEN.optionBgSelectedHover(),
      },
    },
    // Disabled item
    '&[aria-disabled="true"]': {
      color:           TOKEN.optionColorDisabled(),
      backgroundColor: TOKEN.optionBgDisabled(),
      // Framework reset — MUI uses 0.38 opacity; use color token instead
      opacity:         1,
      pointerEvents:   'none',
    },
  },

  '& .MuiAutocomplete-loading, & .MuiAutocomplete-noOptions': {
    color:    TOKEN.loadingColor(),
    fontSize: TOKEN.loadingFontSize(),
  },
} as const;

// ─── Styled root ──────────────────────────────────────────────────────────
// Non-portal elements: tag spacing, indicator colors, and input-root geometry.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledAutocomplete = styled(MuiAutocomplete as any)({
  // Tags rendered in multiple mode
  '& .MuiAutocomplete-tag': {
    marginTop:    TOKEN.tagMarginY(),
    marginBottom: TOKEN.tagMarginY(),
    marginRight:  TOKEN.tagGap(),
  },
  // Indicator button color (clear + popup)
  '& .MuiAutocomplete-clearIndicator, & .MuiAutocomplete-popupIndicator': {
    color:   TOKEN.indicatorColor(),
    padding: '4px',
  },

  // ── InputRoot outer padding reset ────────────────────────────────────────
  // MUI Autocomplete injects:
  //   .MuiAutocomplete-root .MuiOutlinedInput-root { padding: 9px }   (2 selectors)
  // This outer padding stacks with our TextField.tsx inner input padding override
  // (Bug 20: paddingTop/Bottom = TOKEN.py ≈ 12px for md), making the field
  // 9+12 = 21px per side vs TextField's 12px — ~18px too tall overall.
  //
  // Using &.MuiAutocomplete-root prefix raises our specificity to 3 selectors,
  // definitively overriding MUI's 2-selector injection regardless of insertion order.
  // Outer padding is reset to zero; inner spacing lives entirely on .MuiAutocomplete-input
  // via TextField.tsx, matching the stabilised TextField/Select geometry contract.
  '&.MuiAutocomplete-root .MuiOutlinedInput-root': {
    padding: 0,
  },
});

// ─── MUI size map ──────────────────────────────────────────────────────────
const MUI_SIZE: Record<EpSize3, 'small' | 'medium'> = {
  sm: 'small',
  md: 'medium',
  lg: 'medium',  // MUI only has small/medium; lg handled via token sizing
};

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Autocomplete — composition component that combines:
 *   - TextField (input + label + helper text)
 *   - Dropdown portal (Paper + listbox, portal-safe via PaperProps.sx)
 *   - Option items (backgroundFocus pattern — list-like focus rule)
 *   - Chip tags (multiple mode, variant="soft")
 *   - Icon system (clear icon + popup chevron)
 *
 * Supports controlled (`value` + `onChange`) and uncontrolled (`defaultValue`).
 * `multiple` enables multi-select with Chip tags.
 * `freeSolo` allows arbitrary text input.
 *
 * Portal pattern: dropdown surface and option styles live in PaperProps.sx —
 * CSS custom property values resolve from :root regardless of Portal nesting.
 *
 * Spec: docs/specs/components/autocomplete.md
 */
function AutocompleteFn<T>(
  {
    options,
    getOptionLabel = (option) => (typeof option === 'string' ? option : String(option)),
    isOptionEqualToValue,
    groupBy,
    renderOption:   renderOptionProp,
    value,
    defaultValue,
    onChange,
    inputValue,
    onInputChange,
    multiple        = false,
    freeSolo        = false,
    limitTags,
    open,
    onOpen,
    onClose,
    disabled        = false,
    loading         = false,
    loadingText     = 'Loading…',
    noOptionsText   = 'No options',
    label,
    placeholder,
    helperText,
    error           = false,
    required        = false,
    variant         = 'outlined',
    size            = 'md',
    fullWidth       = false,
    className,
    sx,
  }: AutocompleteProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
): React.ReactElement {
  return (
    <StyledAutocomplete
      ref={ref}
      // aria-busy signals the loading state at the component root.
      // MUI Autocomplete does not add this natively; consumers and screen
      // readers see it immediately when loading=true.
      aria-busy={loading || undefined}
      options={options as readonly unknown[]}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getOptionLabel={getOptionLabel as (option: any) => string}
      isOptionEqualToValue={
        isOptionEqualToValue as
          | ((option: unknown, value: unknown) => boolean)
          | undefined
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      groupBy={groupBy as ((option: any) => string) | undefined}
      value={value as unknown}
      defaultValue={defaultValue as unknown}
      onChange={
        onChange
          ? (_event: unknown, v: unknown) =>
              onChange(v as T | T[] | null)
          : undefined
      }
      inputValue={inputValue}
      onInputChange={
        onInputChange
          ? (_event: unknown, v: string) => onInputChange(v)
          : undefined
      }
      multiple={multiple}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      freeSolo={freeSolo as any}
      limitTags={limitTags}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      disabled={disabled}
      loading={loading}
      loadingText={loadingText}
      noOptionsText={noOptionsText}
      fullWidth={fullWidth}
      // Pass MUI size for internal icon sizing
      size={MUI_SIZE[size]}
      className={className}
      sx={sx}

      // ── Custom icons ──────────────────────────────────────────────────
      // Deviation: replaces MUI default ClearIcon / KeyboardArrowDownIcon
      // with Icon system — see docs/contracts/component-build-workflow.md
      clearIcon={<Icon name="close" size="sm" />}
      popupIcon={<Icon name="chevron-down" size="sm" />}

      // ── Input ─────────────────────────────────────────────────────────
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField
          label={label}
          placeholder={placeholder}
          helperText={helperText}
          error={error}
          required={required}
          disabled={params.disabled}
          size={size}
          variant={variant}
          fullWidth={fullWidth}
          id={params.id}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          InputProps={params.InputProps as any}
          inputProps={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...(params.inputProps as any),
            // Forward aria-busy to the native <input> so assistive technology
            // announces the loading state on the focused element. The spinner is
            // already injected by MUI Autocomplete via params.InputProps.endAdornment.
            'aria-busy': loading || undefined,
          }}
        />
      )}

      // ── Tags (multiple mode) ──────────────────────────────────────────
      renderTags={
        multiple
          ? (tagValues: unknown[], getTagProps: AutocompleteRenderGetTagProps) =>
              (tagValues as T[]).map((option, index) => {
                const { key, onDelete: muiOnDelete, ...restTagProps } =
                  getTagProps({ index });
                return (
                  <Chip
                    key={key ?? index}
                    label={getOptionLabel(option)}
                    size="sm"
                    variant="soft"
                    color="neutral"
                    disabled={restTagProps.disabled}
                    onDelete={
                      muiOnDelete
                        ? () =>
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            (muiOnDelete as any)(
                              new MouseEvent('click')
                            )
                        : undefined
                    }
                    className={restTagProps.className}
                  />
                );
              })
          : undefined
      }

      // ── Custom option content ─────────────────────────────────────────
      renderOption={
        renderOptionProp
          ? (props: React.HTMLAttributes<HTMLLIElement>, option: unknown, state: AutocompleteRenderOptionState) => (
              <li {...props}>
                {renderOptionProp(option as T, {
                  selected:   state.selected,
                  inputValue: state.inputValue,
                })}
              </li>
            )
          : undefined
      }

      // ── Portal-safe dropdown styling ─────────────────────────────────
      PaperProps={{ sx: PAPER_SX }}
    />
  );
}

export const Autocomplete = forwardRef(AutocompleteFn) as <T>(
  props: AutocompleteProps<T> & React.RefAttributes<HTMLDivElement>
) => React.ReactElement;

(Autocomplete as { displayName?: string }).displayName = 'Autocomplete';

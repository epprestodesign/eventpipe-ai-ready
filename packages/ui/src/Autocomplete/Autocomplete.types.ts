import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpSize3, TextFieldVariant } from '../types/shared';

export interface AutocompleteProps<T> {
  // ── Options ────────────────────────────────────────────────────────────────
  /** Array of options to present in the dropdown. */
  options: T[];

  /**
   * Returns the string label for an option. Used in the input and as fallback
   * for tag labels in multiple mode.
   * @default (option) => String(option)
   */
  getOptionLabel?: (option: T | string) => string;

  /**
   * Determines if an option equals the current value. Defaults to strict equality.
   * Required when options are objects.
   */
  isOptionEqualToValue?: (option: T, value: T) => boolean;

  /**
   * Groups options by the returned string. Renders a sticky group header above
   * each group section.
   */
  groupBy?: (option: T) => string;

  /**
   * Custom renderer for each option. Receives the option and its selection state.
   * When provided, the returned node is rendered inside the default `<li>` wrapper.
   */
  renderOption?: (
    option: T,
    state: { selected: boolean; inputValue: string }
  ) => ReactNode;

  // ── Controlled / uncontrolled ──────────────────────────────────────────────
  /** Current value (controlled). Use `T[]` when `multiple` is true. */
  value?: T | T[] | null;

  /** Initial value for uncontrolled usage. */
  defaultValue?: T | T[] | null;

  /**
   * Called when the selection changes.
   * Receives the new value: `T` (single), `T[]` (multiple), or `null` (cleared).
   */
  onChange?: (value: T | T[] | null) => void;

  /** Controlled input text. */
  inputValue?: string;

  /** Called when the input text changes. Receives the new string value. */
  onInputChange?: (value: string) => void;

  // ── Behavior ──────────────────────────────────────────────────────────────
  /**
   * Allow selecting multiple values simultaneously. Selected values render as
   * Chips inside the input.
   * @default false
   */
  multiple?: boolean;

  /**
   * Allow typing arbitrary values not in the options list (free-form input).
   * @default false
   */
  freeSolo?: boolean;

  /**
   * Maximum number of visible tags before collapsing with "+N".
   * -1 shows all tags.
   */
  limitTags?: number;

  // ── Open state ─────────────────────────────────────────────────────────────
  /** Controlled open state of the dropdown. */
  open?: boolean;

  /** Called when the dropdown opens. */
  onOpen?: () => void;

  /** Called when the dropdown closes. */
  onClose?: () => void;

  // ── State ──────────────────────────────────────────────────────────────────
  /** Disables the entire component. @default false */
  disabled?: boolean;

  /** Shows a loading indicator inside the dropdown. @default false */
  loading?: boolean;

  /** Text shown in the dropdown while `loading` is true. @default 'Loading…' */
  loadingText?: ReactNode;

  /** Text shown when the options list is empty and not loading. @default 'No options' */
  noOptionsText?: ReactNode;

  // ── Field appearance ───────────────────────────────────────────────────────
  /** Floating label for the input. */
  label?: string;

  /** Input placeholder. */
  placeholder?: string;

  /** Helper text rendered below the input. */
  helperText?: string;

  /** Puts the input in error state (red border, label, helper text). @default false */
  error?: boolean;

  /** Appends * to the label and sets required on the input. @default false */
  required?: boolean;

  /**
   * Input variant — outlined (border) or filled (tinted background).
   * @default 'outlined'
   */
  variant?: TextFieldVariant;

  /**
   * Size of the input — sm | md | lg.
   * @default 'md'
   */
  size?: EpSize3;

  /** Stretches the field to 100 % of its container width. @default false */
  fullWidth?: boolean;

  // ── Escape hatches ─────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

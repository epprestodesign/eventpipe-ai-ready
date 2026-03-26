import type React from 'react';
import type { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';
import type { BaseInputProps } from '../BaseInput';

/**
 * TextFieldProps — free-form text input.
 *
 * Shared appearance, state, and identity props come from BaseInputProps.
 * Fields below are TextField-specific: value shape, adornments, multiline,
 * native input type, events, and internal Autocomplete composition escapes.
 */
export interface TextFieldProps extends BaseInputProps {
  // ── Value ─────────────────────────────────────────────────────────────────
  /** Controlled value. */
  value?: string;
  /** Uncontrolled default value. */
  defaultValue?: string;

  // ── Adornments ────────────────────────────────────────────────────────────
  /** Leading icon or element. Use <Icon name="..." /> for icons. */
  startAdornment?: ReactNode;
  /** Trailing icon or element. Replaced by spinner when loading. */
  endAdornment?: ReactNode;

  // ── Input ─────────────────────────────────────────────────────────────────
  /** Native input type. @default 'text' */
  type?: string;
  /** Renders as <textarea>. @default false */
  multiline?: boolean;
  /** Fixed row count for multiline. */
  rows?: number;
  /** Maximum rows before scroll for multiline. */
  maxRows?: number;

  // ── Events ────────────────────────────────────────────────────────────────
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?:   FocusEventHandler<HTMLInputElement>;
  onFocus?:  FocusEventHandler<HTMLInputElement>;

  // ── Composition escape hatches ────────────────────────────────────────────
  /**
   * Forwarded to MUI's InputProps (OutlinedInput / FilledInput root element).
   * Used by Autocomplete to inject its indicators (clear + popup buttons) and
   * root ref. When provided, external adornments take precedence over the
   * startAdornment / endAdornment props.
   * @internal
   */
  InputProps?: {
    ref?: React.Ref<unknown>;
    className?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    [key: string]: unknown;
  };
  /**
   * Forwarded to the native <input> element via MUI's inputProps.
   * Used by Autocomplete to wire up ARIA attributes, role="combobox",
   * and input event handlers.
   * @internal
   */
  inputProps?: Record<string, unknown>;
}

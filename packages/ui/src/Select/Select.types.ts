import type { ReactNode } from 'react';
import type { SelectChangeEvent } from '@mui/material/Select';
import type { BaseInputProps } from '../BaseInput';

export type { SelectChangeEvent };

export interface SelectOption<T = unknown> {
  data: T;
  label: string;
  value: string | number;
  disabled: boolean;
}

/**
 * SelectProps — dropdown selector.
 *
 * Shared appearance, state, and identity props come from BaseInputProps.
 * Fields below are Select-specific: value shape, multiple, displayEmpty,
 * controlled open state, option sources, and event types.
 *
 * Multiple-value constraint: when `multiple={true}`, `value` MUST be an array.
 * The component emits a dev-mode console.error and normalises gracefully if
 * a scalar is passed, preventing the MUI crash — but fix the call site.
 *
 * Placeholder + label constraint: when `placeholder` is set, the label is
 * automatically forced to float (shrink=true + notched OutlinedInput) so
 * the resting label never overlaps the placeholder text in the trigger.
 */
export interface SelectProps extends BaseInputProps {
  // ── Value ─────────────────────────────────────────────────────────────────
  /** Controlled value. Must be an array when multiple=true. */
  value?: unknown;
  /** Uncontrolled default value. */
  defaultValue?: unknown;
  /** Renders a custom selected-value display. */
  renderValue?: (value: unknown) => ReactNode;

  // ── Behaviour ─────────────────────────────────────────────────────────────
  /**
   * Allow multiple selections. When true, `value` must be an array.
   * @default false
   */
  multiple?: boolean;
  /**
   * Show trigger content when value is empty.
   * Required for placeholder to be visible. Automatically forced to true
   * when `placeholder` is set.
   * @default false
   */
  displayEmpty?: boolean;

  // ── Controlled open state ─────────────────────────────────────────────────
  /** Controls dropdown open state. */
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;

  // ── Events ────────────────────────────────────────────────────────────────
  onChange?: (event: SelectChangeEvent<unknown>) => void;

  // ── Content ───────────────────────────────────────────────────────────────
  /** MenuItem elements. Takes precedence over `options` when both are provided. */
  children?: ReactNode;

  // ── Options (data-driven) ─────────────────────────────────────────────────
  /** Array of items to map into MenuItems. Ignored when `children` is provided. */
  options?: unknown[];
  /** Extracts the display label from an option item. @default String(item) */
  getOptionLabel?: (item: unknown) => string;
  /** Extracts the value from an option item. @default String(item) */
  getOptionValue?: (item: unknown) => string | number;
  /** Determines if an option is disabled. @default () => false */
  getOptionDisabled?: (item: unknown) => boolean;
  /** Custom renderer for each option. Receives the resolved SelectOption object. */
  renderOption?: (option: SelectOption) => ReactNode;
}

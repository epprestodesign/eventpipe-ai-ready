import type { SxProps, Theme } from '@mui/material';

// ─── DatePickerProps ──────────────────────────────────────────────────────────

export interface DatePickerProps {
  // ── Value ─────────────────────────────────────────────────────────────────

  /**
   * Controlled selected date. `undefined` = uncontrolled. `null` = controlled, no date selected.
   * When provided, the consumer owns the value and must update it via `onChange`.
   */
  value?: Date | null;

  /**
   * Initial value for uncontrolled mode. Ignored when `value` is provided.
   */
  defaultValue?: Date;

  /**
   * Called when the user selects a date.
   * Receives the new Date. Returns `null` if the selection is cleared (future).
   */
  onChange?: (date: Date | null) => void;

  // ── Input display ──────────────────────────────────────────────────────────

  /** Floating label for the text input. */
  label?: string;

  /**
   * Placeholder shown when no date is selected.
   * @default 'MM/DD/YYYY'
   */
  placeholder?: string;

  /** Disables the input and calendar. @default false */
  disabled?: boolean;

  // ── Calendar constraints ────────────────────────────────────────────────────

  /** Dates before this value are disabled. */
  minDate?: Date;

  /** Dates after this value are disabled. */
  maxDate?: Date;

  /** Specific dates to disable regardless of min/max. */
  disabledDates?: Date[];

  // ── Escape hatches ─────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

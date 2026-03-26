import type { ChangeEventHandler, ReactNode, ReactElement } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpSize3 } from '../types/shared';

export type LabelPlacement = 'end' | 'start' | 'top' | 'bottom';

export interface FormControlLabelProps {
  // ── Required ────────────────────────────────────────────────────────────
  /** The form control element (Checkbox, Radio, or Switch). */
  control: ReactElement;
  /** Label text or content. */
  label: ReactNode;

  // ── Appearance ──────────────────────────────────────────────────────────
  /**
   * Position of the label relative to the control.
   * @default 'end'
   */
  labelPlacement?: LabelPlacement;
  /**
   * Size — controls label font size and is forwarded to the control.
   * @default 'md'
   */
  size?: EpSize3;

  // ── State ───────────────────────────────────────────────────────────────
  /**
   * Disables the control and dims the label.
   * @default false
   */
  disabled?: boolean;
  /**
   * Appends a required asterisk to the label.
   * @default false
   */
  required?: boolean;

  // ── Controlled props (forwarded to control) ──────────────────────────────
  /** Controlled checked state. */
  checked?: boolean;
  /** Change handler. */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Input value. */
  value?: unknown;
  /** Input name. */
  name?: string;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

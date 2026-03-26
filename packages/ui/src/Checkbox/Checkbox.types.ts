import type { ChangeEventHandler, InputHTMLAttributes } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpColor, EpSize3 } from '../types/shared';

export interface CheckboxProps {
  // ── Appearance ────────────────────────────────────────────────────────────
  /**
   * Sizing category 5 (Form Controls): sm | md | lg
   * @default 'md'
   */
  size?: EpSize3;
  /** Active color. @default 'primary' */
  color?: EpColor;

  // ── State ─────────────────────────────────────────────────────────────────
  /** Controlled checked state. */
  checked?: boolean;
  /** Uncontrolled default checked state. */
  defaultChecked?: boolean;
  /**
   * Shows a dash (−) instead of a check. Used for "select all" patterns.
   * @default false
   */
  indeterminate?: boolean;
  /** Prevents interaction. @default false */
  disabled?: boolean;
  /** Marks as required (passed to native input). @default false */
  required?: boolean;

  // ── Identity ──────────────────────────────────────────────────────────────
  /** HTML id for the input. For label association. */
  id?: string;
  /** HTML name attribute. */
  name?: string;
  /** Input value attribute. Used with checkbox groups. */
  value?: unknown;

  // ── Events ────────────────────────────────────────────────────────────────
  onChange?: ChangeEventHandler<HTMLInputElement>;

  // ── Low-level ─────────────────────────────────────────────────────────────
  /** Passed directly to the native `<input>` element (e.g., aria-label). */
  inputProps?: InputHTMLAttributes<HTMLInputElement>;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

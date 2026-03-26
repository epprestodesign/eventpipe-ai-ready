import type { ChangeEventHandler, InputHTMLAttributes } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpColor, EpSize3 } from '../types/shared';

export interface SwitchProps {
  // ── Appearance ────────────────────────────────────────────────────────────
  /**
   * Sizing category 5 (Form Controls): sm | md | lg
   * @default 'md'
   */
  size?: EpSize3;
  /** Active color (checked track). @default 'primary' */
  color?: EpColor;
  /**
   * Visual style variant.
   * - `'default'` — flat track, no thumb shadow.
   * - `'ios'` — thumb drop shadow, lighter unchecked track; resembles iOS toggle.
   * @default 'default'
   */
  variant?: 'default' | 'ios';

  // ── State ─────────────────────────────────────────────────────────────────
  /** Controlled checked state. */
  checked?: boolean;
  /** Uncontrolled default checked state. */
  defaultChecked?: boolean;
  /** Prevents interaction. @default false */
  disabled?: boolean;
  /** Marks as required (passed to native input). @default false */
  required?: boolean;

  // ── Identity ──────────────────────────────────────────────────────────────
  /** HTML id for the input. For label association. */
  id?: string;
  /** HTML name attribute. */
  name?: string;
  /** Input value attribute. */
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

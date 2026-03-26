import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpColor, EpSize3 } from '../types/shared';

export interface RadioProps {
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
  /** Prevents interaction. @default false */
  disabled?: boolean;
  /** Marks as required (passed to native input). @default false */
  required?: boolean;

  // ── Identity ──────────────────────────────────────────────────────────────
  /** Input value — used by RadioGroup for selection matching. */
  value?: unknown;
  /** HTML id for the input. For label association. */
  id?: string;
  /** HTML name attribute. */
  name?: string;

  // ── Events ────────────────────────────────────────────────────────────────
  onChange?: ChangeEventHandler<HTMLInputElement>;

  // ── Low-level ─────────────────────────────────────────────────────────────
  /** Passed directly to the native `<input>` element (e.g., aria-label). */
  inputProps?: InputHTMLAttributes<HTMLInputElement>;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

export interface RadioGroupProps {
  /** Selected value (controlled). */
  value?: unknown;
  /** Uncontrolled default value. */
  defaultValue?: unknown;
  /** Shared name for all Radio children. */
  name?: string;
  /** Lays out radios in a row instead of a column. @default false */
  row?: boolean;
  /** Radio elements. */
  children: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  sx?: SxProps<Theme>;
}

import type React from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpSize3 } from '../types/shared';

/**
 * Unified variant for all EP input-family components.
 * TextFieldVariant and SelectVariant in types/shared.ts remain for
 * backward-compatibility; this is the canonical single alias.
 */
export type InputVariant = 'outlined' | 'filled';

/**
 * BaseInputProps — shared prop contract for TextField, Select, and Autocomplete.
 *
 * Centralises the 14 props that were previously duplicated (and could diverge)
 * across every input component. Component-specific props (value, adornments,
 * multiple, etc.) remain on the individual component's interface.
 *
 * Appearance, label/helper, state, identity, and escape-hatches are all covered.
 * Event handlers are NOT included — target element types differ per component.
 */
export interface BaseInputProps {
  // ── Appearance ────────────────────────────────────────────────────────────
  /** @default 'outlined' */
  variant?: InputVariant;
  /**
   * Sizing category 4 (Form Inputs): sm | md | lg.
   * Spec: docs/decisions/005-sizing-scale.md — Category 4
   * @default 'md'
   */
  size?: EpSize3;
  /** Stretches field to 100% of container width. @default false */
  fullWidth?: boolean;

  // ── Label & helper ────────────────────────────────────────────────────────
  /** Floating label. Auto-associated with the input via id/htmlFor. */
  label?: string;
  /** Helper text rendered below the field. */
  helperText?: React.ReactNode;
  /**
   * Placeholder text shown inside the field when empty.
   *
   * TextField: shown when field is focused and label has shrunk.
   * Select: shown in the trigger area when no value is selected.
   *   The label is automatically forced to float (shrink=true) so it never
   *   overlaps the placeholder. `displayEmpty` is also forced to true.
   */
  placeholder?: string;

  // ── State ─────────────────────────────────────────────────────────────────
  /** Colors border, label, and helper text red. @default false */
  error?: boolean;
  /** Prevents user interaction. @default false */
  disabled?: boolean;
  /**
   * Async loading state. Shows spinner, prevents interaction.
   * Applies aria-busy=true to the component root.
   * @default false
   */
  loading?: boolean;
  /** Appends * to label. @default false */
  required?: boolean;

  // ── Identity ──────────────────────────────────────────────────────────────
  /** HTML id. Auto-generated if omitted (for label ↔ input a11y association). */
  id?: string;
  /** HTML name attribute. */
  name?: string;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

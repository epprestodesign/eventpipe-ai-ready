import { useId } from 'react';
import type React from 'react';
import type { EpSize3 } from '../types/shared';

// ─── Spinner size map ──────────────────────────────────────────────────────
/**
 * Single source of truth for loading spinner sizes across TextField and Select.
 * Autocomplete delegates spinner rendering to MUI Autocomplete's internal
 * params.InputProps — no manual spinner injection needed there.
 */
export const SPINNER_SIZE: Record<EpSize3, number> = {
  sm: 14,
  md: 16,
  lg: 18,
};

// ─── Hook ──────────────────────────────────────────────────────────────────

interface UseBaseInputOptions {
  id?: string;
  helperText?: React.ReactNode;
  error?: boolean;
  loading?: boolean;
  disabled?: boolean;
  /** Select-only: triggers the multiple-value runtime guard. */
  multiple?: boolean;
  /** Select-only: the current controlled value (for multiple guard). */
  value?: unknown;
  /** Select-only: forces label shrink when set. */
  displayEmpty?: boolean;
  placeholder?: string;
}

export interface UseBaseInputResult {
  /** Resolved id — provided prop or auto-generated via React.useId(). */
  resolvedId: string;
  /** `{id}-label` for InputLabel.id and MuiSelect.labelId. */
  labelId: string;
  /** `{id}-helper` for FormHelperText.id and aria-describedby. */
  helperId: string;
  /**
   * `true` when the label must be forced to float.
   * Applies when Select renders a placeholder inside the trigger (displayEmpty
   * or placeholder set) so the resting label never overlaps visible content.
   * `undefined` defers to MUI's natural shrink logic (correct for TextField).
   */
  labelShrink: true | undefined;
  /**
   * Combined `disabled || loading`.
   * Pass to FormControl.disabled (Select) or use to set readOnly (TextField).
   */
  isInteractionDisabled: boolean;
  /**
   * Pre-composed ARIA props to spread onto the component root element.
   * Covers aria-busy (loading), aria-describedby (helperText), aria-invalid (error).
   */
  ariaProps: {
    'aria-busy'?: true;
    'aria-describedby'?: string;
    'aria-invalid'?: 'true';
  };
}

/**
 * useBaseInput — shared logic layer for the input component family.
 *
 * Consolidates:
 *   ① ID generation + derived IDs (labelId, helperId)
 *   ② Label-shrink coercion (Select placeholder-overlap fix)
 *   ③ Multiple-value runtime guard (prevents MUI Select crash)
 *   ④ Unified ARIA prop composition (aria-busy, aria-describedby, aria-invalid)
 *   ⑤ Interaction-disabled derivation (disabled || loading)
 *
 * Consumed by: TextField, Select.
 * Autocomplete uses aria-busy separately (delegates other logic to MUI Autocomplete).
 */
export function useBaseInput({
  id: idProp,
  helperText,
  error,
  loading,
  disabled,
  multiple,
  value,
  displayEmpty,
  placeholder,
}: UseBaseInputOptions): UseBaseInputResult {
  const generatedId = useId();
  const resolvedId = idProp ?? generatedId;
  const labelId    = `${resolvedId}-label`;
  const helperId   = `${resolvedId}-helper`;

  // ── ③ Multiple-value runtime guard ──────────────────────────────────────
  // MUI Select crashes (or mis-renders) when multiple=true and value is a
  // scalar. Guard here so consumers get a clear dev-time error before the
  // crash, with actionable guidance to pass an array.
  if (
    multiple &&
    value !== undefined &&
    !Array.isArray(value) &&
    process.env.NODE_ENV !== 'production'
  ) {
    console.error(
      '[EP Select] `value` must be an array when `multiple={true}`. ' +
        `Received ${typeof value}. ` +
        'Pass an array (e.g. value={[]}) or omit value for uncontrolled usage.'
    );
  }

  // ── ② Label-shrink coercion ──────────────────────────────────────────────
  // Problem: a Select with placeholder + label shows placeholder text in the
  // trigger area (via renderValue when empty) even when value is "". MUI's
  // FormControl context does NOT set `filled=true` in that case, so the
  // InputLabel stays in its resting position and overlaps the placeholder.
  //
  // Fix: force shrink=true on InputLabel whenever displayEmpty or placeholder
  // is active. This also requires `notched` on the OutlinedInput — see
  // Select.tsx where an explicit OutlinedInput is passed to MuiSelect.
  const labelShrink: true | undefined =
    displayEmpty || !!placeholder ? true : undefined;

  // ── ④ ARIA prop composition ──────────────────────────────────────────────
  const ariaProps: UseBaseInputResult['ariaProps'] = {
    ...(loading    && { 'aria-busy': true as const }),
    ...(helperText && { 'aria-describedby': helperId }),
    ...(error      && { 'aria-invalid': 'true' as const }),
  };

  return {
    resolvedId,
    labelId,
    helperId,
    labelShrink,
    isInteractionDisabled: !!(disabled || loading),
    ariaProps,
  };
}

// ─── normalizeMultipleValue ────────────────────────────────────────────────

/**
 * Prevents MUI Select from crashing when multiple=true but value is a scalar.
 *
 * - `multiple=false` → value passed through unchanged.
 * - `multiple=true, value=undefined` → returns [] (prevents MUI crash; MUI
 *   requires an array when multiple=true, even for the uncontrolled empty state).
 * - `multiple=true, value=[]` → passed through (already correct).
 * - `multiple=true, value="foo"` → wrapped as ["foo"] to prevent the crash.
 *
 * The runtime guard in useBaseInput still fires in dev so the consumer can fix
 * the call site — normalization is a silent fallback, not a silent fix.
 */
export function normalizeMultipleValue(
  value: unknown,
  multiple: boolean
): unknown {
  if (!multiple) return value;
  if (value === undefined) return [];
  if (Array.isArray(value)) return value;
  return [value];
}

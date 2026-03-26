import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';

// ─── Step data ────────────────────────────────────────────────────────────────

/**
 * A single step in the Stepper.
 * Identified by index position in the `steps` array.
 */
export interface StepperStepItem {
  /** Primary label displayed below (horizontal) or beside (vertical) the indicator. */
  label: ReactNode;
  /** Optional secondary text rendered below the label. */
  description?: ReactNode;
  /** Prevents the step from being clicked or showing active/completed state. */
  disabled?: boolean;
}

// ─── Visual state ─────────────────────────────────────────────────────────────

/** Drives indicator and label token lookups — Pattern C. */
export type StepState = 'inactive' | 'active' | 'completed' | 'disabled';

// ─── StepperProps ─────────────────────────────────────────────────────────────

export interface StepperProps {
  // ── Step data ── consumer owns both arrays ─────────────────────────────────

  /** Ordered list of steps. */
  steps: StepperStepItem[];

  /**
   * Index of the currently active step (0-based).
   * Drives the 'active' visual state for that step's indicator.
   */
  activeStep: number;

  /**
   * Set of step indices that are marked completed.
   * If omitted, auto-derived as all steps before `activeStep` (0..activeStep-1).
   * Pass an explicit Set when using non-linear mode with partial completion.
   */
  completedSteps?: Set<number>;

  // ── Layout ─────────────────────────────────────────────────────────────────

  /**
   * Layout orientation.
   * - 'horizontal': steps arranged in a row with horizontal connectors.
   * - 'vertical': steps stacked in a column with vertical connectors.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  // ── Navigation behaviour ────────────────────────────────────────────────────

  /**
   * When provided, steps become interactive buttons.
   * The click is subject to linear/nonLinear navigation rules.
   */
  onStepClick?: (stepIndex: number) => void;

  /**
   * Non-linear mode: any step (except disabled) is clickable regardless of
   * completion state. Requires `onStepClick`.
   * @default false
   */
  nonLinear?: boolean;

  // ── Escape hatches ─────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

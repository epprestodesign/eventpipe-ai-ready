import { Fragment, forwardRef, useMemo } from 'react';
import Box from '@mui/material/Box';
import type { StepperProps, StepperStepItem, StepState } from './Stepper.types';
import { Icon } from '../Icon';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-stepper-* custom properties.

const TOKEN = {
  // Indicator geometry
  indicatorSize:        () => `var(--ep-component-stepper-indicator-size)`,
  indicatorRadius:      () => `var(--ep-component-stepper-indicator-border-radius)`,
  indicatorFontSize:    () => `var(--ep-component-stepper-indicator-font-size)`,
  indicatorFontWeight:  () => `var(--ep-component-stepper-indicator-font-weight)`,
  indicatorBorderWidth: () => `var(--ep-component-stepper-indicator-border-width)`,
  // Indicator state colors — Pattern C: state-driven lookups
  indicatorBg:     (s: StepState) => `var(--ep-component-stepper-indicator-${s}-background)`,
  indicatorBorder: (s: StepState) => `var(--ep-component-stepper-indicator-${s}-border-color)`,
  indicatorColor:  (s: StepState) => `var(--ep-component-stepper-indicator-${s}-color)`,
  // Label
  labelFontFamily:    () => `var(--ep-component-stepper-label-font-family)`,
  labelFontSize:      () => `var(--ep-component-stepper-label-font-size)`,
  labelActiveWeight:  () => `var(--ep-component-stepper-label-active-weight)`,
  labelColor:         (s: StepState) => `var(--ep-component-stepper-label-${s}-color)`,
  // Description
  descFontSize: () => `var(--ep-component-stepper-description-font-size)`,
  descColor:    () => `var(--ep-component-stepper-description-color)`,
  // Connector
  connectorColor:     () => `var(--ep-component-stepper-connector-color)`,
  connectorCompleted: () => `var(--ep-component-stepper-connector-completed-color)`,
  connectorThickness: () => `var(--ep-component-stepper-connector-thickness)`,
} as const;

// ─── Internal: StepperIndicator ────────────────────────────────────────────
// Not exported. Renders the numbered circle or check icon.

interface IndicatorProps {
  stepNumber: number;   // 1-based for display
  state: StepState;
}

const StepperIndicator = ({ stepNumber, state }: IndicatorProps) => (
  <div
    aria-hidden="true"
    style={{
      display:         'flex',
      alignItems:      'center',
      justifyContent:  'center',
      width:           TOKEN.indicatorSize(),
      height:          TOKEN.indicatorSize(),
      minWidth:        TOKEN.indicatorSize(),
      borderRadius:    TOKEN.indicatorRadius(),
      border:          `${TOKEN.indicatorBorderWidth()} solid ${TOKEN.indicatorBorder(state)}`,
      backgroundColor: TOKEN.indicatorBg(state),
      color:           TOKEN.indicatorColor(state),
      fontSize:        TOKEN.indicatorFontSize(),
      fontWeight:      TOKEN.indicatorFontWeight(),
      transition:      'background-color 200ms ease, border-color 200ms ease',  // structural
      flexShrink:      0,
    }}
  >
    {state === 'completed' ? (
      <Icon name="check" size="sm" />
    ) : (
      String(stepNumber)
    )}
  </div>
);

// ─── Internal: StepperLabel ─────────────────────────────────────────────────
// Not exported. Renders the label and optional description text.

interface LabelProps {
  label: StepperStepItem['label'];
  description?: StepperStepItem['description'];
  state: StepState;
  orientation: 'horizontal' | 'vertical';
}

const StepperLabel = ({ label, description, state, orientation }: LabelProps) => (
  <div
    style={{
      textAlign: orientation === 'horizontal' ? 'center' : 'left',
      marginTop: orientation === 'horizontal' ? '8px' : '0',    // structural
    }}
  >
    <div
      style={{
        fontFamily: TOKEN.labelFontFamily(),
        fontSize:   TOKEN.labelFontSize(),
        fontWeight: state === 'active' ? TOKEN.labelActiveWeight() : '400',
        color:      TOKEN.labelColor(state),
        lineHeight: 1.4,
        transition: 'color 200ms ease, font-weight 200ms ease',  // structural
      }}
    >
      {label}
    </div>
    {description && (
      <div
        style={{
          fontFamily: TOKEN.labelFontFamily(),
          fontSize:   TOKEN.descFontSize(),
          color:      TOKEN.descColor(),
          marginTop:  '2px',  // structural
          lineHeight: 1.4,
        }}
      >
        {description}
      </div>
    )}
  </div>
);

// ─── Stepper ─────────────────────────────────────────────────────────────────

/**
 * Stepper — progression indicator and optional navigation system.
 *
 * Patterns used:
 * - Pattern C: state-driven visual — indicator + label styles keyed by StepState.
 * - Pattern A: active affordance — filled indicator distinguishes active step.
 *
 * Layout:
 * - 'horizontal': steps in a row; connectors grow between them.
 * - 'vertical': steps in a column; connectors run below each indicator.
 *
 * Navigation:
 * - Read-only when `onStepClick` is not provided.
 * - Linear (default): completed steps and the active step are clickable.
 * - Non-linear: any non-disabled step is clickable when `nonLinear` is true.
 *
 * State ownership: `activeStep` and `completedSteps` always live in the consumer.
 *
 * Spec: docs/contracts/product-system-rules.md
 */
export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  function Stepper(
    {
      steps,
      activeStep,
      completedSteps,
      orientation = 'horizontal',
      onStepClick,
      nonLinear = false,
      className,
      sx,
    },
    ref
  ) {
    // Derive completedSteps if consumer doesn't provide it:
    // linear default — all steps before activeStep are implicitly completed
    const completedSet = useMemo<Set<number>>(
      () =>
        completedSteps ??
        new Set(Array.from({ length: activeStep }, (_, i) => i)),
      [completedSteps, activeStep]
    );

    // ── State helpers ───────────────────────────────────────────────────────

    const getStepState = (idx: number, step: StepperStepItem): StepState => {
      if (step.disabled) return 'disabled';
      if (completedSet.has(idx)) return 'completed';
      if (idx === activeStep) return 'active';
      return 'inactive';
    };

    const isClickable = (idx: number, step: StepperStepItem): boolean => {
      if (!onStepClick || step.disabled) return false;
      if (nonLinear) return true;
      // linear: completed steps + active step are reachable
      return completedSet.has(idx) || idx === activeStep;
    };

    // ── Connector color helper ──────────────────────────────────────────────

    // Connector after step idx is "completed" if both sides are done/active
    const isConnectorCompleted = (idx: number): boolean =>
      completedSet.has(idx);

    // ── Render ──────────────────────────────────────────────────────────────

    if (orientation === 'vertical') {
      return (
        <Box
          ref={ref}
          className={className}
          sx={sx}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {steps.map((step, idx) => {
            const state    = getStepState(idx, step);
            const clickable = isClickable(idx, step);
            const isLast   = idx === steps.length - 1;
            const connectorDone = isConnectorCompleted(idx);

            return (
              <div
                key={idx}
                style={{ display: 'flex', gap: '12px' }}  // structural
              >
                {/* ── Left column: indicator + connector ─────────────────── */}
                <div
                  style={{
                    display:       'flex',
                    flexDirection: 'column',
                    alignItems:    'center',
                    flexShrink:    0,
                  }}
                >
                  <StepperIndicatorButton
                    stepNumber={idx + 1}
                    state={state}
                    clickable={clickable}
                    onClick={() => onStepClick?.(idx)}
                    ariaLabel={`Step ${idx + 1}${typeof step.label === 'string' ? ': ' + step.label : ''}`}
                    ariaCurrent={idx === activeStep ? 'step' : undefined}
                  />
                  {/* Vertical connector */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      style={{
                        flex:            1,
                        width:           TOKEN.connectorThickness(),
                        minHeight:       '24px',          // structural — ensure visibility
                        margin:          '4px 0',         // structural — gap between indicator and next
                        backgroundColor: connectorDone
                          ? TOKEN.connectorCompleted()
                          : TOKEN.connectorColor(),
                        transition: 'background-color 200ms ease',  // structural
                      }}
                    />
                  )}
                </div>

                {/* ── Right column: label + description ──────────────────── */}
                <div
                  style={{
                    paddingBottom: !isLast ? '8px' : '0',  // structural — spacing between steps
                    paddingTop:    '2px',                   // structural — optical alignment with indicator center
                    minHeight: !isLast ? '48px' : undefined,
                  }}
                >
                  <StepperLabel
                    label={step.label}
                    description={step.description}
                    state={state}
                    orientation="vertical"
                  />
                </div>
              </div>
            );
          })}
        </Box>
      );
    }

    // ── Horizontal layout ───────────────────────────────────────────────────
    return (
      <Box
        ref={ref}
        className={className}
        sx={sx}
        style={{
          display:    'flex',
          alignItems: 'flex-start',
          width:      '100%',
        }}
      >
        {steps.map((step, idx) => {
          const state     = getStepState(idx, step);
          const clickable = isClickable(idx, step);
          const isLast    = idx === steps.length - 1;
          const connectorDone = isConnectorCompleted(idx);

          return (
            <Fragment key={idx}>
              {/* ── Step item ──────────────────────────────────────────── */}
              <div
                style={{
                  display:       'flex',
                  flexDirection: 'column',
                  alignItems:    'center',
                  flexShrink:    0,
                  maxWidth:      '120px',   // structural — prevents overly wide step labels
                }}
              >
                <StepperIndicatorButton
                  stepNumber={idx + 1}
                  state={state}
                  clickable={clickable}
                  onClick={() => onStepClick?.(idx)}
                  ariaLabel={`Step ${idx + 1}${typeof step.label === 'string' ? ': ' + step.label : ''}`}
                  ariaCurrent={idx === activeStep ? 'step' : undefined}
                />
                <StepperLabel
                  label={step.label}
                  description={step.description}
                  state={state}
                  orientation="horizontal"
                />
              </div>

              {/* ── Horizontal connector ────────────────────────────────── */}
              {!isLast && (
                <div
                  aria-hidden="true"
                  style={{
                    flex:       1,
                    display:    'flex',
                    alignItems: 'flex-start',
                    // Align with the vertical center of the indicator
                    marginTop:  `calc((${TOKEN.indicatorSize()} - ${TOKEN.connectorThickness()}) / 2)`,
                    padding:    '0 8px',  // structural — gap between indicator and connector
                  }}
                >
                  <div
                    style={{
                      flex:            1,
                      height:          TOKEN.connectorThickness(),
                      backgroundColor: connectorDone
                        ? TOKEN.connectorCompleted()
                        : TOKEN.connectorColor(),
                      transition: 'background-color 200ms ease',  // structural
                    }}
                  />
                </div>
              )}
            </Fragment>
          );
        })}
      </Box>
    );
  }
);

Stepper.displayName = 'Stepper';

// ─── Internal: StepperIndicatorButton ──────────────────────────────────────
// Wraps StepperIndicator with optional interactive button semantics.
// Not exported.

interface IndicatorButtonProps {
  stepNumber: number;
  state: StepState;
  clickable: boolean;
  onClick: () => void;
  ariaLabel: string;
  ariaCurrent?: 'step' | undefined;
}

const StepperIndicatorButton = ({
  stepNumber,
  state,
  clickable,
  onClick,
  ariaLabel,
  ariaCurrent,
}: IndicatorButtonProps) => {
  if (!clickable) {
    return (
      <div aria-label={ariaLabel} aria-current={ariaCurrent}>
        <StepperIndicator stepNumber={stepNumber} state={state} />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      style={{
        // Reset button styles — structural
        background:  'none',
        border:      'none',
        padding:     0,
        margin:      0,
        cursor:      'pointer',
        display:     'flex',
        alignItems:  'center',
        borderRadius: TOKEN.indicatorRadius(),
        // Focus ring — Rule 8: outline ring for button controls
        outline:      'none',
      }}
      onFocus={(e) => {
        (e.currentTarget as HTMLButtonElement).style.outline =
          `${TOKEN.connectorThickness()} solid ${TOKEN.connectorCompleted()}`;
        (e.currentTarget as HTMLButtonElement).style.outlineOffset = '2px';
      }}
      onBlur={(e) => {
        (e.currentTarget as HTMLButtonElement).style.outline = 'none';
      }}
    >
      <StepperIndicator stepNumber={stepNumber} state={state} />
    </button>
  );
};

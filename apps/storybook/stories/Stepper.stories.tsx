import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '@eventpipe/ui';
import type { StepperStepItem } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Stepper> = {
  title: 'Components/Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Stepper — progression indicator and optional step navigation. ' +
          'Patterns: A (active affordance), C (state-driven indicator). ' +
          'Consumer owns activeStep + completedSteps; component owns no persistent state.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

// ─── Sample data ──────────────────────────────────────────────────────────────

const CHECKOUT_STEPS: StepperStepItem[] = [
  { label: 'Cart review' },
  { label: 'Shipping' },
  { label: 'Payment' },
  { label: 'Confirmation' },
];

const ONBOARDING_STEPS: StepperStepItem[] = [
  { label: 'Create account',  description: 'Name and email' },
  { label: 'Verify email',    description: 'Check your inbox' },
  { label: 'Set preferences', description: 'Notifications and privacy' },
  { label: 'Complete',        description: 'You\'re all set' },
];

const WORKFLOW_STEPS: StepperStepItem[] = [
  { label: 'Draft' },
  { label: 'Review' },
  { label: 'Approval',  disabled: false },
  { label: 'Published' },
];

const DISABLED_STEPS: StepperStepItem[] = [
  { label: 'Draft' },
  { label: 'Review' },
  { label: 'Legal review', disabled: true },
  { label: 'Published' },
];

// ─── Controlled wrapper ────────────────────────────────────────────────────────

const ControlledStepper = ({
  steps,
  initialStep = 0,
  initialCompleted,
  ...props
}: Partial<React.ComponentProps<typeof Stepper>> & {
  steps: StepperStepItem[];
  initialStep?: number;
  initialCompleted?: Set<number>;
}) => {
  const [activeStep, setActiveStep] = useState(initialStep);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(
    initialCompleted ?? new Set(Array.from({ length: initialStep }, (_, i) => i))
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        completedSteps={completedSteps}
        onStepClick={(idx) => setActiveStep(idx)}
        {...props}
      />
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => {
            if (activeStep > 0) setActiveStep(activeStep - 1);
          }}
          disabled={activeStep === 0}
          style={{ padding: '6px 14px', cursor: 'pointer', borderRadius: 4, border: '1px solid #D1D5DB' }}
        >
          Back
        </button>
        <button
          onClick={() => {
            if (activeStep < steps.length - 1) {
              setCompletedSteps(new Set([...completedSteps, activeStep]));
              setActiveStep(activeStep + 1);
            } else {
              setCompletedSteps(new Set([...completedSteps, activeStep]));
            }
          }}
          disabled={activeStep === steps.length - 1 && completedSteps.has(activeStep)}
          style={{
            padding: '6px 14px', cursor: 'pointer', borderRadius: 4,
            border: 'none', background: '#0057FF', color: '#fff',
          }}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
        <button
          onClick={() => {
            setActiveStep(0);
            setCompletedSteps(new Set());
          }}
          style={{ padding: '6px 14px', cursor: 'pointer', borderRadius: 4, border: '1px solid #D1D5DB' }}
        >
          Reset
        </button>
      </div>
      <div style={{ fontSize: 12, color: '#6B7280' }}>
        Active: {activeStep} — Completed: [{[...completedSteps].join(', ')}]
      </div>
    </div>
  );
};

// ─── Story 1: Default ─────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <Stepper
      steps={CHECKOUT_STEPS}
      activeStep={1}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Default horizontal stepper. Step 0 is completed (auto-derived), step 1 is active, ' +
          'steps 2–3 are inactive. No click handler — read-only display.',
      },
    },
  },
};

// ─── Story 2: Horizontal ──────────────────────────────────────────────────────

export const Horizontal: Story = {
  render: () => <ControlledStepper steps={CHECKOUT_STEPS} initialStep={1} />,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive horizontal stepper. Click a step or use Back/Next controls. ' +
          'Connectors turn brand blue as steps complete. Pattern C: indicator state switches on activeStep change.',
      },
    },
  },
};

// ─── Story 3: Vertical ────────────────────────────────────────────────────────

export const Vertical: Story = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <ControlledStepper steps={ONBOARDING_STEPS} initialStep={1} orientation="vertical" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Vertical layout. Steps stack in a column with a vertical connector line. ' +
          'Labels and descriptions sit to the right of the indicator column.',
      },
    },
  },
};

// ─── Story 4: Linear ─────────────────────────────────────────────────────────

export const Linear: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted]   = useState<Set<number>>(new Set());

    const handleNext = () => {
      setCompleted(prev => new Set([...prev, activeStep]));
      setActiveStep(prev => prev + 1);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Stepper
          steps={CHECKOUT_STEPS}
          activeStep={activeStep}
          completedSteps={completed}
          onStepClick={(idx) => setActiveStep(idx)}
          // nonLinear defaults to false — linear mode enforced
        />
        <div style={{ fontSize: 13, color: '#374151', padding: '16px', background: '#F9FAFB', borderRadius: 8 }}>
          <strong>Step {activeStep + 1}:</strong> {(CHECKOUT_STEPS[activeStep] as { label: string }).label}
          <p style={{ marginTop: 8, marginBottom: 0, color: '#6B7280', fontSize: 12 }}>
            In linear mode, you can only navigate to completed steps or the current step.
            Future steps are not clickable until reached.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={() => setActiveStep(s => s - 1)}
            disabled={activeStep === 0}
            style={{ padding: '6px 14px', borderRadius: 4, border: '1px solid #D1D5DB', cursor: 'pointer' }}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={activeStep === CHECKOUT_STEPS.length - 1}
            style={{ padding: '6px 14px', borderRadius: 4, border: 'none', background: '#0057FF', color: '#fff', cursor: 'pointer' }}
          >
            Next
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Linear mode (default). Only completed steps and the current active step are clickable. ' +
          'Clicking a future step has no effect. Use Next/Back to progress.',
      },
    },
  },
};

// ─── Story 5: NonLinear ───────────────────────────────────────────────────────

export const NonLinear: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted]   = useState<Set<number>>(new Set([0, 2]));

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Stepper
          steps={WORKFLOW_STEPS}
          activeStep={activeStep}
          completedSteps={completed}
          onStepClick={setActiveStep}
          nonLinear
        />
        <div style={{ fontSize: 13, color: '#6B7280' }}>
          Non-linear: click any step freely. Steps 0 and 2 start as completed.
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {WORKFLOW_STEPS.map((step, i) => (
            <button
              key={i}
              onClick={() =>
                setCompleted(prev => {
                  const next = new Set(prev);
                  next.has(i) ? next.delete(i) : next.add(i);
                  return next;
                })
              }
              style={{
                padding: '4px 10px', borderRadius: 4, fontSize: 12,
                border: '1px solid #D1D5DB', cursor: 'pointer',
                background: completed.has(i) ? '#D1FAE5' : '#fff',
                color: completed.has(i) ? '#065F46' : '#374151',
              }}
            >
              Toggle {(step as { label: string }).label}
            </button>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Non-linear mode: all steps are freely clickable. ' +
          'Useful for multi-section forms where order is flexible. ' +
          'Toggle buttons let you mark any step as completed independently.',
      },
    },
  },
};

// ─── Story 6: WithCompleted ───────────────────────────────────────────────────

export const WithCompleted: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <p style={{ margin: '0 0 12px', fontSize: 13, color: '#6B7280' }}>All steps completed</p>
        <Stepper
          steps={CHECKOUT_STEPS}
          activeStep={3}
          completedSteps={new Set([0, 1, 2, 3])}
        />
      </div>
      <div>
        <p style={{ margin: '0 0 12px', fontSize: 13, color: '#6B7280' }}>Partial completion (steps 0–1 done, step 2 active)</p>
        <Stepper
          steps={CHECKOUT_STEPS}
          activeStep={2}
        />
      </div>
      <div>
        <p style={{ margin: '0 0 12px', fontSize: 13, color: '#6B7280' }}>First step active (none completed)</p>
        <Stepper
          steps={CHECKOUT_STEPS}
          activeStep={0}
          completedSteps={new Set()}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Three completion scenarios shown together. ' +
          'Completed steps show a check icon (Pattern A visual affordance). ' +
          'Connectors between completed steps render in brand color.',
      },
    },
  },
};

// ─── Story 7: DisabledSteps ───────────────────────────────────────────────────

export const DisabledSteps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <p style={{ margin: '0 0 12px', fontSize: 13, color: '#6B7280' }}>Horizontal — step 2 disabled</p>
        <Stepper
          steps={DISABLED_STEPS}
          activeStep={1}
          onStepClick={() => {}}
          nonLinear
        />
      </div>
      <div>
        <p style={{ margin: '0 0 12px', fontSize: 13, color: '#6B7280' }}>Vertical — step 2 disabled</p>
        <div style={{ maxWidth: 300 }}>
          <Stepper
            steps={DISABLED_STEPS}
            activeStep={1}
            orientation="vertical"
            onStepClick={() => {}}
            nonLinear
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Disabled steps use muted indicator colors and are never clickable, ' +
          'even in non-linear mode. The step item `disabled: true` prevents interaction.',
      },
    },
  },
};

// ─── Story 8: Accessibility ───────────────────────────────────────────────────

export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>
        <strong>Keyboard behaviour:</strong>
        <ul style={{ margin: '4px 0 0', paddingLeft: 20 }}>
          <li>Tab → focuses each clickable step indicator (button)</li>
          <li>Enter / Space → activates the focused step</li>
          <li>Non-clickable steps are not in the tab order</li>
          <li>Disabled steps are skipped entirely</li>
        </ul>
        <strong>ARIA landmarks:</strong>
        <ul style={{ margin: '4px 0 0', paddingLeft: 20 }}>
          <li>Each clickable indicator: <code>role="button"</code>, <code>aria-label="Step N: Label"</code></li>
          <li>Active step indicator: <code>aria-current="step"</code></li>
          <li>Indicator icons: <code>aria-hidden="true"</code> (number/check is presentational)</li>
          <li>Connectors: <code>aria-hidden="true"</code></li>
        </ul>
      </div>
      <ControlledStepper steps={ONBOARDING_STEPS} initialStep={1} />
      <div style={{ maxWidth: 320, marginTop: 8 }}>
        <ControlledStepper steps={ONBOARDING_STEPS} initialStep={1} orientation="vertical" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility annotations for keyboard navigation and screen reader behaviour.',
      },
    },
  },
};

// ─── Story 9: TokenAudit ──────────────────────────────────────────────────────

const STEPPER_TOKENS: Array<{ token: string; role: string }> = [
  // Indicator geometry
  { token: '--ep-component-stepper-indicator-size',                        role: 'Indicator circle diameter' },
  { token: '--ep-component-stepper-indicator-border-radius',               role: 'Indicator border radius (50% = circle)' },
  { token: '--ep-component-stepper-indicator-font-size',                   role: 'Step number font size' },
  { token: '--ep-component-stepper-indicator-font-weight',                 role: 'Step number font weight' },
  { token: '--ep-component-stepper-indicator-border-width',                role: 'Indicator border width' },
  // Inactive state
  { token: '--ep-component-stepper-indicator-inactive-background',         role: 'Indicator bg (inactive)' },
  { token: '--ep-component-stepper-indicator-inactive-border-color',       role: 'Indicator border (inactive)' },
  { token: '--ep-component-stepper-indicator-inactive-color',              role: 'Indicator text (inactive)' },
  // Active state
  { token: '--ep-component-stepper-indicator-active-background',           role: 'Indicator bg (active)' },
  { token: '--ep-component-stepper-indicator-active-border-color',         role: 'Indicator border (active)' },
  { token: '--ep-component-stepper-indicator-active-color',                role: 'Indicator text (active)' },
  // Completed state
  { token: '--ep-component-stepper-indicator-completed-background',        role: 'Indicator bg (completed)' },
  { token: '--ep-component-stepper-indicator-completed-border-color',      role: 'Indicator border (completed)' },
  { token: '--ep-component-stepper-indicator-completed-color',             role: 'Indicator icon (completed)' },
  // Disabled state
  { token: '--ep-component-stepper-indicator-disabled-background',         role: 'Indicator bg (disabled)' },
  { token: '--ep-component-stepper-indicator-disabled-border-color',       role: 'Indicator border (disabled)' },
  { token: '--ep-component-stepper-indicator-disabled-color',              role: 'Indicator text (disabled)' },
  // Label
  { token: '--ep-component-stepper-label-font-size',                       role: 'Label font size' },
  { token: '--ep-component-stepper-label-active-weight',                   role: 'Label font weight (active)' },
  { token: '--ep-component-stepper-label-inactive-color',                  role: 'Label text (inactive)' },
  { token: '--ep-component-stepper-label-active-color',                    role: 'Label text (active)' },
  { token: '--ep-component-stepper-label-completed-color',                 role: 'Label text (completed)' },
  { token: '--ep-component-stepper-label-disabled-color',                  role: 'Label text (disabled)' },
  // Description
  { token: '--ep-component-stepper-description-font-size',                 role: 'Description font size' },
  { token: '--ep-component-stepper-description-color',                     role: 'Description text color' },
  // Connector
  { token: '--ep-component-stepper-connector-color',                       role: 'Connector line (default)' },
  { token: '--ep-component-stepper-connector-completed-color',             role: 'Connector line (completed)' },
  { token: '--ep-component-stepper-connector-thickness',                   role: 'Connector line thickness' },
];

export const TokenAudit: Story = {
  render: () => (
    <div style={{ fontFamily: 'system-ui', fontSize: 13 }}>
      <h3 style={{ margin: '0 0 8px', fontSize: 15 }}>
        Stepper — {STEPPER_TOKENS.length} CSS custom properties
      </h3>
      <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: 12 }}>
        All 4 states (inactive/active/completed/disabled) are fully tokenized.
        Pattern C: state string drives token key lookup — no prop explosion.
      </p>

      <div style={{ marginBottom: 24 }}>
        <Stepper
          steps={CHECKOUT_STEPS}
          activeStep={2}
          completedSteps={new Set([0, 1])}
        />
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
            <th style={{ textAlign: 'left', padding: '6px 10px', color: '#6B7280', fontSize: 12 }}>Token</th>
            <th style={{ textAlign: 'left', padding: '6px 10px', color: '#6B7280', fontSize: 12 }}>Value</th>
            <th style={{ textAlign: 'left', padding: '6px 10px', color: '#6B7280', fontSize: 12 }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {STEPPER_TOKENS.map(({ token, role }) => {
            const value = typeof window !== 'undefined'
              ? getComputedStyle(document.documentElement).getPropertyValue(token).trim()
              : '';
            const isColor = value.startsWith('#') || value.startsWith('rgb') || value === 'transparent';
            return (
              <tr key={token} style={{ borderBottom: '1px solid #F3F4F6' }}>
                <td style={{ padding: '6px 10px', fontFamily: 'monospace', fontSize: 11, color: '#374151' }}>
                  {token}
                </td>
                <td style={{ padding: '6px 10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {isColor && (
                      <span style={{
                        display: 'inline-block', width: 12, height: 12, borderRadius: 2,
                        background: value, border: '1px solid #E5E7EB', flexShrink: 0,
                      }} />
                    )}
                    <code style={{ fontSize: 11, color: '#6B7280' }}>{value || '—'}</code>
                  </div>
                </td>
                <td style={{ padding: '6px 10px', color: '#6B7280', fontSize: 12 }}>{role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: 'Live token audit. 28 CSS custom properties with resolved values.' },
    },
  },
};

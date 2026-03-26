import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Checkbox } from '@eventpipe/ui';
import type { CheckboxProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Selection/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],

  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Category 5 (Form Controls) — 3-tier sizing.',
      table: { defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'],
      description: 'Active color for checked/indeterminate state and focus ring.',
      table: { defaultValue: { summary: 'primary' } },
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state.',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state (partial selection).',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction. Applies disabled token set.',
    },
  },
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<Meta<typeof Checkbox>>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default unchecked state. */
export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
};

/** Checked state with primary color. */
export const Checked: Story = {
  args: {
    checked: true,
    color: 'primary',
  },
};

/** Indeterminate state — represents partial selection of children. */
export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    color: 'primary',
  },
};

/** All three sizes side by side. */
export const Sizes: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <FormControlLabel control={<Checkbox size="sm" checked />} label="sm" />
      <FormControlLabel control={<Checkbox size="md" checked />} label="md" />
      <FormControlLabel control={<Checkbox size="lg" checked />} label="lg" />
    </div>
  ),
};

/** All seven colors in checked state. */
export const Colors: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map((c) => (
        <FormControlLabel key={c} control={<Checkbox color={c} checked />} label={c} />
      ))}
    </div>
  ),
};

/** Disabled unchecked, checked, and indeterminate states. */
export const Disabled: Story = {
  args: {},
  render: () => (
    <FormGroup row>
      <FormControlLabel control={<Checkbox disabled />} label="Unchecked" />
      <FormControlLabel control={<Checkbox disabled checked />} label="Checked" />
      <FormControlLabel control={<Checkbox disabled indeterminate />} label="Indeterminate" />
    </FormGroup>
  ),
};

/** Controlled checkbox with label — typical form usage. */
export const WithLabel: Story = {
  args: {},
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
        label="Accept terms and conditions"
      />
    );
  },
};

/** Parent/children indeterminate pattern. */
export const IndeterminateGroup: Story = {
  args: {},
  render: () => {
    const [checked, setChecked] = React.useState<[boolean, boolean]>([true, false]);
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean) && !allChecked;
    return (
      <div>
        <FormControlLabel
          label="Parent"
          control={
            <Checkbox
              checked={allChecked}
              indeterminate={someChecked}
              onChange={(e) => setChecked([e.target.checked, e.target.checked])}
            />
          }
        />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 24 }}>
          <FormControlLabel
            label="Child A"
            control={
              <Checkbox
                checked={checked[0]}
                onChange={(e) => setChecked([e.target.checked, checked[1]])}
              />
            }
          />
          <FormControlLabel
            label="Child B"
            control={
              <Checkbox
                checked={checked[1]}
                onChange={(e) => setChecked([checked[0], e.target.checked])}
              />
            }
          />
        </div>
      </div>
    );
  },
};

/** Required checkbox — native validation attribute. */
export const Required: Story = {
  args: {
    required: true,
  },
};

/**
 * Token Audit — verifies all CSS custom properties resolve correctly.
 * Open DevTools and inspect each checkbox to confirm no `var(--ep-*)` fallbacks.
 */
export const TokenAudit: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <FormControlLabel control={<Checkbox size="sm" />} label="sm unchecked" />
      <FormControlLabel control={<Checkbox size="md" />} label="md unchecked" />
      <FormControlLabel control={<Checkbox size="lg" />} label="lg unchecked" />
      <FormControlLabel control={<Checkbox size="sm" checked />} label="sm checked (primary)" />
      <FormControlLabel control={<Checkbox size="md" checked color="error" />} label="md checked (error)" />
      <FormControlLabel control={<Checkbox size="lg" checked color="success" />} label="lg checked (success)" />
      <FormControlLabel control={<Checkbox indeterminate />} label="indeterminate" />
      <FormControlLabel control={<Checkbox disabled />} label="disabled unchecked" />
      <FormControlLabel control={<Checkbox disabled checked />} label="disabled checked" />
      <FormControlLabel control={<Checkbox disabled indeterminate />} label="disabled indeterminate" />
    </div>
  ),
};

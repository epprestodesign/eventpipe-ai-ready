import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Radio, RadioGroup } from '@eventpipe/ui';
import type { RadioProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Selection/Radio',
  component: Radio,
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
      description: 'Active color for checked state and focus ring.',
      table: { defaultValue: { summary: 'primary' } },
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state.',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction. Applies disabled token set.',
    },
  },
} as Meta<typeof Radio>;

export default meta;
type Story = StoryObj<Meta<typeof Radio>>;

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

/** All three sizes side by side. */
export const Sizes: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <FormControlLabel control={<Radio size="sm" checked />} label="sm" />
      <FormControlLabel control={<Radio size="md" checked />} label="md" />
      <FormControlLabel control={<Radio size="lg" checked />} label="lg" />
    </div>
  ),
};

/** All seven colors in checked state. */
export const Colors: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map((c) => (
        <FormControlLabel key={c} control={<Radio color={c} checked />} label={c} />
      ))}
    </div>
  ),
};

/** Disabled unchecked and checked states. */
export const Disabled: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <FormControlLabel control={<Radio disabled />} label="Unchecked" />
      <FormControlLabel control={<Radio disabled checked />} label="Checked" />
    </div>
  ),
};

/** Typical RadioGroup usage — vertical column (default). */
export const Group: Story = {
  args: {},
  render: () => {
    const [value, setValue] = React.useState('option1');
    return (
      <FormControl>
        <FormLabel>Preferred contact method</FormLabel>
        <RadioGroup
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="contact-method"
        >
          <FormControlLabel value="option1" control={<Radio />} label="Email" />
          <FormControlLabel value="option2" control={<Radio />} label="Phone" />
          <FormControlLabel value="option3" control={<Radio />} label="SMS" />
        </RadioGroup>
      </FormControl>
    );
  },
};

/** RadioGroup in row layout. */
export const GroupRow: Story = {
  args: {},
  render: () => {
    const [value, setValue] = React.useState('sm');
    return (
      <FormControl>
        <FormLabel>Size</FormLabel>
        <RadioGroup
          row
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="size-select"
        >
          <FormControlLabel value="sm" control={<Radio size="sm" />} label="Small" />
          <FormControlLabel value="md" control={<Radio size="md" />} label="Medium" />
          <FormControlLabel value="lg" control={<Radio size="lg" />} label="Large" />
        </RadioGroup>
      </FormControl>
    );
  },
};

/** RadioGroup with a disabled option. */
export const GroupWithDisabled: Story = {
  args: {},
  render: () => (
    <FormControl>
      <FormLabel>Plan</FormLabel>
      <RadioGroup defaultValue="basic" name="plan">
        <FormControlLabel value="basic" control={<Radio />} label="Basic" />
        <FormControlLabel value="pro" control={<Radio />} label="Pro" />
        <FormControlLabel value="enterprise" control={<Radio disabled />} label="Enterprise (contact sales)" />
      </RadioGroup>
    </FormControl>
  ),
};

/**
 * Token Audit — verifies all CSS custom properties resolve correctly.
 * Open DevTools and inspect each radio to confirm no `var(--ep-*)` fallbacks.
 */
export const TokenAudit: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <FormControlLabel control={<Radio size="sm" />} label="sm unchecked" />
      <FormControlLabel control={<Radio size="md" />} label="md unchecked" />
      <FormControlLabel control={<Radio size="lg" />} label="lg unchecked" />
      <FormControlLabel control={<Radio size="sm" checked />} label="sm checked (primary)" />
      <FormControlLabel control={<Radio size="md" checked color="error" />} label="md checked (error)" />
      <FormControlLabel control={<Radio size="lg" checked color="success" />} label="lg checked (success)" />
      <FormControlLabel control={<Radio disabled />} label="disabled unchecked" />
      <FormControlLabel control={<Radio disabled checked />} label="disabled checked" />
    </div>
  ),
};

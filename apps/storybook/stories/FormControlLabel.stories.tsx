import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormControlLabel, Checkbox, Switch, Radio, RadioGroup, Stack, Typography } from '@eventpipe/ui';
import type { FormControlLabelProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Form/FormControlLabel',
  component: FormControlLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Wraps a form control (Checkbox, Radio, or Switch) with a clickable label. Renders a native <label> element for click-to-toggle accessibility. Forwards size, disabled, checked, onChange, value, and name to the control via cloneElement.',
      },
    },
  },

  argTypes: {
    labelPlacement: {
      control: 'select',
      options: ['end', 'start', 'top', 'bottom'],
      description: 'Position of the label relative to the control.',
      table: { defaultValue: { summary: 'end' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Controls label font size and is forwarded to the control.',
      table: { defaultValue: { summary: 'md' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the control and dims the label.',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: 'Appends a required asterisk to the label.',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
    },
  },

  args: {
    label: 'Accept terms and conditions',
    labelPlacement: 'end',
    size: 'md',
    disabled: false,
    required: false,
  },
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default usage with a Checkbox control and end placement. */
export const WithCheckbox: Story = {
  render: () => (
    <FormControlLabel
      control={<Checkbox />}
      label="Send me event reminders"
    />
  ),
};

/** Switch control with label placed at the start (leading label). */
export const WithSwitch: Story = {
  render: () => (
    <FormControlLabel
      control={<Switch />}
      label="Enable email notifications"
      labelPlacement="start"
    />
  ),
};

/** Radio controls within a RadioGroup. */
export const WithRadio: Story = {
  render: () => {
    const [value, setValue] = React.useState('virtual');
    return (
      <div>
        <Typography variant="body2" color="secondary" gutterBottom>
          Event format
        </Typography>
        <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel control={<Radio />} label="Virtual" value="virtual" />
          <FormControlLabel control={<Radio />} label="In-person" value="in-person" />
          <FormControlLabel control={<Radio />} label="Hybrid" value="hybrid" />
        </RadioGroup>
      </div>
    );
  },
};

/** Required field — asterisk displayed after the label text. */
export const Required: Story = {
  render: () => (
    <Stack spacing={1}>
      <FormControlLabel
        control={<Checkbox />}
        label="I agree to the privacy policy"
        required
      />
      <FormControlLabel
        control={<Checkbox />}
        label="I accept the event code of conduct"
        required
      />
      <Typography variant="caption" color="secondary">
        The asterisk (*) is aria-hidden to prevent screen readers from announcing it redundantly.
      </Typography>
    </Stack>
  ),
};

/** All controls in disabled state. */
export const Disabled: Story = {
  render: () => (
    <Stack spacing={1}>
      <FormControlLabel
        control={<Checkbox />}
        label="Checkbox (disabled)"
        disabled
      />
      <FormControlLabel
        control={<Checkbox checked />}
        label="Checkbox checked (disabled)"
        disabled
      />
      <FormControlLabel
        control={<Switch />}
        label="Switch (disabled)"
        disabled
      />
      <FormControlLabel
        control={<Radio />}
        label="Radio (disabled)"
        disabled
      />
    </Stack>
  ),
};

/** All four label placements shown side by side. */
export const LabelPlacements: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="flex-start">
      {(['end', 'start', 'top', 'bottom'] as const).map((placement) => (
        <div key={placement} style={{ textAlign: 'center' }}>
          <Typography variant="caption" color="secondary" gutterBottom>
            {placement}
          </Typography>
          <div>
            <FormControlLabel
              control={<Checkbox checked />}
              label="Notify"
              labelPlacement={placement}
            />
          </div>
        </div>
      ))}
    </Stack>
  ),
};

/** All three sizes — sm, md, lg. */
export const SizeVariants: Story = {
  render: () => (
    <Stack spacing={1}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <FormControlLabel
          key={size}
          control={<Checkbox checked />}
          label={`Size: ${size} — Registration confirmed`}
          size={size}
        />
      ))}
    </Stack>
  ),
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@eventpipe/ui';
import type { SliderProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },

  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the slider thumb and track.',
      table: { defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'],
      description: 'Color theme for the slider.',
      table: { defaultValue: { summary: 'primary' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction.',
    },
    min: {
      control: 'number',
      description: 'Minimum value.',
      table: { defaultValue: { summary: '0' } },
    },
    max: {
      control: 'number',
      description: 'Maximum value.',
      table: { defaultValue: { summary: '100' } },
    },
    step: {
      control: 'number',
      description: 'Step increment.',
      table: { defaultValue: { summary: '1' } },
    },
    valueLabelDisplay: {
      control: 'select',
      options: ['off', 'on', 'auto'],
      description: 'When to display the value label.',
      table: { defaultValue: { summary: 'auto' } },
    },
  },
} as Meta<typeof Slider>;

export default meta;
type Story = StoryObj<Meta<typeof Slider>>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default slider: 0–100, primary color. */
export const Default: Story = {
  args: {
    'aria-label': 'Default slider',
    defaultValue: 30,
  },
};

/** Disabled state. */
export const Disabled: Story = {
  args: {
    'aria-label': 'Disabled slider',
    defaultValue: 50,
    disabled: true,
  },
};

/** Custom marks with labels. */
export const WithMarks: Story = {
  args: {
    'aria-label': 'Slider with marks',
    defaultValue: 40,
    min: 0,
    max: 100,
    step: 10,
    marks: [
      { value: 0, label: '0°C' },
      { value: 25, label: '25°C' },
      { value: 50, label: '50°C' },
      { value: 75, label: '75°C' },
      { value: 100, label: '100°C' },
    ],
  },
};

/** Range slider with two thumbs. */
export const Range: Story = {
  args: {
    'aria-label': 'Range slider',
    defaultValue: [20, 80],
  },
};

/** All seven color variants. */
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 300 }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map((c) => (
        <div key={c}>
          <div style={{ fontSize: 12, marginBottom: 4, color: '#666' }}>{c}</div>
          <Slider aria-label={`${c} slider`} defaultValue={60} color={c} />
        </div>
      ))}
    </div>
  ),
};

/** All three sizes. */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 300 }}>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <div key={s}>
          <div style={{ fontSize: 12, marginBottom: 4, color: '#666' }}>{s}</div>
          <Slider aria-label={`${s} slider`} defaultValue={50} size={s} />
        </div>
      ))}
    </div>
  ),
};

/** Value label always visible. */
export const WithValueLabel: Story = {
  args: {
    'aria-label': 'Slider with value label',
    defaultValue: 65,
    valueLabelDisplay: 'on',
  },
};

/** Accessibility: aria-label demonstrated. */
export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 300 }}>
      <div>
        <div style={{ fontSize: 12, marginBottom: 4, color: '#666' }}>
          aria-label: &quot;Volume control&quot;
        </div>
        <Slider aria-label="Volume control" defaultValue={70} />
      </div>
      <div>
        <div style={{ fontSize: 12, marginBottom: 4, color: '#666' }}>
          aria-label: &quot;Temperature range&quot; (range)
        </div>
        <Slider aria-label="Temperature range" defaultValue={[30, 70]} />
      </div>
      <div>
        <div style={{ fontSize: 12, marginBottom: 4, color: '#666' }}>
          Disabled with aria-label
        </div>
        <Slider aria-label="Unavailable setting" defaultValue={40} disabled />
      </div>
    </div>
  ),
};

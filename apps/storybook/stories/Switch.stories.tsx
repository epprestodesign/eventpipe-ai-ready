import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Switch } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Selection/Switch',
  component: Switch,
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
      description: 'Active color for checked track and focus ring.',
      table: { defaultValue: { summary: 'primary' } },
    },
    variant: {
      control: 'radio',
      options: ['default', 'ios'],
      description: 'Visual style variant. `ios` adds a thumb drop shadow and lighter unchecked track.',
      table: { defaultValue: { summary: 'default' } },
    },
    // checked drives controlled mode — disable as a standalone control.
    // The Default story seeds React.useState from args.checked so Controls
    // still work, but the switch remains interactive after the initial render.
    checked: {
      control: false,
      table: { disable: true },
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction. Applies disabled opacity.',
    },
  },
  args: {
    variant: 'default',
    size: 'md',
    color: 'primary',
  },
} as Meta<typeof Switch>;

export default meta;
type Story = StoryObj<Meta<typeof Switch>>;

// ─── Stories ──────────────────────────────────────────────────────────────────
//
// Controlled vs uncontrolled rules:
//   • checked + onChange + useState  → fully controlled, always interactive
//   • defaultChecked                 → uncontrolled, starts in given state, toggleable
//   • checked (no onChange)          → frozen — NEVER use except disabled stories
//   • disabled + checked             → intentionally frozen (non-interactive by design)

/** Default off state — fully interactive playground. */
export const Default: Story = {
  args: {},
  render: (args) => {
    const [on, setOn] = React.useState(false);
    return (
      <Switch
        {...args}
        checked={on}
        onChange={(e) => setOn(e.target.checked)}
      />
    );
  },
};

/** Starts in the checked (on) state — uncontrolled, fully toggleable. */
export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

/** All three sizes — off and on. The "on" switches use defaultChecked so they start
 *  checked but remain interactive. */
export const Sizes: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <FormControlLabel control={<Switch size={s} />}                    label={`${s} off`} />
          <FormControlLabel control={<Switch size={s} defaultChecked />}     label={`${s} on`} />
        </div>
      ))}
    </div>
  ),
};

/** All seven colors in the checked state. Uses defaultChecked — each switch is toggleable. */
export const Colors: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map((c) => (
        <FormControlLabel key={c} control={<Switch color={c} defaultChecked />} label={c} />
      ))}
    </div>
  ),
};

/** Disabled off and on states — intentionally non-interactive. */
export const Disabled: Story = {
  args: {},
  render: () => (
    <FormGroup row>
      <FormControlLabel control={<Switch disabled />}               label="Off" />
      <FormControlLabel control={<Switch disabled checked />}       label="On" />
    </FormGroup>
  ),
};

/** Controlled switch — value owned by useState, onChange drives state updates. */
export const Controlled: Story = {
  args: {},
  render: () => {
    const [on, setOn] = React.useState(false);
    return (
      <FormControlLabel
        control={
          <Switch
            checked={on}
            onChange={(e) => setOn(e.target.checked)}
          />
        }
        label={on ? 'Notifications on' : 'Notifications off'}
      />
    );
  },
};

/** Uncontrolled — starts checked, MUI owns internal state. Fully toggleable. */
export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
};

/** Accessibility — ARIA role="switch" semantics (set internally). */
export const Accessibility: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <FormControlLabel
        control={
          <Switch
            inputProps={{ 'aria-label': 'Enable dark mode' }}
          />
        }
        label="Dark mode"
      />
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            inputProps={{ 'aria-label': 'Enable notifications' }}
          />
        }
        label="Notifications"
      />
      <FormControlLabel
        control={
          <Switch
            disabled
            inputProps={{ 'aria-label': 'Feature unavailable' }}
          />
        }
        label="Beta feature (unavailable)"
      />
    </div>
  ),
};

// ─── iOS variant ──────────────────────────────────────────────────────────────

/** iOS variant — thumb drop shadow, lighter unchecked track. */
export const IosVariant: Story = {
  name: 'iOS Variant',
  args: {
    variant: 'ios',
    size: 'md',
    color: 'primary',
  },
};

/** iOS variant — all three sizes, off and on. */
export const IosSizes: Story = {
  name: 'iOS Variant — Sizes',
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <FormControlLabel control={<Switch size={s} variant="ios" />}                label={`${s} off`} />
          <FormControlLabel control={<Switch size={s} variant="ios" defaultChecked />} label={`${s} on`} />
        </div>
      ))}
    </div>
  ),
};

/** iOS variant — all seven colors in the checked state. */
export const IosColors: Story = {
  name: 'iOS Variant — Colors',
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map((c) => (
        <FormControlLabel key={c} control={<Switch variant="ios" color={c} defaultChecked />} label={c} />
      ))}
    </div>
  ),
};

/** Side-by-side comparison: default vs ios variant. */
export const VariantComparison: Story = {
  name: 'Variant Comparison',
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontSize: 12, color: '#666', fontFamily: 'monospace' }}>default vs ios — off and on states</div>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ fontSize: 11, color: '#999', width: 20 }}>{s}</span>
          <FormControlLabel control={<Switch size={s} variant="default" />}                label="default off" />
          <FormControlLabel control={<Switch size={s} variant="default" defaultChecked />} label="default on" />
          <FormControlLabel control={<Switch size={s} variant="ios" />}                    label="ios off" />
          <FormControlLabel control={<Switch size={s} variant="ios" defaultChecked />}     label="ios on" />
        </div>
      ))}
    </div>
  ),
};

/** iOS variant disabled states — intentionally non-interactive. */
export const IosDisabled: Story = {
  name: 'iOS Variant — Disabled',
  args: {},
  render: () => (
    <FormGroup row>
      <FormControlLabel control={<Switch variant="ios" disabled />}               label="Off" />
      <FormControlLabel control={<Switch variant="ios" disabled checked />}       label="On" />
    </FormGroup>
  ),
};

/**
 * Token Audit — verifies all CSS custom properties resolve correctly.
 * Open DevTools and inspect each switch to confirm no `var(--ep-*)` fallbacks.
 */
export const TokenAudit: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <React.Fragment key={s}>
          <FormControlLabel control={<Switch size={s} />}                              label={`${s} off`} />
          <FormControlLabel control={<Switch size={s} defaultChecked />}               label={`${s} on (primary)`} />
          <FormControlLabel control={<Switch size={s} defaultChecked color="error" />} label={`${s} on (error)`} />
        </React.Fragment>
      ))}
      <FormControlLabel control={<Switch disabled />}               label="disabled off" />
      <FormControlLabel control={<Switch disabled checked />}       label="disabled on" />
    </div>
  ),
};

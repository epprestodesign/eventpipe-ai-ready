import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from '@eventpipe/ui';
import { Icon } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Horizontal (or vertical) tab strip with keyboard navigation. ' +
          'Implements ARIA tabs pattern: role="tablist", role="tab", role="tabpanel". ' +
          'Arrow key navigation handled by MUI. ' +
          'Compose with Tab children and Tabs.Panel for content regions. ' +
          'Spec: docs/specs/components/tabs.md',
      },
    },
  },
  argTypes: {
    variant:     { control: 'radio',   options: ['standard', 'scrollable', 'fullWidth'] },
    orientation: { control: 'radio',   options: ['horizontal', 'vertical'] },
    centered:    { control: 'boolean' },
    // Disable value/onChange — controlled internally via React.useState in each story.
    // useArgs is avoided: in Docs mode all embedded stories share arg-store context
    // and updateArgs triggers cross-story re-renders that break interaction.
    value:    { control: false, table: { disable: true } },
    onChange: { control: false, table: { disable: true } },
  },
  args: {
    variant:     'standard',
    orientation: 'horizontal',
    centered:    false,
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────
// Each story uses React.useState for the active tab — NOT useArgs.
//
// Reason: useArgs connects story state to the Storybook arg store. In Canvas
// mode this works fine, but in Docs mode all embedded stories render in the
// same React tree and updateArgs triggers re-renders that reset interaction
// state across stories. React.useState keeps each story instance self-contained
// and behaves identically in Canvas and Docs.
//
// Rules:
//   1. Initial useState value matches the first Tab's value string.
//   2. Tab value props, Tabs.Panel index props, and initial useState value are
//      the same string in each story.
//   3. All values are strings.
//   4. onChange always uses the two-arg MUI signature: (_, newValue).

/** Default — three-tab strip with controlled panels.
 * variant / orientation / centered from Controls update layout without
 * resetting the selected tab. */
export const Default: Story = {
  args: {},
  render: function DefaultRender(args) {
    const [activeTab, setActiveTab] = React.useState('events');
    return (
      <div>
        <Tabs
          variant={args.variant}
          orientation={args.orientation}
          centered={args.centered}
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue as string)}
        >
          <Tab label="Events"    value="events" />
          <Tab label="Venues"    value="venues" />
          <Tab label="Attendees" value="attendees" />
        </Tabs>
        <Tabs.Panel value={activeTab} index="events">
          <div style={{ padding: '16px 0' }}>Events content panel.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="venues">
          <div style={{ padding: '16px 0' }}>Venues content panel.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="attendees">
          <div style={{ padding: '16px 0' }}>Attendees content panel.</div>
        </Tabs.Panel>
      </div>
    );
  },
};

/** Controlled — value managed externally, onChange drives state. */
export const Controlled: Story = {
  name: 'Controlled',
  args: { variant: 'standard' },
  render: function ControlledRender() {
    const [activeTab, setActiveTab] = React.useState('tab-one');
    return (
      <div>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
          <Tab label="Tab One"   value="tab-one" />
          <Tab label="Tab Two"   value="tab-two" />
          <Tab label="Tab Three" value="tab-three" />
        </Tabs>
        <Tabs.Panel value={activeTab} index="tab-one">
          <div style={{ padding: '16px 0' }}>Content for Tab One.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="tab-two">
          <div style={{ padding: '16px 0' }}>Content for Tab Two.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="tab-three">
          <div style={{ padding: '16px 0' }}>Content for Tab Three.</div>
        </Tabs.Panel>
      </div>
    );
  },
};

/** Disabled tab — one tab in the strip is non-interactive. */
export const WithDisabled: Story = {
  name: 'With Disabled Tab',
  args: { variant: 'standard' },
  render: function WithDisabledRender() {
    const [activeTab, setActiveTab] = React.useState('active');
    return (
      <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
        <Tab label="Active"   value="active" />
        <Tab label="Disabled" value="disabled" disabled />
        <Tab label="Another"  value="another" />
      </Tabs>
    );
  },
};

/** Full width — tabs stretch to fill container width. */
export const FullWidth: Story = {
  name: 'Full Width',
  args: { variant: 'fullWidth' },
  render: function FullWidthRender() {
    const [activeTab, setActiveTab] = React.useState('overview');
    return (
      <div style={{ width: 480 }}>
        <Tabs value={activeTab} variant="fullWidth" onChange={(_, newValue) => setActiveTab(newValue as string)}>
          <Tab label="Overview" value="overview" />
          <Tab label="Details"  value="details" />
          <Tab label="History"  value="history" />
        </Tabs>
      </div>
    );
  },
};

const SCROLLABLE_TABS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

/** Scrollable — more tabs than fit, scroll buttons appear on overflow. */
export const Scrollable: Story = {
  name: 'Scrollable',
  args: { variant: 'scrollable' },
  render: function ScrollableRender() {
    const [activeTab, setActiveTab] = React.useState('January');
    return (
      <div style={{ width: 400 }}>
        <Tabs value={activeTab} variant="scrollable" scrollButtons="auto" onChange={(_, newValue) => setActiveTab(newValue as string)}>
          {SCROLLABLE_TABS.map((t) => (
            <Tab key={t} label={t} value={t} />
          ))}
        </Tabs>
      </div>
    );
  },
};

/** With Icons — icon + label in tab buttons. */
export const WithIcons: Story = {
  name: 'With Icons',
  args: { variant: 'standard' },
  render: function WithIconsRender() {
    const [activeTab, setActiveTab] = React.useState('calendar');
    return (
      <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
        <Tab label="Calendar" value="calendar" icon={<Icon name="calendar" size="sm" />} iconPosition="start" />
        <Tab label="People"   value="people"   icon={<Icon name="person"   size="sm" />} iconPosition="start" />
        <Tab label="Settings" value="settings" icon={<Icon name="settings" size="sm" />} iconPosition="start" />
      </Tabs>
    );
  },
};

/** keepMounted — inactive panels stay in DOM; useful for preserving state. */
export const KeepMounted: Story = {
  name: 'keepMounted Panel',
  args: { variant: 'standard' },
  render: function KeepMountedRender() {
    const [activeTab, setActiveTab] = React.useState('panel-a');
    return (
      <div>
        <p style={{ fontFamily: 'monospace', fontSize: 12, color: '#666', marginBottom: 8 }}>
          Both panels remain in the DOM even when inactive (keepMounted).
        </p>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
          <Tab label="Panel A" value="panel-a" />
          <Tab label="Panel B" value="panel-b" />
        </Tabs>
        <Tabs.Panel value={activeTab} index="panel-a" keepMounted>
          <div style={{ padding: '16px 0' }}>Panel A — always in DOM.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="panel-b" keepMounted>
          <div style={{ padding: '16px 0' }}>Panel B — always in DOM.</div>
        </Tabs.Panel>
      </div>
    );
  },
};

/** Accessibility — ARIA tabs pattern, keyboard navigation notes. */
export const Accessibility: Story = {
  name: 'Accessibility',
  args: { variant: 'standard' },
  render: function AccessibilityRender() {
    const [activeTab, setActiveTab] = React.useState('first');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={{ fontSize: 13, color: '#666', margin: 0 }}>
          MUI implements the ARIA tabs pattern automatically:<br />
          • <code>role="tablist"</code> on the Tabs container<br />
          • <code>role="tab"</code> on each Tab<br />
          • <code>role="tabpanel"</code> on each Tabs.Panel<br />
          • Arrow keys (← →) navigate between tabs<br />
          • Focus indicator uses the EP focus ring token
        </p>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
          <Tab label="First"  value="first" />
          <Tab label="Second" value="second" />
          <Tab label="Third"  value="third" />
        </Tabs>
        <Tabs.Panel value={activeTab} index="first">
          <div style={{ padding: '16px 0' }}>First panel content.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="second">
          <div style={{ padding: '16px 0' }}>Second panel content.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="third">
          <div style={{ padding: '16px 0' }}>Third panel content.</div>
        </Tabs.Panel>
      </div>
    );
  },
};

// ── Token Audit ───────────────────────────────────────────────────────────────

const TOKEN_AUDIT_VARS = [
  '--ep-component-tabs-border-bottom-color',
  '--ep-component-tabs-border-bottom-width',
  '--ep-component-tabs-tab-color',
  '--ep-component-tabs-tab-color-active',
  '--ep-component-tabs-tab-color-disabled',
  '--ep-component-tabs-tab-background-hover',
  '--ep-component-tabs-tab-background-focus',
  '--ep-component-tabs-tab-font-size',
  '--ep-component-tabs-tab-font-weight',
  '--ep-component-tabs-tab-font-weight-active',
  '--ep-component-tabs-tab-padding-y',
  '--ep-component-tabs-tab-padding-x',
  '--ep-component-tabs-tab-min-width',
  '--ep-component-tabs-indicator-color',
  '--ep-component-tabs-indicator-height',
  '--ep-component-tabs-indicator-border-radius',
  '--ep-component-tabs-focus-ring-color',
  '--ep-component-tabs-focus-ring-width',
  '--ep-component-tabs-focus-ring-offset',
];

/**
 * Token Audit — all CSS custom properties the Tabs component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  args: { variant: 'standard' },
  render: function TokenAuditRender() {
    const [activeTab, setActiveTab] = React.useState('alpha');
    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ color: '#666', marginBottom: 8 }}>
          Open DevTools → Computed to verify each var resolves. Total: {TOKEN_AUDIT_VARS.length} vars.
        </p>
        <table style={{ borderCollapse: 'collapse', marginBottom: 32 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '4px 12px 4px 0', textAlign: 'left' }}>CSS custom property</th>
              <th style={{ padding: '4px 12px', textAlign: 'left' }}>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {TOKEN_AUDIT_VARS.map((v) => (
              <tr key={v} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '4px 12px 4px 0' }}>{v}</td>
                <td style={{ padding: '4px 12px' }}>
                  <span
                    style={{
                      display: 'inline-block', width: 16, height: 16,
                      background: `var(${v})`, border: '1px solid #ccc',
                      verticalAlign: 'middle',
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
          <Tab label="Alpha" value="alpha" />
          <Tab label="Beta"  value="beta" />
          <Tab label="Gamma" value="gamma" disabled />
        </Tabs>
      </div>
    );
  },
};

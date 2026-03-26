import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbItem, BreadcrumbLink } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Hierarchical navigation trail. ' +
          'Wraps children in <nav aria-label="breadcrumb"><ol> per ARIA landmark spec. ' +
          'Last child is BreadcrumbItem (non-interactive, aria-current="page"). ' +
          'Preceding children are BreadcrumbLink (interactive). ' +
          'Default separator: chevron-right icon from EP icon system. ' +
          'Spec: docs/specs/components/breadcrumbs.md',
      },
    },
  },
  argTypes: {
    maxItems:            { control: 'number' },
    itemsBeforeCollapse: { control: 'number' },
    itemsAfterCollapse:  { control: 'number' },
    'aria-label':        { control: 'text' },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — three-level hierarchy with links and current page. */
export const Default: Story = {
  render: () => (
    <Breadcrumbs aria-label="breadcrumb">
      <BreadcrumbLink href="/home">Home</BreadcrumbLink>
      <BreadcrumbLink href="/events">Events</BreadcrumbLink>
      <BreadcrumbItem>Summer Gala 2026</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

/** Two levels — minimal hierarchy: one link + current page. */
export const TwoLevels: Story = {
  name: 'Two Levels',
  render: () => (
    <Breadcrumbs aria-label="breadcrumb">
      <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
      <BreadcrumbItem>Settings</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

/** Four levels — deeper hierarchy. */
export const FourLevels: Story = {
  name: 'Four Levels',
  render: () => (
    <Breadcrumbs aria-label="breadcrumb">
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
      <BreadcrumbLink href="/org">Organization</BreadcrumbLink>
      <BreadcrumbLink href="/org/events">Events</BreadcrumbLink>
      <BreadcrumbItem>Annual Gala 2026</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

/** Collapsed — maxItems triggers ellipsis when list is long. */
export const Collapsed: Story = {
  name: 'Collapsed (maxItems=3)',
  render: () => (
    <Breadcrumbs aria-label="breadcrumb" maxItems={3} itemsBeforeCollapse={1} itemsAfterCollapse={1}>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
      <BreadcrumbLink href="/org">Organization</BreadcrumbLink>
      <BreadcrumbLink href="/org/events">Events</BreadcrumbLink>
      <BreadcrumbLink href="/org/events/2026">2026 Season</BreadcrumbLink>
      <BreadcrumbLink href="/org/events/2026/gala">Gala</BreadcrumbLink>
      <BreadcrumbItem>Ticket Sales</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

/** onClick handler — link crumb using onClick instead of href. */
export const WithClickHandler: Story = {
  name: 'onClick Handler',
  render: () => {
    const [clicked, setClicked] = React.useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <BreadcrumbLink onClick={() => setClicked('Home')}>Home</BreadcrumbLink>
          <BreadcrumbLink onClick={() => setClicked('Events')}>Events</BreadcrumbLink>
          <BreadcrumbItem>Summer Gala 2026</BreadcrumbItem>
        </Breadcrumbs>
        {clicked && (
          <p style={{ fontFamily: 'monospace', fontSize: 12, color: '#666', margin: 0 }}>
            Clicked: {clicked}
          </p>
        )}
      </div>
    );
  },
};

/** Custom separator — override the default chevron-right. */
export const CustomSeparator: Story = {
  name: 'Custom Separator',
  render: () => (
    <Breadcrumbs aria-label="breadcrumb" separator="/">
      <BreadcrumbLink href="/home">Home</BreadcrumbLink>
      <BreadcrumbLink href="/events">Events</BreadcrumbLink>
      <BreadcrumbItem>Summer Gala 2026</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

/** Accessibility — ARIA landmark structure and keyboard navigation. */
export const Accessibility: Story = {
  name: 'Accessibility',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'sans-serif' }}>
      <p style={{ fontSize: 13, color: '#666', margin: 0 }}>
        MUI wraps children in <code>&lt;nav aria-label="breadcrumb"&gt;&lt;ol&gt;</code> automatically.<br />
        Last crumb (<code>BreadcrumbItem</code>) carries <code>aria-current="page"</code>.<br />
        Link crumbs (<code>BreadcrumbLink</code>) are keyboard-focusable with the EP focus ring.
      </p>
      <Breadcrumbs aria-label="breadcrumb">
        <BreadcrumbLink href="/home">Home</BreadcrumbLink>
        <BreadcrumbLink href="/events">Events</BreadcrumbLink>
        <BreadcrumbItem>Summer Gala 2026</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  ),
};

/**
 * Token Audit — all CSS custom properties the Breadcrumbs component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  render: () => {
    const vars = [
      '--ep-component-breadcrumbs-item-color',
      '--ep-component-breadcrumbs-item-color-active',
      '--ep-component-breadcrumbs-item-color-hover',
      '--ep-component-breadcrumbs-item-font-size',
      '--ep-component-breadcrumbs-separator-color',
      '--ep-component-breadcrumbs-separator-gap',
      '--ep-component-breadcrumbs-focus-ring-color',
      '--ep-component-breadcrumbs-focus-ring-width',
      '--ep-component-breadcrumbs-focus-ring-offset',
    ];

    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ color: '#666', marginBottom: 8 }}>
          Open DevTools → Computed to verify each var resolves. Total: {vars.length} vars.
        </p>
        <table style={{ borderCollapse: 'collapse', marginBottom: 32 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '4px 12px 4px 0', textAlign: 'left' }}>CSS custom property</th>
              <th style={{ padding: '4px 12px', textAlign: 'left' }}>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {vars.map((v) => (
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
        <Breadcrumbs aria-label="breadcrumb">
          <BreadcrumbLink href="/home">Home</BreadcrumbLink>
          <BreadcrumbLink href="/events">Events</BreadcrumbLink>
          <BreadcrumbItem>Summer Gala 2026</BreadcrumbItem>
        </Breadcrumbs>
      </div>
    );
  },
};

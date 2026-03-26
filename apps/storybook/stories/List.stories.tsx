import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListDivider, Icon } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Surfaces/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Vertical container for interactive or display items. Compose with ListItem and ListDivider. Focus pattern: backgroundFocus state change (no outline ring) — consistent with Menu.',
      },
    },
  },

  argTypes: {
    dense:          { control: 'boolean' },
    disablePadding: { control: 'boolean' },
  },

  args: {
    dense:          false,
    disablePadding: false,
    children:       React.createElement(ListItem, {}, 'List item'),
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — use Controls to explore. */
export const Default: Story = {
  render: (args) => (
    <List {...args} sx={{ maxWidth: 320 }}>
      <ListItem onClick={() => {}}>Inbox</ListItem>
      <ListItem onClick={() => {}}>Drafts</ListItem>
      <ListItem onClick={() => {}}>Sent</ListItem>
    </List>
  ),
};

/** All interactive states visible simultaneously. */
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div>
        <Typography variant="overline" color="text.secondary">Default</Typography>
        <List sx={{ maxWidth: 240 }} disablePadding>
          <ListItem onClick={() => {}}>Default item</ListItem>
        </List>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Selected</Typography>
        <List sx={{ maxWidth: 240 }} disablePadding>
          <ListItem onClick={() => {}} selected>Selected item</ListItem>
        </List>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Disabled</Typography>
        <List sx={{ maxWidth: 240 }} disablePadding>
          <ListItem disabled>Disabled item</ListItem>
        </List>
      </div>
    </div>
  ),
};

/** Dense mode — tighter vertical padding. */
export const Dense: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div>
        <Typography variant="overline" color="text.secondary">Standard padding</Typography>
        <List sx={{ maxWidth: 240, border: '1px solid #eee' }} disablePadding>
          <ListItem onClick={() => {}}>Item one</ListItem>
          <ListItem onClick={() => {}}>Item two</ListItem>
          <ListItem onClick={() => {}}>Item three</ListItem>
        </List>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Dense</Typography>
        <List sx={{ maxWidth: 240, border: '1px solid #eee' }} disablePadding>
          <ListItem dense onClick={() => {}}>Item one</ListItem>
          <ListItem dense onClick={() => {}}>Item two</ListItem>
          <ListItem dense onClick={() => {}}>Item three</ListItem>
        </List>
      </div>
    </div>
  ),
};

/** ListDivider — visual separator between item groups. */
export const WithDivider: Story = {
  render: () => (
    <List sx={{ maxWidth: 280 }} disablePadding>
      <ListItem onClick={() => {}}>
        <span>
          <div style={{ fontWeight: 500 }}>Inbox</div>
        </span>
      </ListItem>
      <ListItem onClick={() => {}}>
        <span>
          <div style={{ fontWeight: 500 }}>Drafts</div>
        </span>
      </ListItem>
      <ListDivider />
      <ListItem onClick={() => {}}>
        <span>
          <div style={{ fontWeight: 500 }}>Sent</div>
        </span>
      </ListItem>
      <ListItem onClick={() => {}}>
        <span>
          <div style={{ fontWeight: 500 }}>Spam</div>
        </span>
      </ListItem>
      <ListDivider />
      <ListItem disabled>
        <span>
          <div style={{ fontWeight: 500 }}>Trash (disabled)</div>
        </span>
      </ListItem>
    </List>
  ),
};

/** WithIcons — startIcon and endIcon slots. */
export const WithIcons: Story = {
  render: () => (
    <List sx={{ maxWidth: 300 }} disablePadding>
      <ListItem onClick={() => {}} startIcon={<Icon name="person" size="sm" />}>
        Profile
      </ListItem>
      <ListItem onClick={() => {}} startIcon={<Icon name="settings" size="sm" />}>
        Settings
      </ListItem>
      <ListItem onClick={() => {}} startIcon={<Icon name="calendar" size="sm" />}>
        Calendar
      </ListItem>
      <ListDivider />
      <ListItem
        onClick={() => {}}
        startIcon={<Icon name="download" size="sm" />}
        endIcon={<Icon name="chevron-right" size="sm" />}
      >
        Downloads
      </ListItem>
      <ListItem
        onClick={() => {}}
        startIcon={<Icon name="upload" size="sm" />}
        endIcon={<Icon name="chevron-right" size="sm" />}
      >
        Uploads
      </ListItem>
    </List>
  ),
};

/** WithSelection — selected state for navigation or active-item patterns. */
export const WithSelection: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string>('inbox');
    const items = [
      { id: 'inbox',   label: 'Inbox',    icon: 'person' as const },
      { id: 'drafts',  label: 'Drafts',   icon: 'edit' as const },
      { id: 'sent',    label: 'Sent',     icon: 'arrow-forward' as const },
      { id: 'archive', label: 'Archive',  icon: 'download' as const },
    ];

    return (
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        <div>
          <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
            Navigation list
          </Typography>
          <List sx={{ maxWidth: 240 }} disablePadding>
            {items.map(({ id, label, icon }) => (
              <ListItem
                key={id}
                selected={selected === id}
                onClick={() => setSelected(id)}
                startIcon={<Icon name={icon} size="sm" />}
              >
                {label}
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
            With dividers
          </Typography>
          <List sx={{ maxWidth: 240 }} disablePadding>
            {items.slice(0, 2).map(({ id, label }) => (
              <ListItem key={id} selected={selected === id} onClick={() => setSelected(id)}>
                {label}
              </ListItem>
            ))}
            <ListDivider />
            {items.slice(2).map(({ id, label }) => (
              <ListItem key={id} selected={selected === id} onClick={() => setSelected(id)}>
                {label}
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  },
};

/** Accessibility — keyboard navigation and screen-reader patterns. */
export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary">Role and keyboard</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Each ListItem renders as a focusable button. Tab or arrow keys move focus.
          Activated by Enter or Space. Focus state uses backgroundFocus (no ring).
        </Typography>
        <List sx={{ maxWidth: 280 }} disablePadding>
          <ListItem onClick={() => {}}>Tab to navigate</ListItem>
          <ListItem onClick={() => {}}>Enter or Space activates</ListItem>
          <ListItem disabled>Disabled — skipped in tab order</ListItem>
        </List>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Icons — aria-hidden</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Icon slots are wrapped in aria-hidden spans. Screen readers announce
          the label text only, not the icon.
        </Typography>
        <List sx={{ maxWidth: 280 }} disablePadding>
          <ListItem
            onClick={() => {}}
            startIcon={<Icon name="settings" size="sm" />}
            endIcon={<Icon name="chevron-right" size="sm" />}
          >
            Settings (screen reader: "Settings")
          </ListItem>
        </List>
      </div>
    </div>
  ),
};

/**
 * Token Audit — all CSS custom properties the List component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  render: () => {
    const vars = [
      '--ep-component-list-item-color',
      '--ep-component-list-item-color-secondary',
      '--ep-component-list-item-color-disabled',
      '--ep-component-list-item-background',
      '--ep-component-list-item-background-hover',
      '--ep-component-list-item-background-focus',
      '--ep-component-list-item-background-selected',
      '--ep-component-list-item-background-selected-hover',
      '--ep-component-list-item-background-disabled',
      '--ep-component-list-item-font-size',
      '--ep-component-list-item-padding-y',
      '--ep-component-list-item-padding-x',
      '--ep-component-list-item-dense-padding-y',
      '--ep-component-list-item-dense-padding-x',
      '--ep-component-list-item-icon-size',
      '--ep-component-list-item-icon-color',
      '--ep-component-list-item-icon-gap',
      '--ep-component-list-divider-color',
      '--ep-component-list-divider-margin-y',
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
                  <span style={{ display: 'inline-block', width: 16, height: 16, background: `var(${v})`, border: '1px solid #ccc', verticalAlign: 'middle' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Typography variant="overline" color="text.secondary">Live renders</Typography>
        <List sx={{ maxWidth: 280, mt: 1 }} disablePadding>
          <ListItem onClick={() => {}}>Default</ListItem>
          <ListItem onClick={() => {}} selected>Selected</ListItem>
          <ListItem onClick={() => {}} startIcon={<Icon name="settings" size="sm" />}>With icon</ListItem>
          <ListItem dense onClick={() => {}}>Dense</ListItem>
          <ListDivider />
          <ListItem disabled>Disabled</ListItem>
        </List>
      </div>
    );
  },
};

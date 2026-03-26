import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { Menu, MenuItem, MenuDivider, Button, Icon } from '@eventpipe/ui';
import type { MenuProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Portal-rendered overlay anchored to a trigger element. Always controlled: `open` + `anchorEl` + `onClose`. Keyboard navigation handled by MUI.',
      },
    },
  },

  argTypes: {
    open:          { control: false },
    anchorEl:      { control: false },
    onClose:       { action: 'closed' },
    keepMounted:   { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
    disablePortal: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
  },

  args: {
    open: false,
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Wrapper that manages anchor state for Storybook demos. */
function MenuDemo({
  label = 'Open menu',
  children,
  menuProps = {},
}: {
  label?: string;
  children: React.ReactNode;
  menuProps?: Partial<MenuProps>;
}) {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const open = Boolean(anchorEl);
  return (
    <div>
      <Button
        variant="outlined"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        endSlot={<Icon name="chevron-down" size="sm" />}
      >
        {label}
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        {...menuProps}
      >
        {children}
      </Menu>
    </div>
  );
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default menu — basic action list. */
export const Default: Story = {
  render: () => (
    <MenuDemo label="Actions">
      <MenuItem onClick={() => alert('Edit clicked')}>Edit</MenuItem>
      <MenuItem onClick={() => alert('Duplicate clicked')}>Duplicate</MenuItem>
      <MenuItem onClick={() => alert('Archive clicked')}>Archive</MenuItem>
      <MenuDivider />
      <MenuItem onClick={() => alert('Delete clicked')}>Delete</MenuItem>
    </MenuDemo>
  ),
};

/** Items with leading icons. */
export const WithStartIcons: Story = {
  render: () => (
    <MenuDemo label="Event actions">
      <MenuItem onClick={() => {}} startIcon={<Icon name="edit" size="sm" />}>
        Edit event
      </MenuItem>
      <MenuItem onClick={() => {}} startIcon={<Icon name="add" size="sm" />}>
        Duplicate
      </MenuItem>
      <MenuItem onClick={() => {}} startIcon={<Icon name="download" size="sm" />}>
        Export CSV
      </MenuItem>
      <MenuItem onClick={() => {}} startIcon={<Icon name="upload" size="sm" />}>
        Import data
      </MenuItem>
      <MenuDivider />
      <MenuItem onClick={() => {}} startIcon={<Icon name="delete" size="sm" />} disabled>
        Delete event
      </MenuItem>
    </MenuDemo>
  ),
};

/** Items with both start and end icons. */
export const WithEndIcons: Story = {
  render: () => (
    <MenuDemo label="View options">
      <MenuItem startIcon={<Icon name="filter" size="sm" />} endIcon={<Icon name="check" size="sm" />}>
        Filter active
      </MenuItem>
      <MenuItem startIcon={<Icon name="arrow-forward" size="sm" />}>
        Sort by date
      </MenuItem>
      <MenuDivider />
      <MenuItem startIcon={<Icon name="settings" size="sm" />}>
        Preferences
      </MenuItem>
    </MenuDemo>
  ),
};

/** Selected item — marks the current/active state. */
export const WithSelected: Story = {
  render: () => {
    const [selected, setSelected] = React.useState('list');
    return (
      <MenuDemo label={`View: ${selected}`}>
        <MenuItem selected={selected === 'list'} onClick={() => setSelected('list')}>
          List view
        </MenuItem>
        <MenuItem selected={selected === 'grid'} onClick={() => setSelected('grid')}>
          Grid view
        </MenuItem>
        <MenuItem selected={selected === 'calendar'} onClick={() => setSelected('calendar')}>
          Calendar view
        </MenuItem>
      </MenuDemo>
    );
  },
};

/** Dense mode — compact padding for toolbar/settings menus. */
export const Dense: Story = {
  render: () => (
    <MenuDemo label="Dense menu">
      <MenuItem dense startIcon={<Icon name="edit" size="sm" />}>
        Edit
      </MenuItem>
      <MenuItem dense startIcon={<Icon name="add" size="sm" />}>
        Duplicate
      </MenuItem>
      <MenuItem dense startIcon={<Icon name="visibility" size="sm" />}>
        Preview
      </MenuItem>
      <MenuDivider />
      <MenuItem dense startIcon={<Icon name="delete" size="sm" />}>
        Delete
      </MenuItem>
    </MenuDemo>
  ),
};

/** Disabled items — shown but not interactive. */
export const WithDisabled: Story = {
  render: () => (
    <MenuDemo label="Restricted actions">
      <MenuItem onClick={() => {}}>View details</MenuItem>
      <MenuItem onClick={() => {}}>Edit</MenuItem>
      <MenuItem disabled>Publish (requires approval)</MenuItem>
      <MenuDivider />
      <MenuItem disabled startIcon={<Icon name="delete" size="sm" />}>
        Delete (admin only)
      </MenuItem>
    </MenuDemo>
  ),
};

/** Navigation items using `component='a'` and `href`. */
export const AsLinks: Story = {
  render: () => (
    <MenuDemo label="Navigate">
      <MenuItem href="#/events" startIcon={<Icon name="calendar" size="sm" />}>
        Events
      </MenuItem>
      <MenuItem href="#/attendees" startIcon={<Icon name="person" size="sm" />}>
        Attendees
      </MenuItem>
      <MenuItem href="#/reports" startIcon={<Icon name="filter" size="sm" />}>
        Reports
      </MenuItem>
      <MenuDivider />
      <MenuItem href="#/settings" startIcon={<Icon name="settings" size="sm" />}>
        Settings
      </MenuItem>
    </MenuDemo>
  ),
};

/** Different anchor origins — menu opens above trigger. */
export const AnchorOriginTop: Story = {
  render: () => (
    <div style={{ paddingTop: 200 }}>
      <MenuDemo
        label="Open above"
        menuProps={{
          anchorOrigin:    { vertical: 'top', horizontal: 'left' },
          transformOrigin: { vertical: 'bottom', horizontal: 'left' },
        }}
      >
        <MenuItem>Option one</MenuItem>
        <MenuItem>Option two</MenuItem>
        <MenuItem>Option three</MenuItem>
      </MenuDemo>
    </div>
  ),
};

/** Overflow menu — typical three-dot / kebab pattern. */
export const OverflowMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
    const open = Boolean(anchorEl);
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Typography variant="body1">EventPipe 2026 — Spring Summit</Typography>
        <button
          onClick={(e) => setAnchorEl(open ? null : e.currentTarget)}
          aria-label="More options"
          aria-haspopup="true"
          aria-expanded={open}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            borderRadius: 4,
            padding: 4,
            display: 'flex',
          }}
        >
          <Icon name="settings" size="md" />
        </button>
        <Menu
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem startIcon={<Icon name="edit" size="sm" />}>Edit</MenuItem>
          <MenuItem startIcon={<Icon name="add" size="sm" />}>Duplicate</MenuItem>
          <MenuItem startIcon={<Icon name="download" size="sm" />}>Export</MenuItem>
          <MenuDivider />
          <MenuItem startIcon={<Icon name="delete" size="sm" />}>Delete</MenuItem>
        </Menu>
      </div>
    );
  },
};

/** Accessibility patterns — trigger ARIA, keyboard nav, disabled items. */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
    const open = Boolean(anchorEl);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
        <div>
          <Typography variant="overline" color="text.secondary">
            Trigger with aria-haspopup + aria-expanded
          </Typography>
          <div style={{ marginTop: 8 }}>
            <Button
              variant="outlined"
              onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}
              aria-haspopup="menu"
              aria-expanded={open}
              aria-controls={open ? 'a11y-demo-menu' : undefined}
              endSlot={<Icon name={open ? 'chevron-up' : 'chevron-down'} size="sm" />}
            >
              File menu
            </Button>
            <Menu
              open={open}
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem startIcon={<Icon name="add" size="sm" />}>New event</MenuItem>
              <MenuItem startIcon={<Icon name="upload" size="sm" />}>Import…</MenuItem>
              <MenuItem startIcon={<Icon name="download" size="sm" />}>Export…</MenuItem>
              <MenuDivider />
              <MenuItem disabled startIcon={<Icon name="delete" size="sm" />}>
                Delete all (disabled)
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div>
          <Typography variant="overline" color="text.secondary">
            Keyboard nav — Tab to trigger, Enter opens, arrows navigate, Escape closes
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            Screen reader: role="menu" on container, role="menuitem" on each item.
            Disabled items are announced as aria-disabled.
          </Typography>
        </div>
      </div>
    );
  },
};

/**
 * Token Audit — all 22 CSS custom properties the Menu component reads.
 * Open DevTools → Computed to verify each var resolves correctly.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const vars = [
      '--ep-component-menu-background',
      '--ep-component-menu-border-radius',
      '--ep-component-menu-shadow',
      '--ep-component-menu-min-width',
      '--ep-component-menu-item-color',
      '--ep-component-menu-item-color-disabled',
      '--ep-component-menu-item-background',
      '--ep-component-menu-item-background-hover',
      '--ep-component-menu-item-background-focus',
      '--ep-component-menu-item-background-selected',
      '--ep-component-menu-item-background-selected-hover',
      '--ep-component-menu-item-background-disabled',
      '--ep-component-menu-item-font-size',
      '--ep-component-menu-item-padding-y',
      '--ep-component-menu-item-padding-x',
      '--ep-component-menu-item-dense-padding-y',
      '--ep-component-menu-item-dense-padding-x',
      '--ep-component-menu-item-icon-size',
      '--ep-component-menu-item-icon-color',
      '--ep-component-menu-item-icon-gap',
      '--ep-component-menu-divider-color',
      '--ep-component-menu-divider-margin-y',
    ];
    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ color: '#666', marginBottom: 8 }}>
          Open DevTools → Computed to verify each var resolves (no fallback value).
          Note: shadow/size vars won't show a color swatch — inspect the raw value.
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
                      display: 'inline-block',
                      width: 16,
                      height: 16,
                      background: `var(${v})`,
                      border: '1px solid #ccc',
                      verticalAlign: 'middle',
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: 16 }}>
          <Typography variant="overline" color="text.secondary">Live renders</Typography>
          <div style={{ display: 'flex', gap: 32, marginTop: 8, flexWrap: 'wrap' }}>
            {/* Inline menu rendered without portal for visibility in the audit view */}
            <div style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', minWidth: 200 }}>
              <MenuItem startIcon={<Icon name="edit" size="sm" />}>Normal item</MenuItem>
              <MenuItem startIcon={<Icon name="add" size="sm" />} selected>Selected item</MenuItem>
              <MenuItem dense startIcon={<Icon name="filter" size="sm" />}>Dense item</MenuItem>
              <MenuDivider />
              <MenuItem disabled startIcon={<Icon name="delete" size="sm" />}>Disabled item</MenuItem>
            </div>
            <div style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', minWidth: 200 }}>
              <MenuItem startIcon={<Icon name="calendar" size="sm" />} endIcon={<Icon name="chevron-right" size="sm" />}>
                With end icon
              </MenuItem>
              <MenuItem startIcon={<Icon name="settings" size="sm" />}>Settings</MenuItem>
              <MenuDivider />
              <MenuItem href="#/link" startIcon={<Icon name="arrow-forward" size="sm" />}>
                Link item (href)
              </MenuItem>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, DrawerHeader, DrawerBody, Button, List, ListItem, Divider } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Overlays/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Sliding panel overlay anchored to a viewport edge. ' +
          'Always controlled: open + onClose. ' +
          'Temporary variant: focus trap, Backdrop, Escape + click-away dismiss. ' +
          'Persistent/permanent: no Backdrop, no focus trap. ' +
          'Width token applies to left/right anchors only. ' +
          'Overlay system: docs/contracts/overlay-pattern.md',
      },
    },
  },
  argTypes: {
    open:     { control: 'boolean' },
    anchor:   { control: 'radio', options: ['left', 'right', 'top', 'bottom'] },
    variant:  { control: 'radio', options: ['temporary', 'persistent', 'permanent'] },
  },
  args: {
    open:    false,
    anchor:  'left',
    variant: 'temporary',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — left-anchored temporary drawer with header and nav list. */
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(args.open);
    React.useEffect(() => { setOpen(args.open); }, [args.open]);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer
          {...args}
          open={open}
          onClose={(_, reason) => {
            if (reason !== 'backdropClick') setOpen(false);
            else setOpen(false);
          }}
          aria-labelledby="drawer-default-title"
        >
          <Drawer.Header onClose={() => setOpen(false)}>
            <span id="drawer-default-title" style={{ fontWeight: 600, fontSize: 16 }}>Navigation</span>
          </Drawer.Header>
          <Divider />
          <Drawer.Body>
            <List>
              <ListItem>Dashboard</ListItem>
              <ListItem>Events</ListItem>
              <ListItem>Venues</ListItem>
              <ListItem>Attendees</ListItem>
              <ListItem>Settings</ListItem>
            </List>
          </Drawer.Body>
        </Drawer>
      </>
    );
  },
};

/** Anchor positions — all four edge positions. */
export const AnchorPositions: Story = {
  name: 'Anchor Positions',
  args: { open: false },
  render: () => {
    const [anchor, setAnchor] = React.useState<'left' | 'right' | 'top' | 'bottom' | null>(null);

    const anchors = ['left', 'right', 'top', 'bottom'] as const;

    return (
      <>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {anchors.map((a) => (
            <Button key={a} variant="outlined" onClick={() => setAnchor(a)}>
              Open {a}
            </Button>
          ))}
        </div>
        {anchors.map((a) => (
          <Drawer
            key={a}
            open={anchor === a}
            anchor={a}
            onClose={() => setAnchor(null)}
          >
            <Drawer.Header onClose={() => setAnchor(null)}>
              <span style={{ fontWeight: 600 }}>{a.charAt(0).toUpperCase() + a.slice(1)} Drawer</span>
            </Drawer.Header>
            <Drawer.Body>
              <div style={{ padding: '0 24px' }}>Content from the {a}.</div>
            </Drawer.Body>
          </Drawer>
        ))}
      </>
    );
  },
};

/** Right anchor — common for detail panels and settings. */
export const RightAnchor: Story = {
  name: 'Right Anchor',
  args: { open: false },
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open right drawer</Button>
        <Drawer
          open={open}
          anchor="right"
          onClose={() => setOpen(false)}
          aria-labelledby="drawer-right-title"
        >
          <Drawer.Header onClose={() => setOpen(false)}>
            <span id="drawer-right-title" style={{ fontWeight: 600, fontSize: 16 }}>Event Details</span>
          </Drawer.Header>
          <Divider />
          <Drawer.Body>
            <div style={{ padding: '0 24px', fontFamily: 'sans-serif', fontSize: 14 }}>
              <p><strong>Summer Gala 2026</strong></p>
              <p>Date: August 15, 2026</p>
              <p>Venue: Grand Ballroom</p>
              <p>Capacity: 500 attendees</p>
            </div>
          </Drawer.Body>
        </Drawer>
      </>
    );
  },
};

/** Dismissal control — block backdrop click but allow Escape. */
export const BlockBackdropClick: Story = {
  name: 'Block Backdrop Click',
  args: { open: false },
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [reason, setReason] = React.useState('');

    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Button variant="outlined" onClick={() => setOpen(true)}>Open drawer</Button>
          {reason && (
            <p style={{ fontFamily: 'monospace', fontSize: 12, color: '#666', margin: 0 }}>
              Close reason: {reason}
            </p>
          )}
        </div>
        <Drawer
          open={open}
          anchor="left"
          onClose={(_, r) => {
            setReason(r);
            if (r === 'backdropClick') return; // block backdrop-click
            setOpen(false);
          }}
        >
          <Drawer.Header onClose={() => setOpen(false)}>
            <span style={{ fontWeight: 600 }}>Escape closes; backdrop does not</span>
          </Drawer.Header>
          <Drawer.Body>
            <div style={{ padding: '0 24px', fontFamily: 'sans-serif', fontSize: 14 }}>
              Press Escape to close. Clicking the backdrop does nothing.
            </div>
          </Drawer.Body>
        </Drawer>
      </>
    );
  },
};

/** keepMounted — drawer DOM persists when closed. */
export const KeepMounted: Story = {
  name: 'keepMounted',
  args: { open: false },
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open keepMounted drawer</Button>
        <Drawer
          open={open}
          anchor="left"
          keepMounted
          onClose={() => setOpen(false)}
        >
          <Drawer.Header onClose={() => setOpen(false)}>
            <span style={{ fontWeight: 600 }}>keepMounted</span>
          </Drawer.Header>
          <Drawer.Body>
            <div style={{ padding: '0 24px', fontFamily: 'sans-serif', fontSize: 14 }}>
              This drawer remains in the DOM when closed.
            </div>
          </Drawer.Body>
        </Drawer>
      </>
    );
  },
};

/** Accessibility — focus trap, ARIA labelling, keyboard dismiss. */
export const Accessibility: Story = {
  name: 'Accessibility',
  args: { open: false },
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'sans-serif' }}>
        <p style={{ fontSize: 13, color: '#666', margin: 0 }}>
          Temporary Drawer:<br />
          • Focus is trapped inside while open (MUI Modal mechanism, same as Dialog)<br />
          • Escape key and backdrop click call <code>onClose</code><br />
          • <code>aria-labelledby</code> points to the heading inside the drawer<br />
          • MUI sets <code>aria-modal="true"</code> automatically<br />
          • Focus returns to the trigger button on close
        </p>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open accessible drawer</Button>
        <Drawer
          open={open}
          anchor="left"
          onClose={() => setOpen(false)}
          aria-labelledby="drawer-a11y-title"
        >
          <Drawer.Header onClose={() => setOpen(false)}>
            <h2 id="drawer-a11y-title" style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>
              Accessible Drawer
            </h2>
          </Drawer.Header>
          <Drawer.Body>
            <div style={{ padding: '0 24px', fontFamily: 'sans-serif', fontSize: 14 }}>
              <p>Tab cycles within this drawer while open.</p>
              <Button variant="contained" size="sm" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </Drawer.Body>
        </Drawer>
      </div>
    );
  },
};

/**
 * Token Audit — all CSS custom properties the Drawer component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  args: { open: false },
  render: () => {
    const [open, setOpen] = React.useState(false);

    const vars = [
      '--ep-component-drawer-background',
      '--ep-component-drawer-border-radius',
      '--ep-component-drawer-transition-duration',
      '--ep-component-drawer-shadow',
      '--ep-component-drawer-width',
      '--ep-component-drawer-header-padding-y',
      '--ep-component-drawer-header-padding-x',
      '--ep-component-drawer-body-padding-y',
      '--ep-component-drawer-body-padding-x',
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
        <Button variant="outlined" size="sm" onClick={() => setOpen(true)}>
          Open drawer
        </Button>
        <Drawer
          open={open}
          anchor="left"
          onClose={() => setOpen(false)}
        >
          <Drawer.Header onClose={() => setOpen(false)}>
            <span style={{ fontWeight: 600 }}>Token Audit Drawer</span>
          </Drawer.Header>
          <Drawer.Body>
            <div style={{ padding: '0 24px', fontSize: 14, fontFamily: 'sans-serif' }}>
              Inspect this element in DevTools.
            </div>
          </Drawer.Body>
        </Drawer>
      </div>
    );
  },
};

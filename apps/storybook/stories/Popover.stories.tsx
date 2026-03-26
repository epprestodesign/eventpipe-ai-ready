import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover, Button, Divider } from '@eventpipe/ui';
import Typography from '@mui/material/Typography';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Overlays/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Lightweight positioning overlay anchored to a trigger element. ' +
          'No focus trap — background remains interactive. ' +
          'Click-away closes automatically. No visible Backdrop. ' +
          'For navigation lists use Menu. For persistent panels use Drawer. ' +
          'Overlay system: docs/contracts/overlay-pattern.md',
      },
    },
  },
  argTypes: {
    open:     { control: 'boolean' },
  },
  args: {
    open:     false,
    anchorEl: null,
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — opens below the trigger button with generic content. */
export const Default: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    return (
      <>
        <Button
          variant="outlined"
          onClick={(e) => setAnchorEl(e.currentTarget)}
          aria-haspopup="true"
          aria-expanded={Boolean(anchorEl)}
        >
          Open popover
        </Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <Popover.Content>
            <Typography variant="body2">
              This is a Popover. Click away to close.
            </Typography>
          </Popover.Content>
        </Popover>
      </>
    );
  },
};

/** Anchor positions — all common quadrant placements. */
export const AnchorPositions: Story = {
  name: 'Anchor Positions',
  render: () => {
    type Placement = {
      label: string;
      anchorOrigin:    { vertical: 'top' | 'center' | 'bottom'; horizontal: 'left' | 'center' | 'right' };
      transformOrigin: { vertical: 'top' | 'center' | 'bottom'; horizontal: 'left' | 'center' | 'right' };
    };
    const placements: Placement[] = [
      { label: 'Bottom left (default)', anchorOrigin: { vertical: 'bottom', horizontal: 'left'   }, transformOrigin: { vertical: 'top',    horizontal: 'left'   } },
      { label: 'Bottom right',          anchorOrigin: { vertical: 'bottom', horizontal: 'right'  }, transformOrigin: { vertical: 'top',    horizontal: 'right'  } },
      { label: 'Top left',              anchorOrigin: { vertical: 'top',    horizontal: 'left'   }, transformOrigin: { vertical: 'bottom', horizontal: 'left'   } },
      { label: 'Right center',          anchorOrigin: { vertical: 'center', horizontal: 'right'  }, transformOrigin: { vertical: 'center', horizontal: 'left'   } },
    ];

    const [active, setActive] = React.useState<string | null>(null);
    const refs = React.useRef<Record<string, HTMLButtonElement | null>>({});

    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: '48px 0' }}>
        {placements.map((p) => (
          <Button
            key={p.label}
            variant="outlined"
            size="sm"
            ref={(el) => { refs.current[p.label] = el; }}
            onClick={() => setActive(p.label)}
          >
            {p.label}
          </Button>
        ))}
        {placements.map((p) => (
          <Popover
            key={p.label}
            open={active === p.label}
            anchorEl={refs.current[p.label] ?? null}
            onClose={() => setActive(null)}
            anchorOrigin={p.anchorOrigin}
            transformOrigin={p.transformOrigin}
          >
            <Popover.Content>
              <Typography variant="body2">{p.label}</Typography>
            </Popover.Content>
          </Popover>
        ))}
      </div>
    );
  },
};

/** Rich content — popover with heading, body text, and action. */
export const RichContent: Story = {
  name: 'Rich Content',
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    return (
      <>
        <Button
          variant="contained"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          Event info
        </Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <Popover.Content>
            <Typography variant="subtitle2" gutterBottom>Summer Gala 2026</Typography>
            <Typography variant="body2" color="text.secondary">
              August 15, 2026 · Grand Ballroom
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: 4 }}>
              Capacity: 500 attendees
            </Typography>
          </Popover.Content>
          <Divider />
          <Popover.Content>
            <Button
              variant="text"
              size="sm"
              onClick={() => setAnchorEl(null)}
            >
              View details
            </Button>
          </Popover.Content>
        </Popover>
      </>
    );
  },
};

/** No padding — custom content without Popover.Content wrapper. */
export const CustomContent: Story = {
  name: 'Custom Content (no padding)',
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    return (
      <>
        <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Custom content
        </Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          {/* No Popover.Content — consumer handles layout fully */}
          <div style={{ padding: '8px 0', minWidth: 200 }}>
            {['Option A', 'Option B', 'Option C'].map((opt) => (
              <div
                key={opt}
                onClick={() => setAnchorEl(null)}
                style={{
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontFamily: 'sans-serif',
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        </Popover>
      </>
    );
  },
};

/** Accessibility — trigger attributes and non-blocking behavior. */
export const Accessibility: Story = {
  name: 'Accessibility',
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'sans-serif' }}>
        <p style={{ fontSize: 13, color: '#666', margin: 0 }}>
          Popover has no focus trap — background remains interactive.<br />
          Trigger should set <code>aria-haspopup="true"</code> and <code>aria-expanded</code>.<br />
          Use <code>aria-controls</code> pointing to the popover <code>id</code> when open.
        </p>
        <Button
          variant="outlined"
          onClick={(e) => setAnchorEl(e.currentTarget)}
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls={open ? 'a11y-popover' : undefined}
        >
          {open ? 'Close' : 'Open'} popover
        </Button>
        <Popover
          id="a11y-popover"
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <Popover.Content>
            <Typography variant="body2">
              Non-blocking overlay. Background is still focusable.
            </Typography>
          </Popover.Content>
        </Popover>
      </div>
    );
  },
};

/**
 * Token Audit — all CSS custom properties the Popover component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const vars = [
      '--ep-component-popover-background',
      '--ep-component-popover-border-radius',
      '--ep-component-popover-shadow',
      '--ep-component-popover-padding-y',
      '--ep-component-popover-padding-x',
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
        <Button
          variant="outlined"
          size="sm"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          Open popover
        </Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <Popover.Content>
            <Typography variant="body2">Token audit — inspect in DevTools.</Typography>
          </Popover.Content>
        </Popover>
      </div>
    );
  },
};

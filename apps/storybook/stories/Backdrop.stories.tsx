import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Backdrop, CircularProgress } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Overlays/Backdrop',
  component: Backdrop,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Full-viewport semi-transparent overlay that blocks page interaction. ' +
          'Renders via MUI portal into document.body. Fade transition driven by ' +
          'the component transitionDuration token (225 ms). ' +
          'Use `invisible` for click-away detection without a visible scrim. ' +
          'Pass children (e.g. CircularProgress) for full-page loading states.',
      },
    },
  },
  argTypes: {
    open:      { control: 'boolean' },
    invisible: { control: 'boolean' },
  },
  args: {
    open:      false,
    invisible: false,
  },
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — toggle `open` in Controls. */
export const Default: Story = {
  render: (args) => (
    <div>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Toggle <code>open</code> in the Controls panel to show/hide the backdrop.
      </Typography>
      <Backdrop {...args} onClick={() => {}} />
    </div>
  ),
};

/** Open with a close-on-click handler. */
export const WithCloseOnClick: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Show Backdrop
        </Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
              color: '#fff',
            }}
          >
            <CircularProgress color="info" size="lg" />
            <Typography variant="body1" color="inherit">
              Click anywhere to dismiss
            </Typography>
          </div>
        </Backdrop>
      </div>
    );
  },
};

/** Full-page loading — backdrop with centered CircularProgress. */
export const LoadingOverlay: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const [loading, setLoading] = React.useState(false);

    const simulate = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2500);
    };

    return (
      <div>
        <Button variant="contained" onClick={simulate} disabled={loading}>
          {loading ? 'Loading…' : 'Simulate page load'}
        </Button>
        <Backdrop open={loading}>
          <CircularProgress color="info" size="xl" />
        </Backdrop>
      </div>
    );
  },
};

/** Invisible backdrop — click-away detection without a visible scrim. */
export const Invisible: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div style={{ position: 'relative' }}>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open invisible backdrop
        </Button>
        {open && (
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
            Backdrop is open but invisible. Click anywhere to close.
          </Typography>
        )}
        <Backdrop open={open} invisible onClick={() => setOpen(false)} />
      </div>
    );
  },
};

/** Accessibility — ARIA patterns for modal overlays. */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Typography variant="overline" color="text.secondary">
          ARIA — backdrop is presentational
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The backdrop itself has no ARIA role. The content it accompanies (Dialog, Drawer, etc.)
          should carry <code>role="dialog"</code> or <code>role="alertdialog"</code> with
          <code> aria-modal="true"</code> and <code>aria-labelledby</code>. Use a
          <code> role="status"</code> region inside children for live region announcements.
        </Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open backdrop with role="status" child
        </Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <div role="status" aria-label="Page is loading" style={{ color: '#fff', textAlign: 'center' }}>
            <CircularProgress color="info" size="lg" />
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
              Loading… (click to dismiss)
            </Typography>
          </div>
        </Backdrop>
      </div>
    );
  },
};

/**
 * Token Audit — all CSS custom properties the Backdrop component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const [open, setOpen] = React.useState(false);

    const vars = [
      '--ep-component-backdrop-background',
      '--ep-component-backdrop-transition-duration',
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
              <th style={{ padding: '4px 12px', textAlign: 'left' }}>Swatch / value</th>
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
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Live render
        </Typography>
        <Button variant="outlined" size="small" onClick={() => setOpen(true)}>
          Show backdrop
        </Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <Typography variant="body2" color="inherit" sx={{ color: '#fff' }}>
            background = var(--ep-component-backdrop-background) · click to close
          </Typography>
        </Backdrop>
      </div>
    );
  },
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { Snackbar, Button } from '@eventpipe/ui';
import type { SnackbarCloseReason } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Feedback/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Transient notification bar at the screen edge. Non-blocking: no focus trap. ' +
          'Portal-rendered at z-index 1400 (above Dialog). ' +
          'Plain mode: dark bar with message + optional action. ' +
          'Severity mode: embeds an Alert (error/warning=assertive, info/success=polite). ' +
          'Auto-hides after 4s by default. Dismiss pattern: ignore clickaway.',
      },
    },
  },
  argTypes: {
    open:              { control: 'boolean' },
    severity:          { control: 'radio', options: [undefined, 'error', 'warning', 'info', 'success'] },
    autoHideDuration:  { control: 'number' },
    message:           { control: 'text' },
  },
  args: {
    open:             false,
    message:          'Changes saved successfully.',
    autoHideDuration: 4000,
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Helper ───────────────────────────────────────────────────────────────────

function useSnackbar(initialMessage?: string) {
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState(initialMessage ?? '');

  const show = (message?: string) => {
    if (message) setMsg(message);
    setOpen(true);
  };

  const handleClose = (_: unknown, reason: SnackbarCloseReason) => {
    // Standard pattern: ignore clickaway
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return { open, msg, show, handleClose, setOpen };
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — toggle `open` in Controls. */
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(args.open);
    React.useEffect(() => { setOpen(args.open); }, [args.open]);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Show snackbar</Button>
        <Snackbar
          {...args}
          open={open}
          onClose={(_, reason) => { if (reason !== 'clickaway') setOpen(false); }}
        />
      </>
    );
  },
};

/** Plain snackbar — dark bar with message and action button. */
export const Plain: Story = {
  render: () => {
    const sb = useSnackbar('Event saved.');
    return (
      <>
        <Button variant="contained" onClick={() => sb.show()}>Save event</Button>
        <Snackbar
          open={sb.open}
          message={sb.msg}
          action={
            <Button
              variant="text"
              size="sm"
              sx={{ color: 'var(--ep-component-snackbar-action-color)', fontSize: 13 }}
              onClick={() => sb.setOpen(false)}
            >
              UNDO
            </Button>
          }
          onClose={sb.handleClose}
        />
      </>
    );
  },
};

/** All four severity variants. */
export const Severities: Story = {
  render: () => {
    const [active, setActive] = React.useState<string | null>(null);

    const severities = [
      { key: 'error',   label: 'Show error',   message: 'Failed to save changes.' },
      { key: 'warning', label: 'Show warning',  message: 'Unsaved changes may be lost.' },
      { key: 'info',    label: 'Show info',     message: 'Event starts in 30 minutes.' },
      { key: 'success', label: 'Show success',  message: 'Event published successfully.' },
    ] as const;

    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {severities.map(({ key, label, message }) => (
          <Button key={key} variant="outlined" onClick={() => setActive(key)}>
            {label}
          </Button>
        ))}
        {severities.map(({ key, message }) => (
          <Snackbar
            key={key}
            open={active === key}
            severity={key}
            message={message}
            onClose={(_, reason) => { if (reason !== 'clickaway') setActive(null); }}
          />
        ))}
      </div>
    );
  },
};

/** Anchor positions — all 6 placement options. */
export const AnchorPositions: Story = {
  render: () => {
    const [active, setActive] = React.useState<string | null>(null);

    const positions = [
      { key: 'top-left',      vertical: 'top',    horizontal: 'left' },
      { key: 'top-center',    vertical: 'top',    horizontal: 'center' },
      { key: 'top-right',     vertical: 'top',    horizontal: 'right' },
      { key: 'bottom-left',   vertical: 'bottom', horizontal: 'left' },
      { key: 'bottom-center', vertical: 'bottom', horizontal: 'center' },
      { key: 'bottom-right',  vertical: 'bottom', horizontal: 'right' },
    ] as const;

    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {positions.map(({ key, vertical, horizontal }) => (
          <Button key={key} variant="outlined" size="sm" onClick={() => setActive(key)}>
            {key}
          </Button>
        ))}
        {positions.map(({ key, vertical, horizontal }) => (
          <Snackbar
            key={key}
            open={active === key}
            message={`Position: ${key}`}
            anchorOrigin={{ vertical, horizontal }}
            onClose={(_, reason) => { if (reason !== 'clickaway') setActive(null); }}
          />
        ))}
      </div>
    );
  },
};

/** Auto-hide timing — 2s, 4s (default), 6s, disabled. */
export const AutoHide: Story = {
  render: () => {
    const [config, setConfig] = React.useState<{ dur: number | null; label: string } | null>(null);

    const options = [
      { dur: 2000,  label: '2s auto-hide' },
      { dur: 4000,  label: '4s auto-hide (default)' },
      { dur: 6000,  label: '6s auto-hide' },
      { dur: null,  label: 'No auto-hide' },
    ] as const;

    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {options.map((opt) => (
          <Button key={String(opt.dur)} variant="outlined" onClick={() => setConfig(opt)}>
            {opt.label}
          </Button>
        ))}
        <Snackbar
          open={config !== null}
          message={config ? `Timer: ${config.label}` : ''}
          autoHideDuration={config?.dur ?? undefined}
          action={config?.dur === null ? (
            <Button
              variant="text"
              size="sm"
              sx={{ color: 'var(--ep-component-snackbar-action-color)', fontSize: 13 }}
              onClick={() => setConfig(null)}
            >
              DISMISS
            </Button>
          ) : undefined}
          onClose={(_, reason) => { if (reason !== 'clickaway') setConfig(null); }}
        />
      </div>
    );
  },
};

/** Severity + action — action button inside a severity Alert. */
export const SeverityWithAction: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const close = () => setOpen(false);

    return (
      <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>
          Delete failed
        </Button>
        <Snackbar
          open={open}
          severity="error"
          message="Failed to delete the event. Check your permissions."
          autoHideDuration={6000}
          action={
            <Button variant="text" size="sm" sx={{ color: 'inherit', fontSize: 13 }} onClick={close}>
              RETRY
            </Button>
          }
          onClose={(_, reason) => { if (reason !== 'clickaway') close(); }}
        />
      </>
    );
  },
};

/** Accessibility — live region, role, and non-blocking behavior. */
export const Accessibility: Story = {
  render: () => {
    const [active, setActive] = React.useState<string | null>(null);
    const close = () => setActive(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'sans-serif' }}>
        <Typography variant="overline" color="text.secondary">Non-blocking overlay</Typography>
        <Typography variant="body2" color="text.secondary">
          Snackbar has no focus trap. The user can continue interacting with the page.
          Dismiss with the action button or wait for auto-hide.
        </Typography>
        <Typography variant="overline" color="text.secondary">Live regions</Typography>
        <Typography variant="body2" color="text.secondary">
          Plain / info / success → <code>role="status"</code> (polite).
          Error / warning → <code>role="alert"</code> (assertive, interrupts screen reader).
          All use <code>aria-atomic="true"</code>.
        </Typography>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="outlined" size="sm" onClick={() => setActive('polite')}>
            Polite (info)
          </Button>
          <Button variant="outlined" size="sm" color="error" onClick={() => setActive('assertive')}>
            Assertive (error)
          </Button>
        </div>
        <Snackbar
          open={active === 'polite'}
          severity="info"
          message="Info: polite announcement — screen reader finishes current task first."
          onClose={(_, r) => { if (r !== 'clickaway') close(); }}
        />
        <Snackbar
          open={active === 'assertive'}
          severity="error"
          message="Error: assertive announcement — screen reader interrupts immediately."
          onClose={(_, r) => { if (r !== 'clickaway') close(); }}
        />
      </div>
    );
  },
};

/**
 * Token Audit — all CSS custom properties the Snackbar component reads (plain mode).
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  args: { open: false },
  parameters: { layout: 'padded' },
  render: () => {
    const [open, setOpen] = React.useState(false);

    const vars = [
      '--ep-component-snackbar-background',
      '--ep-component-snackbar-color',
      '--ep-component-snackbar-border-radius',
      '--ep-component-snackbar-shadow',
      '--ep-component-snackbar-transition-duration',
      '--ep-component-snackbar-auto-hide-duration',
      '--ep-component-snackbar-padding-y',
      '--ep-component-snackbar-padding-x',
      '--ep-component-snackbar-action-color',
      '--ep-component-snackbar-min-width',
      '--ep-component-snackbar-max-width',
    ];

    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ color: '#666', marginBottom: 8 }}>
          Open DevTools → Computed to verify each var resolves. Total: {vars.length} vars.
          Severity mode reuses <code>--ep-component-alert-*</code> vars.
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
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="outlined" size="sm" onClick={() => setOpen(true)}>
            Show plain snackbar
          </Button>
        </div>
        <Snackbar
          open={open}
          message="Token audit — plain snackbar"
          onClose={(_, r) => { if (r !== 'clickaway') setOpen(false); }}
        />
      </div>
    );
  },
};

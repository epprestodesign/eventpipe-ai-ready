import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { Dialog, Button, Alert } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Overlays/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modal overlay panel with focus trap, built-in Backdrop, and keyboard handling. ' +
          'Always controlled: open + onClose. Focus is trapped inside while open; ' +
          'returns to trigger on close. Compose with Dialog.Title, Dialog.Content, ' +
          'Dialog.Actions. Loading state shows CircularProgress and suppresses onClose. ' +
          'Overlay system: docs/contracts/overlay-pattern.md',
      },
    },
  },
  argTypes: {
    open:                { control: 'boolean' },
    maxWidth:            { control: 'radio', options: ['xs', 'sm', 'md', 'lg', 'xl', false] },
    fullWidth:           { control: 'boolean' },
    fullScreen:          { control: 'boolean' },
    scroll:              { control: 'radio', options: ['paper', 'body'] },
    loading:             { control: 'boolean' },
    disableEscapeKeyDown:{ control: 'boolean' },
  },
  args: {
    open:                 false,
    maxWidth:             'sm',
    fullWidth:            false,
    fullScreen:           false,
    scroll:               'paper',
    loading:              false,
    disableEscapeKeyDown: false,
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function TriggerDialog({
  label,
  children,
}: {
  label: string;
  children: (open: boolean, setOpen: (v: boolean) => void) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>{label}</Button>
      {children(open, setOpen)}
    </>
  );
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — toggle `open` in Controls. Note: does not render a trigger in this view. */
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(args.open);
    React.useEffect(() => { setOpen(args.open); }, [args.open]);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open dialog</Button>
        <Dialog
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="default-dialog-title"
          aria-describedby="default-dialog-desc"
        >
          <Dialog.Title id="default-dialog-title" onClose={() => setOpen(false)}>
            Dialog title
          </Dialog.Title>
          <Dialog.Content id="default-dialog-desc">
            <Typography variant="body2">
              This is the dialog body. Use Controls to explore maxWidth, fullWidth,
              scroll, and other props.
            </Typography>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Confirm</Button>
          </Dialog.Actions>
        </Dialog>
      </>
    );
  },
};

/** Confirm destructive action — the most common Dialog pattern. */
export const ConfirmDelete: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <TriggerDialog label="Delete event">
      {(open, setOpen) => (
        <Dialog
          open={open}
          onClose={(_, reason) => { if (reason !== 'backdropClick') setOpen(false); }}
          aria-labelledby="delete-title"
          aria-describedby="delete-desc"
          maxWidth="xs"
        >
          <Dialog.Title id="delete-title" onClose={() => setOpen(false)}>
            Delete this event?
          </Dialog.Title>
          <Dialog.Content id="delete-desc">
            <Typography variant="body2">
              This action cannot be undone. All attendees will be notified.
            </Typography>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" color="error" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </Dialog.Actions>
        </Dialog>
      )}
    </TriggerDialog>
  ),
};

/** Loading state — CircularProgress overlay blocks interaction. */
export const Loading: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleConfirm = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 2500);
    };

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Publish event</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          loading={loading}
          aria-labelledby="loading-title"
          maxWidth="xs"
        >
          <Dialog.Title id="loading-title" onClose={() => setOpen(false)}>
            Publish event?
          </Dialog.Title>
          <Dialog.Content>
            <Typography variant="body2">
              This will make the event visible to all attendees. You can unpublish later.
            </Typography>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" color="success" onClick={handleConfirm}>
              Publish
            </Button>
          </Dialog.Actions>
        </Dialog>
      </>
    );
  },
};

/** All maxWidth sizes — side-by-side trigger buttons. */
export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
    const [active, setActive] = React.useState<typeof sizes[number] | null>(null);

    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {sizes.map((s) => (
          <Button key={s} variant="outlined" size="sm" onClick={() => setActive(s)}>
            maxWidth="{s}"
          </Button>
        ))}
        <Dialog
          open={active !== null}
          onClose={() => setActive(null)}
          maxWidth={active ?? 'sm'}
          fullWidth
          aria-labelledby="size-dialog-title"
        >
          <Dialog.Title id="size-dialog-title" onClose={() => setActive(null)}>
            maxWidth="{active}"
          </Dialog.Title>
          <Dialog.Content>
            <Typography variant="body2">
              This dialog has <code>maxWidth="{active}"</code> and <code>fullWidth</code>.
            </Typography>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="contained" onClick={() => setActive(null)}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </div>
    );
  },
};

/** Dividers on DialogContent — top and bottom separator lines. */
export const WithDividers: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <TriggerDialog label="Open dialog with dividers">
      {(open, setOpen) => (
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="dividers-title"
          maxWidth="sm"
          fullWidth
        >
          <Dialog.Title id="dividers-title" onClose={() => setOpen(false)}>
            Terms of Service
          </Dialog.Title>
          <Dialog.Content dividers>
            <Typography variant="body2" sx={{ mb: 2 }}>
              These are the terms and conditions of your agreement. Please read carefully
              before accepting. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Typography>
            <Typography variant="body2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </Typography>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outlined" onClick={() => setOpen(false)}>Decline</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Accept</Button>
          </Dialog.Actions>
        </Dialog>
      )}
    </TriggerDialog>
  ),
};

/** Form dialog — inputs inside a Dialog. */
export const FormDialog: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <TriggerDialog label="Edit profile">
      {(open, setOpen) => (
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="form-title"
          maxWidth="sm"
          fullWidth
        >
          <Dialog.Title id="form-title" onClose={() => setOpen(false)}>
            Edit profile
          </Dialog.Title>
          <Dialog.Content dividers>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 4 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>
                  Full name
                </label>
                <input
                  defaultValue="Alex Johnson"
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    padding: '8px 12px', borderRadius: 4,
                    border: '1px solid #d1d5db', fontSize: 14,
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="alex@example.com"
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    padding: '8px 12px', borderRadius: 4,
                    border: '1px solid #d1d5db', fontSize: 14,
                  }}
                />
              </div>
            </div>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Save changes</Button>
          </Dialog.Actions>
        </Dialog>
      )}
    </TriggerDialog>
  ),
};

/** Alert dialog — no close button on title, disableEscapeKeyDown. */
export const AlertDialog: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <TriggerDialog label="Show alert dialog">
      {(open, setOpen) => (
        <Dialog
          open={open}
          onClose={(_, reason) => { if (reason !== 'backdropClick') setOpen(false); }}
          disableEscapeKeyDown
          aria-labelledby="alert-title"
          aria-describedby="alert-desc"
          maxWidth="xs"
        >
          <Dialog.Title id="alert-title">
            Session expiring
          </Dialog.Title>
          <Dialog.Content id="alert-desc">
            <Alert severity="warning" sx={{ border: 'none' }}>
              Your session will expire in 2 minutes. Save your work to avoid losing changes.
            </Alert>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outlined" onClick={() => setOpen(false)}>Dismiss</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Extend session</Button>
          </Dialog.Actions>
        </Dialog>
      )}
    </TriggerDialog>
  ),
};

/** Accessibility — focus trap, ARIA, and keyboard patterns. */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'sans-serif' }}>
      <Typography variant="overline" color="text.secondary">Focus trap + keyboard</Typography>
      <Typography variant="body2" color="text.secondary">
        When the dialog is open: Tab cycles within it, Shift+Tab goes backward,
        Escape closes it. Focus returns to the trigger button on close.
        MUI Dialog sets <code>aria-modal="true"</code> automatically.
      </Typography>
      <Typography variant="overline" color="text.secondary">ARIA wiring</Typography>
      <Typography variant="body2" color="text.secondary">
        Pass <code>aria-labelledby</code> matching <code>Dialog.Title id</code> and
        <code> aria-describedby</code> matching <code>Dialog.Content id</code>.
        The <code>role="dialog"</code> is set by MUI.
      </Typography>
      <TriggerDialog label="Open accessible dialog">
        {(open, setOpen) => (
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="a11y-title"
            aria-describedby="a11y-desc"
            maxWidth="xs"
          >
            <Dialog.Title id="a11y-title" onClose={() => setOpen(false)}>
              Accessible dialog
            </Dialog.Title>
            <Dialog.Content id="a11y-desc">
              <Typography variant="body2">
                Tab through this dialog. Focus is constrained within.
                Press Escape to close. Focus returns to the trigger.
              </Typography>
            </Dialog.Content>
            <Dialog.Actions>
              <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => setOpen(false)}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        )}
      </TriggerDialog>
    </div>
  ),
};

/**
 * Token Audit — all CSS custom properties the Dialog component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  args: { open: false },
  parameters: { layout: 'padded' },
  render: () => {
    const [open, setOpen] = React.useState(false);

    const vars = [
      '--ep-component-dialog-background',
      '--ep-component-dialog-border-radius',
      '--ep-component-dialog-transition-duration',
      '--ep-component-dialog-shadow',
      '--ep-component-dialog-title-padding-y',
      '--ep-component-dialog-title-padding-x',
      '--ep-component-dialog-title-font-size',
      '--ep-component-dialog-title-font-weight',
      '--ep-component-dialog-content-padding-y',
      '--ep-component-dialog-content-padding-x',
      '--ep-component-dialog-actions-padding-y',
      '--ep-component-dialog-actions-padding-x',
      '--ep-component-dialog-actions-gap',
      '--ep-component-dialog-divider-color',
      '--ep-component-dialog-close-button-color',
      '--ep-component-dialog-close-button-color-hover',
      '--ep-component-dialog-close-button-size',
      '--ep-component-dialog-close-button-focus-color',
      '--ep-component-dialog-loading-background',
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
          Open live dialog
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="audit-title"
          maxWidth="xs"
        >
          <Dialog.Title id="audit-title" onClose={() => setOpen(false)}>
            Token audit — live dialog
          </Dialog.Title>
          <Dialog.Content dividers>
            <Typography variant="body2">
              Inspect this element in DevTools → Computed to see all
              <code> --ep-component-dialog-*</code> vars resolved.
            </Typography>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="contained" onClick={() => setOpen(false)}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </div>
    );
  },
};

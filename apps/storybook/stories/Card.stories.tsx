import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  TextField,
  Alert,
  Icon,
} from '@eventpipe/ui';
import type { CardProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Surfaces/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
      description: 'Visual surface style.',
      table: { defaultValue: { summary: 'elevated' } },
    },
    interactive: {
      control: 'boolean',
      description: 'Enables hover/focus/click behavior. Adds role="button" and tabIndex=0.',
      table: { defaultValue: { summary: 'false' } },
    },
    onClick: { action: 'clicked' },
  },

  args: {
    variant: 'elevated',
    interactive: false,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Use Controls to explore variant and interactive props. */
export const Default: Story = {
  render: (args: CardProps) => (
    <Card {...args} sx={{ maxWidth: 400 }}>
      <CardHeader title="Default Card" subheader="Subheader text" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Card body content goes here. This is the primary content area.
        </Typography>
      </CardContent>
      <CardFooter>
        <Button variant="contained" size="sm">Action</Button>
        <Button variant="outlined" size="sm">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};

/** All three surface variants side by side. */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {(['elevated', 'outlined', 'filled'] as const).map((v) => (
        <Card key={v} variant={v} sx={{ width: 260 }}>
          <CardHeader title={v.charAt(0).toUpperCase() + v.slice(1)} subheader="Card variant" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Surface: {v === 'filled' ? 'neutral bg' : 'white'}
              {v === 'elevated' ? ', drop shadow' : ''}
              {v === 'outlined' ? ', 1px border' : ''}
            </Typography>
          </CardContent>
          <CardFooter>
            <Button variant="contained" size="sm">Action</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
};

/** Card with the full header/content/footer composition. */
export const WithHeaderContentFooter: Story = {
  render: () => (
    <Card sx={{ maxWidth: 480 }}>
      <CardHeader
        title="EventPipe Conference 2026"
        subheader="March 24–26 · San Francisco, CA"
        avatar={
          <Avatar sx={{ bgcolor: 'var(--ep-component-card-focus-ring-color)', width: 40, height: 40 }}>
            E
          </Avatar>
        }
        action={
          <button
            aria-label="More options"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          >
            <Icon name="settings" size="md" />
          </button>
        }
      />
      <Divider sx={{ borderColor: 'var(--ep-component-card-divider-color)' }} />
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Join 2,000+ event professionals for three days of workshops, talks, and networking.
        </Typography>
        <Alert severity="info" size="sm" sx={{ mt: 1 }}>
          Early registration ends April 1st.
        </Alert>
      </CardContent>
      <Divider sx={{ borderColor: 'var(--ep-component-card-divider-color)' }} />
      <CardFooter>
        <Button variant="contained">Register now</Button>
        <Button variant="outlined">Learn more</Button>
      </CardFooter>
    </Card>
  ),
};

/** Interactive cards — all variants with click and keyboard support. */
export const Interactive: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      {(['elevated', 'outlined', 'filled'] as const).map((v) => (
        <Card
          key={v}
          variant={v}
          interactive
          onClick={() => alert(`Clicked: ${v}`)}
          sx={{ width: 220 }}
        >
          <CardContent>
            <Typography variant="subtitle2" gutterBottom>
              {v.charAt(0).toUpperCase() + v.slice(1)} Interactive
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click or press Enter/Space to activate.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};

/** Cards containing form controls — non-interactive container usage. */
export const WithFormContent: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <Card variant="outlined" sx={{ width: 360 }}>
        <CardHeader title="Register for event" subheader="Fill in your details below" />
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <TextField label="Full name" fullWidth />
            <TextField label="Email address" type="email" fullWidth />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="contained" fullWidth>Submit registration</Button>
        </CardFooter>
      </Card>

      <Card variant="elevated" sx={{ width: 360 }}>
        <CardHeader title="Quick search" />
        <CardContent>
          <TextField
            label="Search events"
            placeholder="Type to search..."
            fullWidth
            startAdornment={<Icon name="search" size="sm" />}
          />
        </CardContent>
        <CardFooter>
          <Button variant="contained" size="sm">Search</Button>
          <Button variant="text" size="sm">Clear</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

/** Cards with status alerts — common pattern for event status displays. */
export const WithStatusContent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 420 }}>
      <Card variant="outlined">
        <CardHeader title="Payment status" subheader="Invoice #2026-0324" />
        <CardContent>
          <Alert severity="success">Payment confirmed — $299.00 received.</Alert>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardHeader title="Event check-in" subheader="Workshop: Design Systems" />
        <CardContent>
          <Alert severity="warning">Check-in closes in 15 minutes.</Alert>
        </CardContent>
        <CardFooter>
          <Button variant="contained" color="warning">Check in now</Button>
        </CardFooter>
      </Card>

      <Card variant="outlined">
        <CardHeader title="Schedule conflict" />
        <CardContent>
          <Alert severity="error">Two sessions overlap at 2:00 PM on March 25.</Alert>
        </CardContent>
        <CardFooter>
          <Button variant="outlined" color="error">Resolve conflict</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

/** No sub-components — Card as a bare surface container. */
export const BareCard: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {(['elevated', 'outlined', 'filled'] as const).map((v) => (
        <Card key={v} variant={v} sx={{ p: 3, width: 200 }}>
          <Typography variant="h6" gutterBottom>
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Direct children, no sub-components.
          </Typography>
        </Card>
      ))}
    </div>
  ),
};

/** Accessibility patterns — interactive vs static, ARIA, keyboard navigation. */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary">Interactive card (role="button")</Typography>
        <Card
          variant="elevated"
          interactive
          onClick={() => alert('Navigating to event detail')}
          sx={{ maxWidth: 340, mt: 1 }}
          aria-label="Summer Tech Summit — click to view details"
        >
          <CardContent>
            <Typography variant="subtitle2">Summer Tech Summit</Typography>
            <Typography variant="body2" color="text.secondary">
              Tab to this card and press Enter or Space. Screen reader announces role="button".
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">Static card (no role)</Typography>
        <Card variant="outlined" sx={{ maxWidth: 340, mt: 1 }}>
          <CardHeader
            title="Attendee record"
            subheader="ID: EP-20260324"
            action={
              <Button variant="text" size="sm" aria-label="Edit attendee record">
                <Icon name="edit" size="sm" />
              </Button>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This card is a static container. The edit button has its own accessible name.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">disablePadding slots</Typography>
        <Card variant="elevated" sx={{ maxWidth: 340, mt: 1 }}>
          <CardHeader title="Flush header" disablePadding />
          <CardContent disablePadding>
            <div style={{ background: '#F3F4F6', padding: '16px 24px' }}>
              Custom flush content — padding controlled by child, not CardContent.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

/**
 * Token Audit — all 26 CSS custom properties the Card component reads.
 * Open DevTools → Computed tab to verify each var resolves correctly.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const vars = [
      '--ep-component-card-border-radius',
      '--ep-component-card-border-width',
      '--ep-component-card-background-elevated',
      '--ep-component-card-background-outlined',
      '--ep-component-card-background-filled',
      '--ep-component-card-border-elevated',
      '--ep-component-card-border-outlined',
      '--ep-component-card-border-filled',
      '--ep-component-card-shadow',
      '--ep-component-card-shadow-hover',
      '--ep-component-card-hover-background',
      '--ep-component-card-header-title-color',
      '--ep-component-card-header-subheader-color',
      '--ep-component-card-header-padding-y',
      '--ep-component-card-header-padding-x',
      '--ep-component-card-header-gap',
      '--ep-component-card-content-color',
      '--ep-component-card-content-padding-y',
      '--ep-component-card-content-padding-x',
      '--ep-component-card-footer-padding-y',
      '--ep-component-card-footer-padding-x',
      '--ep-component-card-footer-gap',
      '--ep-component-card-divider-color',
      '--ep-component-card-focus-ring-color',
      '--ep-component-card-focus-ring-width',
      '--ep-component-card-focus-ring-offset',
    ];
    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ color: '#666', marginBottom: 8 }}>
          Open DevTools → Computed to verify each var resolves (no fallback value).
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

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {(['elevated', 'outlined', 'filled'] as const).map((v) => (
            <Card key={v} variant={v} sx={{ width: 200 }}>
              <CardHeader title={v} subheader="Token audit" />
              <CardContent>
                <Typography variant="body2">Live preview</Typography>
              </CardContent>
              <CardFooter>
                <Button variant="contained" size="sm">Action</Button>
              </CardFooter>
            </Card>
          ))}
          <Card variant="elevated" interactive onClick={() => {}} sx={{ width: 200 }}>
            <CardContent>
              <Typography variant="subtitle2">Interactive</Typography>
              <Typography variant="body2" color="text.secondary">Hover + focus ring</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  },
};

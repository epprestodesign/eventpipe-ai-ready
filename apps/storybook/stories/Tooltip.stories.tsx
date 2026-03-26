import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Tooltip, Icon, Avatar } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Surfaces/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Portal-rendered overlay that describes a trigger element on hover or focus. No `forwardRef` — the trigger\'s ref belongs to the caller. Styled via `componentsProps` so CSS vars resolve inside the Portal.',
      },
    },
  },

  argTypes: {
    size:      { control: 'radio',  options: ['sm', 'md'] },
    placement: {
      control: 'select',
      options: [
        'bottom', 'bottom-start', 'bottom-end',
        'top',    'top-start',    'top-end',
        'left',   'left-start',   'left-end',
        'right',  'right-start',  'right-end',
      ],
    },
    arrow:    { control: 'boolean' },
    title:    { control: 'text' },
    enterDelay: { control: 'number' },
    leaveDelay: { control: 'number' },
  },

  args: {
    size:       'md',
    placement:  'bottom',
    arrow:      false,
    title:      'Tooltip label',
    enterDelay: 100,
    leaveDelay: 0,
    // Default trigger child — overridden by stories that use render()
    children:   React.createElement(Button, { variant: 'outlined' }, 'Hover me'),
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — hover the button to see the tooltip. Use Controls to explore. */
export const Default: Story = {};

/** Both sizes — sm is compact (caption), md is standard (body2). */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 80 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Tooltip title="Small tooltip" size="sm" open>
          <Button variant="outlined">sm</Button>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 48 }}>
        <Tooltip title="Medium tooltip" size="md" open>
          <Button variant="outlined">md</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

/** Arrow variant — pointer aimed at the trigger. */
export const WithArrow: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 80 }}>
      <Tooltip title="Arrow on bottom" arrow placement="bottom" open>
        <Button variant="outlined">bottom</Button>
      </Tooltip>
      <div style={{ marginTop: 64 }}>
        <Tooltip title="Arrow on top" arrow placement="top" open>
          <Button variant="outlined">top</Button>
        </Tooltip>
      </div>
      <Tooltip title="Arrow on right" arrow placement="right" open>
        <Button variant="outlined">right</Button>
      </Tooltip>
    </div>
  ),
};

/** All 12 placements — force-open to show positions simultaneously. */
export const Placements: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const placements = [
      'top-start', 'top', 'top-end',
      'left-start', 'right-start',
      'left',       'right',
      'left-end',   'right-end',
      'bottom-start', 'bottom', 'bottom-end',
    ] as const;

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center', padding: 48 }}>
        {placements.map((p) => (
          <Tooltip key={p} title={p} placement={p} arrow open>
            <Button variant="outlined" size="small" sx={{ minWidth: 120, fontSize: 11 }}>
              {p}
            </Button>
          </Tooltip>
        ))}
      </div>
    );
  },
};

/** Long content — wraps at maxWidth token (300px default). */
export const LongContent: Story = {
  render: () => (
    <Tooltip
      title="This tooltip contains a longer description to demonstrate how the maxWidth token constrains the content and causes line wrapping at 300px."
      placement="bottom"
      open
    >
      <Button variant="outlined">Long tooltip</Button>
    </Tooltip>
  ),
};

/** Wrapping non-button elements — any single ReactElement trigger. */
export const VariousTriggers: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <Tooltip title="Button trigger">
        <Button variant="contained">Button</Button>
      </Tooltip>
      <Tooltip title="Avatar trigger">
        <Avatar size="md">JD</Avatar>
      </Tooltip>
      <Tooltip title="Icon trigger">
        <span>
          <Icon name="info" size="lg" />
        </span>
      </Tooltip>
      <Tooltip title="Span text trigger">
        <span style={{ cursor: 'default', textDecoration: 'underline dotted' }}>
          Underlined text
        </span>
      </Tooltip>
    </div>
  ),
};

/** Controlled open state — open is pinned true/false via prop. */
export const ControlledOpen: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 80 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Tooltip title="Always visible (open=true)" open>
          <Button variant="outlined">open=true</Button>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 48 }}>
        <Tooltip title="Never visible (open=false)" open={false}>
          <Button variant="outlined">open=false</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

/** Accessibility — keyboard focus triggers tooltip; role="tooltip" applied by MUI. */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary">Focus-triggered tooltip</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Tab to the button — the tooltip opens on focus. MUI adds role="tooltip" and
          aria-describedby automatically.
        </Typography>
        <Tooltip title="Appears on focus and hover" placement="right">
          <Button variant="outlined">Tab to me</Button>
        </Tooltip>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Hover-only (focus disabled)</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          disableFocusListener removes keyboard accessibility. Only use for purely decorative tooltips.
        </Typography>
        <Tooltip title="Mouse-hover only" disableFocusListener placement="right">
          <Button variant="outlined">Hover only</Button>
        </Tooltip>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Empty title — tooltip disabled</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Pass an empty string or null to suppress the tooltip without removing it from the tree.
        </Typography>
        <Tooltip title="">
          <Button variant="outlined">No tooltip</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

/**
 * Token Audit — all CSS custom properties the Tooltip component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const vars = [
      '--ep-component-tooltip-background',
      '--ep-component-tooltip-color',
      '--ep-component-tooltip-border-radius',
      '--ep-component-tooltip-max-width',
      '--ep-component-tooltip-arrow-size',
      '--ep-component-tooltip-padding-sm-y',
      '--ep-component-tooltip-padding-sm-x',
      '--ep-component-tooltip-padding-md-y',
      '--ep-component-tooltip-padding-md-x',
      '--ep-component-tooltip-font-size-sm',
      '--ep-component-tooltip-font-size-md',
    ];

    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ color: '#666', marginBottom: 8 }}>
          Open DevTools → Computed to verify each var resolves (no fallback value). Total: {vars.length} vars.
        </p>
        <table style={{ borderCollapse: 'collapse', marginBottom: 48 }}>
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
        <div style={{ display: 'flex', gap: 80, marginTop: 48, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <Tooltip title="size sm" size="sm" open placement="top">
            <Button variant="outlined" size="small">sm</Button>
          </Tooltip>
          <Tooltip title="size md, no arrow" size="md" open placement="top">
            <Button variant="outlined">md</Button>
          </Tooltip>
          <Tooltip title="with arrow" size="md" arrow open placement="top">
            <Button variant="outlined">arrow</Button>
          </Tooltip>
        </div>
      </div>
    );
  },
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Feedback/CircularProgress',
  component: CircularProgress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Spinning arc indicator for loading and progress states. ' +
          'Two modes: indeterminate (continuous spin) and determinate (shows a fixed arc at value%). ' +
          '5-tier named size scale (xs–xl). All EpColor values supported. ' +
          'Non-interactive — no focus ring, no disabled state.',
      },
    },
  },
  argTypes: {
    variant:      { control: 'radio',   options: ['indeterminate', 'determinate'] },
    size:         { control: 'radio',   options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color:        { control: 'radio',   options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] },
    value:        { control: { type: 'range', min: 0, max: 100, step: 1 } },
    thickness:    { control: { type: 'number', min: 1, max: 10, step: 0.2 } },
    disableShrink:{ control: 'boolean' },
  },
  args: {
    variant:       'indeterminate',
    size:          'md',
    color:         'primary',
    value:         undefined,
    disableShrink: false,
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — use Controls to explore all props. */
export const Default: Story = {};

/** All five sizes on a single row. */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <CircularProgress size={s} />
          <Typography variant="caption" color="text.secondary">{s}</Typography>
        </div>
      ))}
    </div>
  ),
};

/** All EpColor values. */
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(
        (c) => (
          <div key={c} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <CircularProgress color={c} />
            <Typography variant="caption" color="text.secondary">{c}</Typography>
          </div>
        )
      )}
    </div>
  ),
};

/** Indeterminate vs determinate modes. */
export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
          Indeterminate — continuous spin (duration unknown)
        </Typography>
        <div style={{ display: 'flex', gap: 24 }}>
          <CircularProgress variant="indeterminate" color="primary" />
          <CircularProgress variant="indeterminate" color="secondary" />
          <CircularProgress variant="indeterminate" color="success" />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
          Determinate — arc at 25 %, 50 %, 75 %, 100 %
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {[25, 50, 75, 100].map((v) => (
            <div key={v} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <CircularProgress variant="determinate" value={v} />
              <Typography variant="caption" color="text.secondary">{v}%</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

/** Animated determinate — controlled value slider. */
export const DeterminateProgress: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const [value, setValue] = React.useState(25);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <div style={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress variant="determinate" value={value} size="xl" />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption" color="text.secondary" fontWeight={600}>
              {Math.round(value)}%
            </Typography>
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          style={{ width: 200 }}
        />
        <Typography variant="body2" color="text.secondary">
          Drag slider to update progress
        </Typography>
      </div>
    );
  },
};

/** In-context usage — button loading, inline text, overlay. */
export const InContext: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Inline with text
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <CircularProgress size="sm" />
          <Typography variant="body2">Loading results…</Typography>
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Centered in a card placeholder
        </Typography>
        <div
          style={{
            width: 320,
            height: 120,
            border: '1px solid var(--ep-semantic-color-border-default)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </div>
      </div>
    </div>
  ),
};

/** Accessibility — ARIA patterns for progress indicators. */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary">
          ARIA — role="progressbar"
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          MUI renders a <code>role="progressbar"</code> with <code>aria-valuemin="0"</code>
          {' '}and <code>aria-valuemax="100"</code>. For indeterminate, <code>aria-valuenow</code>
          {' '}is omitted. Provide <code>aria-label</code> via <code>sx</code> or wrap in a
          {' '}<code>role="status"</code> region.
        </Typography>
        <div role="status" aria-label="Loading content">
          <CircularProgress />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">
          Determinate with aria-valuenow
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Determinate mode passes <code>aria-valuenow</code> automatically from the
          {' '}<code>value</code> prop.
        </Typography>
        <CircularProgress variant="determinate" value={68} aria-label="Upload progress: 68%" />
      </div>
    </div>
  ),
};

/**
 * Token Audit — all CSS custom properties the CircularProgress component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const sizeVars = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map(
      (s) => `--ep-component-circular-progress-size-${s}`
    );
    const colorVars = (
      ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const
    ).map((c) => `--ep-component-circular-progress-color-${c}`);
    const vars = [...sizeVars, ...colorVars];

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
        <Typography variant="overline" color="text.secondary">Live renders — sizes</Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 8, marginBottom: 24 }}>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
            <CircularProgress key={s} size={s} />
          ))}
        </div>
        <Typography variant="overline" color="text.secondary">Live renders — colors</Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 8 }}>
          {(
            ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const
          ).map((c) => (
            <CircularProgress key={c} color={c} />
          ))}
        </div>
      </div>
    );
  },
};

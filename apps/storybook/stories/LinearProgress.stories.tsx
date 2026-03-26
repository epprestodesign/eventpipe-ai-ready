import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { LinearProgress } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Feedback/LinearProgress',
  component: LinearProgress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Horizontal bar indicator for loading and progress states. ' +
          'Four modes: indeterminate (continuous), determinate (value%), ' +
          'buffer (progress + buffered), query (reversed indeterminate). ' +
          'All EpColor values supported. Optional rounded end-caps. ' +
          'Non-interactive — no focus ring, no disabled state.',
      },
    },
  },
  argTypes: {
    variant: { control: 'radio', options: ['indeterminate', 'determinate', 'buffer', 'query'] },
    color:   { control: 'radio', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] },
    value:        { control: { type: 'range', min: 0, max: 100, step: 1 } },
    valueBuffer:  { control: { type: 'range', min: 0, max: 100, step: 1 } },
    rounded:      { control: 'boolean' },
  },
  args: {
    variant:     'indeterminate',
    color:       'primary',
    value:       undefined,
    valueBuffer: undefined,
    rounded:     false,
  },
} satisfies Meta<typeof LinearProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — use Controls to explore all props. */
export const Default: Story = {
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

/** All EpColor values. */
export const Colors: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(
        (c) => (
          <div key={c}>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
              {c}
            </Typography>
            <LinearProgress color={c} />
          </div>
        )
      )}
    </div>
  ),
};

/** All four variant modes. */
export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 360 }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Indeterminate — continuous (duration unknown)
        </Typography>
        <LinearProgress variant="indeterminate" />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Determinate — fixed arc at 60%
        </Typography>
        <LinearProgress variant="determinate" value={60} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Buffer — progress 40%, buffered 70%
        </Typography>
        <LinearProgress variant="buffer" value={40} valueBuffer={70} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Query — reversed indeterminate (pre-loading)
        </Typography>
        <LinearProgress variant="query" />
      </div>
    </div>
  ),
};

/** Animated determinate — controlled value slider. */
export const DeterminateProgress: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const [value, setValue] = React.useState(30);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 360 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.secondary">Loading…</Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={600}>{value}%</Typography>
        </div>
        <LinearProgress variant="determinate" value={value} />
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          style={{ width: '100%' }}
        />
        <Typography variant="caption" color="text.secondary">Drag slider to update progress</Typography>
      </div>
    );
  },
};

/** Buffer mode — progress and buffered amount controlled independently. */
export const BufferProgress: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const [progress, setProgress]   = React.useState(20);
    const [buffer,   setBuffer]     = React.useState(50);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 360 }}>
        <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontSize: 12, color: '#666' }}>
            Progress: {progress}%
            <input type="range" min={0} max={buffer} value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              style={{ display: 'block', width: '100%' }} />
          </label>
          <label style={{ fontSize: 12, color: '#666' }}>
            Buffer: {buffer}%
            <input type="range" min={progress} max={100} value={buffer}
              onChange={(e) => setBuffer(Number(e.target.value))}
              style={{ display: 'block', width: '100%' }} />
          </label>
        </div>
      </div>
    );
  },
};

/** Rounded end-caps via the `rounded` prop. */
export const Rounded: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 360 }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Default (square ends)
        </Typography>
        <LinearProgress variant="determinate" value={65} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Rounded end-caps
        </Typography>
        <LinearProgress variant="determinate" value={65} rounded />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Rounded — indeterminate
        </Typography>
        <LinearProgress variant="indeterminate" rounded />
      </div>
    </div>
  ),
};

/** In-context usage — page loader, section loader, upload. */
export const InContext: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, width: 400, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Page-level loader (top of viewport)
        </Typography>
        <div style={{ border: '1px solid #eee', borderRadius: 4, overflow: 'hidden' }}>
          <LinearProgress color="primary" />
          <div style={{ padding: 16, background: '#fafafa' }}>
            <Typography variant="body2" color="text.secondary">Page content below…</Typography>
          </div>
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Upload progress
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2">document.pdf</Typography>
            <Typography variant="body2" color="text.secondary">72%</Typography>
          </div>
          <LinearProgress variant="determinate" value={72} color="success" rounded />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Video buffering
        </Typography>
        <LinearProgress variant="buffer" value={35} valueBuffer={65} color="secondary" />
      </div>
    </div>
  ),
};

/** Accessibility — ARIA patterns for progress indicators. */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 400, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary">
          ARIA — role="progressbar"
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          MUI renders <code>role="progressbar"</code> with <code>aria-valuemin="0"</code>{' '}
          and <code>aria-valuemax="100"</code>. For indeterminate,{' '}
          <code>aria-valuenow</code> is omitted. Wrap in a{' '}
          <code>role="status"</code> region or pass <code>aria-label</code> via <code>sx</code>.
        </Typography>
        <div role="status" aria-label="Loading content">
          <LinearProgress />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">
          Determinate with aria-valuenow
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Determinate mode passes <code>aria-valuenow</code> automatically from the{' '}
          <code>value</code> prop.
        </Typography>
        <LinearProgress
          variant="determinate"
          value={55}
          aria-label="File upload: 55% complete"
        />
      </div>
    </div>
  ),
};

/**
 * Token Audit — all CSS custom properties the LinearProgress component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const colorVars = (
      ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const
    ).map((c) => `--ep-component-linear-progress-bar-${c}`);

    const shapeVars = [
      '--ep-component-linear-progress-height',
      '--ep-component-linear-progress-border-radius',
      '--ep-component-linear-progress-track-color',
    ];

    const vars = [...shapeVars, ...colorVars];

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
        <Typography variant="overline" color="text.secondary">Live renders — colors</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8, marginBottom: 24, width: 360 }}>
          {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map((c) => (
            <div key={c}>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>{c}</Typography>
              <LinearProgress color={c} />
            </div>
          ))}
        </div>
        <Typography variant="overline" color="text.secondary">Live renders — rounded</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8, width: 360 }}>
          <LinearProgress variant="determinate" value={60} />
          <LinearProgress variant="determinate" value={60} rounded />
        </div>
      </div>
    );
  },
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { Badge, Avatar, Icon } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Surfaces/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Overlaid indicator anchored to a child element. `standard` variant shows a count or label; `dot` is a presence-only indicator. Wraps any child — commonly Avatar, Icon, or IconButton.',
      },
    },
  },

  argTypes: {
    variant:  { control: 'radio',  options: ['standard', 'dot'] },
    size:     { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color:    { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] },
    overlap:  { control: 'radio',  options: ['rectangular', 'circular'] },
    badgeContent: { control: 'text' },
    max:      { control: 'number' },
    showZero: { control: 'boolean' },
    invisible: { control: 'boolean' },
  },

  args: {
    variant:      'standard',
    size:         'md',
    color:        'primary',
    overlap:      'rectangular',
    badgeContent: 4,
    max:          99,
    showZero:     false,
    invisible:    false,
    // Default trigger child — overridden by stories that use render()
    children:     React.createElement(Avatar, { size: 'md' }),
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — use Controls to explore all props. */
export const Default: Story = {};

/** All five sizes side-by-side (standard variant). */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge size={s} badgeContent={4} color="primary">
            <Avatar size={s} />
          </Badge>
          <Typography variant="caption" color="text.secondary">{s}</Typography>
        </div>
      ))}
    </div>
  ),
};

/** All seven colors. */
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map((c) => (
        <div key={c} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge size="md" badgeContent={4} color={c}>
            <Avatar size="md" />
          </Badge>
          <Typography variant="caption" color="text.secondary">{c}</Typography>
        </div>
      ))}
    </div>
  ),
};

/** Dot variant — presence indicator only (no content). */
export const DotVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Badge variant="dot" color="success" overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Avatar size="lg">JD</Avatar>
        </Badge>
        <Typography variant="caption" color="text.secondary">online</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Badge variant="dot" color="error" overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Avatar size="lg"><Icon name="info" size="lg" /></Avatar>
        </Badge>
        <Typography variant="caption" color="text.secondary">alert</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Badge variant="dot" color="warning">
          <Icon name="calendar" size="lg" />
        </Badge>
        <Typography variant="caption" color="text.secondary">rectangular</Typography>
      </div>
    </div>
  ),
};

/** Max overflow — badgeContent exceeds max, shows `{max}+`. */
export const MaxOverflow: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Badge badgeContent={99} max={99} color="error">
          <Avatar size="md" />
        </Badge>
        <Typography variant="caption" color="text.secondary">99 (at max)</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Badge badgeContent={100} max={99} color="error">
          <Avatar size="md" />
        </Badge>
        <Typography variant="caption" color="text.secondary">100 → 99+</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Badge badgeContent={1000} max={999} color="primary">
          <Avatar size="md" />
        </Badge>
        <Typography variant="caption" color="text.secondary">1000 → 999+</Typography>
      </div>
    </div>
  ),
};

/** Overlap — rectangular vs circular wrapping children. */
export const Overlap: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Badge badgeContent={3} color="error" overlap="rectangular">
          <Icon name="settings" size="xl" />
        </Badge>
        <Typography variant="caption" color="text.secondary">rectangular</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Badge badgeContent={3} color="error" overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Avatar size="lg">JD</Avatar>
        </Badge>
        <Typography variant="caption" color="text.secondary">circular</Typography>
      </div>
    </div>
  ),
};

/** Accessibility — badge role, aria-label patterns. */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary">Numeric badge — wrap in aria-label</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Badge content is visual only. Wrap the trigger with an aria-label that includes the count.
        </Typography>
        <div aria-label="4 notifications">
          <Badge badgeContent={4} color="error">
            <Icon name="info" size="lg" />
          </Badge>
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Dot badge — status via aria-label</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Dot conveys no count — nearby text or aria-label on the trigger provides meaning.
        </Typography>
        <div aria-label="Jane Doe — online">
          <Badge variant="dot" color="success" overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <Avatar size="lg">JD</Avatar>
          </Badge>
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Invisible — hidden badge (invisible=true)</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Set invisible to hide the badge without unmounting. The trigger remains in the tab order.
        </Typography>
        <Badge badgeContent={4} color="error" invisible>
          <Icon name="info" size="lg" />
        </Badge>
      </div>
    </div>
  ),
};

/**
 * Token Audit — all CSS custom properties the Badge component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const sizeVars = ['xs', 'sm', 'md', 'lg', 'xl'].flatMap((s) => [
      `--ep-component-badge-size-${s}-height`,
      `--ep-component-badge-size-${s}-min-width`,
      `--ep-component-badge-size-${s}-font-size`,
      `--ep-component-badge-size-${s}-padding-x`,
      `--ep-component-badge-size-${s}-dot-size`,
    ]);
    const colorVars = ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'].flatMap((c) => [
      `--ep-component-badge-color-${c}-background`,
      `--ep-component-badge-color-${c}-text`,
    ]);
    const allVars = ['--ep-component-badge-border-radius', ...sizeVars, ...colorVars];

    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ color: '#666', marginBottom: 8 }}>
          Open DevTools → Computed to verify each var resolves (no fallback value). Total: {allVars.length} vars.
        </p>
        <table style={{ borderCollapse: 'collapse', marginBottom: 32 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '4px 12px 4px 0', textAlign: 'left' }}>CSS custom property</th>
              <th style={{ padding: '4px 12px', textAlign: 'left' }}>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {allVars.map((v) => (
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
        <div style={{ display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
            <Badge key={s} size={s} badgeContent={4} color="primary">
              <Avatar size={s} />
            </Badge>
          ))}
          {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map((c) => (
            <Badge key={c} badgeContent={1} color={c}>
              <Avatar size="md" />
            </Badge>
          ))}
          <Badge variant="dot" color="success" overlap="circular">
            <Avatar size="md">JD</Avatar>
          </Badge>
        </div>
      </div>
    );
  },
};

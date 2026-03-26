import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { Avatar, Badge, Icon } from '@eventpipe/ui';
import type { AvatarProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Surfaces/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Displays an image, initials, or icon to represent a person or entity. Fallback order: src image → children → person icon. No `color` prop — single background/foreground token pair.',
      },
    },
  },

  argTypes: {
    variant: { control: 'radio',  options: ['circular', 'rounded', 'square'] },
    size:    { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    src:     { control: 'text' },
    alt:     { control: 'text' },
    children:{ control: 'text' },
  },

  args: {
    variant: 'circular',
    size:    'md',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — no image, no children → person icon fallback. Use Controls to explore. */
export const Default: Story = {};

/** All five sizes side-by-side. */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Avatar size={s} />
          <Typography variant="caption" color="text.secondary">{s}</Typography>
        </div>
      ))}
    </div>
  ),
};

/** All three shape variants. */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      {(['circular', 'rounded', 'square'] as const).map((v) => (
        <div key={v} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Avatar variant={v} size="lg" />
          <Typography variant="caption" color="text.secondary">{v}</Typography>
        </div>
      ))}
    </div>
  ),
};

/** Text initials as fallback children. */
export const WithInitials: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Avatar size="xl">JD</Avatar>
      <Avatar size="lg">AB</Avatar>
      <Avatar size="md">EP</Avatar>
      <Avatar size="sm">T</Avatar>
      <Avatar size="xs">Z</Avatar>
    </div>
  ),
};

/** Icon as fallback children. */
export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Avatar size="xl"><Icon name="person" size="xl" /></Avatar>
      <Avatar size="lg"><Icon name="settings" size="lg" /></Avatar>
      <Avatar size="md"><Icon name="calendar" size="md" /></Avatar>
    </div>
  ),
};

/** Image source — fallback shown when src is empty. */
export const WithImage: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Avatar
        size="xl"
        src="https://mui.com/static/images/avatar/1.jpg"
        alt="User avatar"
      />
      <Avatar
        size="lg"
        src="https://mui.com/static/images/avatar/2.jpg"
        alt="User avatar"
      />
      <Avatar
        size="md"
        src="https://mui.com/static/images/avatar/3.jpg"
        alt="User avatar"
      />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <Avatar size="md" src="broken-url" alt="Broken image" />
        <Typography variant="caption" color="text.secondary">broken src → icon</Typography>
      </div>
    </div>
  ),
};

/** Avatar + Badge pattern — the canonical pairing. */
export const WithBadge: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Badge variant="dot" color="success" overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Avatar size="lg">JD</Avatar>
      </Badge>
      <Badge badgeContent={3} color="error" overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Avatar size="lg"><Icon name="person" size="lg" /></Avatar>
      </Badge>
    </div>
  ),
};

/** Accessibility — alt text, decorative usage, and group context. */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary">With alt (semantic image)</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Screen reader announces: "User avatar, image"
        </Typography>
        <Avatar
          size="lg"
          src="https://mui.com/static/images/avatar/1.jpg"
          alt="Jane Doe"
        />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Initials — no alt needed</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          The initials text is visible and read by screen readers as text content.
        </Typography>
        <Avatar size="lg">JD</Avatar>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Icon fallback — decorative</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          The injected person icon has aria-hidden="true" (EP Icon default for decorative use).
          Screen readers skip it; surrounding context provides meaning.
        </Typography>
        <Avatar size="lg" />
      </div>
    </div>
  ),
};

/**
 * Token Audit — all 20 CSS custom properties the Avatar component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const vars = [
      '--ep-component-avatar-size-xs-width',
      '--ep-component-avatar-size-xs-height',
      '--ep-component-avatar-size-xs-font-size',
      '--ep-component-avatar-size-sm-width',
      '--ep-component-avatar-size-sm-height',
      '--ep-component-avatar-size-sm-font-size',
      '--ep-component-avatar-size-md-width',
      '--ep-component-avatar-size-md-height',
      '--ep-component-avatar-size-md-font-size',
      '--ep-component-avatar-size-lg-width',
      '--ep-component-avatar-size-lg-height',
      '--ep-component-avatar-size-lg-font-size',
      '--ep-component-avatar-size-xl-width',
      '--ep-component-avatar-size-xl-height',
      '--ep-component-avatar-size-xl-font-size',
      '--ep-component-avatar-border-radius-circular',
      '--ep-component-avatar-border-radius-rounded',
      '--ep-component-avatar-border-radius-square',
      '--ep-component-avatar-background',
      '--ep-component-avatar-color',
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
                  <span style={{ display: 'inline-block', width: 16, height: 16, background: `var(${v})`, border: '1px solid #ccc', verticalAlign: 'middle' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Typography variant="overline" color="text.secondary">Live renders</Typography>
        <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
            <Avatar key={s} size={s} />
          ))}
          <Avatar size="md">JD</Avatar>
          <Avatar variant="rounded" size="md" />
          <Avatar variant="square" size="md" />
        </div>
      </div>
    );
  },
};

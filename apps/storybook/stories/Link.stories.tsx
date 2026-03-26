import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Navigation/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Inline typographic link element. Renders as <a> by default. ' +
          'Color variants: primary (brand.primary), secondary (brand.secondary), inherit (parent). ' +
          'Underline: hover (default), always, none. ' +
          'EP focus ring on :focus-visible. ' +
          'Spec: docs/specs/components/link.md',
      },
    },
  },
  argTypes: {
    color:     { control: 'radio', options: ['primary', 'secondary', 'inherit'] },
    underline: { control: 'radio', options: ['hover', 'always', 'none'] },
    variant:   { control: 'select', options: ['body1', 'body2', 'caption', 'subtitle1', 'subtitle2', 'h6'] },
  },
  args: {
    children: 'Browse events',
    color:    'primary',
    underline: 'hover',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — primary color, hover underline. */
export const Default: Story = {
  args: {
    href: '/events',
  },
};

/** Color variants — primary, secondary, inherit. */
export const Colors: Story = {
  name: 'Color Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'sans-serif' }}>
      <div>
        <Link href="#" color="primary">Primary link</Link>
        {' '}<span style={{ fontSize: 12, color: '#666' }}>— brand.primary</span>
      </div>
      <div>
        <Link href="#" color="secondary">Secondary link</Link>
        {' '}<span style={{ fontSize: 12, color: '#666' }}>— brand.secondary</span>
      </div>
      <div style={{ color: '#4B5563' }}>
        <Link href="#" color="inherit">Inherit link</Link>
        {' '}<span style={{ fontSize: 12, color: '#666' }}>— inherits parent color (#4B5563)</span>
      </div>
    </div>
  ),
};

/** Underline variants — hover (default), always, none. */
export const UnderlineVariants: Story = {
  name: 'Underline Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'sans-serif' }}>
      <div>
        <Link href="#" underline="hover">Underline on hover</Link>
        {' '}<span style={{ fontSize: 12, color: '#666' }}>— default</span>
      </div>
      <div>
        <Link href="#" underline="always">Always underlined</Link>
      </div>
      <div>
        <Link href="#" underline="none">No underline</Link>
      </div>
    </div>
  ),
};

/** Typography variants — link inherits typography scale. */
export const TypographyScale: Story = {
  name: 'Typography Scale',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'sans-serif' }}>
      {(['h6', 'subtitle1', 'body1', 'body2', 'caption'] as const).map((v) => (
        <div key={v}>
          <Link href="#" variant={v}>{v} — Browse events</Link>
        </div>
      ))}
    </div>
  ),
};

/** External link — target="_blank" with rel="noopener noreferrer". */
export const External: Story = {
  name: 'External Link',
  render: () => (
    <p style={{ fontFamily: 'sans-serif', fontSize: 14 }}>
      Visit our{' '}
      <Link
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        external documentation
      </Link>{' '}
      for more details.
    </p>
  ),
};

/** Inline usage — link within a paragraph of text. */
export const Inline: Story = {
  name: 'Inline in Text',
  render: () => (
    <p style={{ fontFamily: 'sans-serif', fontSize: 14, lineHeight: 1.6, maxWidth: 480 }}>
      EventPipe helps you manage{' '}
      <Link href="/events">events</Link>,{' '}
      <Link href="/venues">venues</Link>, and{' '}
      <Link href="/attendees">attendees</Link>{' '}
      all in one place. Get started with our{' '}
      <Link href="/docs" underline="always">documentation</Link>.
    </p>
  ),
};

/** onClick handler — link used as an action trigger without href. */
export const WithClickHandler: Story = {
  name: 'onClick Handler',
  render: () => {
    const [count, setCount] = React.useState(0);
    return (
      <div style={{ fontFamily: 'sans-serif', fontSize: 14 }}>
        <Link onClick={() => setCount((c) => c + 1)}>
          Click me
        </Link>
        {count > 0 && (
          <span style={{ marginLeft: 8, color: '#666', fontSize: 12 }}>
            Clicked {count} time{count !== 1 ? 's' : ''}
          </span>
        )}
      </div>
    );
  },
};

/** Accessibility — focus ring, keyboard navigation. */
export const Accessibility: Story = {
  name: 'Accessibility',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'sans-serif' }}>
      <p style={{ fontSize: 13, color: '#666', margin: 0 }}>
        Tab to focus each link — EP focus ring appears on <code>:focus-visible</code>.<br />
        Links render as <code>&lt;a&gt;</code> elements and are natively keyboard-accessible.
      </p>
      <div style={{ display: 'flex', gap: 16 }}>
        <Link href="#">Primary</Link>
        <Link href="#" color="secondary">Secondary</Link>
        <Link href="#" underline="none">No underline</Link>
      </div>
    </div>
  ),
};

/**
 * Token Audit — all CSS custom properties the Link component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  render: () => {
    const vars = [
      '--ep-component-link-color',
      '--ep-component-link-color-hover',
      '--ep-component-link-color-visited',
      '--ep-component-link-color-secondary',
      '--ep-component-link-color-secondary-hover',
      '--ep-component-link-focus-ring-color',
      '--ep-component-link-focus-ring-width',
      '--ep-component-link-focus-ring-offset',
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
        <div style={{ display: 'flex', gap: 16 }}>
          <Link href="#">Primary link</Link>
          <Link href="#" color="secondary">Secondary link</Link>
          <Link href="#" color="inherit">Inherit link</Link>
        </div>
      </div>
    );
  },
};

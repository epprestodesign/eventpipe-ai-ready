import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { Divider, Button } from '@eventpipe/ui';
import type { DividerProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Surfaces/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Visual separator between sections or list items. Renders as `<hr>` or `<div role="separator">` (when text children are present). No size or color variants — single token-driven line throughout.',
      },
    },
  },

  argTypes: {
    orientation: { control: 'radio',  options: ['horizontal', 'vertical'] },
    variant:     { control: 'radio',  options: ['fullWidth', 'inset', 'middle'] },
    textAlign:   { control: 'radio',  options: ['center', 'left', 'right'] },
    flexItem:    { control: 'boolean' },
    children:    { control: 'text' },
  },

  args: {
    orientation: 'horizontal',
    variant:     'fullWidth',
    textAlign:   'center',
    flexItem:    false,
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Section({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {children}
    </div>
  );
}

function Block({ label }: { label: string }) {
  return (
    <div style={{ padding: '12px 0' }}>
      <Typography variant="body2" color="text.secondary">{label}</Typography>
    </div>
  );
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default horizontal full-width divider. Use Controls to explore all props. */
export const Default: Story = {
  render: (args: DividerProps) => (
    <div style={{ width: 320 }}>
      <Block label="Section A content" />
      <Divider {...args} />
      <Block label="Section B content" />
    </div>
  ),
};

/** All three indent variants — fullWidth, inset, and middle. */
export const Variants: Story = {
  render: () => (
    <div style={{ width: 360, display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <Typography variant="overline" color="text.secondary">fullWidth (default)</Typography>
        <Section>
          <Block label="Item above" />
          <Divider variant="fullWidth" />
          <Block label="Item below" />
        </Section>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">inset — list context</Typography>
        <Section>
          <Block label="List item" />
          <Divider variant="inset" />
          <Block label="List item" />
          <Divider variant="inset" />
          <Block label="List item" />
        </Section>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">middle — section separator</Typography>
        <Section>
          <Block label="Content above" />
          <Divider variant="middle" />
          <Block label="Content below" />
        </Section>
      </div>
    </div>
  ),
};

/** Horizontal vs vertical orientation. Vertical requires a flex container and flexItem. */
export const Orientation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Horizontal (default)
        </Typography>
        <div style={{ width: 320 }}>
          <Block label="Above" />
          <Divider orientation="horizontal" />
          <Block label="Below" />
        </div>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Vertical — requires flex container + flexItem
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', height: 40, gap: 12 }}>
          <Typography variant="body2">Left</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2">Center</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2">Right</Typography>
        </div>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Vertical in button group
        </Typography>
        <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid #e0e0e0', borderRadius: 4 }}>
          <Button variant="text" color="neutral" size="sm">Cut</Button>
          <Divider orientation="vertical" flexItem />
          <Button variant="text" color="neutral" size="sm">Copy</Button>
          <Divider orientation="vertical" flexItem />
          <Button variant="text" color="neutral" size="sm">Paste</Button>
        </div>
      </div>
    </div>
  ),
};

/** Text label support — renders label centered between two flanking lines. */
export const WithText: Story = {
  render: () => (
    <div style={{ width: 360, display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <Typography variant="overline" color="text.secondary">center (default)</Typography>
        <div style={{ paddingTop: 8 }}>
          <Block label="Content above" />
          <Divider>Section break</Divider>
          <Block label="Content below" />
        </div>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">textAlign left</Typography>
        <div style={{ paddingTop: 8 }}>
          <Block label="Content above" />
          <Divider textAlign="left">January 2026</Divider>
          <Block label="Content below" />
        </div>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">textAlign right</Typography>
        <div style={{ paddingTop: 8 }}>
          <Block label="Content above" />
          <Divider textAlign="right">End of section</Divider>
          <Block label="Content below" />
        </div>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">middle + text</Typography>
        <div style={{ paddingTop: 8 }}>
          <Block label="Content above" />
          <Divider variant="middle">OR</Divider>
          <Block label="Content below" />
        </div>
      </div>
    </div>
  ),
};

/** Accessibility patterns — rendered elements, roles, and screen-reader behavior. */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary">
          No children → &lt;hr&gt; (implicit role="separator")
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Screen readers announce "separator". No aria-label needed — the surrounding
          context provides meaning.
        </Typography>
        <Divider />
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">
          With children → &lt;div role="separator"&gt; (explicit role via MUI)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          MUI renders a div with role="separator" when children are present
          (because &lt;hr&gt; cannot contain child elements).
        </Typography>
        <Divider>Label</Divider>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">
          Vertical → aria-orientation="vertical"
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          MUI sets aria-orientation="vertical" automatically on vertical dividers.
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', height: 32, gap: 12 }}>
          <Typography variant="body2">Left</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2">Right</Typography>
        </div>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">
          Decorative use — aria-hidden
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          When a divider is purely cosmetic (e.g. inside a card footer between buttons),
          pass aria-hidden via sx or className to remove it from the accessibility tree.
          Example: <code>{`<Divider sx={{ 'aria-hidden': true }} />`}</code>
        </Typography>
      </div>
    </div>
  ),
};

/**
 * Token Audit — all 7 CSS custom properties the Divider component reads.
 * Open DevTools → Computed to verify each var resolves correctly.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const vars = [
      '--ep-component-divider-color',
      '--ep-component-divider-thickness',
      '--ep-component-divider-inset-indent',
      '--ep-component-divider-middle-indent',
      '--ep-component-divider-text-color',
      '--ep-component-divider-text-font-size',
      '--ep-component-divider-text-gap',
    ];
    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ color: '#666', marginBottom: 8 }}>
          Open DevTools → Computed to verify each var resolves (no fallback value).
          Note: dimension vars won't show a color swatch — inspect the raw value.
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

        <Typography variant="overline" color="text.secondary">Live renders</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8, maxWidth: 400 }}>
          <div>
            <Typography variant="caption" color="text.secondary">fullWidth</Typography>
            <Divider />
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">inset</Typography>
            <Divider variant="inset" />
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">middle</Typography>
            <Divider variant="middle" />
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">with text</Typography>
            <Divider>Label</Divider>
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">vertical (flex)</Typography>
            <div style={{ display: 'flex', alignItems: 'center', height: 32, gap: 8 }}>
              <span>Left</span>
              <Divider orientation="vertical" flexItem />
              <span>Right</span>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Button, Icon } from '@eventpipe/ui';
import type { ButtonProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Inputs/Button',
  component: Button,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text', 'soft'],
      description: 'Visual style of the button',
      table: { defaultValue: { summary: 'contained' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Category 1 (Action Controls) — 5-tier sizing scale',
      table: { defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'],
      description: 'Color palette. Uses component tokens; does not access semantic layer directly.',
      table: { defaultValue: { summary: 'primary' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Native disabled. Removed from tab order.',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      description: 'Async loading state. Uses aria-disabled; stays in tab order.',
      table: { defaultValue: { summary: 'false' } },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch to 100% container width.',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
    startSlot: { control: false },
    endSlot:   { control: false },
    href:      { control: 'text' },
    onClick:   { action: 'clicked' },
  },

  args: {
    children: 'Button',
    variant: 'contained',
    size: 'md',
    color: 'primary',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default (Interactive) ────────────────────────────────────────────────────

/** Use the Controls panel to explore every prop combination. */
export const Default: Story = {};

// ─── Variants ─────────────────────────────────────────────────────────────────

/**
 * All four variants side-by-side.
 * `soft` is an EP addition — tinted low-emphasis background not in MUI core.
 */
export const Variants: Story = {
  render: (args: ButtonProps) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button {...args} variant="contained">Contained</Button>
      <Button {...args} variant="outlined">Outlined</Button>
      <Button {...args} variant="text">Text</Button>
      <Button {...args} variant="soft">Soft</Button>
    </div>
  ),
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

/**
 * 5-tier size scale (Category 1 — Action Controls).
 * `xs` and `xl` are EP additions beyond standard MUI sizes.
 */
export const Sizes: Story = {
  render: (args: ButtonProps) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
        <Button key={size} {...args} size={size}>{size}</Button>
      ))}
    </div>
  ),
};

// ─── Colors ───────────────────────────────────────────────────────────────────

/** Primary palette. All values come from `--ep-component-button-contained-*` tokens. */
export const Colors: Story = {
  render: (args: ButtonProps) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      {(['primary', 'secondary', 'error', 'warning', 'success', 'neutral'] as const).map(color => (
        <Button key={color} {...args} color={color}>{color}</Button>
      ))}
    </div>
  ),
};

// ─── Variant × Color matrix ───────────────────────────────────────────────────

/**
 * Full matrix: 4 variants × key colors.
 * Validates token coverage — every cell must resolve a CSS var with a real value.
 * Note: outlined/text/soft support fewer colors by token design (see button.json).
 */
export const VariantColorMatrix: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const variants = ['contained', 'outlined', 'text', 'soft'] as const;
    const colors = ['primary', 'secondary', 'error', 'warning', 'success', 'neutral'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', gap: 8, paddingLeft: 80 }}>
          {colors.map(c => (
            <span key={c} style={{ width: 90, fontSize: 11, color: '#888', textAlign: 'center' }}>{c}</span>
          ))}
        </div>
        {variants.map(variant => (
          <div key={variant} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ width: 80, fontSize: 12, color: '#555', flexShrink: 0 }}>{variant}</span>
            {colors.map(color => (
              <div key={color} style={{ width: 90, display: 'flex', justifyContent: 'center' }}>
                <Button variant={variant} color={color} size="sm">{color}</Button>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

// ─── States ───────────────────────────────────────────────────────────────────

/**
 * Disabled via native `disabled` attr — removed from tab order.
 * All four variants shown to confirm token-driven disabled styling.
 */
export const Disabled: Story = {
  render: (args: ButtonProps) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button {...args} variant="contained" disabled>Contained</Button>
      <Button {...args} variant="outlined"  disabled>Outlined</Button>
      <Button {...args} variant="text"      disabled>Text</Button>
      <Button {...args} variant="soft"      disabled>Soft</Button>
    </div>
  ),
};

/**
 * Loading state — spinner overlays the label, dimensions preserved.
 * Uses `aria-disabled="true"` + `aria-busy="true"` (NOT native disabled).
 * Button remains in tab order so keyboard users can perceive the loading state.
 */
export const Loading: Story = {
  render: (args: ButtonProps) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button {...args} variant="contained" loading>Save</Button>
      <Button {...args} variant="outlined"  loading>Save</Button>
      <Button {...args} variant="text"      loading>Save</Button>
      <Button {...args} variant="soft"      loading>Save</Button>
    </div>
  ),
};

/**
 * Loading across all sizes — spinner scales with button size token.
 */
export const LoadingSizes: Story = {
  render: (args: ButtonProps) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
        <Button key={size} {...args} size={size} loading>Saving</Button>
      ))}
    </div>
  ),
};

// ─── Slots ────────────────────────────────────────────────────────────────────

/**
 * `startSlot` and `endSlot` replace MUI's `startIcon`/`endIcon`.
 * Slots accept any ReactNode; wrapper handles inline-flex + spacing.
 */
export const WithSlots: Story = {
  render: (args: ButtonProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button {...args} startSlot={<Icon name="add" />}>Add item</Button>
        <Button {...args} variant="outlined" startSlot={<Icon name="download" />}>Export</Button>
        <Button {...args} variant="text" endSlot={<Icon name="chevron-right" />}>Continue</Button>
        <Button {...args} variant="soft" startSlot={<Icon name="add" />} endSlot={<Icon name="chevron-right" />}>
          New
        </Button>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
          <Button key={size} size={size} startSlot={<Icon name="add" size={size} />}>{size}</Button>
        ))}
      </div>
    </div>
  ),
};

// ─── Full Width ───────────────────────────────────────────────────────────────

export const FullWidth: Story = {
  parameters: { layout: 'padded' },
  render: (args: ButtonProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 400 }}>
      <Button {...args} fullWidth variant="contained">Contained full width</Button>
      <Button {...args} fullWidth variant="outlined">Outlined full width</Button>
      <Button {...args} fullWidth variant="text">Text full width</Button>
      <Button {...args} fullWidth variant="soft">Soft full width</Button>
    </div>
  ),
};

// ─── As Link ─────────────────────────────────────────────────────────────────

/**
 * When `href` is provided the button renders as `<a>`.
 * Keyboard and pointer interaction behave identically to a native button.
 */
export const AsLink: Story = {
  args: {
    href: '#anchor',
    children: 'Open link',
    startSlot: <Icon name="chevron-right" />,
  },
};

// ─── Token Audit ─────────────────────────────────────────────────────────────

/**
 * Every CSS custom property referenced by the Button component.
 * Open browser DevTools → Computed to verify every --ep-component-button-*
 * resolves to a real value (no empty string / undefined).
 *
 * Rule: Button must ONLY read from --ep-component-button-* namespace.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const vars = [
      '--ep-component-button-border-radius',
      '--ep-component-button-padding-xs-y', '--ep-component-button-padding-xs-x',
      '--ep-component-button-padding-sm-y', '--ep-component-button-padding-sm-x',
      '--ep-component-button-padding-md-y', '--ep-component-button-padding-md-x',
      '--ep-component-button-padding-lg-y', '--ep-component-button-padding-lg-x',
      '--ep-component-button-padding-xl-y', '--ep-component-button-padding-xl-x',
      '--ep-component-button-font-size-xs',
      '--ep-component-button-font-size-sm',
      '--ep-component-button-font-size-md',
      '--ep-component-button-font-size-lg',
      '--ep-component-button-font-size-xl',
      '--ep-component-button-contained-primary-background',
      '--ep-component-button-contained-primary-background-hover',
      '--ep-component-button-contained-primary-text',
      '--ep-component-button-disabled-background',
      '--ep-component-button-disabled-text',
      '--ep-component-button-focus-ring-color',
      '--ep-component-button-focus-ring-width',
      '--ep-component-button-focus-ring-offset',
    ];

    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ marginBottom: 16, color: '#666' }}>
          Open DevTools → Computed to verify these vars resolve. Blank = missing token.
        </p>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '4px 8px', background: '#f5f5f5' }}>CSS variable</th>
              <th style={{ textAlign: 'left', padding: '4px 8px', background: '#f5f5f5' }}>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {vars.map(v => (
              <tr key={v} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '4px 8px', color: '#333' }}>{v}</td>
                <td style={{ padding: '4px 8px' }}>
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
        <div style={{ marginTop: 24 }}>
          <Button>Live preview</Button>
        </div>
      </div>
    );
  },
};

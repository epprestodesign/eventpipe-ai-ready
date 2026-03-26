import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Icon, Button } from '@eventpipe/ui';
import type { AlertProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],

  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
      description: 'Drives icon and palette. Uses severity not color.',
      table: { defaultValue: { summary: 'info' } },
    },
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined', 'soft'],
      description: '`soft` is an EP addition. `standard` is the MUI default.',
      table: { defaultValue: { summary: 'standard' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Category 3 (Feedback + Navigation) — 5-tier sizing.',
      table: { defaultValue: { summary: 'md' } },
    },
    onClose: { action: 'closed' },
    children: { control: 'text' },
  },

  args: {
    severity: 'info',
    variant: 'standard',
    size: 'md',
    children: 'This is an alert message.',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default (Interactive) ────────────────────────────────────────────────────

/** Use the Controls panel to explore every prop combination. */
export const Default: Story = {};

// ─── Severities ───────────────────────────────────────────────────────────────

/**
 * All four severity states. Each drives a distinct palette and icon.
 * Token pattern: `--ep-component-alert-{severity}-standard-*`
 */
export const Severities: Story = {
  parameters: { layout: 'padded' },
  render: (args: AlertProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert {...args} severity="error">
        <strong>Error</strong> — Something went wrong. Please try again.
      </Alert>
      <Alert {...args} severity="warning">
        <strong>Warning</strong> — This action may have unintended consequences.
      </Alert>
      <Alert {...args} severity="info">
        <strong>Info</strong> — Your session will expire in 5 minutes.
      </Alert>
      <Alert {...args} severity="success">
        <strong>Success</strong> — Your changes have been saved.
      </Alert>
    </div>
  ),
};

// ─── Variants ─────────────────────────────────────────────────────────────────

/**
 * All four appearance variants using `info` severity.
 * `soft` is an EP addition: tinted background + colored border, low visual weight.
 */
export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: (args: AlertProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert {...args} variant="standard">standard — tinted background, no border</Alert>
      <Alert {...args} variant="filled">filled — solid background, white text</Alert>
      <Alert {...args} variant="outlined">outlined — transparent fill, colored border</Alert>
      <Alert {...args} variant="soft">soft — subtle tint + colored border (EP addition)</Alert>
    </div>
  ),
};

// ─── Severity × Variant Matrix ────────────────────────────────────────────────

/**
 * Full 4×4 matrix of severity × variant combinations.
 * Every cell must render a real color from a CSS custom property.
 * Blank or identical-looking cells indicate a missing or wrong token.
 */
export const SeverityVariantMatrix: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const severities = ['error', 'warning', 'info', 'success'] as const;
    const variants   = ['standard', 'filled', 'outlined', 'soft'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(4, 1fr)', gap: 8, marginBottom: 4 }}>
          <span />
          {variants.map(v => (
            <span key={v} style={{ fontSize: 11, color: '#888', textAlign: 'center' }}>{v}</span>
          ))}
        </div>
        {severities.map(severity => (
          <div
            key={severity}
            style={{ display: 'grid', gridTemplateColumns: '80px repeat(4, 1fr)', gap: 8, alignItems: 'center' }}
          >
            <span style={{ fontSize: 12, color: '#555' }}>{severity}</span>
            {variants.map(variant => (
              <Alert key={variant} severity={severity} variant={variant} size="sm">
                {severity}
              </Alert>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

/**
 * 5-tier size scale. All padding values come from
 * `--ep-component-alert-padding-{size}-{x|y}` tokens.
 */
export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: (args: AlertProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
        <Alert key={size} {...args} size={size}>
          <span style={{ fontFamily: 'monospace', fontSize: 11, marginRight: 8 }}>{size}</span>
          Alert content at {size} size — padding from token.
        </Alert>
      ))}
    </div>
  ),
};

// ─── Dismissible (onClose) ────────────────────────────────────────────────────

/**
 * Passing `onClose` renders the close button.
 * The button uses `aria-label="Close alert"` (on the button, not the icon).
 * The `<Icon name="close" />` inside is decorative — `aria-hidden="true"` automatic.
 */
export const Dismissible: Story = {
  parameters: { layout: 'padded' },
  render: (args: AlertProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {(['error', 'warning', 'info', 'success'] as const).map(severity => (
        <Alert
          key={severity}
          {...args}
          severity={severity}
          onClose={() => {}}
        >
          This alert can be dismissed. Severity: {severity}.
        </Alert>
      ))}
    </div>
  ),
};

// ─── Custom Action ────────────────────────────────────────────────────────────

/**
 * The `action` slot overrides `onClose`.
 * Use for inline CTAs: "Retry", "Undo", "View details".
 */
export const WithAction: Story = {
  parameters: { layout: 'padded' },
  render: (args: AlertProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert {...args} severity="error" action={
        <Button variant="outlined" size="xs" color="error">Retry</Button>
      }>
        Failed to save changes. The server returned an error.
      </Alert>
      <Alert {...args} severity="warning" action={
        <Button variant="text" size="xs" color="neutral">Dismiss</Button>
      }>
        Your subscription expires in 3 days.
      </Alert>
      <Alert {...args} severity="info" action={
        <Button variant="soft" size="xs" startSlot={<Icon name="arrow-forward" size="xs" />}>
          View details
        </Button>
      }>
        A new version is available.
      </Alert>
    </div>
  ),
};

// ─── Icon Override ────────────────────────────────────────────────────────────

/**
 * Three icon scenarios:
 * 1. Default — MUI maps severity to its built-in icon
 * 2. Custom — caller supplies `<Icon name="..." label="..." />` via `icon` prop
 * 3. Suppressed — `icon={false}` removes the icon slot entirely
 *
 * Rule: any icon passed via `icon` prop must use `<Icon />`, never a raw MUI icon.
 */
export const IconOverride: Story = {
  parameters: { layout: 'padded' },
  render: (args: AlertProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert {...args} severity="info">
        Default — MUI renders its built-in info icon (aria-managed by MUI).
      </Alert>
      <Alert {...args} severity="info" icon={<Icon name="settings" size="md" label="Configuration" />}>
        Custom icon via <code>icon</code> prop — uses Icon wrapper, label provided (semantic).
      </Alert>
      <Alert {...args} severity="warning" icon={false}>
        Icon suppressed via <code>icon={'{false}'}</code> — no icon slot rendered.
      </Alert>
    </div>
  ),
};

// ─── Composition: Title + Description ─────────────────────────────────────────

/**
 * Alert content is unstructured ReactNode — compose title + body with HTML.
 * No title prop exists; use a `<strong>` or `<div>` pattern.
 */
export const Composition: Story = {
  parameters: { layout: 'padded' },
  render: (args: AlertProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert {...args} severity="error">
        <strong style={{ display: 'block', marginBottom: 4 }}>Payment failed</strong>
        Your card was declined. Please update your payment method or contact support.
      </Alert>
      <Alert {...args} severity="warning" variant="soft">
        <strong style={{ display: 'block', marginBottom: 4 }}>Storage almost full</strong>
        You are using 90% of your 5 GB storage. Upgrade your plan to continue uploading.
      </Alert>
      <Alert {...args} severity="success" variant="filled">
        <strong style={{ display: 'block', marginBottom: 4 }}>Import complete</strong>
        1,204 records were imported successfully. 3 rows were skipped due to validation errors.
      </Alert>
    </div>
  ),
};

// ─── Accessibility ────────────────────────────────────────────────────────────

/**
 * Accessibility contract:
 * - `role="alert"` on root → screen reader announces content on mount
 * - Close button has `aria-label="Close alert"` (on the button, not the icon)
 * - Severity icon is aria-hidden (MUI-managed)
 * - Custom icons passed via `icon` prop should use `label` for semantic meaning
 */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>

      <section>
        <h3 style={{ margin: '0 0 8px', fontSize: 13 }}>role="alert" — announced on mount</h3>
        <p style={{ margin: '0 0 8px', fontSize: 12, color: '#666' }}>
          Screen readers announce this immediately when it appears in the DOM.
        </p>
        <Alert severity="error">
          You do not have permission to access this resource.
        </Alert>
        <code style={{ display: 'block', marginTop: 6, fontSize: 11, color: '#888' }}>
          {'<Alert severity="error">  →  role="alert" on root'}
        </code>
      </section>

      <section>
        <h3 style={{ margin: '0 0 8px', fontSize: 13 }}>Close button — aria-label on the button</h3>
        <p style={{ margin: '0 0 8px', fontSize: 12, color: '#666' }}>
          The <code>{'<Icon name="close" />'}</code> inside is decorative (aria-hidden).
          The interactive element carries the label.
        </p>
        <Alert severity="info" onClose={() => {}}>
          Dismiss this alert using the close button.
        </Alert>
        <code style={{ display: 'block', marginTop: 6, fontSize: 11, color: '#888' }}>
          {'<button aria-label="Close alert"><Icon name="close" /></button>'}
        </code>
      </section>

      <section>
        <h3 style={{ margin: '0 0 8px', fontSize: 13 }}>Custom icon — semantic label required</h3>
        <p style={{ margin: '0 0 8px', fontSize: 12, color: '#666' }}>
          When overriding the icon with a meaningful image, provide a <code>label</code>.
        </p>
        <Alert
          severity="info"
          icon={<Icon name="support-agent" size="md" label="Support" />}
        >
          Contact support for help with your account.
        </Alert>
        <code style={{ display: 'block', marginTop: 6, fontSize: 11, color: '#888' }}>
          {'<Icon name="support-agent" size="md" label="Support" />'}
        </code>
      </section>

    </div>
  ),
};

// ─── Token Audit ─────────────────────────────────────────────────────────────

/**
 * Every CSS custom property referenced by the Alert component.
 * Open DevTools → Computed to verify every --ep-component-alert-* resolves.
 *
 * Rule: Alert must ONLY read from --ep-component-alert-* namespace.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const structural = [
      '--ep-component-alert-border-radius',
      '--ep-component-alert-border-width',
      '--ep-component-alert-icon-gap',
      '--ep-component-alert-action-gap',
      '--ep-component-alert-padding-xs-y', '--ep-component-alert-padding-xs-x',
      '--ep-component-alert-padding-sm-y', '--ep-component-alert-padding-sm-x',
      '--ep-component-alert-padding-md-y', '--ep-component-alert-padding-md-x',
      '--ep-component-alert-padding-lg-y', '--ep-component-alert-padding-lg-x',
      '--ep-component-alert-padding-xl-y', '--ep-component-alert-padding-xl-x',
    ];

    const severities = ['error', 'warning', 'info', 'success'] as const;
    const properties = ['background', 'text', 'icon', 'border'] as const;
    const variants   = ['standard', 'soft'] as const; // spot-check 2 of 4

    return (
      <div style={{ fontFamily: 'monospace', fontSize: 11, display: 'flex', flexDirection: 'column', gap: 24 }}>

        <div>
          <p style={{ marginBottom: 8, color: '#666', fontSize: 12 }}>
            Open DevTools → Computed to verify vars resolve. Blank = missing token.
          </p>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr style={{ background: '#f5f5f5' }}>
                <th style={{ textAlign: 'left', padding: '4px 8px' }}>CSS variable</th>
                <th style={{ textAlign: 'left', padding: '4px 8px' }}>Swatch</th>
              </tr>
            </thead>
            <tbody>
              {structural.map(v => (
                <tr key={v} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '3px 8px', color: '#333' }}>{v}</td>
                  <td style={{ padding: '3px 8px' }}>
                    <span style={{
                      display: 'inline-block', width: 14, height: 14,
                      background: `var(${v})`, border: '1px solid #ccc', verticalAlign: 'middle',
                    }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <p style={{ marginBottom: 8, color: '#666', fontSize: 12 }}>Severity × variant spot-check (standard + soft):</p>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
              {severities.flatMap(severity =>
                variants.flatMap(variant =>
                  properties.map(prop => {
                    const varName = `--ep-component-alert-${severity}-${variant}-${prop}`;
                    return (
                      <tr key={varName} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '3px 8px', color: '#555' }}>{varName}</td>
                        <td style={{ padding: '3px 8px' }}>
                          <span style={{
                            display: 'inline-block', width: 14, height: 14,
                            background: `var(${varName})`, border: '1px solid #ccc', verticalAlign: 'middle',
                          }} />
                        </td>
                      </tr>
                    );
                  })
                )
              )}
            </tbody>
          </table>
        </div>

        <div>
          <p style={{ marginBottom: 8, color: '#666', fontSize: 12 }}>Live Alert (md/info/standard):</p>
          <Alert severity="info" onClose={() => {}}>
            Token audit reference render — all tokens active.
          </Alert>
        </div>
      </div>
    );
  },
};

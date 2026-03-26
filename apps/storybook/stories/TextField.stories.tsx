import type { Meta, StoryObj } from '@storybook/react';
import { TextField, Icon } from '@eventpipe/ui';
import type { TextFieldProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
      description: 'Visual style. `outlined` has a full border; `filled` has a bottom-only border.',
      table: { defaultValue: { summary: 'outlined' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Category 4 (Form Inputs) — 3-tier sizing.',
      table: { defaultValue: { summary: 'md' } },
    },
    error: {
      control: 'boolean',
      description: 'Colors border, label, and helper text in the error token.',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction. Applies disabled token set.',
    },
    loading: {
      control: 'boolean',
      description: 'Shows spinner in end position, sets readOnly.',
    },
    label: { control: 'text' },
    helperText: { control: 'text' },
    placeholder: { control: 'text' },
    fullWidth: { control: 'boolean' },
    required: { control: 'boolean' },
  },

  args: {
    variant: 'outlined',
    size: 'md',
    label: 'Label',
    helperText: '',
    placeholder: '',
    error: false,
    disabled: false,
    loading: false,
    fullWidth: false,
    required: false,
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default (Interactive) ────────────────────────────────────────────────────

/** Use the Controls panel to explore every prop combination. */
export const Default: Story = {};

// ─── Variants ─────────────────────────────────────────────────────────────────

/** `outlined` has a full border box; `filled` has a bottom-only indicator. */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <TextField variant="outlined" label="Outlined" helperText="Outlined variant" />
      <TextField variant="filled"   label="Filled"   helperText="Filled variant" />
    </div>
  ),
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

/** All three Category 4 sizes. Label translateY tokens ensure the floating label
 *  centers correctly at each size. */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 320 }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <TextField key={size} size={size} label={`Size: ${size}`} helperText={`padding-y token: ${size}`} />
      ))}
    </div>
  ),
};

// ─── States ───────────────────────────────────────────────────────────────────

/** All interactive states — default, hover (interactive), focused, error, disabled.
 *  Verify border color, label color, and helper text color against token values. */
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 320 }}>
      <TextField label="Default"  helperText="border.default token" />
      <TextField label="Error"    helperText="border.error token" error />
      <TextField label="Disabled" helperText="border.disabled token" disabled />
      <TextField label="Loading"  helperText="readOnly + spinner" loading />
    </div>
  ),
};

// ─── With Helper Text ─────────────────────────────────────────────────────────

/** Helper text appears below the field with its own color token per state. */
export const WithHelperText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 320 }}>
      <TextField label="Default"  helperText="This is helper text." />
      <TextField label="Error"    helperText="Something went wrong." error />
      <TextField label="Disabled" helperText="Field unavailable." disabled />
    </div>
  ),
};

// ─── Adornments ───────────────────────────────────────────────────────────────

/** Leading and trailing adornments using the Icon system. */
export const Adornments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 320 }}>
      <TextField
        label="Search"
        startAdornment={<Icon name="search" size="sm" />}
      />
      <TextField
        label="Username"
        startAdornment={<Icon name="person" size="sm" />}
        helperText="Enter your username."
      />
      <TextField
        label="Amount"
        endAdornment={<Icon name="calendar-month" size="sm" />}
      />
      <TextField
        label="Start + End"
        startAdornment={<Icon name="person" size="sm" />}
        endAdornment={<Icon name="close" size="sm" />}
      />
    </div>
  ),
};

// ─── Loading ──────────────────────────────────────────────────────────────────

/** Loading state replaces `endAdornment` with a CircularProgress spinner.
 *  Input is `readOnly` and `aria-busy="true"`. */
export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 320 }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <TextField
          key={size}
          size={size}
          label={`Loading (${size})`}
          loading
          defaultValue="Validating…"
        />
      ))}
    </div>
  ),
};

// ─── Filled Variant ───────────────────────────────────────────────────────────

/** Filled variant — full state matrix. */
export const FilledStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 320 }}>
      <TextField variant="filled" label="Default"  helperText="border.default token" />
      <TextField variant="filled" label="Error"    helperText="border.error token" error />
      <TextField variant="filled" label="Disabled" helperText="border.disabled token" disabled />
      <TextField variant="filled" label="Loading"  helperText="readOnly + spinner" loading />
    </div>
  ),
};

// ─── Full Width ───────────────────────────────────────────────────────────────

export const FullWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TextField label="Full width outlined" fullWidth />
      <TextField label="Full width filled" variant="filled" fullWidth />
    </div>
  ),
};

// ─── Accessibility ────────────────────────────────────────────────────────────

/**
 * Accessibility checklist:
 * - Label ↔ input association: `id` auto-generated via `useId()` if not provided.
 * - `aria-busy="true"` set on loading fields.
 * - Disabled fields use native `disabled` attribute (removed from tab order).
 * - Error state: `error` prop sets `aria-invalid` via MUI.
 * - Helper text: linked to input via `aria-describedby` (MUI handles this).
 * - Required fields: MUI renders `aria-required` when `required` is set.
 */
export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 360 }}>
      <TextField
        id="email-field"
        label="Email address"
        helperText="Required. We'll never share your email."
        required
        type="email"
      />
      <TextField
        id="error-field"
        label="Username"
        helperText="Username is already taken."
        error
        defaultValue="john.doe"
      />
      <TextField
        id="disabled-field"
        label="Account number"
        helperText="Contact support to update this field."
        disabled
        defaultValue="ACC-00421"
      />
    </div>
  ),
};

// ─── Token Audit ──────────────────────────────────────────────────────────────

/**
 * Compliance: every CSS property consumed by TextField must map 1-to-1
 * with a `--ep-component-text-field-*` variable. Inspect computed styles
 * and confirm none of the listed vars resolves to a fallback value.
 *
 * Approved deviation — focus indicator:
 *   TextField uses border color/width change (1px → 2px) as the focus indicator
 *   rather than the standard `focusRing` outline pattern. WCAG 2.1 AA is met
 *   via the non-color change (border width). See deviations register.
 */
export const TokenAudit: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <TextField label="Audit field" helperText="Inspect computed styles" />
      <details open style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <summary style={{ cursor: 'pointer', marginBottom: 8 }}>
          Expected --ep-component-text-field-* vars
        </summary>
        <pre style={{ margin: 0, lineHeight: 1.6 }}>{[
          '--ep-component-text-field-border-radius',
          '--ep-component-text-field-border-width',
          '--ep-component-text-field-border-width-focus',
          '--ep-component-text-field-border-default',
          '--ep-component-text-field-border-hover',
          '--ep-component-text-field-border-focus',
          '--ep-component-text-field-border-error',
          '--ep-component-text-field-border-disabled',
          '--ep-component-text-field-background-outlined',
          '--ep-component-text-field-background-filled',
          '--ep-component-text-field-background-disabled',
          '--ep-component-text-field-input-color',
          '--ep-component-text-field-input-color-disabled',
          '--ep-component-text-field-input-color-placeholder',
          '--ep-component-text-field-input-font-size-sm',
          '--ep-component-text-field-input-font-size-md',
          '--ep-component-text-field-input-font-size-lg',
          '--ep-component-text-field-label-color',
          '--ep-component-text-field-label-color-focus',
          '--ep-component-text-field-label-color-error',
          '--ep-component-text-field-label-color-disabled',
          '--ep-component-text-field-label-translate-x',
          '--ep-component-text-field-label-translate-y-sm',
          '--ep-component-text-field-label-translate-y-md',
          '--ep-component-text-field-label-translate-y-lg',
          '--ep-component-text-field-label-font-size-sm',
          '--ep-component-text-field-label-font-size-md',
          '--ep-component-text-field-label-font-size-lg',
          '--ep-component-text-field-helper-text-color',
          '--ep-component-text-field-helper-text-color-error',
          '--ep-component-text-field-helper-text-color-disabled',
          '--ep-component-text-field-helper-text-font-size',
          '--ep-component-text-field-padding-sm-y',
          '--ep-component-text-field-padding-sm-x',
          '--ep-component-text-field-padding-md-y',
          '--ep-component-text-field-padding-md-x',
          '--ep-component-text-field-padding-lg-y',
          '--ep-component-text-field-padding-lg-x',
        ].join('\n')}</pre>
      </details>
    </div>
  ),
};

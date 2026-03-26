import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Select, Icon, Stack, Typography } from '@eventpipe/ui';
import type { SelectProps, SelectOption } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Inputs/Select',
  component: Select,
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
      description: 'Shows spinner; prevents dropdown open. aria-busy on trigger.',
    },
    label:        { control: 'text' },
    helperText:   { control: 'text' },
    placeholder:  { control: 'text' },
    fullWidth:    { control: 'boolean' },
    required:     { control: 'boolean' },
    multiple:     { control: 'boolean' },
    displayEmpty: { control: 'boolean' },
    children:     { table: { disable: true } },
  },

  args: {
    variant: 'outlined',
    size: 'md',
    label: 'Label',
    error: false,
    disabled: false,
    loading: false,
    fullWidth: false,
    required: false,
    multiple: false,
    displayEmpty: false,
  },

  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ minWidth: 240 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Select>;

export default meta;
type Story = StoryObj<Meta<typeof Select>>;

// ─── Shared options ────────────────────────────────────────────────────────────

const OPTIONS = [
  { value: 'option-1', label: 'Option 1' },
  { value: 'option-2', label: 'Option 2' },
  { value: 'option-3', label: 'Option 3' },
  { value: 'option-4', label: 'Option 4 (disabled)', disabled: true },
];

const makeItems = () =>
  OPTIONS.map((o) => (
    <MenuItem key={o.value} value={o.value} disabled={o.disabled}>
      {o.label}
    </MenuItem>
  ));

// ─── Default (Interactive) ────────────────────────────────────────────────────

/** Use the Controls panel to explore every prop combination. */
export const Default: Story = {
  args: { label: 'Select an option' },
  render: (args: SelectProps) => <Select {...args}>{makeItems()}</Select>,
};

// ─── Variants ─────────────────────────────────────────────────────────────────

/** `outlined` has a full border box; `filled` has a bottom-only indicator. */
export const Variants: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ minWidth: 200 }}>
        <Select variant="outlined" label="Outlined" helperText="Outlined variant" fullWidth>
          {makeItems()}
        </Select>
      </div>
      <div style={{ minWidth: 200 }}>
        <Select variant="filled" label="Filled" helperText="Filled variant" fullWidth>
          {makeItems()}
        </Select>
      </div>
    </div>
  ),
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

/** All three Category 4 sizes. Label translateY tokens ensure correct centering. */
export const Sizes: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 320 }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Select key={size} size={size} label={`Size: ${size}`}>
          {makeItems()}
        </Select>
      ))}
    </div>
  ),
};

// ─── States ───────────────────────────────────────────────────────────────────

/** All interactive states — default, error, disabled, loading.
 *  Verify border color, label color, and helper text color against token values. */
export const States: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 320 }}>
      <Select label="Default"  helperText="border.default token">{makeItems()}</Select>
      <Select label="Error"    helperText="Something went wrong." error>{makeItems()}</Select>
      <Select label="Disabled" helperText="Field unavailable." disabled>{makeItems()}</Select>
      <Select label="Loading"  helperText="Fetching options…" loading>{makeItems()}</Select>
    </div>
  ),
};

// ─── Placeholder ──────────────────────────────────────────────────────────────

/** Placeholder shown when no value is selected.
 *  Implemented via `displayEmpty` + internal `renderValue` — no MUI workaround needed. */
export const Placeholder: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 320 }}>
      <Select label="Category" placeholder="Choose a category" displayEmpty>
        {makeItems()}
      </Select>
      <Select placeholder="No label, just placeholder" displayEmpty>
        {makeItems()}
      </Select>
    </div>
  ),
};

// ─── Multiple Selection ───────────────────────────────────────────────────────

/** Multiple selection. Selected items highlighted with `backgroundSelected` token. */
export const Multiple: Story = {
  args: {},
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Select label="Tags" multiple helperText="Select all that apply.">
        {OPTIONS.filter((o) => !o.disabled).map((o) => (
          <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  ),
};

// ─── Multiple with Checkboxes ─────────────────────────────────────────────────

/** Controlled multi-select with Checkbox + ListItemText inside MenuItem.
 *  Demonstrates that Select does not manage checkbox state — that is the caller's responsibility. */
export const MultipleWithCheckboxes: Story = {
  args: {},
  render: function MultipleCheckboxStory() {
    const [selected, setSelected] = React.useState<string[]>([]);

    return (
      <div style={{ maxWidth: 320 }}>
        <Select
          label="Assign roles"
          multiple
          value={selected}
          onChange={(e) => setSelected(e.target.value as string[])}
          renderValue={(val) => (val as string[]).join(', ') || 'None'}
          helperText={`${selected.length} selected`}
        >
          {OPTIONS.filter((o) => !o.disabled).map((o) => (
            <MenuItem key={o.value} value={o.value}>
              <Checkbox
                checked={selected.includes(o.value)}
                size="small"
                disableRipple
                sx={{ p: '2px', mr: 1 }}
              />
              <ListItemText primary={o.label} />
            </MenuItem>
          ))}
        </Select>
      </div>
    );
  },
};

// ─── Filled States ────────────────────────────────────────────────────────────

/** Filled variant — full state matrix. */
export const FilledStates: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 320 }}>
      <Select variant="filled" label="Default"  helperText="border.default token">{makeItems()}</Select>
      <Select variant="filled" label="Error"    helperText="border.error token" error>{makeItems()}</Select>
      <Select variant="filled" label="Disabled" helperText="border.disabled token" disabled>{makeItems()}</Select>
      <Select variant="filled" label="Loading"  helperText="Fetching options…" loading>{makeItems()}</Select>
    </div>
  ),
};

// ─── Full Width ───────────────────────────────────────────────────────────────

export const FullWidth: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Select label="Full width outlined" fullWidth>{makeItems()}</Select>
      <Select label="Full width filled" variant="filled" fullWidth>{makeItems()}</Select>
    </div>
  ),
};

// ─── Accessibility ────────────────────────────────────────────────────────────

/**
 * Accessibility checklist:
 * - Label ↔ trigger: `labelId` on InputLabel, `labelId` prop on MuiSelect — linked via id.
 * - `id` auto-generated via `useId()` if not provided.
 * - Error state: `error` on FormControl propagates `aria-invalid` to trigger.
 * - Required: `required` on FormControl sets `aria-required` on trigger.
 * - Helper text: linked via `aria-describedby="${id}-helper"`.
 * - Loading: `aria-busy="true"` on trigger; dropdown `open` forced to false.
 * - Disabled: native disabled — removed from tab order.
 * - Dropdown: `role="listbox"` (MUI); options have `role="option"`.
 * - Disabled option: `aria-disabled="true"` (MUI MenuItem).
 */
export const Accessibility: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 360 }}>
      <Select
        id="role-field"
        label="User role"
        helperText="Required. Determines access level."
        required
      >
        <MenuItem value="admin">Administrator</MenuItem>
        <MenuItem value="editor">Editor</MenuItem>
        <MenuItem value="viewer">Viewer</MenuItem>
      </Select>
      <Select
        id="error-field"
        label="Department"
        helperText="Please select a valid department."
        error
        defaultValue=""
      >
        <MenuItem value="eng">Engineering</MenuItem>
        <MenuItem value="design">Design</MenuItem>
      </Select>
      <Select
        id="disabled-field"
        label="Region"
        helperText="Contact admin to change region."
        disabled
        defaultValue="us-east"
      >
        <MenuItem value="us-east">US East</MenuItem>
        <MenuItem value="us-west">US West</MenuItem>
      </Select>
    </div>
  ),
};

// ─── With Options (data-driven) ──────────────────────────────────────────────

interface EventType {
  id: string;
  name: string;
  category: string;
  active: boolean;
}

const EVENT_TYPES: EventType[] = [
  { id: 'conf', name: 'Conference', category: 'Multi-day', active: true },
  { id: 'workshop', name: 'Workshop', category: 'Single-day', active: true },
  { id: 'webinar', name: 'Webinar', category: 'Virtual', active: true },
  { id: 'tradeshow', name: 'Trade Show', category: 'Multi-day', active: true },
  { id: 'meetup', name: 'Meetup', category: 'Single-day', active: false },
];

/** Declarative options prop with custom getter functions — no MenuItem children needed. */
export const WithOptions: Story = {
  args: {},
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Select
        label="Event type"
        helperText="Uses options prop with getOptionLabel/getOptionValue/getOptionDisabled"
        options={EVENT_TYPES}
        getOptionLabel={(item) => (item as EventType).name}
        getOptionValue={(item) => (item as EventType).id}
        getOptionDisabled={(item) => !(item as EventType).active}
        placeholder="Select event type"
      />
    </div>
  ),
};

/** Custom option rendering with Stack + Icon inside each MenuItem. */
export const WithRenderOption: Story = {
  args: {},
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <Select
        label="Event type"
        helperText="Custom renderOption with Icon + category badge"
        options={EVENT_TYPES}
        getOptionLabel={(item) => (item as EventType).name}
        getOptionValue={(item) => (item as EventType).id}
        getOptionDisabled={(item) => !(item as EventType).active}
        renderOption={(option: SelectOption) => {
          const event = option.data as EventType;
          return (
            <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ width: '100%' }}>
                <Icon name="calendar" size="sm" />
                <Typography variant="body2">{option.label}</Typography>
                <Typography variant="caption" color="secondary" sx={{ marginLeft: 'auto !important' }}>
                  {event.category}
                </Typography>
              </Stack>
            </MenuItem>
          );
        }}
        placeholder="Choose an event type"
      />
    </div>
  ),
};

// ─── Token Audit ──────────────────────────────────────────────────────────────

/**
 * Compliance: every CSS property consumed by Select must map 1-to-1
 * with a `--ep-component-select-*` variable. Inspect computed styles
 * and confirm none of the listed vars resolves to a fallback value.
 *
 * Approved deviation — focus indicator:
 *   Uses border color/width change (1px → 2px) not `focusRing` outline.
 *   WCAG 2.1 AA met via non-color change. See deviations register.
 *
 * Note — menu portal theming:
 *   Menu dropdown renders in a MUI Portal (document.body). CSS custom
 *   properties resolve from :root and are available globally. Dark mode
 *   requires `.dark` class on <html> or <body> to reach portal elements.
 */
export const TokenAudit: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Select label="Audit field" helperText="Inspect computed styles">
        {makeItems()}
      </Select>
      <details open style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <summary style={{ cursor: 'pointer', marginBottom: 8 }}>
          Expected --ep-component-select-* vars (60 total)
        </summary>
        <pre style={{ margin: 0, lineHeight: 1.6 }}>{[
          '── Trigger ──────────────────────────────────────────',
          '--ep-component-select-border-radius',
          '--ep-component-select-border-width / border-width-focus',
          '--ep-component-select-border-default / hover / focus / error / disabled',
          '--ep-component-select-background-outlined / filled / disabled',
          '--ep-component-select-input-color / color-disabled / color-placeholder',
          '--ep-component-select-input-font-size-{sm|md|lg}',
          '--ep-component-select-label-color / color-focus / color-error / color-disabled',
          '--ep-component-select-label-translate-x / translate-y-{sm|md|lg}',
          '--ep-component-select-label-font-size-{sm|md|lg}',
          '--ep-component-select-helper-text-color / color-error / color-disabled / font-size',
          '--ep-component-select-padding-{sm|md|lg}-y / -x',
          '--ep-component-select-icon-color / color-disabled',
          '',
          '── Menu (portal — resolves from :root) ───────────────',
          '--ep-component-select-menu-background',
          '--ep-component-select-menu-border-radius',
          '--ep-component-select-menu-item-color / color-selected / color-disabled',
          '--ep-component-select-menu-item-background / -hover / -selected / -selected-hover / -disabled',
          '--ep-component-select-menu-item-font-size-{sm|md|lg}',
          '--ep-component-select-menu-item-padding-{sm|md|lg}-y / -x',
        ].join('\n')}</pre>
      </details>
    </div>
  ),
};

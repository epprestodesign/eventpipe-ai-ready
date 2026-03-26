import type { Meta, StoryObj } from '@storybook/react';
import SettingsPage from './SettingsPage';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Product/Screens/Settings',
  component: SettingsPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Event creation wizard composing Stepper, TextField, Select, Autocomplete, ' +
          'Checkbox, Switch, RadioGroup, DatePicker, TransferList, Popover, Dialog, ' +
          'LinearProgress, Chip, List, Divider, Alert, and Breadcrumbs. Exercises ' +
          'multi-step form flow, inline validation, staff assignment via TransferList, ' +
          'review summary, and unsaved-changes confirmation.',
      },
    },
  },

  argTypes: {
    pageState: {
      control: 'select',
      options: ['default', 'loading', 'empty', 'error'],
      description:
        'Controls the page-level state. "loading" shows Skeleton placeholders in the step ' +
        'content area, "error" shows validation errors on step 1 fields.',
      table: { defaultValue: { summary: 'default' } },
    },
  },

  args: {
    pageState: 'default',
  },
} satisfies Meta<typeof SettingsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default state — step 1 of the event creation wizard with empty form. */
export const Default: Story = {};

/** Loading state — Skeleton placeholders replace step content. */
export const Loading: Story = {
  args: { pageState: 'loading' },
};

/** Empty state — form with default/blank values (same as default for this screen). */
export const Empty: Story = {
  args: { pageState: 'empty' },
};

/** Error state — validation errors displayed on required fields. */
export const Error: Story = {
  args: { pageState: 'error' },
};

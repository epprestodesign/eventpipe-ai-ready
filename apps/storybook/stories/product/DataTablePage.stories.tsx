import type { Meta, StoryObj } from '@storybook/react';
import DataTablePage from './DataTablePage';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Product/Screens/Data Table',
  component: DataTablePage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Attendee management screen composing DataGrid, TextField, Select, DatePicker, ' +
          'Switch, Chip, Avatar, Drawer, Dialog, Checkbox, Divider, Alert, Breadcrumbs, ' +
          'and Pagination. Exercises filtering, row selection, bulk actions, inline editing ' +
          'via Drawer, and delete confirmation via Dialog.',
      },
    },
  },

  argTypes: {
    pageState: {
      control: 'select',
      options: ['default', 'loading', 'empty', 'error'],
      description:
        'Controls the page-level state. "loading" shows DataGrid skeleton rows, ' +
        '"empty" shows the empty message, "error" shows an error Alert and hides the grid.',
      table: { defaultValue: { summary: 'default' } },
    },
  },

  args: {
    pageState: 'default',
  },
} satisfies Meta<typeof DataTablePage>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default state with filterable, selectable attendee DataGrid and toolbar. */
export const Default: Story = {};

/** Loading state — DataGrid renders skeleton rows while data loads. */
export const Loading: Story = {
  args: { pageState: 'loading' },
};

/** Empty state — DataGrid displays emptyMessage with add-attendee CTA. */
export const Empty: Story = {
  args: { pageState: 'empty' },
};

/** Error state — Alert banner replaces grid content with retry action. */
export const Error: Story = {
  args: { pageState: 'error' },
};

import type { Meta, StoryObj } from '@storybook/react';
import DashboardPage from './DashboardPage';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Product/Screens/Dashboard',
  component: DashboardPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full dashboard screen composing Card, DataGrid, Tabs, LinearProgress, Badge, ' +
          'Chip, List, Skeleton, Alert, Breadcrumbs, DatePicker, Tooltip, Link, Pagination, ' +
          'and Icon. Exercises KPI cards, chart placeholder with tab switching, activity feed, ' +
          'and a sortable paginated event table with row actions.',
      },
    },
  },

  argTypes: {
    pageState: {
      control: 'select',
      options: ['default', 'loading', 'empty', 'error'],
      description:
        'Controls the page-level state. "loading" shows skeleton placeholders, ' +
        '"empty" shows empty-state CTAs, "error" shows an error Alert.',
      table: { defaultValue: { summary: 'default' } },
    },
  },

  args: {
    pageState: 'default',
  },
} satisfies Meta<typeof DashboardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default state with KPI cards, chart tabs, activity feed, and event DataGrid. */
export const Default: Story = {};

/** Loading state — all data regions render Skeleton placeholders. */
export const Loading: Story = {
  args: { pageState: 'loading' },
};

/** Empty state — DataGrid shows emptyMessage, activity feed shows CTA. */
export const Empty: Story = {
  args: { pageState: 'empty' },
};

/** Error state — Alert banner with retry action displayed above content. */
export const Error: Story = {
  args: { pageState: 'error' },
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Divider, Typography } from '@eventpipe/ui';
import type { StackProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Flexbox layout component for vertical or horizontal arrangement. Pure layout — no tokens. Spacing uses an 8px base multiplier. Wraps MUI Stack as the EP design-system boundary.',
      },
    },
  },

  argTypes: {
    direction: {
      control: 'select',
      options: ['column', 'column-reverse', 'row', 'row-reverse'],
      description: 'Flex direction.',
      table: { defaultValue: { summary: 'column' } },
    },
    spacing: {
      control: 'select',
      options: [0, 0.5, 1, 1.5, 2, 3, 4, 6, 8],
      description: 'Spacing between children. Multiplied by 8px base.',
      table: { defaultValue: { summary: '0' } },
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
  },

  args: {
    direction: 'column',
    spacing: 2,
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const Item = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '8px 16px', backgroundColor: 'var(--ep-semantic-color-neutral-light, #f0f0f0)', borderRadius: 4 }}>
    <Typography variant="body2">{children}</Typography>
  </div>
);

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Vertical column layout with spacing between items. */
export const Vertical: Story = {
  render: () => (
    <Stack direction="column" spacing={2}>
      <Item>Registration</Item>
      <Item>Check-in</Item>
      <Item>Session Tracking</Item>
    </Stack>
  ),
};

/** Horizontal row layout with spacing between items. */
export const Horizontal: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Item>Dashboard</Item>
      <Item>Analytics</Item>
      <Item>Reports</Item>
    </Stack>
  ),
};

/** Stack with a Divider inserted between each child. */
export const WithDivider: Story = {
  render: () => (
    <Stack direction="column" spacing={1} divider={<Divider />}>
      <Typography>Keynote: Future of Hybrid Events</Typography>
      <Typography>Panel: Attendee Engagement Strategies</Typography>
      <Typography>Workshop: Data-Driven Event Planning</Typography>
    </Stack>
  ),
};

/** Demonstrates justifyContent and alignItems combinations. */
export const AlignmentShowcase: Story = {
  render: () => (
    <Stack spacing={3}>
      {(['flex-start', 'center', 'flex-end', 'space-between'] as const).map((jc) => (
        <div key={jc}>
          <Typography variant="caption" color="secondary" gutterBottom>
            justifyContent: {jc}
          </Typography>
          <Stack
            direction="row"
            justifyContent={jc}
            alignItems="center"
            spacing={1}
            sx={{ border: '1px dashed #ccc', padding: 1, minHeight: 48 }}
          >
            <Item>A</Item>
            <Item>B</Item>
            <Item>C</Item>
          </Stack>
        </div>
      ))}
    </Stack>
  ),
};

/** Nested Stacks — an outer vertical Stack containing horizontal inner Stacks. */
export const Nested: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6">Event Schedule</Typography>
      <Stack direction="row" spacing={2}>
        <Item>9:00 AM</Item>
        <Item>Opening Remarks</Item>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Item>10:00 AM</Item>
        <Item>Breakout Sessions</Item>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Item>12:00 PM</Item>
        <Item>Networking Lunch</Item>
      </Stack>
    </Stack>
  ),
};

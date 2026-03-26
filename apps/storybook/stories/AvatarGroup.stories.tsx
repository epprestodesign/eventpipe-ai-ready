import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup, Avatar, Typography, Stack } from '@eventpipe/ui';
import type { AvatarGroupProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Displays a collection of avatars with overlap and an optional "+N" overflow indicator. Forces size and variant on all child avatars. Renders with role="group" and accepts an aria-label for accessibility.',
      },
    },
  },

  argTypes: {
    max: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Maximum avatars to display before showing overflow.',
      table: { defaultValue: { summary: '5' } },
    },
    total: {
      control: { type: 'number', min: 0 },
      description: 'Override total count for surplus calculation.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size forced on all child avatars.',
      table: { defaultValue: { summary: 'md' } },
    },
    spacing: {
      control: 'radio',
      options: ['medium', 'small'],
      description: 'Overlap spacing between avatars.',
      table: { defaultValue: { summary: 'medium' } },
    },
    variant: {
      control: 'radio',
      options: ['circular', 'rounded', 'square'],
      description: 'Shape forced on all child avatars.',
      table: { defaultValue: { summary: 'circular' } },
    },
  },

  args: {
    max: 5,
    size: 'md',
    spacing: 'medium',
    variant: 'circular',
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Five attendee avatars — no overflow. */
export const Default: Story = {
  render: () => (
    <AvatarGroup aria-label="Event organizers">
      <Avatar>JD</Avatar>
      <Avatar>KM</Avatar>
      <Avatar>SL</Avatar>
      <Avatar>AP</Avatar>
      <Avatar>RH</Avatar>
    </AvatarGroup>
  ),
};

/** Eight avatars with max=4 — shows "+5" overflow indicator. */
export const Overflow: Story = {
  render: () => (
    <AvatarGroup max={4} aria-label="Registered attendees">
      <Avatar>JD</Avatar>
      <Avatar>KM</Avatar>
      <Avatar>SL</Avatar>
      <Avatar>AP</Avatar>
      <Avatar>RH</Avatar>
      <Avatar>BT</Avatar>
      <Avatar>NW</Avatar>
      <Avatar>CF</Avatar>
    </AvatarGroup>
  ),
};

/** Three visible avatars but total=47 — shows "+44" surplus. Useful for server-side pagination. */
export const WithTotal: Story = {
  render: () => (
    <Stack spacing={1} alignItems="center">
      <AvatarGroup max={4} total={47} aria-label="Conference attendees">
        <Avatar>JD</Avatar>
        <Avatar>KM</Avatar>
        <Avatar>SL</Avatar>
      </AvatarGroup>
      <Typography variant="caption" color="secondary">
        total=47, 3 children, max=4 — surplus shows +44
      </Typography>
    </Stack>
  ),
};

/** All five sizes side by side. */
export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} alignItems="flex-start">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Typography variant="caption" color="secondary" sx={{ minWidth: 24 }}>
            {s}
          </Typography>
          <AvatarGroup size={s} aria-label={`Group size ${s}`}>
            <Avatar>JD</Avatar>
            <Avatar>KM</Avatar>
            <Avatar>SL</Avatar>
          </AvatarGroup>
        </div>
      ))}
    </Stack>
  ),
};

/** Medium (default) vs small overlap spacing. Small has tighter overlap (-12px vs -8px). */
export const SpacingVariants: Story = {
  render: () => (
    <Stack spacing={3} alignItems="flex-start">
      {(['medium', 'small'] as const).map((sp) => (
        <div key={sp} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Typography variant="caption" color="secondary" sx={{ minWidth: 60 }}>
            {sp}
          </Typography>
          <AvatarGroup spacing={sp} size="lg" aria-label={`Spacing ${sp}`}>
            <Avatar>JD</Avatar>
            <Avatar>KM</Avatar>
            <Avatar>SL</Avatar>
            <Avatar>AP</Avatar>
          </AvatarGroup>
        </div>
      ))}
    </Stack>
  ),
};

/** Rounded variant — all avatars use rounded corners instead of circular. */
export const Rounded: Story = {
  render: () => (
    <AvatarGroup variant="rounded" size="lg" aria-label="Team members">
      <Avatar>JD</Avatar>
      <Avatar>KM</Avatar>
      <Avatar>SL</Avatar>
      <Avatar>AP</Avatar>
      <Avatar>RH</Avatar>
    </AvatarGroup>
  ),
};

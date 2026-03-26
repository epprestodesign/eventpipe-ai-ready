import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@eventpipe/ui';
import type { BoxProps } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Layout/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Generic container component. Thin wrapper around MUI Box — no tokens, no interactive states. Provides the design-system boundary and the `sx` escape hatch for one-off styling.',
      },
    },
  },

  argTypes: {
    component: {
      control: 'text',
      description: 'The rendered HTML element.',
      table: { defaultValue: { summary: 'div' } },
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Simple container wrapping content. */
export const Default: Story = {
  render: () => (
    <Box>
      <Typography>
        EventPipe helps teams plan, promote, and execute events of any scale.
      </Typography>
    </Box>
  ),
};

/** Renders as a semantic &lt;section&gt; element. Inspect the DOM to verify. */
export const AsSection: Story = {
  render: () => (
    <Box component="section" aria-label="Event details">
      <Typography variant="h5" gutterBottom>
        Venue Information
      </Typography>
      <Typography color="secondary">
        Convention Center, Hall B — Capacity: 500 attendees
      </Typography>
    </Box>
  ),
};

/** Demonstrates the sx escape hatch using token CSS custom properties. */
export const WithSxStyling: Story = {
  render: () => (
    <Box
      sx={{
        padding: 3,
        borderRadius: 2,
        backgroundColor: 'var(--ep-semantic-color-neutral-light, #f5f5f5)',
        border: '1px solid var(--ep-semantic-color-border-default, #e0e0e0)',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Registration Summary
      </Typography>
      <Typography variant="body2" color="secondary">
        247 attendees registered across 12 ticket types. Use the sx prop for one-off
        layout overrides while still consuming design-system token variables.
      </Typography>
    </Box>
  ),
};

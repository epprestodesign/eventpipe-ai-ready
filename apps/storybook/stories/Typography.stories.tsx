import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Stack } from '@eventpipe/ui';
import type { TypographyProps, TypographyVariant } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Renders text with design-system typography tokens. Maps each variant to a semantic HTML element by default (e.g. h1 renders <h1>). The `component` prop overrides the element without losing styles.',
      },
    },
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['display', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline'],
      description: 'Typography preset controlling font-size, weight, and line-height.',
      table: { defaultValue: { summary: 'body1' } },
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary', 'disabled'],
      description: 'Text color mapped to semantic text tokens.',
      table: { defaultValue: { summary: 'primary' } },
    },
    align: {
      control: 'select',
      options: ['inherit', 'left', 'center', 'right', 'justify'],
      table: { defaultValue: { summary: 'inherit' } },
    },
    noWrap: {
      control: 'boolean',
      description: 'Truncate text with ellipsis on overflow.',
      table: { defaultValue: { summary: 'false' } },
    },
    gutterBottom: {
      control: 'boolean',
      description: 'Adds bottom margin (0.35em).',
      table: { defaultValue: { summary: 'false' } },
    },
    component: {
      control: 'text',
      description: 'Override the rendered HTML element.',
    },
  },

  args: {
    variant: 'body1',
    color: 'primary',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default body1 variant. Use Controls to explore. */
export const Default: Story = {
  args: {
    children: 'Welcome to EventPipe — the event management platform built for modern teams.',
  },
};

/** All 13 typography variants labeled and stacked. */
export const AllVariants: Story = {
  render: () => {
    const variants: TypographyVariant[] = [
      'display', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline',
    ];
    return (
      <Stack spacing={2}>
        {variants.map((v) => (
          <div key={v} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <Typography variant="caption" color="secondary" sx={{ minWidth: 80 }}>
              {v}
            </Typography>
            <Typography variant={v}>
              Event Registration Dashboard
            </Typography>
          </div>
        ))}
      </Stack>
    );
  },
};

/** Primary, secondary, and disabled text colors. */
export const Colors: Story = {
  render: () => (
    <Stack spacing={1}>
      <Typography color="primary">Primary — main content text for event details</Typography>
      <Typography color="secondary">Secondary — supplemental information like venue capacity</Typography>
      <Typography color="disabled">Disabled — inactive registration period</Typography>
    </Stack>
  ),
};

/** Long text truncated with ellipsis inside a constrained container. */
export const NoWrap: Story = {
  render: () => (
    <div style={{ maxWidth: 300, border: '1px dashed #ccc', padding: 8 }}>
      <Typography noWrap>
        Annual EventPipe Conference 2026 — Featuring keynote speakers from across the industry with panel discussions on hybrid event technology, attendee engagement, and data-driven planning.
      </Typography>
    </div>
  ),
};

/** Paragraph spacing with gutterBottom. */
export const GutterBottom: Story = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <Typography variant="h4" gutterBottom>
        Event Overview
      </Typography>
      <Typography gutterBottom>
        Join us for the annual EventPipe Summit, bringing together event professionals
        from around the world to share best practices and emerging trends.
      </Typography>
      <Typography gutterBottom>
        Sessions cover registration workflows, attendee engagement, analytics dashboards,
        and hybrid event technology.
      </Typography>
      <Typography color="secondary">
        Early bird registration closes March 31, 2026.
      </Typography>
    </div>
  ),
};

/** h1 variant rendered as a paragraph element — semantic override via component prop. */
export const PolymorphicElement: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="caption" color="secondary">
        The text below uses variant="h1" but renders as a &lt;p&gt; element.
        Inspect the DOM to verify.
      </Typography>
      <Typography variant="h1" component="p">
        This looks like an h1 but is a paragraph
      </Typography>
    </Stack>
  ),
};

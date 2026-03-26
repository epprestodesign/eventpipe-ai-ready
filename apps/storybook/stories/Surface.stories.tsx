import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Surface } from '@eventpipe/ui';
import type { SurfaceProps, SurfaceVariant, SurfaceBorder } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Surfaces/Surface',
  component: Surface,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['plain', 'raised', 'overlay', 'panel', 'modal'] satisfies SurfaceVariant[],
      description: 'Visual depth level.',
      table: { defaultValue: { summary: 'plain' } },
    },
    border: {
      control: 'select',
      options: ['none', 'default', 'strong'] satisfies SurfaceBorder[],
      description: 'Border style.',
      table: { defaultValue: { summary: 'none' } },
    },
    radius: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'pill'],
      description: 'Override border-radius.',
    },
    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg'],
      description: 'Padding inside the surface.',
      table: { defaultValue: { summary: 'none' } },
    },
    component: {
      control: 'select',
      options: ['div', 'section', 'aside', 'article', 'main'],
      description: 'Override the rendered HTML element.',
      table: { defaultValue: { summary: 'div' } },
    },
  },

  args: {
    variant: 'plain',
    border: 'none',
    padding: 'md',
  },
} satisfies Meta<typeof Surface>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Use Controls to explore variant, border, radius, and padding props. */
export const Default: Story = {
  render: (args: SurfaceProps) => (
    <Surface {...args} sx={{ maxWidth: 400 }}>
      <Typography variant="body2">
        A semantic surface container for visual depth and layering.
      </Typography>
    </Surface>
  ),
};

/** All five variant levels side-by-side. */
export const Variants: Story = {
  render: () => {
    const variants: SurfaceVariant[] = ['plain', 'raised', 'overlay', 'panel', 'modal'];
    return (
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        {variants.map((v) => (
          <Surface key={v} variant={v} padding="md" sx={{ width: 180 }}>
            <Typography variant="subtitle2" sx={{ textTransform: 'capitalize' }}>
              {v}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              variant="{v}"
            </Typography>
          </Surface>
        ))}
      </Box>
    );
  },
};

/** Border options on a plain surface. */
export const WithBorder: Story = {
  render: () => {
    const borders: SurfaceBorder[] = ['none', 'default', 'strong'];
    return (
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        {borders.map((b) => (
          <Surface key={b} variant="plain" border={b} padding="md" sx={{ width: 200 }}>
            <Typography variant="subtitle2">border="{b}"</Typography>
          </Surface>
        ))}
      </Box>
    );
  },
};

/** Surfaces with rich content to demonstrate real-world usage. */
export const WithContent: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 500 }}>
      <Surface variant="raised" border="default" padding="lg">
        <Typography variant="h6" sx={{ mb: 1 }}>Settings</Typography>
        <Typography variant="body2" color="text.secondary">
          Configure your event preferences and notification settings.
        </Typography>
      </Surface>
      <Surface variant="overlay" padding="md" component="aside">
        <Typography variant="subtitle2" sx={{ mb: 0.5 }}>Quick Tip</Typography>
        <Typography variant="body2" color="text.secondary">
          You can use the component prop to render as section, aside, article, or main.
        </Typography>
      </Surface>
    </Box>
  ),
};

/** Token audit — verifies each variant references the correct CSS custom properties. */
export const TokenAudit: Story = {
  render: () => {
    const tokenMap = [
      {
        variant: 'plain' as const,
        bg: '--ep-semantic-color-background-paper',
        shadow: 'none',
        radius: '--ep-semantic-radius-md',
      },
      {
        variant: 'raised' as const,
        bg: '--ep-semantic-color-background-paper',
        shadow: '--ep-semantic-elevation-raised',
        radius: '--ep-semantic-radius-lg',
      },
      {
        variant: 'overlay' as const,
        bg: '--ep-semantic-color-surface-overlay',
        shadow: '--ep-semantic-elevation-overlay',
        radius: '--ep-semantic-radius-lg',
      },
      {
        variant: 'panel' as const,
        bg: '--ep-semantic-color-surface-overlay',
        shadow: '--ep-semantic-elevation-panel',
        radius: '--ep-semantic-radius-xl',
      },
      {
        variant: 'modal' as const,
        bg: '--ep-semantic-color-surface-overlay',
        shadow: '--ep-semantic-elevation-modal',
        radius: '--ep-semantic-radius-xl',
      },
    ];
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {tokenMap.map(({ variant, bg, shadow, radius }) => (
          <Surface key={variant} variant={variant} padding="sm" border="default">
            <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', mb: 0.5 }}>
              {variant}
            </Typography>
            <Typography variant="caption" component="div" sx={{ fontFamily: 'monospace' }}>
              bg: {bg}
            </Typography>
            <Typography variant="caption" component="div" sx={{ fontFamily: 'monospace' }}>
              shadow: {shadow}
            </Typography>
            <Typography variant="caption" component="div" sx={{ fontFamily: 'monospace' }}>
              radius: {radius}
            </Typography>
          </Surface>
        ))}
      </Box>
    );
  },
};

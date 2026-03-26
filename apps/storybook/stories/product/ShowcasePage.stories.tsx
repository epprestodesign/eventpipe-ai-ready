import type { Meta, StoryObj } from '@storybook/react';
import ShowcasePage from './ShowcasePage';

const meta = {
  title: 'Product/Showcase',
  component: ShowcasePage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Full product showcase demonstrating the complete EventPipe design system in a realistic SaaS context. Covers all 50 shipped components across 7 thematic sections.',
      },
    },
  },
  argTypes: {
    pageState: {
      control: 'select',
      options: ['default', 'loading', 'empty', 'error'],
      description: 'Controls the page state for all sections simultaneously',
    },
  },
} satisfies Meta<typeof ShowcasePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { pageState: 'default' } };
export const Loading: Story = { args: { pageState: 'loading' } };
export const Empty: Story = { args: { pageState: 'empty' } };
export const Error: Story = { args: { pageState: 'error' } };

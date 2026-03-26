import type { StorybookConfig } from '@storybook/react-vite';
import type { InlineConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(ts|tsx)',
  ],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  typescript: {
    check: false,
  },

  // GitHub Pages serves this site under /eventpipe-ai-ready/.
  // Without an explicit base, Vite emits asset paths as absolute (e.g. /assets/preview-*.js)
  // which resolve to the domain root — breaking all dynamically imported chunks.
  viteFinal: (config: InlineConfig) => {
    config.base = '/eventpipe-ai-ready/';
    return config;
  },
};

export default config;

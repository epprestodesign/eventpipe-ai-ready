import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@eventpipe/tokens/css';

/**
 * EventPipe Design System — Storybook Preview
 *
 * Token CSS is imported globally here. All components consume CSS custom
 * properties from --ep-component-* only; no token values are hardcoded.
 *
 * Dark mode: apply class="dark" to the storybook-root element or toggle
 * via the Backgrounds addon. Token overrides live in tokens.css.
 */

// ─── MUI theme ───────────────────────────────────────────────────────────────
// Default MUI theme: no customisation needed since all visual values come from
// CSS custom properties (--ep-*). ThemeProvider is required for:
//   1. CssBaseline (box-sizing reset, body margin reset, font smoothing)
//   2. Correct context for Portal components (Dialog, Drawer, Popover, Tooltip, Menu)
//   3. MUI's internal theme.spacing() / theme.palette calls during rendering
const muiTheme = createTheme();

// ─── Global decorators ───────────────────────────────────────────────────────

/**
 * MUI baseline decorator.
 *
 * Wraps every story with ThemeProvider + CssBaseline so:
 *   • box-sizing, body margin, and font-smoothing are reset consistently
 *   • Portal-based components have the expected MUI context
 */
const withMuiTheme: Decorator = (Story) => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

/**
 * Font-ready decorator.
 *
 * Problem: Inter is loaded from Google Fonts with font-display:swap. On first
 * paint, browsers render with the system font fallback. When Inter arrives,
 * text reflows — MUI Tabs measures indicator position via getBoundingClientRect
 * on mount, so the indicator is positioned against system-font metrics. MUI's
 * ResizeObserver only re-fires when the *container* width changes; on fixed-
 * width or narrow Tabs the indicator stays misaligned until something triggers
 * a reflow, producing the visible "snap" or off-position indicator on first load.
 *
 * Fix: after document.fonts.ready resolves, dispatch a synthetic 'resize' event
 * on the window. MUI Tabs and Slider both listen to ownerWindow(ref).resize and
 * re-measure on that event — correcting indicator position and track layout with
 * the real Inter metrics. This runs once per story mount, costs nothing, and
 * never remounts the component.
 */
const withFontReady: Decorator = (Story) => {
  React.useEffect(() => {
    document.fonts.ready.then(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }, []);

  return <Story />;
};

// ─── Preview config ──────────────────────────────────────────────────────────

const preview: Preview = {
  decorators: [withFontReady, withMuiTheme],

  parameters: {
    layout: 'centered',

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'light',
      values: [
        { name: 'light',  value: 'var(--ep-semantic-color-background-default, #F9FAFB)' },
        { name: 'dark',   value: '#111827' },
        { name: 'white',  value: '#ffffff' },
      ],
    },

    options: {
      storySort: {
        order: [
          'Get started',
          ['Overview', 'Design', 'Develop', 'Content design', 'About'],
          'Foundations',
          ['Overview', 'Color', 'Typography', 'Iconography', 'Spacing', 'Elevation', 'Border & Radius', 'Tokens', 'Accessibility'],
          'Components',
          [
            'Overview',
            'Inputs',    ['Button', 'TextField', 'Select', 'Autocomplete'],
            'Selection', ['Checkbox', 'Radio', 'Switch', 'Chip'],
            'Feedback',  ['Alert', 'Snackbar', 'CircularProgress', 'LinearProgress', 'Skeleton'],
            'Navigation',['Tabs', 'Breadcrumbs', 'Link', 'Pagination', 'Menu'],
            'Surfaces',  ['Card', 'List', 'Divider', 'Avatar', 'Badge', 'Tooltip'],
            'Overlays',  ['Dialog', 'Drawer', 'Popover', 'Backdrop'],
          ],
          'Patterns',
          ['Overview', 'Overlay pattern', 'Form patterns', 'Navigation patterns', 'Loading patterns', 'Empty states'],
          'Tools',
          ['Overview', 'Wave status', 'System readiness', 'Token audit', 'Deviations register', 'Contributing'],
        ],
      },
    },
  },
};

export default preview;

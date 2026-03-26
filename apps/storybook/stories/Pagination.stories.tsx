import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { Pagination } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Row of page-number buttons for navigating paged content. Supports controlled and uncontrolled usage. Focus pattern: static brand.primary focus ring (button rule). Selected item: filled brand.primary background.',
      },
    },
  },

  argTypes: {
    count:          { control: 'number' },
    page:           { control: 'number' },
    defaultPage:    { control: 'number' },
    size:           { control: 'radio',  options: ['sm', 'md', 'lg'] },
    variant:        { control: 'radio',  options: ['text', 'outlined'] },
    shape:          { control: 'radio',  options: ['circular', 'rounded'] },
    disabled:       { control: 'boolean' },
    hidePrevButton: { control: 'boolean' },
    hideNextButton: { control: 'boolean' },
    showFirstButton:{ control: 'boolean' },
    showLastButton: { control: 'boolean' },
    siblingCount:   { control: 'number' },
    boundaryCount:  { control: 'number' },
  },

  args: {
    count:          10,
    defaultPage:    1,
    size:           'md',
    variant:        'text',
    shape:          'circular',
    disabled:       false,
    hidePrevButton: false,
    hideNextButton: false,
    showFirstButton:false,
    showLastButton: false,
    siblingCount:   1,
    boundaryCount:  1,
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — use Controls to explore all props. */
export const Default: Story = {};

/** Both variants — text (no border) and outlined (border on each item). */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          text (default)
        </Typography>
        <Pagination count={10} defaultPage={3} variant="text" />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          outlined
        </Typography>
        <Pagination count={10} defaultPage={3} variant="outlined" />
      </div>
    </div>
  ),
};

/** Both shapes — circular (default) and rounded. */
export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['text', 'outlined'] as const).map((variant) => (
        <div key={variant}>
          <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            {variant}
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {(['circular', 'rounded'] as const).map((shape) => (
              <div key={shape} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <Pagination count={7} defaultPage={4} variant={variant} shape={shape} />
                <Typography variant="caption" color="text.secondary">{shape}</Typography>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

/** All three sizes (sm, md, lg). */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Pagination count={10} defaultPage={5} size={s} />
          <Typography variant="caption" color="text.secondary">{s}</Typography>
        </div>
      ))}
    </div>
  ),
};

/** All interactive states. */
export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          Default — page 5 selected
        </Typography>
        <Pagination count={10} defaultPage={5} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          Disabled — all items non-interactive
        </Typography>
        <Pagination count={10} defaultPage={5} disabled />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          Outlined + disabled
        </Typography>
        <Pagination count={10} defaultPage={5} variant="outlined" disabled />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          Show first/last buttons
        </Typography>
        <Pagination count={10} defaultPage={5} showFirstButton showLastButton />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          Hide prev/next buttons
        </Typography>
        <Pagination count={10} defaultPage={5} hidePrevButton hideNextButton />
      </div>
    </div>
  ),
};

/** Range control — siblingCount and boundaryCount. */
export const RangeControl: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          siblingCount=1, boundaryCount=1 (default)
        </Typography>
        <Pagination count={20} defaultPage={10} siblingCount={1} boundaryCount={1} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          siblingCount=2 — wider range around current page
        </Typography>
        <Pagination count={20} defaultPage={10} siblingCount={2} boundaryCount={1} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          boundaryCount=2 — two pages at each end
        </Typography>
        <Pagination count={20} defaultPage={10} siblingCount={1} boundaryCount={2} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          siblingCount=0, boundaryCount=1 — minimal
        </Typography>
        <Pagination count={20} defaultPage={10} siblingCount={0} boundaryCount={1} />
      </div>
    </div>
  ),
};

/** Controlled — page state managed externally. */
export const Controlled: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const [page, setPage] = React.useState(1);
    const [outlinedPage, setOutlinedPage] = React.useState(3);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
            Controlled (text) — current page: {page}
          </Typography>
          <Pagination
            count={10}
            page={page}
            onChange={setPage}
          />
        </div>
        <div>
          <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
            Controlled (outlined, rounded) — current page: {outlinedPage}
          </Typography>
          <Pagination
            count={10}
            page={outlinedPage}
            onChange={setOutlinedPage}
            variant="outlined"
            shape="rounded"
          />
        </div>
        <Typography variant="body2" color="text.secondary">
          The <code>onChange</code> prop receives the new page number directly —
          no need to extract it from an event.
        </Typography>
      </div>
    );
  },
};

/** Accessibility — aria-label, navigation role, and keyboard usage. */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary">Default aria-labels</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          MUI renders Pagination as a <code>&lt;nav aria-label="pagination navigation"&gt;</code>.
          Each item gets an aria-label like "Go to page 3" or "Go to previous page".
          Tab navigates between items; Enter or Space activates.
        </Typography>
        <Pagination count={5} defaultPage={3} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Custom aria-labels (getItemAriaLabel)</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Use <code>getItemAriaLabel</code> to provide locale-specific labels.
        </Typography>
        <Pagination
          count={5}
          defaultPage={2}
          getItemAriaLabel={(type, page, selected) => {
            if (type === 'page') return selected ? `Page ${page}, current` : `Go to page ${page}`;
            if (type === 'next') return 'Next page';
            if (type === 'previous') return 'Previous page';
            return type;
          }}
        />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Disabled — removed from tab order</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          When <code>disabled</code>, all items have <code>aria-disabled="true"</code>
          and are removed from the tab order.
        </Typography>
        <Pagination count={5} defaultPage={3} disabled />
      </div>
    </div>
  ),
};

/**
 * Token Audit — all CSS custom properties the Pagination component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const sizeVars = ['sm', 'md', 'lg'].flatMap((s) => [
      `--ep-component-pagination-item-size-${s}-width`,
      `--ep-component-pagination-item-size-${s}-height`,
      `--ep-component-pagination-item-size-${s}-font-size`,
    ]);
    const vars = [
      '--ep-component-pagination-gap',
      '--ep-component-pagination-item-border-radius-circular',
      '--ep-component-pagination-item-border-radius-rounded',
      ...sizeVars,
      '--ep-component-pagination-item-color',
      '--ep-component-pagination-item-color-selected',
      '--ep-component-pagination-item-color-disabled',
      '--ep-component-pagination-item-background',
      '--ep-component-pagination-item-background-hover',
      '--ep-component-pagination-item-background-focus',
      '--ep-component-pagination-item-background-selected',
      '--ep-component-pagination-item-background-disabled',
      '--ep-component-pagination-item-border',
      '--ep-component-pagination-item-border-selected',
      '--ep-component-pagination-item-border-disabled',
      '--ep-component-pagination-item-focus-ring-color',
      '--ep-component-pagination-item-focus-ring-width',
      '--ep-component-pagination-item-focus-ring-offset',
    ];

    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ color: '#666', marginBottom: 8 }}>
          Open DevTools → Computed to verify each var resolves. Total: {vars.length} vars.
        </p>
        <table style={{ borderCollapse: 'collapse', marginBottom: 32 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '4px 12px 4px 0', textAlign: 'left' }}>CSS custom property</th>
              <th style={{ padding: '4px 12px', textAlign: 'left' }}>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {vars.map((v) => (
              <tr key={v} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '4px 12px 4px 0' }}>{v}</td>
                <td style={{ padding: '4px 12px' }}>
                  <span style={{ display: 'inline-block', width: 16, height: 16, background: `var(${v})`, border: '1px solid #ccc', verticalAlign: 'middle' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Typography variant="overline" color="text.secondary">Live renders</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
          {(['sm', 'md', 'lg'] as const).map((s) => (
            <Pagination key={s} count={7} defaultPage={4} size={s} />
          ))}
          <Pagination count={7} defaultPage={4} variant="outlined" />
          <Pagination count={7} defaultPage={4} shape="rounded" />
          <Pagination count={7} defaultPage={4} disabled />
        </div>
      </div>
    );
  },
};

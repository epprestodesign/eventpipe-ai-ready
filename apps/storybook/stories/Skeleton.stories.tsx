import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { Skeleton } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Animated placeholder for content that is still loading. ' +
          'Four shapes: text (single line), circular (avatar), rectangular (image/card), rounded (card with rounding). ' +
          'Two animations: wave (shimmer sweep) and pulse (opacity fade). ' +
          'Non-interactive — no focus ring, no color or size variants.',
      },
    },
  },
  argTypes: {
    variant:   { control: 'radio',   options: ['text', 'circular', 'rectangular', 'rounded'] },
    animation: { control: 'radio',   options: ['wave', 'pulse', false] },
    width:     { control: 'text' },
    height:    { control: 'text' },
  },
  args: {
    variant:   'text',
    animation: 'wave',
    width:     200,
    height:    undefined,
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — use Controls to explore variant, animation, width, and height. */
export const Default: Story = {};

/** All four variant shapes. */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          text — single line placeholder (default)
        </Typography>
        <Skeleton variant="text" width={280} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          circular — avatar or icon placeholder
        </Typography>
        <Skeleton variant="circular" width={48} height={48} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          rectangular — image or card placeholder
        </Typography>
        <Skeleton variant="rectangular" width={280} height={120} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          rounded — card with rounded corners
        </Typography>
        <Skeleton variant="rounded" width={280} height={120} />
      </div>
    </div>
  ),
};

/** Wave, pulse, and no-animation variants. */
export const Animations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          wave — shimmer sweep (default)
        </Typography>
        <Skeleton animation="wave" width={280} />
        <Skeleton animation="wave" width={200} sx={{ mt: 0.5 }} />
        <Skeleton animation="wave" width={240} sx={{ mt: 0.5 }} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          pulse — opacity fade
        </Typography>
        <Skeleton animation="pulse" width={280} />
        <Skeleton animation="pulse" width={200} sx={{ mt: 0.5 }} />
        <Skeleton animation="pulse" width={240} sx={{ mt: 0.5 }} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          false — static, no animation
        </Typography>
        <Skeleton animation={false} width={280} />
        <Skeleton animation={false} width={200} sx={{ mt: 0.5 }} />
        <Skeleton animation={false} width={240} sx={{ mt: 0.5 }} />
      </div>
    </div>
  ),
};

/** Typical content-loading pattern — card with avatar, title, and body lines. */
export const ContentLoading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Card placeholder */}
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Card placeholder
        </Typography>
        <Skeleton variant="rounded" width={320} height={160} sx={{ mb: 1 }} />
        <Skeleton variant="text" width={260} />
        <Skeleton variant="text" width={200} sx={{ mt: 0.5 }} />
      </div>

      {/* List item placeholder */}
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          List item placeholder
        </Typography>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <Skeleton variant="circular" width={40} height={40} />
            <div style={{ flex: 1 }}>
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" sx={{ mt: 0.5 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Article placeholder */}
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          Article placeholder
        </Typography>
        <Skeleton variant="rectangular" width="100%" height={200} sx={{ mb: 1.5 }} />
        <Skeleton variant="text" width="70%" />
        <Skeleton variant="text" width="100%" sx={{ mt: 0.5 }} />
        <Skeleton variant="text" width="100%" sx={{ mt: 0.5 }} />
        <Skeleton variant="text" width="60%" sx={{ mt: 0.5 }} />
      </div>
    </div>
  ),
};

/** Loaded vs loading state toggle. */
export const LoadedVsLoading: Story = {
  render: () => {
    const [loaded, setLoaded] = React.useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <button
          onClick={() => setLoaded((v) => !v)}
          style={{ alignSelf: 'flex-start', padding: '6px 12px', cursor: 'pointer' }}
        >
          {loaded ? 'Show loading state' : 'Show loaded state'}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {loaded ? (
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'var(--ep-semantic-color-brand-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 600,
                fontFamily: 'sans-serif',
              }}
            >
              JD
            </div>
          ) : (
            <Skeleton variant="circular" width={40} height={40} />
          )}
          <div style={{ flex: 1 }}>
            {loaded ? (
              <div style={{ fontFamily: 'sans-serif' }}>
                <Typography variant="body1">Jane Doe</Typography>
                <Typography variant="body2" color="text.secondary">Product Designer</Typography>
              </div>
            ) : (
              <>
                <Skeleton variant="text" width={140} />
                <Skeleton variant="text" width={100} sx={{ mt: 0.5 }} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  },
};

/** Accessibility — skeleton semantics and screen-reader behavior. */
export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary">
          ARIA — role and aria-busy
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Skeleton renders as a <code>&lt;span&gt;</code> with no explicit ARIA role — it is purely
          visual. The containing region should use <code>aria-busy="true"</code> while loading so
          that screen readers announce the loading state, and <code>aria-busy="false"</code> when
          content is available.
        </Typography>
        <div aria-busy="true" aria-label="Profile loading">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Skeleton variant="circular" width={40} height={40} />
            <div>
              <Skeleton variant="text" width={140} />
              <Skeleton variant="text" width={100} sx={{ mt: 0.5 }} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">
          Reduced motion — animation respects prefers-reduced-motion
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          MUI Skeleton automatically disables animation when
          <code> prefers-reduced-motion: reduce</code> is detected. Use{' '}
          <code>animation={'{false}'}</code> to always show a static placeholder.
        </Typography>
        <Skeleton animation={false} width={240} />
      </div>
    </div>
  ),
};

/**
 * Token Audit — all CSS custom properties the Skeleton component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  render: () => {
    const vars = [
      '--ep-component-skeleton-background',
      '--ep-component-skeleton-border-radius-text',
      '--ep-component-skeleton-border-radius-rectangular',
      '--ep-component-skeleton-border-radius-rounded',
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
                  <span
                    style={{
                      display: 'inline-block',
                      width: 16,
                      height: 16,
                      background: `var(${v})`,
                      border: '1px solid #ccc',
                      verticalAlign: 'middle',
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Typography variant="overline" color="text.secondary">Live renders</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
          <Skeleton variant="text" width={200} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={200} height={60} />
          <Skeleton variant="rounded" width={200} height={60} />
          <Skeleton animation="pulse" width={200} />
          <Skeleton animation={false} width={200} />
        </div>
      </div>
    );
  },
};

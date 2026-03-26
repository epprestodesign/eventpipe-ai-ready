import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { Chip, Icon } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Selection/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Compact interactive or display element. Three variants: `filled`, `outlined`, `soft`. Three sizes (EpSize3). Focus pattern: dynamic color — focus ring uses the chip\'s foreground token.',
      },
    },
  },

  argTypes: {
    variant:  { control: 'radio',  options: ['filled', 'outlined', 'soft'] },
    size:     { control: 'radio',  options: ['sm', 'md', 'lg'] },
    color:    { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] },
    label:    { control: 'text' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },

  args: {
    variant:  'filled',
    size:     'md',
    color:    'primary',
    label:    'Chip label',
    selected: false,
    disabled: false,
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — use Controls to explore all props. */
export const Default: Story = {};

/** All three variants side-by-side. */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {(['filled', 'outlined', 'soft'] as const).map((v) => (
        <div key={v} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Chip variant={v} label={v} color="primary" />
          <Typography variant="caption" color="text.secondary">{v}</Typography>
        </div>
      ))}
    </div>
  ),
};

/** All three sizes. */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Chip size={s} label={`Size ${s}`} />
          <Typography variant="caption" color="text.secondary">{s}</Typography>
        </div>
      ))}
    </div>
  ),
};

/** All seven colors across all three variants. */
export const Colors: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const colors = ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const;
    const variants = ['filled', 'outlined', 'soft'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {variants.map((v) => (
          <div key={v}>
            <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
              {v}
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {colors.map((c) => (
                <Chip key={c} variant={v} color={c} label={c} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

/** All interactive states — default, selected, disabled. */
export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const variants = ['filled', 'outlined', 'soft'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {variants.map((v) => (
          <div key={v}>
            <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
              {v}
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
              <Chip variant={v} label="Default" />
              <Chip variant={v} label="Clickable" onClick={() => {}} />
              <Chip variant={v} label="Selected" selected />
              <Chip variant={v} label="Disabled" disabled />
              <Chip variant={v} label="Deletable" onDelete={() => {}} />
            </div>
          </div>
        ))}
      </div>
    );
  },
};

/** Icon slots — startIcon (decorative) and onDelete (interactive end slot). */
export const WithIcons: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          startIcon
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Chip label="Person" startIcon={<Icon name="person" />} />
          <Chip label="Calendar" startIcon={<Icon name="calendar" />} variant="outlined" />
          <Chip label="Settings" startIcon={<Icon name="settings" />} variant="soft" />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          endIcon (decorative — no onDelete)
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Chip label="Expand" endIcon={<Icon name="chevron-down" />} />
          <Chip label="Navigate" endIcon={<Icon name="chevron-right" />} variant="outlined" />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          onDelete (close button replaces endIcon)
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Chip label="Tag" onDelete={() => {}} />
          <Chip label="Filter" onDelete={() => {}} variant="outlined" color="primary" />
          <Chip label="Category" onDelete={() => {}} variant="soft" color="success" />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
          startIcon + onDelete
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Chip
            label="React"
            startIcon={<Icon name="code-xml" />}
            onDelete={() => {}}
          />
          <Chip
            label="Urgent"
            startIcon={<Icon name="error" />}
            onDelete={() => {}}
            color="error"
            variant="soft"
          />
        </div>
      </div>
    </div>
  ),
};

/** Filter chip pattern — toggle selected state. */
export const WithSelection: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const [active, setActive] = React.useState<Set<string>>(new Set(['react']));
    const tags = ['React', 'TypeScript', 'Design System', 'Tokens', 'MUI'];

    const toggle = (tag: string) => {
      const key = tag.toLowerCase().replace(/\s+/g, '-');
      setActive((prev) => {
        const next = new Set(prev);
        next.has(key) ? next.delete(key) : next.add(key);
        return next;
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
            Filter chips (soft — click to toggle)
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {tags.map((tag) => {
              const key = tag.toLowerCase().replace(/\s+/g, '-');
              return (
                <Chip
                  key={key}
                  label={tag}
                  variant="soft"
                  selected={active.has(key)}
                  onClick={() => toggle(tag)}
                />
              );
            })}
          </div>
        </div>
        <div>
          <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
            Filter chips (outlined — click to toggle)
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {tags.map((tag) => {
              const key = tag.toLowerCase().replace(/\s+/g, '-');
              return (
                <Chip
                  key={key}
                  label={tag}
                  variant="outlined"
                  selected={active.has(key)}
                  onClick={() => toggle(tag)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  },
};

/** Accessibility — keyboard focus, role, and aria patterns. */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary">Clickable chip — role="button"</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          When onClick is provided, MUI adds role="button" and tabIndex=0.
          Tab to focus, Enter or Space activates.
        </Typography>
        <Chip label="Clickable" onClick={() => {}} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Deletable chip</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          The delete button is keyboard-accessible separately. Tab selects the chip,
          a second Tab focuses the delete button. Delete or Backspace also triggers onDelete.
        </Typography>
        <Chip label="Tag to delete" onDelete={() => {}} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Focus ring — dynamic color</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Focus ring uses the chip's own text token (not a static brand primary).
          Tab to see the ring for each variant.
        </Typography>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Chip label="Filled" onClick={() => {}} />
          <Chip label="Outlined" variant="outlined" onClick={() => {}} />
          <Chip label="Soft" variant="soft" onClick={() => {}} />
          <Chip label="Error filled" color="error" onClick={() => {}} />
          <Chip label="Success soft" color="success" variant="soft" onClick={() => {}} />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Static chip — no interactive role</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Without onClick or onDelete, MUI renders with role="presentation" (decorative).
          Not in tab order.
        </Typography>
        <Chip label="Tag / label" />
      </div>
    </div>
  ),
};

/**
 * Token Audit — all CSS custom properties the Chip component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const sizeVars = ['sm', 'md', 'lg'].flatMap((s) => [
      `--ep-component-chip-size-${s}-height`,
      `--ep-component-chip-size-${s}-font-size`,
      `--ep-component-chip-size-${s}-padding-x`,
      `--ep-component-chip-size-${s}-icon-size`,
      `--ep-component-chip-size-${s}-gap`,
    ]);
    const colorVars = ['filled', 'outlined', 'soft'].flatMap((v) =>
      ['primary', 'error', 'success', 'neutral'].flatMap((c) => [
        `--ep-component-chip-${v}-${c}-background`,
        `--ep-component-chip-${v}-${c}-background-hover`,
        `--ep-component-chip-${v}-${c}-background-selected`,
        `--ep-component-chip-${v}-${c}-text`,
        `--ep-component-chip-${v}-${c}-border`,
      ])
    );
    const sharedVars = [
      '--ep-component-chip-border-radius',
      '--ep-component-chip-disabled-background',
      '--ep-component-chip-disabled-text',
      '--ep-component-chip-disabled-border',
      '--ep-component-chip-focus-ring-width',
      '--ep-component-chip-focus-ring-offset',
      '--ep-component-chip-delete-icon-opacity',
      '--ep-component-chip-delete-icon-opacity-hover',
    ];
    const allVars = [...sharedVars, ...sizeVars, ...colorVars];

    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ color: '#666', marginBottom: 8 }}>
          Showing a representative subset. Total component token count: 131.
          Open DevTools → Computed to verify all vars resolve.
        </p>
        <table style={{ borderCollapse: 'collapse', marginBottom: 32 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '4px 12px 4px 0', textAlign: 'left' }}>CSS custom property</th>
              <th style={{ padding: '4px 12px', textAlign: 'left' }}>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {allVars.map((v) => (
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
        <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          {(['filled', 'outlined', 'soft'] as const).map((v) =>
            (['primary', 'error', 'success', 'neutral'] as const).map((c) => (
              <Chip key={`${v}-${c}`} variant={v} color={c} label={`${v}/${c}`} size="sm" />
            ))
          )}
          <Chip label="Selected" selected />
          <Chip label="Disabled" disabled />
          <Chip label="Delete" onDelete={() => {}} />
          <Chip label="Icon" startIcon={<Icon name="person" />} />
        </div>
      </div>
    );
  },
};

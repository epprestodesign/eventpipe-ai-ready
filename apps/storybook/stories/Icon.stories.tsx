import type { Meta, StoryObj } from '@storybook/react';
import { Icon, Button } from '@eventpipe/ui';
import type { IconName, IconProps } from '@eventpipe/ui';
import { iconRegistry } from '@eventpipe/ui';

// ─── Helpers ──────────────────────────────────────────────────────────────────

const ALL_NAMES = Object.keys(iconRegistry) as IconName[];

// Grouped for the gallery story
const ICON_GROUPS: { label: string; names: IconName[] }[] = [
  {
    label: 'Foundational',
    names: ['close', 'check', 'menu'],
  },
  {
    label: 'Status / Feedback',
    names: ['success', 'warning', 'error', 'info'],
  },
  {
    label: 'Navigation',
    names: ['chevron-down', 'chevron-up', 'chevron-right', 'chevron-left', 'arrow-back', 'arrow-forward'],
  },
  {
    label: 'Action',
    names: ['add', 'remove', 'delete', 'edit', 'search', 'download', 'upload',
            'visibility', 'visibility-off', 'settings', 'person', 'calendar', 'filter'],
  },
  {
    label: 'Application / Domain',
    names: ['code-xml', 'support-agent', 'construction', 'signature',
            'library-books', 'account-tree', 'stadium', 'airline-seat-flat',
            'fork-spoon', 'apartment', 'bar-chart-4-bars', 'inventory',
            'concierge', 'calendar-month', 'groups-2'],
  },
];

const label14 = { fontSize: 11, color: '#888', textAlign: 'center' as const, marginTop: 4, lineHeight: 1.2 };
const cell = { display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 4, padding: '12px 8px', width: 80 };

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Foundations/Iconography',
  component: Icon,
  tags: ['autodocs'],

  argTypes: {
    name: {
      control: 'select',
      options: ALL_NAMES,
      description: 'Semantic icon name from the Phase 1 approved registry.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Maps to --ep-semantic-icon-size-* token. Default: md (20px)',
      table: { defaultValue: { summary: 'md' } },
    },
    label: {
      control: 'text',
      description: 'Accessible label. Omit for decorative icons. Provide for semantic icons.',
    },
  },

  args: {
    name: 'add',
    size: 'md',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default (Interactive) ────────────────────────────────────────────────────

/** Use the Controls panel to explore every prop and size. */
export const Default: Story = {};

// ─── Phase 1 Gallery ─────────────────────────────────────────────────────────

/**
 * Complete Phase 1 approved icon set, organized by category.
 *
 * **Governance:** Every icon here went through the PR process defined in
 * `docs/decisions/006-icon-system.md`. Icons not shown are not available.
 * To add an icon, open a PR to `packages/ui/src/icons/registry.ts`.
 */
export const Gallery: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {ICON_GROUPS.map(group => (
        <div key={group.label}>
          <h3 style={{ margin: '0 0 12px', fontSize: 13, fontWeight: 600, color: '#444', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {group.label}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {group.names.map(name => (
              <div key={name} style={{ ...cell, border: '1px solid #e5e7eb', borderRadius: 6 }}>
                <Icon name={name} size="lg" />
                <span style={label14}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── Size Scale ───────────────────────────────────────────────────────────────

/**
 * 5-tier size scale using `--ep-semantic-icon-size-*` tokens.
 * No pixel values are hardcoded — all sizing comes from CSS custom properties.
 */
export const Sizes: Story = {
  render: (args: IconProps) => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
        <div key={size} style={{ ...cell }}>
          <Icon {...args} size={size} />
          <span style={label14}>{size}<br />
            <span style={{ color: '#bbb' }}>
              {size === 'xs' ? '12' : size === 'sm' ? '16' : size === 'md' ? '20' : size === 'lg' ? '24' : '32'}px
            </span>
          </span>
        </div>
      ))}
    </div>
  ),
};

// ─── Accessibility: Decorative vs Semantic ────────────────────────────────────

/**
 * Decorative icons have `aria-hidden="true"` applied automatically
 * (no `label` prop). Screen readers skip them entirely.
 *
 * Semantic icons have `role="img"` + `aria-label`. Screen readers announce them.
 *
 * **Rule:** never provide `label` here AND `aria-label` on a wrapping interactive
 * element — it creates duplicate announcements.
 */
export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>

      <section>
        <h3 style={{ margin: '0 0 8px', fontSize: 13 }}>Decorative — no label prop → aria-hidden="true"</h3>
        <p style={{ margin: '0 0 12px', fontSize: 12, color: '#666' }}>
          Icon is purely visual. The <em>button text</em> carries all meaning.
        </p>
        <Button startSlot={<Icon name="download" />}>Export CSV</Button>
        <code style={{ display: 'block', marginTop: 8, fontSize: 11, color: '#888' }}>
          {'<Icon name="download" />  →  aria-hidden="true"'}
        </code>
      </section>

      <section>
        <h3 style={{ margin: '0 0 8px', fontSize: 13 }}>Semantic — with label → role="img" + aria-label</h3>
        <p style={{ margin: '0 0 12px', fontSize: 12, color: '#666' }}>
          Icon carries meaning. Announced by screen readers.
        </p>
        <Icon name="warning" size="lg" label="Warning" />
        <code style={{ display: 'block', marginTop: 8, fontSize: 11, color: '#888' }}>
          {'<Icon name="warning" label="Warning" />  →  role="img" aria-label="Warning"'}
        </code>
      </section>

      <section>
        <h3 style={{ margin: '0 0 8px', fontSize: 13 }}>Icon-only button — aria-label on the button</h3>
        <p style={{ margin: '0 0 12px', fontSize: 12, color: '#666' }}>
          The button carries aria-label. Icon inside is decorative (no label).
        </p>
        <button
          aria-label="Delete item"
          style={{ padding: 8, border: '1px solid #ccc', borderRadius: 6, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', background: 'none' }}
        >
          <Icon name="delete" size="md" />
        </button>
        <code style={{ display: 'block', marginTop: 8, fontSize: 11, color: '#888' }}>
          {'<button aria-label="Delete item"><Icon name="delete" /></button>'}
        </code>
      </section>

    </div>
  ),
};

// ─── Icons in Button ─────────────────────────────────────────────────────────

/**
 * Icons used inside Button via `startSlot` and `endSlot`.
 *
 * **Sizing convention:** match the icon size to the button size.
 * `<Button size="md" startSlot={<Icon name="add" size="md" />} />`
 */
export const WithButton: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
        <div key={size} style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ width: 24, fontSize: 11, color: '#888' }}>{size}</span>
          <Button variant="contained" size={size} startSlot={<Icon name="add" size={size} />}>
            Create
          </Button>
          <Button variant="outlined" size={size} startSlot={<Icon name="download" size={size} />}>
            Export
          </Button>
          <Button variant="text" size={size} endSlot={<Icon name="chevron-right" size={size} />}>
            Continue
          </Button>
          <Button variant="soft" size={size} color="error" startSlot={<Icon name="delete" size={size} />}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  ),
};

// ─── Status Icons (Alert context) ────────────────────────────────────────────

/**
 * Status icons used in Alert/Snackbar severity contexts.
 * These are the only approved icons for feedback components — see docs/decisions/006.
 */
export const StatusIcons: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const statuses: { name: IconName; label: string; color: string }[] = [
      { name: 'success', label: 'Success',  color: '#16A34A' },
      { name: 'warning', label: 'Warning',  color: '#CA8A04' },
      { name: 'error',   label: 'Error',    color: '#E11D48' },
      { name: 'info',    label: 'Info',     color: '#0057FF' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {statuses.map(({ name, label, color }) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ color, display: 'flex' }}>
              <Icon name={name} size="lg" label={label} />
            </div>
            <span style={{ fontSize: 14 }}>{label}</span>
            <code style={{ fontSize: 11, color: '#888', marginLeft: 'auto' }}>
              {`<Icon name="${name}" size="lg" label="${label}" />`}
            </code>
          </div>
        ))}
      </div>
    );
  },
};

// ─── Color Inheritance ────────────────────────────────────────────────────────

/**
 * Icons use `color: currentColor` — they inherit from their parent.
 * No color prop needed in most cases.
 */
export const ColorInheritance: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {[
        { color: '#0057FF', label: 'brand primary' },
        { color: '#E11D48', label: 'error' },
        { color: '#16A34A', label: 'success' },
        { color: '#374151', label: 'neutral' },
        { color: '#9CA3AF', label: 'disabled' },
      ].map(({ color, label }) => (
        <div key={label} style={{ textAlign: 'center' }}>
          <div style={{ color, display: 'flex', justifyContent: 'center' }}>
            <Icon name="settings" size="lg" />
          </div>
          <div style={{ fontSize: 11, color: '#888', marginTop: 4 }}>{label}</div>
        </div>
      ))}
    </div>
  ),
};

// ─── Token Audit ─────────────────────────────────────────────────────────────

/**
 * Verify all --ep-semantic-icon-size-* tokens resolve in the browser.
 * Open DevTools → Computed, inspect the swatch elements below.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const tokens = [
      { name: '--ep-semantic-icon-size-xs', expected: '12px' },
      { name: '--ep-semantic-icon-size-sm', expected: '16px' },
      { name: '--ep-semantic-icon-size-md', expected: '20px' },
      { name: '--ep-semantic-icon-size-lg', expected: '24px' },
      { name: '--ep-semantic-icon-size-xl', expected: '32px' },
    ];

    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ marginBottom: 12, color: '#666' }}>
          Each icon below is sized by a CSS variable. Inspect Computed to confirm resolution.
        </p>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '4px 16px 4px 0', background: '#f5f5f5' }}>Token</th>
              <th style={{ textAlign: 'left', padding: '4px 16px', background: '#f5f5f5' }}>Expected</th>
              <th style={{ textAlign: 'left', padding: '4px 0', background: '#f5f5f5' }}>Rendered</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map(({ name, expected }) => {
              const size = name.split('-').pop() as 'xs' | 'sm' | 'md' | 'lg' | 'xl';
              return (
                <tr key={name} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '6px 16px 6px 0', color: '#333' }}>{name}</td>
                  <td style={{ padding: '6px 16px', color: '#888' }}>{expected}</td>
                  <td style={{ padding: '6px 0' }}>
                    <Icon name="settings" size={size} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  },
};

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CommandPalette } from '@eventpipe/ui';
import type { CommandItem, CommandGroup } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof CommandPalette> = {
  title: 'Components/Overlays/CommandPalette',
  component: CommandPalette,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'CommandPalette — keyboard-driven command launcher. ' +
          'Accepts flat CommandItem[] or grouped CommandGroup[]. ' +
          'Focus stays on TextField input throughout navigation. ' +
          'ArrowDown/Up cycles items, Enter executes, Escape closes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommandPalette>;

// ─── Shared sample data ────────────────────────────────────────────────────────

const FLAT_COMMANDS: CommandItem[] = [
  { id: 'new-event',    label: 'New event',          icon: 'add',          onAction: () => alert('New event') },
  { id: 'search',       label: 'Search events',       icon: 'search',       onAction: () => alert('Search') },
  { id: 'settings',     label: 'Open settings',       icon: 'settings',     shortcut: '⌘,',    onAction: () => alert('Settings') },
  { id: 'profile',      label: 'View profile',        icon: 'person',       onAction: () => alert('Profile') },
  { id: 'logout',       label: 'Sign out',            icon: 'arrow-forward', onAction: () => alert('Sign out') },
];

const GROUPED_COMMANDS: CommandGroup[] = [
  {
    id: 'navigation',
    label: 'Navigation',
    items: [
      { id: 'go-dashboard', label: 'Go to dashboard',  icon: 'chevron-right', shortcut: '⌘H', onAction: () => alert('Dashboard') },
      { id: 'go-events',    label: 'Go to events',     icon: 'calendar',      shortcut: '⌘E', onAction: () => alert('Events') },
      { id: 'go-settings',  label: 'Go to settings',   icon: 'settings',      shortcut: '⌘,', onAction: () => alert('Settings') },
    ],
  },
  {
    id: 'actions',
    label: 'Actions',
    items: [
      { id: 'new-event',    label: 'Create new event', icon: 'add',      description: 'Start a new event from scratch', onAction: () => alert('Create event') },
      { id: 'invite',       label: 'Invite team member', icon: 'person', description: 'Send an invitation email',       onAction: () => alert('Invite') },
      { id: 'export',       label: 'Export data',      icon: 'download', description: 'Download as CSV or JSON',         onAction: () => alert('Export') },
    ],
  },
  {
    id: 'recent',
    label: 'Recent',
    items: [
      { id: 'recent-1', label: 'Summer Conference 2026', icon: 'calendar-month', onAction: () => alert('Summer Conf') },
      { id: 'recent-2', label: 'Product Launch Q1',      icon: 'calendar-month', onAction: () => alert('Product Launch') },
    ],
  },
];

// ─── Wrapper for interactive stories ──────────────────────────────────────────

function PaletteWrapper({ commands, isLoading, placeholder, emptyMessage, groupedVariant = false }: {
  commands?: CommandItem[];
  isLoading?: boolean;
  placeholder?: string;
  emptyMessage?: string;
  groupedVariant?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '8px 16px',
          borderRadius: 6,
          border: '1px solid #E5E7EB',
          background: '#F9FAFB',
          cursor: 'pointer',
          fontSize: 14,
        }}
      >
        Open palette (or press ⌘K)
      </button>
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        commands={groupedVariant ? GROUPED_COMMANDS : (commands ?? FLAT_COMMANDS)}
        isLoading={isLoading}
        placeholder={placeholder}
        emptyMessage={emptyMessage}
      />
    </div>
  );
}

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Default — flat command list, uncontrolled open state.
 * Click the button to open. Type to filter, ArrowDown/Up to navigate, Enter to execute.
 */
export const Default: Story = {
  render: () => <PaletteWrapper />,
};

/**
 * OpenState — palette rendered open immediately so you can inspect layout without interaction.
 */
export const OpenState: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        commands={FLAT_COMMANDS}
      />
    );
  },
};

/**
 * KeyboardNavigation — demonstrates ArrowDown/Up cycling, Enter execution, Escape close.
 * The active item highlight uses the List token namespace for consistency.
 */
export const KeyboardNavigation: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [lastAction, setLastAction] = useState<string | null>(null);
    const commands: CommandItem[] = FLAT_COMMANDS.map((cmd) => ({
      ...cmd,
      onAction: () => {
        setLastAction(cmd.label);
        setOpen(false);
      },
    }));
    return (
      <div>
        {lastAction && (
          <div style={{ marginBottom: 12, padding: '8px 12px', background: '#D1FAE5', borderRadius: 6, fontSize: 13 }}>
            Executed: <strong>{lastAction}</strong>
          </div>
        )}
        <button
          onClick={() => setOpen(true)}
          style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #E5E7EB', background: '#F9FAFB', cursor: 'pointer', fontSize: 14 }}
        >
          Open palette
        </button>
        <CommandPalette open={open} onClose={() => setOpen(false)} commands={commands} />
      </div>
    );
  },
};

/**
 * GroupedCommands — CommandGroup[] input normalized to labelled sections.
 * Group headers render as non-interactive divider rows.
 */
export const GroupedCommands: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        commands={GROUPED_COMMANDS}
        placeholder="Search actions, pages…"
      />
    );
  },
};

/**
 * Loading — isLoading=true shows skeleton rows (Pattern E) instead of the command list.
 */
export const Loading: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        commands={FLAT_COMMANDS}
        isLoading
      />
    );
  },
};

/**
 * Empty — no commands match the initial query. Pattern F empty state is rendered.
 */
export const Empty: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        commands={[]}
        emptyMessage="No results found for your query"
      />
    );
  },
};

/**
 * Accessibility — annotated with ARIA attributes.
 * role="dialog" + aria-label on MuiDialog, aria-label on input.
 * Focus stays on TextField throughout keyboard navigation (deviation from Menu).
 */
export const Accessibility: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '- MuiDialog provides `role="dialog"` and `aria-modal="true"` automatically.\n' +
          '- TextField input receives `aria-label="Search commands"`.\n' +
          '- Active item tracked via `aria-activedescendant` on the input.\n' +
          '- Items receive `role="option"` and `aria-selected`.\n' +
          '- **Deviation**: Focus stays on TextField input (not moved to list items). ' +
          '  Registered deviation: focus-on-input pattern for command palette context.',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        commands={GROUPED_COMMANDS}
        placeholder="Search commands…"
      />
    );
  },
};

/**
 * TokenAudit — visual audit of all 23 component tokens.
 */
export const TokenAudit: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All 23 `--ep-component-command-palette-*` tokens in use.',
      },
    },
  },
  render: () => {
    const tokens = [
      '--ep-component-command-palette-overlay-background',
      '--ep-component-command-palette-overlay-border-radius',
      '--ep-component-command-palette-overlay-shadow',
      '--ep-component-command-palette-overlay-width',
      '--ep-component-command-palette-overlay-top-offset',
      '--ep-component-command-palette-input-font-size',
      '--ep-component-command-palette-input-padding-y',
      '--ep-component-command-palette-input-padding-x',
      '--ep-component-command-palette-divider-color',
      '--ep-component-command-palette-item-padding-y',
      '--ep-component-command-palette-item-padding-x',
      '--ep-component-command-palette-item-font-size',
      '--ep-component-command-palette-item-description-font-size',
      '--ep-component-command-palette-item-description-color',
      '--ep-component-command-palette-item-shortcut-color',
      '--ep-component-command-palette-item-shortcut-font-size',
      '--ep-component-command-palette-list-max-height',
      '--ep-component-command-palette-group-label-font-size',
      '--ep-component-command-palette-group-label-color',
      '--ep-component-command-palette-group-label-font-weight',
      '--ep-component-command-palette-group-label-padding-y',
      '--ep-component-command-palette-empty-font-size',
      '--ep-component-command-palette-empty-color',
    ];
    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <div style={{ marginBottom: 16, fontWeight: 700, fontSize: 14 }}>
          CommandPalette — 23 component tokens
        </div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
              <th style={{ textAlign: 'left', padding: '6px 12px', color: '#6B7280' }}>#</th>
              <th style={{ textAlign: 'left', padding: '6px 12px', color: '#6B7280' }}>Token</th>
              <th style={{ textAlign: 'left', padding: '6px 12px', color: '#6B7280' }}>Resolved value</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token, i) => (
              <tr key={token} style={{ borderBottom: '1px solid #F3F4F6' }}>
                <td style={{ padding: '5px 12px', color: '#9CA3AF' }}>{i + 1}</td>
                <td style={{ padding: '5px 12px', color: '#374151' }}>{token}</td>
                <td style={{ padding: '5px 12px', color: '#6B7280' }}>
                  <span
                    ref={(el) => {
                      if (el) {
                        const v = getComputedStyle(document.documentElement)
                          .getPropertyValue(token)
                          .trim();
                        el.textContent = v || '(not resolved)';
                      }
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

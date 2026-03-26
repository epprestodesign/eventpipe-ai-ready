import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TransferList } from '@eventpipe/ui';
import type { TransferListItem } from '@eventpipe/ui';

// ─── Meta ────────────────────────────────────────────────────────────────────

const meta: Meta<typeof TransferList> = {
  title: 'Components/Surfaces/TransferList',
  component: TransferList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'TransferList — dual-list selection and move system. ' +
          'Patterns: B (selection), C (header state), E (loading), F (empty), MA-2 (debounce). ' +
          'Consumer owns list data; component owns checkbox staging state.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TransferList>;

// ─── Sample data ─────────────────────────────────────────────────────────────

const GUESTS: TransferListItem[] = [
  { id: 'g1',  label: 'Alice Johnson'    },
  { id: 'g2',  label: 'Bob Martinez'     },
  { id: 'g3',  label: 'Carol White'      },
  { id: 'g4',  label: 'David Lee'        },
  { id: 'g5',  label: 'Emma Davis'       },
  { id: 'g6',  label: 'Frank Wilson'     },
  { id: 'g7',  label: 'Grace Taylor'     },
  { id: 'g8',  label: 'Henry Anderson'   },
];

const CHECKED_IN: TransferListItem[] = [
  { id: 'g9',  label: 'Irene Thomas'     },
  { id: 'g10', label: 'Jack Jackson'     },
];

const DISABLED_ITEMS: TransferListItem[] = [
  { id: 'g1',  label: 'Alice Johnson'    },
  { id: 'g2',  label: 'Bob Martinez'     },
  { id: 'g3',  label: 'Carol White (VIP)', disabled: true },
  { id: 'g4',  label: 'David Lee'        },
  { id: 'g5',  label: 'Emma Davis (VIP)',  disabled: true },
  { id: 'g6',  label: 'Frank Wilson'     },
];

// ─── Controlled wrapper used in most stories ──────────────────────────────────

const ControlledTransferList = ({
  initialLeft,
  initialRight = [],
  ...props
}: Partial<React.ComponentProps<typeof TransferList>> & {
  initialLeft: TransferListItem[];
  initialRight?: TransferListItem[];
}) => {
  const [left,  setLeft]  = useState<TransferListItem[]>(initialLeft);
  const [right, setRight] = useState<TransferListItem[]>(initialRight);

  return (
    <TransferList
      leftItems={left}
      rightItems={right}
      onChange={(l, r) => { setLeft(l); setRight(r); }}
      {...props}
    />
  );
};

// ─── Story 1: Default ────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <ControlledTransferList
      initialLeft={GUESTS}
      leftTitle="Available guests"
      rightTitle="Checked in"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default state. Left list has 8 items; right is empty. Check items then click → to move them.',
      },
    },
  },
};

// ─── Story 2: WithSelection ───────────────────────────────────────────────────

export const WithSelection: Story = {
  render: () => (
    <ControlledTransferList
      initialLeft={GUESTS}
      initialRight={CHECKED_IN}
      leftTitle="Available guests"
      rightTitle="Checked in"
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Both lists have items. ' +
          'Pattern B: select items on either side, then use the control buttons to move them. ' +
          'Pattern C: header background switches when items are selected.',
      },
    },
  },
};

// ─── Story 3: MoveSelected ────────────────────────────────────────────────────

export const MoveSelected: Story = {
  render: () => {
    const [left,  setLeft]  = useState<TransferListItem[]>(GUESTS.slice(0, 5));
    const [right, setRight] = useState<TransferListItem[]>(GUESTS.slice(5));
    const [log,   setLog]   = useState<string[]>([]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <TransferList
          leftItems={left}
          rightItems={right}
          leftTitle="Pending"
          rightTitle="Confirmed"
          onChange={(l, r) => {
            const moved = Math.abs(l.length - left.length);
            setLog(prev => [`Moved ${moved} item(s)`, ...prev].slice(0, 5));
            setLeft(l);
            setRight(r);
          }}
        />
        {log.length > 0 && (
          <div style={{ fontSize: 13, color: 'var(--ep-semantic-color-text-secondary)' }}>
            <strong>Move log:</strong>
            <ul style={{ margin: '4px 0', paddingLeft: 20 }}>
              {log.map((entry, i) => <li key={i}>{entry}</li>)}
            </ul>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the move log after each operation. Select items then use › or ‹ buttons.',
      },
    },
  },
};

// ─── Story 4: MoveAll ────────────────────────────────────────────────────────

export const MoveAll: Story = {
  render: () => (
    <ControlledTransferList
      initialLeft={GUESTS}
      leftTitle="All guests"
      rightTitle="Selected"
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use »› (double arrow) to move all items at once. ' +
          'Disabled items are never moved by move-all operations.',
      },
    },
  },
};

// ─── Story 5: WithSearch ──────────────────────────────────────────────────────

export const WithSearch: Story = {
  render: () => (
    <ControlledTransferList
      initialLeft={GUESTS}
      initialRight={CHECKED_IN}
      leftTitle="Available"
      rightTitle="Checked in"
      searchable
      searchPlaceholder="Search guests..."
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'searchable={true} adds a search field to each panel. ' +
          'Pattern MA-2: debounced client-side filter. ' +
          'Pattern F: filtered empty state appears when no items match.',
      },
    },
  },
};

// ─── Story 6: Loading ─────────────────────────────────────────────────────────

export const Loading: Story = {
  render: () => {
    const [leftDone, setLeftDone]   = useState(false);
    const [rightDone, setRightDone] = useState(false);

    // Simulate async load
    React.useEffect(() => {
      const t1 = setTimeout(() => setLeftDone(true),  1500);
      const t2 = setTimeout(() => setRightDone(true), 2500);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    return (
      <ControlledTransferList
        initialLeft={leftDone  ? GUESTS      : []}
        initialRight={rightDone ? CHECKED_IN : []}
        leftTitle="Available guests"
        rightTitle="Checked in"
        leftLoading={!leftDone}
        rightLoading={!rightDone}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Pattern E: loading state. Left panel resolves after 1.5s, right after 2.5s. ' +
          'Skeleton rows match the expected item height. Controls are disabled during load.',
      },
    },
  },
};

// ─── Story 7: Empty ───────────────────────────────────────────────────────────

export const Empty: Story = {
  render: () => (
    <ControlledTransferList
      initialLeft={[]}
      leftTitle="Available"
      rightTitle="Selected"
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Pattern F: empty state. Both lists have no items. ' +
          'The empty state icon and message are rendered inside the list body area.',
      },
    },
  },
};

// ─── Story 8: Accessibility ───────────────────────────────────────────────────

export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontSize: 13, color: 'var(--ep-semantic-color-text-secondary)', lineHeight: 1.6 }}>
        <strong>Keyboard behaviour:</strong>
        <ul style={{ margin: '4px 0 0', paddingLeft: 20 }}>
          <li>Tab → first list item in left panel</li>
          <li>Arrow keys → navigate list items</li>
          <li>Space → toggle item selection (checkbox)</li>
          <li>Tab → control buttons (›, »›, ‹«, ‹)</li>
          <li>Tab → first list item in right panel</li>
          <li>aria-live="polite" announces selection count changes</li>
          <li>role="listbox" on each panel; select-all uses aria-label</li>
        </ul>
        <strong>ARIA landmarks:</strong>
        <ul style={{ margin: '4px 0 0', paddingLeft: 20 }}>
          <li>Each panel header has id used as aria-labelledby on role="listbox"</li>
          <li>Control group has role="group" aria-label="Transfer controls"</li>
          <li>Each button has aria-label describing the move operation</li>
        </ul>
      </div>
      <ControlledTransferList
        initialLeft={GUESTS.slice(0, 4)}
        initialRight={GUESTS.slice(4, 6)}
        leftTitle="Available guests"
        rightTitle="Selected guests"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility annotations for keyboard navigation and screen reader behaviour.',
      },
    },
  },
};

// ─── Story 9: TokenAudit ──────────────────────────────────────────────────────

const TL_TOKENS: Array<{ token: string; role: string }> = [
  { token: '--ep-component-transfer-list-list-background',         role: 'Panel background' },
  { token: '--ep-component-transfer-list-list-border-color',       role: 'Panel border' },
  { token: '--ep-component-transfer-list-list-border-radius',      role: 'Panel corner radius' },
  { token: '--ep-component-transfer-list-list-min-height',         role: 'List min height' },
  { token: '--ep-component-transfer-list-list-max-height',         role: 'List max height (scroll)' },
  { token: '--ep-component-transfer-list-list-width',              role: 'Panel fixed width' },
  { token: '--ep-component-transfer-list-header-background',       role: 'Header bg (default)' },
  { token: '--ep-component-transfer-list-header-selected-background', role: 'Header bg (items selected)' },
  { token: '--ep-component-transfer-list-header-color',            role: 'Header text' },
  { token: '--ep-component-transfer-list-header-padding-y',        role: 'Header vertical padding' },
  { token: '--ep-component-transfer-list-header-padding-x',        role: 'Header horizontal padding' },
  { token: '--ep-component-transfer-list-header-font-size',        role: 'Header font size' },
  { token: '--ep-component-transfer-list-header-font-weight',      role: 'Header font weight' },
  { token: '--ep-component-transfer-list-header-divider-color',    role: 'Header bottom border' },
  { token: '--ep-component-transfer-list-search-border-color',     role: 'Search area bottom border' },
  { token: '--ep-component-transfer-list-item-checkbox-gap',       role: 'Gap: checkbox → label' },
  { token: '--ep-component-transfer-list-controls-gap',            role: 'Gap between control buttons' },
  { token: '--ep-component-transfer-list-controls-width',          role: 'Controls column width' },
  { token: '--ep-component-transfer-list-count-color',             role: 'Item count text color' },
  { token: '--ep-component-transfer-list-count-font-size',         role: 'Item count font size' },
  { token: '--ep-component-transfer-list-empty-color',             role: 'Empty state text color' },
  { token: '--ep-component-transfer-list-empty-font-size',         role: 'Empty state font size' },
  { token: '--ep-component-transfer-list-focus-ring-color',        role: 'Focus ring color' },
  { token: '--ep-component-transfer-list-focus-ring-width',        role: 'Focus ring width' },
  { token: '--ep-component-transfer-list-focus-ring-offset',       role: 'Focus ring offset' },
];

export const TokenAudit: Story = {
  render: () => (
    <div style={{ fontFamily: 'system-ui', fontSize: 13 }}>
      <h3 style={{ margin: '0 0 16px', fontSize: 15 }}>
        TransferList — {TL_TOKENS.length} CSS custom properties
      </h3>
      <p style={{ margin: '0 0 16px', color: 'var(--ep-semantic-color-text-secondary)', fontSize: 12 }}>
        Control buttons use Button token namespace. List items use List token namespace.
        Checkboxes use Checkbox token namespace.
        TransferList tokens cover only the structural layout and panel-level design.
      </p>

      <div style={{ marginBottom: 20 }}>
        <ControlledTransferList
          initialLeft={GUESTS.slice(0, 4)}
          initialRight={GUESTS.slice(4, 6)}
          leftTitle="Available"
          rightTitle="Selected"
        />
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
            <th style={{ textAlign: 'left', padding: '6px 10px', color: '#6B7280', fontSize: 12 }}>Token</th>
            <th style={{ textAlign: 'left', padding: '6px 10px', color: '#6B7280', fontSize: 12 }}>Value</th>
            <th style={{ textAlign: 'left', padding: '6px 10px', color: '#6B7280', fontSize: 12 }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {TL_TOKENS.map(({ token, role }) => {
            const value = typeof window !== 'undefined'
              ? getComputedStyle(document.documentElement).getPropertyValue(token).trim()
              : '';
            const isColor = value.startsWith('#') || value.startsWith('rgb') || value === 'transparent';
            return (
              <tr key={token} style={{ borderBottom: '1px solid #F3F4F6' }}>
                <td style={{ padding: '6px 10px', fontFamily: 'monospace', fontSize: 11, color: '#374151' }}>
                  {token}
                </td>
                <td style={{ padding: '6px 10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {isColor && (
                      <span style={{
                        display: 'inline-block', width: 12, height: 12, borderRadius: 2,
                        background: value, border: '1px solid #E5E7EB', flexShrink: 0,
                      }} />
                    )}
                    <code style={{ fontSize: 11, color: '#6B7280' }}>{value || '—'}</code>
                  </div>
                </td>
                <td style={{ padding: '6px 10px', color: '#6B7280', fontSize: 12 }}>{role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: 'Live token audit. 25 CSS custom properties with resolved values.' },
    },
  },
};

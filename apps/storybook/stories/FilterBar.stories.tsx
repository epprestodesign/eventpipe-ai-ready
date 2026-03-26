import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  FilterBar,
  FilterChip,
  Button,
  Icon,
  Chip,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  Skeleton,
} from '@eventpipe/ui';
import type { FilterChipProps, FilterSelectItem } from '@eventpipe/ui';

// ─── Meta ────────────────────────────────────────────────────────────────────

const meta: Meta<typeof FilterBar> = {
  title: 'Components/Surfaces/FilterBar',
  component: FilterBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'FilterBar composes search input, dropdown selects, and active filter chips into a unified surface. ' +
          'Patterns used: MA-1 (FilterChip), MA-2 (debounced search), MA-3 (async options), C (toolbar state), E (loading), F (empty).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

// ─── Sample data ─────────────────────────────────────────────────────────────

interface Event {
  id:     string;
  name:   string;
  venue:  string;
  status: 'upcoming' | 'live' | 'completed' | 'cancelled';
  type:   string;
}

const ALL_EVENTS: Event[] = [
  { id: '1', name: 'Summit 2025',       venue: 'Madison Square Garden', status: 'upcoming',  type: 'conference' },
  { id: '2', name: 'Product Launch',    venue: 'Javits Center',          status: 'live',      type: 'launch'     },
  { id: '3', name: 'Q4 Kickoff',        venue: 'The Shed',               status: 'completed', type: 'internal'   },
  { id: '4', name: 'Spring Workshop',   venue: 'WeWork SOHO',            status: 'upcoming',  type: 'workshop'   },
  { id: '5', name: 'Annual Gala',       venue: 'Cipriani 42nd Street',   status: 'cancelled', type: 'gala'       },
  { id: '6', name: 'Dev Conf',          venue: 'Javits Center',          status: 'upcoming',  type: 'conference' },
];

const STATUS_COLOR: Record<Event['status'], 'success' | 'error' | 'warning' | 'neutral'> = {
  upcoming:  'neutral',
  live:      'success',
  completed: 'neutral',
  cancelled: 'error',
};

// Simple event table used in multiple stories
const EventTable = ({ events, isLoading }: { events: Event[]; isLoading?: boolean }) => (
  <Table size="md">
    <TableHead>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Venue</TableHeaderCell>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {isLoading ? (
        Array.from({ length: 4 }).map((_, i) => (
          <TableRow key={i} hover={false}>
            {[120, 100, 80, 80].map((w, j) => (
              <TableCell key={j}><Skeleton variant="text" width={w} /></TableCell>
            ))}
          </TableRow>
        ))
      ) : events.length === 0 ? (
        // Pattern F: filtered empty state
        <TableRow hover={false}>
          <TableCell colSpan={4} align="center" padding="none">
            <div style={{ padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Icon name="filter" size="lg" />
              <div style={{ fontWeight: 600 }}>No events match the filters</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--ep-semantic-color-text-secondary)' }}>
                Try removing some filters to see more results.
              </div>
            </div>
          </TableCell>
        </TableRow>
      ) : (
        events.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.venue}</TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell>
              <Chip
                label={row.status}
                variant="soft"
                color={STATUS_COLOR[row.status]}
                size="sm"
              />
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  </Table>
);

// ─── Story 1: Default ────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <FilterBar
        actions={
          <Button variant="outlined" size="sm" startSlot={<Icon name="download" size="sm" />}>
            Export
          </Button>
        }
      />
      <EventTable events={ALL_EVENTS} />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: 'FilterBar with only the actions slot. No search or filters.' },
    },
  },
};

// ─── Story 2: WithSearch ─────────────────────────────────────────────────────

export const WithSearch: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    const filtered = ALL_EVENTS.filter(e =>
      e.name.toLowerCase().includes(query.toLowerCase()) ||
      e.venue.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <FilterBar
          searchValue={query}
          onSearchChange={setQuery}
          searchPlaceholder="Search events..."
          searchDebounceMs={300}
          actions={
            <Button variant="outlined" size="sm">Export</Button>
          }
        />
        <EventTable events={filtered} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Search field with MA-2 debounce (300ms). The table filters in real-time. ' +
          'Pattern F empty state appears when no events match.',
      },
    },
  },
};

// ─── Story 3: WithFilters ────────────────────────────────────────────────────

export const WithFilters: Story = {
  render: () => {
    const [query, setQuery]         = useState('');
    const [activeFilters, setActive] = useState<FilterChipProps[]>([
      { id: 'status-live',      label: 'Status: Live',       onRemove: () => {} },
      { id: 'type-conference',  label: 'Type: Conference',   onRemove: () => {} },
    ]);

    // Wire up onRemove now that setActive is in scope
    const filters = activeFilters.map(f => ({
      ...f,
      onRemove: () => setActive(prev => prev.filter(x => x.id !== f.id)),
    }));

    const filtered = ALL_EVENTS.filter(e => {
      if (query && !e.name.toLowerCase().includes(query.toLowerCase())) return false;
      const statusFilter = filters.find(f => f.id.startsWith('status-'));
      if (statusFilter && !statusFilter.label.includes(e.status)) return false;
      const typeFilter = filters.find(f => f.id.startsWith('type-'));
      if (typeFilter && !typeFilter.label.toLowerCase().includes(e.type)) return false;
      return true;
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <FilterBar
          searchValue={query}
          onSearchChange={setQuery}
          searchPlaceholder="Search events..."
          activeFilters={filters}
          onClearAll={() => setActive([])}
          actions={
            <Button variant="outlined" size="sm" startSlot={<Icon name="filter" size="sm" />}>
              Add filter
            </Button>
          }
        />
        <EventTable events={filtered} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Active filter chips using MA-1 FilterChip pattern. ' +
          'Each chip has an × to remove its filter. Clear all removes all chips.',
      },
    },
  },
};

// ─── Story 4: WithAsyncFilters ───────────────────────────────────────────────

export const WithAsyncFilters: Story = {
  render: () => {
    const [statusValue,  setStatusValue]  = useState('');
    const [typeValue,    setTypeValue]    = useState('');
    const [statusLoading, setStatusLoading] = useState(true);
    const [typeLoading,   setTypeLoading]   = useState(true);
    const [statusOpts, setStatusOpts]    = useState<Array<{ value: string; label: string }>>([]);
    const [typeOpts,   setTypeOpts]      = useState<Array<{ value: string; label: string }>>([]);
    const [activeFilters, setActive]     = useState<FilterChipProps[]>([]);

    // Simulate async option fetch — MA-3 pattern
    useEffect(() => {
      const t = setTimeout(() => {
        setStatusOpts([
          { value: 'upcoming',  label: 'Upcoming'  },
          { value: 'live',      label: 'Live'       },
          { value: 'completed', label: 'Completed'  },
          { value: 'cancelled', label: 'Cancelled'  },
        ]);
        setStatusLoading(false);
      }, 1200);
      return () => clearTimeout(t);
    }, []);

    useEffect(() => {
      const t = setTimeout(() => {
        setTypeOpts([
          { value: 'conference', label: 'Conference' },
          { value: 'launch',     label: 'Launch'     },
          { value: 'workshop',   label: 'Workshop'   },
          { value: 'internal',   label: 'Internal'   },
          { value: 'gala',       label: 'Gala'       },
        ]);
        setTypeLoading(false);
      }, 1800);
      return () => clearTimeout(t);
    }, []);

    const handleStatusChange = (v: string) => {
      setStatusValue(v);
      const label = statusOpts.find(o => o.value === v)?.label ?? v;
      setActive(prev => [
        ...prev.filter(f => !f.id.startsWith('status-')),
        { id: `status-${v}`, label: `Status: ${label}`, onRemove: () => {} },
      ]);
    };

    const handleTypeChange = (v: string) => {
      setTypeValue(v);
      const label = typeOpts.find(o => o.value === v)?.label ?? v;
      setActive(prev => [
        ...prev.filter(f => !f.id.startsWith('type-')),
        { id: `type-${v}`, label: `Type: ${label}`, onRemove: () => {} },
      ]);
    };

    const filters = activeFilters.map(f => ({
      ...f,
      onRemove: () => setActive(prev => prev.filter(x => x.id !== f.id)),
    }));

    const filtered = ALL_EVENTS.filter(e => {
      if (statusValue && e.status !== statusValue) return false;
      if (typeValue   && e.type   !== typeValue)   return false;
      return true;
    });

    const selectFilters: FilterSelectItem[] = [
      {
        id: 'status',
        label: 'Status',
        options: statusOpts,
        value: statusValue,
        onChange: handleStatusChange,
        loading: statusLoading,
        placeholder: 'All statuses',
      },
      {
        id: 'type',
        label: 'Type',
        options: typeOpts,
        value: typeValue,
        onChange: handleTypeChange,
        loading: typeLoading,
        placeholder: 'All types',
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <FilterBar
          selectFilters={selectFilters}
          activeFilters={filters}
          onClearAll={() => { setActive([]); setStatusValue(''); setTypeValue(''); }}
        />
        <EventTable events={filtered} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Select filters with MA-3 async option loading. ' +
          'Options arrive after 1.2s and 1.8s. Select shows spinner + blocks interaction while loading. ' +
          'Selecting an option creates an active FilterChip.',
      },
    },
  },
};

// ─── Story 5: Loading ────────────────────────────────────────────────────────

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <FilterBar
        searchValue=""
        onSearchChange={() => {}}
        isLoading={true}
        actions={
          <Button variant="outlined" size="sm" disabled>Export</Button>
        }
      />
      <EventTable events={[]} isLoading={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Pattern E: loading state. FilterBar chips area shows Skeleton placeholders. ' +
          'Table body also shows Skeleton rows (matched to page size).',
      },
    },
  },
};

// ─── Story 6: Empty ──────────────────────────────────────────────────────────

export const Empty: Story = {
  render: () => {
    const [activeFilters, setActive] = useState<FilterChipProps[]>([
      { id: 'status-cancelled', label: 'Status: Cancelled', onRemove: () => {} },
      { id: 'type-gala',        label: 'Type: Gala',        onRemove: () => {} },
    ]);

    const filters = activeFilters.map(f => ({
      ...f,
      onRemove: () => setActive(prev => prev.filter(x => x.id !== f.id)),
    }));

    // Apply filters — result is empty (no cancelled galas in data)
    const filtered = ALL_EVENTS.filter(e => e.status === 'cancelled' && e.type === 'gala');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <FilterBar
          activeFilters={filters}
          onClearAll={() => setActive([])}
        />
        <EventTable events={filtered} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Pattern F: filtered empty state. Two active filters produce zero results. ' +
          'The "No events match" state renders inside a full-colSpan TableCell. ' +
          'Remove a chip or click Clear all to restore results.',
      },
    },
  },
};

// ─── Story 7: Accessibility ──────────────────────────────────────────────────

export const Accessibility: Story = {
  render: () => {
    const [query,         setQuery]   = useState('');
    const [activeFilters, setActive]  = useState<FilterChipProps[]>([
      { id: 'type-conference', label: 'Type: Conference', onRemove: () => {} },
    ]);

    const filters = activeFilters.map(f => ({
      ...f,
      onRemove: () => setActive(prev => prev.filter(x => x.id !== f.id)),
    }));

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 13, color: 'var(--ep-semantic-color-text-secondary)', lineHeight: 1.6 }}>
          <strong>Keyboard behaviour:</strong>
          <ul style={{ margin: '4px 0 0', paddingLeft: 20 }}>
            <li>Tab → Search field</li>
            <li>Tab → FilterChip (focus ring on chip)</li>
            <li>Tab → × button on chip (delete chip)</li>
            <li>Tab → Clear all button</li>
            <li>aria-live="polite" announces active filter count to screen readers</li>
            <li>FilterChip delete button has implicit aria-label from MUI Chip</li>
          </ul>
        </div>
        <FilterBar
          searchValue={query}
          onSearchChange={setQuery}
          searchPlaceholder="Search events..."
          activeFilters={filters}
          onClearAll={() => setActive([])}
          actions={<Button variant="outlined" size="sm">Export</Button>}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates keyboard navigation and ARIA attributes. ' +
          'Tab through: search → chip → × button → clear all → actions. ' +
          'Filter count is announced via aria-live="polite".',
      },
    },
  },
};

// ─── Story 8: TokenAudit ─────────────────────────────────────────────────────

const FILTER_BAR_TOKENS: Array<{ token: string; role: string }> = [
  { token: '--ep-component-filter-bar-background',          role: 'Container background' },
  { token: '--ep-component-filter-bar-border-radius',       role: 'Container radius' },
  { token: '--ep-component-filter-bar-padding-sm-y',        role: 'Vertical padding (sm)' },
  { token: '--ep-component-filter-bar-padding-sm-x',        role: 'Horizontal padding (sm)' },
  { token: '--ep-component-filter-bar-padding-md-y',        role: 'Vertical padding (md)' },
  { token: '--ep-component-filter-bar-padding-md-x',        role: 'Horizontal padding (md)' },
  { token: '--ep-component-filter-bar-padding-lg-y',        role: 'Vertical padding (lg)' },
  { token: '--ep-component-filter-bar-padding-lg-x',        role: 'Horizontal padding (lg)' },
  { token: '--ep-component-filter-bar-gap-sm',              role: 'Element gap (sm)' },
  { token: '--ep-component-filter-bar-gap-md',              role: 'Element gap (md)' },
  { token: '--ep-component-filter-bar-gap-lg',              role: 'Element gap (lg)' },
  { token: '--ep-component-filter-bar-chip-gap-sm',         role: 'Chip gap (sm)' },
  { token: '--ep-component-filter-bar-chip-gap-md',         role: 'Chip gap (md)' },
  { token: '--ep-component-filter-bar-chip-gap-lg',         role: 'Chip gap (lg)' },
  { token: '--ep-component-filter-bar-search-min-width',    role: 'Search field min width' },
  { token: '--ep-component-filter-bar-search-max-width',    role: 'Search field max width' },
  { token: '--ep-component-filter-bar-divider-color',       role: 'Section divider color' },
  { token: '--ep-component-filter-bar-divider-height',      role: 'Section divider height' },
  { token: '--ep-component-filter-bar-count-color',         role: 'Active filter count text color' },
  { token: '--ep-component-filter-bar-count-font-size',     role: 'Active filter count font size' },
];

export const TokenAudit: Story = {
  render: () => (
    <div style={{ fontFamily: 'system-ui', fontSize: 13 }}>
      <h3 style={{ margin: '0 0 16px', fontSize: 15 }}>
        FilterBar — {FILTER_BAR_TOKENS.length} CSS custom properties
      </h3>
      <p style={{ margin: '0 0 16px', color: 'var(--ep-semantic-color-text-secondary)', fontSize: 12 }}>
        FilterChip has no own tokens — composes Chip token namespace ({' '}
        <code>--ep-component-chip-*</code>). Select and TextField use their own namespaces.
      </p>

      {/* Live render */}
      <div style={{ marginBottom: 20, padding: 16, border: '1px solid var(--ep-semantic-color-divider)', borderRadius: 4 }}>
        <FilterBar
          searchValue=""
          onSearchChange={() => {}}
          searchPlaceholder="Search..."
          activeFilters={[
            { id: 'a', label: 'Status: Live',     onRemove: () => {} },
            { id: 'b', label: 'Type: Conference', onRemove: () => {} },
          ]}
          onClearAll={() => {}}
          actions={<Button variant="outlined" size="sm">Export</Button>}
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
          {FILTER_BAR_TOKENS.map(({ token, role }) => {
            const value = typeof window !== 'undefined'
              ? getComputedStyle(document.documentElement).getPropertyValue(token).trim()
              : '';
            const isColor = value.startsWith('#') || value.startsWith('rgb') || value === 'transparent';
            return (
              <tr key={token} style={{ borderBottom: '1px solid #F3F4F6' }}>
                <td style={{ padding: '6px 10px', fontFamily: 'monospace', fontSize: 11, color: '#374151' }}>
                  {token}
                </td>
                <td style={{ padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
                  {isColor && (
                    <span style={{
                      display: 'inline-block', width: 12, height: 12, borderRadius: 2,
                      background: value, border: '1px solid #E5E7EB', flexShrink: 0,
                    }} />
                  )}
                  <code style={{ fontSize: 11, color: '#6B7280' }}>{value || '—'}</code>
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
      description: { story: 'Live token audit. All 20 CSS custom properties with resolved values.' },
    },
  },
};

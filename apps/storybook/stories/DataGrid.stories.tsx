import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid, FilterBar } from '@eventpipe/ui';
import type { ColumnDef, RowAction } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof DataGrid> = {
  title: 'Components/Data/DataGrid',
  component: DataGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'DataGrid — production-ready data table built by composing Table, FilterBar, ' +
          'Pagination, Checkbox, and Menu. ' +
          'Patterns: B (selection), C (bulk toolbar state), E (loading), F (empty). ' +
          'Sorting and pagination are client-side by default.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

// ─── Sample data ──────────────────────────────────────────────────────────────

interface EventRow {
  id: string;
  name: string;
  date: string;
  venue: string;
  capacity: number;
  status: 'published' | 'draft' | 'cancelled';
}

const SAMPLE_EVENTS: EventRow[] = [
  { id: 'e1',  name: 'Summer Gala 2026',         date: '2026-07-12', venue: 'Grand Ballroom',     capacity: 500,  status: 'published' },
  { id: 'e2',  name: 'Tech Summit SF',            date: '2026-08-03', venue: 'Convention Center',  capacity: 1200, status: 'published' },
  { id: 'e3',  name: 'Q3 Team Offsite',           date: '2026-09-15', venue: 'Retreat Lodge',      capacity: 80,   status: 'draft' },
  { id: 'e4',  name: 'Product Launch Party',      date: '2026-10-01', venue: 'Rooftop Venue',      capacity: 300,  status: 'published' },
  { id: 'e5',  name: 'Annual Fundraiser',         date: '2026-11-20', venue: 'City Hall',          capacity: 750,  status: 'draft' },
  { id: 'e6',  name: 'Design Conference',         date: '2026-06-18', venue: 'Museum Atrium',      capacity: 400,  status: 'cancelled' },
  { id: 'e7',  name: 'Engineering All-Hands',     date: '2026-07-30', venue: 'HQ Auditorium',      capacity: 200,  status: 'published' },
  { id: 'e8',  name: 'Investor Roundtable',       date: '2026-08-14', venue: 'Executive Suite',    capacity: 40,   status: 'draft' },
  { id: 'e9',  name: 'Community Meetup',          date: '2026-09-22', venue: 'Co-Working Space',   capacity: 120,  status: 'published' },
  { id: 'e10', name: 'Hackathon Weekend',         date: '2026-10-10', venue: 'Innovation Lab',     capacity: 250,  status: 'published' },
  { id: 'e11', name: 'Holiday Party',             date: '2026-12-19', venue: 'Rooftop Venue',      capacity: 350,  status: 'draft' },
  { id: 'e12', name: 'Spring Kickoff',            date: '2026-03-08', venue: 'Grand Ballroom',     capacity: 600,  status: 'cancelled' },
];

// ─── Status chip renderer ─────────────────────────────────────────────────────

const STATUS_COLORS: Record<EventRow['status'], { bg: string; color: string }> = {
  published: { bg: '#D1FAE5', color: '#065F46' },
  draft:     { bg: '#FEF3C7', color: '#92400E' },
  cancelled: { bg: '#FEE2E2', color: '#991B1B' },
};

const StatusBadge = ({ status }: { status: EventRow['status'] }) => {
  const { bg, color } = STATUS_COLORS[status];
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: 12,
        fontSize: 11,
        fontWeight: 600,
        background: bg,
        color,
        textTransform: 'capitalize',
      }}
    >
      {status}
    </span>
  );
};

// ─── Column definitions ───────────────────────────────────────────────────────

const BASE_COLUMNS: ColumnDef<EventRow>[] = [
  { id: 'name',     header: 'Event name',  accessor: r => r.name,     sortable: true },
  { id: 'date',     header: 'Date',        accessor: r => r.date,     sortable: true, width: 120 },
  { id: 'venue',    header: 'Venue',       accessor: r => r.venue,    sortable: true },
  { id: 'capacity', header: 'Capacity',    accessor: r => r.capacity, sortable: true, align: 'right', width: 100 },
  {
    id: 'status',
    header: 'Status',
    accessor: r => r.status,
    sortable: true,
    width: 120,
    renderCell: r => <StatusBadge status={r.status} />,
  },
];

const ROW_ACTIONS: RowAction<EventRow>[] = [
  { id: 'edit',      label: 'Edit event',   icon: 'edit',   onClick: r => alert(`Edit: ${r.name}`) },
  { id: 'duplicate', label: 'Duplicate',    icon: 'add',    onClick: r => alert(`Duplicate: ${r.name}`) },
  { id: 'delete',    label: 'Delete event', icon: 'delete', onClick: r => alert(`Delete: ${r.name}`), destructive: true },
];

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Default — read-only DataGrid with no interactive features enabled.
 */
export const Default: Story = {
  render: () => (
    <DataGrid<EventRow>
      rows={SAMPLE_EVENTS.slice(0, 6)}
      columns={BASE_COLUMNS}
      getRowId={r => r.id}
      title="Events"
    />
  ),
};

/**
 * Sorting — all columns sortable. Click a header to sort, click again to reverse.
 * Arrow icons follow the existing TableHeaderCell sort pattern (Wave 3A).
 */
export const Sorting: Story = {
  render: () => (
    <DataGrid<EventRow>
      rows={SAMPLE_EVENTS}
      columns={BASE_COLUMNS}
      getRowId={r => r.id}
      title="Events"
      sortable
    />
  ),
};

/**
 * Selection — row checkboxes + select-all. Selection state is internal;
 * onSelectionChange fires on every change with the full Set<string>.
 */
export const Selection: Story = {
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    return (
      <div>
        <div style={{ marginBottom: 8, fontSize: 13, color: '#6B7280' }}>
          Selected IDs: {selected.size === 0 ? 'none' : [...selected].join(', ')}
        </div>
        <DataGrid<EventRow>
          rows={SAMPLE_EVENTS.slice(0, 6)}
          columns={BASE_COLUMNS}
          getRowId={r => r.id}
          selectable
          onSelectionChange={setSelected}
        />
      </div>
    );
  },
};

/**
 * BulkSelectionToolbar — Pattern C: toolbar background switches to selectedBackground
 * token when selectionCount > 0. Bulk "Clear selection" button resets state.
 */
export const BulkSelectionToolbar: Story = {
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    return (
      <DataGrid<EventRow>
        rows={SAMPLE_EVENTS.slice(0, 6)}
        columns={BASE_COLUMNS}
        getRowId={r => r.id}
        title="Events"
        toolbarActions={
          <button
            style={{ padding: '6px 12px', borderRadius: 4, border: '1px solid #E5E7EB', cursor: 'pointer', fontSize: 13 }}
            onClick={() => alert('Export')}
          >
            Export
          </button>
        }
        selectable
        onSelectionChange={setSelected}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Select one or more rows to see the toolbar switch to the selected-background ' +
          'token. Pattern C: state-driven visual affordance via selectionCount.',
      },
    },
  },
};

/**
 * WithFilters — FilterBar slot rendered above the Table.
 * DataGrid does not manage filter state — consumer provides a configured FilterBar.
 */
export const WithFilters: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    const filtered = SAMPLE_EVENTS.filter(e =>
      search === '' ||
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.venue.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <DataGrid<EventRow>
        rows={filtered}
        columns={BASE_COLUMNS}
        getRowId={r => r.id}
        filterBar={
          <FilterBar
            onSearchChange={setSearch}
            searchPlaceholder="Search events or venues…"
          />
        }
        emptyMessage="No events match your search"
        selectable
        sortable
      />
    );
  },
};

/**
 * WithPagination — client-side pagination slices the rows array.
 * Pagination controls appear when pageCount > 1.
 */
export const WithPagination: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <DataGrid<EventRow>
        rows={SAMPLE_EVENTS}
        columns={BASE_COLUMNS}
        getRowId={r => r.id}
        title="All events"
        sortable
        pagination
        pageSize={4}
        page={page}
        onPageChange={setPage}
      />
    );
  },
};

/**
 * Loading — isLoading=true renders skeleton rows (Pattern E).
 * Column count and selection column are respected in skeleton layout.
 */
export const Loading: Story = {
  render: () => (
    <DataGrid<EventRow>
      rows={[]}
      columns={BASE_COLUMNS}
      getRowId={r => r.id}
      title="Events"
      selectable
      loading
    />
  ),
};

/**
 * Empty — no rows, loading=false renders empty state (Pattern F).
 * Full-width row with search icon and emptyMessage.
 */
export const Empty: Story = {
  render: () => (
    <DataGrid<EventRow>
      rows={[]}
      columns={BASE_COLUMNS}
      getRowId={r => r.id}
      title="Events"
      emptyMessage="No events found"
    />
  ),
};

/**
 * RowActions — per-row ⋮ button opens a Menu. Non-destructive actions first;
 * destructive (Delete) after MenuDivider. One Menu instance per grid.
 */
export const RowActions: Story = {
  render: () => (
    <DataGrid<EventRow>
      rows={SAMPLE_EVENTS.slice(0, 5)}
      columns={BASE_COLUMNS}
      getRowId={r => r.id}
      title="Events"
      rowActions={ROW_ACTIONS}
    />
  ),
};

/**
 * Accessibility — annotates ARIA structure.
 * - Table has implicit role="grid" via semantics
 * - Select-all: aria-label="Select all rows on this page"
 * - Row checkboxes: aria-label="Select row {id}"
 * - Row actions trigger: aria-label="Row actions"
 * - Bulk toolbar: role="toolbar" + aria-live="polite"
 */
export const Accessibility: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '- `<table>` with `<thead>` / `<tbody>` provides correct grid semantics.\n' +
          '- Select-all checkbox: `aria-label="Select all rows on this page"`.\n' +
          '- Row checkboxes: `aria-label="Select row {id}"`.\n' +
          '- Row action trigger: `aria-label="Row actions"`.\n' +
          '- Toolbar: `role="toolbar"` + `aria-live="polite"` (from TableToolbar).\n' +
          '- Sort headers: `aria-sort` derived from `sortDirection` (from TableHeaderCell).\n' +
          '- Keyboard: Tab/Enter/Space for checkboxes, Enter for sort headers.',
      },
    },
  },
  render: () => (
    <DataGrid<EventRow>
      rows={SAMPLE_EVENTS.slice(0, 5)}
      columns={BASE_COLUMNS}
      getRowId={r => r.id}
      title="Events"
      selectable
      sortable
      rowActions={ROW_ACTIONS}
    />
  ),
};

/**
 * TokenAudit — all 10 DataGrid component tokens.
 * Row/cell/header tokens are in the Table namespace and not duplicated here.
 */
export const TokenAudit: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'DataGrid adds 10 component tokens. ' +
          'Row/cell/header/toolbar tokens delegate to `--ep-component-table-*`.',
      },
    },
  },
  render: () => {
    const tokens = [
      '--ep-component-data-grid-container-background',
      '--ep-component-data-grid-container-border-color',
      '--ep-component-data-grid-container-border-radius',
      '--ep-component-data-grid-footer-padding-y',
      '--ep-component-data-grid-footer-padding-x',
      '--ep-component-data-grid-footer-border-color',
      '--ep-component-data-grid-empty-padding-y',
      '--ep-component-data-grid-empty-color',
      '--ep-component-data-grid-empty-font-size',
      '--ep-component-data-grid-actions-column-width',
    ];
    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <div style={{ marginBottom: 16, fontWeight: 700, fontSize: 14 }}>
          DataGrid — 10 component tokens
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
                    ref={el => {
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

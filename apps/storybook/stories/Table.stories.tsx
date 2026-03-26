import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  TableToolbar,
  Checkbox,
  Button,
  Icon,
  Menu,
  MenuItem,
  MenuDivider,
  Skeleton,
  Pagination,
  Chip,
} from '@eventpipe/ui';
import type { SortDirection } from '@eventpipe/ui';

// ─── Sample data ────────────────────────────────────────────────────────────

interface Event {
  id:     string;
  name:   string;
  venue:  string;
  date:   string;
  status: 'upcoming' | 'live' | 'completed' | 'cancelled';
}

const SAMPLE_EVENTS: Event[] = [
  { id: '1', name: 'Summer Gala 2026',        venue: 'Grand Ballroom',    date: '2026-06-15', status: 'upcoming'  },
  { id: '2', name: 'Product Launch Event',    venue: 'Rooftop Terrace',   date: '2026-03-28', status: 'live'      },
  { id: '3', name: 'Annual Charity Dinner',   venue: 'Crystal Hall',      date: '2026-02-14', status: 'completed' },
  { id: '4', name: 'Tech Conference 2026',    venue: 'Convention Center',  date: '2026-09-10', status: 'upcoming'  },
  { id: '5', name: 'Holiday Reception',       venue: 'Garden Pavilion',    date: '2025-12-20', status: 'cancelled' },
];

const STATUS_COLORS: Record<Event['status'], 'primary' | 'success' | 'neutral' | 'error'> = {
  upcoming:  'primary',
  live:      'success',
  completed: 'neutral',
  cancelled: 'error',
};

// ─── Meta ────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Surfaces/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    size:         { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    stickyHeader: { control: 'boolean' },
  },
  args: {
    size: 'md',
    stickyHeader: false,
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Story 1: Basic ──────────────────────────────────────────────────────────

export const Basic: Story = {
  name: 'Basic',
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow hover={false}>
          <TableHeaderCell>Event name</TableHeaderCell>
          <TableHeaderCell>Venue</TableHeaderCell>
          <TableHeaderCell>Date</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {SAMPLE_EVENTS.map((event) => (
          <TableRow key={event.id}>
            <TableCell>{event.name}</TableCell>
            <TableCell>{event.venue}</TableCell>
            <TableCell>{event.date}</TableCell>
            <TableCell>
              <Chip
                label={event.status}
                color={STATUS_COLORS[event.status]}
                variant="soft"
                size="sm"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// ─── Story 2: Selectable rows ────────────────────────────────────────────────

export const SelectableRows: Story = {
  name: 'Selectable rows',
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = React.useState<Set<string>>(new Set());

    const allSelected  = selected.size === SAMPLE_EVENTS.length;
    const someSelected = selected.size > 0 && selected.size < SAMPLE_EVENTS.length;

    const toggleAll = () => {
      setSelected(allSelected ? new Set() : new Set(SAMPLE_EVENTS.map((e) => e.id)));
    };
    const toggleRow = (id: string) => {
      setSelected((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      });
    };

    return (
      <div>
        <TableToolbar
          title="Events"
          selectionCount={selected.size}
          selectionTitle={`${selected.size} row${selected.size !== 1 ? 's' : ''} selected`}
          actions={
            <Button variant="outlined" size="sm">
              Export
            </Button>
          }
          selectionActions={
            <Button variant="outlined" size="sm" color="error">
              Delete selected
            </Button>
          }
        />
        <Table {...args}>
          <TableHead>
            <TableRow hover={false}>
              <TableHeaderCell padding="checkbox">
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={toggleAll}
                  aria-label="Select all rows"
                  size="sm"
                />
              </TableHeaderCell>
              <TableHeaderCell>Event name</TableHeaderCell>
              <TableHeaderCell>Venue</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SAMPLE_EVENTS.map((event) => (
              <TableRow key={event.id} selected={selected.has(event.id)}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.has(event.id)}
                    onChange={() => toggleRow(event.id)}
                    aria-label={`Select ${event.name}`}
                    size="sm"
                  />
                </TableCell>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.venue}</TableCell>
                <TableCell>
                  <Chip
                    label={event.status}
                    color={STATUS_COLORS[event.status]}
                    variant="soft"
                    size="sm"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

// ─── Story 3: Sortable headers ───────────────────────────────────────────────

export const SortableHeaders: Story = {
  name: 'Sortable headers',
  render: (args) => {
    type SortField = 'name' | 'venue' | 'date';

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortField, setSortField] = React.useState<SortField>('name');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortDir, setSortDir]     = React.useState<'asc' | 'desc'>('asc');

    const handleSort = (field: SortField) => {
      if (sortField === field) {
        setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
      } else {
        setSortField(field);
        setSortDir('asc');
      }
    };

    const dirFor = (field: SortField): SortDirection =>
      sortField === field ? sortDir : false;

    const sorted = [...SAMPLE_EVENTS].sort((a, b) => {
      const val = a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0;
      return sortDir === 'asc' ? val : -val;
    });

    return (
      <Table {...args}>
        <TableHead>
          <TableRow hover={false}>
            <TableHeaderCell
              sortDirection={dirFor('name')}
              onSort={() => handleSort('name')}
            >
              Event name
            </TableHeaderCell>
            <TableHeaderCell
              sortDirection={dirFor('venue')}
              onSort={() => handleSort('venue')}
            >
              Venue
            </TableHeaderCell>
            <TableHeaderCell
              sortDirection={dirFor('date')}
              onSort={() => handleSort('date')}
            >
              Date
            </TableHeaderCell>
            {/* Non-sortable column — no sortDirection or onSort */}
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sorted.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.venue}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>
                <Chip
                  label={event.status}
                  color={STATUS_COLORS[event.status]}
                  variant="soft"
                  size="sm"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// ─── Story 4: Loading state ──────────────────────────────────────────────────

export const LoadingState: Story = {
  name: 'Loading state',
  render: (args) => {
    const COLUMN_COUNT = 4;
    const SKELETON_ROWS = 5;

    return (
      <Table {...args}>
        <TableHead>
          <TableRow hover={false}>
            <TableHeaderCell>Event name</TableHeaderCell>
            <TableHeaderCell>Venue</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: SKELETON_ROWS }).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow key={`skeleton-${i}`} hover={false}>
              {Array.from({ length: COLUMN_COUNT }).map((__, j) => (
                // eslint-disable-next-line react/no-array-index-key
                <TableCell key={j}>
                  {/* Width varies to mimic realistic content widths */}
                  <Skeleton variant="text" width={`${60 + ((i + j * 3) % 4) * 10}%`} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// ─── Story 5: Empty state ────────────────────────────────────────────────────

export const EmptyState: Story = {
  name: 'Empty state',
  render: (args) => {
    const COLUMN_COUNT = 4;

    return (
      <Table {...args}>
        <TableHead>
          <TableRow hover={false}>
            <TableHeaderCell>Event name</TableHeaderCell>
            <TableHeaderCell>Venue</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={false}>
            <TableCell colSpan={COLUMN_COUNT} padding="none">
              <div
                style={{
                  display:        'flex',
                  flexDirection:  'column',
                  alignItems:     'center',
                  gap:            12,
                  padding:        '48px 24px',
                  textAlign:      'center',
                }}
              >
                <Icon name="calendar" size="lg" label="No events" />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 4 }}>
                    No events yet
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--ep-semantic-color-text-secondary)' }}>
                    Create your first event to start managing your calendar.
                  </div>
                </div>
                <Button variant="contained" size="sm">
                  Create event
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

// ─── Story 6: Row actions ────────────────────────────────────────────────────

export const WithRowActions: Story = {
  name: 'With row actions',
  render: (args) => {
    // Single Menu instance anchored by row id — not one per row
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchor, setAnchor] = React.useState<{
      el: HTMLElement;
      id: string;
    } | null>(null);

    return (
      <div>
        <Table {...args}>
          <TableHead>
            <TableRow hover={false}>
              <TableHeaderCell>Event name</TableHeaderCell>
              <TableHeaderCell>Venue</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell padding="none" align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {SAMPLE_EVENTS.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.venue}</TableCell>
                <TableCell>
                  <Chip
                    label={event.status}
                    color={STATUS_COLORS[event.status]}
                    variant="soft"
                    size="sm"
                  />
                </TableCell>
                <TableCell padding="none" align="right">
                  <Button
                    variant="text"
                    size="sm"
                    aria-label="Row actions"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      setAnchor({ el: e.currentTarget, id: event.id })
                    }
                  >
                    <Icon name="more-vertical" size="sm" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Single Menu instance — open state gated by matching row id */}
        <Menu
          anchorEl={anchor?.el ?? null}
          open={Boolean(anchor)}
          onClose={() => setAnchor(null)}
        >
          <MenuItem onClick={() => setAnchor(null)}>
            <Icon name="edit" size="sm" />
            Edit event
          </MenuItem>
          <MenuItem onClick={() => setAnchor(null)}>
            <Icon name="visibility" size="sm" />
            View details
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => setAnchor(null)}>
            <Icon name="delete" size="sm" />
            Delete event
          </MenuItem>
        </Menu>
      </div>
    );
  },
};

// ─── Story 7: Full featured ──────────────────────────────────────────────────

export const FullFeatured: Story = {
  name: 'Full featured',
  render: (args) => {
    type SortField = 'name' | 'venue' | 'date';

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected]   = React.useState<Set<string>>(new Set());
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortField, setSortField] = React.useState<SortField>('name');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortDir, setSortDir]     = React.useState<'asc' | 'desc'>('asc');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage]           = React.useState(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchor, setAnchor]       = React.useState<{ el: HTMLElement; id: string } | null>(null);

    const allSelected  = selected.size === SAMPLE_EVENTS.length;
    const someSelected = selected.size > 0 && selected.size < SAMPLE_EVENTS.length;

    const toggleAll = () =>
      setSelected(allSelected ? new Set() : new Set(SAMPLE_EVENTS.map((e) => e.id)));
    const toggleRow = (id: string) =>
      setSelected((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      });

    const handleSort = (field: SortField) => {
      if (sortField === field) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
      else { setSortField(field); setSortDir('asc'); }
    };
    const dirFor = (field: SortField): SortDirection =>
      sortField === field ? sortDir : false;

    const sorted = [...SAMPLE_EVENTS].sort((a, b) => {
      const v = a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0;
      return sortDir === 'asc' ? v : -v;
    });

    // 5 columns: checkbox + name + venue + status + actions
    const COLUMN_COUNT = 5;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <TableToolbar
          title="Events"
          selectionCount={selected.size}
          selectionTitle={`${selected.size} row${selected.size !== 1 ? 's' : ''} selected`}
          actions={
            <>
              <Button variant="outlined" size="sm" startSlot={<Icon name="download" size="sm" />}>
                Export
              </Button>
              <Button variant="contained" size="sm" startSlot={<Icon name="add" size="sm" />}>
                Create event
              </Button>
            </>
          }
          selectionActions={
            <Button variant="outlined" size="sm" color="error">
              Delete selected
            </Button>
          }
        />

        <Table {...args}>
          <TableHead>
            <TableRow hover={false}>
              <TableHeaderCell padding="checkbox">
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={toggleAll}
                  aria-label="Select all rows"
                  size="sm"
                />
              </TableHeaderCell>
              <TableHeaderCell sortDirection={dirFor('name')}  onSort={() => handleSort('name')}>Event name</TableHeaderCell>
              <TableHeaderCell sortDirection={dirFor('venue')} onSort={() => handleSort('venue')}>Venue</TableHeaderCell>
              <TableHeaderCell sortDirection={dirFor('date')}  onSort={() => handleSort('date')}>Date</TableHeaderCell>
              <TableHeaderCell padding="none" align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {sorted.map((event) => (
              <TableRow key={event.id} selected={selected.has(event.id)}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.has(event.id)}
                    onChange={() => toggleRow(event.id)}
                    aria-label={`Select ${event.name}`}
                    size="sm"
                  />
                </TableCell>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.venue}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell padding="none" align="right">
                  <Button
                    variant="text"
                    size="sm"
                    aria-label="Row actions"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      setAnchor({ el: e.currentTarget, id: event.id })
                    }
                  >
                    <Icon name="more-vertical" size="sm" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 12 }}>
          <Pagination
            count={Math.ceil(SAMPLE_EVENTS.length / 10) || 1}
            page={page}
            onChange={(p) => setPage(p)}
            variant="outlined"
            shape="rounded"
          />
        </div>

        <Menu
          anchorEl={anchor?.el ?? null}
          open={Boolean(anchor)}
          onClose={() => setAnchor(null)}
        >
          <MenuItem onClick={() => setAnchor(null)}>Edit event</MenuItem>
          <MenuItem onClick={() => setAnchor(null)}>Duplicate</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => setAnchor(null)}>Delete event</MenuItem>
        </Menu>
      </div>
    );
  },
};

// ─── Story 8: Token audit ────────────────────────────────────────────────────

export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const vars: Array<{ name: string; type: 'color' | 'size' | 'number' }> = [
      { name: '--ep-component-table-background',                        type: 'color'  },
      { name: '--ep-component-table-border-color',                      type: 'color'  },
      { name: '--ep-component-table-border-radius',                     type: 'size'   },
      { name: '--ep-component-table-header-background',                 type: 'color'  },
      { name: '--ep-component-table-header-color',                      type: 'color'  },
      { name: '--ep-component-table-header-font-size',                  type: 'size'   },
      { name: '--ep-component-table-header-font-weight',                type: 'number' },
      { name: '--ep-component-table-header-padding-sm-y',               type: 'size'   },
      { name: '--ep-component-table-header-padding-sm-x',               type: 'size'   },
      { name: '--ep-component-table-header-padding-md-y',               type: 'size'   },
      { name: '--ep-component-table-header-padding-md-x',               type: 'size'   },
      { name: '--ep-component-table-header-padding-lg-y',               type: 'size'   },
      { name: '--ep-component-table-header-padding-lg-x',               type: 'size'   },
      { name: '--ep-component-table-header-sort-icon-color',            type: 'color'  },
      { name: '--ep-component-table-header-sort-icon-color-active',     type: 'color'  },
      { name: '--ep-component-table-row-background',                    type: 'color'  },
      { name: '--ep-component-table-row-background-hover',              type: 'color'  },
      { name: '--ep-component-table-row-background-selected',           type: 'color'  },
      { name: '--ep-component-table-row-background-selected-hover',     type: 'color'  },
      { name: '--ep-component-table-row-border-color',                  type: 'color'  },
      { name: '--ep-component-table-cell-color',                        type: 'color'  },
      { name: '--ep-component-table-cell-font-size-sm',                 type: 'size'   },
      { name: '--ep-component-table-cell-font-size-md',                 type: 'size'   },
      { name: '--ep-component-table-cell-font-size-lg',                 type: 'size'   },
      { name: '--ep-component-table-cell-padding-sm-y',                 type: 'size'   },
      { name: '--ep-component-table-cell-padding-sm-x',                 type: 'size'   },
      { name: '--ep-component-table-cell-padding-md-y',                 type: 'size'   },
      { name: '--ep-component-table-cell-padding-md-x',                 type: 'size'   },
      { name: '--ep-component-table-cell-padding-lg-y',                 type: 'size'   },
      { name: '--ep-component-table-cell-padding-lg-x',                 type: 'size'   },
      { name: '--ep-component-table-padding-checkbox-y',                type: 'size'   },
      { name: '--ep-component-table-padding-checkbox-x',                type: 'size'   },
      { name: '--ep-component-table-toolbar-background',                type: 'color'  },
      { name: '--ep-component-table-toolbar-selected-background',       type: 'color'  },
      { name: '--ep-component-table-toolbar-padding-y',                 type: 'size'   },
      { name: '--ep-component-table-toolbar-padding-x',                 type: 'size'   },
      { name: '--ep-component-table-focus-ring-color',                  type: 'color'  },
      { name: '--ep-component-table-focus-ring-width',                  type: 'size'   },
      { name: '--ep-component-table-focus-ring-offset',                 type: 'size'   },
    ];

    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <div style={{ marginBottom: 24, fontFamily: 'system-ui', fontSize: 14, fontWeight: 600 }}>
          Table token audit — {vars.length} vars
        </div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ background: '#F9FAFB', borderBottom: '2px solid #E5E7EB' }}>
              <th style={{ textAlign: 'left', padding: '6px 12px', fontFamily: 'system-ui', fontSize: 12, color: '#6B7280' }}>CSS variable</th>
              <th style={{ textAlign: 'left', padding: '6px 12px', fontFamily: 'system-ui', fontSize: 12, color: '#6B7280' }}>Resolved value</th>
              <th style={{ textAlign: 'left', padding: '6px 12px', fontFamily: 'system-ui', fontSize: 12, color: '#6B7280' }}>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {vars.map(({ name, type }) => (
              <tr key={name} style={{ borderBottom: '1px solid #F3F4F6' }}>
                <td style={{ padding: '5px 12px', color: '#374151' }}>{name}</td>
                <td
                  ref={(el) => {
                    if (el) {
                      const val = getComputedStyle(document.documentElement)
                        .getPropertyValue(name)
                        .trim();
                      el.textContent = val || '(not set)';
                    }
                  }}
                  style={{ padding: '5px 12px', color: '#6B7280' }}
                />
                <td style={{ padding: '5px 12px' }}>
                  {type === 'color' && (
                    <span
                      style={{
                        display:      'inline-block',
                        width:        20,
                        height:       20,
                        borderRadius: 4,
                        background:   `var(${name})`,
                        border:       '1px solid #E5E7EB',
                        verticalAlign: 'middle',
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: 32 }}>
          <div style={{ fontFamily: 'system-ui', fontSize: 14, fontWeight: 600, marginBottom: 12 }}>
            Live render
          </div>
          <Table size="md">
            <TableHead>
              <TableRow hover={false}>
                <TableHeaderCell sortDirection={false} onSort={() => {}}>Event</TableHeaderCell>
                <TableHeaderCell>Venue</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {SAMPLE_EVENTS.slice(0, 3).map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.venue}</TableCell>
                  <TableCell>
                    <Chip
                      label={event.status}
                      color={STATUS_COLORS[event.status]}
                      variant="soft"
                      size="sm"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  },
};

import React from 'react';
import {
  Typography,
  Box,
  FormControlLabel,
  Button,
  TextField,
  Select,
  DatePicker,
  DataGrid,
  Chip,
  Icon,
  Switch,
  Alert,
  Skeleton,
  Drawer,
  DrawerHeader,
  DrawerBody,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  Divider,
  Breadcrumbs,
  BreadcrumbLink,
  BreadcrumbItem,
  List,
  ListItem,
  Avatar,
  AvatarGroup,
  Pagination,
} from '@eventpipe/ui';
import type { ColumnDef, RowAction } from '@eventpipe/ui';

// ─── Mock data ───────────────────────────────────────────────────────────────

const attendees = [
  { id: '1', name: 'Sarah Chen', email: 'sarah@acme.com', role: 'Speaker', status: 'confirmed' as const, checkedIn: true, registered: '2026-03-01' },
  { id: '2', name: 'Marcus Webb', email: 'marcus@globex.io', role: 'Attendee', status: 'confirmed' as const, checkedIn: false, registered: '2026-03-05' },
  { id: '3', name: 'Priya Nair', email: 'priya@initech.co', role: 'Sponsor', status: 'pending' as const, checkedIn: false, registered: '2026-03-10' },
  { id: '4', name: 'Tom Okafor', email: 'tom@umbrella.org', role: 'Attendee', status: 'confirmed' as const, checkedIn: true, registered: '2026-03-12' },
  { id: '5', name: 'Elena Vasquez', email: 'elena@dunder.com', role: 'Volunteer', status: 'waitlisted' as const, checkedIn: false, registered: '2026-03-14' },
];

type AttendeeRow = typeof attendees[number];

const statusColorMap: Record<string, 'success' | 'warning' | 'neutral' | 'error'> = {
  confirmed: 'success',
  pending: 'warning',
  waitlisted: 'neutral',
};

const statusOptions = ['All', 'confirmed', 'pending', 'waitlisted'];
const roleOptions = ['All', 'Speaker', 'Attendee', 'Sponsor', 'Volunteer'];

// ─── Sidebar ─────────────────────────────────────────────────────────────────

const SidebarNav: React.FC = () => (
  <Box
    component="nav"
    aria-label="Main navigation"
    sx={{
      width: 240,
      minHeight: '100vh',
      borderRight: '1px solid var(--ep-semantic-border-default)',
      background: 'var(--ep-semantic-surface-default)',
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 0.5,
    }}
  >
    <Typography variant="h6" sx={{ px: 1, py: 2, fontWeight: 700 }}>
      EventPipe
    </Typography>
    <List dense disablePadding>
      <ListItem startIcon={<Icon name="bar-chart-4-bars" size="sm" />}>
        Dashboard
      </ListItem>
      <ListItem startIcon={<Icon name="calendar-month" size="sm" />}>
        Events
      </ListItem>
      <ListItem selected startIcon={<Icon name="groups-2" size="sm" />}>
        Attendees
      </ListItem>
      <ListItem startIcon={<Icon name="settings" size="sm" />}>
        Settings
      </ListItem>
    </List>
  </Box>
);

// ─── Props ───────────────────────────────────────────────────────────────────

interface DataTablePageProps {
  pageState?: 'default' | 'loading' | 'empty' | 'error';
}

// ─── Component ───────────────────────────────────────────────────────────────

const DataTablePage: React.FC<DataTablePageProps> = ({ pageState = 'default' }) => {
  const isLoading = pageState === 'loading';
  const isEmpty = pageState === 'empty';
  const isError = pageState === 'error';

  // State
  const [search, setSearch] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('All');
  const [roleFilter, setRoleFilter] = React.useState('All');
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set());
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [editingAttendee, setEditingAttendee] = React.useState<AttendeeRow | null>(null);

  // Filtered data
  const filteredData = React.useMemo(() => {
    if (isEmpty) return [];
    return attendees.filter((a) => {
      const matchesSearch =
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.email.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All' || a.status === statusFilter;
      const matchesRole = roleFilter === 'All' || a.role === roleFilter;
      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [search, statusFilter, roleFilter, isEmpty]);

  // Column definitions
  const columns: ColumnDef<AttendeeRow>[] = React.useMemo(
    () => [
      {
        id: 'name',
        header: 'Name',
        accessor: (row) => row.name,
        width: 220,
        renderCell: (row) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar size="sm">
              {row.name.split(' ').map((n) => n[0]).join('')}
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {row.name}
              </Typography>
            </Box>
          </Box>
        ),
      },
      {
        id: 'email',
        header: 'Email',
        accessor: (row) => row.email,
      },
      {
        id: 'status',
        header: 'Status',
        accessor: (row) => row.status,
        renderCell: (row) => (
          <Chip
            label={row.status.charAt(0).toUpperCase() + row.status.slice(1)}
            color={statusColorMap[row.status] ?? 'neutral'}
            size="sm"
            variant="soft"
          />
        ),
      },
      {
        id: 'checkedIn',
        header: 'Check-in',
        accessor: (row) => row.checkedIn,
        renderCell: (row) => (
          <Switch
            checked={row.checkedIn}
            size="sm"
            onChange={() => {}}
            inputProps={{ 'aria-label': `Check in ${row.name}` }}
          />
        ),
      },
      {
        id: 'registered',
        header: 'Registered',
        accessor: (row) => row.registered,
      },
    ],
    []
  );

  const rowActions: RowAction<AttendeeRow>[] = [
    {
      id: 'edit',
      label: 'Edit',
      icon: 'edit',
      onClick: (row) => {
        setEditingAttendee(row);
        setDrawerOpen(true);
      },
    },
    {
      id: 'delete',
      label: 'Remove',
      icon: 'delete',
      onClick: () => {},
      destructive: true,
    },
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: 'var(--ep-semantic-surface-subtle)' }}>
      <SidebarNav />

      <Box sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Breadcrumbs>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
            <BreadcrumbLink href="#">Events</BreadcrumbLink>
            <BreadcrumbItem>Annual Tech Summit 2026</BreadcrumbItem>
          </Breadcrumbs>
          <AvatarGroup max={4} size="sm">
            <Avatar>AK</Avatar>
            <Avatar>JL</Avatar>
            <Avatar>SP</Avatar>
          </AvatarGroup>
        </Box>

        {/* Error state */}
        {isError && (
          <Alert severity="error" onClose={() => {}}>
            Failed to load attendee data. Please try again.
            <Box sx={{ mt: 1 }}>
              <Button variant="outlined" size="sm" color="error">Retry</Button>
            </Box>
          </Alert>
        )}

        {/* Toolbar */}
        {!isError && (
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1.5, flexWrap: 'wrap' }}>
            <TextField
              label="Search"
              placeholder="Search attendees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              startAdornment={<Icon name="search" size="sm" />}
              size="sm"
              sx={{ minWidth: 220 }}
            />
            <Select
              label="Status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as string)}
              size="sm"
              sx={{ minWidth: 140 }}
              options={statusOptions.map((opt) => ({
                value: opt,
                label: opt === 'All' ? 'All statuses' : opt.charAt(0).toUpperCase() + opt.slice(1),
              }))}
              getOptionValue={(o) => o.value}
              getOptionLabel={(o) => o.label}
            />
            <Select
              label="Role"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value as string)}
              size="sm"
              sx={{ minWidth: 140 }}
              options={roleOptions.map((opt) => ({
                value: opt,
                label: opt === 'All' ? 'All roles' : opt,
              }))}
              getOptionValue={(o) => o.value}
              getOptionLabel={(o) => o.label}
            />
            <DatePicker label="Registered after" />
            <Box sx={{ flex: 1 }} />
            <Button
              variant="contained"
              size="sm"
              startSlot={<Icon name="add" size="sm" />}
            >
              Add Attendee
            </Button>
            <Button
              variant="outlined"
              size="sm"
              startSlot={<Icon name="download" size="sm" />}
            >
              Export
            </Button>
          </Box>
        )}

        {/* Bulk action bar */}
        {selectedRows.size > 0 && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              p: 1.5,
              borderRadius: 'var(--ep-component-card-border-radius)',
              background: 'var(--ep-semantic-surface-default)',
              border: '1px solid var(--ep-semantic-border-default)',
            }}
          >
            <Chip label={`${selectedRows.size} selected`} color="primary" size="sm" />
            <Button variant="outlined" size="sm">Email Selected</Button>
            <Button
              variant="outlined"
              size="sm"
              color="error"
              onClick={() => setDialogOpen(true)}
            >
              Remove Selected
            </Button>
            {selectedRows.size > 10 && (
              <Alert severity="warning" size="sm" sx={{ ml: 'auto' }}>
                Bulk actions on more than 10 attendees may take a moment.
              </Alert>
            )}
          </Box>
        )}

        {/* DataGrid */}
        {!isError && (
          <DataGrid<AttendeeRow>
            rows={filteredData}
            columns={columns}
            getRowId={(row) => row.id}
            selectable
            onSelectionChange={setSelectedRows}
            sortable
            pagination
            pageSize={10}
            loading={isLoading}
            emptyMessage="No attendees found. Add your first attendee to get started."
            title="Attendees"
            rowActions={rowActions}
          />
        )}

        {/* Edit Drawer */}
        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          anchor="right"
          aria-labelledby="edit-attendee-drawer-title"
          sx={{ '& .MuiDrawer-paper': { width: 400 } }}
        >
          <DrawerHeader onClose={() => setDrawerOpen(false)}>
            <span id="edit-attendee-drawer-title">Edit Attendee</span>
          </DrawerHeader>
          <DrawerBody>
            {editingAttendee && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Name"
                  defaultValue={editingAttendee.name}
                  fullWidth
                />
                <TextField
                  label="Email"
                  defaultValue={editingAttendee.email}
                  fullWidth
                />
                <Select
                  label="Status"
                  defaultValue={editingAttendee.status}
                  fullWidth
                  options={statusOptions.filter((o) => o !== 'All').map((opt) => ({
                    value: opt,
                    label: opt.charAt(0).toUpperCase() + opt.slice(1),
                  }))}
                  getOptionValue={(o) => o.value}
                  getOptionLabel={(o) => o.label}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked={false} />}
                  label="VIP"
                />
                <Divider />
                <Typography variant="subtitle2">Notes</Typography>
                <TextField
                  label="Notes"
                  multiline
                  rows={4}
                  fullWidth
                  placeholder="Add notes about this attendee..."
                />
                <Divider />
                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                  <Button variant="outlined" onClick={() => setDrawerOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="contained" onClick={() => setDrawerOpen(false)}>
                    Save
                  </Button>
                </Box>
              </Box>
            )}
          </DrawerBody>
        </Drawer>

        {/* Delete confirmation Dialog */}
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth="xs"
          aria-labelledby="delete-confirm-dialog-title"
        >
          <DialogTitle id="delete-confirm-dialog-title" onClose={() => setDialogOpen(false)}>
            Remove Attendees
          </DialogTitle>
          <DialogContent>
            <Typography variant="body2">
              Are you sure you want to remove {selectedRows.size} attendee{selectedRows.size !== 1 ? 's' : ''}?
              This action cannot be undone.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setSelectedRows(new Set());
                setDialogOpen(false);
              }}
            >
              Remove
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default DataTablePage;

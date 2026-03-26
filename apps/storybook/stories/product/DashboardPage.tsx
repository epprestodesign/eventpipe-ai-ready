import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  Badge,
  LinearProgress,
  Chip,
  Icon,
  Tabs,
  Tab,
  List,
  ListItem,
  Tooltip,
  Link,
  Skeleton,
  Alert,
  Pagination,
  DataGrid,
  Breadcrumbs,
  BreadcrumbLink,
  BreadcrumbItem,
  DatePicker,
  Divider,
  Avatar,
} from '@eventpipe/ui';
import type { ColumnDef, RowAction } from '@eventpipe/ui';

// ─── Mock data ───────────────────────────────────────────────────────────────

const events = [
  { id: '1', name: 'Annual Tech Summit 2026', date: '2026-04-15', status: 'confirmed' as const, attendees: 842, revenue: '$42,100' },
  { id: '2', name: 'Product Launch Q2', date: '2026-05-02', status: 'pending' as const, attendees: 210, revenue: '$10,500' },
  { id: '3', name: 'UX Workshop Series', date: '2026-05-18', status: 'confirmed' as const, attendees: 64, revenue: '$3,200' },
  { id: '4', name: 'Leadership Offsite', date: '2026-06-01', status: 'draft' as const, attendees: 28, revenue: '$0' },
  { id: '5', name: 'Community Meetup', date: '2026-06-20', status: 'cancelled' as const, attendees: 0, revenue: '$0' },
];

type EventRow = typeof events[number];

const statusColorMap: Record<string, 'success' | 'warning' | 'neutral' | 'error'> = {
  confirmed: 'success',
  pending: 'warning',
  draft: 'neutral',
  cancelled: 'error',
};

const activityFeed = [
  { name: 'Sarah Chen', event: 'Annual Tech Summit 2026', action: 'registered', time: '2 hours ago', initials: 'SC', status: 'confirmed' as const },
  { name: 'Marcus Webb', event: 'Product Launch Q2', action: 'checked in', time: '4 hours ago', initials: 'MW', status: 'confirmed' as const },
  { name: 'Priya Nair', event: 'UX Workshop Series', action: 'payment pending', time: '6 hours ago', initials: 'PN', status: 'pending' as const },
  { name: 'Tom Okafor', event: 'Leadership Offsite', action: 'registered', time: '1 day ago', initials: 'TO', status: 'confirmed' as const },
  { name: 'Elena Vasquez', event: 'Community Meetup', action: 'waitlisted', time: '2 days ago', initials: 'EV', status: 'pending' as const },
];

const kpiData = [
  { label: 'Events Total', value: '12', trend: '+3', progress: 60 },
  { label: 'Registered', value: '1,144', trend: '+18%', progress: 72 },
  { label: 'Check-ins', value: '906', trend: '+12%', progress: 55 },
  { label: 'Revenue', value: '$55,800', trend: '+22%', progress: 80 },
];

// ─── Column definitions ──────────────────────────────────────────────────────

const columns: ColumnDef<EventRow>[] = [
  {
    id: 'name',
    header: 'Name',
    accessor: (row) => row.name,
    renderCell: (row) => <Link href="#">{row.name}</Link>,
    width: 240,
  },
  {
    id: 'date',
    header: 'Date',
    accessor: (row) => row.date,
  },
  {
    id: 'status',
    header: 'Status',
    accessor: (row) => row.status,
    renderCell: (row) => (
      <Chip
        label={row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        color={statusColorMap[row.status]}
        size="sm"
        variant="soft"
      />
    ),
  },
  {
    id: 'attendees',
    header: 'Attendees',
    accessor: (row) => row.attendees,
    align: 'right',
  },
  {
    id: 'revenue',
    header: 'Revenue',
    accessor: (row) => row.revenue,
    align: 'right',
  },
];

const rowActions: RowAction<EventRow>[] = [
  { id: 'view', label: 'View details', icon: 'visibility', onClick: () => {} },
  { id: 'edit', label: 'Edit', icon: 'edit', onClick: () => {} },
  { id: 'delete', label: 'Delete', icon: 'delete', onClick: () => {}, destructive: true },
];

// ─── Props ───────────────────────────────────────────────────────────────────

interface DashboardPageProps {
  pageState?: 'default' | 'loading' | 'empty' | 'error';
}

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
      <ListItem selected startIcon={<Icon name="bar-chart-4-bars" size="sm" />}>
        Dashboard
      </ListItem>
      <ListItem startIcon={<Icon name="calendar-month" size="sm" />}>
        Events
      </ListItem>
      <ListItem startIcon={<Icon name="groups-2" size="sm" />}>
        Attendees
      </ListItem>
      <ListItem startIcon={<Icon name="settings" size="sm" />}>
        Settings
      </ListItem>
    </List>
  </Box>
);

// ─── Component ───────────────────────────────────────────────────────────────

const DashboardPage: React.FC<DashboardPageProps> = ({ pageState = 'default' }) => {
  const [chartTab, setChartTab] = React.useState(0);
  const isLoading = pageState === 'loading';
  const isEmpty = pageState === 'empty';
  const isError = pageState === 'error';

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: 'var(--ep-semantic-surface-subtle)' }}>
      <SidebarNav />

      <Box sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Breadcrumbs>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
            <BreadcrumbItem>Dashboard</BreadcrumbItem>
          </Breadcrumbs>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DatePicker label="Date range" />
            <Tooltip title="Open command palette">
              <Button variant="outlined" size="sm" startSlot={<Icon name="search" size="sm" />}>
                Search
              </Button>
            </Tooltip>
          </Box>
        </Box>

        {/* Error state */}
        {isError && (
          <Alert severity="error" onClose={() => {}}>
            Failed to load dashboard data. Please try again.
            <Box sx={{ mt: 1 }}>
              <Button variant="outlined" size="sm" color="error">
                Retry
              </Button>
            </Box>
          </Alert>
        )}

        {/* KPI Row */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
          {kpiData.map((kpi) => (
            <Card key={kpi.label} variant="elevated">
              <CardContent>
                {isLoading ? (
                  <>
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="40%" height={32} />
                    <Skeleton variant="rounded" width="100%" height={6} sx={{ mt: 1 }} />
                  </>
                ) : (
                  <>
                    <Typography variant="body2" color="secondary">
                      {kpi.label}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mt: 0.5 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {kpi.value}
                      </Typography>
                      <Badge badgeContent={kpi.trend} color="success" size="sm">
                        <Box component="span" sx={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
                          {kpi.label} trend
                        </Box>
                      </Badge>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={kpi.progress}
                      rounded
                      aria-label={`${kpi.label} progress`}
                      sx={{ mt: 1.5 }}
                    />
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Chart + Activity row */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 2 }}>
          {/* Chart Card */}
          <Card variant="elevated">
            <CardHeader title="Overview" />
            <CardContent>
              <Tabs value={chartTab} onChange={(_e, val) => setChartTab(val as number)}>
                <Tab label="Registrations" />
                <Tab label="Revenue" />
                <Tab label="Check-ins" />
              </Tabs>
              {isLoading ? (
                <Skeleton variant="rounded" width="100%" height={240} sx={{ mt: 2 }} />
              ) : (
                <Box
                  sx={{
                    mt: 2,
                    height: 240,
                    borderRadius: 'var(--ep-component-card-border-radius)',
                    background: 'var(--ep-semantic-surface-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="body2" color="secondary">
                    {['Registrations', 'Revenue', 'Check-ins'][chartTab]} chart placeholder
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <Card variant="elevated">
            <CardHeader title="Recent Activity" />
            <CardContent disablePadding>
              {isLoading ? (
                <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      <Skeleton variant="circular" width={32} height={32} />
                      <Box sx={{ flex: 1 }}>
                        <Skeleton variant="text" width="80%" />
                        <Skeleton variant="text" width="50%" />
                      </Box>
                    </Box>
                  ))}
                </Box>
              ) : isEmpty ? (
                <Box sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="body2" color="secondary" sx={{ mb: 2 }}>
                    No recent activity yet.
                  </Typography>
                  <Button variant="contained" size="sm">Create Event</Button>
                </Box>
              ) : (
                <List dense disablePadding>
                  {activityFeed.map((item, i) => (
                    <ListItem
                      key={i}
                      divider={i < activityFeed.length - 1}
                      startIcon={
                        <Avatar size="sm">
                          {item.initials}
                        </Avatar>
                      }
                      endIcon={
                        <Chip
                          label={item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                          color={statusColorMap[item.status]}
                          size="sm"
                          variant="soft"
                        />
                      }
                    >
                      <Tooltip title={item.time}>
                        <span>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {item.name}
                          </Typography>
                          <Typography variant="caption" color="secondary">
                            {item.action} for {item.event}
                          </Typography>
                        </span>
                      </Tooltip>
                    </ListItem>
                  ))}
                </List>
              )}
            </CardContent>
          </Card>
        </Box>

        {/* DataGrid */}
        <Card variant="elevated">
          <CardContent disablePadding>
            <DataGrid<EventRow>
              rows={isEmpty ? [] : events}
              columns={columns}
              getRowId={(row) => row.id}
              sortable
              pagination
              pageSize={5}
              loading={isLoading}
              emptyMessage="No events found. Create your first event to get started."
              title="Upcoming Events"
              rowActions={rowActions}
              toolbarActions={
                <Button variant="contained" size="sm" startSlot={<Icon name="add" size="sm" />}>
                  New Event
                </Button>
              }
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default DashboardPage;

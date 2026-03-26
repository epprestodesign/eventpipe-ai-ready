import React from 'react';
import {
  Typography,
  Box,
  Stack,
  Card,
  CardContent,
  Surface,
  Button,
  TextField,
  Select,
  Checkbox,
  Switch,
  Radio,
  RadioGroup,
  FormControlLabel,
  DatePicker,
  Slider,
  DataGrid,
  CommandPalette,
  Chip,
  Badge,
  Icon,
  Avatar,
  Alert,
  Tooltip,
  Tabs,
  Tab,
  List,
  ListItem,
  Divider,
  LinearProgress,
  Skeleton,
} from '@eventpipe/ui';
import type { ColumnDef, RowAction, CommandItem, CommandGroup } from '@eventpipe/ui';

// ─── Mock data ───────────────────────────────────────────────────────────────

const kpiData = [
  { label: 'Total Accounts', value: '1,284', trend: '+12%', progress: 64 },
  { label: 'Active Subscriptions', value: '847', trend: '+8%', progress: 71 },
  { label: 'MRR', value: '$94,200', trend: '+23%', progress: 87 },
  { label: 'Churn Rate', value: '2.1%', trend: '-0.4%', progress: 21, isNegative: true },
];

const accounts = [
  { id: '1', name: 'Acme Corp', plan: 'Enterprise' as const, status: 'Active' as const, mrr: '$4,800', users: 142, lastActive: '2 hours ago' },
  { id: '2', name: 'Globex Industries', plan: 'Growth' as const, status: 'Active' as const, mrr: '$1,200', users: 38, lastActive: '1 day ago' },
  { id: '3', name: 'Initech Solutions', plan: 'Starter' as const, status: 'Trial' as const, mrr: '$0', users: 5, lastActive: '3 hours ago' },
  { id: '4', name: 'Umbrella Tech', plan: 'Enterprise' as const, status: 'Active' as const, mrr: '$6,400', users: 210, lastActive: '30 min ago' },
  { id: '5', name: 'Dunder Systems', plan: 'Growth' as const, status: 'Suspended' as const, mrr: '$0', users: 22, lastActive: '14 days ago' },
  { id: '6', name: 'Vandelay API', plan: 'Starter' as const, status: 'Active' as const, mrr: '$400', users: 3, lastActive: '5 hours ago' },
  { id: '7', name: 'Prestige Worldwide', plan: 'Enterprise' as const, status: 'Active' as const, mrr: '$9,600', users: 380, lastActive: '1 hour ago' },
  { id: '8', name: 'Bluth Company', plan: 'Growth' as const, status: 'Churned' as const, mrr: '$0', users: 0, lastActive: '45 days ago' },
];

type AccountRow = typeof accounts[number];

const statusColorMap: Record<string, 'success' | 'info' | 'warning' | 'neutral'> = {
  Active: 'success',
  Trial: 'info',
  Suspended: 'warning',
  Churned: 'neutral',
};

const planColorMap: Record<string, 'primary' | 'secondary' | 'neutral'> = {
  Enterprise: 'primary',
  Growth: 'secondary',
  Starter: 'neutral',
};

const activityFeed = [
  { user: 'Sarah Chen', action: 'Added 15 new users', time: '2 min ago', status: 'success' as const },
  { user: 'Marcus Webb', action: 'Upgraded to Enterprise', time: '1 hour ago', status: 'info' as const },
  { user: 'Priya Nair', action: 'Exported billing data', time: '3 hours ago', status: 'neutral' as const },
  { user: 'Tom Okafor', action: 'Enabled SSO integration', time: 'Yesterday', status: 'success' as const },
  { user: 'Elena Vasquez', action: 'Payment failed — card declined', time: '2 days ago', status: 'error' as const },
];

const typographyVariants: Array<{ variant: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline'; label: string; text: string }> = [
  { variant: 'display', label: 'display', text: 'EventPipe Design System' },
  { variant: 'h1', label: 'h1', text: 'Heading Level 1' },
  { variant: 'h2', label: 'h2', text: 'Heading Level 2' },
  { variant: 'h3', label: 'h3', text: 'Heading Level 3' },
  { variant: 'h4', label: 'h4', text: 'Heading Level 4' },
  { variant: 'h5', label: 'h5', text: 'Heading Level 5' },
  { variant: 'h6', label: 'h6', text: 'Heading Level 6' },
  { variant: 'subtitle1', label: 'subtitle1', text: 'Subtitle text' },
  { variant: 'subtitle2', label: 'subtitle2', text: 'Subtitle text' },
  { variant: 'body1', label: 'body1', text: 'Body text for reading' },
  { variant: 'body2', label: 'body2', text: 'Body text for reading' },
  { variant: 'caption', label: 'caption', text: 'Caption and metadata' },
  { variant: 'overline', label: 'overline', text: 'SECTION LABEL' },
];

const commandGroups: CommandGroup[] = [
  {
    id: 'navigation',
    label: 'Navigation',
    items: [
      { id: 'dashboard', label: 'Go to Dashboard', icon: 'bar-chart-4-bars', shortcut: '⌘D', onAction: () => {} },
      { id: 'accounts', label: 'Go to Accounts', icon: 'groups-2', shortcut: '⌘A', onAction: () => {} },
      { id: 'settings', label: 'Go to Settings', icon: 'settings', shortcut: '⌘,', onAction: () => {} },
    ],
  },
  {
    id: 'actions',
    label: 'Actions',
    items: [
      { id: 'new-account', label: 'Create New Account', icon: 'add', shortcut: '⌘N', onAction: () => {} },
      { id: 'export', label: 'Export Data', icon: 'download', onAction: () => {} },
      { id: 'search', label: 'Search Accounts', icon: 'search', shortcut: '/', onAction: () => {} },
    ],
  },
];

// ─── Column definitions ──────────────────────────────────────────────────────

const columns: ColumnDef<AccountRow>[] = [
  {
    id: 'name',
    header: 'Account Name',
    accessor: (row) => row.name,
    width: 220,
    renderCell: (row) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar size="sm">
          {row.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
        </Avatar>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {row.name}
        </Typography>
      </Box>
    ),
  },
  {
    id: 'plan',
    header: 'Plan',
    accessor: (row) => row.plan,
    renderCell: (row) => (
      <Chip label={row.plan} color={planColorMap[row.plan]} size="sm" variant="soft" />
    ),
  },
  {
    id: 'status',
    header: 'Status',
    accessor: (row) => row.status,
    renderCell: (row) => (
      <Chip label={row.status} color={statusColorMap[row.status]} size="sm" variant="soft" />
    ),
  },
  {
    id: 'mrr',
    header: 'MRR',
    accessor: (row) => row.mrr,
    align: 'right',
  },
  {
    id: 'users',
    header: 'Users',
    accessor: (row) => row.users,
    align: 'right',
  },
  {
    id: 'lastActive',
    header: 'Last Active',
    accessor: (row) => row.lastActive,
  },
];

const rowActions: RowAction<AccountRow>[] = [
  { id: 'view', label: 'View details', icon: 'visibility', onClick: () => {} },
  { id: 'edit', label: 'Edit', icon: 'edit', onClick: () => {} },
  { id: 'delete', label: 'Delete', icon: 'delete', onClick: () => {}, destructive: true },
];

// ─── Section label helper ────────────────────────────────────────────────────

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography variant="overline" color="secondary" sx={{ mb: 1, display: 'block' }}>
    {children}
  </Typography>
);

// ─── Props ───────────────────────────────────────────────────────────────────

interface ShowcasePageProps {
  pageState?: 'default' | 'loading' | 'empty' | 'error';
}

// ─── Component ───────────────────────────────────────────────────────────────

const ShowcasePage: React.FC<ShowcasePageProps> = ({ pageState = 'default' }) => {
  const isLoading = pageState === 'loading';
  const isEmpty = pageState === 'empty';
  const isError = pageState === 'error';

  // Section 2 state
  const [search, setSearch] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('All');
  const [planFilter, setPlanFilter] = React.useState('All');

  // Section 3 state
  const [workspaceName, setWorkspaceName] = React.useState('Acme Corp');
  const [supportEmail, setSupportEmail] = React.useState('support@acmecorp.com');
  const [defaultPlan, setDefaultPlan] = React.useState('Growth');
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [slackIntegration, setSlackIntegration] = React.useState(false);
  const [twoFactor, setTwoFactor] = React.useState(true);
  const [publicApi, setPublicApi] = React.useState(true);
  const [auditLogging, setAuditLogging] = React.useState(true);
  const [seatLimit, setSeatLimit] = React.useState(142);
  const [billingCycle, setBillingCycle] = React.useState('monthly');

  // Section 5 state
  const [activeTab, setActiveTab] = React.useState(0);

  // Section 7 state
  const [showCommandPalette, setShowCommandPalette] = React.useState(false);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'var(--ep-semantic-color-background-default)',
        px: 3,
        py: 3,
      }}
    >
      <Stack spacing={4}>
        {/* Error banner */}
        {isError && (
          <Alert severity="error">
            Failed to load workspace data. Please refresh.
          </Alert>
        )}

        {/* ── SECTION 1: Dashboard Hero / KPI Cards ────────────────────────── */}
        <Box>
          <SectionLabel>Overview</SectionLabel>
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
                          {isError ? '—' : isEmpty ? '—' : kpi.value}
                        </Typography>
                        {!isError && !isEmpty && (
                          <Badge
                            badgeContent={kpi.trend}
                            color={kpi.isNegative ? 'error' : 'success'}
                            size="sm"
                          >
                            <Box
                              component="span"
                              sx={{
                                position: 'absolute',
                                width: 1,
                                height: 1,
                                padding: 0,
                                margin: -1,
                                overflow: 'hidden',
                                clip: 'rect(0,0,0,0)',
                                whiteSpace: 'nowrap',
                                border: 0,
                              }}
                            >
                              {kpi.label} trend
                            </Box>
                          </Badge>
                        )}
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={isError || isEmpty ? 0 : kpi.progress}
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
        </Box>

        <Divider />

        {/* ── SECTION 2: Data Area (Toolbar + DataGrid) ────────────────────── */}
        <Box>
          <SectionLabel>Accounts</SectionLabel>

          {/* Toolbar */}
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1.5, mb: 2, flexWrap: 'wrap' }}>
            <TextField
              label="Search"
              placeholder="Search accounts..."
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
              options={[
                { value: 'All', label: 'All' },
                { value: 'Active', label: 'Active' },
                { value: 'Trial', label: 'Trial' },
                { value: 'Suspended', label: 'Suspended' },
                { value: 'Churned', label: 'Churned' },
              ]}
              getOptionValue={(o) => o.value}
              getOptionLabel={(o) => o.label}
            />
            <Select
              label="Plan"
              value={planFilter}
              onChange={(e) => setPlanFilter(e.target.value as string)}
              size="sm"
              sx={{ minWidth: 140 }}
              options={[
                { value: 'All', label: 'All' },
                { value: 'Starter', label: 'Starter' },
                { value: 'Growth', label: 'Growth' },
                { value: 'Enterprise', label: 'Enterprise' },
              ]}
              getOptionValue={(o) => o.value}
              getOptionLabel={(o) => o.label}
            />
            <Box sx={{ flex: 1 }} />
            <Button
              variant="contained"
              size="sm"
              startSlot={<Icon name="add" size="sm" />}
            >
              Add Account
            </Button>
          </Box>

          {/* DataGrid */}
          <DataGrid<AccountRow>
            rows={isEmpty ? [] : accounts.filter((a) => {
              const matchesSearch =
                a.name.toLowerCase().includes(search.toLowerCase());
              const matchesStatus = statusFilter === 'All' || a.status === statusFilter;
              const matchesPlan = planFilter === 'All' || a.plan === planFilter;
              return matchesSearch && matchesStatus && matchesPlan;
            })}
            columns={columns}
            getRowId={(row) => row.id}
            sortable
            pagination
            pageSize={10}
            loading={isLoading}
            emptyMessage="No accounts match your filters"
            title="Accounts"
            rowActions={rowActions}
          />
        </Box>

        <Divider />

        {/* ── SECTION 3: Settings / Form Area ──────────────────────────────── */}
        <Box>
          <SectionLabel>Configuration</SectionLabel>
          <Surface variant="raised" border="default" padding="lg">
            <Stack spacing={2.5}>
              <Typography variant="h5">Workspace Settings</Typography>

              <TextField
                label="Workspace Name"
                value={isLoading ? '' : workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                fullWidth
                disabled={isLoading}
              />
              <TextField
                label="Support Email"
                value={isLoading ? '' : supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                fullWidth
                disabled={isLoading}
              />
              <Select
                label="Default Plan"
                value={defaultPlan}
                onChange={(e) => setDefaultPlan(e.target.value as string)}
                fullWidth
                options={[
                  { value: 'Starter', label: 'Starter' },
                  { value: 'Growth', label: 'Growth' },
                  { value: 'Enterprise', label: 'Enterprise' },
                ]}
                getOptionValue={(o) => o.value}
                getOptionLabel={(o) => o.label}
              />

              {/* Checkboxes */}
              <Stack direction="row" spacing={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                    />
                  }
                  label="Email notifications"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={slackIntegration}
                      onChange={(e) => setSlackIntegration(e.target.checked)}
                    />
                  }
                  label="Slack integration"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={twoFactor}
                      onChange={(e) => setTwoFactor(e.target.checked)}
                    />
                  }
                  label="Two-factor authentication"
                />
              </Stack>

              {/* Switches */}
              <Stack direction="row" spacing={3}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={publicApi}
                      onChange={(e) => setPublicApi(e.target.checked)}
                    />
                  }
                  label="Public API access"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={auditLogging}
                      onChange={(e) => setAuditLogging(e.target.checked)}
                    />
                  }
                  label="Audit logging"
                />
              </Stack>

              <DatePicker label="Contract renewal date" />

              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  User seat limit: {seatLimit}
                </Typography>
                <Slider
                  aria-label="User seat limit"
                  value={seatLimit}
                  onChange={(_e, val) => setSeatLimit(val as number)}
                  min={1}
                  max={500}
                />
              </Box>

              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>Billing cycle</Typography>
                <RadioGroup
                  aria-label="Billing cycle"
                  value={billingCycle}
                  onChange={(e) => setBillingCycle(e.target.value)}
                >
                  <Stack direction="row" spacing={2}>
                    <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
                    <FormControlLabel value="annual" control={<Radio />} label="Annual" />
                    <FormControlLabel value="enterprise" control={<Radio />} label="Enterprise" />
                  </Stack>
                </RadioGroup>
              </Box>

              <Stack direction="row" spacing={1.5}>
                <Button variant="contained">Save Changes</Button>
                <Button variant="outlined">Cancel</Button>
              </Stack>
            </Stack>
          </Surface>
        </Box>

        <Divider />

        {/* ── SECTION 4: Feedback & Interaction ────────────────────────────── */}
        <Box>
          <SectionLabel>Feedback & Status</SectionLabel>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
            <Alert severity="success">
              Acme Corp subscription renewed — Enterprise plan active until March 2027
            </Alert>
            <Alert severity="warning">
              Dunder Systems payment failed — 3 days until suspension
            </Alert>
            <Alert severity="error">
              API rate limit exceeded for Vandelay API — upgrade plan to continue
            </Alert>
            <Alert severity="info">
              Scheduled maintenance window: March 28, 2026, 2:00–4:00 AM UTC
            </Alert>
          </Box>

          {/* Tooltip demo row */}
          <Stack direction="row" spacing={1.5}>
            <Tooltip title="Full feature access, SLA included">
              <Chip label="Enterprise" color="primary" variant="soft" />
            </Tooltip>
            <Tooltip title="Service level agreement">
              <Chip label="99.9% uptime" color="success" variant="soft" />
            </Tooltip>
            <Tooltip title="Security compliance certification">
              <Chip label="SOC 2 Type II" color="secondary" variant="soft" />
            </Tooltip>
            <Tooltip title="European data protection compliant">
              <Chip label="GDPR Ready" color="info" variant="soft" />
            </Tooltip>
          </Stack>
        </Box>

        <Divider />

        {/* ── SECTION 5: Surface Examples ──────────────────────────────────── */}
        <Box>
          <SectionLabel>Surfaces & Navigation</SectionLabel>

          {/* 3 Surface cards */}
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Surface variant="plain" border="default" padding="lg" sx={{ flex: 1 }}>
              <Typography variant="h6">Plain surface</Typography>
              <Typography variant="body2" color="secondary">
                No elevation, default border. Ideal for inline content areas and form groups.
              </Typography>
            </Surface>
            <Surface variant="raised" padding="lg" sx={{ flex: 1 }}>
              <Typography variant="h6">Raised surface</Typography>
              <Typography variant="body2" color="secondary">
                Subtle shadow for card-like containers that lift above the page background.
              </Typography>
            </Surface>
            <Surface variant="overlay" padding="lg" sx={{ flex: 1 }}>
              <Typography variant="h6">Overlay surface</Typography>
              <Typography variant="body2" color="secondary">
                Higher elevation for popovers, dropdowns, and floating panels.
              </Typography>
            </Surface>
          </Stack>

          {/* Tabs with activity feed */}
          <Tabs value={activeTab} onChange={(_e, val) => setActiveTab(val as number)}>
            <Tab label="Overview" />
            <Tab label="Activity" />
            <Tab label="Billing" />
          </Tabs>
          <Surface variant="plain" border="default" padding="md" sx={{ mt: 0 }}>
            {isLoading ? (
              <Stack spacing={2}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <Skeleton variant="circular" width={32} height={32} />
                    <Box sx={{ flex: 1 }}>
                      <Skeleton variant="text" width="70%" />
                      <Skeleton variant="text" width="40%" />
                    </Box>
                  </Box>
                ))}
              </Stack>
            ) : isEmpty ? (
              <Box sx={{ py: 4, textAlign: 'center' }}>
                <Typography variant="body2" color="secondary">
                  No activity to display.
                </Typography>
              </Box>
            ) : (
              <List dense disablePadding>
                {activityFeed.map((item, i) => (
                  <ListItem
                    key={i}
                    divider={i < activityFeed.length - 1}
                    startIcon={
                      <Avatar size="sm">
                        {item.user.split(' ').map((w) => w[0]).join('')}
                      </Avatar>
                    }
                    endIcon={
                      <Chip
                        label={item.status}
                        color={item.status as 'success' | 'info' | 'neutral' | 'error'}
                        size="sm"
                        variant="soft"
                      />
                    }
                  >
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {item.user}
                    </Typography>
                    <Typography variant="caption" color="secondary">
                      {item.action} — {item.time}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            )}
          </Surface>
        </Box>

        <Divider />

        {/* ── SECTION 6: Typography Scale ──────────────────────────────────── */}
        <Box>
          <SectionLabel>Typography Scale</SectionLabel>
          <Surface variant="plain" border="default" padding="lg">
            <Stack spacing={2}>
              {typographyVariants.map((item) => (
                <Box
                  key={item.variant}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    alignItems: 'baseline',
                    gap: 2,
                  }}
                >
                  <Typography variant="caption" color="secondary" sx={{ fontFamily: 'monospace' }}>
                    {item.label}
                  </Typography>
                  <Typography variant={item.variant}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Surface>
        </Box>

        <Divider />

        {/* ── SECTION 7: Command Palette Preview ───────────────────────────── */}
        <Box>
          <SectionLabel>Search & Navigation</SectionLabel>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="outlined"
              size="sm"
              startSlot={<Icon name="search" size="sm" />}
              onClick={() => setShowCommandPalette(true)}
            >
              Search
            </Button>
            <Typography variant="body2" color="secondary">
              Press ⌘K or click to open Command Palette
            </Typography>
          </Stack>
          <CommandPalette
            open={showCommandPalette}
            onClose={() => setShowCommandPalette(false)}
            commands={commandGroups}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default ShowcasePage;

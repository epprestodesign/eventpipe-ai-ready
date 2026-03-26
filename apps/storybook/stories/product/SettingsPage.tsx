import React from 'react';
import {
  Typography,
  Box,
  FormControlLabel,
  Surface,
  Button,
  TextField,
  Select,
  Autocomplete,
  Checkbox,
  Switch,
  RadioGroup,
  Radio,
  DatePicker,
  Stepper,
  TransferList,
  Icon,
  Alert,
  Skeleton,
  Chip,
  List,
  ListItem,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  LinearProgress,
  Popover,
  PopoverContent,
  Breadcrumbs,
  BreadcrumbLink,
  BreadcrumbItem,
  Avatar,
  AvatarGroup,
  Slider,
} from '@eventpipe/ui';
import type { TransferListItem } from '@eventpipe/ui';

// ─── Mock data ───────────────────────────────────────────────────────────────

const staff: TransferListItem[] = [
  { id: '1', label: 'Alex Kim — Organizer' },
  { id: '2', label: 'Jordan Lee — Coordinator' },
  { id: '3', label: 'Sam Patel — Volunteer Lead' },
  { id: '4', label: 'Casey Morgan — Tech Support' },
];

const tagOptions = ['Conference', 'Workshop', 'Meetup', 'Webinar', 'Networking', 'Training'];
const eventTypes = ['Conference', 'Workshop', 'Meetup', 'Webinar', 'Seminar', 'Gala'];

const stepLabels = [
  { label: 'Details' },
  { label: 'Schedule' },
  { label: 'Team' },
  { label: 'Review' },
];

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
      <ListItem startIcon={<Icon name="groups-2" size="sm" />}>
        Attendees
      </ListItem>
      <ListItem selected startIcon={<Icon name="settings" size="sm" />}>
        Settings
      </ListItem>
    </List>
  </Box>
);

// ─── Props ───────────────────────────────────────────────────────────────────

interface SettingsPageProps {
  pageState?: 'default' | 'loading' | 'empty' | 'error';
}

interface FormData {
  name: string;
  description: string;
  type: string;
  tags: string[];
  capacity: number;
  visibility: string;
  waitlist: boolean;
  requireApproval: boolean;
  venue: string;
  agendaItems: string[];
  assignedStaff: TransferListItem[];
  staffRole: string;
}

const initialFormData: FormData = {
  name: '',
  description: '',
  type: '',
  tags: [],
  capacity: 200,
  visibility: 'public',
  waitlist: false,
  requireApproval: false,
  venue: '',
  agendaItems: ['Opening Keynote', 'Workshop Session'],
  assignedStaff: [],
  staffRole: '',
};

// ─── Component ───────────────────────────────────────────────────────────────

const SettingsPage: React.FC<SettingsPageProps> = ({ pageState = 'default' }) => {
  const isLoading = pageState === 'loading';
  const isError = pageState === 'error';

  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState<FormData>(initialFormData);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [formDirty, setFormDirty] = React.useState(false);
  const [availableStaff, setAvailableStaff] = React.useState<TransferListItem[]>(staff);
  const [assignedStaff, setAssignedStaff] = React.useState<TransferListItem[]>([]);
  const [helpAnchorEl, setHelpAnchorEl] = React.useState<Element | null>(null);

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setFormDirty(true);
  };

  const handleNext = () => {
    if (activeStep < 3) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const wizardProgress = ((activeStep + 1) / 4) * 100;

  // ── Step content renders ─────────────────────────────────────────────────

  const renderStep1 = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {isError && (
        <Alert severity="error">Please correct the errors below.</Alert>
      )}
      <TextField
        label="Event Name"
        value={formData.name}
        onChange={(e) => updateField('name', e.target.value)}
        fullWidth
        required
        error={isError && !formData.name}
        helperText={isError && !formData.name ? 'Name is required' : undefined}
      />
      <TextField
        label="Description"
        value={formData.description}
        onChange={(e) => updateField('description', e.target.value)}
        fullWidth
        multiline
        rows={4}
      />
      <Select
        label="Event Type"
        value={formData.type}
        onChange={(e) => updateField('type', e.target.value as string)}
        fullWidth
        displayEmpty
        placeholder="Select a type"
        options={eventTypes.map((t) => ({ value: t, label: t }))}
        getOptionValue={(o) => o.value}
        getOptionLabel={(o) => o.label}
      />
      <Autocomplete<string>
        options={tagOptions}
        multiple
        value={formData.tags}
        onChange={(val) => updateField('tags', (val ?? []) as string[])}
        label="Tags"
        placeholder="Add tags"
        fullWidth
      />
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Capacity: {formData.capacity}
        </Typography>
        <Slider
          aria-label="Capacity"
          value={formData.capacity}
          onChange={(_e, val) => updateField('capacity', val as number)}
          min={0}
          max={1000}
          step={10}
          valueLabelDisplay="auto"
        />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>Visibility</Typography>
        <RadioGroup
          aria-label="Visibility"
          value={formData.visibility}
          onChange={(e) => updateField('visibility', e.target.value)}
        >
          <FormControlLabel value="public" control={<Radio />} label="Public" />
          <FormControlLabel value="private" control={<Radio />} label="Private" />
          <FormControlLabel value="unlisted" control={<Radio />} label="Unlisted" />
        </RadioGroup>
      </Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.waitlist}
            onChange={(e) => updateField('waitlist', e.target.checked)}
          />
        }
        label="Enable waitlist"
      />
      <FormControlLabel
        control={
          <Switch
            checked={formData.requireApproval}
            onChange={(e) => updateField('requireApproval', e.target.checked)}
          />
        }
        label="Require approval for registration"
      />
    </Box>
  );

  const renderStep2 = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <DatePicker label="Start Date" />
        <DatePicker label="End Date" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
        <TextField
          label="Venue"
          value={formData.venue}
          onChange={(e) => updateField('venue', e.target.value)}
          fullWidth
        />
        <Button
          variant="text"
          size="sm"
          aria-label="Venue information"
          onClick={(e) => setHelpAnchorEl(e.currentTarget)}
        >
          <Icon name="info" size="sm" />
        </Button>
        <Popover
          open={Boolean(helpAnchorEl)}
          anchorEl={helpAnchorEl}
          onClose={() => setHelpAnchorEl(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <PopoverContent>
            <Typography variant="body2">
              Enter the full venue address. Virtual events can use a meeting link.
            </Typography>
          </PopoverContent>
        </Popover>
      </Box>
      <Divider />
      <Typography variant="subtitle2">Agenda Items</Typography>
      {formData.agendaItems.map((item, i) => (
        <Box key={i} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <TextField
            value={item}
            onChange={(e) => {
              const updated = [...formData.agendaItems];
              updated[i] = e.target.value;
              updateField('agendaItems', updated);
            }}
            fullWidth
            size="sm"
            aria-label={`Agenda item ${i + 1}`}
          />
          <Button
            variant="text"
            size="sm"
            color="error"
            aria-label={`Remove agenda item ${i + 1}`}
            onClick={() => {
              updateField('agendaItems', formData.agendaItems.filter((_, idx) => idx !== i));
            }}
          >
            <Icon name="remove" size="sm" />
          </Button>
        </Box>
      ))}
      <Button
        variant="outlined"
        size="sm"
        startSlot={<Icon name="add" size="sm" />}
        onClick={() => updateField('agendaItems', [...formData.agendaItems, ''])}
      >
        Add Agenda Item
      </Button>
    </Box>
  );

  const renderStep3 = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <TransferList
        leftItems={availableStaff}
        rightItems={assignedStaff}
        leftTitle="Available Staff"
        rightTitle="Assigned Staff"
        searchable
        onChange={(left, right) => {
          setAvailableStaff(left);
          setAssignedStaff(right);
          setFormDirty(true);
        }}
      />
      <Select
        label="Default Role"
        value={formData.staffRole}
        onChange={(e) => updateField('staffRole', e.target.value as string)}
        fullWidth
        displayEmpty
        placeholder="Assign role"
        options={[
          { value: 'organizer', label: 'Organizer' },
          { value: 'coordinator', label: 'Coordinator' },
          { value: 'volunteer', label: 'Volunteer' },
          { value: 'tech-support', label: 'Tech Support' },
        ]}
        getOptionValue={(o) => o.value}
        getOptionLabel={(o) => o.label}
      />
    </Box>
  );

  const renderStep4 = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Alert severity="info">Review your event details before creating.</Alert>
      <List disablePadding>
        <ListItem divider>
          <Box>
            <Typography variant="caption" color="secondary">Event Name</Typography>
            <Typography variant="body2">{formData.name || 'Untitled Event'}</Typography>
          </Box>
        </ListItem>
        <ListItem divider>
          <Box>
            <Typography variant="caption" color="secondary">Type</Typography>
            <Typography variant="body2">{formData.type || 'Not selected'}</Typography>
          </Box>
        </ListItem>
        <ListItem divider>
          <Box>
            <Typography variant="caption" color="secondary">Capacity</Typography>
            <Typography variant="body2">{formData.capacity}</Typography>
          </Box>
        </ListItem>
        <ListItem divider>
          <Box>
            <Typography variant="caption" color="secondary">Visibility</Typography>
            <Typography variant="body2">
              {formData.visibility.charAt(0).toUpperCase() + formData.visibility.slice(1)}
            </Typography>
          </Box>
        </ListItem>
      </List>

      <Divider />

      <Typography variant="subtitle2">Tags</Typography>
      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
        {formData.tags.length > 0 ? (
          formData.tags.map((tag) => (
            <Chip key={tag} label={tag} size="sm" variant="soft" color="primary" />
          ))
        ) : (
          <Typography variant="body2" color="secondary">No tags</Typography>
        )}
      </Box>

      <Divider />

      <Typography variant="subtitle2">Team</Typography>
      {assignedStaff.length > 0 ? (
        <AvatarGroup max={5} size="sm">
          {assignedStaff.map((s) => (
            <Avatar key={s.id}>
              {s.label.split(' ').slice(0, 2).map((w) => w[0]).join('')}
            </Avatar>
          ))}
        </AvatarGroup>
      ) : (
        <Typography variant="body2" color="secondary">No staff assigned</Typography>
      )}
    </Box>
  );

  const stepContent = [renderStep1, renderStep2, renderStep3, renderStep4];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: 'var(--ep-semantic-surface-subtle)' }}>
      <SidebarNav />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ p: 3, pb: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Breadcrumbs>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
              <BreadcrumbLink href="#">Events</BreadcrumbLink>
              <BreadcrumbItem>Create Event</BreadcrumbItem>
            </Breadcrumbs>
          </Box>
          <LinearProgress
            variant="determinate"
            value={wizardProgress}
            rounded
            aria-label="Wizard progress"
            aria-valuetext={`Step ${activeStep + 1} of 4`}
            sx={{ mb: 3 }}
          />
          <Stepper
            steps={stepLabels}
            activeStep={activeStep}
            onStepClick={(step) => setActiveStep(step)}
            nonLinear
          />
        </Box>

        {/* Step Content */}
        <Box sx={{ flex: 1, p: 3 }}>
          <Surface
            variant="raised"
            border="default"
            padding="lg"
            sx={{ minHeight: 400 }}
          >
            {isLoading ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Skeleton variant="text" width="40%" height={28} />
                <Skeleton variant="rounded" width="100%" height={48} />
                <Skeleton variant="rounded" width="100%" height={48} />
                <Skeleton variant="rounded" width="100%" height={100} />
                <Skeleton variant="rounded" width="60%" height={48} />
              </Box>
            ) : (
              stepContent[activeStep]?.()
            )}
          </Surface>
        </Box>

        {/* Sticky Footer */}
        <Box
          sx={{
            position: 'sticky',
            bottom: 0,
            p: 2,
            px: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--ep-semantic-border-default)',
            background: 'var(--ep-semantic-surface-default)',
          }}
        >
          <Button
            variant="text"
            size="sm"
          >
            Save Draft
          </Button>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
            >
              {activeStep === 3 ? 'Create Event' : 'Next'}
            </Button>
          </Box>
        </Box>

        {/* Unsaved changes dialog */}
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth="xs"
          aria-labelledby="unsaved-changes-dialog-title"
        >
          <DialogTitle id="unsaved-changes-dialog-title" onClose={() => setDialogOpen(false)}>
            Unsaved Changes
          </DialogTitle>
          <DialogContent>
            <Typography variant="body2">
              You have unsaved changes. Are you sure you want to leave? Your progress will be lost.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setDialogOpen(false)}>
              Stay
            </Button>
            <Button variant="contained" color="error" onClick={() => setDialogOpen(false)}>
              Discard
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default SettingsPage;

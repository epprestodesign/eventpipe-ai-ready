import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { Autocomplete } from '@eventpipe/ui';

// ─── Fixture data ─────────────────────────────────────────────────────────

const COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia',
  'Austria', 'Bangladesh', 'Belgium', 'Brazil', 'Canada',
  'Chile', 'China', 'Colombia', 'Croatia', 'Czech Republic',
  'Denmark', 'Egypt', 'Finland', 'France', 'Germany',
  'Ghana', 'Greece', 'Hungary', 'India', 'Indonesia',
  'Ireland', 'Israel', 'Italy', 'Japan', 'Kenya',
  'Malaysia', 'Mexico', 'Morocco', 'Netherlands', 'New Zealand',
  'Nigeria', 'Norway', 'Pakistan', 'Peru', 'Philippines',
  'Poland', 'Portugal', 'Romania', 'Russia', 'Saudi Arabia',
  'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland',
  'Thailand', 'Turkey', 'Ukraine', 'United Kingdom', 'United States',
  'Vietnam', 'Zimbabwe',
];

interface Movie {
  id: number;
  title: string;
  year: number;
}

const MOVIES: Movie[] = [
  { id: 1, title: 'The Shawshank Redemption', year: 1994 },
  { id: 2, title: 'The Godfather', year: 1972 },
  { id: 3, title: 'The Dark Knight', year: 2008 },
  { id: 4, title: 'Schindler\'s List', year: 1993 },
  { id: 5, title: 'Pulp Fiction', year: 1994 },
  { id: 6, title: 'Forrest Gump', year: 1994 },
  { id: 7, title: 'Inception', year: 2010 },
  { id: 8, title: 'The Matrix', year: 1999 },
  { id: 9, title: 'Goodfellas', year: 1990 },
  { id: 10, title: 'Fight Club', year: 1999 },
];

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/Inputs/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Composition component combining TextField input, portal dropdown, option list, Chip tags (multiple mode), and Icon system (close + chevron). ' +
          'Dropdown uses PaperProps.sx for portal-safe styling. ' +
          'Options follow the backgroundFocus pattern (background-change focus rule, not outline ring). ' +
          'Supports controlled and uncontrolled usage, single/multiple selection, and freeSolo.',
      },
    },
  },
  argTypes: {
    size:     { control: 'radio',   options: ['sm', 'md', 'lg'] },
    variant:  { control: 'radio',   options: ['outlined', 'filled'] },
    multiple: { control: 'boolean' },
    freeSolo: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading:  { control: 'boolean' },
    fullWidth:{ control: 'boolean' },
    error:    { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    options:   COUNTRIES,
    label:    'Country',
    size:     'md',
    variant:  'outlined',
    multiple: false,
    freeSolo: false,
    disabled: false,
    loading:  false,
    fullWidth:false,
    error:    false,
    required: false,
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default — single-select, string options, use Controls to explore props. */
export const Default: Story = {};

/** Single and multiple selection modes side-by-side. */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mb: 1 }}
        >
          Single select — choose one country
        </Typography>
        <Autocomplete
          options={COUNTRIES}
          label="Country"
          placeholder="Search countries…"
          fullWidth
        />
      </div>
      <div>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mb: 1 }}
        >
          Multiple select — choose any number of countries
        </Typography>
        <Autocomplete
          options={COUNTRIES}
          label="Countries"
          placeholder="Search countries…"
          multiple
          fullWidth
        />
      </div>
      <div>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mb: 1 }}
        >
          Free solo — type anything or pick from list
        </Typography>
        <Autocomplete
          options={COUNTRIES}
          label="Destination"
          placeholder="Type or select a country…"
          freeSolo
          fullWidth
        />
      </div>
    </div>
  ),
};

/** Multiple mode — selected values render as Chip tags (soft, neutral). */
export const WithTags: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>(['Canada', 'Germany']);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <Typography
            variant="overline"
            color="text.secondary"
            sx={{ display: 'block', mb: 0.5 }}
          >
            Multi-select with tags — {value.length} selected
          </Typography>
          <Autocomplete
            options={COUNTRIES}
            label="Countries"
            multiple
            value={value}
            onChange={(v) => setValue((v as string[]) ?? [])}
            fullWidth
          />
        </div>
        <div>
          <Typography
            variant="overline"
            color="text.secondary"
            sx={{ display: 'block', mb: 0.5 }}
          >
            limitTags=2 — collapses overflow chips
          </Typography>
          <Autocomplete
            options={COUNTRIES}
            label="Countries"
            multiple
            limitTags={2}
            defaultValue={['Canada', 'Germany', 'France', 'Japan']}
            fullWidth
          />
        </div>
      </div>
    );
  },
};

/** Loading state — shown while options are being fetched. */
export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mb: 1 }}
        >
          Loading — spinner in input, "Loading…" text in dropdown
        </Typography>
        <Autocomplete
          options={[]}
          label="Search"
          loading
          open
          fullWidth
        />
      </div>
      <div>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mb: 1 }}
        >
          Custom loading text
        </Typography>
        <Autocomplete
          options={[]}
          label="Search"
          loading
          open
          loadingText="Fetching results…"
          fullWidth
        />
      </div>
    </div>
  ),
};

/** Disabled state — all interaction blocked. */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mb: 1 }}
        >
          Disabled — single select
        </Typography>
        <Autocomplete
          options={COUNTRIES}
          label="Country"
          defaultValue="Canada"
          disabled
          fullWidth
        />
      </div>
      <div>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mb: 1 }}
        >
          Disabled — multiple with tags
        </Typography>
        <Autocomplete
          options={COUNTRIES}
          label="Countries"
          multiple
          defaultValue={['Canada', 'Germany']}
          disabled
          fullWidth
        />
      </div>
      <div>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mb: 1 }}
        >
          Error state
        </Typography>
        <Autocomplete
          options={COUNTRIES}
          label="Country"
          error
          helperText="Please select a valid country"
          fullWidth
        />
      </div>
    </div>
  ),
};

/** Async — simulates an API call with loading state on keystroke. */
export const Async: Story = {
  render: () => {
    const [inputValue,  setInputValue]  = React.useState('');
    const [options,     setOptions]     = React.useState<Movie[]>([]);
    const [loading,     setLoading]     = React.useState(false);

    React.useEffect(() => {
      if (!inputValue) {
        setOptions([]);
        return;
      }

      setLoading(true);

      const timer = setTimeout(() => {
        const query = inputValue.toLowerCase();
        setOptions(
          MOVIES.filter((m) => m.title.toLowerCase().includes(query))
        );
        setLoading(false);
      }, 600);

      return () => clearTimeout(timer);
    }, [inputValue]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mb: 1 }}
        >
          Async search — type a movie title (600 ms mock delay)
        </Typography>
        <Autocomplete<Movie>
          options={options}
          getOptionLabel={(o) => (typeof o === 'string' ? o : o.title)}
          isOptionEqualToValue={(o, v) => o.id === v.id}
          inputValue={inputValue}
          onInputChange={setInputValue}
          loading={loading}
          noOptionsText={inputValue ? 'No movies found' : 'Start typing to search'}
          renderOption={(option, state) => (
            <span>
              <strong>{option.title}</strong>
              {' '}
              <span style={{ color: 'var(--ep-semantic-color-text-secondary)', fontSize: '0.875em' }}>
                ({option.year})
                {state.selected ? ' ✓' : ''}
              </span>
            </span>
          )}
          label="Movie"
          placeholder="Search movies…"
          fullWidth
        />
        <Typography variant="body2" color="text.secondary">
          Type "the", "pulp", or "fight" to see results.
        </Typography>
      </div>
    );
  },
};

/** Accessibility — ARIA roles, keyboard navigation, screen-reader labels. */
export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, fontFamily: 'sans-serif' }}>
      <div>
        <Typography variant="overline" color="text.secondary">
          ARIA — combobox role and live region
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          The input has <code>role="combobox"</code>, <code>aria-autocomplete="list"</code>,
          and <code>aria-expanded</code>. The listbox has <code>role="listbox"</code>;
          each option has <code>role="option"</code> and <code>aria-selected</code>.
          Navigate with ↑/↓, confirm with Enter, dismiss with Escape.
        </Typography>
        <Autocomplete
          options={COUNTRIES}
          label="Country (accessible)"
          placeholder="Start typing…"
          fullWidth
        />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">
          Required field with error
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          <code>required</code> appends * to the label and sets the required attribute on
          the native input. <code>error</code> + <code>helperText</code> provide visible
          error feedback.
        </Typography>
        <Autocomplete
          options={COUNTRIES}
          label="Country"
          required
          error
          helperText="Country is required"
          fullWidth
        />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">
          Multiple — tag keyboard removal
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
          Tags are announced as buttons. Backspace removes the last tag when the input
          is focused and empty. Each chip's × button is reachable via Tab.
        </Typography>
        <Autocomplete
          options={COUNTRIES}
          label="Countries"
          multiple
          defaultValue={['Canada', 'Japan']}
          fullWidth
        />
      </div>
    </div>
  ),
};

/**
 * Token Audit — all CSS custom properties the Autocomplete component reads.
 */
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  render: () => {
    const vars = [
      // Dropdown surface
      '--ep-component-autocomplete-dropdown-background',
      '--ep-component-autocomplete-dropdown-border-radius',
      '--ep-component-autocomplete-dropdown-shadow',
      '--ep-component-autocomplete-dropdown-max-height',
      // Option states
      '--ep-component-autocomplete-option-color',
      '--ep-component-autocomplete-option-color-disabled',
      '--ep-component-autocomplete-option-background',
      '--ep-component-autocomplete-option-background-hover',
      '--ep-component-autocomplete-option-background-focus',
      '--ep-component-autocomplete-option-background-selected',
      '--ep-component-autocomplete-option-background-selected-hover',
      '--ep-component-autocomplete-option-background-disabled',
      '--ep-component-autocomplete-option-font-size',
      '--ep-component-autocomplete-option-padding-y',
      '--ep-component-autocomplete-option-padding-x',
      // Tags
      '--ep-component-autocomplete-tag-gap',
      '--ep-component-autocomplete-tag-margin-y',
      // Indicators
      '--ep-component-autocomplete-indicator-color',
      // Loading / no-options
      '--ep-component-autocomplete-loading-color',
      '--ep-component-autocomplete-loading-font-size',
    ];

    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ color: '#666', marginBottom: 8 }}>
          Open DevTools → Computed to verify each var resolves. Total: {vars.length} vars.
        </p>
        <table style={{ borderCollapse: 'collapse', marginBottom: 32 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '4px 12px 4px 0', textAlign: 'left' }}>CSS custom property</th>
              <th style={{ padding: '4px 12px', textAlign: 'left' }}>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {vars.map((v) => (
              <tr key={v} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '4px 12px 4px 0' }}>{v}</td>
                <td style={{ padding: '4px 12px' }}>
                  <span
                    style={{
                      display:       'inline-block',
                      width:         16,
                      height:        16,
                      background:    `var(${v})`,
                      border:        '1px solid #ccc',
                      verticalAlign: 'middle',
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Typography variant="overline" color="text.secondary">Live renders</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8, maxWidth: 400 }}>
          <Autocomplete options={COUNTRIES} label="Single (outlined, md)" />
          <Autocomplete options={COUNTRIES} label="Single (filled, md)" variant="filled" />
          <Autocomplete options={COUNTRIES} label="Multiple" multiple />
          <Autocomplete options={COUNTRIES} label="Loading" loading />
          <Autocomplete options={COUNTRIES} label="Disabled" disabled defaultValue="Canada" />
          <Autocomplete options={COUNTRIES} label="Error" error helperText="Error text" />
        </div>
      </div>
    );
  },
};

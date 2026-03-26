import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@eventpipe/ui';

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Inputs/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'DatePicker — single-date selection via TextField + Popover calendar. ' +
          'Built from scratch using TextField, Popover, Button, Icon. ' +
          'No external date library. No MUI DatePicker usage. ' +
          'Controlled + uncontrolled. Keyboard navigation (Arrow/Enter/Escape).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatDisplay = (d: Date | null): string =>
  d
    ? d.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })
    : 'None';

// ─── Story 1: Default ─────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <DatePicker
          label="Event date"
          value={date}
          onChange={setDate}
        />
        <div style={{ fontSize: 13, color: '#6B7280' }}>
          Selected: <strong>{formatDisplay(date)}</strong>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default state. Click the input or calendar icon to open the popover. ' +
          'Click a date to select it. Click outside or press Escape to close.',
      },
    },
  },
};

// ─── Story 2: Controlled ──────────────────────────────────────────────────────

export const Controlled: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date(2025, 5, 15)); // June 15 2025

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <DatePicker
          label="Start date"
          value={date}
          onChange={setDate}
        />
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button
            onClick={() => setDate(new Date(2025, 0, 1))}
            style={{ padding: '4px 10px', borderRadius: 4, border: '1px solid #D1D5DB', cursor: 'pointer', fontSize: 12 }}
          >
            Set Jan 1 2025
          </button>
          <button
            onClick={() => setDate(new Date())}
            style={{ padding: '4px 10px', borderRadius: 4, border: '1px solid #D1D5DB', cursor: 'pointer', fontSize: 12 }}
          >
            Set today
          </button>
          <button
            onClick={() => setDate(null)}
            style={{ padding: '4px 10px', borderRadius: 4, border: '1px solid #D1D5DB', cursor: 'pointer', fontSize: 12 }}
          >
            Clear
          </button>
        </div>
        <div style={{ fontSize: 13, color: '#6B7280' }}>
          Value: <strong>{formatDisplay(date)}</strong>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controlled mode — consumer owns the Date value. ' +
          'External buttons can drive the value independently. ' +
          'When `value` is null, the calendar opens to the current month.',
      },
    },
  },
};

// ─── Story 3: OpenState ───────────────────────────────────────────────────────

export const OpenState: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <div style={{ height: 400 }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: '#6B7280' }}>
          Click the field to open the calendar. Today's date has a brand-colored ring.
        </div>
        <DatePicker
          label="Date"
          value={date}
          onChange={setDate}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Opens below the input via Popover (PaperProps.sx overlay pattern). ' +
          "Today's date is highlighted with a brand-colored outline ring. " +
          'Selected date shows a filled brand indicator.',
      },
    },
  },
};

// ─── Story 4: MonthNavigation ─────────────────────────────────────────────────

export const MonthNavigation: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 13, color: '#6B7280' }}>
          Click ‹ / › to navigate months. Arrow keys navigate days once the calendar is open.
        </div>
        <DatePicker
          label="Event date"
          value={date}
          onChange={setDate}
        />
        <div style={{ fontSize: 12, color: '#6B7280' }}>
          Selected: {formatDisplay(date)}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Month navigation: chevron buttons use Button(variant="text") + Icon(chevron-left/right). ' +
          'The month/year title uses aria-live="polite" to announce changes to screen readers.',
      },
    },
  },
};

// ─── Story 5: DisabledDates ───────────────────────────────────────────────────

export const DisabledDates: Story = {
  render: () => {
    const today   = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5);
    const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 20);

    // Disable specific dates (every Saturday in the current month)
    const disabledDates: Date[] = [];
    for (let d = 1; d <= 31; d++) {
      const candidate = new Date(today.getFullYear(), today.getMonth(), d);
      if (candidate.getMonth() !== today.getMonth()) break;
      if (candidate.getDay() === 6) disabledDates.push(candidate); // Saturday
    }

    const [date, setDate] = useState<Date | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 13, color: '#374151' }}>
          <strong>Constraints applied:</strong>
          <ul style={{ margin: '4px 0', paddingLeft: 20, fontSize: 12, color: '#6B7280' }}>
            <li>minDate: 5 days ago</li>
            <li>maxDate: 20 days from today</li>
            <li>Saturdays in current month disabled</li>
          </ul>
        </div>
        <DatePicker
          label="Booking date"
          value={date}
          onChange={setDate}
          minDate={minDate}
          maxDate={maxDate}
          disabledDates={disabledDates}
        />
        <div style={{ fontSize: 12, color: '#6B7280' }}>
          Selected: {formatDisplay(date)}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Disabled dates use muted text and a non-pointer cursor. ' +
          'minDate / maxDate limit the selectable range. ' +
          'disabledDates accepts an array of specific Date objects to block.',
      },
    },
  },
};

// ─── Story 6: Disabled ────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <DatePicker
        label="Locked date"
        value={new Date(2025, 3, 22)}
        disabled
      />
      <DatePicker
        label="Empty disabled"
        value={null}
        disabled
        placeholder="Not available"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Disabled state — the DatePicker delegates to TextField disabled styling. ' +
          'The calendar cannot be opened. Calendar icon is shown but non-interactive.',
      },
    },
  },
};

// ─── Story 7: Accessibility ───────────────────────────────────────────────────

export const Accessibility: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>
          <strong>Keyboard behaviour:</strong>
          <ul style={{ margin: '4px 0 0', paddingLeft: 20 }}>
            <li>Tab → focuses the text input</li>
            <li>Enter / Click → opens the calendar popover</li>
            <li>Arrow keys → navigate days (crosses month boundary automatically)</li>
            <li>Enter / Space → selects the focused day, closes calendar</li>
            <li>Escape → closes calendar without selecting</li>
            <li>← / → previous/next month buttons are Tab-reachable</li>
          </ul>
          <strong>ARIA:</strong>
          <ul style={{ margin: '4px 0 0', paddingLeft: 20 }}>
            <li>Input: <code>aria-haspopup="dialog"</code>, <code>aria-expanded</code></li>
            <li>Month title: <code>aria-live="polite"</code> announces month changes</li>
            <li>Day grid: <code>role="grid"</code> with <code>aria-label="Month Year"</code></li>
            <li>Each day: <code>aria-label</code> (full date), <code>aria-pressed</code> (selected), <code>aria-current="date"</code> (today)</li>
            <li>Weekday row: <code>aria-hidden="true"</code></li>
            <li>Calendar icon: <code>aria-hidden="true"</code></li>
          </ul>
        </div>
        <DatePicker
          label="Accessible date"
          value={date}
          onChange={setDate}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Accessibility annotations for keyboard navigation and screen reader behaviour.',
      },
    },
  },
};

// ─── Story 8: TokenAudit ──────────────────────────────────────────────────────

const DP_TOKENS: Array<{ token: string; role: string }> = [
  { token: '--ep-component-date-picker-calendar-background',    role: 'Calendar popover background' },
  { token: '--ep-component-date-picker-calendar-padding',       role: 'Calendar inner padding' },
  { token: '--ep-component-date-picker-calendar-width',         role: 'Calendar fixed width' },
  { token: '--ep-component-date-picker-header-padding-y',       role: 'Header vertical padding' },
  { token: '--ep-component-date-picker-header-font-size',       role: 'Month/year title font size' },
  { token: '--ep-component-date-picker-header-font-weight',     role: 'Month/year title font weight' },
  { token: '--ep-component-date-picker-header-color',           role: 'Month/year title color' },
  { token: '--ep-component-date-picker-weekday-font-size',      role: 'Weekday header font size' },
  { token: '--ep-component-date-picker-weekday-color',          role: 'Weekday header color' },
  { token: '--ep-component-date-picker-weekday-font-weight',    role: 'Weekday header font weight' },
  { token: '--ep-component-date-picker-cell-size',              role: 'Day cell width/height' },
  { token: '--ep-component-date-picker-cell-font-size',         role: 'Day cell font size' },
  { token: '--ep-component-date-picker-cell-border-radius',     role: 'Day cell border radius (50% = circle)' },
  { token: '--ep-component-date-picker-cell-gap',               role: 'Gap between day cells' },
  { token: '--ep-component-date-picker-day-default-color',      role: 'Day text (default)' },
  { token: '--ep-component-date-picker-day-default-background', role: 'Day background (default)' },
  { token: '--ep-component-date-picker-day-hover-color',        role: 'Day text (hover)' },
  { token: '--ep-component-date-picker-day-hover-background',   role: 'Day background (hover)' },
  { token: '--ep-component-date-picker-day-selected-color',     role: 'Day text (selected)' },
  { token: '--ep-component-date-picker-day-selected-background',role: 'Day background (selected)' },
  { token: '--ep-component-date-picker-day-today-border-color', role: "Today's ring color" },
  { token: '--ep-component-date-picker-day-today-font-weight',  role: "Today's font weight" },
  { token: '--ep-component-date-picker-day-outside-color',      role: 'Outside-month day color' },
  { token: '--ep-component-date-picker-day-disabled-color',     role: 'Disabled day color' },
  { token: '--ep-component-date-picker-day-disabled-background',role: 'Disabled day background' },
  { token: '--ep-component-date-picker-focus-ring-color',       role: 'Focus ring color' },
  { token: '--ep-component-date-picker-focus-ring-width',       role: 'Focus ring width' },
  { token: '--ep-component-date-picker-focus-ring-offset',      role: 'Focus ring offset' },
];

export const TokenAudit: Story = {
  render: () => (
    <div style={{ fontFamily: 'system-ui', fontSize: 13 }}>
      <h3 style={{ margin: '0 0 8px', fontSize: 15 }}>
        DatePicker — {DP_TOKENS.length} CSS custom properties
      </h3>
      <p style={{ margin: '0 0 16px', color: '#6B7280', fontSize: 12 }}>
        Pattern C: DayCellButton state is driven by epSelected/epToday/epDisabled/epOutside props
        mapping to their respective token groups. No hardcoded hex values in the component.
      </p>

      <div style={{ marginBottom: 24 }}>
        <DatePicker
          label="Audit preview"
          value={new Date()}
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
          {DP_TOKENS.map(({ token, role }) => {
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
      description: { story: 'Live token audit. 28 CSS custom properties with resolved values.' },
    },
  },
};

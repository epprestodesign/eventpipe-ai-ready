import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import type { DatePickerProps } from './DatePicker.types';
import { TextField } from '../TextField';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { Icon } from '../Icon';

// ─── Internal date utilities ──────────────────────────────────────────────────
// No external date library — minimal helpers only.

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const;

const WEEKDAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as const;

const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth()    === b.getMonth()    &&
  a.getDate()     === b.getDate();

const isTodayDate = (d: Date): boolean => isSameDay(d, new Date());

const startOfDay = (d: Date): Date =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate());

/** Format as MM/DD/YYYY for the text input display. */
const formatDate = (d: Date): string =>
  `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;

/**
 * Build a 6×7 (42-cell) grid for the given year/month.
 * Cells include leading days from prev month and trailing days from next month.
 */
const buildCalendarGrid = (year: number, month: number): Date[] => {
  const firstDay      = new Date(year, month, 1).getDay();          // 0=Sun
  const daysInMonth   = new Date(year, month + 1, 0).getDate();
  const prevMonthLen  = new Date(year, month, 0).getDate();
  const grid: Date[]  = [];

  // Leading cells from previous month
  for (let i = firstDay - 1; i >= 0; i--) {
    grid.push(new Date(year, month - 1, prevMonthLen - i));
  }
  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    grid.push(new Date(year, month, d));
  }
  // Trailing cells from next month
  let nextDay = 1;
  while (grid.length < 42) {
    grid.push(new Date(year, month + 1, nextDay++));
  }
  return grid;
};

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-date-picker-* custom properties.

const TOKEN = {
  fontFamily:        () => `var(--ep-component-date-picker-font-family)`,
  calendarBg:        () => `var(--ep-component-date-picker-calendar-background)`,
  calendarPadding:   () => `var(--ep-component-date-picker-calendar-padding)`,
  calendarWidth:     () => `var(--ep-component-date-picker-calendar-width)`,
  headerPy:          () => `var(--ep-component-date-picker-header-padding-y)`,
  headerFontSize:    () => `var(--ep-component-date-picker-header-font-size)`,
  headerFontWeight:  () => `var(--ep-component-date-picker-header-font-weight)`,
  headerColor:       () => `var(--ep-component-date-picker-header-color)`,
  weekdayFontSize:   () => `var(--ep-component-date-picker-weekday-font-size)`,
  weekdayColor:      () => `var(--ep-component-date-picker-weekday-color)`,
  weekdayWeight:     () => `var(--ep-component-date-picker-weekday-font-weight)`,
  cellSize:          () => `var(--ep-component-date-picker-cell-size)`,
  cellFontSize:      () => `var(--ep-component-date-picker-cell-font-size)`,
  cellRadius:        () => `var(--ep-component-date-picker-cell-border-radius)`,
  cellGap:           () => `var(--ep-component-date-picker-cell-gap)`,
  dayDefaultColor:   () => `var(--ep-component-date-picker-day-default-color)`,
  dayDefaultBg:      () => `var(--ep-component-date-picker-day-default-background)`,
  dayHoverColor:     () => `var(--ep-component-date-picker-day-hover-color)`,
  dayHoverBg:        () => `var(--ep-component-date-picker-day-hover-background)`,
  daySelectedColor:  () => `var(--ep-component-date-picker-day-selected-color)`,
  daySelectedBg:     () => `var(--ep-component-date-picker-day-selected-background)`,
  dayTodayBorder:    () => `var(--ep-component-date-picker-day-today-border-color)`,
  dayTodayWeight:    () => `var(--ep-component-date-picker-day-today-font-weight)`,
  dayOutsideColor:   () => `var(--ep-component-date-picker-day-outside-color)`,
  dayDisabledColor:  () => `var(--ep-component-date-picker-day-disabled-color)`,
  dayDisabledBg:     () => `var(--ep-component-date-picker-day-disabled-background)`,
  focusColor:        () => `var(--ep-component-date-picker-focus-ring-color)`,
  focusWidth:        () => `var(--ep-component-date-picker-focus-ring-width)`,
  focusOffset:       () => `var(--ep-component-date-picker-focus-ring-offset)`,
} as const;

// ─── Styled DayCellButton ─────────────────────────────────────────────────────
// State-driven styling — Pattern C: each visual state maps to its own token.

interface DayCellBtnProps {
  epSelected: boolean;
  epToday:    boolean;
  epDisabled: boolean;
  epOutside:  boolean;
}

const DayCellButton = styled('button', {
  shouldForwardProp: (p) =>
    p !== 'epSelected' && p !== 'epToday' && p !== 'epDisabled' && p !== 'epOutside',
})<DayCellBtnProps>(({ epSelected, epToday, epDisabled, epOutside }) => ({
  // Reset
  border:     'none',
  padding:    0,
  font:       'inherit',
  background: 'none',
  cursor:     epDisabled ? 'default' : 'pointer',

  // Layout
  width:           TOKEN.cellSize(),
  height:          TOKEN.cellSize(),
  minWidth:        TOKEN.cellSize(),
  display:         'flex',
  alignItems:      'center',
  justifyContent:  'center',
  borderRadius:    TOKEN.cellRadius(),
  fontSize:        TOKEN.cellFontSize(),
  lineHeight:      1,
  transition:      'background-color 100ms ease, color 100ms ease',  // structural

  // State colors — Pattern C
  backgroundColor: epSelected ? TOKEN.daySelectedBg()  : TOKEN.dayDefaultBg(),
  color: epSelected
    ? TOKEN.daySelectedColor()
    : epOutside
    ? TOKEN.dayOutsideColor()
    : epDisabled
    ? TOKEN.dayDisabledColor()
    : TOKEN.dayDefaultColor(),

  fontWeight: epToday && !epSelected
    ? TOKEN.dayTodayWeight()
    : 'inherit',

  // Today: inner ring outline (non-selected)
  ...(epToday && !epSelected ? {
    outline:       `1px solid ${TOKEN.dayTodayBorder()}`,
    outlineOffset: '-1px',
  } : {}),

  // Hover (Rule 8: background-change for list-like interactive surfaces)
  '&:hover:not(:disabled)': {
    backgroundColor: epSelected ? TOKEN.daySelectedBg() : TOKEN.dayHoverBg(),
    color:           epSelected ? TOKEN.daySelectedColor() : TOKEN.dayHoverColor(),
  },

  // Focus ring — Rule 8: outline ring for button controls
  '&:focus-visible': {
    outline:       `${TOKEN.focusWidth()} solid ${TOKEN.focusColor()}`,
    outlineOffset: TOKEN.focusOffset(),
  },
}));

// ─── Internal: DateCalendar ───────────────────────────────────────────────────
// Not exported. Renders the month view calendar grid.

interface DateCalendarInternalProps {
  viewMonth:         Date;  // always the 1st of the displayed month
  onViewMonthChange: (month: Date) => void;
  selectedDate:      Date | null;
  onSelectDate:      (date: Date) => void;
  minDate?:          Date;
  maxDate?:          Date;
  disabledDates?:    Date[];
  onClose?:          () => void;
}

const DateCalendar = ({
  viewMonth,
  onViewMonthChange,
  selectedDate,
  onSelectDate,
  minDate,
  maxDate,
  disabledDates,
  onClose,
}: DateCalendarInternalProps) => {
  const year  = viewMonth.getFullYear();
  const month = viewMonth.getMonth();

  const grid = useMemo(() => buildCalendarGrid(year, month), [year, month]);

  // Focused date tracks keyboard cursor — initialised to selected date or today
  const [focusedDate, setFocusedDate] = useState<Date>(
    () => selectedDate ?? new Date()
  );

  const calendarRef    = useRef<HTMLDivElement>(null);
  const pendingFocusRef = useRef(false);

  // On mount: focus the initially-highlighted cell (Popover just opened)
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      calendarRef.current
        ?.querySelector<HTMLButtonElement>('[tabindex="0"]')
        ?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // After keyboard nav: move DOM focus to the newly highlighted cell
  useEffect(() => {
    if (pendingFocusRef.current) {
      pendingFocusRef.current = false;
      calendarRef.current
        ?.querySelector<HTMLButtonElement>('[tabindex="0"]')
        ?.focus({ preventScroll: true });
    }
  }, [focusedDate]);

  // Disable check — respects min/max/disabledDates
  const isDisabled = useCallback(
    (d: Date): boolean => {
      const day = startOfDay(d);
      if (minDate && day < startOfDay(minDate)) return true;
      if (maxDate && day > startOfDay(maxDate)) return true;
      if (disabledDates?.some(dd => isSameDay(dd, d))) return true;
      return false;
    },
    [minDate, maxDate, disabledDates]
  );

  // Keyboard navigation on the grid container
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      let delta = 0;
      if (e.key === 'ArrowLeft')  delta = -1;
      if (e.key === 'ArrowRight') delta = 1;
      if (e.key === 'ArrowUp')    delta = -7;
      if (e.key === 'ArrowDown')  delta = 7;

      if (delta !== 0) {
        e.preventDefault();
        const next = new Date(focusedDate);
        next.setDate(next.getDate() + delta);
        // Cross month boundary → update view
        if (next.getMonth() !== month || next.getFullYear() !== year) {
          onViewMonthChange(new Date(next.getFullYear(), next.getMonth(), 1));
        }
        pendingFocusRef.current = true;
        setFocusedDate(next);
        return;
      }

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!isDisabled(focusedDate)) onSelectDate(focusedDate);
        return;
      }

      if (e.key === 'Escape') {
        onClose?.();
      }
    },
    [focusedDate, month, year, onViewMonthChange, isDisabled, onSelectDate, onClose]
  );

  const prevMonth = () =>
    onViewMonthChange(new Date(year, month - 1, 1));
  const nextMonth = () =>
    onViewMonthChange(new Date(year, month + 1, 1));

  const colTemplate = `repeat(7, ${TOKEN.cellSize()})`;

  return (
    <div
      ref={calendarRef}
      onKeyDown={handleKeyDown}
      style={{
        width:      TOKEN.calendarWidth(),
        padding:    TOKEN.calendarPadding(),
        // Explicit fontFamily — calendar renders in a MUI Portal (document.body)
        // so it cannot rely on ancestor CSS inheritance to set the correct typeface.
        fontFamily: TOKEN.fontFamily(),
      }}
    >
      {/* ── Month navigation header ──────────────────────────────────────── */}
      <div
        style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          paddingTop:     TOKEN.headerPy(),
          paddingBottom:  TOKEN.headerPy(),
        }}
      >
        <Button
          variant="text"
          size="sm"
          color="primary"
          aria-label="Previous month"
          onClick={prevMonth}
        >
          <Icon name="chevron-left" size="sm" />
        </Button>

        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            fontSize:   TOKEN.headerFontSize(),
            fontWeight: TOKEN.headerFontWeight(),
            color:      TOKEN.headerColor(),
          }}
        >
          {MONTHS[month]} {year}
        </div>

        <Button
          variant="text"
          size="sm"
          color="primary"
          aria-label="Next month"
          onClick={nextMonth}
        >
          <Icon name="chevron-right" size="sm" />
        </Button>
      </div>

      {/* ── Weekday header row ───────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          display:             'grid',
          gridTemplateColumns: colTemplate,
          gap:                 TOKEN.cellGap(),
          justifyContent:      'center',
          marginBottom:        TOKEN.cellGap(),
        }}
      >
        {WEEKDAYS_SHORT.map(day => (
          <div
            key={day}
            style={{
              width:          TOKEN.cellSize(),
              height:         TOKEN.cellSize(),
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              fontSize:       TOKEN.weekdayFontSize(),
              color:          TOKEN.weekdayColor(),
              fontWeight:     TOKEN.weekdayWeight(),
            }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* ── Day grid ─────────────────────────────────────────────────────── */}
      <div
        role="grid"
        aria-label={`${MONTHS[month]} ${year}`}
        style={{
          display:             'grid',
          gridTemplateColumns: colTemplate,
          gap:                 TOKEN.cellGap(),
          justifyContent:      'center',
        }}
      >
        {grid.map((date, idx) => {
          const isCurrentMonth = date.getMonth() === month;
          const isSelected     = selectedDate ? isSameDay(date, selectedDate) : false;
          const isTodayCell    = isTodayDate(date);
          const isDateDisabled = isDisabled(date);
          const isFocused      = isSameDay(date, focusedDate);

          return (
            <div key={idx} role="gridcell">
              <DayCellButton
                type="button"
                tabIndex={isFocused ? 0 : -1}
                epSelected={isSelected}
                epToday={isTodayCell}
                epDisabled={isDateDisabled}
                epOutside={!isCurrentMonth}
                disabled={isDateDisabled}
                aria-label={date.toLocaleDateString('en-US', {
                  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                })}
                aria-pressed={isSelected}
                aria-current={isTodayCell ? 'date' : undefined}
                onClick={() => {
                  setFocusedDate(date);
                  onSelectDate(date);
                  // Outside-month cells also navigate the view
                  if (!isCurrentMonth) {
                    onViewMonthChange(
                      new Date(date.getFullYear(), date.getMonth(), 1)
                    );
                  }
                }}
              >
                {date.getDate()}
              </DayCellButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ─── DatePicker ───────────────────────────────────────────────────────────────

/**
 * DatePicker — single-date selection via a text input + popover calendar.
 *
 * Composition:
 * - TextField: date display input (read-only, calendar icon endAdornment)
 * - Popover: calendar container (PaperProps.sx pattern — overlay system)
 * - Button + Icon: month navigation chevrons
 * - DateCalendar (internal): the 6×7 day grid + keyboard handler
 *
 * State model:
 * - `value` / `defaultValue`: controlled or uncontrolled date
 * - `open`: Popover visibility — internal
 * - `viewMonth`: displayed month — internal, reset on open
 *
 * Keyboard: ArrowKeys navigate grid; Enter/Space select; Escape closes.
 *
 * Spec: docs/contracts/product-system-rules.md
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  function DatePicker(
    {
      value: valueProp,
      defaultValue,
      onChange,
      label,
      placeholder = 'MM/DD/YYYY',
      disabled = false,
      minDate,
      maxDate,
      disabledDates,
      className,
      sx,
    },
    ref
  ) {
    // ── Controlled / uncontrolled ─────────────────────────────────────────
    const isControlled = valueProp !== undefined;
    const [internalValue, setInternalValue] = useState<Date | null>(
      defaultValue ?? null
    );
    const value = isControlled ? valueProp : internalValue;

    // ── Popover state ─────────────────────────────────────────────────────
    const [open, setOpen] = useState(false);
    const anchorRef       = useRef<HTMLDivElement>(null);

    // ── Calendar view state ───────────────────────────────────────────────
    const [viewMonth, setViewMonth] = useState<Date>(
      () => new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    );

    const handleOpen = () => {
      if (disabled) return;
      // Reset view to selected date's month, or current month
      setViewMonth(
        value
          ? new Date(value.getFullYear(), value.getMonth(), 1)
          : new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      );
      setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleSelectDate = (date: Date) => {
      if (!isControlled) setInternalValue(date);
      onChange?.(date);
      handleClose();
    };

    const displayValue = value ? formatDate(value) : '';

    return (
      <Box
        ref={ref}
        className={className}
        sx={sx}
        style={{ display: 'inline-block' }}
      >
        {/* ── Input trigger ──────────────────────────────────────────────── */}
        <div
          ref={anchorRef}
          onClick={handleOpen}
          style={{ cursor: disabled ? 'default' : 'pointer' }}
        >
          <TextField
            label={label}
            value={displayValue}
            placeholder={placeholder}
            disabled={disabled}
            endAdornment={
              <span
                aria-hidden="true"
                style={{ display: 'flex', color: 'inherit' }}
              >
                <Icon name="calendar" size="sm" />
              </span>
            }
            inputProps={{
              readOnly:         true,
              'aria-haspopup': 'dialog',
              'aria-expanded':  open,
              style:            { cursor: disabled ? 'default' : 'pointer' },
            }}
            sx={{
              // Prevent pointer-events on the input from blocking the wrapper click
              '& input': { pointerEvents: 'none' },
            }}
          />
        </div>

        {/* ── Calendar popover ───────────────────────────────────────────── */}
        <Popover
          open={open}
          anchorEl={anchorRef.current}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          {open && (
            <DateCalendar
              viewMonth={viewMonth}
              onViewMonthChange={setViewMonth}
              selectedDate={value ?? null}
              onSelectDate={handleSelectDate}
              minDate={minDate}
              maxDate={maxDate}
              disabledDates={disabledDates}
              onClose={handleClose}
            />
          )}
        </Popover>
      </Box>
    );
  }
);

DatePicker.displayName = 'DatePicker';

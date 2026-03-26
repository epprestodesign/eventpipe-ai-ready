import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpSize3 } from '../types/shared';

// ─── FilterChip ───────────────────────────────────────────────────────────────

/**
 * A single active filter chip rendered in the FilterBar chip row.
 *
 * Pattern MA-1: composition of Chip(selected + onDelete) with no new base component.
 */
export interface FilterChipProps {
  /** Unique key — used as React key and for identifying the filter. */
  id: string;
  /** Display label on the chip. */
  label: string;
  /** Called when the chip's × button is clicked. */
  onRemove: () => void;
  /** Prevents interaction while preserving visibility. */
  disabled?: boolean;
  /**
   * Size — inherits from FilterBar when rendered inside it.
   * @default 'md'
   */
  size?: EpSize3;
}

// ─── FilterSelectItem ─────────────────────────────────────────────────────────

/**
 * A dropdown Select rendered in the FilterBar left section.
 *
 * Pattern MA-3: async loading is supported via the `loading` flag.
 * When loading, Select shows a spinner and blocks interaction.
 * Consumer triggers option fetch on mount or on open, then clears loading.
 */
export interface FilterSelectItem {
  /** Unique key. */
  id: string;
  /** Floating label for the Select field. */
  label: string;
  /** Dropdown options. */
  options: Array<{ value: string; label: string }>;
  /** Controlled value. */
  value?: string;
  /** Called when an option is selected. Event is absorbed — value only. */
  onChange: (value: string) => void;
  /** Async loading state — shows spinner, blocks interaction. */
  loading?: boolean;
  /** Placeholder text shown when no value is selected. */
  placeholder?: string;
}

// ─── FilterBarProps ───────────────────────────────────────────────────────────

export interface FilterBarProps {
  // ── Search slot ───────────────────────────────────────────────────────────

  /** Controlled search value. When provided the search field is rendered. */
  searchValue?: string;
  /**
   * Called with the debounced search value.
   * Fired after `searchDebounceMs` have elapsed since the last keystroke.
   * Pattern MA-2: debounce is handled internally — consumer gets a clean value.
   */
  onSearchChange?: (value: string) => void;
  /** Placeholder text for the search field. @default 'Search...' */
  searchPlaceholder?: string;
  /** Debounce delay in ms for the search field. @default 300 */
  searchDebounceMs?: number;

  // ── Select filters slot ───────────────────────────────────────────────────

  /**
   * Dropdown select filters rendered in the left section.
   * Each item supports async option loading (Pattern MA-3).
   */
  selectFilters?: FilterSelectItem[];

  // ── Active filter chips ───────────────────────────────────────────────────

  /**
   * Active filter chips displayed in the chips row.
   * Pattern MA-1: each chip is Chip(selected + onDelete) composition.
   * Chips row is hidden when this array is empty or omitted.
   */
  activeFilters?: FilterChipProps[];
  /**
   * Called when "Clear all" is clicked.
   * "Clear all" button only renders when this callback is provided
   * and activeFilters.length > 0.
   */
  onClearAll?: () => void;

  // ── Actions slot ──────────────────────────────────────────────────────────

  /** Right-aligned slot for action buttons, export menus, etc. */
  actions?: ReactNode;

  // ── State ─────────────────────────────────────────────────────────────────

  /**
   * Loading state — chips area shows Skeleton rows (Pattern E).
   * Select filters show their own loading state independently via selectFilters[*].loading.
   * @default false
   */
  isLoading?: boolean;

  // ── Layout ────────────────────────────────────────────────────────────────

  /**
   * Size scale. Controls spacing, chip size, search field size, and select size.
   * @default 'md'
   */
  size?: EpSize3;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

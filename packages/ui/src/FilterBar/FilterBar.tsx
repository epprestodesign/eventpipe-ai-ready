import { forwardRef, useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';
import type { FilterBarProps } from './FilterBar.types';
import type { EpSize3 } from '../types/shared';
import MuiMenuItem from '@mui/material/MenuItem';
import { TextField } from '../TextField';
import { Select } from '../Select';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { FilterChip } from './FilterChip';
import { useDebounce } from '../hooks/useDebounce';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-filter-bar-* custom properties.

const TOKEN = {
  background:    () => `var(--ep-component-filter-bar-background)`,
  py:            (s: EpSize3) => `var(--ep-component-filter-bar-padding-${s}-y)`,
  px:            (s: EpSize3) => `var(--ep-component-filter-bar-padding-${s}-x)`,
  gap:           (s: EpSize3) => `var(--ep-component-filter-bar-gap-${s})`,
  chipGap:       (s: EpSize3) => `var(--ep-component-filter-bar-chip-gap-${s})`,
  searchMinW:    () => `var(--ep-component-filter-bar-search-min-width)`,
  searchMaxW:    () => `var(--ep-component-filter-bar-search-max-width)`,
  dividerColor:  () => `var(--ep-component-filter-bar-divider-color)`,
  dividerHeight: () => `var(--ep-component-filter-bar-divider-height)`,
  countColor:    () => `var(--ep-component-filter-bar-count-color)`,
  countFontSize: () => `var(--ep-component-filter-bar-count-font-size)`,
} as const;

// ─── Size maps ─────────────────────────────────────────────────────────────
// Button "Clear all" size — one step smaller than the bar size for visual hierarchy.
const CLEAR_BTN_SIZE: Record<EpSize3, EpSize3> = {
  sm: 'sm',
  md: 'sm',
  lg: 'md',
};

// Skeleton chip widths — varies to look natural during loading.
const SKELETON_WIDTHS = [80, 100, 72, 96] as const;

// ─── FilterBar ────────────────────────────────────────────────────────────────

/**
 * FilterBar — search + filter chip + select filter composition.
 *
 * Patterns used:
 * - MA-1: FilterChip composition (Chip selected + onDelete)
 * - MA-2: Debounced search input (useDebounce hook)
 * - MA-3: Async option loading for SelectFilter items
 * - Pattern C: Toolbar state — chips row visible only when activeFilters.length > 0
 * - Pattern E: Loading state — chips area shows Skeleton when isLoading
 * - Pattern F: Empty state — consumer renders below FilterBar (not inside)
 *
 * Layout:
 * ```
 * [left: search + selects + | + chips + clear all] [right: actions]
 * ```
 *
 * Spec: docs/contracts/product-system-rules.md
 */
export const FilterBar = forwardRef<HTMLDivElement, FilterBarProps>(
  function FilterBar(
    {
      searchValue,
      onSearchChange,
      searchPlaceholder = 'Search...',
      searchDebounceMs = 300,
      selectFilters,
      activeFilters,
      onClearAll,
      actions,
      isLoading = false,
      size = 'md',
      className,
      sx,
    },
    ref
  ) {
    // ── MA-2: Internal search state + debounce ──────────────────────────────
    // FilterBar owns the local input value so the TextField is always controlled.
    // The debounced value is what propagates to onSearchChange (consumer's data layer).
    const [localSearch, setLocalSearch] = useState(searchValue ?? '');

    // Sync prop → local if parent controls the value externally (reset case).
    useEffect(() => {
      setLocalSearch(searchValue ?? '');
    }, [searchValue]);

    const debouncedSearch = useDebounce(localSearch, searchDebounceMs);

    useEffect(() => {
      onSearchChange?.(debouncedSearch);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearch]);

    const handleSearchInput = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => setLocalSearch(e.target.value),
      []
    );

    // ── Derived flags ────────────────────────────────────────────────────────
    const hasSearch = searchValue !== undefined || onSearchChange !== undefined;
    const hasSelects = Boolean(selectFilters?.length);
    const hasChips = Boolean(activeFilters?.length) || isLoading;
    const showDivider = (hasSearch || hasSelects) && hasChips;
    const showClearAll = Boolean(onClearAll) && Boolean(activeFilters?.length) && !isLoading;

    return (
      <Box
        ref={ref}
        className={className}
        sx={sx}
        style={{
          backgroundColor: TOKEN.background(),
          padding: `${TOKEN.py(size)} ${TOKEN.px(size)}`,
          display: 'flex',
          alignItems: 'flex-start',
          gap: TOKEN.gap(size),
          flexWrap: 'wrap',
        }}
      >
        {/* ── Left group: search + selects ─────────────────────────────────── */}
        {(hasSearch || hasSelects) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: TOKEN.gap(size),
              flexShrink: 0,
            }}
          >
            {/* Search input — MA-2: debounce is handled internally */}
            {hasSearch && (
              <div
                style={{
                  minWidth: TOKEN.searchMinW(),
                  maxWidth: TOKEN.searchMaxW(),
                  flex: '1 1 auto',
                }}
              >
                <TextField
                  size={size}
                  value={localSearch}
                  onChange={handleSearchInput}
                  placeholder={searchPlaceholder}
                  startAdornment={
                    <span aria-hidden="true" style={{ display: 'flex', color: 'inherit' }}>
                      <Icon name="search" size="sm" />
                    </span>
                  }
                />
              </div>
            )}

            {/* Select filters — MA-3: each exposes loading prop for async options */}
            {selectFilters?.map((sf) => (
              <div key={sf.id} style={{ minWidth: '140px' }}>
                <Select
                  size={size}
                  label={sf.label}
                  value={sf.value ?? ''}
                  onChange={(e) => sf.onChange(e.target.value as string)}
                  loading={sf.loading}
                  placeholder={sf.placeholder}
                  displayEmpty={Boolean(sf.placeholder)}
                >
                  {sf.options.map((opt) => (
                    // MuiMenuItem used for Select option children (value prop required by MUI Select).
                    // EP's MenuItem is for contextual menus — different component role.
                    // Accepted pattern: see apps/storybook/stories/Select.stories.tsx.
                    <MuiMenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MuiMenuItem>
                  ))}
                </Select>
              </div>
            ))}
          </div>
        )}

        {/* ── Vertical divider — only when both sections are present ──────── */}
        {showDivider && (
          <div
            aria-hidden="true"
            style={{
              width: '1px',
              height: TOKEN.dividerHeight(),
              backgroundColor: TOKEN.dividerColor(),
              flexShrink: 0,
              alignSelf: 'center',
            }}
          />
        )}

        {/* ── Chips row — Pattern MA-1 + Pattern E (loading) ──────────────── */}
        {hasChips && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: TOKEN.chipGap(size),
              flex: '1 1 auto',
            }}
          >
            {isLoading ? (
              // Pattern E: loading state — Skeleton chips
              SKELETON_WIDTHS.map((w, i) => (
                <MuiSkeleton
                  key={i}
                  variant="rounded"
                  width={w}
                  height={size === 'sm' ? 24 : size === 'lg' ? 40 : 32}
                  // structural heights matching Chip size tokens (sm=24px, md=32px, lg=40px)
                />
              ))
            ) : (
              // Pattern MA-1: active filter chips
              activeFilters?.map((filter) => (
                <FilterChip
                  key={filter.id}
                  id={filter.id}
                  label={filter.label}
                  onRemove={filter.onRemove}
                  disabled={filter.disabled}
                  size={size}
                />
              ))
            )}

            {/* Clear all — only shown with chips, no loading */}
            {showClearAll && (
              <Button
                variant="text"
                size={CLEAR_BTN_SIZE[size]}
                color="primary"
                onClick={onClearAll}
              >
                Clear all
              </Button>
            )}
          </div>
        )}

        {/* ── Filter count — shown when chips exist and not loading ─────────── */}
        {!isLoading && activeFilters && activeFilters.length > 0 && (
          <span
            aria-live="polite"
            style={{
              color: TOKEN.countColor(),
              fontSize: TOKEN.countFontSize(),
              alignSelf: 'center',
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}
          >
            {activeFilters.length} active
          </span>
        )}

        {/* ── Actions slot — right-aligned ──────────────────────────────────── */}
        {actions && (
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: TOKEN.gap(size),
              flexShrink: 0,
            }}
          >
            {actions}
          </div>
        )}
      </Box>
    );
  }
);

FilterBar.displayName = 'FilterBar';

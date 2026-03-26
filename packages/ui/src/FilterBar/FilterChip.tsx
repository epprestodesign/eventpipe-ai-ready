import { forwardRef } from 'react';
import { Chip } from '../Chip';
import type { FilterChipProps } from './FilterBar.types';

/**
 * FilterChip — MA-1 composition pattern.
 *
 * A filter chip representing an active filter. Always:
 * - selected (soft primary background)
 * - removable (× button via onDelete → onRemove)
 *
 * No new base component. No new token namespace.
 * Composes Chip(variant="soft", color="primary", selected, onDelete).
 *
 * Usage:
 * ```tsx
 * <FilterChip id="status" label="Status: Active" onRemove={() => clearFilter('status')} />
 * ```
 *
 * Pattern: docs/contracts/product-system-rules.md — MA-1
 */
export const FilterChip = forwardRef<HTMLDivElement, FilterChipProps>(
  function FilterChip({ id: _id, label, onRemove, disabled = false, size = 'md' }, ref) {
    return (
      <Chip
        ref={ref}
        label={label}
        variant="soft"
        color="primary"
        size={size}
        selected={true}
        onDelete={onRemove}
        disabled={disabled}
      />
    );
  }
);

FilterChip.displayName = 'FilterChip';

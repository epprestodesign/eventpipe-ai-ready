import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import type { TableToolbarProps } from './Table.types';

// ─── Token helpers ─────────────────────────────────────────────────────────

const TOKEN = {
  background:         () => `var(--ep-component-table-toolbar-background)`,
  selectedBackground: () => `var(--ep-component-table-toolbar-selected-background)`,
  py:                 () => `var(--ep-component-table-toolbar-padding-y)`,
  px:                 () => `var(--ep-component-table-toolbar-padding-x)`,
} as const;

// ─── TableToolbar ────────────────────────────────────────────────────────────

/**
 * TableToolbar — action bar placed above a Table.
 *
 * Two visual states driven by selectionCount:
 *   - Default (selectionCount === 0 or undefined): shows title + actions
 *   - Selected (selectionCount > 0): switches to selectedBackground token,
 *     shows selectionTitle + selectionActions
 *
 * Selection state is always consumer-managed. This component is purely
 * presentational — it does not track or modify selection.
 *
 * selectionTitle is always consumer-provided for i18n control.
 *
 * ```tsx
 * <TableToolbar
 *   title="Events"
 *   selectionCount={selected.size}
 *   selectionTitle={`${selected.size} selected`}
 *   actions={<Button>Export</Button>}
 *   selectionActions={<Button color="error">Delete</Button>}
 * />
 * ```
 *
 * Spec: docs/specs/components/table.md
 */
export const TableToolbar = forwardRef<HTMLDivElement, TableToolbarProps>(
  function TableToolbar(
    { title, selectionCount = 0, selectionTitle, actions, selectionActions, className, sx },
    ref
  ) {
    const isSelected = selectionCount > 0;

    return (
      <Box
        ref={ref}
        role="toolbar"
        // aria-live so selection count changes are announced by screen readers
        aria-live="polite"
        className={className}
        sx={sx}
        style={{
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'space-between',
          padding:         `${TOKEN.py()} ${TOKEN.px()}`,
          backgroundColor: isSelected
            ? TOKEN.selectedBackground()
            : TOKEN.background(),
          borderRadius:    '4px 4px 0 0', // structural — matches table container radius on top
          minHeight:       '52px',         // structural — prevents layout shift on state switch
          transition:      'background-color 150ms ease', // structural — smooth state transition
        }}
      >
        {/* Left slot — title or selection count */}
        <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>
          {isSelected ? selectionTitle : title}
        </div>

        {/* Right slot — actions or selection actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {isSelected ? selectionActions : actions}
        </div>
      </Box>
    );
  }
);

TableToolbar.displayName = 'TableToolbar';

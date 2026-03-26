import { forwardRef } from 'react';
import MuiTableHead from '@mui/material/TableHead';
import { styled } from '@mui/material/styles';
import type { TableHeadProps } from './Table.types';

// ─── Token helpers ─────────────────────────────────────────────────────────

const TOKEN = {
  background: () => `var(--ep-component-table-header-background)`,
} as const;

// ─── Styled component ───────────────────────────────────────────────────────

const StyledTableHead = styled(MuiTableHead)({
  // Background applied at the section level. Also applied per-cell in
  // TableHeaderCell so sticky-header mode (position:sticky on th) inherits
  // the correct background rather than the container color.
  backgroundColor: TOKEN.background(),
});

// ─── TableHead ──────────────────────────────────────────────────────────────

/**
 * TableHead — semantic <thead> wrapper.
 *
 * MUI context: sets variant='head' on TableCell descendants so they
 * render as <th> elements automatically.
 *
 * Spec: docs/specs/components/table.md
 */
export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  function TableHead({ className, sx, children }, ref) {
    return (
      <StyledTableHead ref={ref} className={className} sx={sx}>
        {children}
      </StyledTableHead>
    );
  }
);

TableHead.displayName = 'TableHead';

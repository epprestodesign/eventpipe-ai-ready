import { forwardRef } from 'react';
import MuiTableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import type { TableBodyProps } from './Table.types';

// No token-driven styles on the body section itself —
// visual styling lives on TableRow (backgrounds) and TableCell (borders, padding, color).

const StyledTableBody = styled(MuiTableBody)({});

// ─── TableBody ──────────────────────────────────────────────────────────────

/**
 * TableBody — semantic <tbody> wrapper.
 *
 * Spec: docs/specs/components/table.md
 */
export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  function TableBody({ className, sx, children }, ref) {
    return (
      <StyledTableBody ref={ref} className={className} sx={sx}>
        {children}
      </StyledTableBody>
    );
  }
);

TableBody.displayName = 'TableBody';

import { forwardRef } from 'react';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import type { TableProps } from './Table.types';
import { TableSizeContext } from './TableContext';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-table-* custom properties.

const TOKEN = {
  background:   () => `var(--ep-component-table-background)`,
  borderColor:  () => `var(--ep-component-table-border-color)`,
  borderRadius: () => `var(--ep-component-table-border-radius)`,
} as const;

// ─── Styled components ──────────────────────────────────────────────────────

const StyledContainer = styled(MuiTableContainer)({
  backgroundColor: TOKEN.background(),
  borderRadius:    TOKEN.borderRadius(),
  border:          `1px solid ${TOKEN.borderColor()}`,
  // Framework reset — MuiTableContainer does not set overflow by default
  overflow: 'auto',
});

const StyledTable = styled(MuiTable)({
  width: '100%',
  // Framework reset — MUI defaults to border-collapse:separate; EP uses collapse
  // so cell borders merge cleanly with the container border.
  borderCollapse: 'collapse',
});

// ─── Table ──────────────────────────────────────────────────────────────────

/**
 * Table — root container wrapping MuiTableContainer + MuiTable.
 *
 * Provides TableSizeContext to all descendant TableCell and TableHeaderCell
 * components. Size cascades automatically — no prop drilling required.
 *
 * ```tsx
 * <Table size="md" stickyHeader>
 *   <TableHead>...</TableHead>
 *   <TableBody>...</TableBody>
 * </Table>
 * ```
 *
 * Spec: docs/specs/components/table.md
 */
export const Table = forwardRef<HTMLDivElement, TableProps>(
  function Table({ size = 'md', stickyHeader = false, className, sx, children }, ref) {
    return (
      <TableSizeContext.Provider value={size}>
        <StyledContainer ref={ref} className={className} sx={sx}>
          <StyledTable stickyHeader={stickyHeader}>
            {children}
          </StyledTable>
        </StyledContainer>
      </TableSizeContext.Provider>
    );
  }
);

Table.displayName = 'Table';

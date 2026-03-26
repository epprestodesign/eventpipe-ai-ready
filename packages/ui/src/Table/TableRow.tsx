import { forwardRef } from 'react';
import MuiTableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import type { TableRowProps } from './Table.types';

// ─── Token helpers ─────────────────────────────────────────────────────────

const TOKEN = {
  background:              () => `var(--ep-component-table-row-background)`,
  backgroundHover:         () => `var(--ep-component-table-row-background-hover)`,
  backgroundSelected:      () => `var(--ep-component-table-row-background-selected)`,
  backgroundSelectedHover: () => `var(--ep-component-table-row-background-selected-hover)`,
} as const;

// ─── Styled component ───────────────────────────────────────────────────────

interface StyledRowProps {
  epSelected: boolean;
  epHover: boolean;
}

const StyledRow = styled(MuiTableRow, {
  shouldForwardProp: (prop) => prop !== 'epSelected' && prop !== 'epHover',
})<StyledRowProps>(({ epSelected, epHover }) => ({
  backgroundColor: epSelected ? TOKEN.backgroundSelected() : TOKEN.background(),

  // Hover — scoped away from non-hoverable rows
  ...(epHover && {
    '&:hover': {
      backgroundColor: epSelected
        ? TOKEN.backgroundSelectedHover()
        : TOKEN.backgroundHover(),
    },
  }),

  // Framework reset — prevent MUI from applying its own selected/hover styles
  // which would conflict with our token-driven colors.
  '&.Mui-selected': {
    backgroundColor: TOKEN.backgroundSelected(),
    '&:hover': {
      backgroundColor: epHover ? TOKEN.backgroundSelectedHover() : TOKEN.backgroundSelected(),
    },
  },
}));

// ─── TableRow ───────────────────────────────────────────────────────────────

/**
 * TableRow — <tr> with token-driven hover and selection states.
 *
 * Selection state is always consumer-managed. This component is purely
 * presentational: pass `selected={true}` to apply the selected background.
 *
 * Row borders come from cell border-bottom — not from the row element itself
 * (border-collapse:collapse on the table makes row borders unreliable).
 *
 * Spec: docs/specs/components/table.md
 */
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  function TableRow({ selected = false, hover = true, className, sx, children }, ref) {
    return (
      <StyledRow
        ref={ref}
        epSelected={selected}
        epHover={hover}
        className={className}
        sx={sx}
      >
        {children}
      </StyledRow>
    );
  }
);

TableRow.displayName = 'TableRow';

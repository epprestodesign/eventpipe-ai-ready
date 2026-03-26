import { forwardRef } from 'react';
import MuiTableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import type { TableCellProps, TableSize, TableCellPadding, TableCellAlign } from './Table.types';
import { useTableSize } from './TableContext';

// ─── Token helpers ─────────────────────────────────────────────────────────

const TOKEN = {
  color:         () => `var(--ep-component-table-cell-color)`,
  fontSize:      (size: TableSize) => `var(--ep-component-table-cell-font-size-${size})`,
  py:            (size: TableSize) => `var(--ep-component-table-cell-padding-${size}-y)`,
  px:            (size: TableSize) => `var(--ep-component-table-cell-padding-${size}-x)`,
  checkboxPy:    () => `var(--ep-component-table-padding-checkbox-y)`,
  checkboxPx:    () => `var(--ep-component-table-padding-checkbox-x)`,
  borderColor:   () => `var(--ep-component-table-row-border-color)`,
} as const;

// ─── Styled component ───────────────────────────────────────────────────────

interface StyledCellProps {
  epSize: TableSize;
  epPadding: TableCellPadding;
  epAlign: TableCellAlign;
}

const StyledCell = styled(MuiTableCell, {
  shouldForwardProp: (prop) =>
    prop !== 'epSize' && prop !== 'epPadding' && prop !== 'epAlign',
})<StyledCellProps>(({ epSize, epPadding, epAlign }) => ({
  color:     TOKEN.color(),
  fontSize:  TOKEN.fontSize(epSize),
  textAlign: epAlign,

  // Padding modes
  ...(epPadding === 'none' && {
    padding: 0,
    // Framework reset — MUI applies border-bottom on cells; remove for 'none' cells
    borderBottom: 'none',
  }),

  ...(epPadding === 'checkbox' && {
    padding:      `${TOKEN.checkboxPy()} ${TOKEN.checkboxPx()}`,
    // Column width is content-driven (Checkbox natural size) — not tokenized
    borderBottom: `1px solid ${TOKEN.borderColor()}`,
  }),

  ...(epPadding === 'normal' && {
    padding:      `${TOKEN.py(epSize)} ${TOKEN.px(epSize)}`,
    // Framework reset — replace MUI's hardcoded rgba(224,224,224,1) border
    borderBottom: `1px solid ${TOKEN.borderColor()}`,
  }),

  // Remove bottom border from the last row's cells to avoid double border
  // with the container outline.
  'tr:last-child &': {
    borderBottom: 'none',
  },
}));

// ─── TableCell ──────────────────────────────────────────────────────────────

/**
 * TableCell — <td> data cell with size context and three padding modes.
 *
 * Size inherits from the nearest Table via TableSizeContext.
 * Override per-cell with the `size` prop.
 *
 * padding="checkbox" — reduced padding for selection columns.
 * padding="none"     — no padding; consumer owns internal layout.
 *
 * Spec: docs/specs/components/table.md
 */
export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  function TableCell(
    { size, align = 'left', padding = 'normal', colSpan, className, sx, children },
    ref
  ) {
    const contextSize = useTableSize();
    const resolvedSize = size ?? contextSize;

    return (
      <StyledCell
        ref={ref}
        epSize={resolvedSize}
        epPadding={padding}
        epAlign={align}
        colSpan={colSpan}
        className={className}
        sx={sx}
      >
        {children}
      </StyledCell>
    );
  }
);

TableCell.displayName = 'TableCell';

import { forwardRef } from 'react';
import MuiTableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Icon } from '../Icon';
import type {
  TableHeaderCellProps,
  TableSize,
  TableCellPadding,
  TableCellAlign,
  SortDirection,
} from './Table.types';
import { useTableSize } from './TableContext';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-table-* custom properties.

const TOKEN = {
  color:              () => `var(--ep-component-table-header-color)`,
  fontSize:           () => `var(--ep-component-table-header-font-size)`,
  fontWeight:         () => `var(--ep-component-table-header-font-weight)`,
  py:                 (size: TableSize) => `var(--ep-component-table-header-padding-${size}-y)`,
  px:                 (size: TableSize) => `var(--ep-component-table-header-padding-${size}-x)`,
  checkboxPy:         () => `var(--ep-component-table-padding-checkbox-y)`,
  checkboxPx:         () => `var(--ep-component-table-padding-checkbox-x)`,
  borderColor:        () => `var(--ep-component-table-row-border-color)`,
  headerBackground:   () => `var(--ep-component-table-header-background)`,
  sortIconColor:      () => `var(--ep-component-table-header-sort-icon-color)`,
  sortIconColorActive:() => `var(--ep-component-table-header-sort-icon-color-active)`,
  focusColor:         () => `var(--ep-component-table-focus-ring-color)`,
  focusWidth:         () => `var(--ep-component-table-focus-ring-width)`,
  focusOffset:        () => `var(--ep-component-table-focus-ring-offset)`,
} as const;

// ─── Sort icon helpers ──────────────────────────────────────────────────────

const getSortIconName = (dir: SortDirection): 'chevron-up' | 'chevron-down' | 'sort' => {
  if (dir === 'asc')  return 'chevron-up';
  if (dir === 'desc') return 'chevron-down';
  return 'sort'; // false — sortable but no active direction
};

// ─── Styled components ──────────────────────────────────────────────────────

interface StyledHeaderCellProps {
  epSize: TableSize;
  epPadding: TableCellPadding;
  epAlign: TableCellAlign;
}

const StyledHeaderCell = styled(MuiTableCell, {
  shouldForwardProp: (prop) =>
    prop !== 'epSize' && prop !== 'epPadding' && prop !== 'epAlign',
})<StyledHeaderCellProps>(({ epSize, epPadding, epAlign }) => ({
  color:           TOKEN.color(),
  fontSize:        TOKEN.fontSize(),
  fontWeight:      TOKEN.fontWeight(),
  textAlign:       epAlign,
  // Applied per-cell so sticky-header mode inherits the correct background
  backgroundColor: TOKEN.headerBackground(),

  // Padding modes
  ...(epPadding === 'none' && {
    padding:      0,
    borderBottom: 'none',
  }),

  ...(epPadding === 'checkbox' && {
    padding:      `${TOKEN.checkboxPy()} ${TOKEN.checkboxPx()}`,
    borderBottom: `1px solid ${TOKEN.borderColor()}`,
  }),

  ...(epPadding === 'normal' && {
    padding:      `${TOKEN.py(epSize)} ${TOKEN.px(epSize)}`,
    // Framework reset — replace MUI's hardcoded rgba(224,224,224,1) border
    borderBottom: `1px solid ${TOKEN.borderColor()}`,
  }),
}));

/**
 * SortButton — reset-styled button that fills the header cell.
 * Used when onSort is provided. The outer <th> carries aria-sort;
 * this button provides the interactive + focus affordance.
 *
 * Deviation: does not use MuiTableSortLabel — it imports @mui/icons-material
 * directly, violating the icon system contract. See deviations register.
 */
const SortButton = styled('button')({
  // Full button reset
  background:    'none',
  border:        'none',
  padding:       0,
  margin:        0,
  cursor:        'pointer',
  font:          'inherit',
  color:         'inherit',
  textAlign:     'inherit',

  // Fill cell + align icon
  display:       'flex',
  alignItems:    'center',
  gap:           '4px', // structural — gap between label and sort icon
  width:         '100%',

  '&:focus-visible': {
    outline:       `${TOKEN.focusWidth()} solid ${TOKEN.focusColor()}`,
    outlineOffset: TOKEN.focusOffset(),
    borderRadius:  '2px', // structural — slight rounding on the focus hit area
  },
});

// ─── TableHeaderCell ────────────────────────────────────────────────────────

/**
 * TableHeaderCell — <th scope="col"> with optional sort affordance.
 *
 * Sort contract:
 * - sortDirection={undefined} → column is not sortable; no icon rendered
 * - sortDirection={false}     → column is sortable, not the active sort; muted icon
 * - sortDirection="asc"|"desc"→ active sort; directional icon + active color
 *
 * aria-sort is passed to MUI TableCell which sets the attribute automatically.
 * scope="col" is fixed internally and not exposed as a prop.
 *
 * No MuiTableSortLabel is used — it couples to @mui/icons-material directly.
 *
 * Spec: docs/specs/components/table.md
 */
export const TableHeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  function TableHeaderCell(
    {
      size,
      align = 'left',
      padding = 'normal',
      colSpan,
      sortDirection,
      onSort,
      className,
      sx,
      children,
    },
    ref
  ) {
    const contextSize = useTableSize();
    const resolvedSize = size ?? contextSize;

    const isSortable = sortDirection !== undefined;
    const isSortActive = sortDirection === 'asc' || sortDirection === 'desc';

    const sortIconColor = isSortActive
      ? TOKEN.sortIconColorActive()
      : TOKEN.sortIconColor();

    return (
      <StyledHeaderCell
        ref={ref}
        // scope="col" is a fixed structural accessibility requirement — not configurable
        scope="col"
        // MUI TableCell reads sortDirection to set aria-sort automatically
        sortDirection={sortDirection}
        epSize={resolvedSize}
        epPadding={padding}
        epAlign={align}
        colSpan={colSpan}
        className={className}
        sx={sx}
      >
        {onSort !== undefined ? (
          <SortButton type="button" onClick={onSort}>
            <span>{children}</span>
            {isSortable && (
              // Span sets color via currentColor — Icon inherits it.
              // TOKEN string is assigned as inline style: valid CSS var reference.
              <span
                style={{
                  color:   sortIconColor,
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon name={getSortIconName(sortDirection)} size="xs" />
              </span>
            )}
          </SortButton>
        ) : (
          <>
            {children}
            {isSortable && (
              <span
                style={{
                  color:        sortIconColor,
                  display:      'inline-flex',
                  alignItems:   'center',
                  marginLeft:   '4px', // structural — icon spacing when not in a button
                  verticalAlign: 'middle',
                }}
              >
                <Icon name={getSortIconName(sortDirection)} size="xs" />
              </span>
            )}
          </>
        )}
      </StyledHeaderCell>
    );
  }
);

TableHeaderCell.displayName = 'TableHeaderCell';

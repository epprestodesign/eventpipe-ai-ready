import { forwardRef } from 'react';
import MuiPagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import type { PaginationProps } from './Pagination.types';
import type { EpSize3 } from '../types/shared';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-pagination-* custom properties.

const TOKEN = {
  fontFamily:       ()          => `var(--ep-component-pagination-font-family)`,
  gap:              ()          => `var(--ep-component-pagination-gap)`,
  borderRadius:     (s: string) => `var(--ep-component-pagination-item-border-radius-${s})`,
  width:            (s: EpSize3)=> `var(--ep-component-pagination-item-size-${s}-width)`,
  height:           (s: EpSize3)=> `var(--ep-component-pagination-item-size-${s}-height)`,
  fontSize:         (s: EpSize3)=> `var(--ep-component-pagination-item-size-${s}-font-size)`,
  color:            ()          => `var(--ep-component-pagination-item-color)`,
  colorSelected:    ()          => `var(--ep-component-pagination-item-color-selected)`,
  colorDisabled:    ()          => `var(--ep-component-pagination-item-color-disabled)`,
  bg:               ()          => `var(--ep-component-pagination-item-background)`,
  bgHover:          ()          => `var(--ep-component-pagination-item-background-hover)`,
  bgFocus:          ()          => `var(--ep-component-pagination-item-background-focus)`,
  bgSelected:       ()          => `var(--ep-component-pagination-item-background-selected)`,
  bgDisabled:       ()          => `var(--ep-component-pagination-item-background-disabled)`,
  border:           ()          => `var(--ep-component-pagination-item-border)`,
  borderSelected:   ()          => `var(--ep-component-pagination-item-border-selected)`,
  borderDisabled:   ()          => `var(--ep-component-pagination-item-border-disabled)`,
  focusColor:       ()          => `var(--ep-component-pagination-item-focus-ring-color)`,
  focusWidth:       ()          => `var(--ep-component-pagination-item-focus-ring-width)`,
  focusOffset:      ()          => `var(--ep-component-pagination-item-focus-ring-offset)`,
} as const;

// ─── MUI size map ─────────────────────────────────────────────────────────
// Map our 3-tier scale to MUI's size — MUI's dimensions are overridden by TOKEN,
// but MUI uses its own size to conditionally render icon sizes internally.
const MUI_SIZE: Record<EpSize3, 'small' | 'medium' | 'large'> = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
};

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledPaginationProps {
  epSize: EpSize3;
}

const StyledPagination = styled(MuiPagination, {
  shouldForwardProp: (prop) => prop !== 'epSize',
})<StyledPaginationProps>(({ epSize }) => ({
  // ── Item list container ────────────────────────────────────────────────
  '& .MuiPagination-ul': {
    // Framework reset — MUI sets gap via margin on items; use explicit gap
    gap:    TOKEN.gap(),
    margin: 0,
  },

  // ── All items (page numbers, prev/next, ellipsis) ─────────────────────
  '& .MuiPaginationItem-root': {
    // fontFamily: explicitly set — MUI theme Roboto bleeds through without this.
    fontFamily:      TOKEN.fontFamily(),
    color:           TOKEN.color(),
    backgroundColor: TOKEN.bg(),
    // Shape — circular by default; .MuiPaginationItem-rounded overrides below
    borderRadius:    TOKEN.borderRadius('circular'),
    // Size — TOKEN-driven; Framework reset — MUI sets min-width and padding
    width:           TOKEN.width(epSize),
    height:          TOKEN.height(epSize),
    minWidth:        'unset',
    padding:         0,
    fontSize:        TOKEN.fontSize(epSize),
    // Framework reset — MUI adds margin between items via the list; we use gap on ul
    margin:          0,
    // Framework reset — MUI sets lineHeight to 1.43; enforce our own
    lineHeight:      1,
    // Layout — center the page number / icon
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',

    // ── Hover ──────────────────────────────────────────────────────────
    '&:hover': {
      backgroundColor: TOKEN.bgHover(),
    },

    // ── Focus (button/interactive surface rule: outline ring) ──────────
    // Static brand.primary color — no color prop on Pagination.
    '&.Mui-focusVisible': {
      outline:       `${TOKEN.focusWidth()} solid ${TOKEN.focusColor()}`,
      outlineOffset: TOKEN.focusOffset(),
      backgroundColor: TOKEN.bgFocus(),
      // Framework reset — MUI adds box-shadow on focusVisible
      boxShadow: 'none',
    },

    // ── Selected ───────────────────────────────────────────────────────
    '&.Mui-selected': {
      backgroundColor: TOKEN.bgSelected(),
      color:           TOKEN.colorSelected(),
      '&:hover': {
        // Framework reset — MUI lightens selected on hover; keep our token
        backgroundColor: TOKEN.bgSelected(),
      },
      '&.Mui-focusVisible': {
        backgroundColor: TOKEN.bgSelected(),
      },
    },

    // ── Disabled ───────────────────────────────────────────────────────
    '&.Mui-disabled': {
      color:           TOKEN.colorDisabled(),
      backgroundColor: TOKEN.bgDisabled(),
      // Framework reset — MUI uses 0.38 opacity; we use dedicated color tokens
      opacity:         1,
      pointerEvents:   'none',
    },
  },

  // ── Rounded shape override ─────────────────────────────────────────────
  // MUI adds .MuiPaginationItem-rounded when shape="rounded"
  '& .MuiPaginationItem-rounded': {
    borderRadius: TOKEN.borderRadius('rounded'),
  },

  // ── Outlined variant — add border to all items ─────────────────────────
  '& .MuiPaginationItem-outlined': {
    border: `1px solid ${TOKEN.border()}`,
    // Outlined selected: match border to filled background
    '&.Mui-selected': {
      border: `1px solid ${TOKEN.borderSelected()}`,
    },
    // Outlined disabled: keep border at reduced opacity via color token
    '&.Mui-disabled': {
      border: `1px solid ${TOKEN.borderDisabled()}`,
    },
  },

  // ── Ellipsis items — non-interactive, no hover/focus styles ───────────
  '& .MuiPaginationItem-ellipsis': {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    cursor: 'default',
  },

  // ── Navigation icons (prev/next/first/last) — scale with item size ────
  '& .MuiPaginationItem-icon': {
    fontSize: TOKEN.fontSize(epSize),
    // Framework reset — MUI sizes the icon separately from the item font
    width:  TOKEN.fontSize(epSize),
    height: TOKEN.fontSize(epSize),
  },
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Pagination — row of page-number buttons for navigating paged content.
 *
 * Supports controlled (`page` + `onChange`) and uncontrolled (`defaultPage`) usage.
 * `variant="outlined"` adds a border to each item.
 * `shape="rounded"` uses square corners instead of circular.
 *
 * Focus pattern: static brand.primary focus ring (button/interactive surface rule).
 * Selected item: filled brand.primary background — button selected pattern.
 *
 * Spec: docs/specs/components/pagination.md
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  function Pagination(
    {
      count,
      page,
      defaultPage      = 1,
      onChange,
      variant          = 'text',
      shape            = 'circular',
      size             = 'md',
      disabled         = false,
      hidePrevButton   = false,
      hideNextButton   = false,
      showFirstButton  = false,
      showLastButton   = false,
      siblingCount     = 1,
      boundaryCount    = 1,
      getItemAriaLabel,
      className,
      sx,
    },
    ref
  ) {
    return (
      <StyledPagination
        ref={ref}
        epSize={size}
        count={count}
        page={page}
        defaultPage={defaultPage}
        // MUI onChange: (event, page) — we expose a cleaner (page) => void API
        onChange={onChange ? (_event, p) => onChange(p) : undefined}
        variant={variant}
        shape={shape}
        // Pass mapped MUI size so MUI sizes its internal icons correctly
        size={MUI_SIZE[size]}
        // Pass color="standard" — all colors controlled via TOKEN overrides
        color="standard"
        disabled={disabled}
        hidePrevButton={hidePrevButton}
        hideNextButton={hideNextButton}
        showFirstButton={showFirstButton}
        showLastButton={showLastButton}
        siblingCount={siblingCount}
        boundaryCount={boundaryCount}
        getItemAriaLabel={getItemAriaLabel}
        className={className}
        sx={sx}
      />
    );
  }
);

Pagination.displayName = 'Pagination';

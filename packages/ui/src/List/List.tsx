import { forwardRef } from 'react';
import MuiList from '@mui/material/List';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiDivider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import type { ListProps, ListItemProps, ListDividerProps } from './List.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-list-* custom properties.

const TOKEN = {
  itemColor:           () => `var(--ep-component-list-item-color)`,
  itemColorSecondary:  () => `var(--ep-component-list-item-color-secondary)`,
  itemColorDisabled:   () => `var(--ep-component-list-item-color-disabled)`,
  itemBg:              () => `var(--ep-component-list-item-background)`,
  itemBgHover:         () => `var(--ep-component-list-item-background-hover)`,
  itemBgFocus:         () => `var(--ep-component-list-item-background-focus)`,
  itemBgSelected:      () => `var(--ep-component-list-item-background-selected)`,
  itemBgSelectedHover: () => `var(--ep-component-list-item-background-selected-hover)`,
  itemBgDisabled:      () => `var(--ep-component-list-item-background-disabled)`,
  itemFontSize:        () => `var(--ep-component-list-item-font-size)`,
  itemPy:              () => `var(--ep-component-list-item-padding-y)`,
  itemPx:              () => `var(--ep-component-list-item-padding-x)`,
  densePy:             () => `var(--ep-component-list-item-dense-padding-y)`,
  densePx:             () => `var(--ep-component-list-item-dense-padding-x)`,
  iconSize:            () => `var(--ep-component-list-item-icon-size)`,
  iconColor:           () => `var(--ep-component-list-item-icon-color)`,
  iconGap:             () => `var(--ep-component-list-item-icon-gap)`,
  dividerColor:        () => `var(--ep-component-list-divider-color)`,
  dividerMarginY:      () => `var(--ep-component-list-divider-margin-y)`,
} as const;

// ─── Styled ListItemButton ─────────────────────────────────────────────────

const StyledListItemButton = styled(MuiListItemButton)(() => ({
  // Base item
  color:      TOKEN.itemColor(),
  background: TOKEN.itemBg(),
  fontSize:   TOKEN.itemFontSize(),
  // Standard padding
  padding:    `${TOKEN.itemPy()} ${TOKEN.itemPx()}`,

  // Dense padding — MUI adds MuiListItemButton-dense when dense={true}
  '&.MuiListItemButton-dense': {
    padding: `${TOKEN.densePy()} ${TOKEN.densePx()}`,
  },

  // Hover
  '&:hover': {
    backgroundColor: TOKEN.itemBgHover(),
  },

  // Keyboard focus (list-like focus rule: backgroundFocus, no outline ring)
  '&.Mui-focusVisible': {
    backgroundColor: TOKEN.itemBgFocus(),
    // Framework reset — MUI adds box-shadow on ListItemButton focus
    boxShadow: 'none',
    outline: 'none',
  },

  // Selected
  '&.Mui-selected': {
    backgroundColor: TOKEN.itemBgSelected(),
    '&:hover': {
      backgroundColor: TOKEN.itemBgSelectedHover(),
    },
    '&.Mui-focusVisible': {
      backgroundColor: TOKEN.itemBgSelectedHover(),
    },
  },

  // Disabled
  '&.Mui-disabled': {
    color:           TOKEN.itemColorDisabled(),
    backgroundColor: TOKEN.itemBgDisabled(),
    // Framework reset — MUI dims disabled items to 0.38 opacity; we use a dedicated color token
    opacity:         1,
    cursor:          'default',
    pointerEvents:   'none',
  },

  // ── Icon slot layout ────────────────────────────────────────────────────
  '& .ep-list-item-start, & .ep-list-item-end': {
    display:    'flex',
    alignItems: 'center',
    flexShrink: 0,
    fontSize:   TOKEN.iconSize(),
    color:      TOKEN.iconColor(),
    // Inherit disabled color through the parent
    '.Mui-disabled &': {
      color: TOKEN.itemColorDisabled(),
    },
  },
  '& .ep-list-item-start': {
    marginRight: TOKEN.iconGap(),
  },
  '& .ep-list-item-end': {
    marginLeft:  'auto',
    paddingLeft: TOKEN.iconGap(),
  },
}));

// ─── Styled Divider ────────────────────────────────────────────────────────

const StyledDivider = styled(MuiDivider)(() => ({
  borderColor:  TOKEN.dividerColor(),
  marginTop:    TOKEN.dividerMarginY(),
  marginBottom: TOKEN.dividerMarginY(),
}));

// ─── Components ───────────────────────────────────────────────────────────

/**
 * List — vertical container for interactive or display items.
 *
 * Compose with ListItem and ListDivider as children.
 * Pass `dense` to the List for compact layouts (propagates via MUI context).
 *
 * Focus pattern: backgroundFocus state change (no outline ring) — list-like rule.
 *
 * Spec: docs/specs/components/list.md
 */
export const List = forwardRef<HTMLUListElement, ListProps>(
  function List(
    {
      dense          = false,
      disablePadding = false,
      className,
      sx,
      children,
    },
    ref
  ) {
    return (
      <MuiList
        ref={ref}
        dense={dense}
        disablePadding={disablePadding}
        className={className}
        sx={sx}
      >
        {children}
      </MuiList>
    );
  }
);

List.displayName = 'List';

// ─── ListItem ─────────────────────────────────────────────────────────────

/**
 * ListItem — interactive row inside a List.
 *
 * Renders as a focusable button element. Supports `startIcon` / `endIcon`
 * ReactNode slots for icon decoration. Use `dense` for compact lists.
 * Use `disabled` to show but prevent interaction. Use `selected` to mark
 * the active item.
 *
 * Spec: docs/specs/components/list.md
 */
export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  function ListItem(
    {
      startIcon,
      endIcon,
      dense     = false,
      disabled  = false,
      selected  = false,
      divider   = false,
      onClick,
      className,
      sx,
      children,
    },
    ref
  ) {
    return (
      <StyledListItemButton
        ref={ref}
        dense={dense}
        disabled={disabled}
        selected={selected}
        divider={divider}
        onClick={onClick}
        className={className}
        sx={sx}
      >
        {startIcon && (
          <span className="ep-list-item-start" aria-hidden="true">
            {startIcon}
          </span>
        )}
        {children}
        {endIcon && (
          <span className="ep-list-item-end" aria-hidden="true">
            {endIcon}
          </span>
        )}
      </StyledListItemButton>
    );
  }
);

ListItem.displayName = 'ListItem';

// ─── ListDivider ──────────────────────────────────────────────────────────

/**
 * ListDivider — visual separator between groups of list items.
 * Spec: docs/specs/components/list.md
 */
export const ListDivider = forwardRef<HTMLHRElement, ListDividerProps>(
  function ListDivider({ className, sx }, ref) {
    return (
      <StyledDivider
        ref={ref}
        className={className}
        sx={sx}
      />
    );
  }
);

ListDivider.displayName = 'ListDivider';

import { forwardRef } from 'react';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiDivider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import type { MenuProps, MenuItemProps, MenuDividerProps } from './Menu.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-menu-* custom properties.

const TOKEN = {
  // Typography
  fontFamily:   () => `var(--ep-component-menu-font-family)`,
  // Paper surface (applied via PaperProps.sx — portal-safe)
  background:   () => `var(--ep-component-menu-background)`,
  borderRadius: () => `var(--ep-component-menu-border-radius)`,
  shadow:       () => `var(--ep-component-menu-shadow)`,
  minWidth:     () => `var(--ep-component-menu-min-width)`,
  // Item colors
  itemColor:           () => `var(--ep-component-menu-item-color)`,
  itemColorDisabled:   () => `var(--ep-component-menu-item-color-disabled)`,
  // Item backgrounds
  itemBg:              () => `var(--ep-component-menu-item-background)`,
  itemBgHover:         () => `var(--ep-component-menu-item-background-hover)`,
  itemBgFocus:         () => `var(--ep-component-menu-item-background-focus)`,
  itemBgSelected:      () => `var(--ep-component-menu-item-background-selected)`,
  itemBgSelectedHover: () => `var(--ep-component-menu-item-background-selected-hover)`,
  itemBgDisabled:      () => `var(--ep-component-menu-item-background-disabled)`,
  // Item sizing
  itemFontSize: () => `var(--ep-component-menu-item-font-size)`,
  itemPy:       () => `var(--ep-component-menu-item-padding-y)`,
  itemPx:       () => `var(--ep-component-menu-item-padding-x)`,
  densePy:      () => `var(--ep-component-menu-item-dense-padding-y)`,
  densePx:      () => `var(--ep-component-menu-item-dense-padding-x)`,
  // Icon slots
  iconSize:  () => `var(--ep-component-menu-item-icon-size)`,
  iconColor: () => `var(--ep-component-menu-item-icon-color)`,
  iconGap:   () => `var(--ep-component-menu-item-icon-gap)`,
  // Divider
  dividerColor:   () => `var(--ep-component-menu-divider-color)`,
  dividerMarginY: () => `var(--ep-component-menu-divider-margin-y)`,
} as const;

// ─── Paper surface sx ─────────────────────────────────────────────────────
// Menu renders in a Portal — descendant CSS selectors from the component root
// do not reach portal content. Styles for the Paper surface must be passed
// via PaperProps.sx where token vars (set on :root) remain accessible.
const PAPER_SX = {
  backgroundColor: TOKEN.background(),
  borderRadius:    TOKEN.borderRadius(),
  boxShadow:       TOKEN.shadow(),
  minWidth:        TOKEN.minWidth(),
  // Framework reset — MUI Paper adds its own elevation boxShadow; we replace it via our token
} as const;

// ─── Styled MenuItem ──────────────────────────────────────────────────────
// styled(MuiMenuItem) injects a global CSS class — works correctly inside
// Portal-rendered menus because emotion CSS lives in <head>, not the DOM tree.

const StyledMenuItem = styled(MuiMenuItem)(() => ({
  // Base item
  // fontFamily: explicitly set — MUI theme Roboto bleeds through without this.
  fontFamily: TOKEN.fontFamily(),
  color:      TOKEN.itemColor(),
  background: TOKEN.itemBg(),
  fontSize:   TOKEN.itemFontSize(),
  // Standard padding — token-driven
  padding:    `${TOKEN.itemPy()} ${TOKEN.itemPx()}`,

  // Dense padding — MUI adds MuiMenuItem-dense when dense={true}
  '&.MuiMenuItem-dense': {
    padding: `${TOKEN.densePy()} ${TOKEN.densePx()}`,
  },

  // Hover
  '&:hover': {
    backgroundColor: TOKEN.itemBgHover(),
  },

  // Keyboard focus (arrow-key navigation)
  '&.Mui-focusVisible': {
    backgroundColor: TOKEN.itemBgFocus(),
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
  // Items with icons use flex; items without icons retain MUI's default layout
  '& .ep-menu-item-start, & .ep-menu-item-end': {
    display:     'flex',
    alignItems:  'center',
    flexShrink:  0,
    fontSize:    TOKEN.iconSize(),
    color:       TOKEN.iconColor(),
    // Inherit disabled color through the parent
    '.Mui-disabled &': {
      color: TOKEN.itemColorDisabled(),
    },
  },
  '& .ep-menu-item-start': {
    marginRight: TOKEN.iconGap(),
  },
  '& .ep-menu-item-end': {
    marginLeft:  'auto',
    paddingLeft: TOKEN.iconGap(),
  },
}));

// ─── Styled MenuDivider ────────────────────────────────────────────────────
const StyledDivider = styled(MuiDivider)(() => ({
  borderColor: TOKEN.dividerColor(),
  marginTop:    TOKEN.dividerMarginY(),
  marginBottom: TOKEN.dividerMarginY(),
}));

// ─── Components ───────────────────────────────────────────────────────────

/**
 * Menu — portal-rendered overlay anchored to a trigger element.
 *
 * Always used as a controlled component: `open` + `anchorEl` + `onClose`.
 * Keyboard navigation (arrows, Home, End, Escape, typeahead) is handled by MUI.
 *
 * Compose with MenuItem and MenuDivider as children.
 * Do NOT nest other interactive controls inside Menu items.
 *
 * Spec: docs/specs/components/menu.md
 */
export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  function Menu(
    {
      open,
      anchorEl,
      onClose,
      anchorOrigin    = { vertical: 'bottom', horizontal: 'left' },
      transformOrigin = { vertical: 'top',    horizontal: 'left' },
      keepMounted     = false,
      disablePortal   = false,
      className,
      sx,
      children,
    },
    ref
  ) {
    return (
      <MuiMenu
        ref={ref}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        keepMounted={keepMounted}
        disablePortal={disablePortal}
        className={className}
        sx={sx}
        PaperProps={{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          sx: PAPER_SX as any,
        }}
        // Framework reset — MUI MenuList has 8px vertical padding; we manage
        // visual grouping via MenuDivider margins instead
        MenuListProps={{ disablePadding: true }}
      >
        {children}
      </MuiMenu>
    );
  }
);

Menu.displayName = 'Menu';

// ─── MenuItem ─────────────────────────────────────────────────────────────

/**
 * MenuItem — individual action row inside a Menu.
 *
 * Supports `startIcon` / `endIcon` ReactNode slots for icon decoration.
 * Use `dense` for compact menus. Use `disabled` to show but prevent interaction.
 * Use `component='a'` + `href` for navigation items.
 *
 * Spec: docs/specs/components/menu.md
 */
export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  function MenuItem(
    {
      startIcon,
      endIcon,
      dense      = false,
      disabled   = false,
      selected   = false,
      divider    = false,
      component,
      href,
      onClick,
      className,
      sx,
      children,
    },
    ref
  ) {
    // styled() loses OverridableComponent typing — spread component prop separately.
    // When href is provided with no explicit component, default to <a>.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const polymorphicProps = { component: component ?? (href ? 'a' : 'li') } as any;

    return (
      <StyledMenuItem
        {...polymorphicProps}
        ref={ref}
        dense={dense}
        disabled={disabled}
        selected={selected}
        divider={divider}
        href={href}
        onClick={onClick}
        className={className}
        sx={sx}
      >
        {startIcon && (
          <span className="ep-menu-item-start" aria-hidden="true">
            {startIcon}
          </span>
        )}
        {children}
        {endIcon && (
          <span className="ep-menu-item-end" aria-hidden="true">
            {endIcon}
          </span>
        )}
      </StyledMenuItem>
    );
  }
);

MenuItem.displayName = 'MenuItem';

// ─── MenuDivider ──────────────────────────────────────────────────────────

/**
 * MenuDivider — visual separator between groups of menu items.
 * Spec: docs/specs/components/menu.md
 */
export const MenuDivider = forwardRef<HTMLHRElement, MenuDividerProps>(
  function MenuDivider({ className, sx }, ref) {
    return (
      // <hr> has implicit role="separator" — valid as a visual separator in ARIA menu context
      <StyledDivider
        ref={ref}
        className={className}
        sx={sx}
      />
    );
  }
);

MenuDivider.displayName = 'MenuDivider';

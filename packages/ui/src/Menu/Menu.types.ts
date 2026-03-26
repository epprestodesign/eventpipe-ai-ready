import type { ElementType, MouseEventHandler, ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { PopoverOrigin } from '@mui/material/Popover';

export interface MenuProps {
  // ── Controlled state ─────────────────────────────────────────────────────
  /** Controls visibility. Always use as a controlled component. */
  open: boolean;
  /** Trigger element — menu anchors its position relative to this. */
  anchorEl?: Element | null;
  /** Called when the user clicks outside or presses Escape. */
  onClose?: () => void;

  // ── Positioning ───────────────────────────────────────────────────────────
  /**
   * Which point on the trigger element the menu attaches to.
   * @default { vertical: 'bottom', horizontal: 'left' }
   */
  anchorOrigin?: PopoverOrigin;
  /**
   * Which point on the menu surface aligns to anchorOrigin.
   * @default { vertical: 'top', horizontal: 'left' }
   */
  transformOrigin?: PopoverOrigin;

  // ── Behavior ──────────────────────────────────────────────────────────────
  /**
   * Keep menu mounted in the DOM when closed.
   * Use for SSR or when avoiding remount cost.
   * @default false
   */
  keepMounted?: boolean;
  /**
   * Render menu inline instead of in a Portal.
   * @default false
   */
  disablePortal?: boolean;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

export interface MenuItemProps {
  // ── Interaction ───────────────────────────────────────────────────────────
  onClick?: MouseEventHandler<HTMLElement>;
  /** Mark item as currently active/checked. */
  selected?: boolean;
  /** Prevents interaction. Announced as unavailable by screen readers. */
  disabled?: boolean;
  /** Reduced padding — use in dense/toolbar menus. */
  dense?: boolean;
  /** Renders a divider line below this item. */
  divider?: boolean;

  // ── Icon slots ────────────────────────────────────────────────────────────
  /** Leading icon — pass `<Icon name="..." />`. Wrapped in aria-hidden span. */
  startIcon?: ReactNode;
  /** Trailing icon (shortcut hint, external link, etc.). Wrapped in aria-hidden span. */
  endIcon?: ReactNode;

  // ── Polymorphism ──────────────────────────────────────────────────────────
  /** Root element override. Use `'a'` or a router `Link` for navigation items. */
  component?: ElementType;
  /** Sets `component='a'` and passes href to the anchor. */
  href?: string;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

export interface MenuDividerProps {
  className?: string;
  sx?: SxProps<Theme>;
}

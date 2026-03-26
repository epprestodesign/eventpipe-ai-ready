import type { ReactElement, SyntheticEvent } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpSize2 } from '../types/shared';

// MUI Tooltip placement — 12 positions; excludes 'auto' (valid in Popper but not Tooltip)
export type TooltipPlacement =
  | 'bottom' | 'bottom-start' | 'bottom-end'
  | 'top'    | 'top-start'    | 'top-end'
  | 'left'   | 'left-start'   | 'left-end'
  | 'right'  | 'right-start'  | 'right-end';

export interface TooltipProps {
  // ── Content ───────────────────────────────────────────────────────────────
  /**
   * Tooltip text or content. Pass an empty string or null to disable the tooltip
   * without removing it from the DOM.
   */
  title: React.ReactNode;

  // ── Appearance ───────────────────────────────────────────────────────────
  /**
   * Size controls padding and font size.
   * @default 'md'
   */
  size?: EpSize2;

  /** Show an arrow pointer toward the trigger. @default false */
  arrow?: boolean;

  // ── Positioning ───────────────────────────────────────────────────────────
  /**
   * Tooltip placement relative to the trigger element.
   * All 12 MUI placements are supported.
   * @default 'bottom'
   */
  placement?: TooltipPlacement;

  // ── Open state ───────────────────────────────────────────────────────────
  /** Controlled open state. */
  open?: boolean;

  // ── Interaction listeners ─────────────────────────────────────────────────
  /** Disable opening on focus. @default false */
  disableFocusListener?: boolean;

  /** Disable opening on hover. @default false */
  disableHoverListener?: boolean;

  /** Disable opening on touch. @default false */
  disableTouchListener?: boolean;

  // ── Timing ───────────────────────────────────────────────────────────────
  /** Delay (ms) before showing the tooltip on hover. @default 100 */
  enterDelay?: number;

  /** Delay (ms) before hiding the tooltip after leaving. @default 0 */
  leaveDelay?: number;

  // ── Events ────────────────────────────────────────────────────────────────
  // MUI Tooltip callbacks receive Event | SyntheticEvent depending on the interaction type
  onOpen?:  (event: Event | SyntheticEvent) => void;
  onClose?: (event: Event | SyntheticEvent) => void;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;

  // ── Trigger ───────────────────────────────────────────────────────────────
  /** Must be a single React element. The tooltip attaches hover/focus to this child. */
  children: ReactElement;
}

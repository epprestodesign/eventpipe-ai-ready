import type { ReactNode, MouseEventHandler } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { CardVariant } from '../types/shared';

export interface CardProps {
  // ── Appearance ────────────────────────────────────────────────────────────
  /**
   * Visual surface style.
   * - `elevated` — white surface with drop shadow (default)
   * - `outlined` — white surface with 1px border
   * - `filled` — subtle neutral background, no border/shadow
   * @default 'elevated'
   */
  variant?: CardVariant;

  // ── Behavior ──────────────────────────────────────────────────────────────
  /**
   * Enables hover/focus/keyboard-click behavior. Adds `role="button"` and
   * `tabIndex={0}` automatically. Do NOT use on cards that contain other
   * interactive controls (buttons, links, form fields).
   * @default false
   */
  interactive?: boolean;

  // ── Events ────────────────────────────────────────────────────────────────
  /** Click handler. Typically paired with `interactive`. */
  onClick?: MouseEventHandler<HTMLDivElement>;

  // ── ARIA overrides ────────────────────────────────────────────────────────
  /** ARIA role. Interactive cards default to `"button"` if not provided. */
  role?: string;
  /** Tab order. Interactive cards default to `0` if not provided. */
  tabIndex?: number;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

export interface CardHeaderProps {
  // ── Content slots ─────────────────────────────────────────────────────────
  /** Primary heading text or element. */
  title?: ReactNode;
  /** Secondary heading / metadata text or element. */
  subheader?: ReactNode;
  /** Left-slot content (avatar, icon, badge). */
  avatar?: ReactNode;
  /** Right-slot content (overflow menu button, icon button). */
  action?: ReactNode;

  // ── Layout ────────────────────────────────────────────────────────────────
  /**
   * Remove header padding — use for flush/media layouts.
   * @default false
   */
  disablePadding?: boolean;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

export interface CardContentProps {
  /**
   * Remove content padding — use for media, code blocks, or custom layouts.
   * @default false
   */
  disablePadding?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

export interface CardFooterProps {
  /**
   * Remove gap between action children.
   * @default false
   */
  disableSpacing?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

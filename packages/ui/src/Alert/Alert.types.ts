import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { AlertSeverity, AlertVariant, EpSize5 } from '../types/shared';

export interface AlertProps {
  // ── Appearance ────────────────────────────────────────────────────────────
  /** @default 'standard' */
  variant?: AlertVariant;
  /**
   * Sizing category 3 (Feedback + Navigation): xs | sm | md | lg | xl
   * Spec: docs/decisions/005-sizing-scale.md — Category 3
   * @default 'md'
   */
  size?: EpSize5;
  /**
   * Alert uses severity (not color) — drives icon + palette.
   * See docs/contracts/shared-props.md → Severity exception.
   * @default 'info'
   */
  severity?: AlertSeverity;

  // ── State ─────────────────────────────────────────────────────────────────
  /** Callback fired when the close button is clicked. Renders close button when provided. */
  onClose?: () => void;

  // ── Slots ─────────────────────────────────────────────────────────────────
  /** Override or suppress (pass false) the leading icon. */
  icon?: ReactNode | false;
  /** Action element rendered at the right edge. */
  action?: ReactNode;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;

  children: ReactNode;
}

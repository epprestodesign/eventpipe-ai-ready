import type { ElementType, ReactNode, HTMLAttributes } from 'react';
import type { SxProps, Theme } from '@mui/material';

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  // ── Polymorphism ─────────────────────────────────────────────────────────
  /**
   * The rendered HTML element.
   * @default 'div'
   */
  component?: ElementType;

  // ── Content ──────────────────────────────────────────────────────────────
  children?: ReactNode;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

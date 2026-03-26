import type { ElementType, ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';

export type StackDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type StackSpacing = 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 6 | 8;

export interface StackProps {
  // ── Layout ──────────────────────────────────────────────────────────────
  /**
   * Flex direction.
   * @default 'column'
   */
  direction?: StackDirection;

  /**
   * Spacing between children. Multiplied by 8px base.
   * @default 0
   */
  spacing?: StackSpacing;

  /** Align items along the cross axis. */
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

  /** Justify content along the main axis. */
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

  /**
   * Element inserted between each child pair.
   * Typically a `<Divider />`.
   */
  divider?: ReactNode;

  // ── Polymorphism ─────────────────────────────────────────────────────────
  /** Override the rendered HTML element. */
  component?: ElementType;

  // ── Content ──────────────────────────────────────────────────────────────
  children?: ReactNode;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

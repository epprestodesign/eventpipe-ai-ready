import type { ElementType, ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';

export type SurfaceVariant = 'plain' | 'raised' | 'overlay' | 'panel' | 'modal';
export type SurfaceBorder = 'none' | 'default' | 'strong';

export interface SurfaceProps {
  /**
   * Visual depth level. Maps to semantic elevation + background tokens.
   * - plain:   no shadow, background.paper, radius.md
   * - raised:  elevation.raised, background.paper, radius.lg
   * - overlay: elevation.overlay, surface.overlay, radius.lg
   * - panel:   elevation.panel, surface.overlay, radius.xl
   * - modal:   elevation.modal, surface.overlay, radius.xl
   * @default 'plain'
   */
  variant?: SurfaceVariant;

  /**
   * Border style.
   * - none:    no border
   * - default: 1px border using semantic.color.border.default
   * - strong:  1px border using semantic.color.border.strong
   * @default 'none'
   */
  border?: SurfaceBorder;

  /**
   * Override border-radius. When omitted, radius is driven by variant.
   */
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'pill' | 'none';

  /**
   * Padding inside the surface.
   * Maps to spacing scale: xs=8px, sm=12px, md=16px, lg=24px, none=0
   * @default 'none'
   */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg';

  /** Override the rendered HTML element. @default 'div' */
  component?: ElementType;

  className?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

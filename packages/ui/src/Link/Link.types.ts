import type { ReactNode, MouseEventHandler } from 'react';
import type { SxProps } from '@mui/material/styles';
import type { TypographyVariant } from '@mui/material/styles';

export type LinkColor = 'primary' | 'secondary' | 'inherit';

export interface LinkProps {
  href?: string;
  onClick?: MouseEventHandler;
  underline?: 'always' | 'hover' | 'none';
  color?: LinkColor;
  variant?: TypographyVariant;
  target?: string;
  rel?: string;
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}

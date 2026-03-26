import type { ReactNode } from 'react';
import type { SxProps } from '@mui/material/styles';

export interface DrawerProps {
  open: boolean;
  onClose?: (event: object, reason: 'backdropClick' | 'escapeKeyDown') => void;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  variant?: 'temporary' | 'persistent' | 'permanent';
  keepMounted?: boolean;
  disableEscapeKeyDown?: boolean;
  hideBackdrop?: boolean;
  transitionDuration?: number;
  'aria-labelledby'?: string;
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}

export interface DrawerHeaderProps {
  onClose?: () => void;
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}

export interface DrawerBodyProps {
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}

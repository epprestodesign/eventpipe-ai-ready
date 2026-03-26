import type { ReactNode } from 'react';
import type { SxProps } from '@mui/material/styles';

export interface PopoverOrigin {
  vertical:   'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface PopoverProps {
  open: boolean;
  anchorEl: Element | null;
  onClose?: () => void;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  disablePortal?: boolean;
  keepMounted?: boolean;
  id?: string;
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}

/** Styled content wrapper — applies popover padding tokens. */
export interface PopoverContentProps {
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}

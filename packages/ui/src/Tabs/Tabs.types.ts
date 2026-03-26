import type { SyntheticEvent, ReactNode, ReactElement } from 'react';
import type { SxProps } from '@mui/material/styles';

export interface TabsProps {
  value?: unknown;
  defaultValue?: unknown;
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  orientation?: 'horizontal' | 'vertical';
  scrollButtons?: 'auto' | true | false;
  textColor?: 'primary' | 'secondary' | 'inherit';
  indicatorColor?: 'primary' | 'secondary';
  centered?: boolean;
  onChange?: (event: SyntheticEvent, value: unknown) => void;
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}

export interface TabProps {
  label?: ReactNode;
  value?: unknown;
  icon?: ReactElement;
  iconPosition?: 'start' | 'end' | 'top' | 'bottom';
  disabled?: boolean;
  wrapped?: boolean;
  className?: string;
  sx?: SxProps;
}

export interface TabPanelProps {
  value: unknown;
  index: unknown;
  keepMounted?: boolean;
  id?: string;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}

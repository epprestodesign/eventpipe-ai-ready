import type { ReactNode, MouseEventHandler } from 'react';
import type { SxProps } from '@mui/material/styles';

export interface BreadcrumbsProps {
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  separator?: ReactNode;
  'aria-label'?: string;
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}

/** Non-interactive current-page item (last crumb). */
export interface BreadcrumbItemProps {
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}

/** Interactive link crumb. */
export interface BreadcrumbLinkProps {
  href?: string;
  onClick?: MouseEventHandler;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}

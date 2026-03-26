import { forwardRef } from 'react';
import MuiBox from '@mui/material/Box';
import type { BoxProps } from './Box.types';

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Box — generic container component.
 *
 * Thin wrapper around MUI Box. Pure passthrough — no tokens, no interactive states.
 * Single purpose: design-system boundary wrapper.
 *
 * Spec: docs/specs/components/box.md
 */
export const Box = forwardRef<HTMLElement, BoxProps>(
  function Box(
    {
      component = 'div',
      children,
      className,
      sx,
      ...rest
    },
    ref
  ) {
    return (
      <MuiBox
        ref={ref}
        component={component}
        className={className}
        sx={sx}
        {...rest}
      >
        {children}
      </MuiBox>
    );
  }
);

Box.displayName = 'Box';

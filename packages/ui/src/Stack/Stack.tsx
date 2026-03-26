import { forwardRef } from 'react';
import MuiStack from '@mui/material/Stack';
import type { StackProps } from './Stack.types';

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Stack — flexbox layout component for vertical or horizontal arrangement.
 *
 * Pure layout — no tokens. Spacing uses an 8px base (MUI default).
 * Wraps MUI Stack as the EP design-system boundary.
 *
 * Spec: docs/specs/components/stack.md
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  function Stack(
    {
      direction      = 'column',
      spacing        = 0,
      alignItems,
      justifyContent,
      divider,
      component,
      children,
      className,
      sx,
    },
    ref
  ) {
    return (
      <MuiStack
        ref={ref}
        direction={direction}
        spacing={spacing}
        alignItems={alignItems}
        justifyContent={justifyContent}
        divider={divider}
        component={component ?? 'div'}
        className={className}
        sx={sx}
      >
        {children}
      </MuiStack>
    );
  }
);

Stack.displayName = 'Stack';

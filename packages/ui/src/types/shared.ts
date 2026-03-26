/**
 * Shared prop types — single source of truth.
 * Authoritative spec: docs/contracts/shared-props.md
 */

/** Category 1+2+3 components: Action Controls, Status+Indicator, Feedback+Navigation */
export type EpSize5 = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Category 4+5+6+7 components: Form Inputs, Form Controls, Chips, Data Tables */
export type EpSize3 = 'sm' | 'md' | 'lg';

/** Category 8: Tooltip only */
export type EpSize2 = 'sm' | 'md';

export type EpColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'neutral';

export type AlertSeverity = 'error' | 'warning' | 'info' | 'success';

export type ButtonVariant    = 'contained' | 'outlined' | 'text' | 'soft';
export type AlertVariant     = 'standard' | 'filled' | 'outlined' | 'soft';
export type TextFieldVariant = 'outlined' | 'filled';
export type SelectVariant    = 'outlined' | 'filled';
export type CardVariant      = 'elevated' | 'outlined' | 'filled';

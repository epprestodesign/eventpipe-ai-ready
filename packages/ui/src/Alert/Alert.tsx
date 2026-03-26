import { forwardRef } from 'react';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import type { AlertProps } from './Alert.types';
import type { AlertSeverity, AlertVariant, EpSize5 } from '../types/shared';
import { Icon } from '../Icon';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-alert-* custom properties.
// No raw hex, no hardcoded design values, no semantic/primitive tokens consumed directly.

const TOKEN = {
  // Padding
  py:          (size: EpSize5)                     => `var(--ep-component-alert-padding-${size}-y)`,
  px:          (size: EpSize5)                     => `var(--ep-component-alert-padding-${size}-x)`,
  // Variant × severity
  bg:          (v: AlertVariant, s: AlertSeverity) => `var(--ep-component-alert-${s}-${v}-background)`,
  text:        (v: AlertVariant, s: AlertSeverity) => `var(--ep-component-alert-${s}-${v}-text)`,
  icon:        (v: AlertVariant, s: AlertSeverity) => `var(--ep-component-alert-${s}-${v}-icon)`,
  border:      (v: AlertVariant, s: AlertSeverity) => `var(--ep-component-alert-${s}-${v}-border)`,
  // Structural
  radius:      () => `var(--ep-component-alert-border-radius)`,
  borderWidth: () => `var(--ep-component-alert-border-width)`,
  iconGap:     () => `var(--ep-component-alert-icon-gap)`,
  actionGap:   () => `var(--ep-component-alert-action-gap)`,
} as const;

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledAlertProps {
  epVariant: AlertVariant;
  epSeverity: AlertSeverity;
  epSize: EpSize5;
}

const StyledAlert = styled(MuiAlert, {
  shouldForwardProp: (prop) =>
    prop !== 'epVariant' && prop !== 'epSeverity' && prop !== 'epSize',
})<StyledAlertProps>(({ epVariant, epSeverity, epSize }) => ({
  padding:         `${TOKEN.py(epSize)} ${TOKEN.px(epSize)}`,
  backgroundColor: TOKEN.bg(epVariant, epSeverity),
  color:           TOKEN.text(epVariant, epSeverity),
  borderRadius:    TOKEN.radius(),
  border:          `${TOKEN.borderWidth()} solid ${TOKEN.border(epVariant, epSeverity)}`,
  alignItems:      'flex-start',

  '& .MuiAlert-icon': {
    color:       TOKEN.icon(epVariant, epSeverity),
    marginRight: TOKEN.iconGap(),
    // Framework resets — these correct MUI's internal slot geometry, not design values:
    padding:     '2px 0',   // MUI default slot vertical padding
    opacity:     1,          // MUI dims icon to 0.9 by default; we render at full opacity
  },

  '& .MuiAlert-message': {
    padding: '2px 0',   // MUI default slot vertical padding — aligns with icon slot
    color:   TOKEN.text(epVariant, epSeverity),
  },

  '& .MuiAlert-action': {
    paddingLeft: TOKEN.actionGap(),
    // Framework resets:
    padding:     `0 0 0 ${TOKEN.actionGap()}`,  // override MUI shorthand fully
    marginRight: 0,          // MUI adds right margin; we align to container edge
    alignItems:  'flex-start',
  },
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Alert — Category 3 (Feedback + Navigation), 5-tier sizing.
 *
 * Uses `severity` not `color` — see docs/contracts/shared-props.md.
 * Default severity icons are MUI-managed via the `severity` prop.
 * Any icon passed via `icon` prop must use `<Icon name="..." />`.
 *
 * Spec: docs/specs/components/alert.md
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(
    {
      variant  = 'standard',
      size     = 'md',
      severity = 'info',
      onClose,
      icon,
      action,
      className,
      sx,
      children,
    },
    ref
  ) {
    const closeAction = onClose ? (
      // MUI IconButton used as the close button shell.
      // aria-label on the button (interactive element); Icon inside is decorative.
      // sx color:inherit inherits from the alert text token via StyledAlert.
      // sx p:'2px' is a MUI internal touch target adjustment — not a design token.
      <IconButton
        aria-label="Close alert"
        size="small"
        onClick={onClose}
        sx={{ color: 'inherit', p: '2px' }}
      >
        <Icon name="close" size="sm" />
      </IconButton>
    ) : undefined;

    return (
      <StyledAlert
        ref={ref}
        epVariant={variant}
        epSeverity={severity}
        epSize={size}
        // MUI uses `severity` to select its built-in icon; we use it for token lookup.
        severity={severity}
        // Always pass "standard" to MUI — our variant is applied via styled() above.
        variant="standard"
        // `icon === false` suppresses MUI's icon slot entirely.
        // `icon` as ReactNode overrides the default; caller must use <Icon name="..." />.
        // `undefined` lets MUI render its default severity icon.
        icon={icon === false ? false : icon ?? undefined}
        action={action ?? closeAction}
        className={className}
        sx={sx}
        role="alert"
      >
        {children}
      </StyledAlert>
    );
  }
);

Alert.displayName = 'Alert';

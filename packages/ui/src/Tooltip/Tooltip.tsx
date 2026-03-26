import MuiTooltip from '@mui/material/Tooltip';
import type { TooltipProps } from './Tooltip.types';
import type { EpSize2 } from '../types/shared';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-tooltip-* custom properties.

const TOKEN = {
  background:   ()            => `var(--ep-component-tooltip-background)`,
  color:        ()            => `var(--ep-component-tooltip-color)`,
  borderRadius: ()            => `var(--ep-component-tooltip-border-radius)`,
  maxWidth:     ()            => `var(--ep-component-tooltip-max-width)`,
  arrowSize:    ()            => `var(--ep-component-tooltip-arrow-size)`,
  paddingY:     (s: EpSize2)  => `var(--ep-component-tooltip-padding-${s}-y)`,
  paddingX:     (s: EpSize2)  => `var(--ep-component-tooltip-padding-${s}-x)`,
  fontSize:     (s: EpSize2)  => `var(--ep-component-tooltip-font-size-${s})`,
} as const;

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Tooltip — Portal-rendered overlay that describes a trigger element.
 *
 * Deviation: no forwardRef — Tooltip renders no root DOM element of its own.
 * The trigger child's ref is controlled by the caller. See deviations register.
 *
 * Portal-safe styling: all surface styles passed via componentsProps.tooltip.sx
 * and componentsProps.arrow.sx — CSS vars resolve from :root globally.
 *
 * Spec: docs/specs/components/tooltip.md
 */
export function Tooltip({
  size          = 'md',
  title,
  arrow         = false,
  placement     = 'bottom',
  open,
  disableFocusListener  = false,
  disableHoverListener  = false,
  disableTouchListener  = false,
  enterDelay    = 100,
  leaveDelay    = 0,
  onOpen,
  onClose,
  className,
  sx,
  children,
}: TooltipProps) {
  return (
    <MuiTooltip
      title={title}
      arrow={arrow}
      placement={placement}
      open={open}
      disableFocusListener={disableFocusListener}
      disableHoverListener={disableHoverListener}
      disableTouchListener={disableTouchListener}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      onOpen={onOpen}
      onClose={onClose}
      className={className}
      sx={sx}
      // Portal-safe surface styling — CSS vars resolve from :root inside Portal.
      // styled() ancestor selectors do not reach Portal content.
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: TOKEN.background(),
            color:           TOKEN.color(),
            borderRadius:    TOKEN.borderRadius(),
            maxWidth:        TOKEN.maxWidth(),
            padding:         `${TOKEN.paddingY(size)} ${TOKEN.paddingX(size)}`,
            fontSize:        TOKEN.fontSize(size),
            // Framework reset — MUI adds box-shadow on tooltip; we remove it
            boxShadow: 'none',
          },
        },
        arrow: {
          sx: {
            // Framework reset — MUI arrow inherits color from tooltip;
            // explicitly set to match our background token
            color: TOKEN.background(),
            '&::before': {
              width:  TOKEN.arrowSize(),
              height: TOKEN.arrowSize(),
            },
          },
        },
      }}
    >
      {children}
    </MuiTooltip>
  );
}

Tooltip.displayName = 'Tooltip';

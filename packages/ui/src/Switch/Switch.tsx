import { forwardRef } from 'react';
import MuiSwitch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import type { SwitchProps } from './Switch.types';
import type { EpColor, EpSize3 } from '../types/shared';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-switch-* custom properties.

const TOKEN = {
  // Active color (checked track)
  color:               (c: EpColor) => `var(--ep-component-switch-color-${c})`,
  // Track
  trackColorUnchecked: ()           => `var(--ep-component-switch-track-color-unchecked)`,
  // Thumb
  thumbColor:          ()           => `var(--ep-component-switch-thumb-color)`,
  // Hover ripple
  uncheckedHoverBg:    ()           => `var(--ep-component-switch-unchecked-hover-bg)`,
  // Disabled — explicit colors, NO opacity
  // OFF state: light neutral track (border.default = neutral.200 = #E5E7EB)
  // ON state:  medium neutral track (text.disabled  = neutral.400 = #9CA3AF)
  disabledTrack:        () => `var(--ep-component-switch-disabled-track)`,
  disabledTrackChecked: () => `var(--ep-component-switch-disabled-track-checked)`,
  // Size tokens — ios variant only
  rootWidth:   (s: EpSize3) => `var(--ep-component-switch-size-${s}-root-width)`,
  rootHeight:  (s: EpSize3) => `var(--ep-component-switch-size-${s}-root-height)`,
  thumbSize:   (s: EpSize3) => `var(--ep-component-switch-size-${s}-thumb-size)`,
  thumbX:      (s: EpSize3) => `var(--ep-component-switch-size-${s}-thumb-x)`,
  padding:     (s: EpSize3) => `var(--ep-component-switch-size-${s}-padding)`,
  // Focus ring
  focusRingWidth:  () => `var(--ep-component-switch-focus-ring-width)`,
  focusRingOffset: () => `var(--ep-component-switch-focus-ring-offset)`,
  // iOS variant
  iosThumbShadow:         () => `var(--ep-component-switch-ios-thumb-shadow)`,
  iosTrackColorUnchecked: () => `var(--ep-component-switch-ios-track-color-unchecked)`,
} as const;

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledSwitchProps {
  epSize:    EpSize3;
  epColor:   EpColor;
  epVariant: 'default' | 'ios';
}

const StyledSwitch = styled(MuiSwitch, {
  shouldForwardProp: (prop) => prop !== 'epSize' && prop !== 'epColor' && prop !== 'epVariant',
})<StyledSwitchProps>(({ epSize, epColor, epVariant }) => {
  const isIos = epVariant === 'ios';

  return {
    // ─── Root ────────────────────────────────────────────────────────────
    // ios: custom pill root — padding:0 so track fills full root area.
    // default: MUI's natural sizing (58×38 medium, border-box with padding:12).
    //   MUI's padding creates a 14px-tall track content area; the 20px thumb
    //   floats 3px above/below the track — that IS the Material Design look.
    ...(isIos && {
      width:    TOKEN.rootWidth(epSize),
      height:   TOKEN.rootHeight(epSize),
      padding:  0,
      overflow: 'hidden',
    }),

    // Cancel any root-level opacity MUI may apply via Mui-disabled on the root span.
    // Disabled appearance is fully controlled by explicit token colors below.
    '&.Mui-disabled': {
      opacity: 1,
    },

    // ─── Focus ring ───────────────────────────────────────────────────────
    '&:has(.Mui-focusVisible)': {
      outline:       `${TOKEN.focusRingWidth()} solid ${TOKEN.color(epColor)}`,
      outlineOffset: TOKEN.focusRingOffset(),
      // ios: pill-shaped ring; default: rounded-rect matching root proportions
      borderRadius:  isIos ? `calc(${TOKEN.rootHeight(epSize)} / 2)` : '20px',
    },

    // ─── SwitchBase ───────────────────────────────────────────────────────
    '& .MuiSwitch-switchBase': {
      // Both: EP white thumb color
      color: TOKEN.thumbColor(),

      // ios: tight padding so thumb hugs pill boundaries;
      // default: MUI uses padding:9 — thumb sits naturally above the 14px track.
      ...(isIos && {
        padding:    TOKEN.padding(epSize),
        top:        0,
        left:       0,
        transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      }),

      '&.Mui-checked': {
        color: TOKEN.thumbColor(),
        '& + .MuiSwitch-track': {
          // Both: EP active color on checked track, full opacity
          backgroundColor: TOKEN.color(epColor),
          opacity:         1,
        },
        // ios: token-driven travel; default: MUI handles translateX(20px)
        ...(isIos && {
          transform: `translateX(${TOKEN.thumbX(epSize)})`,
        }),

        // ── Checked + disabled — explicit token color wins over the active
        //    color set above. Higher specificity (.Mui-checked.Mui-disabled)
        //    ensures this always overrides the plain .Mui-checked track rule.
        '&.Mui-disabled + .MuiSwitch-track': {
          backgroundColor: TOKEN.disabledTrackChecked(),
          opacity:         1,
        },
      },

      '&:hover': {
        backgroundColor: TOKEN.uncheckedHoverBg(),
      },

      // ── Disabled state ────────────────────────────────────────────────
      // DESIGN PRINCIPLE: disabled appearance is communicated ENTIRELY through
      // explicit token colors, never through opacity.
      //
      // Why no opacity:
      //   opacity on switchBase makes the white thumb semi-transparent, so the
      //   track color bleeds through — unintended color mixing.
      //   opacity on track stacks with MUI's baseline track opacity (0.38 for
      //   default variant), producing double attenuation and near-invisible tracks.
      //
      // Pattern: opacity: 1 cancels all inherited/MUI-applied opacity;
      //          explicit backgroundColor on the track communicates disabled state.
      '&.Mui-disabled': {
        // Prevent MUI's ButtonBase from changing the thumb to action.disabled color.
        color:         TOKEN.thumbColor(),
        // Cancel any opacity MUI applies to the switchBase button itself.
        opacity:       1,
        cursor:        'not-allowed',
        pointerEvents: 'auto',
      },

      // OFF + disabled: light neutral track (border.default = #E5E7EB)
      '&.Mui-disabled + .MuiSwitch-track': {
        backgroundColor: TOKEN.disabledTrack(),
        // Reset track opacity to 1 — cancels MUI's 0.38 default track opacity
        // (default variant) and 0.12 disabled track opacity, so our token
        // color renders at full fidelity without alpha multiplication.
        opacity:         1,
      },
    },

    // ─── Thumb ────────────────────────────────────────────────────────────
    '& .MuiSwitch-thumb': {
      // Both: EP white thumb
      color:     TOKEN.thumbColor(),
      boxSizing: 'border-box',

      // ios: token-driven size + custom drop shadow.
      // default: MUI keeps 20×20 and its native shadows[1] elevation shadow.
      //   The shadow is visible because SwitchBase padding:9 keeps the thumb
      //   well within the 38px root bounds (thumb spans y=9..29 in a 38px root).
      ...(isIos && {
        width:        TOKEN.thumbSize(epSize),
        height:       TOKEN.thumbSize(epSize),
        borderRadius: '50%',
        boxShadow:    TOKEN.iosThumbShadow(),
      }),
    },

    // ─── Track ────────────────────────────────────────────────────────────
    '& .MuiSwitch-track': {
      // Both: EP custom background color
      backgroundColor: isIos
        ? TOKEN.iosTrackColorUnchecked()
        : TOKEN.trackColorUnchecked(),
      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',

      // ios: pill track fills entire root at full opacity.
      // default: MUI keeps 14px height (content area), borderRadius:7,
      //   and opacity:0.38 — the classic semi-transparent Material track.
      ...(isIos && {
        borderRadius: `calc(${TOKEN.rootHeight(epSize)} / 2)`,
        height:       '100%',
        width:        '100%',
        opacity:      1,
      }),
    },
  };
});

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Switch — Category 5 (Form Controls), 3-tier sizing.
 *
 * variant="default" — standard Material Design appearance: 20px thumb with
 *   elevation shadow floats above a 14px semi-transparent track (MUI default).
 * variant="ios"     — custom pill switch: thumb enclosed in full-coverage
 *   light track, token-driven sizing, subtle drop shadow.
 *
 * Disabled state uses explicit token colors (no opacity):
 *   OFF  → --ep-component-switch-disabled-track (light neutral)
 *   ON   → --ep-component-switch-disabled-track-checked (medium neutral)
 *
 * Spec: docs/specs/components/switch.md
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  function Switch(
    {
      size          = 'md',
      color         = 'primary',
      variant       = 'default',
      checked,
      defaultChecked,
      disabled      = false,
      required      = false,
      id,
      name,
      value,
      onChange,
      inputProps,
      className,
      sx,
    },
    ref
  ) {
    return (
      <StyledSwitch
        ref={ref}
        epSize={size}
        epColor={color}
        epVariant={variant}
        // color="default" — all colors driven by our token overrides above
        color="default"
        size={size === 'sm' ? 'small' : 'medium'}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        inputProps={{
          role: 'switch',
          'aria-checked': checked,
          ...inputProps,
        }}
        className={className}
        sx={sx}
        disableRipple={false}
      />
    );
  }
);

Switch.displayName = 'Switch';

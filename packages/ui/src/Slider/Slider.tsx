import { forwardRef } from 'react';
import MuiSlider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import type { SliderProps } from './Slider.types';
import type { EpColor } from '../types/shared';

// ─── Size type ────────────────────────────────────────────────────────────────
type SliderSize = 'sm' | 'md' | 'lg';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-slider-* custom properties.

const TOKEN = {
  // Track
  trackFill:       (c: EpColor) => `var(--ep-component-slider-track-fill-${c})`,
  trackBackground: ()           => `var(--ep-component-slider-track-background)`,
  // Thumb
  thumbColor:      (c: EpColor) => `var(--ep-component-slider-thumb-color-${c})`,
  // Focus ring
  focusRingColor:  ()           => `var(--ep-component-slider-focus-ring-color)`,
  focusRingWidth:  ()           => `var(--ep-component-slider-focus-ring-width)`,
  focusRingOffset: ()           => `var(--ep-component-slider-focus-ring-offset)`,
  // Disabled
  disabledColor:   ()           => `var(--ep-component-slider-disabled-color)`,
  // Value label
  valueLabelBg:    ()           => `var(--ep-component-slider-value-label-background)`,
  valueLabelText:  ()           => `var(--ep-component-slider-value-label-text)`,
  // Size
  thumbSize:       (s: SliderSize) => `var(--ep-component-slider-size-${s}-thumb-size)`,
  trackHeight:     (s: SliderSize) => `var(--ep-component-slider-size-${s}-track-height)`,
} as const;

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledSliderProps {
  epSize:  SliderSize;
  epColor: EpColor;
}

const StyledSlider = styled(MuiSlider, {
  shouldForwardProp: (prop) => prop !== 'epSize' && prop !== 'epColor',
})<StyledSliderProps>(({ epSize, epColor }) => ({
  // ─── Root ────────────────────────────────────────────────────────────
  color: TOKEN.trackFill(epColor),

  // ─── Rail (unfilled track) ───────────────────────────────────────────
  '& .MuiSlider-rail': {
    backgroundColor: TOKEN.trackBackground(),
    height: TOKEN.trackHeight(epSize),
    opacity: 1,
  },

  // ─── Track (filled portion) ──────────────────────────────────────────
  '& .MuiSlider-track': {
    backgroundColor: TOKEN.trackFill(epColor),
    height: TOKEN.trackHeight(epSize),
    border: 'none',
  },

  // ─── Thumb ───────────────────────────────────────────────────────────
  '& .MuiSlider-thumb': {
    width: TOKEN.thumbSize(epSize),
    height: TOKEN.thumbSize(epSize),
    backgroundColor: TOKEN.thumbColor(epColor),
    // Framework reset — remove MUI default box shadow
    boxShadow: 'none',

    '&::before': {
      boxShadow: 'none',
    },

    // Focus ring
    '&.Mui-focusVisible': {
      outline: `${TOKEN.focusRingWidth()} solid ${TOKEN.focusRingColor()}`,
      outlineOffset: TOKEN.focusRingOffset(),
      boxShadow: 'none',
    },

    // Hover — subtle elevation
    '&:hover': {
      boxShadow: 'none',
    },
  },

  // ─── Value label ─────────────────────────────────────────────────────
  '& .MuiSlider-valueLabel': {
    backgroundColor: TOKEN.valueLabelBg(),
    color: TOKEN.valueLabelText(),
    borderRadius: '4px',
    fontSize: '12px',
    padding: '2px 6px',
  },

  // ─── Mark ────────────────────────────────────────────────────────────
  '& .MuiSlider-mark': {
    backgroundColor: TOKEN.trackBackground(),
    width: 2,
    height: 2,
    borderRadius: '50%',
  },
  '& .MuiSlider-markActive': {
    backgroundColor: TOKEN.trackFill(epColor),
    opacity: 0.5,
  },

  // ─── Disabled ────────────────────────────────────────────────────────
  '&.Mui-disabled': {
    '& .MuiSlider-track': {
      backgroundColor: TOKEN.disabledColor(),
    },
    '& .MuiSlider-thumb': {
      backgroundColor: TOKEN.disabledColor(),
    },
    '& .MuiSlider-rail': {
      backgroundColor: TOKEN.trackBackground(),
    },
  },
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Slider — range input with EP token wiring and accessibility baseline.
 *
 * Wraps MUI Slider with semantic token overrides for consistent branding.
 * Supports single value and range (pass value as number[]).
 *
 * Focus ring: outline on thumb via .Mui-focusVisible.
 * Keyboard: arrow keys, home/end, page up/down (MUI native).
 */
export const Slider = forwardRef<HTMLSpanElement, SliderProps>(
  function Slider(
    {
      value,
      defaultValue,
      min              = 0,
      max              = 100,
      step             = 1,
      color            = 'primary',
      size             = 'md',
      orientation      = 'horizontal',
      marks,
      valueLabelDisplay = 'auto',
      valueLabelFormat,
      disabled         = false,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-valuetext': ariaValueText,
      onChange,
      onChangeCommitted,
      className,
      sx,
    },
    ref
  ) {
    return (
      <StyledSlider
        ref={ref}
        epSize={size}
        epColor={color}
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        orientation={orientation}
        marks={marks}
        valueLabelDisplay={valueLabelDisplay}
        valueLabelFormat={valueLabelFormat}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-valuetext={ariaValueText}
        onChange={onChange}
        onChangeCommitted={onChangeCommitted}
        className={className}
        sx={sx}
      />
    );
  }
);

Slider.displayName = 'Slider';

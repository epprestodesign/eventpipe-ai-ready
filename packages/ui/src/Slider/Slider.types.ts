import type { SxProps, Theme } from '@mui/material';
import type { EpColor } from '../types/shared';

export type SliderOrientation = 'horizontal' | 'vertical';

export interface SliderMark {
  value: number;
  label?: string;
}

export interface SliderProps {
  // ── Value ──────────────────────────────────────────────────────────────
  /** Current value. Pass array for range slider. */
  value?: number | number[];
  /** Default value for uncontrolled. Pass array for range slider. */
  defaultValue?: number | number[];
  /** Min value. @default 0 */
  min?: number;
  /** Max value. @default 100 */
  max?: number;
  /** Step size. @default 1 */
  step?: number | null;

  // ── Appearance ─────────────────────────────────────────────────────────
  /** Color theme. Maps to semantic brand/status colors. @default 'primary' */
  color?: EpColor;
  /** Size of the slider thumb. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Orientation. @default 'horizontal' */
  orientation?: SliderOrientation;
  /** Display marks. Pass true for default step marks, or an array for custom. */
  marks?: boolean | SliderMark[];
  /** Show value label: 'off' | 'on' | 'auto'. @default 'auto' */
  valueLabelDisplay?: 'off' | 'on' | 'auto';
  /** Format the displayed value label. */
  valueLabelFormat?: (value: number) => string;

  // ── State ─────────────────────────────────────────────────────────────
  /** @default false */
  disabled?: boolean;

  // ── A11y ───────────────────────────────────────────────────────────────
  /** Required. Accessible name for the slider thumb. */
  'aria-label'?: string;
  /** ID of an element that labels this slider. */
  'aria-labelledby'?: string;
  /** Human-readable value text. */
  'aria-valuetext'?: string;

  // ── Events ─────────────────────────────────────────────────────────────
  onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
  onChangeCommitted?: (event: React.SyntheticEvent | Event, value: number | number[]) => void;

  // ── Escape hatches ──────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

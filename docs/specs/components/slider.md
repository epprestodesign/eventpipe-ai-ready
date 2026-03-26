# Slider

**Package:** `@eventpipe/components` | **MUI Base:** `Slider`

## TypeScript Interface
```ts
interface SliderProps {
  size?: 'sm' | 'md' | 'lg';   // EpSize3
  color?: EpColor;
  value?: number | number[];
  defaultValue?: number | number[];
  min?: number;
  max?: number;
  step?: number | null;
  marks?: boolean | { value: number; label?: ReactNode }[];
  orientation?: 'horizontal' | 'vertical';
  disabled?: boolean;
  track?: 'normal' | 'inverted' | false;
  valueLabelDisplay?: 'auto' | 'on' | 'off';
  valueLabelFormat?: string | ((value: number) => ReactNode);
  onChange?: (event: Event, value: number | number[]) => void;
  onChangeCommitted?: (event: Event, value: number | number[]) => void;
  getAriaValueText?: (value: number) => string;
  className?: string;
  sx?: SxProps;
}
```

## Sizes (3-tier)
`'sm' | 'md' | 'lg'` — default `'md'`

## Colors
All `EpColor`. Default `'primary'`.

## EP Additions
- `'neutral'` color
- `'lg'` size (MUI only: `small | medium`)

## Accessibility
`getAriaValueText` recommended for semantic value labels (e.g., `"$50"`).
Thumb elements have `role="slider"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`.

## Token Consumption
`ep.component.slider.*`

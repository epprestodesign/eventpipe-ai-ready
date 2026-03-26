# CircularProgress

**Package:** `@eventpipe/components` | **MUI Base:** `CircularProgress`

## TypeScript Interface
```ts
interface CircularProgressProps {
  variant?: 'indeterminate' | 'determinate';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';   // EpSize5
  color?: EpColor;
  value?: number;          // 0–100, only for determinate
  thickness?: number;
  disableShrink?: boolean; // indeterminate animation optimization
  className?: string;
  sx?: SxProps;
}
```

## Sizes (5-tier)
`'xs' | 'sm' | 'md' | 'lg' | 'xl'` — default `'md'`

| Size | Diameter |
|------|----------|
| xs   | 16px     |
| sm   | 24px     |
| md   | 40px     |
| lg   | 56px     |
| xl   | 72px     |

## Colors
All `EpColor`. Default `'primary'`.

## EP Additions
- `size` prop with named scale (MUI uses raw pixel `size`)
- `'neutral'` color
- `'xs'` and `'xl'` sizes

## Accessibility
Adds `role="progressbar"` with `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`.
For indeterminate, `aria-valuenow` is omitted.

## Token Consumption
`ep.component.circular-progress.*`

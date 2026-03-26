# Badge

**Package:** `@eventpipe/components` | **MUI Base:** `Badge`

## TypeScript Interface
```ts
interface BadgeProps {
  badgeContent?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';   // EpSize5
  color?: EpColor;
  variant?: 'standard' | 'dot';
  overlap?: 'rectangular' | 'circular';
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };
  max?: number;
  showZero?: boolean;
  invisible?: boolean;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```

## Variants
`standard` (shows count/content) | `dot` (indicator only, no content)

## Sizes (5-tier)
`'xs' | 'sm' | 'md' | 'lg' | 'xl'` — default `'md'`

## Colors
All `EpColor`. Default `'primary'`.

## EP Additions
- `size` prop (MUI Badge unsized)
- `'neutral'` color
- `'xs'` and `'xl'` sizes

## Token Consumption
`ep.component.badge.*` — diameter, font-size, background per size/color.

## Notes
`max` defaults to 99. When `badgeContent > max`, displays `{max}+`.

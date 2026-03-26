# Avatar

**Package:** `@eventpipe/components` | **MUI Base:** `Avatar`

## TypeScript Interface
```ts
interface AvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';   // EpSize5
  src?: string;
  alt?: string;
  variant?: 'circular' | 'rounded' | 'square';
  className?: string;
  sx?: SxProps;
  children?: ReactNode;   // fallback text or icon
}
```

## Variants
`circular` (default) | `rounded` | `square`

## Sizes (5-tier)
`'xs' | 'sm' | 'md' | 'lg' | 'xl'` — default `'md'`

| Size | Dimensions |
|------|-----------|
| xs   | 24×24px   |
| sm   | 32×32px   |
| md   | 40×40px   |
| lg   | 56×56px   |
| xl   | 72×72px   |

## Fallback Order
1. `src` image (if provided and loads successfully)
2. `children` (initials text or icon ReactNode)
3. Generic person icon

## EP Additions
- `size` prop (MUI Avatar only accepts `sx`-based sizing)
- Defined size ramp with token-backed dimensions

## Token Consumption
`ep.component.avatar.*` — size dimensions, background color, text color for initials.

## Notes
When using initials, truncate to first 2 characters. No automatic initials extraction from `alt`.

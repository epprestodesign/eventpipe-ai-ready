# IconButton

**Package:** `@eventpipe/components` | **MUI Base:** `IconButton`

## TypeScript Interface
```ts
interface IconButtonProps {
  variant?: 'contained' | 'outlined' | 'text' | 'soft';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';   // EpSize5
  color?: EpColor;
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  component?: ElementType;
  'aria-label': string;                         // required
  onClick?: MouseEventHandler;
  className?: string;
  sx?: SxProps;
  children: ReactNode;                          // icon element
}
```

## Variants
Same as Button: `contained | outlined | text | soft`.
Default: `'text'` (matches MUI default).

## Sizes (5-tier)
`'xs' | 'sm' | 'md' | 'lg' | 'xl'` — default `'md'`

Each size ensures a minimum touch target of 44×44px per WCAG 2.5.5.

## EP Additions
- `'soft'` and `'contained'` variants (MUI only ships text-style IconButton)
- `'xs'` and `'xl'` sizes
- `loading` prop with centered spinner
- `variant` prop unified with Button

## Accessibility
`aria-label` is required (enforced via TypeScript). No `aria-label` inference from children.

## Token Consumption
`ep.component.icon-button.*` — inherits from button tokens where applicable.

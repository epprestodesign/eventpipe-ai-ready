# Pagination

**Package:** `@eventpipe/components` | **MUI Base:** `Pagination`

## TypeScript Interface
```ts
interface PaginationProps {
  count: number;
  page?: number;
  defaultPage?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';   // EpSize5
  color?: EpColor;
  variant?: 'text' | 'outlined';
  shape?: 'rounded' | 'circular';
  siblingCount?: number;
  boundaryCount?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent, page: number) => void;
  className?: string;
  sx?: SxProps;
}
```

## Sizes (5-tier)
`'xs' | 'sm' | 'md' | 'lg' | 'xl'` — default `'md'`

## Colors
All `EpColor`. Default `'primary'`.

## EP Additions
- `'xs'` and `'xl'` sizes
- `'neutral'` color

## Token Consumption
`ep.component.pagination.*`

## Accessibility
Uses `nav` role with `aria-label`. Page items use `aria-current="page"` for active page.

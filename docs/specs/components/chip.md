# Chip

**Package:** `@eventpipe/components` | **MUI Base:** `Chip`

## TypeScript Interface
```ts
interface ChipProps {
  variant?: 'filled' | 'outlined' | 'soft';
  size?: 'sm' | 'md' | 'lg';                // EpSize3
  color?: EpColor;
  label: ReactNode;
  icon?: ReactNode;
  deleteIcon?: ReactNode;
  onDelete?: () => void;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  clickable?: boolean;
  className?: string;
  sx?: SxProps;
}
```

## Variants
| Variant    | Description                              |
|------------|------------------------------------------|
| `filled`   | Solid background (MUI default)           |
| `outlined` | Border only                              |
| `soft`     | **EP addition** — tinted low-emphasis    |

## Sizes (3-tier)
`'sm' | 'md' | 'lg'` — default `'md'`

## Colors
All `EpColor`. Default `'primary'`.

## EP Additions
- `'soft'` variant
- `'neutral'` color
- `'lg'` size (MUI Chip only has `small | medium`)

## Token Consumption
`ep.component.chip.*`

## Notes
When `onDelete` is provided, `deleteIcon` defaults to a close (×) icon.
`clickable` is inferred from `onClick` presence — no need to set explicitly.

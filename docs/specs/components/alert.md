# Alert

**Package:** `@eventpipe/components` | **MUI Base:** `Alert`

## TypeScript Interface
```ts
interface AlertProps {
  severity?: 'error' | 'warning' | 'info' | 'success';
  variant?: 'filled' | 'outlined' | 'standard' | 'soft';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';          // EpSize5
  onClose?: () => void;
  icon?: ReactNode | false;
  action?: ReactNode;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```

## Variants
| Variant    | Description                                  |
|------------|----------------------------------------------|
| `standard` | Background tint (MUI default)                |
| `filled`   | Strong background, white text                |
| `outlined` | Border only, no background fill              |
| `soft`     | **EP addition** — subtle tinted background   |

## Sizes (5-tier)
`'xs' | 'sm' | 'md' | 'lg' | 'xl'` — default `'md'`

## Severity Colors
`'error' | 'warning' | 'info' | 'success'` — not using `EpColor` (Alert uses `severity` not `color`).

## Slots
| Slot     | Description                         |
|----------|-------------------------------------|
| `icon`   | Override or hide (`false`) the icon |
| `action` | Custom action element (right side)  |

## EP Additions
- `'soft'` variant
- `size` prop (MUI Alert is unsized)

## Token Consumption
`ep.component.alert.*` — severity-keyed token variants.

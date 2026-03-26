# Button

**Package:** `@eventpipe/components` | **MUI Base:** `Button`

## TypeScript Interface
```ts
interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text' | 'soft';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';          // EpSize5
  color?: EpColor;                                    // see contracts/shared-props.md
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  startSlot?: ReactNode;
  endSlot?: ReactNode;
  href?: string;
  component?: ElementType;
  onClick?: MouseEventHandler;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```

## Variants
| Variant     | Description                              |
|-------------|------------------------------------------|
| `contained` | Filled background (MUI default)          |
| `outlined`  | Border only                              |
| `text`      | No border, no background                 |
| `soft`      | **EP addition** — tinted low-emphasis background |

## Sizes (5-tier)
`'xs' | 'sm' | 'md' | 'lg' | 'xl'` — default `'md'`

## Colors
All `EpColor` values. Default `'primary'`. `'neutral'` maps to grey palette.

## Slots
| Slot        | Description                        |
|-------------|------------------------------------|
| `startSlot` | Leading icon or element            |
| `endSlot`   | Trailing icon or element           |

## Loading State
`loading={true}` renders an inline spinner (CircularProgress, size matched to button size),
sets `aria-disabled="true"`, prevents click. Button dimensions preserved.

## EP Additions
- `'soft'` variant: tinted background using `color-mix()` Pattern 2 (Decision #003)
- `'neutral'` color
- `'xs'` and `'xl'` sizes
- `loading` prop
- `startSlot` / `endSlot` (replaces MUI `startIcon` / `endIcon` for consistency)

## Token Consumption
`ep.component.button.*` — includes background, text, border, borderRadius, padding per size.

## Notes
MUI `startIcon`/`endIcon` props are aliased to `startSlot`/`endSlot` in the EP wrapper.
Do not expose MUI props directly — use EP slot names for consistency across all components.

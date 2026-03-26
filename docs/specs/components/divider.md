# Divider

**Package:** `@eventpipe/ui` | **MUI Base:** `Divider`

## TypeScript Interface
```ts
interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?:     'fullWidth' | 'inset' | 'middle';
  textAlign?:   'center' | 'left' | 'right';
  flexItem?:    boolean;
  className?:   string;
  sx?:          SxProps<Theme>;
  children?:    ReactNode;  // Optional label — renders flanking lines
}
```

## Variants
| Variant      | Description                                               |
|--------------|-----------------------------------------------------------|
| `fullWidth`  | Spans the full container width (default)                  |
| `inset`      | Indented from the left — used in list contexts            |
| `middle`     | Indented on both sides — used as a section separator      |

## Orientation
| Value         | Description                   |
|---------------|-------------------------------|
| `horizontal`  | Horizontal rule (default)     |
| `vertical`    | Vertical rule in flex layouts |

## Children / Text Label
When `children` are provided, the divider renders with the label text centered
between two flanking lines. `textAlign` controls left/center/right position of the label.
MUI renders a `<div role="separator">` instead of `<hr>` when children are present.

## Sizing
No `size` prop — Divider has no sizing category. Thickness is a single token.

## Token Consumption
`ep.component.divider.*`

## Notes
- No `color` prop — single divider color token used throughout.
- `flexItem={true}` allows a vertical Divider to stretch inside a flex container.
- `light` prop (deprecated in MUI v6) is intentionally excluded from the EP API.

# Switch

**Package:** `@eventpipe/components` | **MUI Base:** `Switch`

## TypeScript Interface
```ts
interface SwitchProps {
  size?: 'sm' | 'md' | 'lg';   // EpSize3
  color?: EpColor;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  sx?: SxProps;
}
```

## Sizes (3-tier)
`'sm' | 'md' | 'lg'` — default `'md'`

## Colors
All `EpColor`. Default `'primary'`.

## FormField Integration
When used inside `FormField`, inherits `disabled`, `error`, `required`.

## EP Additions
- `'neutral'` color
- `'lg'` size (MUI only: `small | medium`)

## Accessibility
Renders as `role="switch"` with `aria-checked`. Associate with label via FormField or `htmlFor`.

## Token Consumption
`ep.component.switch.*`

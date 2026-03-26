# Checkbox

**Package:** `@eventpipe/components` | **MUI Base:** `Checkbox`

## TypeScript Interface
```ts
interface CheckboxProps {
  size?: 'sm' | 'md' | 'lg';    // EpSize3
  color?: EpColor;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
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
When used inside `FormField`, inherits `disabled`, `error`, `required` from context.
See `docs/specs/patterns/formfield.md`.

## EP Additions
- `'neutral'` color
- `'lg'` size (MUI only: `small | medium`)

## Accessibility
Associates with label via `htmlFor`/`id` or via FormField's `labelId`.

## Token Consumption
`ep.component.checkbox.*`

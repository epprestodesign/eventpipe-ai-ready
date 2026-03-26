# Radio

**Package:** `@eventpipe/components` | **MUI Base:** `Radio`

## TypeScript Interface
```ts
interface RadioProps {
  size?: 'sm' | 'md' | 'lg';   // EpSize3
  color?: EpColor;
  value?: unknown;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  sx?: SxProps;
}
```

## RadioGroup
Use MUI's `RadioGroup` wrapper for grouping. FormField wraps the group.

```ts
interface RadioGroupProps {
  value?: unknown;
  defaultValue?: unknown;
  name?: string;
  row?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children: ReactNode;
}
```

## Sizes (3-tier)
`'sm' | 'md' | 'lg'` — default `'md'`
Size applied to all `Radio` children via RadioGroup context when `size` set on group.

## Colors
All `EpColor`. Default `'primary'`.

## FormField Integration
When used inside `FormField`, inherits `disabled`, `error`, `required`.

## EP Additions
- `'neutral'` color
- `'lg'` size

## Token Consumption
`ep.component.radio.*`

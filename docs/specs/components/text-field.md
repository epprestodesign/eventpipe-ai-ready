# TextField

**Package:** `@eventpipe/components` | **MUI Base:** `TextField`

## TypeScript Interface
```ts
interface TextFieldProps {
  variant?: 'outlined' | 'filled';   // 'standard' dropped — see note
  size?: 'sm' | 'md' | 'lg';         // EpSize3
  color?: EpColor;
  label?: ReactNode;
  placeholder?: string;
  value?: unknown;
  defaultValue?: unknown;
  type?: HTMLInputTypeAttribute;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  className?: string;
  sx?: SxProps;
}
```

## Variants
| Variant    | Description                          |
|------------|--------------------------------------|
| `outlined` | Border surrounding input (default)   |
| `filled`   | Filled background with underline     |

`'standard'` (underline-only) is removed from EventPipe's API. See `docs/contracts/shared-props.md`.

## Sizes (3-tier)
`'sm' | 'md' | 'lg'` — default `'md'`

## FormField Integration
When used inside `FormField`, the FormField provides the label, helper text, error, and
`id`/`aria-*` associations. Do not duplicate these props when using FormField.
See `docs/specs/patterns/formfield.md`.

## Loading State
`loading={true}` shows a spinner in the `endAdornment` position, sets `readOnly`.

## EP Additions
- `'lg'` size (MUI only: `small | medium`)
- `loading` prop
- `startAdornment` / `endAdornment` as top-level props (MUI requires InputProps nesting)
- `'standard'` variant removed

## Token Consumption
`ep.component.text-field.*` — borderColor per state, background per variant, padding per size.

## Notes
For Select-like inputs, use `Select` component. For async-loaded options, use `Autocomplete`.

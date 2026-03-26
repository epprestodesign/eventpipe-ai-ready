# FormField (Compound Primitive)

**Package:** `@eventpipe/components` — `packages/components/src/compounds/FormField`
**Purpose:** Wraps any form input with label, helper text, and error message.
Provides context to child inputs for consistent a11y associations.

## TypeScript Interface
```ts
interface FormFieldProps {
  id?: string;               // auto-generated if not provided
  label?: ReactNode;
  helperText?: ReactNode;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';    // EpSize3 — passed to child inputs
  fullWidth?: boolean;
  labelId?: string;          // auto-derived from id
  helperTextId?: string;     // auto-derived from id
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```

## FormFieldContext
```ts
interface FormFieldContextValue {
  id: string;
  error: boolean;
  disabled: boolean;
  required: boolean;
  size: 'sm' | 'md' | 'lg';
  fullWidth: boolean;
  labelId: string;          // "{id}-label"
  helperTextId: string;     // "{id}-helper"
}
```

## Context Propagation Rules
| Prop        | Winner      | Rationale                                      |
|-------------|-------------|------------------------------------------------|
| `disabled`  | FormField   | Disabled fieldset must disable all children    |
| `error`     | FormField   | Error state must be consistent across field    |
| `required`  | FormField   | Required must propagate to input for `aria-required` |
| `size`      | Child       | Individual input may need explicit size override|
| `fullWidth` | Child       | Layout override valid at input level           |

## ID Management
If `id` is not provided, FormField auto-generates a stable ID using `useId()`.
`labelId = "{id}-label"`, `helperTextId = "{id}-helper"`.

## Compatible Inputs
TextField, Select, Autocomplete, Checkbox, Radio (group), Switch, Slider.
Any input that consumes `FormFieldContext` is compatible.

## Usage Pattern
```tsx
<FormField label="Event Name" required error={!!errors.name} helperText={errors.name}>
  <TextField />
</FormField>

<FormField label="Ticket Type" helperText="Select all that apply">
  <RadioGroup>
    <Radio value="ga" label="General Admission" />
    <Radio value="vip" label="VIP" />
  </RadioGroup>
</FormField>
```

## Token Consumption
FormField itself consumes no direct component tokens. It propagates context to child inputs
(TextField, Select, Autocomplete, Checkbox, Radio, Switch, Slider) which consume their
respective `ep.component.*` tokens.
FormField's own visual elements (label, helper text) consume `ep.semantic.typography.*`
and `ep.semantic.color.text.*` tokens.

## Accessibility
- Label associates to input via `htmlFor` / `id` (for TextField, Select)
- Or via `aria-labelledby` / `labelId` (for RadioGroup, CheckboxGroup)
- Helper text associates via `aria-describedby` / `helperTextId`
- Error state sets `aria-invalid="true"` on the input

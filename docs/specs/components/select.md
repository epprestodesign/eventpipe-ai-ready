# Select

**Package:** `@eventpipe/ui` | **MUI Base:** `FormControl` + `InputLabel` + `Select` + `FormHelperText`

## TypeScript Interface

```ts
interface SelectProps {
  // Appearance
  variant?: 'outlined' | 'filled';   // default: 'outlined'
  size?: EpSize3;                     // 'sm' | 'md' | 'lg', default: 'md'
  fullWidth?: boolean;

  // Label & helper
  label?: string;
  helperText?: ReactNode;
  placeholder?: string;               // shown via displayEmpty + internal renderValue

  // Value
  value?: unknown;
  defaultValue?: unknown;
  renderValue?: (value: unknown) => ReactNode;

  // Behaviour
  multiple?: boolean;
  displayEmpty?: boolean;

  // Controlled open state
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;

  // State
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  loading?: boolean;                  // spinner instead of chevron; open forced false

  // Identity
  id?: string;                        // auto-generated via useId() if omitted
  name?: string;

  // Events
  onChange?: (event: SelectChangeEvent<unknown>) => void;

  // Content
  children?: ReactNode;               // MenuItem elements

  // Escape hatches
  className?: string;
  sx?: SxProps<Theme>;
}
```

## Variants

| Variant    | Description                          |
|------------|--------------------------------------|
| `outlined` | Border surrounding trigger (default) |
| `filled`   | Filled background with underline     |

`'standard'` (underline-only) removed from EventPipe API.

## Sizes (3-tier)

`'sm' | 'md' | 'lg'` — default `'md'`

MUI mapping: `'sm'` → `size="small"`, `'md'`/`'lg'` → `size="medium"` on FormControl.

## States

| State    | Border                            | Label              |
|----------|-----------------------------------|--------------------|
| Default  | `border.default` (1px)            | `label.color`      |
| Hover    | `border.hover` (1px)              | `label.color`      |
| Focus    | `border.focus` (2px)              | `label.colorFocus` |
| Error    | `border.error` (2px)              | `label.colorError` |
| Disabled | `border.disabled` (1px)           | `label.colorDisabled` |

## Loading State

`loading={true}`: dropdown icon replaced by `CircularProgress`; `open` forced to `false`; `aria-busy="true"` on trigger.

## Focus Indicator (Approved Deviation)

Select uses border color + width change (1px → 2px) as the focus indicator, matching MUI TextField convention. Standard `focusRing` outline tokens are not used.

WCAG 2.1 AA met via non-color change (border width). See deviations register.

## Accessibility

- `labelId` on `InputLabel` + `labelId` prop on `MuiSelect` — linked for screen readers
- `id` auto-generated via `useId()` when not provided
- `error` on `FormControl` propagates `aria-invalid` to trigger
- `required` on `FormControl` sets `aria-required` on trigger
- `helperText` linked via `aria-describedby="${id}-helper"`
- `loading`: `aria-busy="true"`; dropdown open prevented
- `disabled`: native disabled — removed from tab order
- Dropdown: `role="listbox"` (MUI); options `role="option"`
- Disabled option: `aria-disabled="true"` (MUI MenuItem)

## Menu Portal Note

The dropdown menu renders in a MUI Portal (appended to `document.body`). CSS custom properties resolve from `:root` and are globally available. Dark mode requires `.dark` class on `<html>` or `<body>` to reach portal elements.

## Chevron Icon (Approved Deviation)

MUI Select's default `IconComponent` (`KeyboardArrowDownIcon`) is replaced with `<Icon name="chevron-down" />` wrapped in a `span` that receives MUI's `MuiSelect-icon` class. This is the only place where our Icon system replaces a MUI default icon in a compound component.

## EP Additions vs MUI Select

- `loading` prop
- `placeholder` as top-level prop (internal `renderValue` + `displayEmpty`)
- `'lg'` size (MUI: `small | medium` only)
- `'standard'` variant removed
- `label` / `helperText` / `error` as top-level props (MUI requires manual FormControl composition)
- `<Icon name="chevron-down" />` replaces MUI's default chevron

## Token Consumption

`ep.component.select.*` — 60 CSS custom properties:
- Trigger: border, background, input, label, helperText, padding, icon
- Menu: menu.background, menu.borderRadius
- MenuItem: color states, background states, fontSize/padding per size

Spec: `packages/tokens/src/component/select.json`

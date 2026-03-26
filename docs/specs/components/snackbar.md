# Snackbar

**Package:** `@eventpipe/components` | **MUI Base:** `Snackbar`

## TypeScript Interface
```ts
interface SnackbarProps {
  open: boolean;
  message?: ReactNode;
  severity?: 'error' | 'warning' | 'info' | 'success';  // EP addition
  action?: ReactNode;
  autoHideDuration?: number | null;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  onClose?: (event: SyntheticEvent | Event, reason: SnackbarCloseReason) => void;
  TransitionComponent?: ComponentType;
  transitionDuration?: number | { enter?: number; exit?: number };
  disableWindowBlurListener?: boolean;
  className?: string;
  sx?: SxProps;
  children?: ReactNode;   // override with Alert if needed
}
```

## Severity (EP Addition)
When `severity` is provided, the Snackbar renders with an embedded `Alert` (standard variant)
matching the severity. If omitted, renders as a plain dark snackbar (MUI default style).

```tsx
// With severity — renders Alert inside Snackbar
<Snackbar open severity="success" message="Event published." />

// Without severity — plain snackbar
<Snackbar open message="Changes saved." />
```

## EP Additions
- `severity` prop — renders embedded Alert in the Snackbar

## Defaults
- `autoHideDuration`: 4000ms
- `anchorOrigin`: `{ vertical: 'bottom', horizontal: 'left' }`

## Accessibility
Announced via `aria-live="polite"` (info/success) or `aria-live="assertive"` (error/warning)
when severity is set.

## Token Consumption
`ep.component.snackbar.*` and `ep.component.alert.*` (when severity used).

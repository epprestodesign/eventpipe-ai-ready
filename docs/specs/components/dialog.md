# Dialog

**Package:** `@eventpipe/components` | **MUI Base:** `Dialog`

## TypeScript Interfaces
```ts
interface DialogProps {
  open: boolean;
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  fullScreen?: boolean;
  scroll?: 'paper' | 'body';
  loading?: boolean;
  disableEscapeKeyDown?: boolean;
  keepMounted?: boolean;
  TransitionComponent?: ComponentType;
  transitionDuration?: number | { enter?: number; exit?: number };
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}

interface DialogTitleProps {
  children: ReactNode;
  onClose?: () => void;   // renders close (×) IconButton if provided
  className?: string;
  sx?: SxProps;
}

interface DialogContentProps {
  dividers?: boolean;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}

interface DialogActionsProps {
  disableSpacing?: boolean;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```

## Compound Sub-components
```tsx
Dialog.Title   = DialogTitle;
Dialog.Content = DialogContent;
Dialog.Actions = DialogActions;
```

## Loading State
`loading={true}` overlays a `CircularProgress` (md size) centered in the Dialog.
Disables all interactive elements within the dialog. Prevents `onClose`.
Use case: async confirm action (e.g., "Deleting event...").

## Width Control (`maxWidth`, not `size`)
Dialog does **not** accept a `size` prop. Width is controlled via `maxWidth`:
`'xs' | 'sm' | 'md' | 'lg' | 'xl' | false`
These map to CSS max-width constraints, not the component size scale (Decision #005).
This is intentionally distinct from the padding/typography size system.

## EP Additions
- `loading` prop
- `DialogTitle.onClose` renders built-in close button

## Accessibility
Focus trap: focus constrained inside open dialog. On close, focus returns to trigger element.
`aria-labelledby` connects to `DialogTitle`. `aria-describedby` connects to `DialogContent`.
Use `expectFocusTrap` and `expectFocusReturn` from test-utils.

## Token Consumption
`ep.component.dialog.*`

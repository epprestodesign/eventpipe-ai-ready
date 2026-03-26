# Drawer

**Package:** `@eventpipe/ui` | **MUI Base:** `Drawer`

## TypeScript Interfaces
```ts
interface DrawerProps {
  open: boolean;                          // required — always controlled
  onClose?: (event: object, reason: 'backdropClick' | 'escapeKeyDown') => void;
  anchor?: 'left' | 'right' | 'top' | 'bottom';  // default: 'left'
  variant?: 'temporary' | 'persistent' | 'permanent'; // default: 'temporary'
  keepMounted?: boolean;                  // keep DOM when closed (default: false)
  disableEscapeKeyDown?: boolean;
  hideBackdrop?: boolean;
  transitionDuration?: number;
  'aria-labelledby'?: string;
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}
```

## Variant Behavior
- **temporary** (default) — renders over content with Backdrop; focus trap active; Escape + backdrop click close it.
- **persistent** — slides in beside content; no Backdrop; no focus trap; needs manual open/close.
- **permanent** — always visible; no overlay behavior; use for fixed navigation rails.

## Anchor
- `left` / `right` — vertical panels; controlled by `width` token.
- `top` / `bottom` — horizontal panels; height is auto-sized to content.

## Dismissal (temporary only)
Escape key and backdrop click both call `onClose` with a reason string.
Same pattern as Dialog — consumers can distinguish reasons to block backdrop-click while allowing Escape.

## Focus
MUI automatically traps focus inside `temporary` Drawers (same Modal mechanism as Dialog).
Returns focus to trigger element on close.

## Accessibility
Pairs with `aria-labelledby` pointing to a heading inside the Drawer.
MUI sets `aria-modal="true"` on temporary variant automatically.

## Overlay system
Follows `docs/contracts/overlay-pattern.md`:
- Surface styles via `PaperProps.sx` (portal context)
- Built-in Backdrop — do NOT compose standalone `<Backdrop>` with Drawer
- z-index 1200 (below Dialog at 1300)

## Token Consumption
`ep.component.drawer.*`

# Popover

**Package:** `@eventpipe/ui` | **MUI Base:** `Popover`

## TypeScript Interfaces
```ts
interface PopoverProps {
  open: boolean;
  anchorEl: Element | null;             // required — element to anchor to
  onClose?: () => void;
  anchorOrigin?: {
    vertical:   'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  transformOrigin?: {
    vertical:   'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  disablePortal?: boolean;
  keepMounted?: boolean;
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}
```

## Behavior
- Lightweight positioning overlay anchored to an element (`anchorEl`).
- **No focus trap** — background page remains interactive.
- Click-away closes via MUI's built-in `onClose` with reason `'backdropClick'`.
- No Backdrop visible (transparent click capture layer — MUI default).
- Controlled: `open` + `onClose` required.

## Positioning
Default: opens below-left of anchor (`anchorOrigin: bottom/left`, `transformOrigin: top/left`).
Override with `anchorOrigin` / `transformOrigin` for other quadrant placements.

## Relationship to Menu
`Menu` is a list-specific Popover — it uses MUI's Popover internally with role="menu".
`Popover` is the generic surface — use it for custom content (forms, pickers, rich tooltips).
Do NOT use Popover for navigation lists — use Menu instead.

## Accessibility
- No `aria-modal` — not a modal dialog.
- Caller should apply `aria-haspopup` + `aria-expanded` on the trigger.
- When open, caller should apply `aria-controls` pointing to the Popover's content.

## Overlay system
Follows `docs/contracts/overlay-pattern.md`:
- Surface styles via `PaperProps.sx` (portal context)
- No Backdrop (transparent)
- z-index 1300 (same as Menu/Modal in MUI)

## Token Consumption
`ep.component.popover.*`

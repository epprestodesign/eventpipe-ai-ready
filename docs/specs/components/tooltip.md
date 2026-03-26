# Tooltip

**Package:** `@eventpipe/components` | **MUI Base:** `Tooltip`

## TypeScript Interface
```ts
interface TooltipProps {
  title: ReactNode;
  size?: 'sm' | 'md';                     // 2-tier exception — see Decision #005
  placement?: TooltipPlacement;            // all 12 MUI placements
  arrow?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  disableFocusListener?: boolean;
  disableHoverListener?: boolean;
  disableTouchListener?: boolean;
  enterDelay?: number;
  leaveDelay?: number;
  onOpen?: (event: SyntheticEvent) => void;
  onClose?: (event: SyntheticEvent) => void;
  className?: string;
  sx?: SxProps;
  children: ReactElement;                  // must be a single element
}
```

## Sizes (2-tier exception)
`'sm' | 'md'` — default `'md'`. See Decision #005.
Tooltip uses only 2 sizes; `lg` and above are not appropriate for tooltip content density.

## EP Additions
- `size` prop (MUI Tooltip is unsized)

## Accessibility
- Tooltip content is read by screen readers via `aria-describedby`
- Does not replace `aria-label` — use both when tooltip text is the only label
- `title=""` or `title={null}` suppresses tooltip without removing from DOM

## Token Consumption
`ep.component.tooltip.*` — background, text color, padding, border-radius, arrow size per size.

## Notes
Tooltip does not receive `color` prop — background is always the inverse surface color.

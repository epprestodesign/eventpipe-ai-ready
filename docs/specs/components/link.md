# Link

**Package:** `@eventpipe/ui` | **MUI Base:** `Link`

## TypeScript Interfaces
```ts
interface LinkProps {
  href?: string;
  onClick?: MouseEventHandler;
  underline?: 'always' | 'hover' | 'none';
  color?: 'primary' | 'secondary' | 'inherit';
  variant?: TypographyVariant;   // body1, body2, caption, etc.
  target?: string;               // e.g. '_blank'
  rel?: string;                  // e.g. 'noopener noreferrer'
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```

## Usage Pattern
```tsx
<Link href="/events">Browse events</Link>
<Link href="https://example.com" target="_blank" rel="noopener noreferrer">External</Link>
<Link onClick={handleClick} color="secondary">Action link</Link>
```

## Color Variants
- `primary` (default) — brand.primary color
- `secondary` — brand.secondary color
- `inherit` — inherits parent text color; hover state still applies

## Underline Behavior
- `hover` (default) — underline appears on hover
- `always` — always underlined
- `none` — never underlined

## Accessibility
Renders as `<a>` by default. Keyboard focusable.
EP focus ring on `:focus-visible`.
External links should include `target="_blank" rel="noopener noreferrer"`.

## Token Consumption
`ep.component.link.*`

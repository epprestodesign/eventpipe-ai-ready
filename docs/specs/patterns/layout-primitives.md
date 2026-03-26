# Layout Primitives

**Package:** `@eventpipe/components` — `packages/components/src/layout/`
**Purpose:** Opinionated layout wrappers using semantic spacing tokens.
Not data-display components — structure only.

---

## PageLayout
Wraps a full page. Sets standard container width and vertical padding.

```ts
interface PageLayoutProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  disableGutters?: boolean;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```

- Renders MUI `Container` + `Stack`
- Root element is `<main>`
- Default `maxWidth`: `'lg'`
- Horizontal padding: `semantic.spacing.inline.lg` (responsive — reduced at xs/sm)

---

## SectionLayout
Vertical stacking of content sections with consistent spacing.

```ts
interface SectionLayoutProps {
  spacing?: 'sm' | 'md' | 'lg' | 'xl';   // stack gap
  dividers?: boolean;                      // renders Divider between children
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```

- Renders MUI `Stack` direction="column"
- Default gap: `semantic.spacing.stack.xl`
- `dividers={true}` inserts a `Divider` between each child

---

## InlineGroup
Horizontal grouping of inline elements with consistent gap.

```ts
interface InlineGroupProps {
  spacing?: 'xs' | 'sm' | 'md' | 'lg';   // inline gap
  wrap?: boolean;                          // flex-wrap (default: true)
  align?: 'flex-start' | 'center' | 'flex-end' | 'baseline';
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```

- Renders MUI `Stack` direction="row"
- Default gap: `semantic.spacing.inline.sm`
- Default `wrap`: true

---

## Token Consumption
Layout primitives consume **semantic spacing tokens only**.
No hardcoded margin/padding values. No component tokens.

| Primitive      | Token                          |
|----------------|--------------------------------|
| PageLayout pad | `semantic.spacing.inline.lg`   |
| SectionLayout  | `semantic.spacing.stack.xl`    |
| InlineGroup    | `semantic.spacing.inline.sm`   |

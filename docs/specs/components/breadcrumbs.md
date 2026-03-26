# Breadcrumbs

**Package:** `@eventpipe/ui` | **MUI Base:** `Breadcrumbs`

## TypeScript Interfaces
```ts
interface BreadcrumbsProps {
  maxItems?: number;              // max visible items before collapsing (default: 8)
  itemsBeforeCollapse?: number;   // items shown before ellipsis (default: 1)
  itemsAfterCollapse?: number;    // items shown after ellipsis (default: 1)
  separator?: ReactNode;          // override default chevron-right icon
  'aria-label'?: string;          // default: 'breadcrumb'
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}

// Non-interactive current-page item (last crumb)
interface BreadcrumbItemProps {
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}

// Interactive link crumb
interface BreadcrumbLinkProps {
  href?: string;
  onClick?: MouseEventHandler;
  component?: ElementType;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```

## Composition Pattern
```tsx
<Breadcrumbs aria-label="breadcrumb">
  <BreadcrumbLink href="/home">Home</BreadcrumbLink>
  <BreadcrumbLink href="/events">Events</BreadcrumbLink>
  <BreadcrumbItem>Summer Gala 2026</BreadcrumbItem>
</Breadcrumbs>
```
Last child is always `BreadcrumbItem` (non-interactive, `aria-current="page"`).
Preceding children are `BreadcrumbLink` (interactive links).

## Separator
Default: `<Icon name="chevron-right" size="xs" />` from the EP icon system.
Override via the `separator` prop on `Breadcrumbs`.

## Accessibility
`<nav aria-label="breadcrumb">` wraps an `<ol>` per ARIA landmark spec.
Last item carries `aria-current="page"`.
MUI handles landmark and list structure automatically.

## Token Consumption
`ep.component.breadcrumbs.*`

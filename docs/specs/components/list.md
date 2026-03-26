# List

**Package:** `@eventpipe/components` | **MUI Base:** `List`

## TypeScript Interfaces
```ts
interface ListProps {
  dense?: boolean;
  disablePadding?: boolean;
  subheader?: ReactElement;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}

interface ListItemProps {
  alignItems?: 'flex-start' | 'center';
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  disablePadding?: boolean;
  divider?: boolean;
  selected?: boolean;
  secondaryAction?: ReactNode;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}

interface ListItemTextProps {
  primary?: ReactNode;
  secondary?: ReactNode;
  primaryTypographyProps?: TypographyProps;
  secondaryTypographyProps?: TypographyProps;
  inset?: boolean;
  className?: string;
  sx?: SxProps;
}

interface ListItemIconProps {
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}

interface ListSubheaderProps {
  disableGutters?: boolean;
  disableSticky?: boolean;
  inset?: boolean;
  color?: 'default' | 'primary' | 'inherit';
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```

## Compound Sub-components
```tsx
List.Item      = ListItem;
List.ItemText  = ListItemText;
List.ItemIcon  = ListItemIcon;
List.Subheader = ListSubheader;
```

## Accessibility
Renders as `<ul>` with `<li>` items by default. Use `component` prop to override for navigation.

## Token Consumption
`ep.component.list.*`

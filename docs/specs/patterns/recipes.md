# Recipe Components

**Package:** `@eventpipe/components` — `packages/components/src/recipes/`
**Purpose:** Pre-composed patterns built from primitives. Opinionated, high-level.
Recipes accept domain-level props and compose system components internally.

---

## ConfirmDialog
```ts
interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description?: ReactNode;
  confirmLabel?: string;        // default: "Confirm"
  cancelLabel?: string;         // default: "Cancel"
  confirmColor?: EpColor;       // default: 'primary'
  destructive?: boolean;        // sets confirmColor='error'
  loading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}
```
Composes: `Dialog`, `Dialog.Title`, `Dialog.Content`, `Dialog.Actions`, `Button`

---

## DataTable
```ts
interface DataTableProps<T> {
  rows: T[];
  columns: DataTableColumn<T>[];
  loading?: boolean;
  emptyState?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  stickyHeader?: boolean;
  selectable?: boolean;
  selected?: T[];
  onSelectionChange?: (rows: T[]) => void;
  getRowKey: (row: T) => string | number;
}

interface DataTableColumn<T> {
  key: string;
  header: ReactNode;
  render: (row: T) => ReactNode;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}
```
Composes: `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell`, `Checkbox`, `CircularProgress`

---

## EmptyState
```ts
interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: ReactNode;
  action?: ReactNode;     // typically a Button
  className?: string;
  sx?: SxProps;
}
```
Composes: `Stack`, layout primitives, `Typography`

---

## FormSection
```ts
interface FormSectionProps {
  title?: string;
  description?: ReactNode;
  divider?: boolean;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```
Composes: `SectionLayout`, `Typography`, `Divider`

---

## FilterChipGroup
```ts
interface FilterChipGroupProps {
  options: FilterChipOption[];
  value?: string[];
  defaultValue?: string[];
  multiple?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (value: string[]) => void;
}

interface FilterChipOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```
Composes: `InlineGroup`, `Chip`

---

## AlertBanner
```ts
interface AlertBannerProps {
  severity: 'error' | 'warning' | 'info' | 'success';
  title?: string;
  message: ReactNode;
  onClose?: () => void;
  action?: ReactNode;
  sticky?: boolean;    // position: sticky, top: 0
}
```
Composes: `Alert`, `PageLayout` container

---

## NavBreadcrumbs
```ts
interface NavBreadcrumbsProps {
  items: BreadcrumbItem[];
  maxItems?: number;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: MouseEventHandler;
  icon?: ReactNode;
}
```
Composes: `Breadcrumbs`, `Link`, `Typography`

---

## LoadingButton
Thin wrapper around `Button` with `loading` prop and preset loading label.
```ts
interface LoadingButtonProps extends ButtonProps {
  loadingLabel?: string;    // shown during loading (default: same as children)
}
```
Composes: `Button`

---

## Governance
- Recipes must not contain business logic or API calls
- All state is caller-controlled (controlled pattern)
- Recipes are stable; treat like regular components once shipped
- Breaking recipe API changes require a major version bump

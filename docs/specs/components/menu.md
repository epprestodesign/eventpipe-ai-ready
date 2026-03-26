# Menu

**Package:** `@eventpipe/ui` | **MUI Base:** `Menu`, `MenuItem`, `Divider`
**Category:** Overlay / Portal (no size prop — fixed sizing with dense mode)
**Spec status:** Canonical ✓

---

## Purpose

Menu is a portal-rendered overlay that presents a list of actions or options anchored to a trigger element. It handles its own positioning, keyboard navigation, focus management, and accessibility semantics via MUI.

---

## Sub-components

| Sub-component  | MUI Base          | Purpose                                   |
|----------------|-------------------|-------------------------------------------|
| `Menu`         | `MuiMenu`         | Portal container, handles open/close/focus|
| `MenuItem`     | `MuiMenuItem`     | Individual action row (icon slots, dense) |
| `MenuDivider`  | `Divider`         | Visual separator between item groups      |

### Composition pattern

```tsx
const [anchorEl, setAnchorEl] = useState<Element | null>(null);

<Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open</Button>
<Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
  <MenuItem onClick={handleEdit} startIcon={<Icon name="edit" />}>Edit</MenuItem>
  <MenuItem onClick={handleDuplicate} startIcon={<Icon name="add" />}>Duplicate</MenuItem>
  <MenuDivider />
  <MenuItem onClick={handleDelete} startIcon={<Icon name="delete" />} disabled>
    Delete
  </MenuItem>
</Menu>
```

---

## Props

### `MenuProps`

| Prop              | Type            | Default                           | Description                                     |
|-------------------|-----------------|-----------------------------------|-------------------------------------------------|
| `open`            | `boolean`       | —                                 | **Required.** Controls visibility               |
| `anchorEl`        | `Element \| null` | —                               | Trigger element to anchor the menu to           |
| `onClose`         | `() => void`    | —                                 | Called on backdrop click or Escape              |
| `anchorOrigin`    | `PopoverOrigin` | `{ vertical: 'bottom', horizontal: 'left' }` | Anchor point on the trigger element |
| `transformOrigin` | `PopoverOrigin` | `{ vertical: 'top', horizontal: 'left' }` | Anchor point on the menu surface     |
| `keepMounted`     | `boolean`       | `false`                           | Keep menu in DOM when closed (SSR/perf)         |
| `disablePortal`   | `boolean`       | `false`                           | Render inline instead of in a portal            |
| `className`       | `string`        | —                                 | Applied to the root Popover element             |
| `sx`              | `SxProps`       | —                                 | MUI escape hatch                                |
| `children`        | `ReactNode`     | —                                 | `MenuItem`, `MenuDivider` elements              |

### `MenuItemProps`

| Prop         | Type            | Default | Description                                         |
|--------------|-----------------|---------|-----------------------------------------------------|
| `onClick`    | `MouseEventHandler` | —   | Click handler                                       |
| `selected`   | `boolean`       | `false` | Marks item as currently selected/active             |
| `disabled`   | `boolean`       | `false` | Prevents interaction                                |
| `dense`      | `boolean`       | `false` | Reduced padding (use for dense/toolbar menus)       |
| `divider`    | `boolean`       | `false` | Renders a divider below this item (MUI built-in)   |
| `startIcon`  | `ReactNode`     | —       | Leading icon slot — pass `<Icon name="..." />`      |
| `endIcon`    | `ReactNode`     | —       | Trailing icon slot (e.g., keyboard shortcut icon)   |
| `component`  | `ElementType`   | `'li'`  | Polymorphic root element (`'a'`, `Link`, etc.)      |
| `href`       | `string`        | —       | Sets `component='a'` implicitly                     |
| `className`  | `string`        | —       |                                                     |
| `sx`         | `SxProps`       | —       |                                                     |
| `children`   | `ReactNode`     | —       | Label text                                          |

### `MenuDividerProps`

| Prop        | Type     | Default | Description         |
|-------------|----------|---------|---------------------|
| `className` | `string` | —       |                     |
| `sx`        | `SxProps`| —       | MUI escape hatch    |

---

## Token map

All tokens under `--ep-component-menu-*`.

| CSS custom property                                 | Role                                        |
|-----------------------------------------------------|---------------------------------------------|
| `--ep-component-menu-background`                    | Menu surface background color               |
| `--ep-component-menu-border-radius`                 | Menu surface corner radius                  |
| `--ep-component-menu-shadow`                        | Menu surface drop shadow                    |
| `--ep-component-menu-min-width`                     | Minimum menu width                          |
| `--ep-component-menu-item-color`                    | Item label color                            |
| `--ep-component-menu-item-color-disabled`           | Disabled item label color                   |
| `--ep-component-menu-item-background`               | Item resting background                     |
| `--ep-component-menu-item-background-hover`         | Item hover background                       |
| `--ep-component-menu-item-background-focus`         | Keyboard-focused item background            |
| `--ep-component-menu-item-background-selected`      | Selected item background                    |
| `--ep-component-menu-item-background-selected-hover`| Selected item hover background              |
| `--ep-component-menu-item-background-disabled`      | Disabled item background                    |
| `--ep-component-menu-item-font-size`                | Item label font size                        |
| `--ep-component-menu-item-padding-y`                | Item vertical padding                       |
| `--ep-component-menu-item-padding-x`                | Item horizontal padding                     |
| `--ep-component-menu-item-dense-padding-y`          | Dense item vertical padding                 |
| `--ep-component-menu-item-dense-padding-x`          | Dense item horizontal padding               |
| `--ep-component-menu-item-icon-size`                | Icon font-size in icon slots                |
| `--ep-component-menu-item-icon-color`               | Icon color in icon slots                    |
| `--ep-component-menu-item-icon-gap`                 | Gap between icon and label text             |
| `--ep-component-menu-divider-color`                 | Divider line color                          |
| `--ep-component-menu-divider-margin-y`              | Vertical margin around MenuDivider          |

---

## Accessibility

- `Menu` renders with `role="menu"` (MUI default via MenuList)
- `MenuItem` renders with `role="menuitem"` (MUI default)
- Arrow key navigation, Home/End, typeahead: handled by MUI
- `Escape` closes menu and returns focus to trigger: handled by MUI
- `disabled` items remain in DOM and are announced by screen readers as unavailable
- Do not use `aria-disabled` on menu items — MUI sets `aria-disabled` correctly from `disabled` prop
- `startIcon` / `endIcon` slots: wrap content in `aria-hidden="true"` spans — label text provides the accessible name

---

## Keyboard behavior (MUI-native, no custom logic needed)

| Key     | Behavior                                    |
|---------|---------------------------------------------|
| ↑ / ↓   | Move focus between items                    |
| Home    | Focus first item                            |
| End     | Focus last item                             |
| Enter   | Activate focused item                       |
| Escape  | Close menu, return focus to trigger         |
| Tab     | Close menu (MUI default)                    |
| Letter  | Typeahead — jump to item starting with key  |

---

## Out of scope (future iterations)

- `SubMenu` — nested/cascading menus (requires separate interaction design)
- `MenuGroup` — labelled groups within a menu
- `MenuSearch` — searchable menu (see Autocomplete component)

---

## Deviations

| Deviation | Reason |
|---|---|
| No focus ring token (outline) on items | Menu keyboard focus uses background color change (`backgroundFocus`) per standard menu UX convention. An outline ring inside a scrollable portal can cause clipping. Background change provides sufficient visual contrast (WCAG AA). |

# Card

**Package:** `@eventpipe/ui` | **MUI Base:** `Card`, `CardHeader`, `CardContent`, `CardActions`
**Category:** Layout/Surface (no size prop — adapts to content)
**Spec status:** Canonical ✓

---

## Purpose

Card is an elevated or bordered surface container. It segments related content into visually distinct units. Cards can contain anything — text, form controls, media, status alerts, and action buttons.

---

## Variants

| Variant    | Surface                     | Border             | Shadow               |
|------------|-----------------------------|--------------------|----------------------|
| `elevated` | `background.paper` (white)  | transparent        | `shadow` token       |
| `outlined` | `background.paper` (white)  | `border.default`   | none                 |
| `filled`   | `background.default` (soft) | transparent        | none                 |

Default variant: `elevated`

---

## Interactive mode

When `interactive={true}`:
- Cursor becomes `pointer`
- Hover: shadow deepens (`shadowHover`) + action.hover overlay via `background-image`
- Focus: `focusRing` outline (color / width / offset tokens)
- Keyboard: `Enter` and `Space` trigger `onClick`
- `role="button"` added automatically if no explicit `role` provided
- `tabIndex={0}` added if not explicitly set

Avoid using `interactive` on cards that already contain multiple interactive controls (buttons, links, form fields) — nested interactive elements inside `role="button"` violate ARIA.

---

## Sub-components

| Sub-component  | MUI Base          | Purpose                              |
|----------------|-------------------|--------------------------------------|
| `Card`         | `MuiCard`         | Root surface container               |
| `CardHeader`   | `MuiCardHeader`   | Title, subheader, avatar, action row |
| `CardContent`  | `MuiCardContent`  | Primary content area with padding    |
| `CardFooter`   | `MuiCardActions`  | Action row (button strip, footer)    |

### Composition pattern

```tsx
<Card variant="outlined">
  <CardHeader
    title="Event Name"
    subheader="March 24, 2026"
    action={<IconButton aria-label="settings"><Icon name="ellipsis-horizontal" /></IconButton>}
  />
  <CardContent>
    <TextField label="Notes" fullWidth />
  </CardContent>
  <CardFooter>
    <Button variant="contained">Register</Button>
    <Button variant="outlined">Learn more</Button>
  </CardFooter>
</Card>
```

---

## Props

### `CardProps`
| Prop          | Type          | Default      | Description                                    |
|---------------|---------------|--------------|------------------------------------------------|
| `variant`     | `CardVariant` | `'elevated'` | Visual surface style                           |
| `interactive` | `boolean`     | `false`      | Enables hover/focus/click behavior             |
| `onClick`     | `MouseEventHandler` | —      | Click handler (typically with `interactive`)   |
| `role`        | `string`      | —            | ARIA role override (interactive defaults to `button`) |
| `tabIndex`    | `number`      | —            | Tab order override (interactive defaults to `0`) |
| `children`    | `ReactNode`   | —            | Card body                                      |
| `className`   | `string`      | —            | —                                              |
| `sx`          | `SxProps`     | —            | MUI escape hatch                               |

### `CardHeaderProps`
| Prop            | Type        | Default | Description                             |
|-----------------|-------------|---------|----------------------------------------|
| `title`         | `ReactNode` | —       | Primary heading text                    |
| `subheader`     | `ReactNode` | —       | Secondary heading / metadata text       |
| `avatar`        | `ReactNode` | —       | Left-slot (icon, avatar, badge)         |
| `action`        | `ReactNode` | —       | Right-slot (overflow menu, icon button) |
| `disablePadding`| `boolean`   | `false` | Removes header padding for flush layouts|

### `CardContentProps`
| Prop            | Type        | Default | Description                                |
|-----------------|-------------|---------|-------------------------------------------|
| `disablePadding`| `boolean`   | `false` | Removes content padding for media/flush   |
| `children`      | `ReactNode` | —       | —                                         |

### `CardFooterProps`
| Prop            | Type        | Default | Description                             |
|-----------------|-------------|---------|----------------------------------------|
| `disableSpacing`| `boolean`   | `false` | Removes gap between action children    |
| `children`      | `ReactNode` | —       | Action buttons / controls               |

---

## Token map

All tokens live under `--ep-component-card-*`.

| CSS custom property                          | Role                                        |
|----------------------------------------------|---------------------------------------------|
| `--ep-component-card-border-radius`          | Corner radius for all variants              |
| `--ep-component-card-border-width`           | Border width (used by outlined variant)     |
| `--ep-component-card-background-elevated`    | elevated variant surface color              |
| `--ep-component-card-background-outlined`    | outlined variant surface color              |
| `--ep-component-card-background-filled`      | filled variant surface color                |
| `--ep-component-card-border-elevated`        | elevated border color (transparent)         |
| `--ep-component-card-border-outlined`        | outlined border color                       |
| `--ep-component-card-border-filled`          | filled border color (transparent)           |
| `--ep-component-card-shadow`                 | elevated variant box-shadow                 |
| `--ep-component-card-shadow-hover`           | elevated variant box-shadow on hover        |
| `--ep-component-card-hover-background`       | interactive hover overlay color             |
| `--ep-component-card-header-title-color`     | CardHeader title text color                 |
| `--ep-component-card-header-subheader-color` | CardHeader subheader text color             |
| `--ep-component-card-header-padding-y`       | CardHeader vertical padding                 |
| `--ep-component-card-header-padding-x`       | CardHeader horizontal padding               |
| `--ep-component-card-header-gap`             | Gap between avatar and header content       |
| `--ep-component-card-content-color`          | CardContent text color                      |
| `--ep-component-card-content-padding-y`      | CardContent vertical padding                |
| `--ep-component-card-content-padding-x`      | CardContent horizontal padding              |
| `--ep-component-card-footer-padding-y`       | CardFooter vertical padding                 |
| `--ep-component-card-footer-padding-x`       | CardFooter horizontal padding               |
| `--ep-component-card-footer-gap`             | Gap between CardFooter action children      |
| `--ep-component-card-divider-color`          | Color for optional Divider between sections |
| `--ep-component-card-focus-ring-color`       | interactive focus ring color                |
| `--ep-component-card-focus-ring-width`       | interactive focus ring width                |
| `--ep-component-card-focus-ring-offset`      | interactive focus ring offset               |

---

## Accessibility

- Non-interactive Card: no ARIA role needed — it is a presentational container
- Interactive Card: `role="button"` added automatically, `tabIndex={0}` added automatically
- `CardHeader.action` slot: typically contains an `IconButton` — the button must carry its own `aria-label`
- Cards containing form controls must NOT use `interactive` (no `role="button"` on a form container)
- `CardHeader.title` renders as `span`; for correct heading hierarchy, pass a Typography component or styled heading element as the `title` prop

---

## Deviations

None. Card follows the standard `component-build-workflow.md` patterns.

- Focus ring: standard `&:focus-visible` outline (not `:has()` — no overflow clipping issue)
- Hover overlay: `background-image: linear-gradient(hoverColor, hoverColor)` stacks transparently over `backgroundColor` without replacing it

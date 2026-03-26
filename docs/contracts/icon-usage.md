# Icon Usage Contract

**Authoritative rules for icon usage across all EventPipe components and product surfaces.**

---

## Hard rules

| Rule | Enforcement |
|------|------------|
| Only `<Icon name="..." />` may render icons | TypeScript: `IconName` is `keyof typeof iconRegistry` — invalid names fail at compile time |
| No direct `@mui/icons-material` imports outside `registry.ts` | Code review + ESLint (see below) |
| No hardcoded pixel sizes in components | Icon reads `--ep-semantic-icon-size-{size}` CSS var only |
| Every icon in a product surface must be in the Phase 1 approved set | Compile-time via `IconName` type |

---

## Accessibility rules

### Decorative icons
An icon is decorative when the surrounding element (button text, label, heading) carries the meaning.

**Contract:**
- `<Icon name="..." />` (no `label` prop) → `aria-hidden="true"` applied automatically
- No additional aria work needed by the consumer
- **Never** add `aria-label` to a decorative icon — it creates unexpected announcements

```tsx
// ✅ Decorative: button text carries meaning
<Button startSlot={<Icon name="add" />}>Add item</Button>

// ❌ Wrong: redundant label on decorative icon
<Button startSlot={<Icon name="add" label="Add" />}>Add item</Button>
```

### Semantic icons
An icon is semantic when it conveys meaning that is not present in the surrounding text.

**Contract:**
- Provide `label` prop on `Icon`: `<Icon name="warning" label="Warning" />`
- This sets `role="img"` + `aria-label` on the SVG root
- Do NOT also set `aria-label` on a wrapping element — duplication

```tsx
// ✅ Semantic standalone icon
<Icon name="success" size="lg" label="Task complete" />

// ✅ Semantic in a tooltip trigger
<button aria-describedby="tooltip-1">
  <Icon name="info" label="More information" />
</button>
```

### Icon-only interactive controls
When a button, link, or control contains only an icon with no visible text label:

**Contract:**
- `aria-label` must be on the **interactive element**, not the icon
- Icon inside the control is decorative (no `label` prop)
- Touch target must be ≥ 44×44px (WCAG 2.5.5) — enforced by `IconButton` component

```tsx
// ✅ Correct
<IconButton aria-label="Close dialog">
  <Icon name="close" />
</IconButton>

// ❌ Wrong: aria-label on icon, not the interactive element
<IconButton>
  <Icon name="close" label="Close dialog" />
</IconButton>
```

---

## Validation checks

### Compile-time (automatic)
- `IconName = keyof typeof iconRegistry` — any unregistered name is a TS error
- `IconSize = EpSize5` — only valid tier values accepted

### Token-resolution check (post-build, automatic)
- All `--ep-semantic-icon-size-*` vars confirmed in `tokens.light.css` by `validate-tokens.js`
- No dark override needed — icon sizing is theme-invariant

### Storybook Token Audit story (manual)
- Open `Foundation/Icon → Token Audit (DevTools)` in Storybook
- Inspect each rendered icon in DevTools → Computed → `font-size`
- Every row must show the expected pixel value

### Accessibility audit (semi-automated via addon-a11y)
Storybook's a11y addon runs axe-core on every story. The following violations must be zero:

| axe rule | What it catches |
|----------|----------------|
| `image-alt` | SVG with `role="img"` missing `aria-label` |
| `aria-hidden-focus` | Focusable element inside `aria-hidden` container |
| `button-name` | Interactive element with no accessible name |
| `color-contrast` | Icon color below 3:1 against background (UI component context) |

---

## Extending the registry

To add an icon to the Phase 1 set:

1. Open a PR to `packages/ui/src/icons/registry.ts`
2. Use a **path import** (not barrel): `import FooIcon from '@mui/icons-material/Foo'`
3. Choose a **semantic kebab-case name** that describes meaning, not shape
4. Document which component(s) will use it in the PR description
5. Update `docs/decisions/006-icon-system.md` Phase 1 table

**Rejected patterns:**
- Importing `@mui/icons-material` barrel: `import { Foo } from '@mui/icons-material'` (defeats tree-shaking)
- Names that mirror the MUI component name: `'expand-more'` not `'chevron-down'` ← wrong direction; semantic name wins
- Adding icons "just in case" with no current use case

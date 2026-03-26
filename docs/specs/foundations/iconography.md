# Iconography

**Foundation layer — applies to all components and product surfaces.**

---

## When to use icons

- To reinforce a text label with a universally understood visual cue (`add`, `delete`, `close`)
- To indicate status where color alone is insufficient (`success`, `warning`, `error`, `info`)
- For navigation landmarks where space is constrained (mobile nav, breadcrumbs)
- As adornments in form fields where the field type benefits from a visual anchor (`search`, `calendar`, `visibility`)

## When NOT to use icons

- As the sole carrier of meaning without a text label, unless the control is an icon-only button with a proper `aria-label`
- To decorate text with an unrelated or ambiguous visual
- When a text label alone is clearer — adding an icon that adds no meaning creates noise
- To represent concepts that don't have a stable, universally understood mapping

---

## Decorative vs. semantic icons

### Decorative
An icon is decorative when the surrounding context fully communicates the meaning.
The icon adds visual reinforcement only.

```tsx
// ✅ Decorative: the text label "Save" carries the meaning
<Button startSlot={<Icon name="download" />}>Save</Button>

// ✅ Decorative: Alert's severity label is communicated by the surrounding Alert component
// The icon inside Alert is decorative — Alert announces severity to screen readers
```

Decorative icons must have `aria-hidden="true"`. The `Icon` component applies this
automatically when no `label` prop is provided.

### Semantic
An icon is semantic when it carries meaning that is not otherwise communicated.

```tsx
// ✅ Semantic: icon-only close button — label required
<IconButton aria-label="Close dialog">
  <Icon name="close" />
</IconButton>

// ✅ Semantic: standalone status icon outside of an Alert
<Icon name="warning" label="Warning" />
```

For semantic icons, provide the `label` prop on `Icon` **OR** `aria-label` on the wrapping
interactive element. Do not do both — it creates duplicate announcements.

---

## Icon-only interactive controls

An interactive element that contains only an icon **must** carry a text alternative.

```tsx
// ✅ Correct: aria-label on the button
<IconButton aria-label="Delete item">
  <Icon name="delete" />
</IconButton>

// ❌ Wrong: no text alternative
<IconButton>
  <Icon name="delete" />
</IconButton>

// ✅ Also acceptable: visually hidden text (for complex cases)
<button>
  <Icon name="settings" />
  <span className="sr-only">Open settings</span>
</button>
```

Touch targets for icon-only controls must be ≥ 44×44px (WCAG 2.5.5).
The `IconButton` component enforces this via token-driven min dimensions.

---

## Alignment with text and components

Icons should feel optically aligned, not mathematically aligned.

| Context | Recommended size | Notes |
|---------|-----------------|-------|
| Inline with `caption` / overline text | `xs` (12px) | Rare; only for indicators |
| Inline with `body2` text / small buttons | `sm` (16px) | |
| Inline with `body1` text / standard buttons | `md` (20px) | **Default** |
| Standalone / large buttons | `lg` (24px) | MUI default; most prominent |
| Display / hero emphasis | `xl` (32px) | Illustration-adjacent use |

In Button, pass the matching icon size tier as `startSlot`/`endSlot`:
```tsx
<Button size="sm" startSlot={<Icon name="add" size="sm" />}>Add</Button>
<Button size="lg" startSlot={<Icon name="add" size="lg" />}>Add</Button>
```

Icons inside Alert are sized `lg` (24px) by default — matching the Alert's leading icon slot.

---

## Color

Icons inherit `color: currentColor` by default. This means they automatically match
the text color of their parent context:

```tsx
// Icon color matches button text token
<Button variant="contained">
  <Icon name="add" />  {/* inherits --ep-component-button-contained-primary-text */}
</Button>
```

Do not override icon color with hardcoded hex values. If the icon color must differ from
its context, use a semantic color token via the `color` prop or `sx`.

---

## Accessibility summary

| Rule | Enforcement |
|------|------------|
| Decorative icons have `aria-hidden="true"` | Automatic — `Icon` with no `label` prop |
| Semantic icons have `role="img"` + `aria-label` | `Icon` with `label` prop |
| Icon-only buttons carry `aria-label` on the button | `IconButton` component (linting + docs) |
| Touch targets ≥ 44px | `IconButton` token-enforced sizing |
| Color is not the only indicator | Status icons always paired with text or severity context |

---

## Governed icon set

See `docs/decisions/006-icon-system.md` for the Phase 1 approved set and the
governance process for adding new icons.

**Never import icon library components directly.** Always use `<Icon name="..." />`.

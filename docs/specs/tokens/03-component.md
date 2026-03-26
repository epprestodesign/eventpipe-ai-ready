# Component Tokens

**Source:** `packages/tokens/src/component/*.json` (one file per component)
**Rule:** References semantic tokens only. Never references primitive tokens directly.

---

## Naming Pattern
```
ep.component.{componentName}.{role}.{variant?}.{state?}
```

Examples:
```
ep.component.button.background.primary
ep.component.button.background.primary.hover   (computed — see Decision #003)
ep.component.button.text.primary
ep.component.button.borderRadius
ep.component.chip.background.soft.primary
ep.component.textField.borderColor.default
ep.component.textField.borderColor.focused
ep.component.textField.borderColor.error
```

---

## Token Consumption Rules
1. Components consume only `ep.component.*` tokens in their style declarations
2. Component tokens alias `ep.semantic.*` — never `ep.primitive.*`
3. State styles (hover, focus, selected, pressed) use Decision #003 patterns
4. Every color, spacing, border-radius, and shadow value must trace to a token
5. No magic values in component CSS

---

## Common Component Token Roles
| Role              | Example token path                                |
|-------------------|---------------------------------------------------|
| Background        | `ep.component.*.background.{variant}`             |
| Text color        | `ep.component.*.text.{variant}`                   |
| Border color      | `ep.component.*.borderColor.{state}`              |
| Border radius     | `ep.component.*.borderRadius`                     |
| Padding           | `ep.component.*.padding.{size}`                   |
| Icon color        | `ep.component.*.icon.color`                       |
| Focus ring color  | Shared — `ep.semantic.color.brand.primary` always |

---

## File Structure
```
packages/tokens/src/component/
  button.json
  icon-button.json
  avatar.json
  badge.json
  alert.json
  chip.json
  pagination.json
  circular-progress.json
  checkbox.json
  radio.json
  switch.json
  slider.json
  text-field.json
  select.json
  autocomplete.json
  table.json
  tooltip.json
  tabs.json
  dialog.json
  snackbar.json
  card.json
  menu.json
  list.json
```
Phase 2 component token files added when Phase 2 spec is finalized.

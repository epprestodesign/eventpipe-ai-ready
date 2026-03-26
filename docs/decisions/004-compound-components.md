---
id: "004"
title: Compound Component Pattern
status: DECIDED
---

## Decision
Compound components use dot-notation sub-components with React context for state propagation.

## Dot-Notation Pattern
```tsx
// Attach sub-components to parent namespace
Dialog.Title   = DialogTitle;
Dialog.Content = DialogContent;
Dialog.Actions = DialogActions;
```

## Context Propagation Rules
| Prop       | Winner      | Rationale                                |
|------------|-------------|------------------------------------------|
| `disabled` | Parent wins | Disabled parent must disable all inputs  |
| `error`    | Parent wins | Error state must be consistent           |
| `required` | Parent wins | Fieldset-level required propagates down  |
| `size`     | Child wins  | Individual child may need explicit size  |
| `fullWidth`| Child wins  | Layout override valid at child level     |

## Slot Pattern
Slots accept `ReactNode` for render override. Named slots preferred over positional.

```tsx
<Button startSlot={<CustomIcon />} endSlot={<Badge />} />
```

## Compound Registry
| Parent      | Sub-components                              |
|-------------|---------------------------------------------|
| `Dialog`    | `Title`, `Content`, `Actions`               |
| `Card`      | `Header`, `Content`, `Actions`, `Media`     |
| `Tabs`      | `Tab`, `Panel` *(EP addition)*              |
| `FormField` | wraps any form input — see `docs/specs/patterns/formfield.md` |
| `Menu`      | `Item`, `Divider`, `SubMenu`                |
| `List`      | `Item`, `ItemText`, `ItemIcon`, `Subheader` |

## Ref Forwarding
All compound sub-components forward refs to their root DOM element.

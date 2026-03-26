---
id: "006"
title: Icon System Architecture
status: DECIDED
---

## Decision

Icons are mediated through a single `Icon` component backed by a typed registry.
No consuming component may import an icon library directly.

---

## Registry Pattern

`packages/ui/src/icons/registry.ts` is the **only** file that imports `@mui/icons-material`.
All other code imports `Icon` from `@eventpipe/ui` and uses a semantic name string.

```tsx
// ✅ Correct
<Icon name="close" />
<Icon name="warning" label="Warning" />

// ❌ Prohibited
import CloseIcon from '@mui/icons-material/Close';
<CloseIcon />
```

This isolates the library dependency to one file. Swapping `@mui/icons-material` for any
other SVG source means editing `registry.ts` only — no component changes required.

---

## Governance: Approved Icon Set

**All icons must be in `registry.ts` to be usable.**
`IconName = keyof typeof iconRegistry` is enforced at compile time.
Adding an icon requires a PR to `registry.ts` with justification.

### Phase 1 Approved Set (41 icons)

#### Foundational
| Name | Approved for |
|------|-------------|
| `close` | Alert, Dialog, Chip, Snackbar dismiss |
| `check` | Checkbox, success confirmation |
| `menu` | App navigation, mobile drawer |

#### Status / Feedback
| Name | Approved for |
|------|-------------|
| `success` | Alert/Snackbar `success` severity |
| `warning` | Alert/Snackbar `warning` severity |
| `error` | Alert/Snackbar `error` severity, form validation |
| `info` | Alert/Snackbar `info` severity, tooltip triggers |

#### Navigation
| Name | Approved for |
|------|-------------|
| `chevron-down` | Select, Accordion, dropdown menus |
| `chevron-up` | Accordion open state |
| `chevron-right` | List items, breadcrumb, tree nav |
| `chevron-left` | Pagination, back navigation |
| `arrow-back` | Page-level back navigation |
| `arrow-forward` | Page-level forward navigation |

#### Action
| Name | Approved for |
|------|-------------|
| `add` | Button, FAB, list append |
| `remove` | List item removal, quantity decrease |
| `delete` | Destructive row/item delete |
| `edit` | Inline edit, form row edit |
| `search` | TextField startAdornment |
| `download` | File/export action buttons |
| `upload` | File upload trigger |
| `visibility` | Password field toggle (show) |
| `visibility-off` | Password field toggle (hide) |
| `settings` | App/section settings navigation |
| `person` | User account nav, avatar fallback |
| `calendar` | DatePicker startAdornment |
| `filter` | Table toolbar filter |

#### Application / Domain

> MUI v5 substitutes are noted where the requested icon name doesn't exist in this version.
> The registry key is stable — only the import changes on a future MUI v6 upgrade.

| Name | MUI export | Notes | Approved for |
|------|-----------|-------|-------------|
| `code-xml` | `Code` | `CodeXml` is MUI v6+; `Code` renders `</>` | Developer integration surfaces |
| `support-agent` | `SupportAgent` | | Support / help UI |
| `construction` | `Construction` | | Maintenance mode, in-progress banners |
| `signature` | `Draw` | `Signature` n/a in MUI 5; `Draw` is closest | E-signature, contract workflows |
| `library-books` | `LibraryBooks` | | Content library, resource sections |
| `account-tree` | `AccountTree` | | Org charts, hierarchy views |
| `stadium` | `Stadium` | | Venue-level navigation |
| `airline-seat-flat` | `AirlineSeatFlat` | | Seat map, lodging context |
| `fork-spoon` | `Restaurant` | `ForkSpoon` n/a in MUI 5; `Restaurant` renders fork+knife | Food/dining context |
| `apartment` | `Apartment` | | Property/building context |
| `bar-chart-4-bars` | `BarChart` | `BarChart4Bars` is MUI v6+; `BarChart` is 3-bar variant | Analytics, reporting |
| `inventory` | `InventoryOutlined` | | Inventory management surfaces |
| `concierge` | `RoomService` | `Concierge` n/a in MUI 5; `RoomService` is the bell icon | Concierge/hospitality UI |
| `calendar-month` | `CalendarMonth` | | Full-calendar, month-view navigation |
| `groups-2` | `Groups2` | | Teams, group management |

**To add an icon:** open a PR targeting `registry.ts` with:
- semantic name (kebab-case)
- MUI icon component (path-imported)
- at least one component it will be used in

---

## Sizing

Icon sizing lives at the **semantic token layer**. No component tokens are needed
for `Icon` — it has no variant or state complexity.

```
--ep-semantic-icon-size-xs   12px
--ep-semantic-icon-size-sm   16px
--ep-semantic-icon-size-md   20px  (default)
--ep-semantic-icon-size-lg   24px
--ep-semantic-icon-size-xl   32px
```

`IconSize = EpSize5` (`xs | sm | md | lg | xl`). Same vocabulary as all other components.

**Icons inside components:** pass the matching size tier.
```tsx
<Button size="md" startSlot={<Icon name="add" size="md" />} />
```

---

## Accessibility Contract

| Usage | aria treatment |
|-------|----------------|
| No `label` prop | `aria-hidden="true"` — decorative, ignored by screen readers |
| With `label` prop | `role="img"` + `aria-label="{label}"` — meaningful, announced |
| Inside icon-only `<button>` | Button must carry `aria-label`; Icon inside is decorative |

---

## Tradeoffs Accepted

| Tradeoff | Accepted because |
|----------|-----------------|
| All registry icons bundled even if unused | Design systems load once; 26 icons ≈ 8KB gzipped |
| Adding an icon requires a code change | This is intentional friction — the governance mechanism |
| `EpSize5` shared with component sizing | Consistent vocabulary outweighs any theoretical purity gain |
| Semantic names differ from MUI names | One-time mapping cost; protects all consumer code from library names |

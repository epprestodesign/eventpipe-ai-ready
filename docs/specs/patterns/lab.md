# Lab Components (EventPipe Domain)

**Package:** `@eventpipe/lab` — `packages/lab/src/`
**Purpose:** EventPipe-specific domain components. API unstable. Not for general use
until graduated to `@eventpipe/components` per lifecycle checklist.
See `docs/architecture/component-lifecycle.md`.

---

## StatusChip
Displays EventPipe event status as a styled Chip.

```ts
type EventStatus = 'draft' | 'published' | 'sold-out' | 'cancelled' | 'live' | 'upcoming';

interface StatusChipProps {
  status: EventStatus;
  size?: 'sm' | 'md' | 'lg';   // EpSize3
  className?: string;
  sx?: SxProps;
}
```

Status → color/variant mapping:
| Status      | Color     | Variant |
|-------------|-----------|---------|
| `draft`     | `neutral` | `soft`  |
| `published` | `success` | `soft`  |
| `sold-out`  | `warning` | `soft`  |
| `cancelled` | `error`   | `soft`  |
| `live`      | `success` | `filled`|
| `upcoming`  | `primary` | `soft`  |

Composes: `Chip`

---

## StatusBadge
Dot-style status indicator (no label).

```ts
interface StatusBadgeProps {
  status: EventStatus;
  size?: 'xs' | 'sm' | 'md';
  className?: string;
  sx?: SxProps;
}
```
Composes: `Badge` with `variant="dot"`

---

## EventCard
Card displaying an event summary.

```ts
interface EventCardProps {
  layout?: 'horizontal' | 'vertical';    // default: 'vertical'
  thumbnail?: string;
  thumbnailAlt?: string;
  title: string;
  date?: string | Date;
  venue?: string;
  status?: EventStatus;
  capacity?: CapacityData;
  action?: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  sx?: SxProps;
}

interface CapacityData {
  sold: number;
  total: number;
}
```

Composes: `Card`, `Card.Media`, `Card.Content`, `Card.Actions`, `StatusChip`, `CapacityIndicator`

---

## CapacityIndicator
Visual indicator of event ticket capacity.

```ts
interface CapacityIndicatorProps {
  sold: number;
  total: number;
  variant?: 'bar' | 'text' | 'compact';   // default: 'bar'
  showLabel?: boolean;
  thresholds?: CapacityThresholds;
  className?: string;
  sx?: SxProps;
}

interface CapacityThresholds {
  warning?: number;    // default: 0.75 (75% sold)
  critical?: number;   // default: 0.90 (90% sold)
}
```

Threshold-based coloring:
| Threshold   | Color     |
|-------------|-----------|
| < warning   | `success` |
| ≥ warning   | `warning` |
| ≥ critical  | `error`   |
| 100%        | `error` + "Sold Out" label |

Composes: `LinearProgress` (Phase 2), `Typography`

---

## Lab Graduation Notes
- `StatusChip` / `StatusBadge`: graduation candidate after Phase 1 stabilizes
- `EventCard`: graduation requires `LinearProgress` (Phase 2) for `CapacityIndicator`
- `CapacityIndicator`: blocks on `LinearProgress` for `bar` variant
- All lab components must pass the graduation checklist before promotion

# Overlay System Pattern

**Canonical rules for all components that render above page content.**
Derived from Menu, Tooltip, and Backdrop implementations. Apply to Dialog, Snackbar, Drawer, and any future overlay surface.

Related: `docs/contracts/component-build-workflow.md` (§6 Portal-rendered surface styling) · `docs/specs/components/dialog.md` · `docs/specs/components/snackbar.md`

---

## 1. What counts as an overlay?

An overlay is any component that renders in a MUI Portal (outside the React component tree) and appears above the page content in z-index space. This includes:

| Component | Portal | Surface type |
|---|---|---|
| Tooltip | ✅ | Floating tooltip box (no Paper) |
| Menu | ✅ | Paper (dropdown) |
| Backdrop | ✅ | Full-viewport scrim (no Paper) |
| Dialog | ✅ | Paper (modal panel) + built-in Backdrop |
| Snackbar | ✅ | Notification bar (no Paper) |
| Drawer | ✅ | Paper (side panel) + optional Backdrop |
| Popover | ✅ | Paper (anchored surface, no Backdrop) |

Non-portal components (Card, Alert, Chip) are surfaces but not overlays — the rules in this document do not apply to them.

---

## 2. Surface styling: the PAPER_SX pattern

### Problem

MUI Portal removes a component's rendered output from the React DOM subtree. `styled()` ancestor CSS selectors like `.MuiMenu-root .MuiPaper-root` **do not reach portal content** — the styled root is not an ancestor of the portal element in the DOM.

CSS custom properties defined on `:root` **are accessible everywhere**, including inside portals, because they propagate through the global cascade rather than the DOM tree.

### Solution

For every component whose Paper (or equivalent) surface renders in a Portal:

1. Define a `PAPER_SX` const at module scope using CSS var strings from `TOKEN`.
2. Pass it via the appropriate MUI surface prop (`PaperProps.sx`, `componentsProps.tooltip.sx`, etc.).
3. Never inline this object in JSX — a module-scope const gives it a stable reference and keeps JSX clean.

```ts
// ─── Paper surface sx ─────────────────────────────────────────────────────
// Styles for portal-rendered surfaces must use CSS vars (--ep-*), which resolve
// from :root globally. styled() ancestor selectors do not reach Portal content.
const PAPER_SX = {
  backgroundColor: TOKEN.background(),
  borderRadius:    TOKEN.borderRadius(),
  boxShadow:       TOKEN.shadow(),
} as const;

// In JSX:
<MuiDialog PaperProps={{ sx: PAPER_SX as any }}>
```

### Which prop to use per MUI component

| MUI component | Surface prop |
|---|---|
| `MuiMenu` | `PaperProps.sx` |
| `MuiDialog` | `PaperProps.sx` |
| `MuiDrawer` | `PaperProps.sx` |
| `MuiPopover` | `PaperProps.sx` |
| `MuiTooltip` | `componentsProps.tooltip.sx` + `componentsProps.arrow.sx` |
| `MuiSnackbar` | No Paper; style `SnackbarContent` via `ContentProps.sx` or embed `Alert` |
| `MuiBackdrop` | `styled(MuiBackdrop)` directly — Backdrop **is** the portal element, not inside one |

### Why `styled(MuiBackdrop)` is different

Backdrop is the only case where `styled()` on the portal root element works correctly. The backdrop element itself is what gets portaled — there is no inner child surface to style. `styled()` injects a global emotion class into `<head>`, which reaches the portaled element normally.

### Minimum token set for Paper overlay surfaces

Every component with a Paper surface (Menu, Dialog, Drawer) **must** define these three tokens:

```json
{
  "component": {
    "{name}": {
      "background":   { "$type": "color",     "$value": "{semantic.color.background.overlay}" },
      "borderRadius": { "$type": "dimension", "$value": "{semantic.border.radius.lg}" },
      "shadow":       { "$type": "shadow",    "$value": "..." }
    }
  }
}
```

Non-Paper overlays (Backdrop, Snackbar) have their own token requirements (see their component specs).

---

## 3. Layering model

MUI manages z-index automatically. Do not override z-index values with tokens — they are structural constants owned by MUI's theme layer, not design decisions.

**MUI default z-index stack:**

| Layer | z-index | Components |
|---|---|---|
| App Bar | 1100 | AppBar, TopNav |
| Drawer | 1200 | Drawer |
| Modal / Menu | 1300 | Dialog, Menu, Backdrop (as part of Modal) |
| Snackbar | 1400 | Snackbar |
| Tooltip | 1500 | Tooltip |

**Rules:**
- Dialog's built-in Backdrop renders at the same z-index level as the Dialog itself (inside MUI's Modal; MUI handles ordering).
- Standalone `Backdrop` (Wave 2A) renders at MUI's `backdrop` z-index when used outside a Modal. Use it for full-page loading states or custom blocking UIs — not as a replacement for Dialog's built-in backdrop.
- Snackbar sits above Dialog (`1400 > 1300`). Toast notifications remain visible even when a dialog is open.
- Tooltip sits above everything (`1500`) — consistent with its transient, non-blocking nature.

---

## 4. Dismissal behavior

### Taxonomy

| Behavior | Description | How MUI implements it | Components |
|---|---|---|---|
| **Escape key** | `Escape` closes the overlay | `disableEscapeKeyDown` prop on Modal | Dialog, Menu |
| **Click-away** | Click outside surface closes it | MUI `onClose(reason: 'backdropClick')` | Dialog, Menu |
| **Backdrop click** | Click on the scrim layer | Part of click-away; reason string distinguishes it | Dialog |
| **Controlled `onClose`** | Parent calls `setOpen(false)` in `onClose` | `onClose` callback | All controlled overlays |
| **Auto-hide** | Timer dismissal without user action | `autoHideDuration` | Snackbar |
| **No dismiss** | Overlay is purely blocking | Caller never calls `setOpen(false)` | Standalone Backdrop (loading state) |

### Rules

**All overlay components are controlled.** Every overlay exposes `open: boolean` + `onClose` callback. There are no uncontrolled overlay variants in the EP system.

**Reason string matters for Dialog.**
`onClose(event, reason)` where reason is `'backdropClick' | 'escapeKeyDown'`. Consumers can choose to prevent close on backdrop click while still allowing Escape (e.g., unsaved-changes guard).

```ts
// Example: block backdrop-click but allow Escape
const handleClose = (_: unknown, reason: string) => {
  if (reason === 'backdropClick') return;
  setOpen(false);
};
```

**Menu has no reason string.**
MUI Menu's `onClose` receives `(event, reason)` but reason is typed loosely. EP Menu exposes a plain `onClose: () => void` — callers do not need to distinguish close reasons.

**Snackbar click-away.**
MUI Snackbar fires `onClose` with `reason: 'clickaway'` when the user clicks outside. Standard pattern: ignore clickaway and only close on explicit action or auto-hide expiry.

```ts
const handleClose = (_: unknown, reason: SnackbarCloseReason) => {
  if (reason === 'clickaway') return;
  setOpen(false);
};
```

**Standalone Backdrop.**
Does not call `onClose` automatically. The parent decides when to close. For loading overlays: drive `open` from a loading state flag; no `onClick` needed (users cannot dismiss a system load).

---

## 5. Focus management

### Taxonomy

| Focus behavior | Description | Components |
|---|---|---|
| **Focus trap** | Tab cycles within the overlay; background page is inert | Dialog |
| **List focus** | Background-color state change on focused item; no outline ring | Menu |
| **No focus management** | Focus behaves as normal; overlay is non-interactive | Backdrop, Tooltip |
| **Live region** | No focus change; screen reader announces via `aria-live` | Snackbar |

### Dialog — focus trap rules

MUI Dialog automatically:
1. Traps Tab/Shift+Tab within the Dialog when `open={true}`.
2. Returns focus to the trigger element when the Dialog closes.
3. Sets `aria-modal="true"` on the dialog container.

EP additions:
- Always pass `aria-labelledby` pointing to the `DialogTitle` id.
- Pass `aria-describedby` pointing to `DialogContent` id when content is descriptive.
- `DialogTitle.onClose` renders a close button (×) — this is the primary keyboard-accessible dismiss affordance.

```tsx
<Dialog
  open={open}
  onClose={handleClose}
  aria-labelledby="confirm-dialog-title"
  aria-describedby="confirm-dialog-description"
>
  <Dialog.Title id="confirm-dialog-title" onClose={handleClose}>
    Confirm delete
  </Dialog.Title>
  <Dialog.Content id="confirm-dialog-description">
    This action cannot be undone.
  </Dialog.Content>
  <Dialog.Actions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button color="error" onClick={handleConfirm}>Delete</Button>
  </Dialog.Actions>
</Dialog>
```

### Menu — list focus rules

Already documented in `component-build-workflow.md` §6 (List-like focus). Key rule: use `backgroundFocus` color token, not a `focusRing` outline. Outline rings clip inside Portal-rendered overflow containers.

### Snackbar — live region rules

Snackbar is non-interactive from a focus standpoint. When `severity` is provided:
- `'error' | 'warning'` → `aria-live="assertive"` + `aria-atomic="true"` on the notification region.
- `'info' | 'success'` → `aria-live="polite"` + `aria-atomic="true"`.
- No severity → default MUI behavior (polite).

Do not move focus to the Snackbar — it is transient and non-blocking.

---

## 6. Backdrop composability

### Two Backdrop roles

**Standalone Backdrop** (the `<Backdrop />` component from Wave 2A):
- Use for full-page loading states.
- Use for custom blocking UIs where no Dialog/Drawer structure is needed.
- Consumer controls `open` directly.
- MUI z-index: resolves within the context that renders it (outside a Modal scope).

**Built-in Backdrop** (inside MUI Dialog/Drawer):
- MUI manages the backdrop automatically as part of the Modal layer.
- **Do not** compose a standalone `<Backdrop>` with a `<Dialog>`. MUI Dialog already renders its own backdrop; nesting a standalone Backdrop would double-stack scrim layers.
- Customize Dialog's built-in backdrop only via `BackdropProps={{ sx: ... }}` on MuiDialog if visual changes are needed.

### Decision table

| Use case | Which Backdrop |
|---|---|
| Full-page async loading (no modal) | `<Backdrop open={loading}>` (standalone) |
| Full-page loading with content confirmation | `<Backdrop><CircularProgress /></Backdrop>` |
| Modal dialog with scrim | `<Dialog>` — built-in backdrop, do not add standalone |
| Side drawer with scrim | `<Drawer>` — built-in backdrop, do not add standalone |
| Click-away capture without visual scrim | `<Backdrop invisible>` (standalone) |

---

## 7. Implementation checklist (per overlay component)

Add to the component build checklist for any overlay component:

### Token file
- [ ] `background` token present (Paper surface color)
- [ ] `borderRadius` token present if component has a Paper surface
- [ ] `shadow` token present if component has a Paper surface (elevation)
- [ ] `transitionDuration` token present (all overlays animate in/out)
- [ ] No `z-index` token — z-index is structural, managed by MUI theme

### Implementation
- [ ] Surface styles in `PAPER_SX` const (not inline in JSX) — if component uses `PaperProps.sx`
- [ ] `PAPER_SX` comment explains why PaperProps.sx is required (portal context)
- [ ] `open: boolean` prop is required (not optional with default false)
- [ ] `onClose` callback typed correctly (include `reason` string for Dialog; plain `() => void` for Menu)
- [ ] No hardcoded z-index values anywhere in component code

### Accessibility
- [ ] Dialog: `aria-labelledby` + `aria-describedby` + `aria-modal` (MUI handles `aria-modal`)
- [ ] Snackbar with severity: `aria-live` region with correct politeness level
- [ ] Backdrop (standalone, loading): `role="status"` on children + `aria-label` for screen readers
- [ ] Menu: already covered by `backgroundFocus` rule in component-build-workflow.md

---

## 8. Component decision table

Reference for all current and planned overlay components:

| Component | Portal surface | Backdrop | Focus | Escape | Click-away | Auto-hide |
|---|---|---|---|---|---|---|
| Tooltip | `componentsProps` | ❌ | None | ❌ | ❌ | ❌ |
| Menu | `PaperProps.sx` | ❌ | List focus | ✅ MUI | ✅ MUI | ❌ |
| Backdrop | `styled()` directly | IS backdrop | None | ❌ | Via `onClick` | ❌ |
| Dialog | `PaperProps.sx` | Built-in (MUI) | **Trap** | ✅ MUI | ✅ MUI | ❌ |
| Snackbar | `ContentProps.sx` or embed Alert | ❌ | Live region | ❌ | Ignore reason | ✅ 4000ms |
| Drawer | `PaperProps.sx` | Built-in (MUI) | **Trap** (temporary) / None (persistent) | ✅ MUI | ✅ MUI | ❌ |
| Popover | `PaperProps.sx` | ❌ (transparent) | None | ❌ | ✅ MUI | ❌ |

---

## 9. What is NOT shared code

After analysis, no shared runtime helper is needed. Here is why each candidate was ruled out:

| Candidate | Verdict | Reason |
|---|---|---|
| Shared `PAPER_SX` factory | ❌ Not shared | Each component has different token var names (`--ep-component-menu-*` vs `--ep-component-dialog-*`). The pattern is identical; the values are not. |
| Shared focus trap hook | ❌ Not needed | MUI Dialog handles focus trapping internally. No EP code required. |
| Shared `onClose` reason filter | ❌ Not needed | The clickaway filter is a 2-line idiom, not library code. Document it; don't abstract it. |
| Shared z-index constants | ❌ Not needed | MUI's theme z-index values are canonical. Duplicating them creates drift risk. |
| Shared `aria-live` helper | ❌ Not needed | Snackbar severity → `aria-live` mapping is 4 cases; inline it in the component. |

The overlay system is a **documentation pattern** and **implementation convention**, not a code abstraction.

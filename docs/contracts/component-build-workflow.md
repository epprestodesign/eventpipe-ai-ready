# Component Build Workflow

**Canonical process for every EventPipe UI component.**
Derived from Button and Alert implementations. All future components follow this document.

Related: `docs/architecture/component-lifecycle.md` · `docs/contracts/shared-props.md` · `docs/contracts/icon-usage.md` · `docs/contracts/ci-gates.md`

---

## File structure

Every component owns exactly four files:

```
packages/ui/src/{Component}/
  {Component}.tsx          # Implementation
  {Component}.types.ts     # Public interface (no logic)
  index.ts                 # Barrel — re-exports only
apps/storybook/stories/
  {Component}.stories.tsx  # Storybook coverage
```

After creating the files, add exports to `packages/ui/src/index.ts`:
```ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName';
```

---

## 1. Implementation checklist

### Before writing any code

- [ ] Component spec exists at `docs/specs/components/{component}.md`
- [ ] Component token file exists at `packages/tokens/src/component/{component}.json`
- [ ] Token file has been built: `pnpm --filter @eventpipe/tokens build` passes all 3 validators
- [ ] Sizing category is declared in `docs/contracts/shared-props.md` (EpSize5 / EpSize3 / EpSize2 / none)
- [ ] Props align with shared vocabulary (`docs/contracts/shared-props.md`)
- [ ] MUI base component identified (or no MUI base — fully custom)

### Token helper map

Define a `TOKEN` const at the top of the implementation file. Every CSS custom property the component reads must appear here. No `var(--ep-...)` string is written anywhere else in the file.

```ts
const TOKEN = {
  // one helper per distinct CSS var pattern
  bg:    (variant: Variant) => `var(--ep-component-{name}-${variant}-background)`,
  py:    (size: EpSize5)    => `var(--ep-component-{name}-padding-${size}-y)`,
  // etc.
} as const;
```

Rules:
- [ ] Every CSS var referenced in the component is in `TOKEN`
- [ ] No `var(--ep-semantic-*)` or `var(--ep-primitive-*)` anywhere — component layer only
- [ ] No hardcoded hex, px, rgba, or numeric design values outside `TOKEN`
- [ ] Framework resets (overriding MUI internals) are allowed but must be commented

### `ep-` prop forwarding

Use `shouldForwardProp` to prevent internal props from reaching the DOM:

```ts
const StyledComponent = styled(MuiBase, {
  shouldForwardProp: (prop) =>
    prop !== 'epVariant' && prop !== 'epSize' && prop !== 'epColor',
})<StyledProps>(({ epVariant, epSize }) => ({ ... }));
```

- [ ] All internal `ep*` props are in `shouldForwardProp`
- [ ] Internal props are prefixed `ep` to avoid collisions with MUI/HTML attributes

### States

Every interactive component must implement all applicable states using tokens:

| State | CSS selector | Token source |
|---|---|---|
| Default | (base) | background / text / border tokens |
| Hover | `&:hover` | `*-background-hover` token |
| Active | `&:active:not(:disabled):not([aria-disabled])` | hover token (confirmed pattern) |
| Focus | `&:focus-visible` | `focus-ring-color` + `focus-ring-width` + `focus-ring-offset` tokens |
| Disabled | `&:disabled, &[aria-disabled="true"]` | `disabled-background` + `disabled-text` + `disabled-opacity` tokens |
| Loading | conditional + `aria-busy` | spinner overlay, label hidden via `opacity: 0` (structural — not a token) |

- [ ] Active state uses an existing token (no new token needed — reuse hover)
- [ ] Focus uses all three focus-ring tokens: color, width, offset
- [ ] Disabled opacity is a token when it is a design decision (not for native disabled on filled components)
- [ ] Loading preserves layout dimensions (spinner absolutely positioned over hidden label)

### Accessibility

- [ ] `forwardRef` to the root DOM element
- [ ] `role` set if the element's semantic role is not conveyed by the HTML tag alone
- [ ] Interactive elements have accessible names (via `children`, `aria-label`, or `aria-labelledby`)
- [ ] Icon-only controls carry `aria-label` on the interactive element, not the icon
- [ ] No `aria-label` on decorative icons (they get `aria-hidden` automatically from `<Icon />`)
- [ ] Loading state uses `aria-disabled="true"` + `aria-busy="true"` (stays in tab order)
- [ ] Native `disabled` removes from tab order — use only when that is the desired behavior

### Icon usage

- [ ] No `@mui/icons-material` imports anywhere outside `packages/ui/src/icons/registry.ts`
- [ ] All icons rendered via `<Icon name="..." />`
- [ ] MUI component default icons (e.g., Alert severity icons) are the only acceptable coupling to MUI's own icon layer — document with a comment
- [ ] Icon in a button/control: no `label` prop on icon (decorative); `aria-label` on the control
- [ ] Standalone semantic icon: provide `label` prop on `<Icon />`

### Polymorphism (Action Controls only)

When the component can render as different elements (`<button>`, `<a>`, custom):

```ts
// styled() loses OverridableComponent typing — spread component prop separately
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const polymorphicProps = { component: component ?? (href ? 'a' : 'button') } as any;
return <StyledComponent {...polymorphicProps} ... />;
```

- [ ] Documented with the `eslint-disable` comment explaining why
- [ ] Only applied when genuinely needed — not a default pattern

### Framework resets

When overriding MUI's internal slot geometry (padding, opacity, margin on `.MuiX-slot`):

```ts
'& .MuiAlert-icon': {
  // Framework resets — correcting MUI's internal slot geometry, not design values:
  padding: '2px 0',   // MUI default slot vertical padding
  opacity: 1,          // MUI dims icon to 0.9 by default
},
```

- [ ] Framework resets are grouped with a comment explaining what MUI default they override
- [ ] Framework resets are NOT tokenized (they are structural, not design decisions)
- [ ] Design values within MUI slots (gap, color) ARE tokenized even when applied to MUI classes

---

## 2. Token-mapping checklist

### Token file (`packages/tokens/src/component/{component}.json`)

Structure pattern:
```json
{
  "component": {
    "{name}": {
      "borderRadius":  { "$type": "dimension", "$value": "{semantic.border.radius.sm}" },
      "borderWidth":   { "$type": "dimension", "$value": "1px" },
      "padding": {
        "xs": { "y": { "$type": "dimension", "$value": "..." }, "x": { "$type": "dimension", "$value": "..." } }
      },
      "{variant}": {
        "{color-or-severity}": {
          "background":      { "$type": "color", "$value": "{semantic.color....}" },
          "backgroundHover": { "$type": "color", "$value": "{semantic.color....}" },
          "text":            { "$type": "color", "$value": "{semantic.color....}" },
          "border":          { "$type": "color", "$value": "{semantic.color....}" }
        }
      },
      "disabled": {
        "background": { "$type": "color",  "$value": "{semantic.color.action.disabled}" },
        "text":       { "$type": "color",  "$value": "{semantic.color.text.disabled}" },
        "opacity":    { "$type": "number", "$value": "0.5" }
      },
      "focusRing": {
        "color":  { "$type": "color",     "$value": "{semantic.color.brand.primary}" },
        "width":  { "$type": "dimension", "$value": "2px" },
        "offset": { "$type": "dimension", "$value": "2px" }
      }
    }
  }
}
```

- [ ] Only `{semantic.*}` references used — never `{primitive.*}` in component tokens
- [ ] All `{semantic.*}` references resolve to existing vars in `dist/tokens.light.css`
- [ ] `focusRing` block present for any interactive component (color + width + offset)
- [ ] `disabled` block present for any component with a disabled state
- [ ] `disabled.opacity` token present when ghost/outline variants use opacity for disabled
- [ ] Padding tokens cover all applicable sizes (xs–xl for EpSize5; sm–lg for EpSize3)
- [ ] No design value is hardcoded in the component JSON (exception: `transparent`, `inherit`, `0`)

### Style Dictionary build verification

After editing any token file:

```bash
pnpm --filter @eventpipe/tokens build
# Must output: ✓ ep/validate-tokens: all 3 checks passed
```

- [ ] Check 1 passes: dark.json introduces no new structural keys
- [ ] Check 2 passes: all component `{semantic.*}` refs resolve in light CSS
- [ ] Check 3 passes: dark CSS contains no vars absent from light CSS
- [ ] New CSS vars appear in `dist/tokens.light.css` with expected values
- [ ] Component refs count in validator output reflects the new additions

### CSS var naming convention

Token JSON path → CSS variable:
```
component.{name}.{variant}.{color}.backgroundHover
→ --ep-component-{name}-{variant}-{color}-background-hover
```

Rules: camelCase → kebab-case. Dots → hyphens. Tier prefix `ep-component-` always present.

- [ ] Every `var(--ep-component-{name}-...)` in the component `.tsx` has a corresponding entry in the JSON
- [ ] Running `grep 'ep-component-{name}' dist/tokens.light.css` shows every var the component reads

---

## 3. Storybook checklist

### Required stories (minimum set)

| Story | Purpose | Required? |
|---|---|---|
| `Default` | Interactive controls, `satisfies Meta` | Always |
| `Variants` | All visual variants side-by-side | If has variants |
| `Sizes` | All 5 (or 3) sizes | If has size prop |
| `Colors` or `Severities` | Full color/severity range | If has color/severity |
| `{Variant}×{Color} Matrix` | Grid showing all combinations | If has both variant + color |
| `Disabled` | Disabled state across variants | If has disabled |
| `Loading` + `LoadingSizes` | Loading state + size scaling | If has loading |
| `WithSlots` | startSlot / endSlot / icon combinations | If has slots |
| `Accessibility` | Decorative vs semantic icon, a11y patterns | Always |
| `TokenAudit` | DevTools CSS var verification table + live render | Always |

### Story file conventions

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName, Icon, Button } from '@eventpipe/ui';
import type { ComponentNameProps } from '@eventpipe/ui';

const meta = {
  title: 'Components/ComponentName',   // Foundation/ for tokens/icons
  component: ComponentName,
  tags: ['autodocs'],
  argTypes: { ... },
  args: { /* sensible defaults */ },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;
```

- [ ] `satisfies Meta<typeof ComponentName>` — not `as Meta<...>` (stronger inference)
- [ ] `onClick`, `onClose`, etc. wired with `{ action: 'event-name' }` in argTypes
- [ ] `startSlot`, `endSlot`, `icon` controls set to `{ control: false }` (not serializable)
- [ ] No inline SVG icons — all icons use `<Icon name="..." />`
- [ ] No direct `@mui/icons-material` imports in story files
- [ ] `TokenAudit` story lists every `--ep-component-{name}-*` var the component reads

### TokenAudit story pattern

```tsx
export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const vars = [
      '--ep-component-{name}-border-radius',
      // ... all vars the component reads
    ];
    return (
      <div>
        <table>
          {vars.map(v => (
            <tr key={v}>
              <td>{v}</td>
              <td><span style={{ background: `var(${v})` }} /></td>
            </tr>
          ))}
        </table>
        <ComponentName>Live preview</ComponentName>
      </div>
    );
  },
};
```

---

## 4. QA / compliance checklist

Run in this order after implementation. Every item must be green before the component is considered done.

### Build gates

```bash
pnpm --filter @eventpipe/tokens build     # Token validator passes (3/3)
pnpm --filter @eventpipe/ui typecheck     # tsc --noEmit, exit 0
pnpm --filter @eventpipe/ui build         # ESM + CJS + DTS all succeed
pnpm --filter storybook typecheck         # tsc --noEmit on stories, exit 0
pnpm --filter storybook build             # Storybook static build succeeds
pnpm --filter @eventpipe/tokens test      # 7/7 token validation tests pass
```

- [ ] All six commands exit 0 (or the expected success state)
- [ ] No TypeScript `error TS...` lines in any output
- [ ] Token validator count (`Component refs: N refs`) increased by the new component's ref count

### Hardcoded value audit

```bash
grep -n "[0-9]px\|#[0-9a-fA-F]\|rgb\|rgba\|opacity" packages/ui/src/{Component}/{Component}.tsx \
  | grep -v "//\|0\.4em\|1px solid\|lineHeight\|letterSpacing"
```

Any match that is NOT a framework reset must either be:
1. Moved to a token in `{component}.json`, or
2. Explained in a code comment as a structural/framework value

- [ ] Zero unexplained hardcoded design values
- [ ] All framework resets have a one-line comment

### Token layer audit

```bash
grep "ep-semantic\|ep-primitive" packages/ui/src/{Component}/{Component}.tsx
```

- [ ] Output is empty — component reads only `--ep-component-*` vars

### Icon system audit

```bash
grep "icons-material" packages/ui/src/{Component}/{Component}.tsx
grep "icons-material" apps/storybook/stories/{Component}.stories.tsx
```

- [ ] Both commands return empty (no direct MUI icon imports)

### Accessibility spot-check

Manual checks before shipping (automated axe runs in CI):

- [ ] Tab through the component — focus ring visible on every interactive element
- [ ] Activate with `Enter` and `Space` where applicable
- [ ] Screen reader announces role, name, and state correctly
- [ ] `aria-disabled` used (not `disabled`) for loading state — element stays in tab order
- [ ] No axe violations in Storybook's a11y addon panel (zero in all required stories)

### Storybook story count

- [ ] Minimum 3 Chromatic stories (Default + 2 variant/state stories) — per `testing-strategy.md`
- [ ] `TokenAudit` story present
- [ ] `Accessibility` story present

---

## 5. Component file templates

### `{Component}.types.ts`

```ts
import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { EpSize5, ButtonVariant, EpColor } from '../types/shared';
// Adjust imports to the specific shared types this component needs.

export interface {Component}Props {
  // ── Appearance ──────────────────────────────────────────────────────────
  /** @default '{defaultVariant}' */
  variant?: {Variant}Type;

  /**
   * Sizing category {N} — {xs|sm|md|lg|xl or sm|md|lg}
   * Spec: docs/decisions/005-sizing-scale.md
   * @default 'md'
   */
  size?: EpSize5;  // or EpSize3

  /** @default '{defaultColor}' */
  color?: EpColor;  // or severity?: AlertSeverity

  // ── State ────────────────────────────────────────────────────────────────
  /** @default false */
  disabled?: boolean;

  // ── Slots ────────────────────────────────────────────────────────────────
  // startSlot / endSlot / icon — document each

  // ── Events ───────────────────────────────────────────────────────────────
  onClick?: React.MouseEventHandler<HTMLElement>;

  // ── Escape hatches ───────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;

  // ── Content ──────────────────────────────────────────────────────────────
  children: ReactNode;
}
```

Rules:
- JSDoc on every prop
- All types imported from `../types/shared` — never redefined locally
- No implementation logic, no default values (those live in `{Component}.tsx`)
- `sx?: SxProps<Theme>` on every component (MUI escape hatch)
- `className?: string` on every component

---

### `{Component}.tsx`

```tsx
import { forwardRef } from 'react';
import Mui{Base} from '@mui/material/{Base}';
import { styled } from '@mui/material/styles';
import type { {Component}Props } from './{Component}.types';
import type { EpSize5, {Variant}Type, EpColor } from '../types/shared';
// Add: import { Icon } from '../Icon';  — only if this component renders icons

// ─── Token helpers ──────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-{name}-* custom properties.
// No raw hex, no hardcoded design values, no semantic/primitive tokens consumed directly.

const TOKEN = {
  // Padding
  py:    (size: EpSize5)               => `var(--ep-component-{name}-padding-${size}-y)`,
  px:    (size: EpSize5)               => `var(--ep-component-{name}-padding-${size}-x)`,
  // Font
  fontSize: (size: EpSize5)            => `var(--ep-component-{name}-font-size-${size})`,
  // Variant + color
  bg:       (v: {Variant}Type, c: EpColor) => `var(--ep-component-{name}-${v}-${c}-background)`,
  bgHover:  (v: {Variant}Type, c: EpColor) => `var(--ep-component-{name}-${v}-${c}-background-hover)`,
  text:     (v: {Variant}Type, c: EpColor) => `var(--ep-component-{name}-${v}-${c}-text)`,
  border:   (v: {Variant}Type, c: EpColor) => `var(--ep-component-{name}-${v}-${c}-border)`,
  // Shared
  radius:       () => `var(--ep-component-{name}-border-radius)`,
  focusColor:   () => `var(--ep-component-{name}-focus-ring-color)`,
  focusWidth:   () => `var(--ep-component-{name}-focus-ring-width)`,
  focusOffset:  () => `var(--ep-component-{name}-focus-ring-offset)`,
  disabledBg:      () => `var(--ep-component-{name}-disabled-background)`,
  disabledText:    () => `var(--ep-component-{name}-disabled-text)`,
  disabledOpacity: () => `var(--ep-component-{name}-disabled-opacity)`,
} as const;

// ─── Styled root ────────────────────────────────────────────────────────────
interface Styled{Component}Props {
  epVariant: {Variant}Type;
  epColor: EpColor;
  epSize: EpSize5;
}

const Styled{Component} = styled(Mui{Base}, {
  shouldForwardProp: (prop) =>
    prop !== 'epVariant' && prop !== 'epColor' && prop !== 'epSize',
})<Styled{Component}Props>(({ epVariant, epColor, epSize }) => ({
  // Size tokens
  padding:      `${TOKEN.py(epSize)} ${TOKEN.px(epSize)}`,
  fontSize:     TOKEN.fontSize(epSize),
  borderRadius: TOKEN.radius(),

  // Variant + color tokens
  backgroundColor: TOKEN.bg(epVariant, epColor),
  color:           TOKEN.text(epVariant, epColor),
  border:          `${TOKEN.focusWidth()} solid ${TOKEN.border(epVariant, epColor)}`,
  // ↑ NOTE: use TOKEN.borderWidth() if the component has its own borderWidth token

  // Interaction states
  '&:hover': {
    backgroundColor: TOKEN.bgHover(epVariant, epColor),
  },

  '&:active:not(:disabled):not([aria-disabled="true"])': {
    backgroundColor: TOKEN.bgHover(epVariant, epColor),
    boxShadow: 'none',
  },

  '&:focus-visible': {
    outline:       `${TOKEN.focusWidth()} solid ${TOKEN.focusColor()}`,
    outlineOffset: TOKEN.focusOffset(),
  },

  '&:disabled, &[aria-disabled="true"]': {
    backgroundColor: TOKEN.disabledBg(),
    color:           TOKEN.disabledText(),
    borderColor:     'transparent',
    // Use TOKEN.disabledOpacity() for ghost/outline variants only:
    // opacity: (epVariant === 'outlined') ? TOKEN.disabledOpacity() : undefined,
  },
}));

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * {Component} — Category {N} ({Category name}), {size-tier}-tier sizing.
 * Spec: docs/specs/components/{name}.md
 */
export const {Component} = forwardRef<HTML{Element}Element, {Component}Props>(
  function {Component}(
    {
      variant  = '{defaultVariant}',
      size     = 'md',
      color    = 'primary',
      disabled = false,
      className,
      sx,
      children,
    },
    ref
  ) {
    return (
      <Styled{Component}
        ref={ref}
        ep{Variant}={variant}
        epColor={color}
        epSize={size}
        disabled={disabled}
        className={className}
        sx={sx}
      >
        {children}
      </Styled{Component}>
    );
  }
);

{Component}.displayName = '{Component}';
```

---

### `index.ts`

```ts
export { {Component} } from './{Component}';
export type { {Component}Props } from './{Component}.types';
```

---

### `{Component}.stories.tsx` (minimum)

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { {Component}, Icon } from '@eventpipe/ui';
import type { {Component}Props } from '@eventpipe/ui';

const meta = {
  title: 'Components/{Component}',
  component: {Component},
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: [/* variants */] },
    size:    { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color:   { control: 'select', options: ['primary', 'secondary', 'error', 'neutral'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    // Slot props: { control: false }
    // Event props: { action: 'event-name' }
  },
  args: {
    children: '{Component}',
    variant: '{defaultVariant}',
    size: 'md',
    color: 'primary',
    disabled: false,
  },
} satisfies Meta<typeof {Component}>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Use Controls to explore every prop combination. */
export const Default: Story = {};

export const Variants: Story = {
  render: (args: {Component}Props) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {/* map over variants */}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args: {Component}Props) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
        <{Component} key={size} {...args} size={size}>{size}</{Component}>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: (args: {Component}Props) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {/* map over variants with disabled */}
    </div>
  ),
};

export const Accessibility: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'sans-serif' }}>
      {/* Document key a11y patterns for this component */}
    </div>
  ),
};

export const TokenAudit: Story = {
  name: 'Token Audit (DevTools)',
  parameters: { layout: 'padded' },
  render: () => {
    const vars = [
      '--ep-component-{name}-border-radius',
      // all vars the component reads
    ];
    return (
      <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
        <p style={{ color: '#666' }}>Open DevTools → Computed to verify each var resolves.</p>
        <table style={{ borderCollapse: 'collapse' }}>
          <tbody>
            {vars.map(v => (
              <tr key={v} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '4px 8px' }}>{v}</td>
                <td style={{ padding: '4px 8px' }}>
                  <span style={{ display: 'inline-block', width: 14, height: 14,
                    background: `var(${v})`, border: '1px solid #ccc' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 16 }}>
          <{Component}>Live preview</{Component}>
        </div>
      </div>
    );
  },
};
```

---

## Quick-reference: compliance rules

| Rule | Enforced by |
|---|---|
| Only `--ep-component-*` vars in component TSX | Code review + compliance grep |
| No `@mui/icons-material` outside `registry.ts` | ESLint (planned) + code review |
| All icons via `<Icon name="..." />` | Code review + icon-usage contract |
| `IconName` is `keyof typeof iconRegistry` | TypeScript compile-time |
| All `{semantic.*}` refs resolve | `validate-tokens.js` Check 2 |
| Dark tokens cannot add new structure | `validate-tokens.js` Check 1 + test suite |
| Token test suite: 7/7 | `pnpm --filter @eventpipe/tokens test` |
| TypeScript: zero errors | `tsc --noEmit` in CI |
| Storybook: zero TS errors | `tsc --noEmit` on stories |
| Accessibility: zero axe violations | axe-core in CI (blocking) |

---

## 6. System rules (graduated from patterns)

These rules emerged from repeated implementation decisions across multiple components. Apply them without needing a per-component deviation.

### Focus ring color on form controls with `color` prop

For components that accept a `color?: EpColor` prop (Checkbox, Radio, Switch, Chip, and similar), the focus ring color is `TOKEN.color(epColor)` — the same color as the active/checked accent. Do **not** add a separate `focusRing.color` token for these components. The ring inherits the current color prop value dynamically.

For components without a `color` prop (Button, Card), use a static `focusRing.color` token pointing to `{semantic.color.brand.primary}`.

### Disabled state mechanism

| Component type | Disabled mechanism |
|---|---|
| Interactive surface (button, chip, tag) | `disabledBg` color + `disabledText` color + `opacity: 0.5` token |
| Form control (checkbox, radio, switch) | Dedicated `disabled.color` + `disabled.border`; no opacity — control remains visible |
| List-like item (menu item, list item) | `colorDisabled` + `opacity: 1` (reset MUI 0.38); item stays in layout |
| Input surface (text-field, select) | Border + background color change via MUI state classes; no explicit opacity token |

### Portal-rendered surface styling

Components whose interactive surface renders in a Portal (Menu dropdown, Select listbox, Autocomplete popup, Modal, Drawer) **must** pass surface styles via `PaperProps.sx` using CSS custom properties. `styled()` ancestor CSS selectors do not reach Portal content because Portal removes the element from the component's DOM subtree. CSS vars defined on `:root` remain accessible everywhere.

```ts
// Correct — CSS vars resolve globally.
// Name this const PAPER_SX and define it at module scope (not inline in JSX).
const PAPER_SX = {
  backgroundColor: TOKEN.background(),
  borderRadius:    TOKEN.borderRadius(),
  boxShadow:       TOKEN.shadow(),
} as const;
<MuiMenu PaperProps={{ sx: PAPER_SX as any }}>
```

`styled(MuiMenuItem)` and similar child components work correctly inside Portal because emotion CSS lives in `<head>`, not the DOM tree.

For the full overlay system — dismissal rules, focus trap vs non-trap, Backdrop composability, and z-index layering — see `docs/contracts/overlay-pattern.md`.

### List-like focus: background state vs outline ring

Components that render scrollable or Portal-rendered item lists (Menu, List, Autocomplete options, Select options) use a `backgroundFocus` state change instead of a `focusRing` outline. Reason: outline rings clip inside `overflow: hidden` containers and Portal-rendered trees. Define a `backgroundFocus` token in the component's item group; do not define `focusRing` tokens for these components.

### Icon slot naming

| Slot type | Prop name | When to use |
|---|---|---|
| General content (any ReactNode) | `startSlot` / `endSlot` | Buttons, form controls with arbitrary leading/trailing content |
| Icon decoration (specifically `<Icon />`) | `startIcon` / `endIcon` | Menu items, list items, chips — where slot is icon-only |
| Single icon override | `icon` | Alert, Badge — single decorative slot |

Always wrap icon slot content in an `aria-hidden="true"` span to remove it from the accessibility tree.

### `soft` variant

`soft` is an EP addition over MUI. Semantic: tinted background using the status/brand light color, with on-surface text (not `onBrand` white). Used in Button, Alert, and Chip. When adding `soft` to a new component, token structure follows `soft.{color}.background` + `soft.{color}.backgroundHover` + `soft.{color}.text`.

---

## Deviations register

When a component must deviate from this workflow, document it here.

| Component | Deviation | Reason | Approved by |
|---|---|---|---|
| Alert     | Default severity icons rendered by MUI (not via `<Icon />`) | MUI Alert maps `severity` prop to its own icon slot; overriding would require reimplementing MUI's slot system | Architecture review |
| Button    | `component` prop spread as `as any` | `styled(MuiButton)` loses `OverridableComponent` typing; targeted cast avoids full type erasure | Architecture review |
| TextField | Focus indicator is border color+width change (not `focusRing` outline tokens) | MUI TextField convention uses border as focus indicator; `focusRing` outline overlaps the notchedOutline. WCAG 2.1 AA met via non-color change (1px→2px border width) + contrast ratio. | Architecture review |
| Select    | Focus indicator is border color+width change (not `focusRing` outline tokens) | Same pattern as TextField; Select trigger is an input-style container. WCAG 2.1 AA met via non-color change. | Architecture review |
| Select    | `IconComponent` overrides MUI default `KeyboardArrowDownIcon` with `<Icon name="chevron-down" />` | Enforces Icon system usage for all icons; MUI's default icon couples to `@mui/icons-material` which violates the icon system contract. | Architecture review |
| Switch    | Focus ring applied via `&:has(.Mui-focusVisible)` on root instead of `&.Mui-focusVisible` on switchBase | Switch root has `overflow: hidden` which would clip a `box-shadow` focus ring on inner elements. Using `:has()` on the root targets a scope that is not clipped. WCAG 2.1 AA met; `:has()` has baseline 2023 support (all modern browsers). | Architecture review |
| Checkbox  | Focus ring `borderRadius: '2px'` (not `'0'`) | Slightly rounded corners on the outline match the checkbox square icon shape and align with common design system conventions. Not a functional deviation. | Architecture review |
| Radio     | Focus ring `borderRadius: '50%'` | Matches the circular Radio shape; a rectangular outline would look misaligned. | Architecture review |
| Menu      | Keyboard focus uses `backgroundFocus` color change instead of `focusRing` outline | Outline rings clip inside Portal-rendered overflow containers and scrollable lists. Standard menu UX uses background-state focus. This pattern applies to all list-like interactive surfaces (Menu, List, Autocomplete options). | Architecture review |
| Skeleton  | No `ep*` styled props / no `shouldForwardProp` | Skeleton has no dynamic token parameters. All variant differences are driven by MUI's own `.MuiSkeleton-text / -rectangular / -rounded` class hooks. The styled component is entirely static CSS; adding a prop would add complexity with no benefit. | Architecture review |
| Backdrop  | No `forwardRef` | Backdrop is a portal overlay component; a ref to the scrim `div` is not a useful API surface for consumers. DOM ref omitted intentionally to keep the API minimal. | Architecture review |
| Backdrop  | `styled(MuiBackdrop)` used directly (not `PaperProps.sx`) | Backdrop **is** the portal element — there is no inner Paper child. `styled()` injects a global emotion class into `<head>` which reaches the portaled element normally. This is the only overlay component where `styled()` on the root is correct. | Architecture review |
| Dialog    | `children?: ReactNode` (optional, not required) | Storybook TypeScript inference requires optional `children` when the story uses `name` + `render` without `args`. All render functions in practice always provide children; making it optional does not weaken the component API. | Architecture review |
| Dialog    | Close button focus ring width/offset hardcoded to `2px` | Standard EP focus ring geometry (width and offset) is a structural constant shared across all interactive controls. Only the `focusColor` is a design decision requiring a token. Adding per-button-width/offset tokens would add tokens with no theming value. | Architecture review |
| Snackbar  | No `forwardRef` | Snackbar is a notification bar; refs to the portal wrapper element have no practical API value for consumers. Omitted to keep the API minimal. | Architecture review |
| Snackbar  | Severity mode reuses `Alert` tokens (`--ep-component-alert-*`) | The embedded Alert renders using its own token layer. Snackbar does not duplicate or cross-reference Alert tokens; it composes the Alert component at the React level. This is intentional composition, not a token isolation violation. | Architecture review |
| Snackbar  | Live region set on `div` wrapper around embedded Alert (not on Alert) | Alert does not expose a `role` prop. The live region semantics (`role="alert"` or `role="status"` + `aria-atomic`) are applied to a wrapper `div`. Alert's own rendering is unaffected. | Architecture review |
| Tabs      | `children?: ReactNode` (optional, not required) | Same Storybook TypeScript inference constraint as Dialog. All `render` functions always provide children; optional does not weaken the API. | Architecture review |
| Tabs      | `value` / `defaultValue` cast to `any` in render | MUI Tabs types `value` as `string \| number \| readonly string[] \| undefined`; EP spec allows `unknown` for flexibility. `as any` is scoped to the single MUI prop pass-through; TypeScript still checks EP component boundaries. | Architecture review |
| Tabs      | `Tab` ref typed as `HTMLDivElement` (not `HTMLButtonElement`) | MUI's styled Tab root is typed with `HTMLDivElement` internally despite rendering as `<button>`. Matching MUI's own type avoids the TS2322 mismatch. | Architecture review |
| Breadcrumbs | `children?: ReactNode` (optional, not required) | Same Storybook TypeScript inference constraint as Dialog. | Architecture review |
| Breadcrumbs | `component` prop removed from `BreadcrumbLink` | `styled(MuiLink)` loses the `OverridableComponent` typing (same as Button). Prop removed to avoid the `as any` cast; consumers who need a custom root can use `sx` + `component` directly on a raw MUI Link. | Architecture review |
| Breadcrumbs | Default separator uses `<span style={{ color: TOKEN.separatorColor() }}>` wrapper | `Icon` component does not expose a `style` prop. A wrapper `span` sets `color` via `currentColor` inheritance, which the `Icon` SVG respects. | Architecture review |
| Drawer    | Close button color tokens use `--ep-semantic-color-*` vars directly | DrawerHeader's close button is structurally identical to Dialog's but lives outside the Dialog token namespace. Referencing semantic vars directly (not `ep-component-drawer-*`) is a deviation from component-layer isolation; acceptable because the close button is not a design-differentiating element across overlay types. | Architecture review |
| Drawer    | `width` token applied conditionally per anchor (not in static `PAPER_SX`) | Width only applies to left/right anchors; top/bottom drawers should fill the viewport width. `PAPER_SX` holds invariant surface styles; `width` is spread into `PaperProps.sx` conditionally in render. Both are passed together on the same `PaperProps.sx` object — no pattern violation. | Architecture review |
| Popover   | `anchorEl: Element \| null` (not `HTMLElement \| null`) | MUI Popover accepts `Element \| null`. Using the broader `Element` type matches MUI's own typing and avoids unnecessarily restricting to `HTMLElement`. | Architecture review |
| Table     | `MuiTableSortLabel` not used; sort UI implemented directly in `TableHeaderCell` | `MuiTableSortLabel` imports `ArrowDownwardIcon` from `@mui/icons-material` directly, violating the icon system contract. Sort icon rendered via `<Icon>` with `TOKEN.sortIconColor()` assigned as inline style `color` on a span wrapper. | Architecture review |
| Table     | `scope="col"` fixed internally in `TableHeaderCell`; not exposed as a prop | `scope` is a structural accessibility requirement for column headers — not a consumer design decision. Fixing it internally prevents misuse and removes it from the public API surface. | Architecture review |

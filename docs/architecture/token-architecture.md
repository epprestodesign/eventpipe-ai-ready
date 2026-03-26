# Token Architecture

## Format
W3C Design Token Community Group (DTCG) format.
Authoritative naming convention: see `docs/decisions/002-token-naming.md`.

## 3-Tier Hierarchy
```
ep.primitive.*   →   ep.semantic.*   →   ep.component.*
(raw values)         (contextual)         (per-component)
```

### Rules
1. Primitives reference nothing — raw values only
2. Semantic tokens reference primitives only
3. **Component tokens reference semantic tokens ONLY** — enforced at build time by `ep/validate-component-refs`
4. **Never skip tiers** — no component token may reference a primitive directly
5. Primitives are never overridden by dark mode
6. Semantic tokens have light + dark variants nested under `semantic/color/`

### Build-Time Enforcement
`ep/validate-component-refs` is a Style Dictionary v4 validator registered in
`style-dictionary.config.js`. It runs before every build and **throws** if any token
under the `component` tier references a path that begins with `primitive`.

```
ERROR: component.button.background.primary references primitive.color.blue.600
       Component tokens must reference semantic tokens only.
       Fix: create semantic.color.brand.primary → primitive.color.blue.600
            then reference semantic.color.brand.primary here.
```

This makes the hierarchy violation a hard build failure, not a linting suggestion.

## File Structure
```
packages/tokens/src/
  primitive/
    breakpoint.json
    color.json             # Full color palette ramps
    spacing.json
    typography.json
    border.json
    shadow.json
    animation.json         # Easing curves (cubicBezier values)
  semantic/
    color/                 # Nested — one folder per semantic category with variants
      light.json           # All semantic color tokens (light theme defaults)
      dark.json            # Only tokens that DIFFER from light (overrides only)
    spacing.json
    typography.json
  component/
    button.json
    alert.json
    ... (one file per component — thin slice first, full set at Phase 1 completion)
```

**Why nested `semantic/color/`?**
Separating light and dark into a subfolder makes the theme structure explicit at the
filesystem level: `semantic/color/` is a self-contained theme scope. Flat siblings
(`color.light.json` next to `spacing.json`) obscure which files are theme-variant.

## CSS Output Convention
`--ep-{tier}-{category}-{path}`

```
--ep-primitive-color-blue-500
--ep-semantic-color-brand-primary
--ep-component-button-background-primary
```

## Style Dictionary Transforms
See `docs/specs/tokens/04-style-dictionary.md` for all 5 custom transforms.

## Dark Mode Mechanism
Dark overrides applied via:
1. `.dark` class on `<html>` or `<body>` (explicit theme toggle)
2. `prefers-color-scheme: dark` media query (system preference)

Semantic token override files contain only the differing values.

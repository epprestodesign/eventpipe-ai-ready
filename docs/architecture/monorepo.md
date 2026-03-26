# Monorepo Architecture

## Stack
- **Orchestrator:** Turborepo
- **Package manager:** pnpm workspaces
- **Build:** tsup (per package)
- **Language:** TypeScript 5+

## Packages
| Package                    | Description                                  | Public |
|----------------------------|----------------------------------------------|--------|
| `@eventpipe/tokens`        | Design tokens (CSS, TS, JSON, MUI theme out) | Yes    |
| `@eventpipe/theme`         | MUI ThemeProvider + EventPipe theme          | Yes    |
| `@eventpipe/components`    | Production component library                 | Yes    |
| `@eventpipe/icons`         | Icon components                              | Yes    |
| `@eventpipe/utils`         | Shared utilities                             | Yes    |
| `@eventpipe/lab`           | Incubating / EP-domain components            | Yes    |
| `@eventpipe/test-utils`    | Test helpers (private)                       | No     |

## Dependency Graph
```
tokens ──► theme ──► components
                 ──► lab
icons  ──────────────► components
utils  ──────────────► components, lab
test-utils (devDep): components, lab
```

No circular dependencies. `test-utils` is never a runtime dependency.

## Directory Structure
```
packages/
  tokens/
    src/
      primitive/          # Raw value tokens (JSON, DTCG format)
      semantic/
        color/            # Theme-variant color tokens
          light.json      # Light theme defaults (all semantic colors)
          dark.json       # Dark overrides only (differing values only)
        spacing.json      # Theme-invariant
        typography.json   # Theme-invariant
      component/          # Per-component tokens (one file per component)
    style-dictionary.config.js
    dist/                 # Generated: tokens.css, tokens.ts, tokens.json, mui-theme.ts
  theme/
    src/
      EventPipeThemeProvider.tsx
      theme.light.ts
      theme.dark.ts
  components/
    src/
      [ComponentName]/    # One directory per component
      compounds/          # Compound component contexts (FormField, etc.)
      recipes/            # Pre-composed patterns
      layout/             # Layout primitives (PageLayout, SectionLayout, InlineGroup)
  icons/
    src/
      [IconName].tsx
  utils/
    src/
  lab/
    src/                  # EventPipe-domain incubating components
  test-utils/
    src/
      render-with-theme.ts
      a11y-helpers.ts
      keyboard-helpers.ts
      axe-config.ts
      matchers/
apps/
  storybook/
    stories/
    tests/
      browser-smoke.spec.ts
docs/                     # This directory
```

## Build Pipeline (Turborepo)
`tokens` → `theme` → `components`, `lab` → `storybook`

Storybook serves from `apps/storybook` using pre-built package dist files.

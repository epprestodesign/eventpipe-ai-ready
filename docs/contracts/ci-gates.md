# CI Gates

## Job Matrix
| Job                    | Trigger           | Blocking | Notes                             |
|------------------------|-------------------|----------|-----------------------------------|
| `typecheck`            | PR, push          | Yes      | `tsc --noEmit` across all packages|
| `lint`                 | PR, push          | Yes      | ESLint + Prettier check           |
| `unit-and-a11y`        | PR, push          | Yes      | Vitest with coverage gates        |
| `build`                | PR, push          | Yes      | Turborepo full build              |
| `storybook-chromatic`  | PR, push          | Yes      | Chromatic visual regression       |
| `e2e`                  | PR, push          | Yes      | Playwright (chromium only on PR)  |
| `browser-smoke`        | Push to `main`    | Yes*     | BrowserStack cross-browser        |
| `release`              | Tag push          | —        | Changesets publish                |

*Browser-smoke failure creates an incident issue but does not revert the merge.

## Coverage Gates
See `docs/architecture/testing-strategy.md` for threshold values.
New-code check runs as a separate step after `unit-and-a11y`.

## Chromatic Gates
- `onlyChanged: true` (TurboSnap)
- Viewports: [375, 768, 1280, 1440]
- Diff threshold: 0.02
- Unreviewed visual changes block PR merge

## Release
- Tool: Changesets (`@changesets/cli`)
- `@eventpipe/test-utils` excluded from publish (private package)
- Release job only runs on version tags (e.g., `v1.2.3`)
- Publishes to npm registry under `@eventpipe` scope

## Secrets Required
| Secret              | Used By           |
|---------------------|-------------------|
| `CHROMATIC_TOKEN`   | storybook-chromatic|
| `BROWSERSTACK_KEY`  | browser-smoke     |
| `NPM_TOKEN`         | release           |

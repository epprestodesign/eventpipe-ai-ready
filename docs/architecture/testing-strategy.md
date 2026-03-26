# Testing Strategy

## Test Pyramid
| Layer             | Tool                        | Share | Gate              |
|-------------------|-----------------------------|-------|-------------------|
| Unit + A11y       | Vitest + RTL + axe-core     | 70%   | Blocking          |
| Integration       | Vitest + RTL (cross-comp.)  | 15%   | Blocking          |
| Accessibility     | axe-core (dedicated tests)  | 5%    | Blocking          |
| Visual regression | Chromatic + TurboSnap       | 8%    | Blocking          |
| E2E               | Playwright                  | 2%    | Blocking (main)   |
| Browser smoke     | Playwright + BrowserStack   | —     | Push to main only |

## Coverage Thresholds
| Metric     | Global | New code |
|------------|--------|----------|
| Statements | 80%    | 85%      |
| Branches   | 75%    | 85%      |
| Functions  | 80%    | 85%      |
| Lines      | 80%    | 85%      |

New-code threshold enforced via CI script (`scripts/check-new-code-coverage.sh`).

## Accessibility Standard
WCAG 2.1 AA baseline. AAA required for body text and primary actions.

## Per-Component Test Contract
Every component must have:
- [ ] Unit: render, all variants, all sizes, all colors, prop forwarding
- [ ] Keyboard navigation coverage
- [ ] axe-core assertion (blocking — component ships with zero violations)
- [ ] Chromatic story: Default + key variants
- [ ] ARIA attribute assertions
- [ ] Fixtures file: `src/__fixtures__/[ComponentName].fixtures.ts`
- [ ] Minimum counts: unit ≥ 8, a11y ≥ 1, Chromatic stories ≥ 3

## Chromatic Configuration
- `onlyChanged: true` (TurboSnap — only re-test changed components)
- Viewports: [375, 768, 1280, 1440]
- Diff threshold: 0.02
- Fails PR on unreviewed visual changes

## Playwright E2E
- 5 projects: chromium, firefox, webkit, mobile-chrome, mobile-safari
- BaseURL: Storybook dev server
- Tests live in `apps/storybook/tests/`

## Browser Smoke (BrowserStack)
- Tag: `@browser-smoke`
- Trigger: push to `main` only
- Coverage: foundation stories + 1 Default story per Phase 1 component
- Browsers: Chrome, Firefox, Safari, iOS Safari, Chrome Android
- Failure creates incident issue; does **not** block merge

## Mutation Testing
Declined for Phase 1. Re-evaluate at Phase 2 kickoff.

## Test Utils
See `docs/contracts/test-utils.md` for `renderWithTheme`, a11y helpers, keyboard helpers,
custom matchers, and axe configuration.

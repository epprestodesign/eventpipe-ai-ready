# Component Lifecycle

## Stages
1. **Lab** (`@eventpipe/lab`) — Incubating. API unstable. EventPipe-domain experiments.
2. **Components** (`@eventpipe/components`) — Stable. Versioned. Production-ready.
3. **Deprecated** — `@deprecated` JSDoc + sunset timeline in CHANGELOG.

## Lab Graduation Checklist
To graduate a component from `@eventpipe/lab` to `@eventpipe/components`:

- [ ] 1.  TypeScript types complete — no `any` or `unknown` without explicit justification
- [ ] 2.  Props match shared-props vocabulary (`docs/contracts/shared-props.md`)
- [ ] 3.  Consumes only `ep.component.*` tokens — no hardcoded values
- [ ] 4.  WCAG 2.1 AA — axe-core passes with zero violations
- [ ] 5.  Keyboard navigation tested
- [ ] 6.  All variants covered by Chromatic stories
- [ ] 7.  Unit test coverage ≥ 85%
- [ ] 8.  Integration test exists (cross-component behavior)
- [ ] 9.  JSDoc on all public props
- [ ] 10. Compound sub-components follow dot-notation pattern (Decision #004)
- [ ] 11. FormField compatibility verified (if form input)
- [ ] 12. Responsive at all 4 Chromatic viewports (375, 768, 1280, 1440)
- [ ] 13. Peer reviewed by ≥ 1 other team member
- [ ] 14. Fixtures file exists: `src/__fixtures__/[ComponentName].fixtures.ts`
- [ ] 15. Minimum test counts: unit ≥ 8, a11y ≥ 1, visual ≥ 3 Chromatic stories

## New Component Proposal
Open a Linear issue with label `component-proposal`. Include:
- Use case and EventPipe-specific need
- Proposed API shape (TypeScript interface draft)
- Comparable existing components in the system or MUI

## Deprecation Policy
1. Add `@deprecated` JSDoc with migration guidance
2. Announce in CHANGELOG with target removal version
3. Minimum 2 minor versions between deprecation and removal
4. Remove in next major version

---
id: "006"
title: Browser Support Matrix
status: DECIDED
---

## Supported Browsers
| Browser              | Version        |
|----------------------|----------------|
| Chrome               | Last 2 releases|
| Edge                 | Last 2 releases|
| Safari (macOS)       | Last 2 major   |
| Firefox              | Last 2 releases|
| iOS Safari           | Last 2 releases|
| Chrome Android       | Last 2 releases|

## Not Supported
IE (all versions), legacy Edge (EdgeHTML engine).

## Feature Compatibility Policy

### 1. Features We Rely On (required, no fallback)
| Feature               | Min versions                        |
|-----------------------|-------------------------------------|
| CSS Custom Properties | All supported browsers — baseline   |
| `color-mix(in srgb)`  | Chrome 111, Safari 16.2, Firefox 113|
| `focus-visible`       | All supported browsers — baseline   |
| CSS Grid / Flexbox    | All supported browsers — baseline   |

### 2. Features Explicitly Not Supported
- IE polyfills — do not add
- Legacy Edge (EdgeHTML) CSS hacks — do not add

### 3. Progressive Enhancement Features (use with `@supports`)
| Feature             | Min versions                            |
|---------------------|-----------------------------------------|
| CSS `:has()`        | Chrome 105, Safari 15.4, Firefox 121    |
| CSS Container Queries| Chrome 105, Safari 16, Firefox 110    |

These must not break layout when unsupported. Use `@supports` guard.

### 4. QA Validation
Browser-smoke tests run on every push to `main` via BrowserStack.
Tagged `@browser-smoke`. See `docs/contracts/ci-gates.md`.

### 5. Feature Detection Policy
Feature detection (`@supports`) over browser detection (`navigator.userAgent`).
No UA sniffing. Graceful degradation required for `:has()` and container queries.

### 6. Outside Matrix
Best-effort only. Bugs in unsupported browsers are deprioritized.
No guarantees of functionality or visual fidelity.

## Storybook Testing
Viewports: [375, 768, 1280, 1440].
Cross-browser: BrowserStack. Foundation stories + 1 Default story per Phase 1 component.

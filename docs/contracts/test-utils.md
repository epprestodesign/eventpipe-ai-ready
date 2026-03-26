# Test Utils Contract

**Package:** `@eventpipe/test-utils` (private — dev dependency only, never runtime)

---

## renderWithTheme
```ts
function renderWithTheme(
  ui: ReactElement,
  options?: {
    theme?: 'light' | 'dark';       // Default: 'light'
    locale?: string;                 // Default: 'en'
    colorScheme?: 'light' | 'dark'; // Default: matches theme
  }
): RenderResult;
```
Wraps `ui` in `EventPipeThemeProvider` + RTL's `render`. Use instead of bare `render`.

---

## A11y Helpers
```ts
expectAccessibleCombobox(element: HTMLElement): void
expectAccessibleDialog(element: HTMLElement): void
expectAccessibleTabs(element: HTMLElement): void
expectAccessibleMenu(element: HTMLElement): void
expectFocusTrap(container: HTMLElement): void  // focus stays inside container
expectFocusReturn(trigger: HTMLElement): void  // focus returns to trigger on close
```

---

## Keyboard Helpers
```ts
tab(times?: number): void
shiftTab(times?: number): void
arrowDown(times?: number): void
arrowUp(times?: number): void
escape(): void
enter(): void
space(): void
```
All helpers use `@testing-library/user-event` internally.

---

## axe Configuration
- Rules: WCAG 2.1 AA + select AAA (body text, primary actions)
- Custom rules:
  - Touch target minimum: 44×44px
  - `focus-visible` present on all interactive elements
- Import: `import { axeConfig } from '@eventpipe/test-utils/axe-config'`

---

## Custom Matchers
```ts
// Assert CSS custom property value on element
expect(element).toHaveTokenValue(
  '--ep-semantic-color-brand-primary',
  '#0057FF'
);

// Assert zero axe violations (async)
await expect(element).toBeAccessible();
```
Register in `vitest.setup.ts`:
```ts
import '@eventpipe/test-utils/matchers';
```

---

## Fixtures Convention
Every component must export from `src/__fixtures__/[ComponentName].fixtures.ts`:
```ts
export const defaultProps: [ComponentName]Props = { ... };
export const variantMatrix: [ComponentName]Props[] = [ ... ]; // one per variant
export const sizeMatrix: [ComponentName]Props[] = [ ... ];    // one per size
```
Fixtures used by unit tests, Chromatic stories, and Storybook args.

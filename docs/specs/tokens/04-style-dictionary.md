# Style Dictionary Configuration

**File:** `packages/tokens/style-dictionary.config.js`
**Version:** Style Dictionary v4

---

## Custom Transforms

### `ep/locale-normalize`
- **Type:** `name`
- **Scope:** All tokens
- **Purpose:** Normalizes Figma comma-decimal separators in token path segments
- **Affected:** 44 token paths, 17 unique key patterns (e.g., `1,5rem` → `1.5rem`)
```js
transform: (token) => token.path
  .map(segment => segment.replace(/(\d),(\d)/g, '$1.$2'))
  .join('-')
```

### `ep/figma-alias-resolve`
- **Type:** `value`
- **Scope:** Alias tokens
- **Purpose:** Resolves Figma variable alias format to DTCG `{token.reference}` format
- **Figma input format:** `{ type: 'VARIABLE_ALIAS', id: 'VariableID:123:456' }`
- **Output format:** DTCG reference string, e.g. `{primitive.color.blue.600}`
- **Note:** Requires a Figma variable ID → token path lookup map built from export

### `ep/figma-color-to-hex`
- **Type:** `value`
- **Scope:** Color tokens with Figma RGBA object format
- **Purpose:** Converts Figma RGBA object to hex string
- **Figma input format:** `{ r: 0–1, g: 0–1, b: 0–1, a: 0–1 }` (values are 0–1 floats)
- **Output format:** `#RRGGBB` (opaque) or `#RRGGBBAA` (with alpha, when a < 1)
- **Example:** `{ r: 0, g: 0.341, b: 1, a: 1 }` → `#0057FF`

### `ep/shadow-css`
- **Type:** `value`
- **Scope:** Shadow tokens
- **Purpose:** Converts shadow layer array to CSS `box-shadow` value string
- **Input:** `[{ color, offsetX, offsetY, blur, spread }, ...]`
- **Output:** `"0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05)"`

### `ep/cubicBezier-css`
- **Type:** `value`
- **Scope:** Animation/transition easing tokens
- **Purpose:** Converts `[x1, y1, x2, y2]` array to `cubic-bezier(x1, y1, x2, y2)`
- **Input format:** `[0.4, 0, 0.2, 1]` (standard MUI easing)
- **Output format:** `cubic-bezier(0.4, 0, 0.2, 1)`
- **Source tokens:** `primitive.animation.easing.*` (standard, decelerate, accelerate, sharp)
- **Consumer:** `semantic.transition.*` tokens, consumed by components with animated state

---

---

## Build-Time Validator: `ep/validate-component-refs`

Registered as a Style Dictionary v4 **validator** (not a transform). Runs before the
build emits any output. Hard-fails the build if violated.

**Rule enforced:** Any token whose path begins with `component` may ONLY reference tokens
whose path begins with `semantic`. References to `primitive.*` in component tokens are
a build error.

```js
StyleDictionary.registerValidator({
  name: 'ep/validate-component-refs',
  validate: (token) => {
    const isComponentTier = token.path[0] === 'component';
    if (!isComponentTier) return true;

    const ref = token.original.$value;
    if (typeof ref !== 'string' || !ref.startsWith('{')) return true;

    const referencedPath = ref.slice(1, -1); // strip { }
    if (referencedPath.startsWith('primitive.')) {
      throw new Error(
        `[ep/validate-component-refs] ${token.path.join('.')} references ` +
        `${referencedPath}. Component tokens must reference semantic tokens only.`
      );
    }
    return true;
  }
});
```

This validator runs on every `build` and `watch` invocation.
CI will catch violations before any PR merges.

---

## Transform Application Order
`ep/locale-normalize` → `ep/figma-alias-resolve` → `ep/figma-color-to-hex`
→ `ep/shadow-css` → `ep/cubicBezier-css`

---

## Output Platforms
| Platform   | Output file              | Format                   | Consumer              |
|------------|--------------------------|--------------------------|------------------------|
| `css`      | `dist/tokens.css`        | CSS custom properties    | All web consumers      |
| `ts`       | `dist/tokens.ts`         | Typed TS const exports   | TS consumers           |
| `json`     | `dist/tokens.json`       | Resolved token tree      | Tooling, Figma sync    |
| `muiTheme` | `dist/mui-theme.ts`      | MUI theme shape object   | `@eventpipe/theme`     |

---

## CSS Output Convention
All CSS custom properties use the naming convention from Decision #002:
`--ep-{tier}-{category}-{path}`

Dark mode overrides emitted in a separate block:
```css
/* Light (default) */
:root { --ep-semantic-color-brand-primary: #0057FF; }

/* Dark */
.dark, @media (prefers-color-scheme: dark) {
  :root { --ep-semantic-color-brand-primary: #4D9AFF; }
}
```

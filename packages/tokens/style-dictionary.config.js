import StyleDictionary from 'style-dictionary';
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Build-time validator: component tokens must only reference semantic tier ──
function validateComponentRefs() {
  const componentDir = join(__dirname, 'src/component');
  const files = readdirSync(componentDir).filter(f => f.endsWith('.json'));

  for (const file of files) {
    const raw = readFileSync(join(componentDir, file), 'utf-8');
    const content = JSON.parse(raw);
    walkAndCheck(content, file, []);
  }

  console.log('✓ ep/validate-component-refs: all component tokens reference semantic tier only');
}

function walkAndCheck(obj, file, path) {
  for (const [key, value] of Object.entries(obj)) {
    if (value === null || typeof value !== 'object') continue;
    const currentPath = [...path, key];

    if ('$value' in value) {
      const ref = value.$value;
      if (typeof ref === 'string' && ref.startsWith('{primitive.')) {
        const tokenPath = currentPath.join('.');
        throw new Error(
          `\n[ep/validate-component-refs] HIERARCHY VIOLATION\n` +
          `  File:  src/component/${file}\n` +
          `  Token: ${tokenPath}\n` +
          `  Value: ${ref}\n` +
          `  Fix:   Add a semantic token for this value, then reference semantic here.\n`
        );
      }
    } else {
      walkAndCheck(value, file, currentPath);
    }
  }
}

// ─── Custom transforms ─────────────────────────────────────────────────────

// ep/locale-normalize: fixes Figma comma-decimal path segments (e.g. "1,5" → "1.5")
StyleDictionary.registerTransform({
  name: 'ep/locale-normalize',
  type: 'name',
  transform: (token) =>
    token.path
      .map(segment => segment.replace(/(\d),(\d)/g, '$1.$2'))
      .join('-'),
});

// ep/cubicBezier-css: converts [x1,y1,x2,y2] to cubic-bezier(x1,y1,x2,y2)
StyleDictionary.registerTransform({
  name: 'ep/cubicBezier-css',
  type: 'value',
  filter: (token) => token.$type === 'cubicBezier',
  transform: (token) => {
    const [x1, y1, x2, y2] = token.$value;
    return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
  },
});

// ep/shadow-css: converts shadow array to box-shadow string
StyleDictionary.registerTransform({
  name: 'ep/shadow-css',
  type: 'value',
  filter: (token) => token.$type === 'shadow',
  transform: (token) => {
    const layers = Array.isArray(token.$value) ? token.$value : [token.$value];
    return layers
      .map(l => `${l.offsetX} ${l.offsetY} ${l.blur} ${l.spread} ${l.color}`)
      .join(', ');
  },
});

// ep/figma-alias-resolve and ep/figma-color-to-hex are stubs —
// activated only when a Figma export file is present (no Figma export on disk yet)
StyleDictionary.registerTransform({
  name: 'ep/figma-alias-resolve',
  type: 'value',
  filter: () => false, // no-op until Figma export is wired
  transform: (token) => token.$value,
});

StyleDictionary.registerTransform({
  name: 'ep/figma-color-to-hex',
  type: 'value',
  filter: () => false, // no-op until Figma export is wired
  transform: (token) => token.$value,
});

// ─── Transform group ───────────────────────────────────────────────────────

StyleDictionary.registerTransformGroup({
  name: 'ep/css',
  transforms: [
    'ep/locale-normalize',
    'ep/cubicBezier-css',
    'ep/shadow-css',
    'attribute/cti',
    'name/kebab',
  ],
});

StyleDictionary.registerTransformGroup({
  name: 'ep/ts',
  transforms: [
    'ep/locale-normalize',
    'ep/cubicBezier-css',
    'ep/shadow-css',
    'attribute/cti',
    'name/camel',
  ],
});

// ─── Shared source globs ───────────────────────────────────────────────────

const primitiveSource = ['src/primitive/**/*.json'];
const componentSource = ['src/component/**/*.json'];

// ─── Build ─────────────────────────────────────────────────────────────────

async function build() {
  // Run validator before anything else — hard fail on violation
  validateComponentRefs();

  // Ensure dist exists
  mkdirSync(join(__dirname, 'dist'), { recursive: true });

  // ── Light theme (default :root) ──────────────────────────────────────────
  const sdLight = new StyleDictionary({
    usesDtcg: true,
    source: [
      ...primitiveSource,
      'src/semantic/color/light.json',
      'src/semantic/elevation.json',
      'src/semantic/radius.json',
      'src/semantic/spacing.json',
      'src/semantic/typography.json',
      'src/semantic/icon.json',
      ...componentSource,
    ],
    platforms: {
      css: {
        transformGroup: 'ep/css',
        prefix: 'ep',
        buildPath: 'dist/',
        files: [
          {
            destination: 'tokens.light.css',
            format: 'css/variables',
            options: {
              selector: ':root',
              outputReferences: false,
            },
          },
        ],
      },
      ts: {
        transformGroup: 'ep/ts',
        prefix: 'ep',
        buildPath: 'dist/',
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6',
          },
          {
            destination: 'tokens.d.ts',
            format: 'typescript/es6-declarations',
          },
        ],
      },
    },
  });

  await sdLight.buildAllPlatforms();

  // ── Dark theme overrides (.dark class + prefers-color-scheme) ────────────
  const sdDark = new StyleDictionary({
    usesDtcg: true,
    source: [
      ...primitiveSource,
      'src/semantic/color/dark.json',
    ],
    platforms: {
      css: {
        transformGroup: 'ep/css',
        prefix: 'ep',
        buildPath: 'dist/',
        files: [
          {
            destination: 'tokens.dark.css',
            format: 'css/variables',
            options: {
              selector: '.dark',
              outputReferences: false,
            },
          },
        ],
      },
    },
  });

  await sdDark.buildAllPlatforms();

  // ── Combine into single tokens.css ───────────────────────────────────────
  const lightCss  = readFileSync(join(__dirname, 'dist/tokens.light.css'), 'utf-8');
  const darkCss   = readFileSync(join(__dirname, 'dist/tokens.dark.css'),  'utf-8');

  const combined =
    `/* EventPipe Design Tokens — generated by Style Dictionary v4 */\n` +
    `/* Do not edit directly. Regenerate with: pnpm --filter @eventpipe/tokens build */\n\n` +
    lightCss +
    `\n/* Dark mode overrides */\n` +
    `@media (prefers-color-scheme: dark) {\n` +
    darkCss.replace(':root', '  :root').replace(/^/gm, '  ').trimStart() +
    `}\n\n` +
    darkCss.replace('.dark {', '.dark, [data-theme="dark"] {');

  writeFileSync(join(__dirname, 'dist/tokens.css'), combined, 'utf-8');

  console.log('✓ dist/tokens.css');
  console.log('✓ dist/tokens.js');
  console.log('✓ dist/tokens.d.ts');
  console.log('\n@eventpipe/tokens build complete.');
}

build().catch(err => {
  console.error(err.message);
  process.exit(1);
});

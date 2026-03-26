/**
 * validate-tokens.js — Post-build token validation.
 *
 * Run automatically after `node style-dictionary.config.js`.
 * Exit code 1 on any violation (fails the build).
 *
 * Check 1 — Dark source structure integrity
 *   Every leaf token path in dark.json must also exist in light.json.
 *   Dark may only override values; it must not define new token structure.
 *
 * Check 2 — Component → semantic reference completeness
 *   Every {semantic.*} reference in a component token must map to a
 *   CSS custom property that exists in the light output.
 *   Catches stale refs after semantic token renames or deletions.
 *
 * Check 3 — Dark output is a strict subset of light output
 *   Every --ep-semantic-* var emitted into tokens.dark.css must also
 *   exist in tokens.light.css. Detects structural drift post-build.
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ─── Guard: dist must exist ───────────────────────────────────────────────────

const REQUIRED = [
  'dist/tokens.light.css',
  'dist/tokens.dark.css',
];

for (const f of REQUIRED) {
  if (!existsSync(join(ROOT, f))) {
    console.error(`\n[ep/validate-tokens] MISSING ARTIFACT: ${f}`);
    console.error('  Run "pnpm --filter @eventpipe/tokens build" first.\n');
    process.exit(1);
  }
}

// ─── Utilities ────────────────────────────────────────────────────────────────

/** Convert camelCase to kebab-case (matches Style Dictionary name/kebab transform). */
function camelToKebab(s) {
  return s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Convert a DTCG reference like {semantic.color.brand.primaryDark}
 * to the CSS custom property name --ep-semantic-color-brand-primary-dark.
 */
function refToCssVar(ref) {
  const path = ref.replace(/^\{|\}$/g, '');
  return '--ep-' + path.split('.').map(camelToKebab).join('-');
}

/** Extract all --ep-semantic-* property names from a CSS string → Set<string>. */
function extractSemanticVarNames(css) {
  const vars = new Set();
  for (const m of css.matchAll(/^\s*(--ep-semantic-[a-z0-9-]+)\s*:/gm)) {
    vars.add(m[1]);
  }
  return vars;
}

/** Collect all leaf token dot-paths from a DTCG JSON tree → Set<string>. */
function collectLeafPaths(obj, prefix = '', paths = new Set()) {
  for (const [key, value] of Object.entries(obj)) {
    if (value === null || typeof value !== 'object') continue;
    const path = prefix ? `${prefix}.${key}` : key;
    if ('$value' in value) {
      paths.add(path);
    } else {
      collectLeafPaths(value, path, paths);
    }
  }
  return paths;
}

/** Collect all {semantic.*} $value refs from a DTCG token tree → Set<string>. */
function collectSemanticRefs(obj, refs = new Set()) {
  for (const value of Object.values(obj)) {
    if (value === null || typeof value !== 'object') continue;
    if ('$value' in value) {
      const v = value.$value;
      if (typeof v === 'string' && v.startsWith('{semantic.')) refs.add(v);
    } else {
      collectSemanticRefs(value, refs);
    }
  }
  return refs;
}

// ─── Load artifacts ───────────────────────────────────────────────────────────

const lightCss = readFileSync(join(ROOT, 'dist/tokens.light.css'), 'utf-8');
const darkCss  = readFileSync(join(ROOT, 'dist/tokens.dark.css'),  'utf-8');

const lightJson = JSON.parse(readFileSync(join(ROOT, 'src/semantic/color/light.json'), 'utf-8'));
const darkJson  = JSON.parse(readFileSync(join(ROOT, 'src/semantic/color/dark.json'),  'utf-8'));

const lightSemanticVars = extractSemanticVarNames(lightCss);
const darkSemanticVars  = extractSemanticVarNames(darkCss);
const lightSourcePaths  = collectLeafPaths(lightJson);
const darkSourcePaths   = collectLeafPaths(darkJson);

// ─── Check 1: Dark source structure integrity ─────────────────────────────────

const check1Errors = [];
for (const path of darkSourcePaths) {
  if (!lightSourcePaths.has(path)) {
    check1Errors.push(path);
  }
}

// ─── Check 2: Component → semantic reference completeness ─────────────────────

const componentDir   = join(ROOT, 'src/component');
const componentFiles = readdirSync(componentDir).filter(f => f.endsWith('.json'));
const check2Errors   = [];
let totalRefsChecked = 0;

for (const file of componentFiles) {
  const content = JSON.parse(readFileSync(join(componentDir, file), 'utf-8'));
  const refs = collectSemanticRefs(content);
  totalRefsChecked += refs.size;
  for (const ref of refs) {
    const cssVar = refToCssVar(ref);
    if (!lightSemanticVars.has(cssVar)) {
      check2Errors.push({ file, ref, cssVar });
    }
  }
}

// ─── Check 3: Dark output subset ─────────────────────────────────────────────

const check3Errors = [];
for (const v of darkSemanticVars) {
  if (!lightSemanticVars.has(v)) {
    check3Errors.push(v);
  }
}

// ─── Report ───────────────────────────────────────────────────────────────────

let failed = false;

if (check1Errors.length) {
  failed = true;
  console.error(
    `\n[ep/validate-tokens] CHECK 1 FAILED — dark.json introduces ${check1Errors.length} token(s) not in light.json`
  );
  console.error('  Rule: dark tokens may only override values; they must not add new structure.');
  console.error('  Fix:  Add the missing token(s) to light.json first, then dark.json may override.\n');
  for (const p of check1Errors) {
    console.error(`    + ${p}  (in dark.json, missing from light.json)`);
  }
}

if (check2Errors.length) {
  failed = true;
  console.error(
    `\n[ep/validate-tokens] CHECK 2 FAILED — ${check2Errors.length} component token ref(s) point to undefined semantic tokens`
  );
  console.error('  Rule: every {semantic.*} reference must resolve to a var in the light CSS output.');
  console.error('  Fix:  Add the missing semantic token to light.json, or correct the reference.\n');
  for (const { file, ref, cssVar } of check2Errors) {
    console.error(`    src/component/${file}`);
    console.error(`      ref:      ${ref}`);
    console.error(`      expected: ${cssVar}  (not found in dist/tokens.light.css)\n`);
  }
}

if (check3Errors.length) {
  failed = true;
  console.error(
    `\n[ep/validate-tokens] CHECK 3 FAILED — dark output contains ${check3Errors.length} var(s) not in light output`
  );
  console.error('  Rule: dark CSS must only override existing semantic vars, not emit new ones.');
  console.error('  Fix:  Add the missing var(s) to light.json, or remove from dark.json.\n');
  for (const v of check3Errors) {
    console.error(`    + ${v}  (in tokens.dark.css, missing from tokens.light.css)`);
  }
}

if (failed) {
  console.error('\n[ep/validate-tokens] Build failed. Fix the violations above and rebuild.\n');
  process.exit(1);
}

console.log('✓ ep/validate-tokens: all 3 checks passed');
console.log(`  Light semantic vars : ${lightSemanticVars.size}`);
console.log(`  Dark semantic vars  : ${darkSemanticVars.size} overridden, ${lightSemanticVars.size - darkSemanticVars.size} inherited`);
console.log(`  Component refs      : ${totalRefsChecked} refs across ${componentFiles.length} file(s)`);

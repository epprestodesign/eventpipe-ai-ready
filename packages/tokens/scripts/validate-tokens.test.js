/**
 * validate-tokens.test.js
 *
 * Tests for the post-build token validator.
 * Uses Node.js built-in test runner (node:test) — no extra dependencies.
 *
 * Run: pnpm --filter @eventpipe/tokens test
 *
 * What is tested:
 *   CHECK 1 — dark.json may only override existing structural paths,
 *              never introduce new ones.
 *   CHECK 2 — every {semantic.*} ref in a component token must resolve
 *              to a var that exists in the light CSS output.
 *   CHECK 3 — every --ep-semantic-* var in dark CSS must exist in light CSS.
 *
 * Tests that mutate disk files always restore the original in a finally block.
 */

import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT       = join(__dirname, '..');
const DARK_JSON  = join(ROOT, 'src/semantic/color/dark.json');
const COMP_DIR   = join(ROOT, 'src/component');
const VALIDATOR  = join(ROOT, 'scripts/validate-tokens.js');

// ─── Guard: dist must be built before tests run ───────────────────────────────

before(() => {
  const missing = ['dist/tokens.light.css', 'dist/tokens.dark.css'].filter(
    f => !existsSync(join(ROOT, f))
  );
  if (missing.length) {
    throw new Error(
      `Missing build artifacts: ${missing.join(', ')}.\n` +
      `Run "pnpm --filter @eventpipe/tokens build" before running tests.`
    );
  }
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Run the validator script as a subprocess.
 * Returns { code, stdout, stderr }.
 */
function runValidator() {
  try {
    const stdout = execFileSync('node', [VALIDATOR], { cwd: ROOT, encoding: 'utf-8' });
    return { code: 0, stdout, stderr: '' };
  } catch (err) {
    return {
      code: err.status ?? 1,
      stdout: err.stdout ?? '',
      stderr: err.stderr ?? '',
    };
  }
}

/**
 * Patch a source JSON file, run fn(), then unconditionally restore it.
 * Never leaves disk in a modified state.
 */
function withPatchedFile(filePath, patch, fn) {
  const original = readFileSync(filePath, 'utf-8');
  try {
    const obj = JSON.parse(original);
    patch(obj);
    writeFileSync(filePath, JSON.stringify(obj, null, 2));
    return fn();
  } finally {
    writeFileSync(filePath, original);
  }
}

// ─── Baseline: clean state passes ─────────────────────────────────────────────

describe('baseline', () => {
  test('validator passes with unmodified token files', () => {
    const result = runValidator();
    assert.equal(
      result.code, 0,
      `Expected exit 0 (clean) but got ${result.code}:\n${result.stderr}`
    );
    assert.match(result.stdout, /all 3 checks passed/);
  });
});

// ─── Check 1: dark.json structural integrity ──────────────────────────────────

describe('CHECK 1 — dark.json must not introduce new structural keys', () => {
  test('new top-level key in dark.color.brand fails build', () => {
    const result = withPatchedFile(DARK_JSON, (dark) => {
      dark.semantic.color.brand.newDarkOnlyToken = {
        '$type': 'color',
        '$value': '#ff0000',
      };
    }, runValidator);

    assert.equal(result.code, 1, 'Expected build failure on new structural key');
    assert.match(result.stderr, /CHECK 1 FAILED/);
    assert.match(result.stderr, /newDarkOnlyToken/);
    assert.match(result.stderr, /missing from light\.json/);
  });

  test('new nested group in dark fails build', () => {
    const result = withPatchedFile(DARK_JSON, (dark) => {
      dark.semantic.color.elevation = {
        surface1: { '$type': 'color', '$value': '#1a1a1a' },
      };
    }, runValidator);

    assert.equal(result.code, 1);
    assert.match(result.stderr, /CHECK 1 FAILED/);
    assert.match(result.stderr, /semantic\.color\.elevation/);
  });

  test('overriding an existing key in dark passes', () => {
    // brand.primary already exists in light — dark may override it
    const result = withPatchedFile(DARK_JSON, (dark) => {
      dark.semantic.color.brand.primary.$value = '{primitive.color.blue.200}';
    }, runValidator);

    assert.equal(result.code, 0, `Check 1 should pass for legitimate override:\n${result.stderr}`);
  });
});

// ─── Check 2: component → semantic ref completeness ───────────────────────────

describe('CHECK 2 — component tokens must not reference undefined semantic tokens', () => {
  test('stale {semantic.*} ref in button.json fails build', () => {
    const buttonJson = join(COMP_DIR, 'button.json');

    const result = withPatchedFile(buttonJson, (button) => {
      // Inject a ref to a semantic token that doesn't exist
      button.component.button.contained.primary.background.$value =
        '{semantic.color.brand.doesNotExist}';
    }, runValidator);

    assert.equal(result.code, 1, 'Expected failure on stale semantic ref');
    assert.match(result.stderr, /CHECK 2 FAILED/);
    assert.match(result.stderr, /doesNotExist/);
  });

  test('valid {semantic.*} refs all resolve — Check 2 passes', () => {
    // Clean state already validated in baseline test; confirmed explicitly here.
    const result = runValidator();
    assert.equal(result.code, 0);
    assert.match(result.stdout, /Component refs/);
  });
});

// ─── Check 3: dark CSS output is a subset of light CSS output ─────────────────

describe('CHECK 3 — dark CSS output must not introduce new semantic vars', () => {
  test('dark CSS with a new --ep-semantic-* var fails validation', () => {
    const darkCssPath = join(ROOT, 'dist/tokens.dark.css');

    const originalCss = readFileSync(darkCssPath, 'utf-8');
    try {
      // Inject a var that doesn't exist in light
      const patched = originalCss.replace(
        /^\.dark \{/m,
        '.dark {\n  --ep-semantic-color-dark-only-violation: #ff0000;'
      );
      writeFileSync(darkCssPath, patched);

      const result = runValidator();
      assert.equal(result.code, 1, 'Expected failure when dark CSS has vars not in light');
      assert.match(result.stderr, /CHECK 3 FAILED/);
      assert.match(result.stderr, /dark-only-violation/);
    } finally {
      writeFileSync(darkCssPath, originalCss);
    }
  });
});

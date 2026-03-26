/**
 * diff-tokens.js — Semantic token diff: light vs dark.
 *
 * Usage: pnpm --filter @eventpipe/tokens token:diff
 *
 * Output sections:
 *   OVERRIDDEN  — semantic tokens that dark explicitly overrides
 *   LIGHT ONLY  — semantic tokens with no dark override (dark inherits light value via CSS cascade)
 *   DARK ONLY   — semantic tokens in dark but not light (violations — should be zero)
 *
 * Exit code 1 if any DARK ONLY violations are found.
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ─── Guard ────────────────────────────────────────────────────────────────────

for (const f of ['dist/tokens.light.css', 'dist/tokens.dark.css']) {
  if (!existsSync(join(ROOT, f))) {
    console.error(`Missing: ${f}. Run "pnpm --filter @eventpipe/tokens build" first.`);
    process.exit(1);
  }
}

// ─── Parse CSS → Map<varName, value> ─────────────────────────────────────────

function extractVarMap(css) {
  const map = new Map();
  for (const m of css.matchAll(/^\s*(--ep-semantic-[a-z0-9-]+)\s*:\s*(.+?)\s*;/gm)) {
    map.set(m[1], m[2].trim());
  }
  return map;
}

const lightMap = extractVarMap(readFileSync(join(ROOT, 'dist/tokens.light.css'), 'utf-8'));
const darkMap  = extractVarMap(readFileSync(join(ROOT, 'dist/tokens.dark.css'),  'utf-8'));

// ─── Classify ─────────────────────────────────────────────────────────────────

const overridden = []; // in both, dark value differs from light
const sameValue  = []; // in both, same value (dark overrides with identical value — possible but unusual)
const lightOnly  = []; // in light, not overridden by dark
const darkOnly   = []; // in dark, not in light (violations)

for (const [key, lightVal] of lightMap) {
  if (darkMap.has(key)) {
    const darkVal = darkMap.get(key);
    if (darkVal !== lightVal) {
      overridden.push({ key, light: lightVal, dark: darkVal });
    } else {
      sameValue.push({ key, value: lightVal });
    }
  } else {
    lightOnly.push({ key, value: lightVal });
  }
}

for (const [key, darkVal] of darkMap) {
  if (!lightMap.has(key)) {
    darkOnly.push({ key, value: darkVal });
  }
}

// ─── Format helpers ───────────────────────────────────────────────────────────

const TERM_WIDTH = process.stdout.columns || 120;

function pad(s, n) {
  return String(s).padEnd(n);
}

function hr(char = '─', n = Math.min(TERM_WIDTH, 110)) {
  return char.repeat(n);
}

function printTable(rows, headers, widths) {
  const head = headers.map((h, i) => pad(h, widths[i])).join('  ');
  console.log(pad('', widths[0]) + '  ' + headers.slice(1).map((h, i) => pad(h, widths[i + 1])).join('  '));
  console.log(hr('─', head.length));
  for (const row of rows) {
    console.log(row.map((cell, i) => pad(cell, widths[i])).join('  '));
  }
}

// ─── Output ───────────────────────────────────────────────────────────────────

console.log(`\n${hr('═')}`);
console.log('  EventPipe Token Diff — light vs dark (semantic layer only)');
console.log(`${hr('═')}`);

// Section 1: Overridden
console.log(`\n▸ OVERRIDDEN (${overridden.length} tokens dark explicitly changes)\n`);
if (overridden.length === 0) {
  console.log('  (none)\n');
} else {
  const varW   = Math.max(...overridden.map(r => r.key.length),   5);
  const lightW = Math.max(...overridden.map(r => r.light.length), 5);
  const darkW  = Math.max(...overridden.map(r => r.dark.length),  4);
  printTable(
    overridden.map(r => [r.key, r.light, r.dark]),
    ['TOKEN', 'LIGHT', 'DARK'],
    [varW, lightW, darkW],
  );
  console.log('');
}

// Section 2: Same value overrides (unusual — worth flagging)
if (sameValue.length > 0) {
  console.log(`▸ SAME VALUE IN DARK (${sameValue.length} — redundant override)\n`);
  for (const { key, value } of sameValue) {
    console.log(`  ~ ${key}: ${value}`);
  }
  console.log('');
}

// Section 3: Dark-only violations
if (darkOnly.length > 0) {
  console.log(`▸ DARK ONLY — VIOLATION (${darkOnly.length} — must be zero)\n`);
  console.log('  These vars appear in dark output but have no corresponding light token.');
  console.log('  Fix: add them to light.json first, or remove from dark.json.\n');
  for (const { key, value } of darkOnly) {
    console.log(`  ✗ ${key}: ${value}`);
  }
  console.log('');
}

// Section 4: Light-only summary
console.log(`▸ LIGHT ONLY — inherited (${lightOnly.length} tokens dark does not override)\n`);
if (lightOnly.length <= 20) {
  for (const { key, value } of lightOnly) {
    console.log(`  · ${key}: ${value}`);
  }
} else {
  // Show first 10, summarize the rest
  for (const { key, value } of lightOnly.slice(0, 10)) {
    console.log(`  · ${key}: ${value}`);
  }
  console.log(`  … and ${lightOnly.length - 10} more (pass --verbose to see all)`);
}
console.log('');

// Summary line
console.log(hr());
const status = darkOnly.length > 0 ? '✗ VIOLATIONS FOUND' : '✓ clean';
console.log(
  `  Summary: ${overridden.length} overridden · ` +
  `${lightOnly.length} inherited · ` +
  `${sameValue.length} redundant · ` +
  `${darkOnly.length} violations   ${status}`
);
console.log(`${hr()}\n`);

if (darkOnly.length > 0) process.exit(1);

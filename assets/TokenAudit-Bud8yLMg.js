import{j as e}from"./jsx-runtime-BT65X5dW.js";import{useMDXComponents as t}from"./index-Cd31CJfN.js";import{M as r}from"./index-DF1I-CVt.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BpT0z86u.js";import"./index-Bq2HnrkM.js";import"./index-jimAspun.js";import"./index-DrFu-skq.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Tools/Token audit"}),`
`,e.jsxs("div",{style:{maxWidth:860,fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx(n.h1,{id:"token-audit",children:"Token audit"}),e.jsx(n.p,{children:"Reference for token counts, coverage, and the validation pipeline. Use this page to verify that token infrastructure is healthy before shipping components."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"token-counts-by-layer",children:"Token counts by layer"}),e.jsxs(n.p,{children:[`| Layer | File count | Token count (approx) |
|---|---|---|
| Primitive | ~12 files | ~180 tokens |
| Semantic | 2 files (light + dark) | ~120 tokens |
| Component | 28 files | ~420 tokens |
| `,e.jsx(n.strong,{children:"Total"})," | | ",e.jsx(n.strong,{children:"~720 tokens"})," |"]}),e.jsx(n.p,{children:"Component token counts grow roughly 10–20 tokens per component. Simple components (Link, Badge) have 6–10; complex components (Button, Alert) have 20–30."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"validation-pipeline",children:"Validation pipeline"}),e.jsx(n.p,{children:"Three validators run automatically after every token build:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm --filter @eventpipe/tokens build
# ✓ ep/validate-tokens: all 3 checks passed
`})}),e.jsxs(n.p,{children:[`| Check | What it validates |
|---|---|
| `,e.jsx(n.strong,{children:"Check 1"})," | ",e.jsx(n.code,{children:"dark.json"})," introduces no new structural keys absent from ",e.jsx(n.code,{children:"light.json"}),` — ensures dark is always a strict subset |
| `,e.jsx(n.strong,{children:"Check 2"})," | All ",e.jsx(n.code,{children:"{semantic.*}"})," references in component tokens resolve to vars in ",e.jsx(n.code,{children:"dist/tokens.light.css"}),` — no dangling refs |
| `,e.jsx(n.strong,{children:"Check 3"})," | ",e.jsx(n.code,{children:"dist/tokens.dark.css"})," contains no vars absent from ",e.jsx(n.code,{children:"dist/tokens.light.css"})," — dark is a complete superset |"]}),e.jsx(n.p,{children:"If any check fails, the build exits non-zero and the CI gate blocks."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"css-var-naming-convention",children:"CSS var naming convention"}),e.jsx(n.p,{children:"Token JSON paths are deterministically converted to CSS custom properties:"}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`component.{name}.{variant}.{color}.backgroundHover
→ --ep-component-{name}-{variant}-{color}-background-hover
`})}),e.jsx(n.p,{children:"Rules:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"camelCase"})," → ",e.jsx(n.code,{children:"kebab-case"})]}),`
`,e.jsx(n.li,{children:"Dots → hyphens"}),`
`,e.jsxs(n.li,{children:["Always prefixed: ",e.jsx(n.code,{children:"--ep-component-"}),", ",e.jsx(n.code,{children:"--ep-semantic-"}),", ",e.jsx(n.code,{children:"--ep-primitive-"})]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"per-component-token-breakdown",children:"Per-component token breakdown"}),e.jsxs(n.p,{children:[`| Component | Token count | Token file |
|---|---|---|
| Button | 30 | `,e.jsx(n.code,{children:"component/button.json"}),` |
| TextField | 18 | `,e.jsx(n.code,{children:"component/textfield.json"}),` |
| Select | 16 | `,e.jsx(n.code,{children:"component/select.json"}),` |
| Autocomplete | 14 | `,e.jsx(n.code,{children:"component/autocomplete.json"}),` |
| Alert | 24 | `,e.jsx(n.code,{children:"component/alert.json"}),` |
| Snackbar | 10 | `,e.jsx(n.code,{children:"component/snackbar.json"}),` |
| CircularProgress | 6 | `,e.jsx(n.code,{children:"component/circular-progress.json"}),` |
| LinearProgress | 6 | `,e.jsx(n.code,{children:"component/linear-progress.json"}),` |
| Skeleton | 4 | `,e.jsx(n.code,{children:"component/skeleton.json"}),` |
| Backdrop | 4 | `,e.jsx(n.code,{children:"component/backdrop.json"}),` |
| Dialog | 12 | `,e.jsx(n.code,{children:"component/dialog.json"}),` |
| Card | 10 | `,e.jsx(n.code,{children:"component/card.json"}),` |
| List / ListItem | 14 | `,e.jsx(n.code,{children:"component/list.json"}),` |
| Chip | 18 | `,e.jsx(n.code,{children:"component/chip.json"}),` |
| Badge | 10 | `,e.jsx(n.code,{children:"component/badge.json"}),` |
| Checkbox | 12 | `,e.jsx(n.code,{children:"component/checkbox.json"}),` |
| Radio | 10 | `,e.jsx(n.code,{children:"component/radio.json"}),` |
| Switch | 14 | `,e.jsx(n.code,{children:"component/switch.json"}),` |
| Menu / MenuItem | 14 | `,e.jsx(n.code,{children:"component/menu.json"}),` |
| Tabs | 19 | `,e.jsx(n.code,{children:"component/tabs.json"}),` |
| Breadcrumbs | 9 | `,e.jsx(n.code,{children:"component/breadcrumbs.json"}),` |
| Link | 8 | `,e.jsx(n.code,{children:"component/link.json"}),` |
| Drawer | 9 | `,e.jsx(n.code,{children:"component/drawer.json"}),` |
| Popover | 5 | `,e.jsx(n.code,{children:"component/popover.json"})," |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"how-to-audit-a-components-token-coverage",children:"How to audit a component's token coverage"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# 1. Find all CSS vars the component reads in source
grep "ep-component-button" packages/ui/src/Button/Button.tsx

# 2. Find all CSS vars the build produces
grep "ep-component-button" packages/tokens/dist/tokens.light.css

# 3. Diff — every var in (1) must appear in (2)
# (No vars in (1) should be absent from (2))
`})}),e.jsxs(n.p,{children:["Every component story also contains a ",e.jsx(n.strong,{children:"Token Audit (DevTools)"})," story that renders a live table of all vars the component reads, with their resolved CSS values."]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"token-layer-isolation-rule",children:"Token layer isolation rule"}),e.jsxs(n.p,{children:["Component implementations must only read ",e.jsx(n.code,{children:"--ep-component-*"})," vars. Reading ",e.jsx(n.code,{children:"--ep-semantic-*"})," or ",e.jsx(n.code,{children:"--ep-primitive-*"})," directly is a deviation and must be registered in the deviations register."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Verify no direct semantic/primitive reads in a component
grep "ep-semantic\\|ep-primitive" packages/ui/src/Button/Button.tsx
# Expected: no output
`})}),e.jsxs(n.p,{children:["Currently registered exceptions: ",e.jsx(n.strong,{children:"1"})," (Drawer close button — see Deviations register)."]})]})]})}function x(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{x as default};

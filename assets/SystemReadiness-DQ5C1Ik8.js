import{j as e}from"./jsx-runtime-BT65X5dW.js";import{useMDXComponents as r}from"./index-Cd31CJfN.js";import{M as i}from"./index-DF1I-CVt.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BpT0z86u.js";import"./index-Bq2HnrkM.js";import"./index-jimAspun.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",div:"div",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Tools/System readiness"}),`
`,e.jsxs("div",{style:{maxWidth:860,fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx(n.h1,{id:"system-readiness",children:"System readiness"}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"readiness-summary",children:"Readiness summary"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:16,margin:"24px 0"},children:[{label:"Components shipped",value:"43",color:"#0057FF"},{label:"Token coverage",value:"100%",color:"#065F46"},{label:"QA gates passing",value:"6 / 6",color:"#065F46"},{label:"Accessibility",value:"WCAG 2.1 AA",color:"#065F46"},{label:"Deviations registered",value:"21",color:"#92400E"},{label:"Wave 3 remaining",value:"3C only",color:"#6B7280"}].map(s=>e.jsxs(n.div,{style:{background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:8,padding:"20px"},children:[e.jsx(n.div,{style:{fontSize:26,fontWeight:700,color:s.color},children:s.value}),e.jsx(n.div,{style:{fontSize:13,color:"#6B7280",marginTop:6},children:s.label})]},String(s.label)))}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"token-system-health",children:"Token system health"}),e.jsxs(n.p,{children:[`| Layer | Files | Status |
|---|---|---|
| Primitive tokens | `,e.jsx(n.code,{children:"packages/tokens/src/primitive/"}),` | ✓ Stable |
| Semantic tokens (light) | `,e.jsx(n.code,{children:"packages/tokens/src/semantic/"}),` | ✓ Stable |
| Semantic elevation | `,e.jsx(n.code,{children:"packages/tokens/src/semantic/elevation.json"}),` | ✓ 6 levels: surface / raised / overlay / panel / modal / tooltip |
| Semantic tokens (dark) | `,e.jsx(n.code,{children:"packages/tokens/src/semantic/dark.json"}),` | ✓ Stable |
| Component tokens | `,e.jsx(n.code,{children:"packages/tokens/src/component/"}),` | ✓ 29 components covered |
| CSS output | `,e.jsx(n.code,{children:"packages/tokens/dist/tokens.light.css"}),` | ✓ Auto-generated |
| Token tests | `,e.jsx(n.code,{children:"packages/tokens/src/validate/"})," | ✓ 7/7 passing |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"architecture-contracts",children:"Architecture contracts"}),e.jsxs(n.p,{children:[`| Contract | Document | Status |
|---|---|---|
| Component build workflow | `,e.jsx(n.code,{children:"docs/contracts/component-build-workflow.md"}),` | ✓ Current |
| Overlay pattern | `,e.jsx(n.code,{children:"docs/contracts/overlay-pattern.md"}),` | ✓ Current |
| Product system rules | `,e.jsx(n.code,{children:"docs/contracts/product-system-rules.md"}),` | ✓ 11 rules + 6 patterns + audit |
| Shared props vocabulary | `,e.jsx(n.code,{children:"docs/contracts/shared-props.md"}),` | ✓ Current |
| Icon usage | `,e.jsx(n.code,{children:"docs/contracts/icon-usage.md"}),` | ✓ Current |
| CI gates | `,e.jsx(n.code,{children:"docs/contracts/ci-gates.md"})," | ✓ 6 gates defined |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"known-limitations",children:"Known limitations"}),e.jsx(n.p,{children:`| Area | Detail |
|---|---|
| Dark mode | Token infrastructure complete (including elevation + distinct info color). Full dark theme pass is Wave 5 scope. |
| RTL | Not supported. MUI provides utilities; adaptation is post-Wave-3. |
| Animation | Full motion token system not yet defined. |
| Wave 3B | FilterBar + FilterChip + useDebounce complete. |
| Wave 3C | DatePicker pending. |
| Wave 4A | TransferList complete. |
| Wave 4B | Stepper complete. |
| Wave 4C | DatePicker complete. Timeline, ConfirmDialog pending. |
| DataTable advanced | Column resize, virtualization, drag-and-drop deferred to Wave 5 (DataGrid). |`}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"full-health-check",children:"Full health check"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm --filter @eventpipe/tokens build
pnpm --filter @eventpipe/tokens test
pnpm --filter @eventpipe/ui typecheck
pnpm --filter @eventpipe/ui build
pnpm --filter storybook typecheck
pnpm --filter storybook build
`})})]})]})}function v(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{v as default};

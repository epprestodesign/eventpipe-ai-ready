import{j as e}from"./jsx-runtime-BT65X5dW.js";import{useMDXComponents as o}from"./index-Cd31CJfN.js";import{M as r}from"./index-DF1I-CVt.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BpT0z86u.js";import"./index-Bq2HnrkM.js";import"./index-jimAspun.js";import"./index-DrFu-skq.js";function i(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Tools/Contributing"}),`
`,e.jsxs("div",{style:{maxWidth:760,fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx(n.h1,{id:"contributing",children:"Contributing"}),e.jsx(n.p,{children:"How to add a new component to the EventPipe design system."}),e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Full workflow: ",e.jsx(n.code,{children:"docs/contracts/component-build-workflow.md"})]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"overview",children:"Overview"}),e.jsx(n.p,{children:"Every component follows the same build sequence. The order is strict — each step depends on the previous one passing."}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`Spec → Tokens → UI → Stories → QA
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"step-1-write-the-spec",children:"Step 1: Write the spec"}),e.jsxs(n.p,{children:["Create ",e.jsx(n.code,{children:"docs/specs/components/{component}.md"}),"."]}),e.jsx(n.p,{children:"Minimum content:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Props table (name, type, default, description)"}),`
`,e.jsx(n.li,{children:"States (default, hover, focus, disabled, loading if applicable)"}),`
`,e.jsx(n.li,{children:"Accessibility requirements (role, keyboard behavior, ARIA)"}),`
`,e.jsx(n.li,{children:"Sizing category (EpSize5 / EpSize3 / fixed / none)"}),`
`,e.jsx(n.li,{children:"MUI base component (or note if fully custom)"}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"step-2-create-the-token-file",children:"Step 2: Create the token file"}),e.jsxs(n.p,{children:["Create ",e.jsx(n.code,{children:"packages/tokens/src/component/{component}.json"}),"."]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Token structure rules:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Only reference ",e.jsx(n.code,{children:"{semantic.*}"})," — never ",e.jsx(n.code,{children:"{primitive.*}"})]}),`
`,e.jsxs(n.li,{children:["Always include a ",e.jsx(n.code,{children:"focusRing"})," block for interactive components"]}),`
`,e.jsxs(n.li,{children:["Always include a ",e.jsx(n.code,{children:"disabled"})," block for components with a disabled state"]}),`
`,e.jsxs(n.li,{children:["No hardcoded hex, px, or rgba values (exception: ",e.jsx(n.code,{children:"transparent"}),", ",e.jsx(n.code,{children:"inherit"}),", ",e.jsx(n.code,{children:"0"}),")"]}),`
`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "component": {
    "mycomponent": {
      "background": { "$type": "color", "$value": "{semantic.color.surface.default}" },
      "focusRing": {
        "color":  { "$type": "color",     "$value": "{semantic.color.brand.primary}" },
        "width":  { "$type": "dimension", "$value": "2px" },
        "offset": { "$type": "dimension", "$value": "2px" }
      }
    }
  }
}
`})}),e.jsx(n.p,{children:"Build and verify:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm --filter @eventpipe/tokens build
# ✓ ep/validate-tokens: all 3 checks passed
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"step-3-implement-the-component",children:"Step 3: Implement the component"}),e.jsx(n.p,{children:"Create four files:"}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`packages/ui/src/MyComponent/
  MyComponent.tsx          # Implementation
  MyComponent.types.ts     # Public interface (no logic)
  index.ts                 # Barrel — re-exports only
apps/storybook/stories/
  MyComponent.stories.tsx  # Storybook coverage
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Implementation rules:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Define ",e.jsx(n.code,{children:"const TOKEN = { ... } as const"})," at top — one entry per CSS var"]}),`
`,e.jsxs(n.li,{children:["No ",e.jsx(n.code,{children:"var(--ep-semantic-*)"})," or ",e.jsx(n.code,{children:"var(--ep-primitive-*)"})," in UI code"]}),`
`,e.jsxs(n.li,{children:["No hardcoded hex, rgba, or design values outside ",e.jsx(n.code,{children:"TOKEN"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"shouldForwardProp"})," blocks all ",e.jsx(n.code,{children:"ep"}),"-prefixed internal props"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"forwardRef"})," to the root DOM element"]}),`
`,e.jsx(n.li,{children:"Framework resets commented with what MUI default they override"}),`
`]}),e.jsxs(n.p,{children:["Add exports to ",e.jsx(n.code,{children:"packages/ui/src/index.ts"}),":"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './MyComponent';
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"step-4-write-stories",children:"Step 4: Write stories"}),e.jsx(n.p,{children:"Minimum required stories:"}),e.jsxs(n.p,{children:[`| Story | Required? |
|---|---|
| `,e.jsx(n.code,{children:"Default"}),` | Always |
| `,e.jsx(n.code,{children:"Variants"}),` | If has variants |
| `,e.jsx(n.code,{children:"Sizes"}),` | If has size prop |
| `,e.jsx(n.code,{children:"Disabled"}),` | If has disabled state |
| `,e.jsx(n.code,{children:"Accessibility"}),` | Always |
| `,e.jsx(n.code,{children:"Token Audit (DevTools)"})," | Always |"]}),e.jsx(n.p,{children:"Story conventions:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"satisfies Meta<typeof MyComponent>"})," (not ",e.jsx(n.code,{children:"as Meta<...>"}),")"]}),`
`,e.jsxs(n.li,{children:["Wire events with ",e.jsx(n.code,{children:"{ action: 'event-name' }"})," in argTypes"]}),`
`,e.jsxs(n.li,{children:["No ",e.jsx(n.code,{children:"@mui/icons-material"})," imports in story files"]}),`
`,e.jsx(n.li,{children:"No inline SVG icons"}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"step-5-qa-pipeline",children:"Step 5: QA pipeline"}),e.jsx(n.p,{children:"Run in order — each must pass before running the next:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm --filter @eventpipe/tokens build     # Token validator passes (3/3)
pnpm --filter @eventpipe/ui typecheck     # tsc --noEmit, exit 0
pnpm --filter @eventpipe/ui build         # ESM + CJS + DTS all succeed
pnpm --filter storybook typecheck         # exit 0
pnpm --filter storybook build             # static build succeeds
pnpm --filter @eventpipe/tokens test      # 7/7 token validation tests pass
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"step-6-register-deviations",children:"Step 6: Register deviations"}),e.jsx(n.p,{children:"If anything in your implementation deviates from this workflow:"}),e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Add a code comment explaining the deviation inline"}),`
`,e.jsxs(n.li,{children:["Add an entry to ",e.jsx(n.code,{children:"docs/contracts/component-build-workflow.md"})," — Deviations register"]}),`
`,e.jsxs(n.li,{children:["Update the ",e.jsx(n.strong,{children:"Deviations register"})," page in Storybook"]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"naming-conventions",children:"Naming conventions"}),e.jsxs(n.p,{children:[`| Item | Convention | Example |
|---|---|---|
| Component name | PascalCase | `,e.jsx(n.code,{children:"MyComponent"}),` |
| Token file | kebab-case | `,e.jsx(n.code,{children:"my-component.json"}),` |
| CSS var prefix | `,e.jsx(n.code,{children:"--ep-component-{name}-"})," | ",e.jsx(n.code,{children:"--ep-component-my-component-background"}),` |
| Internal styled props | `,e.jsx(n.code,{children:"ep"})," prefix | ",e.jsx(n.code,{children:"epVariant"}),", ",e.jsx(n.code,{children:"epSize"}),` |
| Story title | `,e.jsx(n.code,{children:"Components/{Category}/MyComponent"})," | ",e.jsx(n.code,{children:"Components/Inputs/MyComponent"})," |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"category-placement",children:"Category placement"}),e.jsxs(n.p,{children:[`| Category | Use when |
|---|---|
| `,e.jsx(n.code,{children:"Components/Inputs"}),` | Text fields, selects, autocomplete, date pickers |
| `,e.jsx(n.code,{children:"Components/Selection"}),` | Checkbox, radio, switch |
| `,e.jsx(n.code,{children:"Components/Feedback"}),` | Alerts, snackbars, progress, loading |
| `,e.jsx(n.code,{children:"Components/Navigation"}),` | Tabs, breadcrumbs, pagination, links |
| `,e.jsx(n.code,{children:"Components/Surfaces"}),` | Cards, lists, chips, badges |
| `,e.jsx(n.code,{children:"Components/Overlays"})," | Dialogs, drawers, menus, popovers |"]})]})]})}function m(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};

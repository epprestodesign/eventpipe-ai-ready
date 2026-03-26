import{j as e}from"./jsx-runtime-BT65X5dW.js";import{useMDXComponents as s}from"./index-Cd31CJfN.js";import{M as a}from"./index-DF1I-CVt.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BpT0z86u.js";import"./index-Bq2HnrkM.js";import"./index-jimAspun.js";import"./index-DrFu-skq.js";function r(o){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Patterns/Overlay pattern"}),`
`,e.jsxs("div",{style:{maxWidth:760,fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx(n.h1,{id:"overlay-pattern",children:"Overlay pattern"}),e.jsx(n.p,{children:"Canonical rules for components that render in a MUI Portal above page content. Applies to Dialog, Drawer, Popover, Menu, Snackbar, Backdrop, and Tooltip."}),e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Full contract: ",e.jsx(n.code,{children:"docs/contracts/overlay-pattern.md"})," in the repository."]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"the-paper_sx-problem",children:"The PAPER_SX problem"}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"styled()"})," ancestor CSS selectors ",e.jsx(n.strong,{children:"do not reach portal content"}),". When a component renders its Paper surface in a Portal, the styled root element is not an ancestor of the paper element in the DOM."]}),e.jsxs(n.p,{children:["CSS custom properties defined on ",e.jsx(n.code,{children:":root"})," ",e.jsx(n.strong,{children:"are accessible everywhere"}),", including inside portals, because they propagate through the global cascade rather than the DOM tree."]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"solution-paper_sx-pattern",children:"Solution: PAPER_SX pattern"}),e.jsx(n.p,{children:"For every component whose Paper surface renders in a Portal:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Module scope — stable reference, not inline in JSX
const PAPER_SX = {
  backgroundColor: TOKEN.background(),   // var(--ep-component-dialog-background)
  borderRadius:    TOKEN.borderRadius(),  // var(--ep-component-dialog-border-radius)
  boxShadow:       TOKEN.shadow(),        // var(--ep-component-dialog-shadow)
} as const;

// In JSX:
<MuiDialog PaperProps={{ sx: PAPER_SX as any }}>
`})}),e.jsxs(n.p,{children:[`| MUI component | Surface prop |
|---|---|
| `,e.jsx(n.code,{children:"MuiDialog"})," | ",e.jsx(n.code,{children:"PaperProps.sx"}),` |
| `,e.jsx(n.code,{children:"MuiDrawer"})," | ",e.jsx(n.code,{children:"PaperProps.sx"}),` |
| `,e.jsx(n.code,{children:"MuiMenu"})," | ",e.jsx(n.code,{children:"PaperProps.sx"}),` |
| `,e.jsx(n.code,{children:"MuiPopover"})," | ",e.jsx(n.code,{children:"PaperProps.sx"}),` |
| `,e.jsx(n.code,{children:"MuiTooltip"})," | ",e.jsx(n.code,{children:"componentsProps.tooltip.sx"}),` |
| `,e.jsx(n.code,{children:"MuiBackdrop"})," | ",e.jsx(n.code,{children:"styled()"})," directly — Backdrop ",e.jsx(n.strong,{children:"is"})," the portal element |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"overlay-component-decision-table",children:"Overlay component decision table"}),e.jsxs(n.p,{children:[`| Component | Backdrop | Focus | Escape | Click-away | Auto-hide |
|---|---|---|---|---|---|
| Tooltip | ❌ | None | ❌ | ❌ | ❌ |
| Menu | ❌ | List focus | ✅ MUI | ✅ MUI | ❌ |
| Backdrop | IS backdrop | None | ❌ | Via `,e.jsx(n.code,{children:"onClick"}),` | ❌ |
| Dialog | Built-in | `,e.jsx(n.strong,{children:"Trap"}),` | ✅ MUI | ✅ MUI | ❌ |
| Drawer (temporary) | Built-in | `,e.jsx(n.strong,{children:"Trap"}),` | ✅ MUI | ✅ MUI | ❌ |
| Drawer (persistent) | ❌ | None | ❌ | ❌ | ❌ |
| Snackbar | ❌ | Live region | ❌ | Ignore | ✅ 4s |
| Popover | ❌ | None | ❌ | ✅ MUI | ❌ |`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"z-index-layering",children:"Z-index layering"}),e.jsx(n.p,{children:"Never override z-index with tokens — they are structural constants owned by MUI's theme."}),e.jsx(n.p,{children:`| Layer | z-index | Components |
|---|---|---|
| App Bar | 1100 | AppBar |
| Drawer | 1200 | Drawer |
| Modal / Menu | 1300 | Dialog, Menu, Popover, Backdrop (Modal) |
| Snackbar | 1400 | Snackbar |
| Tooltip | 1500 | Tooltip |`}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"dismissal-taxonomy",children:"Dismissal taxonomy"}),e.jsxs(n.p,{children:[`| Behavior | How it works | Components |
|---|---|---|
| `,e.jsx(n.strong,{children:"Escape key"})," | ",e.jsx(n.code,{children:"disableEscapeKeyDown"}),` prop on Modal | Dialog, Drawer, Menu |
| `,e.jsx(n.strong,{children:"Backdrop click"})," | ",e.jsx(n.code,{children:"onClose(event, reason)"})," where reason is ",e.jsx(n.code,{children:"'backdropClick'"}),` | Dialog, Drawer |
| `,e.jsx(n.strong,{children:"Click-away"}),` | Transparent backdrop capture layer | Popover, Menu |
| `,e.jsx(n.strong,{children:"Auto-hide"})," | ",e.jsx(n.code,{children:"autoHideDuration"}),` timer | Snackbar |
| `,e.jsx(n.strong,{children:"Controlled-only"})," | Parent calls ",e.jsx(n.code,{children:"setOpen(false)"})," | Backdrop (standalone) |"]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Reason string pattern — block backdrop click while allowing Escape:"})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const handleClose = (_: unknown, reason: string) => {
  if (reason === 'backdropClick') return;
  setOpen(false);
};
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"backdrop-composability",children:"Backdrop composability"}),e.jsxs(n.p,{children:["Do ",e.jsx(n.strong,{children:"not"})," compose a standalone ",e.jsx(n.code,{children:"<Backdrop>"})," with a ",e.jsx(n.code,{children:"<Dialog>"})," or ",e.jsx(n.code,{children:"<Drawer>"}),". MUI Modal components include their own backdrop; adding a standalone backdrop would double-stack scrim layers."]}),e.jsxs(n.p,{children:[`| Use case | Which backdrop |
|---|---|
| Full-page async loading | `,e.jsx(n.code,{children:"<Backdrop open={loading}>"}),` |
| Modal dialog with scrim | `,e.jsx(n.code,{children:"<Dialog>"}),` built-in backdrop |
| Side drawer with scrim | `,e.jsx(n.code,{children:"<Drawer>"})," built-in backdrop |"]})]})]})}function u(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{u as default};

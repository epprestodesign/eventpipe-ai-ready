import{j as e}from"./jsx-runtime-BT65X5dW.js";import{useMDXComponents as s}from"./index-Cd31CJfN.js";import{M as o}from"./index-DF1I-CVt.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BpT0z86u.js";import"./index-Bq2HnrkM.js";import"./index-jimAspun.js";import"./index-DrFu-skq.js";function r(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Foundations/Accessibility"}),`
`,e.jsxs("div",{style:{maxWidth:760,fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx(n.h1,{id:"accessibility",children:"Accessibility"}),e.jsxs(n.p,{children:["EventPipe is committed to ",e.jsx(n.strong,{children:"WCAG 2.1 AA"})," compliance. Accessibility is built into every component — not bolted on."]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"standards",children:"Standards"}),e.jsx(n.p,{children:`| Standard | Level | Scope |
|---|---|---|
| WCAG 2.1 | AA | All components |
| ARIA 1.1 | Best practices | All interactive components |
| Keyboard navigation | Full | All components |`}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"focus-management",children:"Focus management"}),e.jsxs(n.p,{children:["Every interactive component has a visible focus indicator using the ",e.jsx(n.strong,{children:"EP focus ring pattern"}),"."]}),e.jsxs("div",{style:{margin:"16px 0 32px",background:"#F9FAFB",borderRadius:10,padding:"24px"},children:[e.jsx("div",{style:{fontWeight:700,fontSize:14,marginBottom:16,color:"#111827"},children:"Focus ring pattern"}),e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{display:"inline-block",padding:"8px 16px",background:"var(--ep-semantic-color-brand-primary)",color:"#fff",borderRadius:4,fontSize:14,fontWeight:500,outline:"2px solid var(--ep-semantic-color-brand-primary)",outlineOffset:"2px"},children:"Focused button"}),e.jsx("div",{style:{fontSize:12,color:"#6B7280",marginTop:8,fontFamily:"monospace"},children:"2px solid brand.primary, 2px offset"})]}),e.jsx("div",{style:{fontSize:13,color:"#4B5563",maxWidth:320,lineHeight:1.6},children:e.jsxs(n.p,{children:["All interactive controls use a 2px solid outline at 2px offset. The ",e.jsx("strong",{children:"color"})," is a design decision (brand.primary by default); the ",e.jsx("strong",{children:"width and offset"})," are structural constants."]})})]})]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Three focus behaviors across component types:"})}),e.jsxs(n.p,{children:[`| Behavior | Description | Components |
|---|---|---|
| `,e.jsx(n.strong,{children:"Focus ring"})," | Visible outline on ",e.jsx(n.code,{children:":focus-visible"}),` | Button, Checkbox, Radio, Switch, TextField, Select, Link, Tabs, Pagination, Breadcrumbs |
| `,e.jsx(n.strong,{children:"Background state"}),` | Color fill change on focus (no outline ring) | Menu items, List items, Autocomplete options |
| `,e.jsx(n.strong,{children:"Focus trap"})," | Tab cycles inside the overlay | Dialog, Drawer (temporary) |"]}),e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Why no focus ring on list-like items?"})," Outline rings clip inside Portal-rendered overflow containers. Background-state focus is the standard for scrollable list surfaces."]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"aria-patterns",children:"ARIA patterns"}),e.jsxs(n.p,{children:[`| Pattern | Implementation |
|---|---|
| `,e.jsx(n.code,{children:'role="dialog"'})," + ",e.jsx(n.code,{children:"aria-modal"}),` | Dialog, Drawer (temporary) — MUI handles automatically |
| `,e.jsx(n.code,{children:'role="tablist"'})," + ",e.jsx(n.code,{children:'role="tab"'})," + ",e.jsx(n.code,{children:'role="tabpanel"'}),` | Tabs — MUI handles automatically |
| `,e.jsx(n.code,{children:'role="navigation"'})," + ",e.jsx(n.code,{children:'aria-label="breadcrumb"'})," | Breadcrumbs — MUI wraps in ",e.jsx(n.code,{children:"<nav>"}),` |
| `,e.jsx(n.code,{children:'aria-current="page"'}),` | BreadcrumbItem (last crumb) |
| `,e.jsx(n.code,{children:"aria-labelledby"})," + ",e.jsx(n.code,{children:"aria-describedby"})," | Dialog — consumer must pass ",e.jsx(n.code,{children:"id"}),` to Title/Content |
| `,e.jsx(n.code,{children:"aria-haspopup"})," + ",e.jsx(n.code,{children:"aria-expanded"}),` | Popover trigger — consumer responsibility |
| `,e.jsx(n.code,{children:'aria-live="polite"'}),` | Snackbar (plain, info, success) |
| `,e.jsx(n.code,{children:'aria-live="assertive"'}),` | Snackbar (error, warning) |
| `,e.jsx(n.code,{children:'role="status"'})," + ",e.jsx(n.code,{children:"aria-label"})," | Backdrop loading state, Dialog loading overlay |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"color-contrast",children:"Color contrast"}),e.jsx(n.p,{children:"All text/background combinations in the default light theme meet WCAG AA contrast ratios:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text.primary"})," on ",e.jsx(n.code,{children:"background.paper"}),": ",e.jsx(n.strong,{children:"≥ 7:1"})," (AAA)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text.secondary"})," on ",e.jsx(n.code,{children:"background.default"}),": ",e.jsx(n.strong,{children:"≥ 4.5:1"})," (AA)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text.onBrand"})," on ",e.jsx(n.code,{children:"brand.primary"}),": ",e.jsx(n.strong,{children:"≥ 4.5:1"})," (AA)"]}),`
`,e.jsxs(n.li,{children:["Status colors (",e.jsx(n.code,{children:"error"}),", ",e.jsx(n.code,{children:"warning"}),", ",e.jsx(n.code,{children:"success"}),", ",e.jsx(n.code,{children:"info"}),") meet AA contrast on white backgrounds"]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"keyboard-navigation",children:"Keyboard navigation"}),e.jsxs(n.p,{children:[`| Component | Keys |
|---|---|
| Button, Checkbox, Switch | `,e.jsx(n.code,{children:"Space"})," / ",e.jsx(n.code,{children:"Enter"}),` to activate |
| Select, Menu | `,e.jsx(n.code,{children:"↑↓"})," to navigate, ",e.jsx(n.code,{children:"Enter"})," to select, ",e.jsx(n.code,{children:"Escape"}),` to close |
| Tabs | `,e.jsx(n.code,{children:"←→"})," to switch tabs, ",e.jsx(n.code,{children:"Tab"}),` to move to panel |
| Dialog, Drawer | `,e.jsx(n.code,{children:"Escape"})," to close; ",e.jsx(n.code,{children:"Tab"}),"/",e.jsx(n.code,{children:"Shift+Tab"}),` trapped inside |
| Pagination | `,e.jsx(n.code,{children:"Tab"})," between pages; ",e.jsx(n.code,{children:"Enter"}),` to activate |
| Autocomplete | `,e.jsx(n.code,{children:"↑↓"})," to navigate options, ",e.jsx(n.code,{children:"Enter"})," to select |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"testing-accessibility",children:"Testing accessibility"}),e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@storybook/addon-a11y"})," addon is enabled. Every story runs axe-core checks automatically. Look for the ",e.jsx(n.strong,{children:"Accessibility"})," panel in the Storybook addons bar to see any violations."]}),e.jsx(n.p,{children:"For manual testing:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tab through all interactive elements — every element must be reachable"}),`
`,e.jsx(n.li,{children:"Test with a screen reader (VoiceOver / NVDA)"}),`
`,e.jsx(n.li,{children:"Verify focus returns to the trigger after closing Dialog/Drawer"}),`
`]})]})]})}function u(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{u as default};

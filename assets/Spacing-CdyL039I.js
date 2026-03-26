import{j as e}from"./jsx-runtime-BT65X5dW.js";import{useMDXComponents as t}from"./index-Cd31CJfN.js";import{M as l}from"./index-DF1I-CVt.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BpT0z86u.js";import"./index-Bq2HnrkM.js";import"./index-jimAspun.js";import"./index-DrFu-skq.js";function a(s){const n={code:"code",div:"div",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Foundations/Spacing"}),`
`,e.jsxs("div",{style:{maxWidth:760,fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx(n.h1,{id:"spacing",children:"Spacing"}),e.jsxs(n.p,{children:["EventPipe uses a ",e.jsx(n.strong,{children:"4px base grid"}),". All spacing values in components — padding, gap, margin — are multiples of 4px, expressed as component tokens."]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"base-scale",children:"Base scale"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:0,margin:"24px 0 40px"},children:[{px:4,label:"4px  — xs",desc:"Icon gaps, tight separations"},{px:8,label:"8px  — sm",desc:"Dense padding (list items, menu items)"},{px:12,label:"12px — md",desc:"Icon-to-label gaps, compact components"},{px:16,label:"16px — base",desc:"Standard padding (cards, dialogs, popovers)"},{px:20,label:"20px",desc:"Dialog title/content vertical padding"},{px:24,label:"24px — lg",desc:"Dialog horizontal padding, card padding"},{px:32,label:"32px — xl",desc:"Section separations"},{px:40,label:"40px — 2xl",desc:"Page-level vertical rhythm"},{px:48,label:"48px — 3xl",desc:"Hero / banner spacing"}].map((i,o)=>e.jsxs(n.div,{style:{display:"flex",alignItems:"center",gap:20,padding:"12px 0",borderBottom:o<8?"1px solid #F3F4F6":"none"},children:[e.jsx(n.div,{style:{width:i.px,height:24,background:"var(--ep-semantic-color-brand-primary)",borderRadius:2,flexShrink:0}}),e.jsx(n.div,{style:{width:120,fontFamily:"monospace",fontSize:13,color:"#111827",fontWeight:600},children:i.label}),e.jsx(n.div,{style:{fontSize:13,color:"#6B7280"},children:i.desc})]},i.px))}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"how-spacing-is-tokenized",children:"How spacing is tokenized"}),e.jsx(n.p,{children:'Component spacing is defined directly in component token JSON files. There is no shared "spacing scale" token file — spacing values exist where they are used.'}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`// packages/tokens/src/component/card.json
{
  "component": {
    "card": {
      "padding": {
        "y": { "$type": "dimension", "$value": "16px" },
        "x": { "$type": "dimension", "$value": "20px" }
      }
    }
  }
}
`})}),e.jsx(n.p,{children:"This compiles to:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--ep-component-card-padding-y: 16px;
--ep-component-card-padding-x: 20px;
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"rules",children:"Rules"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["All spacing values are multiples of ",e.jsx(n.strong,{children:"4px"})]}),`
`,e.jsx(n.li,{children:"Spacing is never hardcoded in component source — always tokenized"}),`
`,e.jsx(n.li,{children:"Gap and padding between structural sub-components (Dialog title/content gap, action button spacing) are always derived from component tokens"}),`
`,e.jsx(n.li,{children:"Semantic spacing tokens do not exist in the current system — spacing lives at the component layer"}),`
`]})]})]})}function j(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{j as default};

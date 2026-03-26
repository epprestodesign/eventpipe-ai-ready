import{j as e}from"./jsx-runtime-BT65X5dW.js";import{h as a,e as n}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const E={title:"Components/Layout/Box",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Generic container component. Thin wrapper around MUI Box — no tokens, no interactive states. Provides the design-system boundary and the `sx` escape hatch for one-off styling."}}},argTypes:{component:{control:"text",description:"The rendered HTML element.",table:{defaultValue:{summary:"div"}}}}},r={render:()=>e.jsx(a,{children:e.jsx(n,{children:"EventPipe helps teams plan, promote, and execute events of any scale."})})},o={render:()=>e.jsxs(a,{component:"section","aria-label":"Event details",children:[e.jsx(n,{variant:"h5",gutterBottom:!0,children:"Venue Information"}),e.jsx(n,{color:"secondary",children:"Convention Center, Hall B — Capacity: 500 attendees"})]})},t={render:()=>e.jsxs(a,{sx:{padding:3,borderRadius:2,backgroundColor:"var(--ep-semantic-color-neutral-light, #f5f5f5)",border:"1px solid var(--ep-semantic-color-border-default, #e0e0e0)"},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Registration Summary"}),e.jsx(n,{variant:"body2",color:"secondary",children:"247 attendees registered across 12 ticket types. Use the sx prop for one-off layout overrides while still consuming design-system token variables."})]})};var s,i,c,p,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Box>
      <Typography>
        EventPipe helps teams plan, promote, and execute events of any scale.
      </Typography>
    </Box>
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"Simple container wrapping content.",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};var l,m,y,u,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Box component="section" aria-label="Event details">
      <Typography variant="h5" gutterBottom>
        Venue Information
      </Typography>
      <Typography color="secondary">
        Convention Center, Hall B — Capacity: 500 attendees
      </Typography>
    </Box>
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source},description:{story:"Renders as a semantic &lt;section&gt; element. Inspect the DOM to verify.",...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var g,x,f,v,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Box sx={{
    padding: 3,
    borderRadius: 2,
    backgroundColor: 'var(--ep-semantic-color-neutral-light, #f5f5f5)',
    border: '1px solid var(--ep-semantic-color-border-default, #e0e0e0)'
  }}>
      <Typography variant="h6" gutterBottom>
        Registration Summary
      </Typography>
      <Typography variant="body2" color="secondary">
        247 attendees registered across 12 ticket types. Use the sx prop for one-off
        layout overrides while still consuming design-system token variables.
      </Typography>
    </Box>
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"Demonstrates the sx escape hatch using token CSS custom properties.",...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};const R=["Default","AsSection","WithSxStyling"];export{o as AsSection,r as Default,t as WithSxStyling,R as __namedExportsOrder,E as default};

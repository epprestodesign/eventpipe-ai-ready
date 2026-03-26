import{j as e}from"./jsx-runtime-BT65X5dW.js";import{e as r,S as d}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const q={title:"Components/Typography",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Renders text with design-system typography tokens. Maps each variant to a semantic HTML element by default (e.g. h1 renders <h1>). The `component` prop overrides the element without losing styles."}}},argTypes:{variant:{control:"select",options:["display","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline"],description:"Typography preset controlling font-size, weight, and line-height.",table:{defaultValue:{summary:"body1"}}},color:{control:"radio",options:["primary","secondary","disabled"],description:"Text color mapped to semantic text tokens.",table:{defaultValue:{summary:"primary"}}},align:{control:"select",options:["inherit","left","center","right","justify"],table:{defaultValue:{summary:"inherit"}}},noWrap:{control:"boolean",description:"Truncate text with ellipsis on overflow.",table:{defaultValue:{summary:"false"}}},gutterBottom:{control:"boolean",description:"Adds bottom margin (0.35em).",table:{defaultValue:{summary:"false"}}},component:{control:"text",description:"Override the rendered HTML element."}},args:{variant:"body1",color:"primary"}},t={args:{children:"Welcome to EventPipe — the event management platform built for modern teams."}},a={render:()=>{const G=["display","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline"];return e.jsx(d,{spacing:2,children:G.map(p=>e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:16},children:[e.jsx(r,{variant:"caption",color:"secondary",sx:{minWidth:80},children:p}),e.jsx(r,{variant:p,children:"Event Registration Dashboard"})]},p))})}},n={render:()=>e.jsxs(d,{spacing:1,children:[e.jsx(r,{color:"primary",children:"Primary — main content text for event details"}),e.jsx(r,{color:"secondary",children:"Secondary — supplemental information like venue capacity"}),e.jsx(r,{color:"disabled",children:"Disabled — inactive registration period"})]})},o={render:()=>e.jsx("div",{style:{maxWidth:300,border:"1px dashed #ccc",padding:8},children:e.jsx(r,{noWrap:!0,children:"Annual EventPipe Conference 2026 — Featuring keynote speakers from across the industry with panel discussions on hybrid event technology, attendee engagement, and data-driven planning."})})},s={render:()=>e.jsxs("div",{style:{maxWidth:480},children:[e.jsx(r,{variant:"h4",gutterBottom:!0,children:"Event Overview"}),e.jsx(r,{gutterBottom:!0,children:"Join us for the annual EventPipe Summit, bringing together event professionals from around the world to share best practices and emerging trends."}),e.jsx(r,{gutterBottom:!0,children:"Sessions cover registration workflows, attendee engagement, analytics dashboards, and hybrid event technology."}),e.jsx(r,{color:"secondary",children:"Early bird registration closes March 31, 2026."})]})},i={render:()=>e.jsxs(d,{spacing:2,children:[e.jsx(r,{variant:"caption",color:"secondary",children:'The text below uses variant="h1" but renders as a <p> element. Inspect the DOM to verify.'}),e.jsx(r,{variant:"h1",component:"p",children:"This looks like an h1 but is a paragraph"})]})};var c,l,h,y,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Welcome to EventPipe — the event management platform built for modern teams.'
  }
}`,...(h=(l=t.parameters)==null?void 0:l.docs)==null?void 0:h.source},description:{story:"Default body1 variant. Use Controls to explore.",...(m=(y=t.parameters)==null?void 0:y.docs)==null?void 0:m.description}}};var g,u,v,b,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const variants: TypographyVariant[] = ['display', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline'];
    return <Stack spacing={2}>
        {variants.map(v => <div key={v} style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 16
      }}>
            <Typography variant="caption" color="secondary" sx={{
          minWidth: 80
        }}>
              {v}
            </Typography>
            <Typography variant={v}>
              Event Registration Dashboard
            </Typography>
          </div>)}
      </Stack>;
  }
}`,...(v=(u=a.parameters)==null?void 0:u.docs)==null?void 0:v.source},description:{story:"All 13 typography variants labeled and stacked.",...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var f,T,k,j,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Stack spacing={1}>
      <Typography color="primary">Primary — main content text for event details</Typography>
      <Typography color="secondary">Secondary — supplemental information like venue capacity</Typography>
      <Typography color="disabled">Disabled — inactive registration period</Typography>
    </Stack>
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source},description:{story:"Primary, secondary, and disabled text colors.",...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.description}}};var w,E,W,P,B;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 300,
    border: '1px dashed #ccc',
    padding: 8
  }}>
      <Typography noWrap>
        Annual EventPipe Conference 2026 — Featuring keynote speakers from across the industry with panel discussions on hybrid event technology, attendee engagement, and data-driven planning.
      </Typography>
    </div>
}`,...(W=(E=o.parameters)==null?void 0:E.docs)==null?void 0:W.source},description:{story:"Long text truncated with ellipsis inside a constrained container.",...(B=(P=o.parameters)==null?void 0:P.docs)==null?void 0:B.description}}};var D,V,M,A,C;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 480
  }}>
      <Typography variant="h4" gutterBottom>
        Event Overview
      </Typography>
      <Typography gutterBottom>
        Join us for the annual EventPipe Summit, bringing together event professionals
        from around the world to share best practices and emerging trends.
      </Typography>
      <Typography gutterBottom>
        Sessions cover registration workflows, attendee engagement, analytics dashboards,
        and hybrid event technology.
      </Typography>
      <Typography color="secondary">
        Early bird registration closes March 31, 2026.
      </Typography>
    </div>
}`,...(M=(V=s.parameters)==null?void 0:V.docs)==null?void 0:M.source},description:{story:"Paragraph spacing with gutterBottom.",...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};var O,I,R,L,F;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Typography variant="caption" color="secondary">
        The text below uses variant="h1" but renders as a &lt;p&gt; element.
        Inspect the DOM to verify.
      </Typography>
      <Typography variant="h1" component="p">
        This looks like an h1 but is a paragraph
      </Typography>
    </Stack>
}`,...(R=(I=i.parameters)==null?void 0:I.docs)==null?void 0:R.source},description:{story:"h1 variant rendered as a paragraph element — semantic override via component prop.",...(F=(L=i.parameters)==null?void 0:L.docs)==null?void 0:F.description}}};const K=["Default","AllVariants","Colors","NoWrap","GutterBottom","PolymorphicElement"];export{a as AllVariants,n as Colors,t as Default,s as GutterBottom,o as NoWrap,i as PolymorphicElement,K as __namedExportsOrder,q as default};

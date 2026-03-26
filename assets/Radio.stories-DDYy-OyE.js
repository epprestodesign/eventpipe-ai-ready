import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as de}from"./index-C6mWTJJr.js";import{R as r,a2 as h,a3 as x,U as g}from"./index-BlH9IZLb.js";import{F as o}from"./FormControlLabel-DGAQLBXM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const ge={title:"Components/Selection/Radio",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Category 5 (Form Controls) — 3-tier sizing.",table:{defaultValue:{summary:"md"}}},color:{control:"select",options:["primary","secondary","error","warning","info","success","neutral"],description:"Active color for checked state and focus ring.",table:{defaultValue:{summary:"primary"}}},checked:{control:"boolean",description:"Controlled checked state."},disabled:{control:"boolean",description:"Prevents interaction. Applies disabled token set."}}},s={args:{size:"md",color:"primary"}},l={args:{checked:!0,color:"primary"}},c={args:{},render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(o,{control:e.jsx(r,{size:"sm",checked:!0}),label:"sm"}),e.jsx(o,{control:e.jsx(r,{size:"md",checked:!0}),label:"md"}),e.jsx(o,{control:e.jsx(r,{size:"lg",checked:!0}),label:"lg"})]})},t={args:{},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:["primary","secondary","error","warning","info","success","neutral"].map(a=>e.jsx(o,{control:e.jsx(r,{color:a,checked:!0}),label:a},a))})},n={args:{},render:()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(o,{control:e.jsx(r,{disabled:!0}),label:"Unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"Checked"})]})},d={args:{},render:()=>{const[a,u]=de.useState("option1");return e.jsxs(h,{children:[e.jsx(x,{children:"Preferred contact method"}),e.jsxs(g,{value:a,onChange:b=>u(b.target.value),name:"contact-method",children:[e.jsx(o,{value:"option1",control:e.jsx(r,{}),label:"Email"}),e.jsx(o,{value:"option2",control:e.jsx(r,{}),label:"Phone"}),e.jsx(o,{value:"option3",control:e.jsx(r,{}),label:"SMS"})]})]})}},i={args:{},render:()=>{const[a,u]=de.useState("sm");return e.jsxs(h,{children:[e.jsx(x,{children:"Size"}),e.jsxs(g,{row:!0,value:a,onChange:b=>u(b.target.value),name:"size-select",children:[e.jsx(o,{value:"sm",control:e.jsx(r,{size:"sm"}),label:"Small"}),e.jsx(o,{value:"md",control:e.jsx(r,{size:"md"}),label:"Medium"}),e.jsx(o,{value:"lg",control:e.jsx(r,{size:"lg"}),label:"Large"})]})]})}},m={args:{},render:()=>e.jsxs(h,{children:[e.jsx(x,{children:"Plan"}),e.jsxs(g,{defaultValue:"basic",name:"plan",children:[e.jsx(o,{value:"basic",control:e.jsx(r,{}),label:"Basic"}),e.jsx(o,{value:"pro",control:e.jsx(r,{}),label:"Pro"}),e.jsx(o,{value:"enterprise",control:e.jsx(r,{disabled:!0}),label:"Enterprise (contact sales)"})]})]})},p={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(o,{control:e.jsx(r,{size:"sm"}),label:"sm unchecked"}),e.jsx(o,{control:e.jsx(r,{size:"md"}),label:"md unchecked"}),e.jsx(o,{control:e.jsx(r,{size:"lg"}),label:"lg unchecked"}),e.jsx(o,{control:e.jsx(r,{size:"sm",checked:!0}),label:"sm checked (primary)"}),e.jsx(o,{control:e.jsx(r,{size:"md",checked:!0,color:"error"}),label:"md checked (error)"}),e.jsx(o,{control:e.jsx(r,{size:"lg",checked:!0,color:"success"}),label:"lg checked (success)"}),e.jsx(o,{control:e.jsx(r,{disabled:!0}),label:"disabled unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"disabled checked"})]})};var j,k,v,y,C;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'primary'
  }
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source},description:{story:"Default unchecked state.",...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.description}}};var R,F,f,z,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: 'primary'
  }
}`,...(f=(F=l.parameters)==null?void 0:F.docs)==null?void 0:f.source},description:{story:"Checked state with primary color.",...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.description}}};var S,G,w,D,V;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }}>
      <FormControlLabel control={<Radio size="sm" checked />} label="sm" />
      <FormControlLabel control={<Radio size="md" checked />} label="md" />
      <FormControlLabel control={<Radio size="lg" checked />} label="lg" />
    </div>
}`,...(w=(G=c.parameters)==null?void 0:G.docs)==null?void 0:w.source},description:{story:"All three sizes side by side.",...(V=(D=c.parameters)==null?void 0:D.docs)==null?void 0:V.description}}};var P,A,E,T,M;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
  }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => <FormControlLabel key={c} control={<Radio color={c} checked />} label={c} />)}
    </div>
}`,...(E=(A=t.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:"All seven colors in checked state.",...(M=(T=t.parameters)==null?void 0:T.docs)==null?void 0:M.description}}};var W,U,B,I,O;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>
      <FormControlLabel control={<Radio disabled />} label="Unchecked" />
      <FormControlLabel control={<Radio disabled checked />} label="Checked" />
    </div>
}`,...(B=(U=n.parameters)==null?void 0:U.docs)==null?void 0:B.source},description:{story:"Disabled unchecked and checked states.",...(O=(I=n.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};var _,q,H,J,K;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [value, setValue] = React.useState('option1');
    return <FormControl>
        <FormLabel>Preferred contact method</FormLabel>
        <RadioGroup value={value} onChange={e => setValue(e.target.value)} name="contact-method">
          <FormControlLabel value="option1" control={<Radio />} label="Email" />
          <FormControlLabel value="option2" control={<Radio />} label="Phone" />
          <FormControlLabel value="option3" control={<Radio />} label="SMS" />
        </RadioGroup>
      </FormControl>;
  }
}`,...(H=(q=d.parameters)==null?void 0:q.docs)==null?void 0:H.source},description:{story:"Typical RadioGroup usage — vertical column (default).",...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var N,Q,X,Y,Z;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [value, setValue] = React.useState('sm');
    return <FormControl>
        <FormLabel>Size</FormLabel>
        <RadioGroup row value={value} onChange={e => setValue(e.target.value)} name="size-select">
          <FormControlLabel value="sm" control={<Radio size="sm" />} label="Small" />
          <FormControlLabel value="md" control={<Radio size="md" />} label="Medium" />
          <FormControlLabel value="lg" control={<Radio size="lg" />} label="Large" />
        </RadioGroup>
      </FormControl>;
  }
}`,...(X=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"RadioGroup in row layout.",...(Z=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var $,ee,re,oe,ae;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {},
  render: () => <FormControl>
      <FormLabel>Plan</FormLabel>
      <RadioGroup defaultValue="basic" name="plan">
        <FormControlLabel value="basic" control={<Radio />} label="Basic" />
        <FormControlLabel value="pro" control={<Radio />} label="Pro" />
        <FormControlLabel value="enterprise" control={<Radio disabled />} label="Enterprise (contact sales)" />
      </RadioGroup>
    </FormControl>
}`,...(re=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"RadioGroup with a disabled option.",...(ae=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:ae.description}}};var se,le,ce,te,ne;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <FormControlLabel control={<Radio size="sm" />} label="sm unchecked" />
      <FormControlLabel control={<Radio size="md" />} label="md unchecked" />
      <FormControlLabel control={<Radio size="lg" />} label="lg unchecked" />
      <FormControlLabel control={<Radio size="sm" checked />} label="sm checked (primary)" />
      <FormControlLabel control={<Radio size="md" checked color="error" />} label="md checked (error)" />
      <FormControlLabel control={<Radio size="lg" checked color="success" />} label="lg checked (success)" />
      <FormControlLabel control={<Radio disabled />} label="disabled unchecked" />
      <FormControlLabel control={<Radio disabled checked />} label="disabled checked" />
    </div>
}`,...(ce=(le=p.parameters)==null?void 0:le.docs)==null?void 0:ce.source},description:{story:"Token Audit — verifies all CSS custom properties resolve correctly.\nOpen DevTools and inspect each radio to confirm no `var(--ep-*)` fallbacks.",...(ne=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};const je=["Default","Checked","Sizes","Colors","Disabled","Group","GroupRow","GroupWithDisabled","TokenAudit"];export{l as Checked,t as Colors,s as Default,n as Disabled,d as Group,i as GroupRow,m as GroupWithDisabled,c as Sizes,p as TokenAudit,je as __namedExportsOrder,ge as default};

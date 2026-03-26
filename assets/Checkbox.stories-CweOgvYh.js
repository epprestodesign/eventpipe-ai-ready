import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as pe}from"./index-C6mWTJJr.js";import{r,F as ke}from"./index-BlH9IZLb.js";import{F as o}from"./FormControlLabel-DGAQLBXM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const Fe={title:"Components/Selection/Checkbox",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Category 5 (Form Controls) — 3-tier sizing.",table:{defaultValue:{summary:"md"}}},color:{control:"select",options:["primary","secondary","error","warning","info","success","neutral"],description:"Active color for checked/indeterminate state and focus ring.",table:{defaultValue:{summary:"primary"}}},checked:{control:"boolean",description:"Controlled checked state."},indeterminate:{control:"boolean",description:"Indeterminate state (partial selection)."},disabled:{control:"boolean",description:"Prevents interaction. Applies disabled token set."}}},a={args:{size:"md",color:"primary"}},n={args:{checked:!0,color:"primary"}},l={args:{indeterminate:!0,color:"primary"}},d={args:{},render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(o,{control:e.jsx(r,{size:"sm",checked:!0}),label:"sm"}),e.jsx(o,{control:e.jsx(r,{size:"md",checked:!0}),label:"md"}),e.jsx(o,{control:e.jsx(r,{size:"lg",checked:!0}),label:"lg"})]})},i={args:{},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:["primary","secondary","error","warning","info","success","neutral"].map(c=>e.jsx(o,{control:e.jsx(r,{color:c,checked:!0}),label:c},c))})},m={args:{},render:()=>e.jsxs(ke,{row:!0,children:[e.jsx(o,{control:e.jsx(r,{disabled:!0}),label:"Unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"Checked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,indeterminate:!0}),label:"Indeterminate"})]})},h={args:{},render:()=>{const[c,t]=pe.useState(!1);return e.jsx(o,{control:e.jsx(r,{checked:c,onChange:u=>t(u.target.checked)}),label:"Accept terms and conditions"})}},p={args:{},render:()=>{const[c,t]=pe.useState([!0,!1]),u=c.every(Boolean),be=c.some(Boolean)&&!u;return e.jsxs("div",{children:[e.jsx(o,{label:"Parent",control:e.jsx(r,{checked:u,indeterminate:be,onChange:s=>t([s.target.checked,s.target.checked])})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginLeft:24},children:[e.jsx(o,{label:"Child A",control:e.jsx(r,{checked:c[0],onChange:s=>t([s.target.checked,c[1]])})}),e.jsx(o,{label:"Child B",control:e.jsx(r,{checked:c[1],onChange:s=>t([c[0],s.target.checked])})})]})]})}},b={args:{required:!0}},k={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(o,{control:e.jsx(r,{size:"sm"}),label:"sm unchecked"}),e.jsx(o,{control:e.jsx(r,{size:"md"}),label:"md unchecked"}),e.jsx(o,{control:e.jsx(r,{size:"lg"}),label:"lg unchecked"}),e.jsx(o,{control:e.jsx(r,{size:"sm",checked:!0}),label:"sm checked (primary)"}),e.jsx(o,{control:e.jsx(r,{size:"md",checked:!0,color:"error"}),label:"md checked (error)"}),e.jsx(o,{control:e.jsx(r,{size:"lg",checked:!0,color:"success"}),label:"lg checked (success)"}),e.jsx(o,{control:e.jsx(r,{indeterminate:!0}),label:"indeterminate"}),e.jsx(o,{control:e.jsx(r,{disabled:!0}),label:"disabled unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"disabled checked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,indeterminate:!0}),label:"disabled indeterminate"})]})};var x,C,g,y,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'primary'
  }
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source},description:{story:"Default unchecked state.",...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.description}}};var f,F,v,L,z;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    color: 'primary'
  }
}`,...(v=(F=n.parameters)==null?void 0:F.docs)==null?void 0:v.source},description:{story:"Checked state with primary color.",...(z=(L=n.parameters)==null?void 0:L.docs)==null?void 0:z.description}}};var S,A,D,I,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    color: 'primary'
  }
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:"Indeterminate state — represents partial selection of children.",...(w=(I=l.parameters)==null?void 0:I.docs)==null?void 0:w.description}}};var R,B,q,G,T;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }}>
      <FormControlLabel control={<Checkbox size="sm" checked />} label="sm" />
      <FormControlLabel control={<Checkbox size="md" checked />} label="md" />
      <FormControlLabel control={<Checkbox size="lg" checked />} label="lg" />
    </div>
}`,...(q=(B=d.parameters)==null?void 0:B.docs)==null?void 0:q.source},description:{story:"All three sizes side by side.",...(T=(G=d.parameters)==null?void 0:G.docs)==null?void 0:T.description}}};var P,W,E,O,U;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
  }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => <FormControlLabel key={c} control={<Checkbox color={c} checked />} label={c} />)}
    </div>
}`,...(E=(W=i.parameters)==null?void 0:W.docs)==null?void 0:E.source},description:{story:"All seven colors in checked state.",...(U=(O=i.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};var V,_,H,J,K;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {},
  render: () => <FormGroup row>
      <FormControlLabel control={<Checkbox disabled />} label="Unchecked" />
      <FormControlLabel control={<Checkbox disabled checked />} label="Checked" />
      <FormControlLabel control={<Checkbox disabled indeterminate />} label="Indeterminate" />
    </FormGroup>
}`,...(H=(_=m.parameters)==null?void 0:_.docs)==null?void 0:H.source},description:{story:"Disabled unchecked, checked, and indeterminate states.",...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var M,N,Q,X,Y;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <FormControlLabel control={<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />} label="Accept terms and conditions" />;
  }
}`,...(Q=(N=h.parameters)==null?void 0:N.docs)==null?void 0:Q.source},description:{story:"Controlled checkbox with label — typical form usage.",...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,$,ee,re,oe;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [checked, setChecked] = React.useState<[boolean, boolean]>([true, false]);
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean) && !allChecked;
    return <div>
        <FormControlLabel label="Parent" control={<Checkbox checked={allChecked} indeterminate={someChecked} onChange={e => setChecked([e.target.checked, e.target.checked])} />} />
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 24
      }}>
          <FormControlLabel label="Child A" control={<Checkbox checked={checked[0]} onChange={e => setChecked([e.target.checked, checked[1]])} />} />
          <FormControlLabel label="Child B" control={<Checkbox checked={checked[1]} onChange={e => setChecked([checked[0], e.target.checked])} />} />
        </div>
      </div>;
  }
}`,...(ee=($=p.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Parent/children indeterminate pattern.",...(oe=(re=p.parameters)==null?void 0:re.docs)==null?void 0:oe.description}}};var ce,se,te,ae,ne;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(te=(se=b.parameters)==null?void 0:se.docs)==null?void 0:te.source},description:{story:"Required checkbox — native validation attribute.",...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};var le,de,ie,me,he;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <FormControlLabel control={<Checkbox size="sm" />} label="sm unchecked" />
      <FormControlLabel control={<Checkbox size="md" />} label="md unchecked" />
      <FormControlLabel control={<Checkbox size="lg" />} label="lg unchecked" />
      <FormControlLabel control={<Checkbox size="sm" checked />} label="sm checked (primary)" />
      <FormControlLabel control={<Checkbox size="md" checked color="error" />} label="md checked (error)" />
      <FormControlLabel control={<Checkbox size="lg" checked color="success" />} label="lg checked (success)" />
      <FormControlLabel control={<Checkbox indeterminate />} label="indeterminate" />
      <FormControlLabel control={<Checkbox disabled />} label="disabled unchecked" />
      <FormControlLabel control={<Checkbox disabled checked />} label="disabled checked" />
      <FormControlLabel control={<Checkbox disabled indeterminate />} label="disabled indeterminate" />
    </div>
}`,...(ie=(de=k.parameters)==null?void 0:de.docs)==null?void 0:ie.source},description:{story:"Token Audit — verifies all CSS custom properties resolve correctly.\nOpen DevTools and inspect each checkbox to confirm no `var(--ep-*)` fallbacks.",...(he=(me=k.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};const ve=["Default","Checked","Indeterminate","Sizes","Colors","Disabled","WithLabel","IndeterminateGroup","Required","TokenAudit"];export{n as Checked,i as Colors,a as Default,m as Disabled,l as Indeterminate,p as IndeterminateGroup,b as Required,d as Sizes,k as TokenAudit,h as WithLabel,ve as __namedExportsOrder,Fe as default};

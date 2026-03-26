import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as v}from"./index-C6mWTJJr.js";import{Q as a,F as Ee}from"./index-BlH9IZLb.js";import{F as o}from"./FormControlLabel-DGAQLBXM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const Qe={title:"Components/Selection/Switch",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Category 5 (Form Controls) — 3-tier sizing.",table:{defaultValue:{summary:"md"}}},color:{control:"select",options:["primary","secondary","error","warning","info","success","neutral"],description:"Active color for checked track and focus ring.",table:{defaultValue:{summary:"primary"}}},variant:{control:"radio",options:["default","ios"],description:"Visual style variant. `ios` adds a thumb drop shadow and lighter unchecked track.",table:{defaultValue:{summary:"default"}}},checked:{control:!1,table:{disable:!0}},disabled:{control:"boolean",description:"Prevents interaction. Applies disabled opacity."}},args:{variant:"default",size:"md",color:"primary"}},s={args:{},render:r=>{const[y,x]=v.useState(!1);return e.jsx(a,{...r,checked:y,onChange:Ne=>x(Ne.target.checked)})}},t={args:{defaultChecked:!0}},n={args:{},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:["sm","md","lg"].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(o,{control:e.jsx(a,{size:r}),label:`${r} off`}),e.jsx(o,{control:e.jsx(a,{size:r,defaultChecked:!0}),label:`${r} on`})]},r))})},l={args:{},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:["primary","secondary","error","warning","info","success","neutral"].map(r=>e.jsx(o,{control:e.jsx(a,{color:r,defaultChecked:!0}),label:r},r))})},i={args:{},render:()=>e.jsxs(Ee,{row:!0,children:[e.jsx(o,{control:e.jsx(a,{disabled:!0}),label:"Off"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,checked:!0}),label:"On"})]})},c={args:{},render:()=>{const[r,y]=v.useState(!1);return e.jsx(o,{control:e.jsx(a,{checked:r,onChange:x=>y(x.target.checked)}),label:r?"Notifications on":"Notifications off"})}},d={args:{defaultChecked:!0}},p={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(o,{control:e.jsx(a,{inputProps:{"aria-label":"Enable dark mode"}}),label:"Dark mode"}),e.jsx(o,{control:e.jsx(a,{defaultChecked:!0,inputProps:{"aria-label":"Enable notifications"}}),label:"Notifications"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,inputProps:{"aria-label":"Feature unavailable"}}),label:"Beta feature (unavailable)"})]})},m={name:"iOS Variant",args:{variant:"ios",size:"md",color:"primary"}},u={name:"iOS Variant — Sizes",args:{},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:["sm","md","lg"].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(o,{control:e.jsx(a,{size:r,variant:"ios"}),label:`${r} off`}),e.jsx(o,{control:e.jsx(a,{size:r,variant:"ios",defaultChecked:!0}),label:`${r} on`})]},r))})},f={name:"iOS Variant — Colors",args:{},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:["primary","secondary","error","warning","info","success","neutral"].map(r=>e.jsx(o,{control:e.jsx(a,{variant:"ios",color:r,defaultChecked:!0}),label:r},r))})},b={name:"Variant Comparison",args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx("div",{style:{fontSize:12,color:"#666",fontFamily:"monospace"},children:"default vs ios — off and on states"}),["sm","md","lg"].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx("span",{style:{fontSize:11,color:"#999",width:20},children:r}),e.jsx(o,{control:e.jsx(a,{size:r,variant:"default"}),label:"default off"}),e.jsx(o,{control:e.jsx(a,{size:r,variant:"default",defaultChecked:!0}),label:"default on"}),e.jsx(o,{control:e.jsx(a,{size:r,variant:"ios"}),label:"ios off"}),e.jsx(o,{control:e.jsx(a,{size:r,variant:"ios",defaultChecked:!0}),label:"ios on"})]},r))]})},h={name:"iOS Variant — Disabled",args:{},render:()=>e.jsxs(Ee,{row:!0,children:[e.jsx(o,{control:e.jsx(a,{variant:"ios",disabled:!0}),label:"Off"}),e.jsx(o,{control:e.jsx(a,{variant:"ios",disabled:!0,checked:!0}),label:"On"})]})},g={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[["sm","md","lg"].map(r=>e.jsxs(v.Fragment,{children:[e.jsx(o,{control:e.jsx(a,{size:r}),label:`${r} off`}),e.jsx(o,{control:e.jsx(a,{size:r,defaultChecked:!0}),label:`${r} on (primary)`}),e.jsx(o,{control:e.jsx(a,{size:r,defaultChecked:!0,color:"error"}),label:`${r} on (error)`})]},r)),e.jsx(o,{control:e.jsx(a,{disabled:!0}),label:"disabled off"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,checked:!0}),label:"disabled on"})]})};var C,S,k,j,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [on, setOn] = React.useState(false);
    return <Switch {...args} checked={on} onChange={e => setOn(e.target.checked)} />;
  }
}`,...(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:"Default off state — fully interactive playground.",...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var F,z,O,D,L;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(O=(z=t.parameters)==null?void 0:z.docs)==null?void 0:O.source},description:{story:"Starts in the checked (on) state — uncontrolled, fully toggleable.",...(L=(D=t.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var V,I,$,A,R;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {(['sm', 'md', 'lg'] as const).map(s => <div key={s} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <FormControlLabel control={<Switch size={s} />} label={\`\${s} off\`} />
          <FormControlLabel control={<Switch size={s} defaultChecked />} label={\`\${s} on\`} />
        </div>)}
    </div>
}`,...($=(I=n.parameters)==null?void 0:I.docs)==null?void 0:$.source},description:{story:`All three sizes — off and on. The "on" switches use defaultChecked so they start
 checked but remain interactive.`,...(R=(A=n.parameters)==null?void 0:A.docs)==null?void 0:R.description}}};var P,E,N,T,G;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
  }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => <FormControlLabel key={c} control={<Switch color={c} defaultChecked />} label={c} />)}
    </div>
}`,...(N=(E=l.parameters)==null?void 0:E.docs)==null?void 0:N.source},description:{story:"All seven colors in the checked state. Uses defaultChecked — each switch is toggleable.",...(G=(T=l.parameters)==null?void 0:T.docs)==null?void 0:G.description}}};var W,U,B,_,M;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {},
  render: () => <FormGroup row>
      <FormControlLabel control={<Switch disabled />} label="Off" />
      <FormControlLabel control={<Switch disabled checked />} label="On" />
    </FormGroup>
}`,...(B=(U=i.parameters)==null?void 0:U.docs)==null?void 0:B.source},description:{story:"Disabled off and on states — intentionally non-interactive.",...(M=(_=i.parameters)==null?void 0:_.docs)==null?void 0:M.description}}};var Q,q,H,J,K;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [on, setOn] = React.useState(false);
    return <FormControlLabel control={<Switch checked={on} onChange={e => setOn(e.target.checked)} />} label={on ? 'Notifications on' : 'Notifications off'} />;
  }
}`,...(H=(q=c.parameters)==null?void 0:q.docs)==null?void 0:H.source},description:{story:"Controlled switch — value owned by useState, onChange drives state updates.",...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var X,Y,Z,ee,re;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Uncontrolled — starts checked, MUI owns internal state. Fully toggleable.",...(re=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var ae,oe,se,te,ne;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <FormControlLabel control={<Switch inputProps={{
      'aria-label': 'Enable dark mode'
    }} />} label="Dark mode" />
      <FormControlLabel control={<Switch defaultChecked inputProps={{
      'aria-label': 'Enable notifications'
    }} />} label="Notifications" />
      <FormControlLabel control={<Switch disabled inputProps={{
      'aria-label': 'Feature unavailable'
    }} />} label="Beta feature (unavailable)" />
    </div>
}`,...(se=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:se.source},description:{story:'Accessibility — ARIA role="switch" semantics (set internally).',...(ne=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var le,ie,ce,de,pe;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'iOS Variant',
  args: {
    variant: 'ios',
    size: 'md',
    color: 'primary'
  }
}`,...(ce=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:ce.source},description:{story:"iOS variant — thumb drop shadow, lighter unchecked track.",...(pe=(de=m.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var me,ue,fe,be,he;u.parameters={...u.parameters,docs:{...(me=u.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'iOS Variant — Sizes',
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {(['sm', 'md', 'lg'] as const).map(s => <div key={s} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <FormControlLabel control={<Switch size={s} variant="ios" />} label={\`\${s} off\`} />
          <FormControlLabel control={<Switch size={s} variant="ios" defaultChecked />} label={\`\${s} on\`} />
        </div>)}
    </div>
}`,...(fe=(ue=u.parameters)==null?void 0:ue.docs)==null?void 0:fe.source},description:{story:"iOS variant — all three sizes, off and on.",...(he=(be=u.parameters)==null?void 0:be.docs)==null?void 0:he.description}}};var ge,ye,xe,ve,Ce;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'iOS Variant — Colors',
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
  }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => <FormControlLabel key={c} control={<Switch variant="ios" color={c} defaultChecked />} label={c} />)}
    </div>
}`,...(xe=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:xe.source},description:{story:"iOS variant — all seven colors in the checked state.",...(Ce=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:Ce.description}}};var Se,ke,je,we,Fe;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Variant Comparison',
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <div style={{
      fontSize: 12,
      color: '#666',
      fontFamily: 'monospace'
    }}>default vs ios — off and on states</div>
      {(['sm', 'md', 'lg'] as const).map(s => <div key={s} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }}>
          <span style={{
        fontSize: 11,
        color: '#999',
        width: 20
      }}>{s}</span>
          <FormControlLabel control={<Switch size={s} variant="default" />} label="default off" />
          <FormControlLabel control={<Switch size={s} variant="default" defaultChecked />} label="default on" />
          <FormControlLabel control={<Switch size={s} variant="ios" />} label="ios off" />
          <FormControlLabel control={<Switch size={s} variant="ios" defaultChecked />} label="ios on" />
        </div>)}
    </div>
}`,...(je=(ke=b.parameters)==null?void 0:ke.docs)==null?void 0:je.source},description:{story:"Side-by-side comparison: default vs ios variant.",...(Fe=(we=b.parameters)==null?void 0:we.docs)==null?void 0:Fe.description}}};var ze,Oe,De,Le,Ve;h.parameters={...h.parameters,docs:{...(ze=h.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'iOS Variant — Disabled',
  args: {},
  render: () => <FormGroup row>
      <FormControlLabel control={<Switch variant="ios" disabled />} label="Off" />
      <FormControlLabel control={<Switch variant="ios" disabled checked />} label="On" />
    </FormGroup>
}`,...(De=(Oe=h.parameters)==null?void 0:Oe.docs)==null?void 0:De.source},description:{story:"iOS variant disabled states — intentionally non-interactive.",...(Ve=(Le=h.parameters)==null?void 0:Le.docs)==null?void 0:Ve.description}}};var Ie,$e,Ae,Re,Pe;g.parameters={...g.parameters,docs:{...(Ie=g.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {(['sm', 'md', 'lg'] as const).map(s => <React.Fragment key={s}>
          <FormControlLabel control={<Switch size={s} />} label={\`\${s} off\`} />
          <FormControlLabel control={<Switch size={s} defaultChecked />} label={\`\${s} on (primary)\`} />
          <FormControlLabel control={<Switch size={s} defaultChecked color="error" />} label={\`\${s} on (error)\`} />
        </React.Fragment>)}
      <FormControlLabel control={<Switch disabled />} label="disabled off" />
      <FormControlLabel control={<Switch disabled checked />} label="disabled on" />
    </div>
}`,...(Ae=($e=g.parameters)==null?void 0:$e.docs)==null?void 0:Ae.source},description:{story:"Token Audit — verifies all CSS custom properties resolve correctly.\nOpen DevTools and inspect each switch to confirm no `var(--ep-*)` fallbacks.",...(Pe=(Re=g.parameters)==null?void 0:Re.docs)==null?void 0:Pe.description}}};const qe=["Default","Checked","Sizes","Colors","Disabled","Controlled","DefaultChecked","Accessibility","IosVariant","IosSizes","IosColors","VariantComparison","IosDisabled","TokenAudit"];export{p as Accessibility,t as Checked,l as Colors,c as Controlled,s as Default,d as DefaultChecked,i as Disabled,f as IosColors,h as IosDisabled,u as IosSizes,m as IosVariant,n as Sizes,g as TokenAudit,b as VariantComparison,qe as __namedExportsOrder,Qe as default};

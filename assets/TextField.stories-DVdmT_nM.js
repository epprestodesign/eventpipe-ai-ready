import{j as e}from"./jsx-runtime-BT65X5dW.js";import{p as t,I as r}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const ve={title:"Components/Inputs/TextField",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","filled"],description:"Visual style. `outlined` has a full border; `filled` has a bottom-only border.",table:{defaultValue:{summary:"outlined"}}},size:{control:"select",options:["sm","md","lg"],description:"Category 4 (Form Inputs) — 3-tier sizing.",table:{defaultValue:{summary:"md"}}},error:{control:"boolean",description:"Colors border, label, and helper text in the error token."},disabled:{control:"boolean",description:"Prevents interaction. Applies disabled token set."},loading:{control:"boolean",description:"Shows spinner in end position, sets readOnly."},label:{control:"text"},helperText:{control:"text"},placeholder:{control:"text"},fullWidth:{control:"boolean"},required:{control:"boolean"}},args:{variant:"outlined",size:"md",label:"Label",helperText:"",placeholder:"",error:!1,disabled:!1,loading:!1,fullWidth:!1,required:!1}},o={},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[e.jsx(t,{variant:"outlined",label:"Outlined",helperText:"Outlined variant"}),e.jsx(t,{variant:"filled",label:"Filled",helperText:"Filled variant"})]})},n={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:["sm","md","lg"].map(l=>e.jsx(t,{size:l,label:`Size: ${l}`,helperText:`padding-y token: ${l}`},l))})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:[e.jsx(t,{label:"Default",helperText:"border.default token"}),e.jsx(t,{label:"Error",helperText:"border.error token",error:!0}),e.jsx(t,{label:"Disabled",helperText:"border.disabled token",disabled:!0}),e.jsx(t,{label:"Loading",helperText:"readOnly + spinner",loading:!0})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:[e.jsx(t,{label:"Default",helperText:"This is helper text."}),e.jsx(t,{label:"Error",helperText:"Something went wrong.",error:!0}),e.jsx(t,{label:"Disabled",helperText:"Field unavailable.",disabled:!0})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:[e.jsx(t,{label:"Search",startAdornment:e.jsx(r,{name:"search",size:"sm"})}),e.jsx(t,{label:"Username",startAdornment:e.jsx(r,{name:"person",size:"sm"}),helperText:"Enter your username."}),e.jsx(t,{label:"Amount",endAdornment:e.jsx(r,{name:"calendar-month",size:"sm"})}),e.jsx(t,{label:"Start + End",startAdornment:e.jsx(r,{name:"person",size:"sm"}),endAdornment:e.jsx(r,{name:"close",size:"sm"})})]})},p={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:["sm","md","lg"].map(l=>e.jsx(t,{size:l,label:`Loading (${l})`,loading:!0,defaultValue:"Validating…"},l))})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:[e.jsx(t,{variant:"filled",label:"Default",helperText:"border.default token"}),e.jsx(t,{variant:"filled",label:"Error",helperText:"border.error token",error:!0}),e.jsx(t,{variant:"filled",label:"Disabled",helperText:"border.disabled token",disabled:!0}),e.jsx(t,{variant:"filled",label:"Loading",helperText:"readOnly + spinner",loading:!0})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{label:"Full width outlined",fullWidth:!0}),e.jsx(t,{label:"Full width filled",variant:"filled",fullWidth:!0})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:360},children:[e.jsx(t,{id:"email-field",label:"Email address",helperText:"Required. We'll never share your email.",required:!0,type:"email"}),e.jsx(t,{id:"error-field",label:"Username",helperText:"Username is already taken.",error:!0,defaultValue:"john.doe"}),e.jsx(t,{id:"disabled-field",label:"Account number",helperText:"Contact support to update this field.",disabled:!0,defaultValue:"ACC-00421"})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx(t,{label:"Audit field",helperText:"Inspect computed styles"}),e.jsxs("details",{open:!0,style:{fontFamily:"monospace",fontSize:12},children:[e.jsx("summary",{style:{cursor:"pointer",marginBottom:8},children:"Expected --ep-component-text-field-* vars"}),e.jsx("pre",{style:{margin:0,lineHeight:1.6},children:["--ep-component-text-field-border-radius","--ep-component-text-field-border-width","--ep-component-text-field-border-width-focus","--ep-component-text-field-border-default","--ep-component-text-field-border-hover","--ep-component-text-field-border-focus","--ep-component-text-field-border-error","--ep-component-text-field-border-disabled","--ep-component-text-field-background-outlined","--ep-component-text-field-background-filled","--ep-component-text-field-background-disabled","--ep-component-text-field-input-color","--ep-component-text-field-input-color-disabled","--ep-component-text-field-input-color-placeholder","--ep-component-text-field-input-font-size-sm","--ep-component-text-field-input-font-size-md","--ep-component-text-field-input-font-size-lg","--ep-component-text-field-label-color","--ep-component-text-field-label-color-focus","--ep-component-text-field-label-color-error","--ep-component-text-field-label-color-disabled","--ep-component-text-field-label-translate-x","--ep-component-text-field-label-translate-y-sm","--ep-component-text-field-label-translate-y-md","--ep-component-text-field-label-translate-y-lg","--ep-component-text-field-label-font-size-sm","--ep-component-text-field-label-font-size-md","--ep-component-text-field-label-font-size-lg","--ep-component-text-field-helper-text-color","--ep-component-text-field-helper-text-color-error","--ep-component-text-field-helper-text-color-disabled","--ep-component-text-field-helper-text-font-size","--ep-component-text-field-padding-sm-y","--ep-component-text-field-padding-sm-x","--ep-component-text-field-padding-md-y","--ep-component-text-field-padding-md-x","--ep-component-text-field-padding-lg-y","--ep-component-text-field-padding-lg-x"].join(`
`)})]})]})};var u,b,h,y,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"Use the Controls panel to explore every prop combination.",...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.description}}};var v,T,j,F,z;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap'
  }}>
      <TextField variant="outlined" label="Outlined" helperText="Outlined variant" />
      <TextField variant="filled" label="Filled" helperText="Filled variant" />
    </div>
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:"`outlined` has a full border box; `filled` has a bottom-only indicator.",...(z=(F=i.parameters)==null?void 0:F.docs)==null?void 0:z.description}}};var k,A,D,S,W;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 320
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <TextField key={size} size={size} label={\`Size: \${size}\`} helperText={\`padding-y token: \${size}\`} />)}
    </div>
}`,...(D=(A=n.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:`All three Category 4 sizes. Label translateY tokens ensure the floating label
 centers correctly at each size.`,...(W=(S=n.parameters)==null?void 0:S.docs)==null?void 0:W.description}}};var w,I,E,C,V;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 320
  }}>
      <TextField label="Default" helperText="border.default token" />
      <TextField label="Error" helperText="border.error token" error />
      <TextField label="Disabled" helperText="border.disabled token" disabled />
      <TextField label="Loading" helperText="readOnly + spinner" loading />
    </div>
}`,...(E=(I=a.parameters)==null?void 0:I.docs)==null?void 0:E.source},description:{story:`All interactive states — default, hover (interactive), focused, error, disabled.
 Verify border color, label color, and helper text color against token values.`,...(V=(C=a.parameters)==null?void 0:C.docs)==null?void 0:V.description}}};var L,O,U,q,H;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 320
  }}>
      <TextField label="Default" helperText="This is helper text." />
      <TextField label="Error" helperText="Something went wrong." error />
      <TextField label="Disabled" helperText="Field unavailable." disabled />
    </div>
}`,...(U=(O=d.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:"Helper text appears below the field with its own color token per state.",...(H=(q=d.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};var $,R,M,B,P;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 320
  }}>
      <TextField label="Search" startAdornment={<Icon name="search" size="sm" />} />
      <TextField label="Username" startAdornment={<Icon name="person" size="sm" />} helperText="Enter your username." />
      <TextField label="Amount" endAdornment={<Icon name="calendar-month" size="sm" />} />
      <TextField label="Start + End" startAdornment={<Icon name="person" size="sm" />} endAdornment={<Icon name="close" size="sm" />} />
    </div>
}`,...(M=(R=s.parameters)==null?void 0:R.docs)==null?void 0:M.source},description:{story:"Leading and trailing adornments using the Icon system.",...(P=(B=s.parameters)==null?void 0:B.docs)==null?void 0:P.description}}};var _,G,Y,J,K;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 320
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <TextField key={size} size={size} label={\`Loading (\${size})\`} loading defaultValue="Validating…" />)}
    </div>
}`,...(Y=(G=p.parameters)==null?void 0:G.docs)==null?void 0:Y.source},description:{story:'Loading state replaces `endAdornment` with a CircularProgress spinner.\n Input is `readOnly` and `aria-busy="true"`.',...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var N,Q,X,Z,ee;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 320
  }}>
      <TextField variant="filled" label="Default" helperText="border.default token" />
      <TextField variant="filled" label="Error" helperText="border.error token" error />
      <TextField variant="filled" label="Disabled" helperText="border.disabled token" disabled />
      <TextField variant="filled" label="Loading" helperText="readOnly + spinner" loading />
    </div>
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Filled variant — full state matrix.",...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,le,re;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <TextField label="Full width outlined" fullWidth />
      <TextField label="Full width filled" variant="filled" fullWidth />
    </div>
}`,...(re=(le=f.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var oe,ie,ne,ae,de;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 360
  }}>
      <TextField id="email-field" label="Email address" helperText="Required. We'll never share your email." required type="email" />
      <TextField id="error-field" label="Username" helperText="Username is already taken." error defaultValue="john.doe" />
      <TextField id="disabled-field" label="Account number" helperText="Contact support to update this field." disabled defaultValue="ACC-00421" />
    </div>
}`,...(ne=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:ne.source},description:{story:'Accessibility checklist:\n- Label ↔ input association: `id` auto-generated via `useId()` if not provided.\n- `aria-busy="true"` set on loading fields.\n- Disabled fields use native `disabled` attribute (removed from tab order).\n- Error state: `error` prop sets `aria-invalid` via MUI.\n- Helper text: linked to input via `aria-describedby` (MUI handles this).\n- Required fields: MUI renders `aria-required` when `required` is set.',...(de=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:de.description}}};var se,pe,ce,me,xe;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <TextField label="Audit field" helperText="Inspect computed styles" />
      <details open style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <summary style={{
        cursor: 'pointer',
        marginBottom: 8
      }}>
          Expected --ep-component-text-field-* vars
        </summary>
        <pre style={{
        margin: 0,
        lineHeight: 1.6
      }}>{['--ep-component-text-field-border-radius', '--ep-component-text-field-border-width', '--ep-component-text-field-border-width-focus', '--ep-component-text-field-border-default', '--ep-component-text-field-border-hover', '--ep-component-text-field-border-focus', '--ep-component-text-field-border-error', '--ep-component-text-field-border-disabled', '--ep-component-text-field-background-outlined', '--ep-component-text-field-background-filled', '--ep-component-text-field-background-disabled', '--ep-component-text-field-input-color', '--ep-component-text-field-input-color-disabled', '--ep-component-text-field-input-color-placeholder', '--ep-component-text-field-input-font-size-sm', '--ep-component-text-field-input-font-size-md', '--ep-component-text-field-input-font-size-lg', '--ep-component-text-field-label-color', '--ep-component-text-field-label-color-focus', '--ep-component-text-field-label-color-error', '--ep-component-text-field-label-color-disabled', '--ep-component-text-field-label-translate-x', '--ep-component-text-field-label-translate-y-sm', '--ep-component-text-field-label-translate-y-md', '--ep-component-text-field-label-translate-y-lg', '--ep-component-text-field-label-font-size-sm', '--ep-component-text-field-label-font-size-md', '--ep-component-text-field-label-font-size-lg', '--ep-component-text-field-helper-text-color', '--ep-component-text-field-helper-text-color-error', '--ep-component-text-field-helper-text-color-disabled', '--ep-component-text-field-helper-text-font-size', '--ep-component-text-field-padding-sm-y', '--ep-component-text-field-padding-sm-x', '--ep-component-text-field-padding-md-y', '--ep-component-text-field-padding-md-x', '--ep-component-text-field-padding-lg-y', '--ep-component-text-field-padding-lg-x'].join('\\n')}</pre>
      </details>
    </div>
}`,...(ce=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ce.source},description:{story:`Compliance: every CSS property consumed by TextField must map 1-to-1
with a \`--ep-component-text-field-*\` variable. Inspect computed styles
and confirm none of the listed vars resolves to a fallback value.

Approved deviation — focus indicator:
  TextField uses border color/width change (1px → 2px) as the focus indicator
  rather than the standard \`focusRing\` outline pattern. WCAG 2.1 AA is met
  via the non-color change (border width). See deviations register.`,...(xe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:xe.description}}};const Te=["Default","Variants","Sizes","States","WithHelperText","Adornments","Loading","FilledStates","FullWidth","Accessibility","TokenAudit"];export{m as Accessibility,s as Adornments,o as Default,c as FilledStates,f as FullWidth,p as Loading,n as Sizes,a as States,x as TokenAudit,i as Variants,d as WithHelperText,Te as __namedExportsOrder,ve as default};

import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as Y}from"./index-C6mWTJJr.js";import{P as r,S as m,r as a,Q as K,R as p,e as b,U as Z}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const le={title:"Components/Form/FormControlLabel",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Wraps a form control (Checkbox, Radio, or Switch) with a clickable label. Renders a native <label> element for click-to-toggle accessibility. Forwards size, disabled, checked, onChange, value, and name to the control via cloneElement."}}},argTypes:{labelPlacement:{control:"select",options:["end","start","top","bottom"],description:"Position of the label relative to the control.",table:{defaultValue:{summary:"end"}}},size:{control:"select",options:["sm","md","lg"],description:"Controls label font size and is forwarded to the control.",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disables the control and dims the label.",table:{defaultValue:{summary:"false"}}},required:{control:"boolean",description:"Appends a required asterisk to the label.",table:{defaultValue:{summary:"false"}}},label:{control:"text"}},args:{label:"Accept terms and conditions",labelPlacement:"end",size:"md",disabled:!1,required:!1}},t={render:()=>e.jsx(r,{control:e.jsx(a,{}),label:"Send me event reminders"})},s={render:()=>e.jsx(r,{control:e.jsx(K,{}),label:"Enable email notifications",labelPlacement:"start"})},l={render:()=>{const[o,M]=Y.useState("virtual");return e.jsxs("div",{children:[e.jsx(b,{variant:"body2",color:"secondary",gutterBottom:!0,children:"Event format"}),e.jsxs(Z,{value:o,onChange:X=>M(X.target.value),children:[e.jsx(r,{control:e.jsx(p,{}),label:"Virtual",value:"virtual"}),e.jsx(r,{control:e.jsx(p,{}),label:"In-person",value:"in-person"}),e.jsx(r,{control:e.jsx(p,{}),label:"Hybrid",value:"hybrid"})]})]})}},n={render:()=>e.jsxs(m,{spacing:1,children:[e.jsx(r,{control:e.jsx(a,{}),label:"I agree to the privacy policy",required:!0}),e.jsx(r,{control:e.jsx(a,{}),label:"I accept the event code of conduct",required:!0}),e.jsx(b,{variant:"caption",color:"secondary",children:"The asterisk (*) is aria-hidden to prevent screen readers from announcing it redundantly."})]})},c={render:()=>e.jsxs(m,{spacing:1,children:[e.jsx(r,{control:e.jsx(a,{}),label:"Checkbox (disabled)",disabled:!0}),e.jsx(r,{control:e.jsx(a,{checked:!0}),label:"Checkbox checked (disabled)",disabled:!0}),e.jsx(r,{control:e.jsx(K,{}),label:"Switch (disabled)",disabled:!0}),e.jsx(r,{control:e.jsx(p,{}),label:"Radio (disabled)",disabled:!0})]})},i={render:()=>e.jsx(m,{direction:"row",spacing:4,alignItems:"flex-start",children:["end","start","top","bottom"].map(o=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(b,{variant:"caption",color:"secondary",gutterBottom:!0,children:o}),e.jsx("div",{children:e.jsx(r,{control:e.jsx(a,{checked:!0}),label:"Notify",labelPlacement:o})})]},o))})},d={render:()=>e.jsx(m,{spacing:1,children:["sm","md","lg"].map(o=>e.jsx(r,{control:e.jsx(a,{checked:!0}),label:`Size: ${o} — Registration confirmed`,size:o},o))})};var u,h,x,y,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <FormControlLabel control={<Checkbox />} label="Send me event reminders" />
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Default usage with a Checkbox control and end placement.",...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.description}}};var v,k,j,C,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <FormControlLabel control={<Switch />} label="Enable email notifications" labelPlacement="start" />
}`,...(j=(k=s.parameters)==null?void 0:k.docs)==null?void 0:j.source},description:{story:"Switch control with label placed at the start (leading label).",...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.description}}};var S,R,w,F,L;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('virtual');
    return <div>
        <Typography variant="body2" color="secondary" gutterBottom>
          Event format
        </Typography>
        <RadioGroup value={value} onChange={e => setValue(e.target.value)}>
          <FormControlLabel control={<Radio />} label="Virtual" value="virtual" />
          <FormControlLabel control={<Radio />} label="In-person" value="in-person" />
          <FormControlLabel control={<Radio />} label="Hybrid" value="hybrid" />
        </RadioGroup>
      </div>;
  }
}`,...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.source},description:{story:"Radio controls within a RadioGroup.",...(L=(F=l.parameters)==null?void 0:F.docs)==null?void 0:L.description}}};var z,V,q,P,T;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Stack spacing={1}>
      <FormControlLabel control={<Checkbox />} label="I agree to the privacy policy" required />
      <FormControlLabel control={<Checkbox />} label="I accept the event code of conduct" required />
      <Typography variant="caption" color="secondary">
        The asterisk (*) is aria-hidden to prevent screen readers from announcing it redundantly.
      </Typography>
    </Stack>
}`,...(q=(V=n.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:"Required field — asterisk displayed after the label text.",...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.description}}};var I,A,E,W,B;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Stack spacing={1}>
      <FormControlLabel control={<Checkbox />} label="Checkbox (disabled)" disabled />
      <FormControlLabel control={<Checkbox checked />} label="Checkbox checked (disabled)" disabled />
      <FormControlLabel control={<Switch />} label="Switch (disabled)" disabled />
      <FormControlLabel control={<Radio />} label="Radio (disabled)" disabled />
    </Stack>
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:"All controls in disabled state.",...(B=(W=c.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};var D,G,H,N,_;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={4} alignItems="flex-start">
      {(['end', 'start', 'top', 'bottom'] as const).map(placement => <div key={placement} style={{
      textAlign: 'center'
    }}>
          <Typography variant="caption" color="secondary" gutterBottom>
            {placement}
          </Typography>
          <div>
            <FormControlLabel control={<Checkbox checked />} label="Notify" labelPlacement={placement} />
          </div>
        </div>)}
    </Stack>
}`,...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"All four label placements shown side by side.",...(_=(N=i.parameters)==null?void 0:N.docs)==null?void 0:_.description}}};var $,O,Q,U,J;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Stack spacing={1}>
      {(['sm', 'md', 'lg'] as const).map(size => <FormControlLabel key={size} control={<Checkbox checked />} label={\`Size: \${size} — Registration confirmed\`} size={size} />)}
    </Stack>
}`,...(Q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:Q.source},description:{story:"All three sizes — sm, md, lg.",...(J=(U=d.parameters)==null?void 0:U.docs)==null?void 0:J.description}}};const ne=["WithCheckbox","WithSwitch","WithRadio","Required","Disabled","LabelPlacements","SizeVariants"];export{c as Disabled,i as LabelPlacements,n as Required,d as SizeVariants,t as WithCheckbox,l as WithRadio,s as WithSwitch,ne as __namedExportsOrder,le as default};

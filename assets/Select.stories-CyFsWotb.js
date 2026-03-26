import{j as e}from"./jsx-runtime-BT65X5dW.js";import{r as z,R as Qe}from"./index-C6mWTJJr.js";import{am as Xe,T as j,ai as Ze,ak as et,an as tt,al as lt,ao as V,ap as l,aq as s,ar as rt,S as at,I as ot,e as F}from"./index-BlH9IZLb.js";import{u as st,_ as it,a as T}from"./GlobalStyles-BQGcaa1d.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bq2HnrkM.js";const nt=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],dt=t=>{const{classes:a,inset:i,primary:o,secondary:W,dense:w}=t;return et({root:["root",i&&"inset",w&&"dense",o&&W&&"multiline"],primary:["primary"],secondary:["secondary"]},tt,a)},ct=lt("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:i}=t;return[{[`& .${V.primary}`]:a.primary},{[`& .${V.secondary}`]:a.secondary},a.root,i.inset&&a.inset,i.primary&&i.secondary&&a.multiline,i.dense&&a.dense]}})(({ownerState:t})=>T({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),pt=z.forwardRef(function(a,i){const o=st({props:a,name:"MuiListItemText"}),{children:W,className:w,disableTypography:I=!1,inset:He=!1,primary:O,primaryTypographyProps:M,secondary:Ge,secondaryTypographyProps:Je}=o,Ke=it(o,nt),{dense:C}=z.useContext(Xe);let n=O??W,d=Ge;const L=T({},o,{disableTypography:I,inset:He,primary:!!n,secondary:!!d,dense:C}),D=dt(L);return n!=null&&n.type!==j&&!I&&(n=e.jsx(j,T({variant:C?"body2":"body1",className:D.primary,component:M!=null&&M.variant?void 0:"span",display:"block"},M,{children:n}))),d!=null&&d.type!==j&&!I&&(d=e.jsx(j,T({variant:"body2",className:D.secondary,color:"text.secondary",display:"block"},Je,{children:d}))),e.jsxs(ct,T({className:Ze(D.root,w),ownerState:L,ref:i},Ke,{children:[n,d]}))}),yt={title:"Components/Inputs/Select",component:l,tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","filled"],description:"Visual style. `outlined` has a full border; `filled` has a bottom-only border.",table:{defaultValue:{summary:"outlined"}}},size:{control:"select",options:["sm","md","lg"],description:"Category 4 (Form Inputs) — 3-tier sizing.",table:{defaultValue:{summary:"md"}}},error:{control:"boolean",description:"Colors border, label, and helper text in the error token."},disabled:{control:"boolean",description:"Prevents interaction. Applies disabled token set."},loading:{control:"boolean",description:"Shows spinner; prevents dropdown open. aria-busy on trigger."},label:{control:"text"},helperText:{control:"text"},placeholder:{control:"text"},fullWidth:{control:"boolean"},required:{control:"boolean"},multiple:{control:"boolean"},displayEmpty:{control:"boolean"},children:{table:{disable:!0}}},args:{variant:"outlined",size:"md",label:"Label",error:!1,disabled:!1,loading:!1,fullWidth:!1,required:!1,multiple:!1,displayEmpty:!1},decorators:[t=>e.jsx("div",{style:{minWidth:240},children:e.jsx(t,{})})]},E=[{value:"option-1",label:"Option 1"},{value:"option-2",label:"Option 2"},{value:"option-3",label:"Option 3"},{value:"option-4",label:"Option 4 (disabled)",disabled:!0}],r=()=>E.map(t=>e.jsx(s,{value:t.value,disabled:t.disabled,children:t.label},t.value)),c={args:{label:"Select an option"},render:t=>e.jsx(l,{...t,children:r()})},p={args:{},render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[e.jsx("div",{style:{minWidth:200},children:e.jsx(l,{variant:"outlined",label:"Outlined",helperText:"Outlined variant",fullWidth:!0,children:r()})}),e.jsx("div",{style:{minWidth:200},children:e.jsx(l,{variant:"filled",label:"Filled",helperText:"Filled variant",fullWidth:!0,children:r()})})]})},m={args:{},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:["sm","md","lg"].map(t=>e.jsx(l,{size:t,label:`Size: ${t}`,children:r()},t))})},u={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:[e.jsx(l,{label:"Default",helperText:"border.default token",children:r()}),e.jsx(l,{label:"Error",helperText:"Something went wrong.",error:!0,children:r()}),e.jsx(l,{label:"Disabled",helperText:"Field unavailable.",disabled:!0,children:r()}),e.jsx(l,{label:"Loading",helperText:"Fetching options…",loading:!0,children:r()})]})},h={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:[e.jsx(l,{label:"Category",placeholder:"Choose a category",displayEmpty:!0,children:r()}),e.jsx(l,{placeholder:"No label, just placeholder",displayEmpty:!0,children:r()})]})},g={args:{},render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(l,{label:"Tags",multiple:!0,helperText:"Select all that apply.",children:E.filter(t=>!t.disabled).map(t=>e.jsx(s,{value:t.value,children:t.label},t.value))})})},b={args:{},render:function(){const[a,i]=Qe.useState([]);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(l,{label:"Assign roles",multiple:!0,value:a,onChange:o=>i(o.target.value),renderValue:o=>o.join(", ")||"None",helperText:`${a.length} selected`,children:E.filter(o=>!o.disabled).map(o=>e.jsxs(s,{value:o.value,children:[e.jsx(rt,{checked:a.includes(o.value),size:"small",disableRipple:!0,sx:{p:"2px",mr:1}}),e.jsx(pt,{primary:o.label})]},o.value))})})}},x={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:[e.jsx(l,{variant:"filled",label:"Default",helperText:"border.default token",children:r()}),e.jsx(l,{variant:"filled",label:"Error",helperText:"border.error token",error:!0,children:r()}),e.jsx(l,{variant:"filled",label:"Disabled",helperText:"border.disabled token",disabled:!0,children:r()}),e.jsx(l,{variant:"filled",label:"Loading",helperText:"Fetching options…",loading:!0,children:r()})]})},k={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(l,{label:"Full width outlined",fullWidth:!0,children:r()}),e.jsx(l,{label:"Full width filled",variant:"filled",fullWidth:!0,children:r()})]})},y={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:360},children:[e.jsxs(l,{id:"role-field",label:"User role",helperText:"Required. Determines access level.",required:!0,children:[e.jsx(s,{value:"admin",children:"Administrator"}),e.jsx(s,{value:"editor",children:"Editor"}),e.jsx(s,{value:"viewer",children:"Viewer"})]}),e.jsxs(l,{id:"error-field",label:"Department",helperText:"Please select a valid department.",error:!0,defaultValue:"",children:[e.jsx(s,{value:"eng",children:"Engineering"}),e.jsx(s,{value:"design",children:"Design"})]}),e.jsxs(l,{id:"disabled-field",label:"Region",helperText:"Contact admin to change region.",disabled:!0,defaultValue:"us-east",children:[e.jsx(s,{value:"us-east",children:"US East"}),e.jsx(s,{value:"us-west",children:"US West"})]})]})},Ye=[{id:"conf",name:"Conference",category:"Multi-day",active:!0},{id:"workshop",name:"Workshop",category:"Single-day",active:!0},{id:"webinar",name:"Webinar",category:"Virtual",active:!0},{id:"tradeshow",name:"Trade Show",category:"Multi-day",active:!0},{id:"meetup",name:"Meetup",category:"Single-day",active:!1}],v={args:{},render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(l,{label:"Event type",helperText:"Uses options prop with getOptionLabel/getOptionValue/getOptionDisabled",options:Ye,getOptionLabel:t=>t.name,getOptionValue:t=>t.id,getOptionDisabled:t=>!t.active,placeholder:"Select event type"})})},f={args:{},render:()=>e.jsx("div",{style:{maxWidth:360},children:e.jsx(l,{label:"Event type",helperText:"Custom renderOption with Icon + category badge",options:Ye,getOptionLabel:t=>t.name,getOptionValue:t=>t.id,getOptionDisabled:t=>!t.active,renderOption:t=>{const a=t.data;return e.jsx(s,{value:t.value,disabled:t.disabled,children:e.jsxs(at,{direction:"row",spacing:1,alignItems:"center",sx:{width:"100%"},children:[e.jsx(ot,{name:"calendar",size:"sm"}),e.jsx(F,{variant:"body2",children:t.label}),e.jsx(F,{variant:"caption",color:"secondary",sx:{marginLeft:"auto !important"},children:a.category})]})},t.value)},placeholder:"Choose an event type"})})},S={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx(l,{label:"Audit field",helperText:"Inspect computed styles",children:r()}),e.jsxs("details",{open:!0,style:{fontFamily:"monospace",fontSize:12},children:[e.jsx("summary",{style:{cursor:"pointer",marginBottom:8},children:"Expected --ep-component-select-* vars (60 total)"}),e.jsx("pre",{style:{margin:0,lineHeight:1.6},children:["── Trigger ──────────────────────────────────────────","--ep-component-select-border-radius","--ep-component-select-border-width / border-width-focus","--ep-component-select-border-default / hover / focus / error / disabled","--ep-component-select-background-outlined / filled / disabled","--ep-component-select-input-color / color-disabled / color-placeholder","--ep-component-select-input-font-size-{sm|md|lg}","--ep-component-select-label-color / color-focus / color-error / color-disabled","--ep-component-select-label-translate-x / translate-y-{sm|md|lg}","--ep-component-select-label-font-size-{sm|md|lg}","--ep-component-select-helper-text-color / color-error / color-disabled / font-size","--ep-component-select-padding-{sm|md|lg}-y / -x","--ep-component-select-icon-color / color-disabled","","── Menu (portal — resolves from :root) ───────────────","--ep-component-select-menu-background","--ep-component-select-menu-border-radius","--ep-component-select-menu-item-color / color-selected / color-disabled","--ep-component-select-menu-item-background / -hover / -selected / -selected-hover / -disabled","--ep-component-select-menu-item-font-size-{sm|md|lg}","--ep-component-select-menu-item-padding-{sm|md|lg}-y / -x"].join(`
`)})]})]})};var P,A,R,N,U;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Select an option'
  },
  render: (args: SelectProps) => <Select {...args}>{makeItems()}</Select>
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source},description:{story:"Use the Controls panel to explore every prop combination.",...(U=(N=c.parameters)==null?void 0:N.docs)==null?void 0:U.description}}};var q,_,$,B,Y;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap'
  }}>
      <div style={{
      minWidth: 200
    }}>
        <Select variant="outlined" label="Outlined" helperText="Outlined variant" fullWidth>
          {makeItems()}
        </Select>
      </div>
      <div style={{
      minWidth: 200
    }}>
        <Select variant="filled" label="Filled" helperText="Filled variant" fullWidth>
          {makeItems()}
        </Select>
      </div>
    </div>
}`,...($=(_=p.parameters)==null?void 0:_.docs)==null?void 0:$.source},description:{story:"`outlined` has a full border box; `filled` has a bottom-only indicator.",...(Y=(B=p.parameters)==null?void 0:B.docs)==null?void 0:Y.description}}};var H,G,J,K,Q;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 320
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <Select key={size} size={size} label={\`Size: \${size}\`}>
          {makeItems()}
        </Select>)}
    </div>
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"All three Category 4 sizes. Label translateY tokens ensure correct centering.",...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var X,Z,ee,te,le;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 320
  }}>
      <Select label="Default" helperText="border.default token">{makeItems()}</Select>
      <Select label="Error" helperText="Something went wrong." error>{makeItems()}</Select>
      <Select label="Disabled" helperText="Field unavailable." disabled>{makeItems()}</Select>
      <Select label="Loading" helperText="Fetching options…" loading>{makeItems()}</Select>
    </div>
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:`All interactive states — default, error, disabled, loading.
 Verify border color, label color, and helper text color against token values.`,...(le=(te=u.parameters)==null?void 0:te.docs)==null?void 0:le.description}}};var re,ae,oe,se,ie;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 320
  }}>
      <Select label="Category" placeholder="Choose a category" displayEmpty>
        {makeItems()}
      </Select>
      <Select placeholder="No label, just placeholder" displayEmpty>
        {makeItems()}
      </Select>
    </div>
}`,...(oe=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:oe.source},description:{story:"Placeholder shown when no value is selected.\n Implemented via `displayEmpty` + internal `renderValue` — no MUI workaround needed.",...(ie=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var ne,de,ce,pe,me;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    maxWidth: 320
  }}>
      <Select label="Tags" multiple helperText="Select all that apply.">
        {OPTIONS.filter(o => !o.disabled).map(o => <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>)}
      </Select>
    </div>
}`,...(ce=(de=g.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:"Multiple selection. Selected items highlighted with `backgroundSelected` token.",...(me=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var ue,he,ge,be,xe;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {},
  render: function MultipleCheckboxStory() {
    const [selected, setSelected] = React.useState<string[]>([]);
    return <div style={{
      maxWidth: 320
    }}>
        <Select label="Assign roles" multiple value={selected} onChange={e => setSelected(e.target.value as string[])} renderValue={val => (val as string[]).join(', ') || 'None'} helperText={\`\${selected.length} selected\`}>
          {OPTIONS.filter(o => !o.disabled).map(o => <MenuItem key={o.value} value={o.value}>
              <Checkbox checked={selected.includes(o.value)} size="small" disableRipple sx={{
            p: '2px',
            mr: 1
          }} />
              <ListItemText primary={o.label} />
            </MenuItem>)}
        </Select>
      </div>;
  }
}`,...(ge=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ge.source},description:{story:`Controlled multi-select with Checkbox + ListItemText inside MenuItem.
 Demonstrates that Select does not manage checkbox state — that is the caller's responsibility.`,...(xe=(be=b.parameters)==null?void 0:be.docs)==null?void 0:xe.description}}};var ye,ve,fe,Se,Te;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 320
  }}>
      <Select variant="filled" label="Default" helperText="border.default token">{makeItems()}</Select>
      <Select variant="filled" label="Error" helperText="border.error token" error>{makeItems()}</Select>
      <Select variant="filled" label="Disabled" helperText="border.disabled token" disabled>{makeItems()}</Select>
      <Select variant="filled" label="Loading" helperText="Fetching options…" loading>{makeItems()}</Select>
    </div>
}`,...(fe=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:fe.source},description:{story:"Filled variant — full state matrix.",...(Te=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:Te.description}}};var Ie,je,ke;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Select label="Full width outlined" fullWidth>{makeItems()}</Select>
      <Select label="Full width filled" variant="filled" fullWidth>{makeItems()}</Select>
    </div>
}`,...(ke=(je=k.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var We,we,Me,De,Ee;y.parameters={...y.parameters,docs:{...(We=y.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 360
  }}>
      <Select id="role-field" label="User role" helperText="Required. Determines access level." required>
        <MenuItem value="admin">Administrator</MenuItem>
        <MenuItem value="editor">Editor</MenuItem>
        <MenuItem value="viewer">Viewer</MenuItem>
      </Select>
      <Select id="error-field" label="Department" helperText="Please select a valid department." error defaultValue="">
        <MenuItem value="eng">Engineering</MenuItem>
        <MenuItem value="design">Design</MenuItem>
      </Select>
      <Select id="disabled-field" label="Region" helperText="Contact admin to change region." disabled defaultValue="us-east">
        <MenuItem value="us-east">US East</MenuItem>
        <MenuItem value="us-west">US West</MenuItem>
      </Select>
    </div>
}`,...(Me=(we=y.parameters)==null?void 0:we.docs)==null?void 0:Me.source},description:{story:'Accessibility checklist:\n- Label ↔ trigger: `labelId` on InputLabel, `labelId` prop on MuiSelect — linked via id.\n- `id` auto-generated via `useId()` if not provided.\n- Error state: `error` on FormControl propagates `aria-invalid` to trigger.\n- Required: `required` on FormControl sets `aria-required` on trigger.\n- Helper text: linked via `aria-describedby="${id}-helper"`.\n- Loading: `aria-busy="true"` on trigger; dropdown `open` forced to false.\n- Disabled: native disabled — removed from tab order.\n- Dropdown: `role="listbox"` (MUI); options have `role="option"`.\n- Disabled option: `aria-disabled="true"` (MUI MenuItem).',...(Ee=(De=y.parameters)==null?void 0:De.docs)==null?void 0:Ee.description}}};var Oe,Ce,Le,ze,Ve;v.parameters={...v.parameters,docs:{...(Oe=v.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    maxWidth: 320
  }}>
      <Select label="Event type" helperText="Uses options prop with getOptionLabel/getOptionValue/getOptionDisabled" options={EVENT_TYPES} getOptionLabel={item => (item as EventType).name} getOptionValue={item => (item as EventType).id} getOptionDisabled={item => !(item as EventType).active} placeholder="Select event type" />
    </div>
}`,...(Le=(Ce=v.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source},description:{story:"Declarative options prop with custom getter functions — no MenuItem children needed.",...(Ve=(ze=v.parameters)==null?void 0:ze.docs)==null?void 0:Ve.description}}};var Fe,Pe,Ae,Re,Ne;f.parameters={...f.parameters,docs:{...(Fe=f.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    maxWidth: 360
  }}>
      <Select label="Event type" helperText="Custom renderOption with Icon + category badge" options={EVENT_TYPES} getOptionLabel={item => (item as EventType).name} getOptionValue={item => (item as EventType).id} getOptionDisabled={item => !(item as EventType).active} renderOption={(option: SelectOption) => {
      const event = option.data as EventType;
      return <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{
          width: '100%'
        }}>
                <Icon name="calendar" size="sm" />
                <Typography variant="body2">{option.label}</Typography>
                <Typography variant="caption" color="secondary" sx={{
            marginLeft: 'auto !important'
          }}>
                  {event.category}
                </Typography>
              </Stack>
            </MenuItem>;
    }} placeholder="Choose an event type" />
    </div>
}`,...(Ae=(Pe=f.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source},description:{story:"Custom option rendering with Stack + Icon inside each MenuItem.",...(Ne=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:Ne.description}}};var Ue,qe,_e,$e,Be;S.parameters={...S.parameters,docs:{...(Ue=S.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <Select label="Audit field" helperText="Inspect computed styles">
        {makeItems()}
      </Select>
      <details open style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <summary style={{
        cursor: 'pointer',
        marginBottom: 8
      }}>
          Expected --ep-component-select-* vars (60 total)
        </summary>
        <pre style={{
        margin: 0,
        lineHeight: 1.6
      }}>{['── Trigger ──────────────────────────────────────────', '--ep-component-select-border-radius', '--ep-component-select-border-width / border-width-focus', '--ep-component-select-border-default / hover / focus / error / disabled', '--ep-component-select-background-outlined / filled / disabled', '--ep-component-select-input-color / color-disabled / color-placeholder', '--ep-component-select-input-font-size-{sm|md|lg}', '--ep-component-select-label-color / color-focus / color-error / color-disabled', '--ep-component-select-label-translate-x / translate-y-{sm|md|lg}', '--ep-component-select-label-font-size-{sm|md|lg}', '--ep-component-select-helper-text-color / color-error / color-disabled / font-size', '--ep-component-select-padding-{sm|md|lg}-y / -x', '--ep-component-select-icon-color / color-disabled', '', '── Menu (portal — resolves from :root) ───────────────', '--ep-component-select-menu-background', '--ep-component-select-menu-border-radius', '--ep-component-select-menu-item-color / color-selected / color-disabled', '--ep-component-select-menu-item-background / -hover / -selected / -selected-hover / -disabled', '--ep-component-select-menu-item-font-size-{sm|md|lg}', '--ep-component-select-menu-item-padding-{sm|md|lg}-y / -x'].join('\\n')}</pre>
      </details>
    </div>
}`,...(_e=(qe=S.parameters)==null?void 0:qe.docs)==null?void 0:_e.source},description:{story:`Compliance: every CSS property consumed by Select must map 1-to-1
with a \`--ep-component-select-*\` variable. Inspect computed styles
and confirm none of the listed vars resolves to a fallback value.

Approved deviation — focus indicator:
  Uses border color/width change (1px → 2px) not \`focusRing\` outline.
  WCAG 2.1 AA met via non-color change. See deviations register.

Note — menu portal theming:
  Menu dropdown renders in a MUI Portal (document.body). CSS custom
  properties resolve from :root and are available globally. Dark mode
  requires \`.dark\` class on <html> or <body> to reach portal elements.`,...(Be=($e=S.parameters)==null?void 0:$e.docs)==null?void 0:Be.description}}};const vt=["Default","Variants","Sizes","States","Placeholder","Multiple","MultipleWithCheckboxes","FilledStates","FullWidth","Accessibility","WithOptions","WithRenderOption","TokenAudit"];export{y as Accessibility,c as Default,x as FilledStates,k as FullWidth,g as Multiple,b as MultipleWithCheckboxes,h as Placeholder,m as Sizes,u as States,S as TokenAudit,p as Variants,v as WithOptions,f as WithRenderOption,vt as __namedExportsOrder,yt as default};

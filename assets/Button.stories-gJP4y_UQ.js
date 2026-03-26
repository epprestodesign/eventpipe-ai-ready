import{j as e}from"./jsx-runtime-BT65X5dW.js";import{B as n,I as r}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const Ie={title:"Components/Inputs/Button",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["contained","outlined","text","soft"],description:"Visual style of the button",table:{defaultValue:{summary:"contained"}}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Category 1 (Action Controls) — 5-tier sizing scale",table:{defaultValue:{summary:"md"}}},color:{control:"select",options:["primary","secondary","error","warning","info","success","neutral"],description:"Color palette. Uses component tokens; does not access semantic layer directly.",table:{defaultValue:{summary:"primary"}}},disabled:{control:"boolean",description:"Native disabled. Removed from tab order.",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Async loading state. Uses aria-disabled; stays in tab order.",table:{defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Stretch to 100% container width.",table:{defaultValue:{summary:"false"}}},children:{control:"text",description:"Button label"},startSlot:{control:!1},endSlot:{control:!1},href:{control:"text"},onClick:{action:"clicked"}},args:{children:"Button",variant:"contained",size:"md",color:"primary",disabled:!1,loading:!1,fullWidth:!1}},s={},i={render:t=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(n,{...t,variant:"contained",children:"Contained"}),e.jsx(n,{...t,variant:"outlined",children:"Outlined"}),e.jsx(n,{...t,variant:"text",children:"Text"}),e.jsx(n,{...t,variant:"soft",children:"Soft"})]})},d={render:t=>e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:["xs","sm","md","lg","xl"].map(o=>e.jsx(n,{...t,size:o,children:o},o))})},l={render:t=>e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:["primary","secondary","error","warning","success","neutral"].map(o=>e.jsx(n,{...t,color:o,children:o},o))})},p={parameters:{layout:"padded"},render:()=>{const t=["contained","outlined","text","soft"],o=["primary","secondary","error","warning","success","neutral"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx("div",{style:{display:"flex",gap:8,paddingLeft:80},children:o.map(a=>e.jsx("span",{style:{width:90,fontSize:11,color:"#888",textAlign:"center"},children:a},a))}),t.map(a=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx("span",{style:{width:80,fontSize:12,color:"#555",flexShrink:0},children:a}),o.map(v=>e.jsx("div",{style:{width:90,display:"flex",justifyContent:"center"},children:e.jsx(n,{variant:a,color:v,size:"sm",children:v})},v))]},a))]})}},c={render:t=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(n,{...t,variant:"contained",disabled:!0,children:"Contained"}),e.jsx(n,{...t,variant:"outlined",disabled:!0,children:"Outlined"}),e.jsx(n,{...t,variant:"text",disabled:!0,children:"Text"}),e.jsx(n,{...t,variant:"soft",disabled:!0,children:"Soft"})]})},u={render:t=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(n,{...t,variant:"contained",loading:!0,children:"Save"}),e.jsx(n,{...t,variant:"outlined",loading:!0,children:"Save"}),e.jsx(n,{...t,variant:"text",loading:!0,children:"Save"}),e.jsx(n,{...t,variant:"soft",loading:!0,children:"Save"})]})},m={render:t=>e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:["xs","sm","md","lg","xl"].map(o=>e.jsx(n,{...t,size:o,loading:!0,children:"Saving"},o))})},x={render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(n,{...t,startSlot:e.jsx(r,{name:"add"}),children:"Add item"}),e.jsx(n,{...t,variant:"outlined",startSlot:e.jsx(r,{name:"download"}),children:"Export"}),e.jsx(n,{...t,variant:"text",endSlot:e.jsx(r,{name:"chevron-right"}),children:"Continue"}),e.jsx(n,{...t,variant:"soft",startSlot:e.jsx(r,{name:"add"}),endSlot:e.jsx(r,{name:"chevron-right"}),children:"New"})]}),e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:["xs","sm","md","lg","xl"].map(o=>e.jsx(n,{size:o,startSlot:e.jsx(r,{name:"add",size:o}),children:o},o))})]})},y={parameters:{layout:"padded"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,width:400},children:[e.jsx(n,{...t,fullWidth:!0,variant:"contained",children:"Contained full width"}),e.jsx(n,{...t,fullWidth:!0,variant:"outlined",children:"Outlined full width"}),e.jsx(n,{...t,fullWidth:!0,variant:"text",children:"Text full width"}),e.jsx(n,{...t,fullWidth:!0,variant:"soft",children:"Soft full width"})]})},g={args:{href:"#anchor",children:"Open link",startSlot:e.jsx(r,{name:"chevron-right"})}},f={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const t=["--ep-component-button-border-radius","--ep-component-button-padding-xs-y","--ep-component-button-padding-xs-x","--ep-component-button-padding-sm-y","--ep-component-button-padding-sm-x","--ep-component-button-padding-md-y","--ep-component-button-padding-md-x","--ep-component-button-padding-lg-y","--ep-component-button-padding-lg-x","--ep-component-button-padding-xl-y","--ep-component-button-padding-xl-x","--ep-component-button-font-size-xs","--ep-component-button-font-size-sm","--ep-component-button-font-size-md","--ep-component-button-font-size-lg","--ep-component-button-font-size-xl","--ep-component-button-contained-primary-background","--ep-component-button-contained-primary-background-hover","--ep-component-button-contained-primary-text","--ep-component-button-disabled-background","--ep-component-button-disabled-text","--ep-component-button-focus-ring-color","--ep-component-button-focus-ring-width","--ep-component-button-focus-ring-offset"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsx("p",{style:{marginBottom:16,color:"#666"},children:"Open DevTools → Computed to verify these vars resolve. Blank = missing token."}),e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",padding:"4px 8px",background:"#f5f5f5"},children:"CSS variable"}),e.jsx("th",{style:{textAlign:"left",padding:"4px 8px",background:"#f5f5f5"},children:"Swatch"})]})}),e.jsx("tbody",{children:t.map(o=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 8px",color:"#333"},children:o}),e.jsx("td",{style:{padding:"4px 8px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${o})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},o))})]}),e.jsx("div",{style:{marginTop:24},children:e.jsx(n,{children:"Live preview"})})]})}};var h,b,B,S,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(B=(b=s.parameters)==null?void 0:b.docs)==null?void 0:B.source},description:{story:"Use the Controls panel to explore every prop combination.",...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};var w,k,z,C,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: ButtonProps) => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button {...args} variant="contained">Contained</Button>
      <Button {...args} variant="outlined">Outlined</Button>
      <Button {...args} variant="text">Text</Button>
      <Button {...args} variant="soft">Soft</Button>
    </div>
}`,...(z=(k=i.parameters)==null?void 0:k.docs)==null?void 0:z.source},description:{story:"All four variants side-by-side.\n`soft` is an EP addition — tinted low-emphasis background not in MUI core.",...(W=(C=i.parameters)==null?void 0:C.docs)==null?void 0:W.description}}};var I,A,T,D,O;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: ButtonProps) => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <Button key={size} {...args} size={size}>{size}</Button>)}
    </div>
}`,...(T=(A=d.parameters)==null?void 0:A.docs)==null?void 0:T.source},description:{story:"5-tier size scale (Category 1 — Action Controls).\n`xs` and `xl` are EP additions beyond standard MUI sizes.",...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.description}}};var L,V,P,E,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: ButtonProps) => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {(['primary', 'secondary', 'error', 'warning', 'success', 'neutral'] as const).map(color => <Button key={color} {...args} color={color}>{color}</Button>)}
    </div>
}`,...(P=(V=l.parameters)==null?void 0:V.docs)==null?void 0:P.source},description:{story:"Primary palette. All values come from `--ep-component-button-contained-*` tokens.",...(N=(E=l.parameters)==null?void 0:E.docs)==null?void 0:N.description}}};var U,F,M,R,_;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const variants = ['contained', 'outlined', 'text', 'soft'] as const;
    const colors = ['primary', 'secondary', 'error', 'warning', 'success', 'neutral'] as const;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <div style={{
        display: 'flex',
        gap: 8,
        paddingLeft: 80
      }}>
          {colors.map(c => <span key={c} style={{
          width: 90,
          fontSize: 11,
          color: '#888',
          textAlign: 'center'
        }}>{c}</span>)}
        </div>
        {variants.map(variant => <div key={variant} style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
            <span style={{
          width: 80,
          fontSize: 12,
          color: '#555',
          flexShrink: 0
        }}>{variant}</span>
            {colors.map(color => <div key={color} style={{
          width: 90,
          display: 'flex',
          justifyContent: 'center'
        }}>
                <Button variant={variant} color={color} size="sm">{color}</Button>
              </div>)}
          </div>)}
      </div>;
  }
}`,...(M=(F=p.parameters)==null?void 0:F.docs)==null?void 0:M.source},description:{story:`Full matrix: 4 variants × key colors.
Validates token coverage — every cell must resolve a CSS var with a real value.
Note: outlined/text/soft support fewer colors by token design (see button.json).`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var $,K,Y,q,G;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args: ButtonProps) => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button {...args} variant="contained" disabled>Contained</Button>
      <Button {...args} variant="outlined" disabled>Outlined</Button>
      <Button {...args} variant="text" disabled>Text</Button>
      <Button {...args} variant="soft" disabled>Soft</Button>
    </div>
}`,...(Y=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Y.source},description:{story:"Disabled via native `disabled` attr — removed from tab order.\nAll four variants shown to confirm token-driven disabled styling.",...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var H,J,Q,X,Z;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: ButtonProps) => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button {...args} variant="contained" loading>Save</Button>
      <Button {...args} variant="outlined" loading>Save</Button>
      <Button {...args} variant="text" loading>Save</Button>
      <Button {...args} variant="soft" loading>Save</Button>
    </div>
}`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:'Loading state — spinner overlays the label, dimensions preserved.\nUses `aria-disabled="true"` + `aria-busy="true"` (NOT native disabled).\nButton remains in tab order so keyboard users can perceive the loading state.',...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,te,ne,oe,re;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: (args: ButtonProps) => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <Button key={size} {...args} size={size} loading>Saving</Button>)}
    </div>
}`,...(ne=(te=m.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"Loading across all sizes — spinner scales with button size token.",...(re=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:re.description}}};var ae,se,ie,de,le;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: (args: ButtonProps) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>
        <Button {...args} startSlot={<Icon name="add" />}>Add item</Button>
        <Button {...args} variant="outlined" startSlot={<Icon name="download" />}>Export</Button>
        <Button {...args} variant="text" endSlot={<Icon name="chevron-right" />}>Continue</Button>
        <Button {...args} variant="soft" startSlot={<Icon name="add" />} endSlot={<Icon name="chevron-right" />}>
          New
        </Button>
      </div>
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <Button key={size} size={size} startSlot={<Icon name="add" size={size} />}>{size}</Button>)}
      </div>
    </div>
}`,...(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source},description:{story:"`startSlot` and `endSlot` replace MUI's `startIcon`/`endIcon`.\nSlots accept any ReactNode; wrapper handles inline-flex + spacing.",...(le=(de=x.parameters)==null?void 0:de.docs)==null?void 0:le.description}}};var pe,ce,ue;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: (args: ButtonProps) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    width: 400
  }}>
      <Button {...args} fullWidth variant="contained">Contained full width</Button>
      <Button {...args} fullWidth variant="outlined">Outlined full width</Button>
      <Button {...args} fullWidth variant="text">Text full width</Button>
      <Button {...args} fullWidth variant="soft">Soft full width</Button>
    </div>
}`,...(ue=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,xe,ge,fe,ye;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    href: '#anchor',
    children: 'Open link',
    startSlot: <Icon name="chevron-right" />
  }
}`,...(ge=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:ge.source},description:{story:"When `href` is provided the button renders as `<a>`.\nKeyboard and pointer interaction behave identically to a native button.",...(ye=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:ye.description}}};var ve,he,be,Be,Se;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const vars = ['--ep-component-button-border-radius', '--ep-component-button-padding-xs-y', '--ep-component-button-padding-xs-x', '--ep-component-button-padding-sm-y', '--ep-component-button-padding-sm-x', '--ep-component-button-padding-md-y', '--ep-component-button-padding-md-x', '--ep-component-button-padding-lg-y', '--ep-component-button-padding-lg-x', '--ep-component-button-padding-xl-y', '--ep-component-button-padding-xl-x', '--ep-component-button-font-size-xs', '--ep-component-button-font-size-sm', '--ep-component-button-font-size-md', '--ep-component-button-font-size-lg', '--ep-component-button-font-size-xl', '--ep-component-button-contained-primary-background', '--ep-component-button-contained-primary-background-hover', '--ep-component-button-contained-primary-text', '--ep-component-button-disabled-background', '--ep-component-button-disabled-text', '--ep-component-button-focus-ring-color', '--ep-component-button-focus-ring-width', '--ep-component-button-focus-ring-offset'];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <p style={{
        marginBottom: 16,
        color: '#666'
      }}>
          Open DevTools → Computed to verify these vars resolve. Blank = missing token.
        </p>
        <table style={{
        borderCollapse: 'collapse',
        width: '100%'
      }}>
          <thead>
            <tr>
              <th style={{
              textAlign: 'left',
              padding: '4px 8px',
              background: '#f5f5f5'
            }}>CSS variable</th>
              <th style={{
              textAlign: 'left',
              padding: '4px 8px',
              background: '#f5f5f5'
            }}>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {vars.map(v => <tr key={v} style={{
            borderBottom: '1px solid #eee'
          }}>
                <td style={{
              padding: '4px 8px',
              color: '#333'
            }}>{v}</td>
                <td style={{
              padding: '4px 8px'
            }}>
                  <span style={{
                display: 'inline-block',
                width: 16,
                height: 16,
                background: \`var(\${v})\`,
                border: '1px solid #ccc',
                verticalAlign: 'middle'
              }} />
                </td>
              </tr>)}
          </tbody>
        </table>
        <div style={{
        marginTop: 24
      }}>
          <Button>Live preview</Button>
        </div>
      </div>;
  }
}`,...(be=(he=f.parameters)==null?void 0:he.docs)==null?void 0:be.source},description:{story:`Every CSS custom property referenced by the Button component.
Open browser DevTools → Computed to verify every --ep-component-button-*
resolves to a real value (no empty string / undefined).

Rule: Button must ONLY read from --ep-component-button-* namespace.`,...(Se=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:Se.description}}};const Ae=["Default","Variants","Sizes","Colors","VariantColorMatrix","Disabled","Loading","LoadingSizes","WithSlots","FullWidth","AsLink","TokenAudit"];export{g as AsLink,l as Colors,s as Default,c as Disabled,y as FullWidth,u as Loading,m as LoadingSizes,d as Sizes,f as TokenAudit,p as VariantColorMatrix,i as Variants,x as WithSlots,Ae as __namedExportsOrder,Ie as default};

import{j as e}from"./jsx-runtime-BT65X5dW.js";import{A as n,I as b,B as f}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const Ie={title:"Components/Feedback/Alert",component:n,tags:["autodocs"],argTypes:{severity:{control:"select",options:["error","warning","info","success"],description:"Drives icon and palette. Uses severity not color.",table:{defaultValue:{summary:"info"}}},variant:{control:"select",options:["standard","filled","outlined","soft"],description:"`soft` is an EP addition. `standard` is the MUI default.",table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Category 3 (Feedback + Navigation) — 5-tier sizing.",table:{defaultValue:{summary:"md"}}},onClose:{action:"closed"},children:{control:"text"}},args:{severity:"info",variant:"standard",size:"md",children:"This is an alert message."}},i={},a={parameters:{layout:"padded"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(n,{...r,severity:"error",children:[e.jsx("strong",{children:"Error"})," — Something went wrong. Please try again."]}),e.jsxs(n,{...r,severity:"warning",children:[e.jsx("strong",{children:"Warning"})," — This action may have unintended consequences."]}),e.jsxs(n,{...r,severity:"info",children:[e.jsx("strong",{children:"Info"})," — Your session will expire in 5 minutes."]}),e.jsxs(n,{...r,severity:"success",children:[e.jsx("strong",{children:"Success"})," — Your changes have been saved."]})]})},l={parameters:{layout:"padded"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(n,{...r,variant:"standard",children:"standard — tinted background, no border"}),e.jsx(n,{...r,variant:"filled",children:"filled — solid background, white text"}),e.jsx(n,{...r,variant:"outlined",children:"outlined — transparent fill, colored border"}),e.jsx(n,{...r,variant:"soft",children:"soft — subtle tint + colored border (EP addition)"})]})},d={parameters:{layout:"padded"},render:()=>{const r=["error","warning","info","success"],t=["standard","filled","outlined","soft"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px repeat(4, 1fr)",gap:8,marginBottom:4},children:[e.jsx("span",{}),t.map(o=>e.jsx("span",{style:{fontSize:11,color:"#888",textAlign:"center"},children:o},o))]}),r.map(o=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px repeat(4, 1fr)",gap:8,alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:"#555"},children:o}),t.map(v=>e.jsx(n,{severity:o,variant:v,size:"sm",children:o},v))]},o))]})}},c={parameters:{layout:"padded"},render:r=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:["xs","sm","md","lg","xl"].map(t=>e.jsxs(n,{...r,size:t,children:[e.jsx("span",{style:{fontFamily:"monospace",fontSize:11,marginRight:8},children:t}),"Alert content at ",t," size — padding from token."]},t))})},p={parameters:{layout:"padded"},render:r=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:["error","warning","info","success"].map(t=>e.jsxs(n,{...r,severity:t,onClose:()=>{},children:["This alert can be dismissed. Severity: ",t,"."]},t))})},m={parameters:{layout:"padded"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(n,{...r,severity:"error",action:e.jsx(f,{variant:"outlined",size:"xs",color:"error",children:"Retry"}),children:"Failed to save changes. The server returned an error."}),e.jsx(n,{...r,severity:"warning",action:e.jsx(f,{variant:"text",size:"xs",color:"neutral",children:"Dismiss"}),children:"Your subscription expires in 3 days."}),e.jsx(n,{...r,severity:"info",action:e.jsx(f,{variant:"soft",size:"xs",startSlot:e.jsx(b,{name:"arrow-forward",size:"xs"}),children:"View details"}),children:"A new version is available."})]})},u={parameters:{layout:"padded"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(n,{...r,severity:"info",children:"Default — MUI renders its built-in info icon (aria-managed by MUI)."}),e.jsxs(n,{...r,severity:"info",icon:e.jsx(b,{name:"settings",size:"md",label:"Configuration"}),children:["Custom icon via ",e.jsx("code",{children:"icon"})," prop — uses Icon wrapper, label provided (semantic)."]}),e.jsxs(n,{...r,severity:"warning",icon:!1,children:["Icon suppressed via ",e.jsxs("code",{children:["icon=","{false}"]})," — no icon slot rendered."]})]})},y={parameters:{layout:"padded"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(n,{...r,severity:"error",children:[e.jsx("strong",{style:{display:"block",marginBottom:4},children:"Payment failed"}),"Your card was declined. Please update your payment method or contact support."]}),e.jsxs(n,{...r,severity:"warning",variant:"soft",children:[e.jsx("strong",{style:{display:"block",marginBottom:4},children:"Storage almost full"}),"You are using 90% of your 5 GB storage. Upgrade your plan to continue uploading."]}),e.jsxs(n,{...r,severity:"success",variant:"filled",children:[e.jsx("strong",{style:{display:"block",marginBottom:4},children:"Import complete"}),"1,204 records were imported successfully. 3 rows were skipped due to validation errors."]})]})},g={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[e.jsxs("section",{children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:13},children:'role="alert" — announced on mount'}),e.jsx("p",{style:{margin:"0 0 8px",fontSize:12,color:"#666"},children:"Screen readers announce this immediately when it appears in the DOM."}),e.jsx(n,{severity:"error",children:"You do not have permission to access this resource."}),e.jsx("code",{style:{display:"block",marginTop:6,fontSize:11,color:"#888"},children:'<Alert severity="error">  →  role="alert" on root'})]}),e.jsxs("section",{children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:13},children:"Close button — aria-label on the button"}),e.jsxs("p",{style:{margin:"0 0 8px",fontSize:12,color:"#666"},children:["The ",e.jsx("code",{children:'<Icon name="close" />'})," inside is decorative (aria-hidden). The interactive element carries the label."]}),e.jsx(n,{severity:"info",onClose:()=>{},children:"Dismiss this alert using the close button."}),e.jsx("code",{style:{display:"block",marginTop:6,fontSize:11,color:"#888"},children:'<button aria-label="Close alert"><Icon name="close" /></button>'})]}),e.jsxs("section",{children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:13},children:"Custom icon — semantic label required"}),e.jsxs("p",{style:{margin:"0 0 8px",fontSize:12,color:"#666"},children:["When overriding the icon with a meaningful image, provide a ",e.jsx("code",{children:"label"}),"."]}),e.jsx(n,{severity:"info",icon:e.jsx(b,{name:"support-agent",size:"md",label:"Support"}),children:"Contact support for help with your account."}),e.jsx("code",{style:{display:"block",marginTop:6,fontSize:11,color:"#888"},children:'<Icon name="support-agent" size="md" label="Support" />'})]})]})},x={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const r=["--ep-component-alert-border-radius","--ep-component-alert-border-width","--ep-component-alert-icon-gap","--ep-component-alert-action-gap","--ep-component-alert-padding-xs-y","--ep-component-alert-padding-xs-x","--ep-component-alert-padding-sm-y","--ep-component-alert-padding-sm-x","--ep-component-alert-padding-md-y","--ep-component-alert-padding-md-x","--ep-component-alert-padding-lg-y","--ep-component-alert-padding-lg-x","--ep-component-alert-padding-xl-y","--ep-component-alert-padding-xl-x"],t=["error","warning","info","success"],o=["background","text","icon","border"],v=["standard","soft"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:11,display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,color:"#666",fontSize:12},children:"Open DevTools → Computed to verify vars resolve. Blank = missing token."}),e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{textAlign:"left",padding:"4px 8px"},children:"CSS variable"}),e.jsx("th",{style:{textAlign:"left",padding:"4px 8px"},children:"Swatch"})]})}),e.jsx("tbody",{children:r.map(s=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"3px 8px",color:"#333"},children:s}),e.jsx("td",{style:{padding:"3px 8px"},children:e.jsx("span",{style:{display:"inline-block",width:14,height:14,background:`var(${s})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},s))})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,color:"#666",fontSize:12},children:"Severity × variant spot-check (standard + soft):"}),e.jsx("table",{style:{borderCollapse:"collapse",width:"100%"},children:e.jsx("tbody",{children:t.flatMap(s=>v.flatMap(Ae=>o.map(Se=>{const h=`--ep-component-alert-${s}-${Ae}-${Se}`;return e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"3px 8px",color:"#555"},children:h}),e.jsx("td",{style:{padding:"3px 8px"},children:e.jsx("span",{style:{display:"inline-block",width:14,height:14,background:`var(${h})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},h)})))})})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,color:"#666",fontSize:12},children:"Live Alert (md/info/standard):"}),e.jsx(n,{severity:"info",onClose:()=>{},children:"Token audit reference render — all tokens active."})]})]})}};var j,A,S,w,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(S=(A=i.parameters)==null?void 0:A.docs)==null?void 0:S.source},description:{story:"Use the Controls panel to explore every prop combination.",...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var z,C,T,D,I;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: (args: AlertProps) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Alert {...args} severity="error">
        <strong>Error</strong> — Something went wrong. Please try again.
      </Alert>
      <Alert {...args} severity="warning">
        <strong>Warning</strong> — This action may have unintended consequences.
      </Alert>
      <Alert {...args} severity="info">
        <strong>Info</strong> — Your session will expire in 5 minutes.
      </Alert>
      <Alert {...args} severity="success">
        <strong>Success</strong> — Your changes have been saved.
      </Alert>
    </div>
}`,...(T=(C=a.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"All four severity states. Each drives a distinct palette and icon.\nToken pattern: `--ep-component-alert-{severity}-standard-*`",...(I=(D=a.parameters)==null?void 0:D.docs)==null?void 0:I.description}}};var B,P,M,U,Y;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: (args: AlertProps) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Alert {...args} variant="standard">standard — tinted background, no border</Alert>
      <Alert {...args} variant="filled">filled — solid background, white text</Alert>
      <Alert {...args} variant="outlined">outlined — transparent fill, colored border</Alert>
      <Alert {...args} variant="soft">soft — subtle tint + colored border (EP addition)</Alert>
    </div>
}`,...(M=(P=l.parameters)==null?void 0:P.docs)==null?void 0:M.source},description:{story:"All four appearance variants using `info` severity.\n`soft` is an EP addition: tinted background + colored border, low visual weight.",...(Y=(U=l.parameters)==null?void 0:U.docs)==null?void 0:Y.description}}};var E,F,V,$,N;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const severities = ['error', 'warning', 'info', 'success'] as const;
    const variants = ['standard', 'filled', 'outlined', 'soft'] as const;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '80px repeat(4, 1fr)',
        gap: 8,
        marginBottom: 4
      }}>
          <span />
          {variants.map(v => <span key={v} style={{
          fontSize: 11,
          color: '#888',
          textAlign: 'center'
        }}>{v}</span>)}
        </div>
        {severities.map(severity => <div key={severity} style={{
        display: 'grid',
        gridTemplateColumns: '80px repeat(4, 1fr)',
        gap: 8,
        alignItems: 'center'
      }}>
            <span style={{
          fontSize: 12,
          color: '#555'
        }}>{severity}</span>
            {variants.map(variant => <Alert key={variant} severity={severity} variant={variant} size="sm">
                {severity}
              </Alert>)}
          </div>)}
      </div>;
  }
}`,...(V=(F=d.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:`Full 4×4 matrix of severity × variant combinations.
Every cell must render a real color from a CSS custom property.
Blank or identical-looking cells indicate a missing or wrong token.`,...(N=($=d.parameters)==null?void 0:$.docs)==null?void 0:N.description}}};var O,R,W,q,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: (args: AlertProps) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <Alert key={size} {...args} size={size}>
          <span style={{
        fontFamily: 'monospace',
        fontSize: 11,
        marginRight: 8
      }}>{size}</span>
          Alert content at {size} size — padding from token.
        </Alert>)}
    </div>
}`,...(W=(R=c.parameters)==null?void 0:R.docs)==null?void 0:W.source},description:{story:"5-tier size scale. All padding values come from\n`--ep-component-alert-padding-{size}-{x|y}` tokens.",...(L=(q=c.parameters)==null?void 0:q.docs)==null?void 0:L.description}}};var G,_,H,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: (args: AlertProps) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {(['error', 'warning', 'info', 'success'] as const).map(severity => <Alert key={severity} {...args} severity={severity} onClose={() => {}}>
          This alert can be dismissed. Severity: {severity}.
        </Alert>)}
    </div>
}`,...(H=(_=p.parameters)==null?void 0:_.docs)==null?void 0:H.source},description:{story:'Passing `onClose` renders the close button.\nThe button uses `aria-label="Close alert"` (on the button, not the icon).\nThe `<Icon name="close" />` inside is decorative — `aria-hidden="true"` automatic.',...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Z,ee,re;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: (args: AlertProps) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Alert {...args} severity="error" action={<Button variant="outlined" size="xs" color="error">Retry</Button>}>
        Failed to save changes. The server returned an error.
      </Alert>
      <Alert {...args} severity="warning" action={<Button variant="text" size="xs" color="neutral">Dismiss</Button>}>
        Your subscription expires in 3 days.
      </Alert>
      <Alert {...args} severity="info" action={<Button variant="soft" size="xs" startSlot={<Icon name="arrow-forward" size="xs" />}>
          View details
        </Button>}>
        A new version is available.
      </Alert>
    </div>
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:'The `action` slot overrides `onClose`.\nUse for inline CTAs: "Retry", "Undo", "View details".',...(re=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var ne,te,oe,se,ie;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: (args: AlertProps) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Alert {...args} severity="info">
        Default — MUI renders its built-in info icon (aria-managed by MUI).
      </Alert>
      <Alert {...args} severity="info" icon={<Icon name="settings" size="md" label="Configuration" />}>
        Custom icon via <code>icon</code> prop — uses Icon wrapper, label provided (semantic).
      </Alert>
      <Alert {...args} severity="warning" icon={false}>
        Icon suppressed via <code>icon={'{false}'}</code> — no icon slot rendered.
      </Alert>
    </div>
}`,...(oe=(te=u.parameters)==null?void 0:te.docs)==null?void 0:oe.source},description:{story:'Three icon scenarios:\n1. Default — MUI maps severity to its built-in icon\n2. Custom — caller supplies `<Icon name="..." label="..." />` via `icon` prop\n3. Suppressed — `icon={false}` removes the icon slot entirely\n\nRule: any icon passed via `icon` prop must use `<Icon />`, never a raw MUI icon.',...(ie=(se=u.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var ae,le,de,ce,pe;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: (args: AlertProps) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Alert {...args} severity="error">
        <strong style={{
        display: 'block',
        marginBottom: 4
      }}>Payment failed</strong>
        Your card was declined. Please update your payment method or contact support.
      </Alert>
      <Alert {...args} severity="warning" variant="soft">
        <strong style={{
        display: 'block',
        marginBottom: 4
      }}>Storage almost full</strong>
        You are using 90% of your 5 GB storage. Upgrade your plan to continue uploading.
      </Alert>
      <Alert {...args} severity="success" variant="filled">
        <strong style={{
        display: 'block',
        marginBottom: 4
      }}>Import complete</strong>
        1,204 records were imported successfully. 3 rows were skipped due to validation errors.
      </Alert>
    </div>
}`,...(de=(le=y.parameters)==null?void 0:le.docs)==null?void 0:de.source},description:{story:"Alert content is unstructured ReactNode — compose title + body with HTML.\nNo title prop exists; use a `<strong>` or `<div>` pattern.",...(pe=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:pe.description}}};var me,ue,ye,ge,xe;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    fontFamily: 'sans-serif'
  }}>

      <section>
        <h3 style={{
        margin: '0 0 8px',
        fontSize: 13
      }}>role="alert" — announced on mount</h3>
        <p style={{
        margin: '0 0 8px',
        fontSize: 12,
        color: '#666'
      }}>
          Screen readers announce this immediately when it appears in the DOM.
        </p>
        <Alert severity="error">
          You do not have permission to access this resource.
        </Alert>
        <code style={{
        display: 'block',
        marginTop: 6,
        fontSize: 11,
        color: '#888'
      }}>
          {'<Alert severity="error">  →  role="alert" on root'}
        </code>
      </section>

      <section>
        <h3 style={{
        margin: '0 0 8px',
        fontSize: 13
      }}>Close button — aria-label on the button</h3>
        <p style={{
        margin: '0 0 8px',
        fontSize: 12,
        color: '#666'
      }}>
          The <code>{'<Icon name="close" />'}</code> inside is decorative (aria-hidden).
          The interactive element carries the label.
        </p>
        <Alert severity="info" onClose={() => {}}>
          Dismiss this alert using the close button.
        </Alert>
        <code style={{
        display: 'block',
        marginTop: 6,
        fontSize: 11,
        color: '#888'
      }}>
          {'<button aria-label="Close alert"><Icon name="close" /></button>'}
        </code>
      </section>

      <section>
        <h3 style={{
        margin: '0 0 8px',
        fontSize: 13
      }}>Custom icon — semantic label required</h3>
        <p style={{
        margin: '0 0 8px',
        fontSize: 12,
        color: '#666'
      }}>
          When overriding the icon with a meaningful image, provide a <code>label</code>.
        </p>
        <Alert severity="info" icon={<Icon name="support-agent" size="md" label="Support" />}>
          Contact support for help with your account.
        </Alert>
        <code style={{
        display: 'block',
        marginTop: 6,
        fontSize: 11,
        color: '#888'
      }}>
          {'<Icon name="support-agent" size="md" label="Support" />'}
        </code>
      </section>

    </div>
}`,...(ye=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:ye.source},description:{story:'Accessibility contract:\n- `role="alert"` on root → screen reader announces content on mount\n- Close button has `aria-label="Close alert"` (on the button, not the icon)\n- Severity icon is aria-hidden (MUI-managed)\n- Custom icons passed via `icon` prop should use `label` for semantic meaning',...(xe=(ge=g.parameters)==null?void 0:ge.docs)==null?void 0:xe.description}}};var ve,he,fe,be,je;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const structural = ['--ep-component-alert-border-radius', '--ep-component-alert-border-width', '--ep-component-alert-icon-gap', '--ep-component-alert-action-gap', '--ep-component-alert-padding-xs-y', '--ep-component-alert-padding-xs-x', '--ep-component-alert-padding-sm-y', '--ep-component-alert-padding-sm-x', '--ep-component-alert-padding-md-y', '--ep-component-alert-padding-md-x', '--ep-component-alert-padding-lg-y', '--ep-component-alert-padding-lg-x', '--ep-component-alert-padding-xl-y', '--ep-component-alert-padding-xl-x'];
    const severities = ['error', 'warning', 'info', 'success'] as const;
    const properties = ['background', 'text', 'icon', 'border'] as const;
    const variants = ['standard', 'soft'] as const; // spot-check 2 of 4

    return <div style={{
      fontFamily: 'monospace',
      fontSize: 11,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>

        <div>
          <p style={{
          marginBottom: 8,
          color: '#666',
          fontSize: 12
        }}>
            Open DevTools → Computed to verify vars resolve. Blank = missing token.
          </p>
          <table style={{
          borderCollapse: 'collapse',
          width: '100%'
        }}>
            <thead>
              <tr style={{
              background: '#f5f5f5'
            }}>
                <th style={{
                textAlign: 'left',
                padding: '4px 8px'
              }}>CSS variable</th>
                <th style={{
                textAlign: 'left',
                padding: '4px 8px'
              }}>Swatch</th>
              </tr>
            </thead>
            <tbody>
              {structural.map(v => <tr key={v} style={{
              borderBottom: '1px solid #eee'
            }}>
                  <td style={{
                padding: '3px 8px',
                color: '#333'
              }}>{v}</td>
                  <td style={{
                padding: '3px 8px'
              }}>
                    <span style={{
                  display: 'inline-block',
                  width: 14,
                  height: 14,
                  background: \`var(\${v})\`,
                  border: '1px solid #ccc',
                  verticalAlign: 'middle'
                }} />
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>

        <div>
          <p style={{
          marginBottom: 8,
          color: '#666',
          fontSize: 12
        }}>Severity × variant spot-check (standard + soft):</p>
          <table style={{
          borderCollapse: 'collapse',
          width: '100%'
        }}>
            <tbody>
              {severities.flatMap(severity => variants.flatMap(variant => properties.map(prop => {
              const varName = \`--ep-component-alert-\${severity}-\${variant}-\${prop}\`;
              return <tr key={varName} style={{
                borderBottom: '1px solid #eee'
              }}>
                        <td style={{
                  padding: '3px 8px',
                  color: '#555'
                }}>{varName}</td>
                        <td style={{
                  padding: '3px 8px'
                }}>
                          <span style={{
                    display: 'inline-block',
                    width: 14,
                    height: 14,
                    background: \`var(\${varName})\`,
                    border: '1px solid #ccc',
                    verticalAlign: 'middle'
                  }} />
                        </td>
                      </tr>;
            })))}
            </tbody>
          </table>
        </div>

        <div>
          <p style={{
          marginBottom: 8,
          color: '#666',
          fontSize: 12
        }}>Live Alert (md/info/standard):</p>
          <Alert severity="info" onClose={() => {}}>
            Token audit reference render — all tokens active.
          </Alert>
        </div>
      </div>;
  }
}`,...(fe=(he=x.parameters)==null?void 0:he.docs)==null?void 0:fe.source},description:{story:`Every CSS custom property referenced by the Alert component.
Open DevTools → Computed to verify every --ep-component-alert-* resolves.

Rule: Alert must ONLY read from --ep-component-alert-* namespace.`,...(je=(be=x.parameters)==null?void 0:be.docs)==null?void 0:je.description}}};const Be=["Default","Severities","Variants","SeverityVariantMatrix","Sizes","Dismissible","WithAction","IconOverride","Composition","Accessibility","TokenAudit"];export{g as Accessibility,y as Composition,i as Default,p as Dismissible,u as IconOverride,a as Severities,d as SeverityVariantMatrix,c as Sizes,x as TokenAudit,l as Variants,m as WithAction,Be as __namedExportsOrder,Ie as default};

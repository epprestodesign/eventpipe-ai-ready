import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as i}from"./index-C6mWTJJr.js";import{a5 as c,T as b,B as r}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const ye={title:"Components/Feedback/Snackbar",component:c,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Transient notification bar at the screen edge. Non-blocking: no focus trap. Portal-rendered at z-index 1400 (above Dialog). Plain mode: dark bar with message + optional action. Severity mode: embeds an Alert (error/warning=assertive, info/success=polite). Auto-hides after 4s by default. Dismiss pattern: ignore clickaway."}}},argTypes:{open:{control:"boolean"},severity:{control:"radio",options:[void 0,"error","warning","info","success"]},autoHideDuration:{control:"number"},message:{control:"text"}},args:{open:!1,message:"Changes saved successfully.",autoHideDuration:4e3}};function ce(t){const[s,n]=i.useState(!1),[o,a]=i.useState(t);return{open:s,msg:o,show:d=>{d&&a(d),n(!0)},handleClose:(d,ie)=>{ie!=="clickaway"&&n(!1)},setOpen:n}}const p={render:t=>{const[s,n]=i.useState(t.open);return i.useEffect(()=>{n(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"contained",onClick:()=>n(!0),children:"Show snackbar"}),e.jsx(c,{...t,open:s,onClose:(o,a)=>{a!=="clickaway"&&n(!1)}})]})}},u={render:()=>{const t=ce("Event saved.");return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"contained",onClick:()=>t.show(),children:"Save event"}),e.jsx(c,{open:t.open,message:t.msg,action:e.jsx(r,{variant:"text",size:"sm",sx:{color:"var(--ep-component-snackbar-action-color)",fontSize:13},onClick:()=>t.setOpen(!1),children:"UNDO"}),onClose:t.handleClose})]})}},m={render:()=>{const[t,s]=i.useState(null),n=[{key:"error",label:"Show error",message:"Failed to save changes."},{key:"warning",label:"Show warning",message:"Unsaved changes may be lost."},{key:"info",label:"Show info",message:"Event starts in 30 minutes."},{key:"success",label:"Show success",message:"Event published successfully."}];return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[n.map(({key:o,label:a,message:l})=>e.jsx(r,{variant:"outlined",onClick:()=>s(o),children:a},o)),n.map(({key:o,message:a})=>e.jsx(c,{open:t===o,severity:o,message:a,onClose:(l,f)=>{f!=="clickaway"&&s(null)}},o))]})}},v={render:()=>{const[t,s]=i.useState(null),n=[{key:"top-left",vertical:"top",horizontal:"left"},{key:"top-center",vertical:"top",horizontal:"center"},{key:"top-right",vertical:"top",horizontal:"right"},{key:"bottom-left",vertical:"bottom",horizontal:"left"},{key:"bottom-center",vertical:"bottom",horizontal:"center"},{key:"bottom-right",vertical:"bottom",horizontal:"right"}];return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[n.map(({key:o,vertical:a,horizontal:l})=>e.jsx(r,{variant:"outlined",size:"sm",onClick:()=>s(o),children:o},o)),n.map(({key:o,vertical:a,horizontal:l})=>e.jsx(c,{open:t===o,message:`Position: ${o}`,anchorOrigin:{vertical:a,horizontal:l},onClose:(f,d)=>{d!=="clickaway"&&s(null)}},o))]})}},y={render:()=>{const[t,s]=i.useState(null),n=[{dur:2e3,label:"2s auto-hide"},{dur:4e3,label:"4s auto-hide (default)"},{dur:6e3,label:"6s auto-hide"},{dur:null,label:"No auto-hide"}];return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[n.map(o=>e.jsx(r,{variant:"outlined",onClick:()=>s(o),children:o.label},String(o.dur))),e.jsx(c,{open:t!==null,message:t?`Timer: ${t.label}`:"",autoHideDuration:(t==null?void 0:t.dur)??void 0,action:(t==null?void 0:t.dur)===null?e.jsx(r,{variant:"text",size:"sm",sx:{color:"var(--ep-component-snackbar-action-color)",fontSize:13},onClick:()=>s(null),children:"DISMISS"}):void 0,onClose:(o,a)=>{a!=="clickaway"&&s(null)}})]})}},h={render:()=>{const[t,s]=i.useState(!1),n=()=>s(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"contained",color:"error",onClick:()=>s(!0),children:"Delete failed"}),e.jsx(c,{open:t,severity:"error",message:"Failed to delete the event. Check your permissions.",autoHideDuration:6e3,action:e.jsx(r,{variant:"text",size:"sm",sx:{color:"inherit",fontSize:13},onClick:n,children:"RETRY"}),onClose:(o,a)=>{a!=="clickaway"&&n()}})]})}},g={render:()=>{const[t,s]=i.useState(null),n=()=>s(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,fontFamily:"sans-serif"},children:[e.jsx(b,{variant:"overline",color:"text.secondary",children:"Non-blocking overlay"}),e.jsx(b,{variant:"body2",color:"text.secondary",children:"Snackbar has no focus trap. The user can continue interacting with the page. Dismiss with the action button or wait for auto-hide."}),e.jsx(b,{variant:"overline",color:"text.secondary",children:"Live regions"}),e.jsxs(b,{variant:"body2",color:"text.secondary",children:["Plain / info / success → ",e.jsx("code",{children:'role="status"'})," (polite). Error / warning → ",e.jsx("code",{children:'role="alert"'})," (assertive, interrupts screen reader). All use ",e.jsx("code",{children:'aria-atomic="true"'}),"."]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{variant:"outlined",size:"sm",onClick:()=>s("polite"),children:"Polite (info)"}),e.jsx(r,{variant:"outlined",size:"sm",color:"error",onClick:()=>s("assertive"),children:"Assertive (error)"})]}),e.jsx(c,{open:t==="polite",severity:"info",message:"Info: polite announcement — screen reader finishes current task first.",onClose:(o,a)=>{a!=="clickaway"&&n()}}),e.jsx(c,{open:t==="assertive",severity:"error",message:"Error: assertive announcement — screen reader interrupts immediately.",onClose:(o,a)=>{a!=="clickaway"&&n()}})]})}},k={name:"Token Audit (DevTools)",args:{open:!1},parameters:{layout:"padded"},render:()=>{const[t,s]=i.useState(!1),n=["--ep-component-snackbar-background","--ep-component-snackbar-color","--ep-component-snackbar-border-radius","--ep-component-snackbar-shadow","--ep-component-snackbar-transition-duration","--ep-component-snackbar-auto-hide-duration","--ep-component-snackbar-padding-y","--ep-component-snackbar-padding-x","--ep-component-snackbar-action-color","--ep-component-snackbar-min-width","--ep-component-snackbar-max-width"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",n.length," vars. Severity mode reuses ",e.jsx("code",{children:"--ep-component-alert-*"})," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:n.map(o=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:o}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${o})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},o))})]}),e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{variant:"outlined",size:"sm",onClick:()=>s(!0),children:"Show plain snackbar"})}),e.jsx(c,{open:t,message:"Token audit — plain snackbar",onClose:(o,a)=>{a!=="clickaway"&&s(!1)}})]})}};var x,S,w,C,j;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = React.useState(args.open);
    React.useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>Show snackbar</Button>
        <Snackbar {...args} open={open} onClose={(_, reason) => {
        if (reason !== 'clickaway') setOpen(false);
      }} />
      </>;
  }
}`,...(w=(S=p.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Default — toggle `open` in Controls.",...(j=(C=p.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};var A,z,B,T,D;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const sb = useSnackbar('Event saved.');
    return <>
        <Button variant="contained" onClick={() => sb.show()}>Save event</Button>
        <Snackbar open={sb.open} message={sb.msg} action={<Button variant="text" size="sm" sx={{
        color: 'var(--ep-component-snackbar-action-color)',
        fontSize: 13
      }} onClick={() => sb.setOpen(false)}>
              UNDO
            </Button>} onClose={sb.handleClose} />
      </>;
  }
}`,...(B=(z=u.parameters)==null?void 0:z.docs)==null?void 0:B.source},description:{story:"Plain snackbar — dark bar with message and action button.",...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var O,_,E,R,P;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState<string | null>(null);
    const severities = [{
      key: 'error',
      label: 'Show error',
      message: 'Failed to save changes.'
    }, {
      key: 'warning',
      label: 'Show warning',
      message: 'Unsaved changes may be lost.'
    }, {
      key: 'info',
      label: 'Show info',
      message: 'Event starts in 30 minutes.'
    }, {
      key: 'success',
      label: 'Show success',
      message: 'Event published successfully.'
    }] as const;
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        {severities.map(({
        key,
        label,
        message
      }) => <Button key={key} variant="outlined" onClick={() => setActive(key)}>
            {label}
          </Button>)}
        {severities.map(({
        key,
        message
      }) => <Snackbar key={key} open={active === key} severity={key} message={message} onClose={(_, reason) => {
        if (reason !== 'clickaway') setActive(null);
      }} />)}
      </div>;
  }
}`,...(E=(_=m.parameters)==null?void 0:_.docs)==null?void 0:E.source},description:{story:"All four severity variants.",...(P=(R=m.parameters)==null?void 0:R.docs)==null?void 0:P.description}}};var F,H,W,N,I;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState<string | null>(null);
    const positions = [{
      key: 'top-left',
      vertical: 'top',
      horizontal: 'left'
    }, {
      key: 'top-center',
      vertical: 'top',
      horizontal: 'center'
    }, {
      key: 'top-right',
      vertical: 'top',
      horizontal: 'right'
    }, {
      key: 'bottom-left',
      vertical: 'bottom',
      horizontal: 'left'
    }, {
      key: 'bottom-center',
      vertical: 'bottom',
      horizontal: 'center'
    }, {
      key: 'bottom-right',
      vertical: 'bottom',
      horizontal: 'right'
    }] as const;
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        {positions.map(({
        key,
        vertical,
        horizontal
      }) => <Button key={key} variant="outlined" size="sm" onClick={() => setActive(key)}>
            {key}
          </Button>)}
        {positions.map(({
        key,
        vertical,
        horizontal
      }) => <Snackbar key={key} open={active === key} message={\`Position: \${key}\`} anchorOrigin={{
        vertical,
        horizontal
      }} onClose={(_, reason) => {
        if (reason !== 'clickaway') setActive(null);
      }} />)}
      </div>;
  }
}`,...(W=(H=v.parameters)==null?void 0:H.docs)==null?void 0:W.source},description:{story:"Anchor positions — all 6 placement options.",...(I=(N=v.parameters)==null?void 0:N.docs)==null?void 0:I.description}}};var $,U,M,L,Y;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [config, setConfig] = React.useState<{
      dur: number | null;
      label: string;
    } | null>(null);
    const options = [{
      dur: 2000,
      label: '2s auto-hide'
    }, {
      dur: 4000,
      label: '4s auto-hide (default)'
    }, {
      dur: 6000,
      label: '6s auto-hide'
    }, {
      dur: null,
      label: 'No auto-hide'
    }] as const;
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        {options.map(opt => <Button key={String(opt.dur)} variant="outlined" onClick={() => setConfig(opt)}>
            {opt.label}
          </Button>)}
        <Snackbar open={config !== null} message={config ? \`Timer: \${config.label}\` : ''} autoHideDuration={config?.dur ?? undefined} action={config?.dur === null ? <Button variant="text" size="sm" sx={{
        color: 'var(--ep-component-snackbar-action-color)',
        fontSize: 13
      }} onClick={() => setConfig(null)}>
              DISMISS
            </Button> : undefined} onClose={(_, reason) => {
        if (reason !== 'clickaway') setConfig(null);
      }} />
      </div>;
  }
}`,...(M=(U=y.parameters)==null?void 0:U.docs)==null?void 0:M.source},description:{story:"Auto-hide timing — 2s, 4s (default), 6s, disabled.",...(Y=(L=y.parameters)==null?void 0:L.docs)==null?void 0:Y.description}}};var q,G,J,K,Q;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const close = () => setOpen(false);
    return <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>
          Delete failed
        </Button>
        <Snackbar open={open} severity="error" message="Failed to delete the event. Check your permissions." autoHideDuration={6000} action={<Button variant="text" size="sm" sx={{
        color: 'inherit',
        fontSize: 13
      }} onClick={close}>
              RETRY
            </Button>} onClose={(_, reason) => {
        if (reason !== 'clickaway') close();
      }} />
      </>;
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"Severity + action — action button inside a severity Alert.",...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var V,X,Z,ee,te;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState<string | null>(null);
    const close = () => setActive(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'sans-serif'
    }}>
        <Typography variant="overline" color="text.secondary">Non-blocking overlay</Typography>
        <Typography variant="body2" color="text.secondary">
          Snackbar has no focus trap. The user can continue interacting with the page.
          Dismiss with the action button or wait for auto-hide.
        </Typography>
        <Typography variant="overline" color="text.secondary">Live regions</Typography>
        <Typography variant="body2" color="text.secondary">
          Plain / info / success → <code>role="status"</code> (polite).
          Error / warning → <code>role="alert"</code> (assertive, interrupts screen reader).
          All use <code>aria-atomic="true"</code>.
        </Typography>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button variant="outlined" size="sm" onClick={() => setActive('polite')}>
            Polite (info)
          </Button>
          <Button variant="outlined" size="sm" color="error" onClick={() => setActive('assertive')}>
            Assertive (error)
          </Button>
        </div>
        <Snackbar open={active === 'polite'} severity="info" message="Info: polite announcement — screen reader finishes current task first." onClose={(_, r) => {
        if (r !== 'clickaway') close();
      }} />
        <Snackbar open={active === 'assertive'} severity="error" message="Error: assertive announcement — screen reader interrupts immediately." onClose={(_, r) => {
        if (r !== 'clickaway') close();
      }} />
      </div>;
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Accessibility — live region, role, and non-blocking behavior.",...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var oe,ne,se,ae,re;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  args: {
    open: false
  },
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [open, setOpen] = React.useState(false);
    const vars = ['--ep-component-snackbar-background', '--ep-component-snackbar-color', '--ep-component-snackbar-border-radius', '--ep-component-snackbar-shadow', '--ep-component-snackbar-transition-duration', '--ep-component-snackbar-auto-hide-duration', '--ep-component-snackbar-padding-y', '--ep-component-snackbar-padding-x', '--ep-component-snackbar-action-color', '--ep-component-snackbar-min-width', '--ep-component-snackbar-max-width'];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <p style={{
        color: '#666',
        marginBottom: 8
      }}>
          Open DevTools → Computed to verify each var resolves. Total: {vars.length} vars.
          Severity mode reuses <code>--ep-component-alert-*</code> vars.
        </p>
        <table style={{
        borderCollapse: 'collapse',
        marginBottom: 32
      }}>
          <thead>
            <tr style={{
            borderBottom: '2px solid #ddd'
          }}>
              <th style={{
              padding: '4px 12px 4px 0',
              textAlign: 'left'
            }}>CSS custom property</th>
              <th style={{
              padding: '4px 12px',
              textAlign: 'left'
            }}>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {vars.map(v => <tr key={v} style={{
            borderBottom: '1px solid #eee'
          }}>
                <td style={{
              padding: '4px 12px 4px 0'
            }}>{v}</td>
                <td style={{
              padding: '4px 12px'
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
        display: 'flex',
        gap: 8
      }}>
          <Button variant="outlined" size="sm" onClick={() => setOpen(true)}>
            Show plain snackbar
          </Button>
        </div>
        <Snackbar open={open} message="Token audit — plain snackbar" onClose={(_, r) => {
        if (r !== 'clickaway') setOpen(false);
      }} />
      </div>;
  }
}`,...(se=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:se.source},description:{story:"Token Audit — all CSS custom properties the Snackbar component reads (plain mode).",...(re=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:re.description}}};const he=["Default","Plain","Severities","AnchorPositions","AutoHide","SeverityWithAction","Accessibility","TokenAudit"];export{g as Accessibility,v as AnchorPositions,y as AutoHide,p as Default,u as Plain,m as Severities,h as SeverityWithAction,k as TokenAudit,he as __namedExportsOrder,ye as default};

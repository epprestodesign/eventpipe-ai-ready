import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as r}from"./index-C6mWTJJr.js";import{x as t,T as s,B as a,A as pe}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const be={title:"Components/Overlays/Dialog",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Modal overlay panel with focus trap, built-in Backdrop, and keyboard handling. Always controlled: open + onClose. Focus is trapped inside while open; returns to trigger on close. Compose with Dialog.Title, Dialog.Content, Dialog.Actions. Loading state shows CircularProgress and suppresses onClose. Overlay system: docs/contracts/overlay-pattern.md"}}},argTypes:{open:{control:"boolean"},maxWidth:{control:"radio",options:["xs","sm","md","lg","xl",!1]},fullWidth:{control:"boolean"},fullScreen:{control:"boolean"},scroll:{control:"radio",options:["paper","body"]},loading:{control:"boolean"},disableEscapeKeyDown:{control:"boolean"}},args:{open:!1,maxWidth:"sm",fullWidth:!1,fullScreen:!1,scroll:"paper",loading:!1,disableEscapeKeyDown:!1}};function b({label:i,children:o}){const[n,l]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"contained",onClick:()=>l(!0),children:i}),o(n,l)]})}const d={render:i=>{const[o,n]=r.useState(i.open);return r.useEffect(()=>{n(i.open)},[i.open]),e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"contained",onClick:()=>n(!0),children:"Open dialog"}),e.jsxs(t,{...i,open:o,onClose:()=>n(!1),"aria-labelledby":"default-dialog-title","aria-describedby":"default-dialog-desc",children:[e.jsx(t.Title,{id:"default-dialog-title",onClose:()=>n(!1),children:"Dialog title"}),e.jsx(t.Content,{id:"default-dialog-desc",children:e.jsx(s,{variant:"body2",children:"This is the dialog body. Use Controls to explore maxWidth, fullWidth, scroll, and other props."})}),e.jsxs(t.Actions,{children:[e.jsx(a,{variant:"outlined",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"contained",onClick:()=>n(!1),children:"Confirm"})]})]})]})}},c={parameters:{layout:"padded"},render:()=>e.jsx(b,{label:"Delete event",children:(i,o)=>e.jsxs(t,{open:i,onClose:(n,l)=>{l!=="backdropClick"&&o(!1)},"aria-labelledby":"delete-title","aria-describedby":"delete-desc",maxWidth:"xs",children:[e.jsx(t.Title,{id:"delete-title",onClose:()=>o(!1),children:"Delete this event?"}),e.jsx(t.Content,{id:"delete-desc",children:e.jsx(s,{variant:"body2",children:"This action cannot be undone. All attendees will be notified."})}),e.jsxs(t.Actions,{children:[e.jsx(a,{variant:"outlined",onClick:()=>o(!1),children:"Cancel"}),e.jsx(a,{variant:"contained",color:"error",onClick:()=>o(!1),children:"Delete"})]})]})})},p={parameters:{layout:"padded"},render:()=>{const[i,o]=r.useState(!1),[n,l]=r.useState(!1),ce=()=>{l(!0),setTimeout(()=>{l(!1),o(!1)},2500)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"contained",onClick:()=>o(!0),children:"Publish event"}),e.jsxs(t,{open:i,onClose:()=>o(!1),loading:n,"aria-labelledby":"loading-title",maxWidth:"xs",children:[e.jsx(t.Title,{id:"loading-title",onClose:()=>o(!1),children:"Publish event?"}),e.jsx(t.Content,{children:e.jsx(s,{variant:"body2",children:"This will make the event visible to all attendees. You can unpublish later."})}),e.jsxs(t.Actions,{children:[e.jsx(a,{variant:"outlined",onClick:()=>o(!1),children:"Cancel"}),e.jsx(a,{variant:"contained",color:"success",onClick:ce,children:"Publish"})]})]})]})}},g={parameters:{layout:"padded"},render:()=>{const i=["xs","sm","md","lg","xl"],[o,n]=r.useState(null);return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[i.map(l=>e.jsxs(a,{variant:"outlined",size:"sm",onClick:()=>n(l),children:['maxWidth="',l,'"']},l)),e.jsxs(t,{open:o!==null,onClose:()=>n(null),maxWidth:o??"sm",fullWidth:!0,"aria-labelledby":"size-dialog-title",children:[e.jsxs(t.Title,{id:"size-dialog-title",onClose:()=>n(null),children:['maxWidth="',o,'"']}),e.jsx(t.Content,{children:e.jsxs(s,{variant:"body2",children:["This dialog has ",e.jsxs("code",{children:['maxWidth="',o,'"']})," and ",e.jsx("code",{children:"fullWidth"}),"."]})}),e.jsx(t.Actions,{children:e.jsx(a,{variant:"contained",onClick:()=>n(null),children:"Close"})})]})]})}},u={parameters:{layout:"padded"},render:()=>e.jsx(b,{label:"Open dialog with dividers",children:(i,o)=>e.jsxs(t,{open:i,onClose:()=>o(!1),"aria-labelledby":"dividers-title",maxWidth:"sm",fullWidth:!0,children:[e.jsx(t.Title,{id:"dividers-title",onClose:()=>o(!1),children:"Terms of Service"}),e.jsxs(t.Content,{dividers:!0,children:[e.jsx(s,{variant:"body2",sx:{mb:2},children:"These are the terms and conditions of your agreement. Please read carefully before accepting. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx(s,{variant:"body2",sx:{mb:2},children:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),e.jsx(s,{variant:"body2",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]}),e.jsxs(t.Actions,{children:[e.jsx(a,{variant:"outlined",onClick:()=>o(!1),children:"Decline"}),e.jsx(a,{variant:"contained",onClick:()=>o(!1),children:"Accept"})]})]})})},m={parameters:{layout:"padded"},render:()=>e.jsx(b,{label:"Edit profile",children:(i,o)=>e.jsxs(t,{open:i,onClose:()=>o(!1),"aria-labelledby":"form-title",maxWidth:"sm",fullWidth:!0,children:[e.jsx(t.Title,{id:"form-title",onClose:()=>o(!1),children:"Edit profile"}),e.jsx(t.Content,{dividers:!0,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,paddingTop:4},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:13,fontWeight:600,display:"block",marginBottom:4},children:"Full name"}),e.jsx("input",{defaultValue:"Alex Johnson",style:{width:"100%",boxSizing:"border-box",padding:"8px 12px",borderRadius:4,border:"1px solid #d1d5db",fontSize:14}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:13,fontWeight:600,display:"block",marginBottom:4},children:"Email"}),e.jsx("input",{type:"email",defaultValue:"alex@example.com",style:{width:"100%",boxSizing:"border-box",padding:"8px 12px",borderRadius:4,border:"1px solid #d1d5db",fontSize:14}})]})]})}),e.jsxs(t.Actions,{children:[e.jsx(a,{variant:"outlined",onClick:()=>o(!1),children:"Cancel"}),e.jsx(a,{variant:"contained",onClick:()=>o(!1),children:"Save changes"})]})]})})},h={parameters:{layout:"padded"},render:()=>e.jsx(b,{label:"Show alert dialog",children:(i,o)=>e.jsxs(t,{open:i,onClose:(n,l)=>{l!=="backdropClick"&&o(!1)},disableEscapeKeyDown:!0,"aria-labelledby":"alert-title","aria-describedby":"alert-desc",maxWidth:"xs",children:[e.jsx(t.Title,{id:"alert-title",children:"Session expiring"}),e.jsx(t.Content,{id:"alert-desc",children:e.jsx(pe,{severity:"warning",sx:{border:"none"},children:"Your session will expire in 2 minutes. Save your work to avoid losing changes."})}),e.jsxs(t.Actions,{children:[e.jsx(a,{variant:"outlined",onClick:()=>o(!1),children:"Dismiss"}),e.jsx(a,{variant:"contained",onClick:()=>o(!1),children:"Extend session"})]})]})})},x={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,fontFamily:"sans-serif"},children:[e.jsx(s,{variant:"overline",color:"text.secondary",children:"Focus trap + keyboard"}),e.jsxs(s,{variant:"body2",color:"text.secondary",children:["When the dialog is open: Tab cycles within it, Shift+Tab goes backward, Escape closes it. Focus returns to the trigger button on close. MUI Dialog sets ",e.jsx("code",{children:'aria-modal="true"'})," automatically."]}),e.jsx(s,{variant:"overline",color:"text.secondary",children:"ARIA wiring"}),e.jsxs(s,{variant:"body2",color:"text.secondary",children:["Pass ",e.jsx("code",{children:"aria-labelledby"})," matching ",e.jsx("code",{children:"Dialog.Title id"})," and",e.jsx("code",{children:" aria-describedby"})," matching ",e.jsx("code",{children:"Dialog.Content id"}),". The ",e.jsx("code",{children:'role="dialog"'})," is set by MUI."]}),e.jsx(b,{label:"Open accessible dialog",children:(i,o)=>e.jsxs(t,{open:i,onClose:()=>o(!1),"aria-labelledby":"a11y-title","aria-describedby":"a11y-desc",maxWidth:"xs",children:[e.jsx(t.Title,{id:"a11y-title",onClose:()=>o(!1),children:"Accessible dialog"}),e.jsx(t.Content,{id:"a11y-desc",children:e.jsx(s,{variant:"body2",children:"Tab through this dialog. Focus is constrained within. Press Escape to close. Focus returns to the trigger."})}),e.jsxs(t.Actions,{children:[e.jsx(a,{variant:"outlined",onClick:()=>o(!1),children:"Cancel"}),e.jsx(a,{variant:"contained",onClick:()=>o(!1),children:"OK"})]})]})})]})},y={name:"Token Audit (DevTools)",args:{open:!1},parameters:{layout:"padded"},render:()=>{const[i,o]=r.useState(!1),n=["--ep-component-dialog-background","--ep-component-dialog-border-radius","--ep-component-dialog-transition-duration","--ep-component-dialog-shadow","--ep-component-dialog-title-padding-y","--ep-component-dialog-title-padding-x","--ep-component-dialog-title-font-size","--ep-component-dialog-title-font-weight","--ep-component-dialog-content-padding-y","--ep-component-dialog-content-padding-x","--ep-component-dialog-actions-padding-y","--ep-component-dialog-actions-padding-x","--ep-component-dialog-actions-gap","--ep-component-dialog-divider-color","--ep-component-dialog-close-button-color","--ep-component-dialog-close-button-color-hover","--ep-component-dialog-close-button-size","--ep-component-dialog-close-button-focus-color","--ep-component-dialog-loading-background"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",n.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:n.map(l=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:l}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${l})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},l))})]}),e.jsx(a,{variant:"outlined",size:"sm",onClick:()=>o(!0),children:"Open live dialog"}),e.jsxs(t,{open:i,onClose:()=>o(!1),"aria-labelledby":"audit-title",maxWidth:"xs",children:[e.jsx(t.Title,{id:"audit-title",onClose:()=>o(!1),children:"Token audit — live dialog"}),e.jsx(t.Content,{dividers:!0,children:e.jsxs(s,{variant:"body2",children:["Inspect this element in DevTools → Computed to see all",e.jsx("code",{children:" --ep-component-dialog-*"})," vars resolved."]})}),e.jsx(t.Actions,{children:e.jsx(a,{variant:"contained",onClick:()=>o(!1),children:"Close"})})]})]})}};var f,v,C,D,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = React.useState(args.open);
    React.useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open dialog</Button>
        <Dialog {...args} open={open} onClose={() => setOpen(false)} aria-labelledby="default-dialog-title" aria-describedby="default-dialog-desc">
          <Dialog.Title id="default-dialog-title" onClose={() => setOpen(false)}>
            Dialog title
          </Dialog.Title>
          <Dialog.Content id="default-dialog-desc">
            <Typography variant="body2">
              This is the dialog body. Use Controls to explore maxWidth, fullWidth,
              scroll, and other props.
            </Typography>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Confirm</Button>
          </Dialog.Actions>
        </Dialog>
      </>;
  }
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source},description:{story:"Default — toggle `open` in Controls. Note: does not render a trigger in this view.",...(j=(D=d.parameters)==null?void 0:D.docs)==null?void 0:j.description}}};var T,k,A,S,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <TriggerDialog label="Delete event">
      {(open, setOpen) => <Dialog open={open} onClose={(_, reason) => {
      if (reason !== 'backdropClick') setOpen(false);
    }} aria-labelledby="delete-title" aria-describedby="delete-desc" maxWidth="xs">
          <Dialog.Title id="delete-title" onClose={() => setOpen(false)}>
            Delete this event?
          </Dialog.Title>
          <Dialog.Content id="delete-desc">
            <Typography variant="body2">
              This action cannot be undone. All attendees will be notified.
            </Typography>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" color="error" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </Dialog.Actions>
        </Dialog>}
    </TriggerDialog>
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source},description:{story:"Confirm destructive action — the most common Dialog pattern.",...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.description}}};var W,w,O,z,E;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleConfirm = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 2500);
    };
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>Publish event</Button>
        <Dialog open={open} onClose={() => setOpen(false)} loading={loading} aria-labelledby="loading-title" maxWidth="xs">
          <Dialog.Title id="loading-title" onClose={() => setOpen(false)}>
            Publish event?
          </Dialog.Title>
          <Dialog.Content>
            <Typography variant="body2">
              This will make the event visible to all attendees. You can unpublish later.
            </Typography>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" color="success" onClick={handleConfirm}>
              Publish
            </Button>
          </Dialog.Actions>
        </Dialog>
      </>;
  }
}`,...(O=(w=p.parameters)==null?void 0:w.docs)==null?void 0:O.source},description:{story:"Loading state — CircularProgress overlay blocks interaction.",...(E=(z=p.parameters)==null?void 0:z.docs)==null?void 0:E.description}}};var F,R,P,L,I;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
    const [active, setActive] = React.useState<typeof sizes[number] | null>(null);
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        {sizes.map(s => <Button key={s} variant="outlined" size="sm" onClick={() => setActive(s)}>
            maxWidth="{s}"
          </Button>)}
        <Dialog open={active !== null} onClose={() => setActive(null)} maxWidth={active ?? 'sm'} fullWidth aria-labelledby="size-dialog-title">
          <Dialog.Title id="size-dialog-title" onClose={() => setActive(null)}>
            maxWidth="{active}"
          </Dialog.Title>
          <Dialog.Content>
            <Typography variant="body2">
              This dialog has <code>maxWidth="{active}"</code> and <code>fullWidth</code>.
            </Typography>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="contained" onClick={() => setActive(null)}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </div>;
  }
}`,...(P=(R=g.parameters)==null?void 0:R.docs)==null?void 0:P.source},description:{story:"All maxWidth sizes — side-by-side trigger buttons.",...(I=(L=g.parameters)==null?void 0:L.docs)==null?void 0:I.description}}};var U,K,_,M,q;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <TriggerDialog label="Open dialog with dividers">
      {(open, setOpen) => <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="dividers-title" maxWidth="sm" fullWidth>
          <Dialog.Title id="dividers-title" onClose={() => setOpen(false)}>
            Terms of Service
          </Dialog.Title>
          <Dialog.Content dividers>
            <Typography variant="body2" sx={{
          mb: 2
        }}>
              These are the terms and conditions of your agreement. Please read carefully
              before accepting. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="body2" sx={{
          mb: 2
        }}>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Typography>
            <Typography variant="body2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </Typography>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outlined" onClick={() => setOpen(false)}>Decline</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Accept</Button>
          </Dialog.Actions>
        </Dialog>}
    </TriggerDialog>
}`,...(_=(K=u.parameters)==null?void 0:K.docs)==null?void 0:_.source},description:{story:"Dividers on DialogContent — top and bottom separator lines.",...(q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:q.description}}};var V,Y,J,$,N;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <TriggerDialog label="Edit profile">
      {(open, setOpen) => <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-title" maxWidth="sm" fullWidth>
          <Dialog.Title id="form-title" onClose={() => setOpen(false)}>
            Edit profile
          </Dialog.Title>
          <Dialog.Content dividers>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          paddingTop: 4
        }}>
              <div>
                <label style={{
              fontSize: 13,
              fontWeight: 600,
              display: 'block',
              marginBottom: 4
            }}>
                  Full name
                </label>
                <input defaultValue="Alex Johnson" style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '8px 12px',
              borderRadius: 4,
              border: '1px solid #d1d5db',
              fontSize: 14
            }} />
              </div>
              <div>
                <label style={{
              fontSize: 13,
              fontWeight: 600,
              display: 'block',
              marginBottom: 4
            }}>
                  Email
                </label>
                <input type="email" defaultValue="alex@example.com" style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '8px 12px',
              borderRadius: 4,
              border: '1px solid #d1d5db',
              fontSize: 14
            }} />
              </div>
            </div>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Save changes</Button>
          </Dialog.Actions>
        </Dialog>}
    </TriggerDialog>
}`,...(J=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"Form dialog — inputs inside a Dialog.",...(N=($=m.parameters)==null?void 0:$.docs)==null?void 0:N.description}}};var G,H,Q,X,Z;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <TriggerDialog label="Show alert dialog">
      {(open, setOpen) => <Dialog open={open} onClose={(_, reason) => {
      if (reason !== 'backdropClick') setOpen(false);
    }} disableEscapeKeyDown aria-labelledby="alert-title" aria-describedby="alert-desc" maxWidth="xs">
          <Dialog.Title id="alert-title">
            Session expiring
          </Dialog.Title>
          <Dialog.Content id="alert-desc">
            <Alert severity="warning" sx={{
          border: 'none'
        }}>
              Your session will expire in 2 minutes. Save your work to avoid losing changes.
            </Alert>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outlined" onClick={() => setOpen(false)}>Dismiss</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Extend session</Button>
          </Dialog.Actions>
        </Dialog>}
    </TriggerDialog>
}`,...(Q=(H=h.parameters)==null?void 0:H.docs)==null?void 0:Q.source},description:{story:"Alert dialog — no close button on title, disableEscapeKeyDown.",...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,oe,te,ie,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    fontFamily: 'sans-serif'
  }}>
      <Typography variant="overline" color="text.secondary">Focus trap + keyboard</Typography>
      <Typography variant="body2" color="text.secondary">
        When the dialog is open: Tab cycles within it, Shift+Tab goes backward,
        Escape closes it. Focus returns to the trigger button on close.
        MUI Dialog sets <code>aria-modal="true"</code> automatically.
      </Typography>
      <Typography variant="overline" color="text.secondary">ARIA wiring</Typography>
      <Typography variant="body2" color="text.secondary">
        Pass <code>aria-labelledby</code> matching <code>Dialog.Title id</code> and
        <code> aria-describedby</code> matching <code>Dialog.Content id</code>.
        The <code>role="dialog"</code> is set by MUI.
      </Typography>
      <TriggerDialog label="Open accessible dialog">
        {(open, setOpen) => <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="a11y-title" aria-describedby="a11y-desc" maxWidth="xs">
            <Dialog.Title id="a11y-title" onClose={() => setOpen(false)}>
              Accessible dialog
            </Dialog.Title>
            <Dialog.Content id="a11y-desc">
              <Typography variant="body2">
                Tab through this dialog. Focus is constrained within.
                Press Escape to close. Focus returns to the trigger.
              </Typography>
            </Dialog.Content>
            <Dialog.Actions>
              <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => setOpen(false)}>OK</Button>
            </Dialog.Actions>
          </Dialog>}
      </TriggerDialog>
    </div>
}`,...(te=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:te.source},description:{story:"Accessibility — focus trap, ARIA, and keyboard patterns.",...(ae=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ae.description}}};var ne,le,se,re,de;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  args: {
    open: false
  },
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [open, setOpen] = React.useState(false);
    const vars = ['--ep-component-dialog-background', '--ep-component-dialog-border-radius', '--ep-component-dialog-transition-duration', '--ep-component-dialog-shadow', '--ep-component-dialog-title-padding-y', '--ep-component-dialog-title-padding-x', '--ep-component-dialog-title-font-size', '--ep-component-dialog-title-font-weight', '--ep-component-dialog-content-padding-y', '--ep-component-dialog-content-padding-x', '--ep-component-dialog-actions-padding-y', '--ep-component-dialog-actions-padding-x', '--ep-component-dialog-actions-gap', '--ep-component-dialog-divider-color', '--ep-component-dialog-close-button-color', '--ep-component-dialog-close-button-color-hover', '--ep-component-dialog-close-button-size', '--ep-component-dialog-close-button-focus-color', '--ep-component-dialog-loading-background'];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <p style={{
        color: '#666',
        marginBottom: 8
      }}>
          Open DevTools → Computed to verify each var resolves. Total: {vars.length} vars.
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
        <Button variant="outlined" size="sm" onClick={() => setOpen(true)}>
          Open live dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="audit-title" maxWidth="xs">
          <Dialog.Title id="audit-title" onClose={() => setOpen(false)}>
            Token audit — live dialog
          </Dialog.Title>
          <Dialog.Content dividers>
            <Typography variant="body2">
              Inspect this element in DevTools → Computed to see all
              <code> --ep-component-dialog-*</code> vars resolved.
            </Typography>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="contained" onClick={() => setOpen(false)}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </div>;
  }
}`,...(se=(le=y.parameters)==null?void 0:le.docs)==null?void 0:se.source},description:{story:"Token Audit — all CSS custom properties the Dialog component reads.",...(de=(re=y.parameters)==null?void 0:re.docs)==null?void 0:de.description}}};const fe=["Default","ConfirmDelete","Loading","Sizes","WithDividers","FormDialog","AlertDialog","Accessibility","TokenAudit"];export{x as Accessibility,h as AlertDialog,c as ConfirmDelete,d as Default,m as FormDialog,p as Loading,g as Sizes,y as TokenAudit,u as WithDividers,fe as __namedExportsOrder,be as default};

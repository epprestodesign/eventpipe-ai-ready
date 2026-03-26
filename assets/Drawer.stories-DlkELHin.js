import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as a}from"./index-C6mWTJJr.js";import{z as t,B as i,y as Z,L as ee,E as l}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const ie={title:"Components/Overlays/Drawer",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Sliding panel overlay anchored to a viewport edge. Always controlled: open + onClose. Temporary variant: focus trap, Backdrop, Escape + click-away dismiss. Persistent/permanent: no Backdrop, no focus trap. Width token applies to left/right anchors only. Overlay system: docs/contracts/overlay-pattern.md"}}},argTypes:{open:{control:"boolean"},anchor:{control:"radio",options:["left","right","top","bottom"]},variant:{control:"radio",options:["temporary","persistent","permanent"]}},args:{open:!1,anchor:"left",variant:"temporary"}},d={render:n=>{const[r,o]=a.useState(n.open);return a.useEffect(()=>{o(n.open)},[n.open]),e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"contained",onClick:()=>o(!0),children:"Open drawer"}),e.jsxs(t,{...n,open:r,onClose:(s,y)=>{o(!1)},"aria-labelledby":"drawer-default-title",children:[e.jsx(t.Header,{onClose:()=>o(!1),children:e.jsx("span",{id:"drawer-default-title",style:{fontWeight:600,fontSize:16},children:"Navigation"})}),e.jsx(Z,{}),e.jsx(t.Body,{children:e.jsxs(ee,{children:[e.jsx(l,{children:"Dashboard"}),e.jsx(l,{children:"Events"}),e.jsx(l,{children:"Venues"}),e.jsx(l,{children:"Attendees"}),e.jsx(l,{children:"Settings"})]})})]})]})}},p={name:"Anchor Positions",args:{open:!1},render:()=>{const[n,r]=a.useState(null),o=["left","right","top","bottom"];return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:o.map(s=>e.jsxs(i,{variant:"outlined",onClick:()=>r(s),children:["Open ",s]},s))}),o.map(s=>e.jsxs(t,{open:n===s,anchor:s,onClose:()=>r(null),children:[e.jsx(t.Header,{onClose:()=>r(null),children:e.jsxs("span",{style:{fontWeight:600},children:[s.charAt(0).toUpperCase()+s.slice(1)," Drawer"]})}),e.jsx(t.Body,{children:e.jsxs("div",{style:{padding:"0 24px"},children:["Content from the ",s,"."]})})]},s))]})}},c={name:"Right Anchor",args:{open:!1},render:()=>{const[n,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"outlined",onClick:()=>r(!0),children:"Open right drawer"}),e.jsxs(t,{open:n,anchor:"right",onClose:()=>r(!1),"aria-labelledby":"drawer-right-title",children:[e.jsx(t.Header,{onClose:()=>r(!1),children:e.jsx("span",{id:"drawer-right-title",style:{fontWeight:600,fontSize:16},children:"Event Details"})}),e.jsx(Z,{}),e.jsx(t.Body,{children:e.jsxs("div",{style:{padding:"0 24px",fontFamily:"sans-serif",fontSize:14},children:[e.jsx("p",{children:e.jsx("strong",{children:"Summer Gala 2026"})}),e.jsx("p",{children:"Date: August 15, 2026"}),e.jsx("p",{children:"Venue: Grand Ballroom"}),e.jsx("p",{children:"Capacity: 500 attendees"})]})})]})]})}},h={name:"Block Backdrop Click",args:{open:!1},render:()=>{const[n,r]=a.useState(!1),[o,s]=a.useState("");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(i,{variant:"outlined",onClick:()=>r(!0),children:"Open drawer"}),o&&e.jsxs("p",{style:{fontFamily:"monospace",fontSize:12,color:"#666",margin:0},children:["Close reason: ",o]})]}),e.jsxs(t,{open:n,anchor:"left",onClose:(y,x)=>{s(x),x!=="backdropClick"&&r(!1)},children:[e.jsx(t.Header,{onClose:()=>r(!1),children:e.jsx("span",{style:{fontWeight:600},children:"Escape closes; backdrop does not"})}),e.jsx(t.Body,{children:e.jsx("div",{style:{padding:"0 24px",fontFamily:"sans-serif",fontSize:14},children:"Press Escape to close. Clicking the backdrop does nothing."})})]})]})}},m={name:"keepMounted",args:{open:!1},render:()=>{const[n,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"outlined",onClick:()=>r(!0),children:"Open keepMounted drawer"}),e.jsxs(t,{open:n,anchor:"left",keepMounted:!0,onClose:()=>r(!1),children:[e.jsx(t.Header,{onClose:()=>r(!1),children:e.jsx("span",{style:{fontWeight:600},children:"keepMounted"})}),e.jsx(t.Body,{children:e.jsx("div",{style:{padding:"0 24px",fontFamily:"sans-serif",fontSize:14},children:"This drawer remains in the DOM when closed."})})]})]})}},u={name:"Accessibility",args:{open:!1},render:()=>{const[n,r]=a.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,fontFamily:"sans-serif"},children:[e.jsxs("p",{style:{fontSize:13,color:"#666",margin:0},children:["Temporary Drawer:",e.jsx("br",{}),"• Focus is trapped inside while open (MUI Modal mechanism, same as Dialog)",e.jsx("br",{}),"• Escape key and backdrop click call ",e.jsx("code",{children:"onClose"}),e.jsx("br",{}),"• ",e.jsx("code",{children:"aria-labelledby"})," points to the heading inside the drawer",e.jsx("br",{}),"• MUI sets ",e.jsx("code",{children:'aria-modal="true"'})," automatically",e.jsx("br",{}),"• Focus returns to the trigger button on close"]}),e.jsx(i,{variant:"outlined",onClick:()=>r(!0),children:"Open accessible drawer"}),e.jsxs(t,{open:n,anchor:"left",onClose:()=>r(!1),"aria-labelledby":"drawer-a11y-title",children:[e.jsx(t.Header,{onClose:()=>r(!1),children:e.jsx("h2",{id:"drawer-a11y-title",style:{margin:0,fontSize:16,fontWeight:600},children:"Accessible Drawer"})}),e.jsx(t.Body,{children:e.jsxs("div",{style:{padding:"0 24px",fontFamily:"sans-serif",fontSize:14},children:[e.jsx("p",{children:"Tab cycles within this drawer while open."}),e.jsx(i,{variant:"contained",size:"sm",onClick:()=>r(!1),children:"Close"})]})})]})]})}},f={name:"Token Audit (DevTools)",args:{open:!1},render:()=>{const[n,r]=a.useState(!1),o=["--ep-component-drawer-background","--ep-component-drawer-border-radius","--ep-component-drawer-transition-duration","--ep-component-drawer-shadow","--ep-component-drawer-width","--ep-component-drawer-header-padding-y","--ep-component-drawer-header-padding-x","--ep-component-drawer-body-padding-y","--ep-component-drawer-body-padding-x"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",o.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:o.map(s=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:s}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${s})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},s))})]}),e.jsx(i,{variant:"outlined",size:"sm",onClick:()=>r(!0),children:"Open drawer"}),e.jsxs(t,{open:n,anchor:"left",onClose:()=>r(!1),children:[e.jsx(t.Header,{onClose:()=>r(!1),children:e.jsx("span",{style:{fontWeight:600},children:"Token Audit Drawer"})}),e.jsx(t.Body,{children:e.jsx("div",{style:{padding:"0 24px",fontSize:14,fontFamily:"sans-serif"},children:"Inspect this element in DevTools."})})]})]})}};var g,w,b,j,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = React.useState(args.open);
    React.useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer {...args} open={open} onClose={(_, reason) => {
        if (reason !== 'backdropClick') setOpen(false);else setOpen(false);
      }} aria-labelledby="drawer-default-title">
          <Drawer.Header onClose={() => setOpen(false)}>
            <span id="drawer-default-title" style={{
            fontWeight: 600,
            fontSize: 16
          }}>Navigation</span>
          </Drawer.Header>
          <Divider />
          <Drawer.Body>
            <List>
              <ListItem>Dashboard</ListItem>
              <ListItem>Events</ListItem>
              <ListItem>Venues</ListItem>
              <ListItem>Attendees</ListItem>
              <ListItem>Settings</ListItem>
            </List>
          </Drawer.Body>
        </Drawer>
      </>;
  }
}`,...(b=(w=d.parameters)==null?void 0:w.docs)==null?void 0:b.source},description:{story:"Default — left-anchored temporary drawer with header and nav list.",...(v=(j=d.parameters)==null?void 0:j.docs)==null?void 0:v.description}}};var k,D,C,B,S;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Anchor Positions',
  args: {
    open: false
  },
  render: () => {
    const [anchor, setAnchor] = React.useState<'left' | 'right' | 'top' | 'bottom' | null>(null);
    const anchors = ['left', 'right', 'top', 'bottom'] as const;
    return <>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          {anchors.map(a => <Button key={a} variant="outlined" onClick={() => setAnchor(a)}>
              Open {a}
            </Button>)}
        </div>
        {anchors.map(a => <Drawer key={a} open={anchor === a} anchor={a} onClose={() => setAnchor(null)}>
            <Drawer.Header onClose={() => setAnchor(null)}>
              <span style={{
            fontWeight: 600
          }}>{a.charAt(0).toUpperCase() + a.slice(1)} Drawer</span>
            </Drawer.Header>
            <Drawer.Body>
              <div style={{
            padding: '0 24px'
          }}>Content from the {a}.</div>
            </Drawer.Body>
          </Drawer>)}
      </>;
  }
}`,...(C=(D=p.parameters)==null?void 0:D.docs)==null?void 0:C.source},description:{story:"Anchor positions — all four edge positions.",...(S=(B=p.parameters)==null?void 0:B.docs)==null?void 0:S.description}}};var O,A,z,F,T;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Right Anchor',
  args: {
    open: false
  },
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open right drawer</Button>
        <Drawer open={open} anchor="right" onClose={() => setOpen(false)} aria-labelledby="drawer-right-title">
          <Drawer.Header onClose={() => setOpen(false)}>
            <span id="drawer-right-title" style={{
            fontWeight: 600,
            fontSize: 16
          }}>Event Details</span>
          </Drawer.Header>
          <Divider />
          <Drawer.Body>
            <div style={{
            padding: '0 24px',
            fontFamily: 'sans-serif',
            fontSize: 14
          }}>
              <p><strong>Summer Gala 2026</strong></p>
              <p>Date: August 15, 2026</p>
              <p>Venue: Grand Ballroom</p>
              <p>Capacity: 500 attendees</p>
            </div>
          </Drawer.Body>
        </Drawer>
      </>;
  }
}`,...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.source},description:{story:"Right anchor — common for detail panels and settings.",...(T=(F=c.parameters)==null?void 0:F.docs)==null?void 0:T.description}}};var H,R,M,I,E;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Block Backdrop Click',
  args: {
    open: false
  },
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [reason, setReason] = React.useState('');
    return <>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <Button variant="outlined" onClick={() => setOpen(true)}>Open drawer</Button>
          {reason && <p style={{
          fontFamily: 'monospace',
          fontSize: 12,
          color: '#666',
          margin: 0
        }}>
              Close reason: {reason}
            </p>}
        </div>
        <Drawer open={open} anchor="left" onClose={(_, r) => {
        setReason(r);
        if (r === 'backdropClick') return; // block backdrop-click
        setOpen(false);
      }}>
          <Drawer.Header onClose={() => setOpen(false)}>
            <span style={{
            fontWeight: 600
          }}>Escape closes; backdrop does not</span>
          </Drawer.Header>
          <Drawer.Body>
            <div style={{
            padding: '0 24px',
            fontFamily: 'sans-serif',
            fontSize: 14
          }}>
              Press Escape to close. Clicking the backdrop does nothing.
            </div>
          </Drawer.Body>
        </Drawer>
      </>;
  }
}`,...(M=(R=h.parameters)==null?void 0:R.docs)==null?void 0:M.source},description:{story:"Dismissal control — block backdrop click but allow Escape.",...(E=(I=h.parameters)==null?void 0:I.docs)==null?void 0:E.description}}};var W,L,P,U,_;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'keepMounted',
  args: {
    open: false
  },
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open keepMounted drawer</Button>
        <Drawer open={open} anchor="left" keepMounted onClose={() => setOpen(false)}>
          <Drawer.Header onClose={() => setOpen(false)}>
            <span style={{
            fontWeight: 600
          }}>keepMounted</span>
          </Drawer.Header>
          <Drawer.Body>
            <div style={{
            padding: '0 24px',
            fontFamily: 'sans-serif',
            fontSize: 14
          }}>
              This drawer remains in the DOM when closed.
            </div>
          </Drawer.Body>
        </Drawer>
      </>;
  }
}`,...(P=(L=m.parameters)==null?void 0:L.docs)==null?void 0:P.source},description:{story:"keepMounted — drawer DOM persists when closed.",...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.description}}};var G,V,K,N,$;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Accessibility',
  args: {
    open: false
  },
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'sans-serif'
    }}>
        <p style={{
        fontSize: 13,
        color: '#666',
        margin: 0
      }}>
          Temporary Drawer:<br />
          • Focus is trapped inside while open (MUI Modal mechanism, same as Dialog)<br />
          • Escape key and backdrop click call <code>onClose</code><br />
          • <code>aria-labelledby</code> points to the heading inside the drawer<br />
          • MUI sets <code>aria-modal="true"</code> automatically<br />
          • Focus returns to the trigger button on close
        </p>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open accessible drawer</Button>
        <Drawer open={open} anchor="left" onClose={() => setOpen(false)} aria-labelledby="drawer-a11y-title">
          <Drawer.Header onClose={() => setOpen(false)}>
            <h2 id="drawer-a11y-title" style={{
            margin: 0,
            fontSize: 16,
            fontWeight: 600
          }}>
              Accessible Drawer
            </h2>
          </Drawer.Header>
          <Drawer.Body>
            <div style={{
            padding: '0 24px',
            fontFamily: 'sans-serif',
            fontSize: 14
          }}>
              <p>Tab cycles within this drawer while open.</p>
              <Button variant="contained" size="sm" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </Drawer.Body>
        </Drawer>
      </div>;
  }
}`,...(K=(V=u.parameters)==null?void 0:V.docs)==null?void 0:K.source},description:{story:"Accessibility — focus trap, ARIA labelling, keyboard dismiss.",...($=(N=u.parameters)==null?void 0:N.docs)==null?void 0:$.description}}};var q,J,Q,X,Y;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  args: {
    open: false
  },
  render: () => {
    const [open, setOpen] = React.useState(false);
    const vars = ['--ep-component-drawer-background', '--ep-component-drawer-border-radius', '--ep-component-drawer-transition-duration', '--ep-component-drawer-shadow', '--ep-component-drawer-width', '--ep-component-drawer-header-padding-y', '--ep-component-drawer-header-padding-x', '--ep-component-drawer-body-padding-y', '--ep-component-drawer-body-padding-x'];
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
          Open drawer
        </Button>
        <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
          <Drawer.Header onClose={() => setOpen(false)}>
            <span style={{
            fontWeight: 600
          }}>Token Audit Drawer</span>
          </Drawer.Header>
          <Drawer.Body>
            <div style={{
            padding: '0 24px',
            fontSize: 14,
            fontFamily: 'sans-serif'
          }}>
              Inspect this element in DevTools.
            </div>
          </Drawer.Body>
        </Drawer>
      </div>;
  }
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"Token Audit — all CSS custom properties the Drawer component reads.",...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const le=["Default","AnchorPositions","RightAnchor","BlockBackdropClick","KeepMounted","Accessibility","TokenAudit"];export{u as Accessibility,p as AnchorPositions,h as BlockBackdropClick,d as Default,m as KeepMounted,c as RightAnchor,f as TokenAudit,le as __namedExportsOrder,ie as default};

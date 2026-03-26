import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as p}from"./index-C6mWTJJr.js";import{f as a,T as t,g as u,C as m}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const Y={title:"Components/Overlays/Backdrop",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Full-viewport semi-transparent overlay that blocks page interaction. Renders via MUI portal into document.body. Fade transition driven by the component transitionDuration token (225 ms). Use `invisible` for click-away detection without a visible scrim. Pass children (e.g. CircularProgress) for full-page loading states."}}},argTypes:{open:{control:"boolean"},invisible:{control:"boolean"}},args:{open:!1,invisible:!1}},s={render:o=>e.jsxs("div",{children:[e.jsxs(t,{variant:"body2",color:"text.secondary",sx:{mb:2},children:["Toggle ",e.jsx("code",{children:"open"})," in the Controls panel to show/hide the backdrop."]}),e.jsx(a,{...o,onClick:()=>{}})]})},n={render:()=>{const[o,r]=p.useState(!1);return e.jsxs("div",{children:[e.jsx(u,{variant:"contained",onClick:()=>r(!0),children:"Show Backdrop"}),e.jsx(a,{open:o,onClick:()=>r(!1),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16,color:"#fff"},children:[e.jsx(m,{color:"info",size:"lg"}),e.jsx(t,{variant:"body1",color:"inherit",children:"Click anywhere to dismiss"})]})})]})}},i={parameters:{layout:"padded"},render:()=>{const[o,r]=p.useState(!1),y=()=>{r(!0),setTimeout(()=>r(!1),2500)};return e.jsxs("div",{children:[e.jsx(u,{variant:"contained",onClick:y,disabled:o,children:o?"Loading…":"Simulate page load"}),e.jsx(a,{open:o,children:e.jsx(m,{color:"info",size:"xl"})})]})}},l={parameters:{layout:"padded"},render:()=>{const[o,r]=p.useState(!1);return e.jsxs("div",{style:{position:"relative"},children:[e.jsx(u,{variant:"outlined",onClick:()=>r(!0),children:"Open invisible backdrop"}),o&&e.jsx(t,{variant:"caption",color:"text.secondary",sx:{display:"block",mt:1},children:"Backdrop is open but invisible. Click anywhere to close."}),e.jsx(a,{open:o,invisible:!0,onClick:()=>r(!1)})]})}},d={parameters:{layout:"padded"},render:()=>{const[o,r]=p.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"ARIA — backdrop is presentational"}),e.jsxs(t,{variant:"body2",color:"text.secondary",children:["The backdrop itself has no ARIA role. The content it accompanies (Dialog, Drawer, etc.) should carry ",e.jsx("code",{children:'role="dialog"'})," or ",e.jsx("code",{children:'role="alertdialog"'})," with",e.jsx("code",{children:' aria-modal="true"'})," and ",e.jsx("code",{children:"aria-labelledby"}),". Use a",e.jsx("code",{children:' role="status"'})," region inside children for live region announcements."]}),e.jsx(u,{variant:"outlined",onClick:()=>r(!0),children:'Open backdrop with role="status" child'}),e.jsx(a,{open:o,onClick:()=>r(!1),children:e.jsxs("div",{role:"status","aria-label":"Page is loading",style:{color:"#fff",textAlign:"center"},children:[e.jsx(m,{color:"info",size:"lg"}),e.jsx(t,{variant:"body2",color:"inherit",sx:{mt:2},children:"Loading… (click to dismiss)"})]})})]})}},c={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const[o,r]=p.useState(!1),y=["--ep-component-backdrop-background","--ep-component-backdrop-transition-duration"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",y.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch / value"})]})}),e.jsx("tbody",{children:y.map(h=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:h}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${h})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},h))})]}),e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Live render"}),e.jsx(u,{variant:"outlined",size:"small",onClick:()=>r(!0),children:"Show backdrop"}),e.jsx(a,{open:o,onClick:()=>r(!1),children:e.jsx(t,{variant:"body2",color:"inherit",sx:{color:"#fff"},children:"background = var(--ep-component-backdrop-background) · click to close"})})]})}};var g,x,v,b,k;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div>
      <Typography variant="body2" color="text.secondary" sx={{
      mb: 2
    }}>
        Toggle <code>open</code> in the Controls panel to show/hide the backdrop.
      </Typography>
      <Backdrop {...args} onClick={() => {}} />
    </div>
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:"Default — toggle `open` in Controls.",...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.description}}};var f,j,C,T,B;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Show Backdrop
        </Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          color: '#fff'
        }}>
            <CircularProgress color="info" size="lg" />
            <Typography variant="body1" color="inherit">
              Click anywhere to dismiss
            </Typography>
          </div>
        </Backdrop>
      </div>;
  }
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source},description:{story:"Open with a close-on-click handler.",...(B=(T=n.parameters)==null?void 0:T.docs)==null?void 0:B.description}}};var S,O,w,A,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [loading, setLoading] = React.useState(false);
    const simulate = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2500);
    };
    return <div>
        <Button variant="contained" onClick={simulate} disabled={loading}>
          {loading ? 'Loading…' : 'Simulate page load'}
        </Button>
        <Backdrop open={loading}>
          <CircularProgress color="info" size="xl" />
        </Backdrop>
      </div>;
  }
}`,...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.source},description:{story:"Full-page loading — backdrop with centered CircularProgress.",...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var R,L,I,z,P;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      position: 'relative'
    }}>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open invisible backdrop
        </Button>
        {open && <Typography variant="caption" color="text.secondary" sx={{
        display: 'block',
        mt: 1
      }}>
            Backdrop is open but invisible. Click anywhere to close.
          </Typography>}
        <Backdrop open={open} invisible onClick={() => setOpen(false)} />
      </div>;
  }
}`,...(I=(L=l.parameters)==null?void 0:L.docs)==null?void 0:I.source},description:{story:"Invisible backdrop — click-away detection without a visible scrim.",...(P=(z=l.parameters)==null?void 0:z.docs)==null?void 0:P.description}}};var F,U,E,W,_;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <Typography variant="overline" color="text.secondary">
          ARIA — backdrop is presentational
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The backdrop itself has no ARIA role. The content it accompanies (Dialog, Drawer, etc.)
          should carry <code>role="dialog"</code> or <code>role="alertdialog"</code> with
          <code> aria-modal="true"</code> and <code>aria-labelledby</code>. Use a
          <code> role="status"</code> region inside children for live region announcements.
        </Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open backdrop with role="status" child
        </Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <div role="status" aria-label="Page is loading" style={{
          color: '#fff',
          textAlign: 'center'
        }}>
            <CircularProgress color="info" size="lg" />
            <Typography variant="body2" color="inherit" sx={{
            mt: 2
          }}>
              Loading… (click to dismiss)
            </Typography>
          </div>
        </Backdrop>
      </div>;
  }
}`,...(E=(U=d.parameters)==null?void 0:U.docs)==null?void 0:E.source},description:{story:"Accessibility — ARIA patterns for modal overlays.",...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.description}}};var $,M,q,G,H;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [open, setOpen] = React.useState(false);
    const vars = ['--ep-component-backdrop-background', '--ep-component-backdrop-transition-duration'];
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
            }}>Swatch / value</th>
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
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Live render
        </Typography>
        <Button variant="outlined" size="small" onClick={() => setOpen(true)}>
          Show backdrop
        </Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <Typography variant="body2" color="inherit" sx={{
          color: '#fff'
        }}>
            background = var(--ep-component-backdrop-background) · click to close
          </Typography>
        </Backdrop>
      </div>;
  }
}`,...(q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:q.source},description:{story:"Token Audit — all CSS custom properties the Backdrop component reads.",...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};const Z=["Default","WithCloseOnClick","LoadingOverlay","Invisible","Accessibility","TokenAudit"];export{d as Accessibility,s as Default,l as Invisible,i as LoadingOverlay,c as TokenAudit,n as WithCloseOnClick,Z as __namedExportsOrder,Y as default};

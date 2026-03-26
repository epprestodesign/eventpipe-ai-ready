import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as s}from"./index-C6mWTJJr.js";import{a1 as r,B as c,T as i,y as I}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const ee={title:"Components/Overlays/Popover",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Lightweight positioning overlay anchored to a trigger element. No focus trap — background remains interactive. Click-away closes automatically. No visible Backdrop. For navigation lists use Menu. For persistent panels use Drawer. Overlay system: docs/contracts/overlay-pattern.md"}}},argTypes:{open:{control:"boolean"}},args:{open:!1,anchorEl:null}},p={render:()=>{const[t,n]=s.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"outlined",onClick:o=>n(o.currentTarget),"aria-haspopup":"true","aria-expanded":!!t,children:"Open popover"}),e.jsx(r,{open:!!t,anchorEl:t,onClose:()=>n(null),children:e.jsx(r.Content,{children:e.jsx(i,{variant:"body2",children:"This is a Popover. Click away to close."})})})]})}},d={name:"Anchor Positions",render:()=>{const t=[{label:"Bottom left (default)",anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},{label:"Bottom right",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},{label:"Top left",anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"}},{label:"Right center",anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"}}],[n,o]=s.useState(null),l=s.useRef({});return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",padding:"48px 0"},children:[t.map(a=>e.jsx(c,{variant:"outlined",size:"sm",ref:q=>{l.current[a.label]=q},onClick:()=>o(a.label),children:a.label},a.label)),t.map(a=>e.jsx(r,{open:n===a.label,anchorEl:l.current[a.label]??null,onClose:()=>o(null),anchorOrigin:a.anchorOrigin,transformOrigin:a.transformOrigin,children:e.jsx(r.Content,{children:e.jsx(i,{variant:"body2",children:a.label})})},a.label))]})}},h={name:"Rich Content",render:()=>{const[t,n]=s.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"contained",onClick:o=>n(o.currentTarget),children:"Event info"}),e.jsxs(r,{open:!!t,anchorEl:t,onClose:()=>n(null),children:[e.jsxs(r.Content,{children:[e.jsx(i,{variant:"subtitle2",gutterBottom:!0,children:"Summer Gala 2026"}),e.jsx(i,{variant:"body2",color:"text.secondary",children:"August 15, 2026 · Grand Ballroom"}),e.jsx(i,{variant:"body2",color:"text.secondary",style:{marginTop:4},children:"Capacity: 500 attendees"})]}),e.jsx(I,{}),e.jsx(r.Content,{children:e.jsx(c,{variant:"text",size:"sm",onClick:()=>n(null),children:"View details"})})]})]})}},u={name:"Custom Content (no padding)",render:()=>{const[t,n]=s.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"outlined",onClick:o=>n(o.currentTarget),children:"Custom content"}),e.jsx(r,{open:!!t,anchorEl:t,onClose:()=>n(null),children:e.jsx("div",{style:{padding:"8px 0",minWidth:200},children:["Option A","Option B","Option C"].map(o=>e.jsx("div",{onClick:()=>n(null),style:{padding:"8px 16px",cursor:"pointer",fontSize:14,fontFamily:"sans-serif"},children:o},o))})})]})}},m={name:"Accessibility",render:()=>{const[t,n]=s.useState(null),o=!!t;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,fontFamily:"sans-serif"},children:[e.jsxs("p",{style:{fontSize:13,color:"#666",margin:0},children:["Popover has no focus trap — background remains interactive.",e.jsx("br",{}),"Trigger should set ",e.jsx("code",{children:'aria-haspopup="true"'})," and ",e.jsx("code",{children:"aria-expanded"}),".",e.jsx("br",{}),"Use ",e.jsx("code",{children:"aria-controls"})," pointing to the popover ",e.jsx("code",{children:"id"})," when open."]}),e.jsxs(c,{variant:"outlined",onClick:l=>n(l.currentTarget),"aria-haspopup":"true","aria-expanded":o,"aria-controls":o?"a11y-popover":void 0,children:[o?"Close":"Open"," popover"]}),e.jsx(r,{id:"a11y-popover",open:o,anchorEl:t,onClose:()=>n(null),children:e.jsx(r.Content,{children:e.jsx(i,{variant:"body2",children:"Non-blocking overlay. Background is still focusable."})})})]})}},v={name:"Token Audit (DevTools)",render:()=>{const[t,n]=s.useState(null),o=["--ep-component-popover-background","--ep-component-popover-border-radius","--ep-component-popover-shadow","--ep-component-popover-padding-y","--ep-component-popover-padding-x"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",o.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:o.map(l=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:l}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${l})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},l))})]}),e.jsx(c,{variant:"outlined",size:"sm",onClick:l=>n(l.currentTarget),children:"Open popover"}),e.jsx(r,{open:!!t,anchorEl:t,onClose:()=>n(null),children:e.jsx(r.Content,{children:e.jsx(i,{variant:"body2",children:"Token audit — inspect in DevTools."})})})]})}};var g,y,x,b,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    return <>
        <Button variant="outlined" onClick={e => setAnchorEl(e.currentTarget)} aria-haspopup="true" aria-expanded={Boolean(anchorEl)}>
          Open popover
        </Button>
        <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <Popover.Content>
            <Typography variant="body2">
              This is a Popover. Click away to close.
            </Typography>
          </Popover.Content>
        </Popover>
      </>;
  }
}`,...(x=(y=p.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:"Default — opens below the trigger button with generic content.",...(f=(b=p.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var C,E,T,j,B;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Anchor Positions',
  render: () => {
    type Placement = {
      label: string;
      anchorOrigin: {
        vertical: 'top' | 'center' | 'bottom';
        horizontal: 'left' | 'center' | 'right';
      };
      transformOrigin: {
        vertical: 'top' | 'center' | 'bottom';
        horizontal: 'left' | 'center' | 'right';
      };
    };
    const placements: Placement[] = [{
      label: 'Bottom left (default)',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    }, {
      label: 'Bottom right',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    }, {
      label: 'Top left',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left'
      },
      transformOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      }
    }, {
      label: 'Right center',
      anchorOrigin: {
        vertical: 'center',
        horizontal: 'right'
      },
      transformOrigin: {
        vertical: 'center',
        horizontal: 'left'
      }
    }];
    const [active, setActive] = React.useState<string | null>(null);
    const refs = React.useRef<Record<string, HTMLButtonElement | null>>({});
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      padding: '48px 0'
    }}>
        {placements.map(p => <Button key={p.label} variant="outlined" size="sm" ref={el => {
        refs.current[p.label] = el;
      }} onClick={() => setActive(p.label)}>
            {p.label}
          </Button>)}
        {placements.map(p => <Popover key={p.label} open={active === p.label} anchorEl={refs.current[p.label] ?? null} onClose={() => setActive(null)} anchorOrigin={p.anchorOrigin} transformOrigin={p.transformOrigin}>
            <Popover.Content>
              <Typography variant="body2">{p.label}</Typography>
            </Popover.Content>
          </Popover>)}
      </div>;
  }
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source},description:{story:"Anchor positions — all common quadrant placements.",...(B=(j=d.parameters)==null?void 0:j.docs)==null?void 0:B.description}}};var A,k,O,P,S;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Rich Content',
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    return <>
        <Button variant="contained" onClick={e => setAnchorEl(e.currentTarget)}>
          Event info
        </Button>
        <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <Popover.Content>
            <Typography variant="subtitle2" gutterBottom>Summer Gala 2026</Typography>
            <Typography variant="body2" color="text.secondary">
              August 15, 2026 · Grand Ballroom
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{
            marginTop: 4
          }}>
              Capacity: 500 attendees
            </Typography>
          </Popover.Content>
          <Divider />
          <Popover.Content>
            <Button variant="text" size="sm" onClick={() => setAnchorEl(null)}>
              View details
            </Button>
          </Popover.Content>
        </Popover>
      </>;
  }
}`,...(O=(k=h.parameters)==null?void 0:k.docs)==null?void 0:O.source},description:{story:"Rich content — popover with heading, body text, and action.",...(S=(P=h.parameters)==null?void 0:P.docs)==null?void 0:S.description}}};var z,w,R,D,F;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Custom Content (no padding)',
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    return <>
        <Button variant="outlined" onClick={e => setAnchorEl(e.currentTarget)}>
          Custom content
        </Button>
        <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          {/* No Popover.Content — consumer handles layout fully */}
          <div style={{
          padding: '8px 0',
          minWidth: 200
        }}>
            {['Option A', 'Option B', 'Option C'].map(opt => <div key={opt} onClick={() => setAnchorEl(null)} style={{
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: 14,
            fontFamily: 'sans-serif'
          }}>
                {opt}
              </div>)}
          </div>
        </Popover>
      </>;
  }
}`,...(R=(w=u.parameters)==null?void 0:w.docs)==null?void 0:R.source},description:{story:"No padding — custom content without Popover.Content wrapper.",...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.description}}};var L,M,H,N,G;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Accessibility',
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
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
          Popover has no focus trap — background remains interactive.<br />
          Trigger should set <code>aria-haspopup="true"</code> and <code>aria-expanded</code>.<br />
          Use <code>aria-controls</code> pointing to the popover <code>id</code> when open.
        </p>
        <Button variant="outlined" onClick={e => setAnchorEl(e.currentTarget)} aria-haspopup="true" aria-expanded={open} aria-controls={open ? 'a11y-popover' : undefined}>
          {open ? 'Close' : 'Open'} popover
        </Button>
        <Popover id="a11y-popover" open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <Popover.Content>
            <Typography variant="body2">
              Non-blocking overlay. Background is still focusable.
            </Typography>
          </Popover.Content>
        </Popover>
      </div>;
  }
}`,...(H=(M=m.parameters)==null?void 0:M.docs)==null?void 0:H.source},description:{story:"Accessibility — trigger attributes and non-blocking behavior.",...(G=(N=m.parameters)==null?void 0:N.docs)==null?void 0:G.description}}};var W,U,V,_,$;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const vars = ['--ep-component-popover-background', '--ep-component-popover-border-radius', '--ep-component-popover-shadow', '--ep-component-popover-padding-y', '--ep-component-popover-padding-x'];
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
        <Button variant="outlined" size="sm" onClick={e => setAnchorEl(e.currentTarget)}>
          Open popover
        </Button>
        <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <Popover.Content>
            <Typography variant="body2">Token audit — inspect in DevTools.</Typography>
          </Popover.Content>
        </Popover>
      </div>;
  }
}`,...(V=(U=v.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:"Token Audit — all CSS custom properties the Popover component reads.",...($=(_=v.parameters)==null?void 0:_.docs)==null?void 0:$.description}}};const oe=["Default","AnchorPositions","RichContent","CustomContent","Accessibility","TokenAudit"];export{m as Accessibility,d as AnchorPositions,u as CustomContent,p as Default,h as RichContent,v as TokenAudit,oe as __namedExportsOrder,ee as default};

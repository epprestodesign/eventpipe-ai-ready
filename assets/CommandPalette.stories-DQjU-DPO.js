import{j as e}from"./jsx-runtime-BT65X5dW.js";import{r as o}from"./index-C6mWTJJr.js";import{t as a}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const ue={title:"Components/Overlays/CommandPalette",component:a,parameters:{layout:"padded",docs:{description:{component:"CommandPalette — keyboard-driven command launcher. Accepts flat CommandItem[] or grouped CommandGroup[]. Focus stays on TextField input throughout navigation. ArrowDown/Up cycles items, Enter executes, Escape closes."}}}},h=[{id:"new-event",label:"New event",icon:"add",onAction:()=>alert("New event")},{id:"search",label:"Search events",icon:"search",onAction:()=>alert("Search")},{id:"settings",label:"Open settings",icon:"settings",shortcut:"⌘,",onAction:()=>alert("Settings")},{id:"profile",label:"View profile",icon:"person",onAction:()=>alert("Profile")},{id:"logout",label:"Sign out",icon:"arrow-forward",onAction:()=>alert("Sign out")}],f=[{id:"navigation",label:"Navigation",items:[{id:"go-dashboard",label:"Go to dashboard",icon:"chevron-right",shortcut:"⌘H",onAction:()=>alert("Dashboard")},{id:"go-events",label:"Go to events",icon:"calendar",shortcut:"⌘E",onAction:()=>alert("Events")},{id:"go-settings",label:"Go to settings",icon:"settings",shortcut:"⌘,",onAction:()=>alert("Settings")}]},{id:"actions",label:"Actions",items:[{id:"new-event",label:"Create new event",icon:"add",description:"Start a new event from scratch",onAction:()=>alert("Create event")},{id:"invite",label:"Invite team member",icon:"person",description:"Send an invitation email",onAction:()=>alert("Invite")},{id:"export",label:"Export data",icon:"download",description:"Download as CSV or JSON",onAction:()=>alert("Export")}]},{id:"recent",label:"Recent",items:[{id:"recent-1",label:"Summer Conference 2026",icon:"calendar-month",onAction:()=>alert("Summer Conf")},{id:"recent-2",label:"Product Launch Q1",icon:"calendar-month",onAction:()=>alert("Product Launch")}]}];function se({commands:n,isLoading:t,placeholder:r,emptyMessage:s,groupedVariant:i=!1}){const[y,v]=o.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>v(!0),style:{padding:"8px 16px",borderRadius:6,border:"1px solid #E5E7EB",background:"#F9FAFB",cursor:"pointer",fontSize:14},children:"Open palette (or press ⌘K)"}),e.jsx(a,{open:y,onClose:()=>v(!1),commands:i?f:n??h,isLoading:t,placeholder:r,emptyMessage:s})]})}const p={render:()=>e.jsx(se,{})},d={render:()=>{const[n,t]=o.useState(!0);return e.jsx(a,{open:n,onClose:()=>t(!1),commands:h})}},c={render:()=>{const[n,t]=o.useState(!0),[r,s]=o.useState(null),i=h.map(y=>({...y,onAction:()=>{s(y.label),t(!1)}}));return e.jsxs("div",{children:[r&&e.jsxs("div",{style:{marginBottom:12,padding:"8px 12px",background:"#D1FAE5",borderRadius:6,fontSize:13},children:["Executed: ",e.jsx("strong",{children:r})]}),e.jsx("button",{onClick:()=>t(!0),style:{padding:"8px 16px",borderRadius:6,border:"1px solid #E5E7EB",background:"#F9FAFB",cursor:"pointer",fontSize:14},children:"Open palette"}),e.jsx(a,{open:n,onClose:()=>t(!1),commands:i})]})}},l={render:()=>{const[n,t]=o.useState(!0);return e.jsx(a,{open:n,onClose:()=>t(!1),commands:f,placeholder:"Search actions, pages…"})}},m={render:()=>{const[n,t]=o.useState(!0);return e.jsx(a,{open:n,onClose:()=>t(!1),commands:h,isLoading:!0})}},u={render:()=>{const[n,t]=o.useState(!0);return e.jsx(a,{open:n,onClose:()=>t(!1),commands:[],emptyMessage:"No results found for your query"})}},g={parameters:{docs:{description:{story:'- MuiDialog provides `role="dialog"` and `aria-modal="true"` automatically.\n- TextField input receives `aria-label="Search commands"`.\n- Active item tracked via `aria-activedescendant` on the input.\n- Items receive `role="option"` and `aria-selected`.\n- **Deviation**: Focus stays on TextField input (not moved to list items).   Registered deviation: focus-on-input pattern for command palette context.'}}},render:()=>{const[n,t]=o.useState(!0);return e.jsx(a,{open:n,onClose:()=>t(!1),commands:f,placeholder:"Search commands…"})}},x={parameters:{docs:{description:{story:"All 23 `--ep-component-command-palette-*` tokens in use."}}},render:()=>{const n=["--ep-component-command-palette-overlay-background","--ep-component-command-palette-overlay-border-radius","--ep-component-command-palette-overlay-shadow","--ep-component-command-palette-overlay-width","--ep-component-command-palette-overlay-top-offset","--ep-component-command-palette-input-font-size","--ep-component-command-palette-input-padding-y","--ep-component-command-palette-input-padding-x","--ep-component-command-palette-divider-color","--ep-component-command-palette-item-padding-y","--ep-component-command-palette-item-padding-x","--ep-component-command-palette-item-font-size","--ep-component-command-palette-item-description-font-size","--ep-component-command-palette-item-description-color","--ep-component-command-palette-item-shortcut-color","--ep-component-command-palette-item-shortcut-font-size","--ep-component-command-palette-list-max-height","--ep-component-command-palette-group-label-font-size","--ep-component-command-palette-group-label-color","--ep-component-command-palette-group-label-font-weight","--ep-component-command-palette-group-label-padding-y","--ep-component-command-palette-empty-font-size","--ep-component-command-palette-empty-color"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsx("div",{style:{marginBottom:16,fontWeight:700,fontSize:14},children:"CommandPalette — 23 component tokens"}),e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #E5E7EB"},children:[e.jsx("th",{style:{textAlign:"left",padding:"6px 12px",color:"#6B7280"},children:"#"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 12px",color:"#6B7280"},children:"Token"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 12px",color:"#6B7280"},children:"Resolved value"})]})}),e.jsx("tbody",{children:n.map((t,r)=>e.jsxs("tr",{style:{borderBottom:"1px solid #F3F4F6"},children:[e.jsx("td",{style:{padding:"5px 12px",color:"#9CA3AF"},children:r+1}),e.jsx("td",{style:{padding:"5px 12px",color:"#374151"},children:t}),e.jsx("td",{style:{padding:"5px 12px",color:"#6B7280"},children:e.jsx("span",{ref:s=>{if(s){const i=getComputedStyle(document.documentElement).getPropertyValue(t).trim();s.textContent=i||"(not resolved)"}}})})]},t))})]})]})}};var b,A,S,C,O;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <PaletteWrapper />
}`,...(S=(A=p.parameters)==null?void 0:A.docs)==null?void 0:S.source},description:{story:`Default — flat command list, uncontrolled open state.
Click the button to open. Type to filter, ArrowDown/Up to navigate, Enter to execute.`,...(O=(C=p.parameters)==null?void 0:C.docs)==null?void 0:O.description}}};var E,F,k,j,w;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <CommandPalette open={open} onClose={() => setOpen(false)} commands={FLAT_COMMANDS} />;
  }
}`,...(k=(F=d.parameters)==null?void 0:F.docs)==null?void 0:k.source},description:{story:"OpenState — palette rendered open immediately so you can inspect layout without interaction.",...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var D,B,P,z,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    const [lastAction, setLastAction] = useState<string | null>(null);
    const commands: CommandItem[] = FLAT_COMMANDS.map(cmd => ({
      ...cmd,
      onAction: () => {
        setLastAction(cmd.label);
        setOpen(false);
      }
    }));
    return <div>
        {lastAction && <div style={{
        marginBottom: 12,
        padding: '8px 12px',
        background: '#D1FAE5',
        borderRadius: 6,
        fontSize: 13
      }}>
            Executed: <strong>{lastAction}</strong>
          </div>}
        <button onClick={() => setOpen(true)} style={{
        padding: '8px 16px',
        borderRadius: 6,
        border: '1px solid #E5E7EB',
        background: '#F9FAFB',
        cursor: 'pointer',
        fontSize: 14
      }}>
          Open palette
        </button>
        <CommandPalette open={open} onClose={() => setOpen(false)} commands={commands} />
      </div>;
  }
}`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source},description:{story:`KeyboardNavigation — demonstrates ArrowDown/Up cycling, Enter execution, Escape close.
The active item highlight uses the List token namespace for consistency.`,...(M=(z=c.parameters)==null?void 0:z.docs)==null?void 0:M.description}}};var T,L,N,R,G;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <CommandPalette open={open} onClose={() => setOpen(false)} commands={GROUPED_COMMANDS} placeholder="Search actions, pages…" />;
  }
}`,...(N=(L=l.parameters)==null?void 0:L.docs)==null?void 0:N.source},description:{story:`GroupedCommands — CommandGroup[] input normalized to labelled sections.
Group headers render as non-interactive divider rows.`,...(G=(R=l.parameters)==null?void 0:R.docs)==null?void 0:G.description}}};var _,I,U,K,V;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <CommandPalette open={open} onClose={() => setOpen(false)} commands={FLAT_COMMANDS} isLoading />;
  }
}`,...(U=(I=m.parameters)==null?void 0:I.docs)==null?void 0:U.source},description:{story:"Loading — isLoading=true shows skeleton rows (Pattern E) instead of the command list.",...(V=(K=m.parameters)==null?void 0:K.docs)==null?void 0:V.description}}};var W,q,H,J,Q;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <CommandPalette open={open} onClose={() => setOpen(false)} commands={[]} emptyMessage="No results found for your query" />;
  }
}`,...(H=(q=u.parameters)==null?void 0:q.docs)==null?void 0:H.source},description:{story:"Empty — no commands match the initial query. Pattern F empty state is rendered.",...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var X,Y,Z,$,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '- MuiDialog provides \`role="dialog"\` and \`aria-modal="true"\` automatically.\\n' + '- TextField input receives \`aria-label="Search commands"\`.\\n' + '- Active item tracked via \`aria-activedescendant\` on the input.\\n' + '- Items receive \`role="option"\` and \`aria-selected\`.\\n' + '- **Deviation**: Focus stays on TextField input (not moved to list items). ' + '  Registered deviation: focus-on-input pattern for command palette context.'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return <CommandPalette open={open} onClose={() => setOpen(false)} commands={GROUPED_COMMANDS} placeholder="Search commands…" />;
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`Accessibility — annotated with ARIA attributes.
role="dialog" + aria-label on MuiDialog, aria-label on input.
Focus stays on TextField throughout keyboard navigation (deviation from Menu).`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var te,ne,oe,ae,re;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'All 23 \`--ep-component-command-palette-*\` tokens in use.'
      }
    }
  },
  render: () => {
    const tokens = ['--ep-component-command-palette-overlay-background', '--ep-component-command-palette-overlay-border-radius', '--ep-component-command-palette-overlay-shadow', '--ep-component-command-palette-overlay-width', '--ep-component-command-palette-overlay-top-offset', '--ep-component-command-palette-input-font-size', '--ep-component-command-palette-input-padding-y', '--ep-component-command-palette-input-padding-x', '--ep-component-command-palette-divider-color', '--ep-component-command-palette-item-padding-y', '--ep-component-command-palette-item-padding-x', '--ep-component-command-palette-item-font-size', '--ep-component-command-palette-item-description-font-size', '--ep-component-command-palette-item-description-color', '--ep-component-command-palette-item-shortcut-color', '--ep-component-command-palette-item-shortcut-font-size', '--ep-component-command-palette-list-max-height', '--ep-component-command-palette-group-label-font-size', '--ep-component-command-palette-group-label-color', '--ep-component-command-palette-group-label-font-weight', '--ep-component-command-palette-group-label-padding-y', '--ep-component-command-palette-empty-font-size', '--ep-component-command-palette-empty-color'];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <div style={{
        marginBottom: 16,
        fontWeight: 700,
        fontSize: 14
      }}>
          CommandPalette — 23 component tokens
        </div>
        <table style={{
        borderCollapse: 'collapse',
        width: '100%'
      }}>
          <thead>
            <tr style={{
            borderBottom: '2px solid #E5E7EB'
          }}>
              <th style={{
              textAlign: 'left',
              padding: '6px 12px',
              color: '#6B7280'
            }}>#</th>
              <th style={{
              textAlign: 'left',
              padding: '6px 12px',
              color: '#6B7280'
            }}>Token</th>
              <th style={{
              textAlign: 'left',
              padding: '6px 12px',
              color: '#6B7280'
            }}>Resolved value</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token, i) => <tr key={token} style={{
            borderBottom: '1px solid #F3F4F6'
          }}>
                <td style={{
              padding: '5px 12px',
              color: '#9CA3AF'
            }}>{i + 1}</td>
                <td style={{
              padding: '5px 12px',
              color: '#374151'
            }}>{token}</td>
                <td style={{
              padding: '5px 12px',
              color: '#6B7280'
            }}>
                  <span ref={el => {
                if (el) {
                  const v = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
                  el.textContent = v || '(not resolved)';
                }
              }} />
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(oe=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:oe.source},description:{story:"TokenAudit — visual audit of all 23 component tokens.",...(re=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:re.description}}};const ge=["Default","OpenState","KeyboardNavigation","GroupedCommands","Loading","Empty","Accessibility","TokenAudit"];export{g as Accessibility,p as Default,u as Empty,l as GroupedCommands,c as KeyboardNavigation,m as Loading,d as OpenState,x as TokenAudit,ge as __namedExportsOrder,ue as default};

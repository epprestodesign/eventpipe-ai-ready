import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as j}from"./index-C6mWTJJr.js";import{Z as M,T as b,B as ke,I as t,_ as n,$ as i}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const Be={title:"Components/Navigation/Menu",component:M,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Portal-rendered overlay anchored to a trigger element. Always controlled: `open` + `anchorEl` + `onClose`. Keyboard navigation handled by MUI."}}},argTypes:{open:{control:!1},anchorEl:{control:!1},onClose:{action:"closed"},keepMounted:{control:"boolean",table:{defaultValue:{summary:"false"}}},disablePortal:{control:"boolean",table:{defaultValue:{summary:"false"}}}},args:{open:!1}};function a({label:o="Open menu",children:r,menuProps:s={}}){const[d,f]=j.useState(null),De=!!d;return e.jsxs("div",{children:[e.jsx(ke,{variant:"outlined",onClick:we=>f(we.currentTarget),endSlot:e.jsx(t,{name:"chevron-down",size:"sm"}),children:o}),e.jsx(M,{open:De,anchorEl:d,onClose:()=>f(null),...s,children:r})]})}const c={render:()=>e.jsxs(a,{label:"Actions",children:[e.jsx(n,{onClick:()=>alert("Edit clicked"),children:"Edit"}),e.jsx(n,{onClick:()=>alert("Duplicate clicked"),children:"Duplicate"}),e.jsx(n,{onClick:()=>alert("Archive clicked"),children:"Archive"}),e.jsx(i,{}),e.jsx(n,{onClick:()=>alert("Delete clicked"),children:"Delete"})]})},l={render:()=>e.jsxs(a,{label:"Event actions",children:[e.jsx(n,{onClick:()=>{},startIcon:e.jsx(t,{name:"edit",size:"sm"}),children:"Edit event"}),e.jsx(n,{onClick:()=>{},startIcon:e.jsx(t,{name:"add",size:"sm"}),children:"Duplicate"}),e.jsx(n,{onClick:()=>{},startIcon:e.jsx(t,{name:"download",size:"sm"}),children:"Export CSV"}),e.jsx(n,{onClick:()=>{},startIcon:e.jsx(t,{name:"upload",size:"sm"}),children:"Import data"}),e.jsx(i,{}),e.jsx(n,{onClick:()=>{},startIcon:e.jsx(t,{name:"delete",size:"sm"}),disabled:!0,children:"Delete event"})]})},m={render:()=>e.jsxs(a,{label:"View options",children:[e.jsx(n,{startIcon:e.jsx(t,{name:"filter",size:"sm"}),endIcon:e.jsx(t,{name:"check",size:"sm"}),children:"Filter active"}),e.jsx(n,{startIcon:e.jsx(t,{name:"arrow-forward",size:"sm"}),children:"Sort by date"}),e.jsx(i,{}),e.jsx(n,{startIcon:e.jsx(t,{name:"settings",size:"sm"}),children:"Preferences"})]})},p={render:()=>{const[o,r]=j.useState("list");return e.jsxs(a,{label:`View: ${o}`,children:[e.jsx(n,{selected:o==="list",onClick:()=>r("list"),children:"List view"}),e.jsx(n,{selected:o==="grid",onClick:()=>r("grid"),children:"Grid view"}),e.jsx(n,{selected:o==="calendar",onClick:()=>r("calendar"),children:"Calendar view"})]})}},u={render:()=>e.jsxs(a,{label:"Dense menu",children:[e.jsx(n,{dense:!0,startIcon:e.jsx(t,{name:"edit",size:"sm"}),children:"Edit"}),e.jsx(n,{dense:!0,startIcon:e.jsx(t,{name:"add",size:"sm"}),children:"Duplicate"}),e.jsx(n,{dense:!0,startIcon:e.jsx(t,{name:"visibility",size:"sm"}),children:"Preview"}),e.jsx(i,{}),e.jsx(n,{dense:!0,startIcon:e.jsx(t,{name:"delete",size:"sm"}),children:"Delete"})]})},h={render:()=>e.jsxs(a,{label:"Restricted actions",children:[e.jsx(n,{onClick:()=>{},children:"View details"}),e.jsx(n,{onClick:()=>{},children:"Edit"}),e.jsx(n,{disabled:!0,children:"Publish (requires approval)"}),e.jsx(i,{}),e.jsx(n,{disabled:!0,startIcon:e.jsx(t,{name:"delete",size:"sm"}),children:"Delete (admin only)"})]})},I={render:()=>e.jsxs(a,{label:"Navigate",children:[e.jsx(n,{href:"#/events",startIcon:e.jsx(t,{name:"calendar",size:"sm"}),children:"Events"}),e.jsx(n,{href:"#/attendees",startIcon:e.jsx(t,{name:"person",size:"sm"}),children:"Attendees"}),e.jsx(n,{href:"#/reports",startIcon:e.jsx(t,{name:"filter",size:"sm"}),children:"Reports"}),e.jsx(i,{}),e.jsx(n,{href:"#/settings",startIcon:e.jsx(t,{name:"settings",size:"sm"}),children:"Settings"})]})},x={render:()=>e.jsx("div",{style:{paddingTop:200},children:e.jsxs(a,{label:"Open above",menuProps:{anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"}},children:[e.jsx(n,{children:"Option one"}),e.jsx(n,{children:"Option two"}),e.jsx(n,{children:"Option three"})]})})},v={render:()=>{const[o,r]=j.useState(null),s=!!o;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(b,{variant:"body1",children:"EventPipe 2026 — Spring Summit"}),e.jsx("button",{onClick:d=>r(s?null:d.currentTarget),"aria-label":"More options","aria-haspopup":"true","aria-expanded":s,style:{background:"none",border:"none",cursor:"pointer",borderRadius:4,padding:4,display:"flex"},children:e.jsx(t,{name:"settings",size:"md"})}),e.jsxs(M,{open:s,anchorEl:o,onClose:()=>r(null),anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(n,{startIcon:e.jsx(t,{name:"edit",size:"sm"}),children:"Edit"}),e.jsx(n,{startIcon:e.jsx(t,{name:"add",size:"sm"}),children:"Duplicate"}),e.jsx(n,{startIcon:e.jsx(t,{name:"download",size:"sm"}),children:"Export"}),e.jsx(i,{}),e.jsx(n,{startIcon:e.jsx(t,{name:"delete",size:"sm"}),children:"Delete"})]})]})}},g={parameters:{layout:"padded"},render:()=>{const[o,r]=j.useState(null),s=!!o;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(b,{variant:"overline",color:"text.secondary",children:"Trigger with aria-haspopup + aria-expanded"}),e.jsxs("div",{style:{marginTop:8},children:[e.jsx(ke,{variant:"outlined",onClick:d=>r(o?null:d.currentTarget),"aria-haspopup":"menu","aria-expanded":s,"aria-controls":s?"a11y-demo-menu":void 0,endSlot:e.jsx(t,{name:s?"chevron-up":"chevron-down",size:"sm"}),children:"File menu"}),e.jsxs(M,{open:s,anchorEl:o,onClose:()=>r(null),children:[e.jsx(n,{startIcon:e.jsx(t,{name:"add",size:"sm"}),children:"New event"}),e.jsx(n,{startIcon:e.jsx(t,{name:"upload",size:"sm"}),children:"Import…"}),e.jsx(n,{startIcon:e.jsx(t,{name:"download",size:"sm"}),children:"Export…"}),e.jsx(i,{}),e.jsx(n,{disabled:!0,startIcon:e.jsx(t,{name:"delete",size:"sm"}),children:"Delete all (disabled)"})]})]})]}),e.jsxs("div",{children:[e.jsx(b,{variant:"overline",color:"text.secondary",children:"Keyboard nav — Tab to trigger, Enter opens, arrows navigate, Escape closes"}),e.jsx(b,{variant:"body2",color:"text.secondary",sx:{mt:.5},children:'Screen reader: role="menu" on container, role="menuitem" on each item. Disabled items are announced as aria-disabled.'})]})]})}},y={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const o=["--ep-component-menu-background","--ep-component-menu-border-radius","--ep-component-menu-shadow","--ep-component-menu-min-width","--ep-component-menu-item-color","--ep-component-menu-item-color-disabled","--ep-component-menu-item-background","--ep-component-menu-item-background-hover","--ep-component-menu-item-background-focus","--ep-component-menu-item-background-selected","--ep-component-menu-item-background-selected-hover","--ep-component-menu-item-background-disabled","--ep-component-menu-item-font-size","--ep-component-menu-item-padding-y","--ep-component-menu-item-padding-x","--ep-component-menu-item-dense-padding-y","--ep-component-menu-item-dense-padding-x","--ep-component-menu-item-icon-size","--ep-component-menu-item-icon-color","--ep-component-menu-item-icon-gap","--ep-component-menu-divider-color","--ep-component-menu-divider-margin-y"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsx("p",{style:{color:"#666",marginBottom:8},children:"Open DevTools → Computed to verify each var resolves (no fallback value). Note: shadow/size vars won't show a color swatch — inspect the raw value."}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:o.map(r=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:r}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${r})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},r))})]}),e.jsxs("div",{style:{marginTop:16},children:[e.jsx(b,{variant:"overline",color:"text.secondary",children:"Live renders"}),e.jsxs("div",{style:{display:"flex",gap:32,marginTop:8,flexWrap:"wrap"},children:[e.jsxs("div",{style:{border:"1px solid #eee",borderRadius:8,overflow:"hidden",minWidth:200},children:[e.jsx(n,{startIcon:e.jsx(t,{name:"edit",size:"sm"}),children:"Normal item"}),e.jsx(n,{startIcon:e.jsx(t,{name:"add",size:"sm"}),selected:!0,children:"Selected item"}),e.jsx(n,{dense:!0,startIcon:e.jsx(t,{name:"filter",size:"sm"}),children:"Dense item"}),e.jsx(i,{}),e.jsx(n,{disabled:!0,startIcon:e.jsx(t,{name:"delete",size:"sm"}),children:"Disabled item"})]}),e.jsxs("div",{style:{border:"1px solid #eee",borderRadius:8,overflow:"hidden",minWidth:200},children:[e.jsx(n,{startIcon:e.jsx(t,{name:"calendar",size:"sm"}),endIcon:e.jsx(t,{name:"chevron-right",size:"sm"}),children:"With end icon"}),e.jsx(n,{startIcon:e.jsx(t,{name:"settings",size:"sm"}),children:"Settings"}),e.jsx(i,{}),e.jsx(n,{href:"#/link",startIcon:e.jsx(t,{name:"arrow-forward",size:"sm"}),children:"Link item (href)"})]})]})]})]})}};var z,k,D,w,E;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <MenuDemo label="Actions">
      <MenuItem onClick={() => alert('Edit clicked')}>Edit</MenuItem>
      <MenuItem onClick={() => alert('Duplicate clicked')}>Duplicate</MenuItem>
      <MenuItem onClick={() => alert('Archive clicked')}>Archive</MenuItem>
      <MenuDivider />
      <MenuItem onClick={() => alert('Delete clicked')}>Delete</MenuItem>
    </MenuDemo>
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source},description:{story:"Default menu — basic action list.",...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.description}}};var S,C,T,A,O;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <MenuDemo label="Event actions">
      <MenuItem onClick={() => {}} startIcon={<Icon name="edit" size="sm" />}>
        Edit event
      </MenuItem>
      <MenuItem onClick={() => {}} startIcon={<Icon name="add" size="sm" />}>
        Duplicate
      </MenuItem>
      <MenuItem onClick={() => {}} startIcon={<Icon name="download" size="sm" />}>
        Export CSV
      </MenuItem>
      <MenuItem onClick={() => {}} startIcon={<Icon name="upload" size="sm" />}>
        Import data
      </MenuItem>
      <MenuDivider />
      <MenuItem onClick={() => {}} startIcon={<Icon name="delete" size="sm" />} disabled>
        Delete event
      </MenuItem>
    </MenuDemo>
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"Items with leading icons.",...(O=(A=l.parameters)==null?void 0:A.docs)==null?void 0:O.description}}};var B,R,W,P,N;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <MenuDemo label="View options">
      <MenuItem startIcon={<Icon name="filter" size="sm" />} endIcon={<Icon name="check" size="sm" />}>
        Filter active
      </MenuItem>
      <MenuItem startIcon={<Icon name="arrow-forward" size="sm" />}>
        Sort by date
      </MenuItem>
      <MenuDivider />
      <MenuItem startIcon={<Icon name="settings" size="sm" />}>
        Preferences
      </MenuItem>
    </MenuDemo>
}`,...(W=(R=m.parameters)==null?void 0:R.docs)==null?void 0:W.source},description:{story:"Items with both start and end icons.",...(N=(P=m.parameters)==null?void 0:P.docs)==null?void 0:N.description}}};var V,F,L,$,K;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState('list');
    return <MenuDemo label={\`View: \${selected}\`}>
        <MenuItem selected={selected === 'list'} onClick={() => setSelected('list')}>
          List view
        </MenuItem>
        <MenuItem selected={selected === 'grid'} onClick={() => setSelected('grid')}>
          Grid view
        </MenuItem>
        <MenuItem selected={selected === 'calendar'} onClick={() => setSelected('calendar')}>
          Calendar view
        </MenuItem>
      </MenuDemo>;
  }
}`,...(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source},description:{story:"Selected item — marks the current/active state.",...(K=($=p.parameters)==null?void 0:$.docs)==null?void 0:K.description}}};var _,q,G,U,Z;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <MenuDemo label="Dense menu">
      <MenuItem dense startIcon={<Icon name="edit" size="sm" />}>
        Edit
      </MenuItem>
      <MenuItem dense startIcon={<Icon name="add" size="sm" />}>
        Duplicate
      </MenuItem>
      <MenuItem dense startIcon={<Icon name="visibility" size="sm" />}>
        Preview
      </MenuItem>
      <MenuDivider />
      <MenuItem dense startIcon={<Icon name="delete" size="sm" />}>
        Delete
      </MenuItem>
    </MenuDemo>
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"Dense mode — compact padding for toolbar/settings menus.",...(Z=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Z.description}}};var H,J,Q,X,Y;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <MenuDemo label="Restricted actions">
      <MenuItem onClick={() => {}}>View details</MenuItem>
      <MenuItem onClick={() => {}}>Edit</MenuItem>
      <MenuItem disabled>Publish (requires approval)</MenuItem>
      <MenuDivider />
      <MenuItem disabled startIcon={<Icon name="delete" size="sm" />}>
        Delete (admin only)
      </MenuItem>
    </MenuDemo>
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"Disabled items — shown but not interactive.",...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var ee,ne,te,oe,re;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <MenuDemo label="Navigate">
      <MenuItem href="#/events" startIcon={<Icon name="calendar" size="sm" />}>
        Events
      </MenuItem>
      <MenuItem href="#/attendees" startIcon={<Icon name="person" size="sm" />}>
        Attendees
      </MenuItem>
      <MenuItem href="#/reports" startIcon={<Icon name="filter" size="sm" />}>
        Reports
      </MenuItem>
      <MenuDivider />
      <MenuItem href="#/settings" startIcon={<Icon name="settings" size="sm" />}>
        Settings
      </MenuItem>
    </MenuDemo>
}`,...(te=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:te.source},description:{story:"Navigation items using `component='a'` and `href`.",...(re=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:re.description}}};var se,ie,ae,de,ce;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div style={{
    paddingTop: 200
  }}>
      <MenuDemo label="Open above" menuProps={{
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left'
      },
      transformOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      }
    }}>
        <MenuItem>Option one</MenuItem>
        <MenuItem>Option two</MenuItem>
        <MenuItem>Option three</MenuItem>
      </MenuDemo>
    </div>
}`,...(ae=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ae.source},description:{story:"Different anchor origins — menu opens above trigger.",...(ce=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ce.description}}};var le,me,pe,ue,he;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
    const open = Boolean(anchorEl);
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
        <Typography variant="body1">EventPipe 2026 — Spring Summit</Typography>
        <button onClick={e => setAnchorEl(open ? null : e.currentTarget)} aria-label="More options" aria-haspopup="true" aria-expanded={open} style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 4,
        padding: 4,
        display: 'flex'
      }}>
          <Icon name="settings" size="md" />
        </button>
        <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
          <MenuItem startIcon={<Icon name="edit" size="sm" />}>Edit</MenuItem>
          <MenuItem startIcon={<Icon name="add" size="sm" />}>Duplicate</MenuItem>
          <MenuItem startIcon={<Icon name="download" size="sm" />}>Export</MenuItem>
          <MenuDivider />
          <MenuItem startIcon={<Icon name="delete" size="sm" />}>Delete</MenuItem>
        </Menu>
      </div>;
  }
}`,...(pe=(me=v.parameters)==null?void 0:me.docs)==null?void 0:pe.source},description:{story:"Overflow menu — typical three-dot / kebab pattern.",...(he=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:he.description}}};var Ie,xe,ve,ge,ye;g.parameters={...g.parameters,docs:{...(Ie=g.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
    const open = Boolean(anchorEl);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      fontFamily: 'sans-serif'
    }}>
        <div>
          <Typography variant="overline" color="text.secondary">
            Trigger with aria-haspopup + aria-expanded
          </Typography>
          <div style={{
          marginTop: 8
        }}>
            <Button variant="outlined" onClick={e => setAnchorEl(anchorEl ? null : e.currentTarget)} aria-haspopup="menu" aria-expanded={open} aria-controls={open ? 'a11y-demo-menu' : undefined} endSlot={<Icon name={open ? 'chevron-up' : 'chevron-down'} size="sm" />}>
              File menu
            </Button>
            <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
              <MenuItem startIcon={<Icon name="add" size="sm" />}>New event</MenuItem>
              <MenuItem startIcon={<Icon name="upload" size="sm" />}>Import…</MenuItem>
              <MenuItem startIcon={<Icon name="download" size="sm" />}>Export…</MenuItem>
              <MenuDivider />
              <MenuItem disabled startIcon={<Icon name="delete" size="sm" />}>
                Delete all (disabled)
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div>
          <Typography variant="overline" color="text.secondary">
            Keyboard nav — Tab to trigger, Enter opens, arrows navigate, Escape closes
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{
          mt: 0.5
        }}>
            Screen reader: role="menu" on container, role="menuitem" on each item.
            Disabled items are announced as aria-disabled.
          </Typography>
        </div>
      </div>;
  }
}`,...(ve=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:ve.source},description:{story:"Accessibility patterns — trigger ARIA, keyboard nav, disabled items.",...(ye=(ge=g.parameters)==null?void 0:ge.docs)==null?void 0:ye.description}}};var be,je,Me,fe,ze;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const vars = ['--ep-component-menu-background', '--ep-component-menu-border-radius', '--ep-component-menu-shadow', '--ep-component-menu-min-width', '--ep-component-menu-item-color', '--ep-component-menu-item-color-disabled', '--ep-component-menu-item-background', '--ep-component-menu-item-background-hover', '--ep-component-menu-item-background-focus', '--ep-component-menu-item-background-selected', '--ep-component-menu-item-background-selected-hover', '--ep-component-menu-item-background-disabled', '--ep-component-menu-item-font-size', '--ep-component-menu-item-padding-y', '--ep-component-menu-item-padding-x', '--ep-component-menu-item-dense-padding-y', '--ep-component-menu-item-dense-padding-x', '--ep-component-menu-item-icon-size', '--ep-component-menu-item-icon-color', '--ep-component-menu-item-icon-gap', '--ep-component-menu-divider-color', '--ep-component-menu-divider-margin-y'];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <p style={{
        color: '#666',
        marginBottom: 8
      }}>
          Open DevTools → Computed to verify each var resolves (no fallback value).
          Note: shadow/size vars won't show a color swatch — inspect the raw value.
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
        marginTop: 16
      }}>
          <Typography variant="overline" color="text.secondary">Live renders</Typography>
          <div style={{
          display: 'flex',
          gap: 32,
          marginTop: 8,
          flexWrap: 'wrap'
        }}>
            {/* Inline menu rendered without portal for visibility in the audit view */}
            <div style={{
            border: '1px solid #eee',
            borderRadius: 8,
            overflow: 'hidden',
            minWidth: 200
          }}>
              <MenuItem startIcon={<Icon name="edit" size="sm" />}>Normal item</MenuItem>
              <MenuItem startIcon={<Icon name="add" size="sm" />} selected>Selected item</MenuItem>
              <MenuItem dense startIcon={<Icon name="filter" size="sm" />}>Dense item</MenuItem>
              <MenuDivider />
              <MenuItem disabled startIcon={<Icon name="delete" size="sm" />}>Disabled item</MenuItem>
            </div>
            <div style={{
            border: '1px solid #eee',
            borderRadius: 8,
            overflow: 'hidden',
            minWidth: 200
          }}>
              <MenuItem startIcon={<Icon name="calendar" size="sm" />} endIcon={<Icon name="chevron-right" size="sm" />}>
                With end icon
              </MenuItem>
              <MenuItem startIcon={<Icon name="settings" size="sm" />}>Settings</MenuItem>
              <MenuDivider />
              <MenuItem href="#/link" startIcon={<Icon name="arrow-forward" size="sm" />}>
                Link item (href)
              </MenuItem>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(Me=(je=y.parameters)==null?void 0:je.docs)==null?void 0:Me.source},description:{story:`Token Audit — all 22 CSS custom properties the Menu component reads.
Open DevTools → Computed to verify each var resolves correctly.`,...(ze=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:ze.description}}};const Re=["Default","WithStartIcons","WithEndIcons","WithSelected","Dense","WithDisabled","AsLinks","AnchorOriginTop","OverflowMenu","Accessibility","TokenAudit"];export{g as Accessibility,x as AnchorOriginTop,I as AsLinks,c as Default,u as Dense,v as OverflowMenu,y as TokenAudit,h as WithDisabled,m as WithEndIcons,p as WithSelected,l as WithStartIcons,Re as __namedExportsOrder,Be as default};

import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as oe}from"./index-C6mWTJJr.js";import{L as i,T as s,E as t,I as o,Y as g}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const xe={title:"Components/Surfaces/List",component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Vertical container for interactive or display items. Compose with ListItem and ListDivider. Focus pattern: backgroundFocus state change (no outline ring) — consistent with Menu."}}},argTypes:{dense:{control:"boolean"},disablePadding:{control:"boolean"}},args:{dense:!1,disablePadding:!1,children:oe.createElement(t,{},"List item")}},l={render:r=>e.jsxs(i,{...r,sx:{maxWidth:320},children:[e.jsx(t,{onClick:()=>{},children:"Inbox"}),e.jsx(t,{onClick:()=>{},children:"Drafts"}),e.jsx(t,{onClick:()=>{},children:"Sent"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:32,flexWrap:"wrap",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx(s,{variant:"overline",color:"text.secondary",children:"Default"}),e.jsx(i,{sx:{maxWidth:240},disablePadding:!0,children:e.jsx(t,{onClick:()=>{},children:"Default item"})})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"overline",color:"text.secondary",children:"Selected"}),e.jsx(i,{sx:{maxWidth:240},disablePadding:!0,children:e.jsx(t,{onClick:()=>{},selected:!0,children:"Selected item"})})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"overline",color:"text.secondary",children:"Disabled"}),e.jsx(i,{sx:{maxWidth:240},disablePadding:!0,children:e.jsx(t,{disabled:!0,children:"Disabled item"})})]})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:32,flexWrap:"wrap",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx(s,{variant:"overline",color:"text.secondary",children:"Standard padding"}),e.jsxs(i,{sx:{maxWidth:240,border:"1px solid #eee"},disablePadding:!0,children:[e.jsx(t,{onClick:()=>{},children:"Item one"}),e.jsx(t,{onClick:()=>{},children:"Item two"}),e.jsx(t,{onClick:()=>{},children:"Item three"})]})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"overline",color:"text.secondary",children:"Dense"}),e.jsxs(i,{sx:{maxWidth:240,border:"1px solid #eee"},disablePadding:!0,children:[e.jsx(t,{dense:!0,onClick:()=>{},children:"Item one"}),e.jsx(t,{dense:!0,onClick:()=>{},children:"Item two"}),e.jsx(t,{dense:!0,onClick:()=>{},children:"Item three"})]})]})]})},p={render:()=>e.jsxs(i,{sx:{maxWidth:280},disablePadding:!0,children:[e.jsx(t,{onClick:()=>{},children:e.jsx("span",{children:e.jsx("div",{style:{fontWeight:500},children:"Inbox"})})}),e.jsx(t,{onClick:()=>{},children:e.jsx("span",{children:e.jsx("div",{style:{fontWeight:500},children:"Drafts"})})}),e.jsx(g,{}),e.jsx(t,{onClick:()=>{},children:e.jsx("span",{children:e.jsx("div",{style:{fontWeight:500},children:"Sent"})})}),e.jsx(t,{onClick:()=>{},children:e.jsx("span",{children:e.jsx("div",{style:{fontWeight:500},children:"Spam"})})}),e.jsx(g,{}),e.jsx(t,{disabled:!0,children:e.jsx("span",{children:e.jsx("div",{style:{fontWeight:500},children:"Trash (disabled)"})})})]})},x={render:()=>e.jsxs(i,{sx:{maxWidth:300},disablePadding:!0,children:[e.jsx(t,{onClick:()=>{},startIcon:e.jsx(o,{name:"person",size:"sm"}),children:"Profile"}),e.jsx(t,{onClick:()=>{},startIcon:e.jsx(o,{name:"settings",size:"sm"}),children:"Settings"}),e.jsx(t,{onClick:()=>{},startIcon:e.jsx(o,{name:"calendar",size:"sm"}),children:"Calendar"}),e.jsx(g,{}),e.jsx(t,{onClick:()=>{},startIcon:e.jsx(o,{name:"download",size:"sm"}),endIcon:e.jsx(o,{name:"chevron-right",size:"sm"}),children:"Downloads"}),e.jsx(t,{onClick:()=>{},startIcon:e.jsx(o,{name:"upload",size:"sm"}),endIcon:e.jsx(o,{name:"chevron-right",size:"sm"}),children:"Uploads"})]})},h={render:()=>{const[r,d]=oe.useState("inbox"),b=[{id:"inbox",label:"Inbox",icon:"person"},{id:"drafts",label:"Drafts",icon:"edit"},{id:"sent",label:"Sent",icon:"arrow-forward"},{id:"archive",label:"Archive",icon:"download"}];return e.jsxs("div",{style:{display:"flex",gap:32,flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx(s,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:.5},children:"Navigation list"}),e.jsx(i,{sx:{maxWidth:240},disablePadding:!0,children:b.map(({id:n,label:a,icon:re})=>e.jsx(t,{selected:r===n,onClick:()=>d(n),startIcon:e.jsx(o,{name:re,size:"sm"}),children:a},n))})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:.5},children:"With dividers"}),e.jsxs(i,{sx:{maxWidth:240},disablePadding:!0,children:[b.slice(0,2).map(({id:n,label:a})=>e.jsx(t,{selected:r===n,onClick:()=>d(n),children:a},n)),e.jsx(g,{}),b.slice(2).map(({id:n,label:a})=>e.jsx(t,{selected:r===n,onClick:()=>d(n),children:a},n))]})]})]})}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(s,{variant:"overline",color:"text.secondary",children:"Role and keyboard"}),e.jsx(s,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:"Each ListItem renders as a focusable button. Tab or arrow keys move focus. Activated by Enter or Space. Focus state uses backgroundFocus (no ring)."}),e.jsxs(i,{sx:{maxWidth:280},disablePadding:!0,children:[e.jsx(t,{onClick:()=>{},children:"Tab to navigate"}),e.jsx(t,{onClick:()=>{},children:"Enter or Space activates"}),e.jsx(t,{disabled:!0,children:"Disabled — skipped in tab order"})]})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"overline",color:"text.secondary",children:"Icons — aria-hidden"}),e.jsx(s,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:"Icon slots are wrapped in aria-hidden spans. Screen readers announce the label text only, not the icon."}),e.jsx(i,{sx:{maxWidth:280},disablePadding:!0,children:e.jsx(t,{onClick:()=>{},startIcon:e.jsx(o,{name:"settings",size:"sm"}),endIcon:e.jsx(o,{name:"chevron-right",size:"sm"}),children:'Settings (screen reader: "Settings")'})})]})]})},v={name:"Token Audit (DevTools)",render:()=>{const r=["--ep-component-list-item-color","--ep-component-list-item-color-secondary","--ep-component-list-item-color-disabled","--ep-component-list-item-background","--ep-component-list-item-background-hover","--ep-component-list-item-background-focus","--ep-component-list-item-background-selected","--ep-component-list-item-background-selected-hover","--ep-component-list-item-background-disabled","--ep-component-list-item-font-size","--ep-component-list-item-padding-y","--ep-component-list-item-padding-x","--ep-component-list-item-dense-padding-y","--ep-component-list-item-dense-padding-x","--ep-component-list-item-icon-size","--ep-component-list-item-icon-color","--ep-component-list-item-icon-gap","--ep-component-list-divider-color","--ep-component-list-divider-margin-y"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",r.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:r.map(d=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:d}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${d})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},d))})]}),e.jsx(s,{variant:"overline",color:"text.secondary",children:"Live renders"}),e.jsxs(i,{sx:{maxWidth:280,mt:1},disablePadding:!0,children:[e.jsx(t,{onClick:()=>{},children:"Default"}),e.jsx(t,{onClick:()=>{},selected:!0,children:"Selected"}),e.jsx(t,{onClick:()=>{},startIcon:e.jsx(o,{name:"settings",size:"sm"}),children:"With icon"}),e.jsx(t,{dense:!0,onClick:()=>{},children:"Dense"}),e.jsx(g,{}),e.jsx(t,{disabled:!0,children:"Disabled"})]})]})}};var I,u,L,j,k;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <List {...args} sx={{
    maxWidth: 320
  }}>
      <ListItem onClick={() => {}}>Inbox</ListItem>
      <ListItem onClick={() => {}}>Drafts</ListItem>
      <ListItem onClick={() => {}}>Sent</ListItem>
    </List>
}`,...(L=(u=l.parameters)==null?void 0:u.docs)==null?void 0:L.source},description:{story:"Default — use Controls to explore.",...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.description}}};var f,C,S,W,D;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      <div>
        <Typography variant="overline" color="text.secondary">Default</Typography>
        <List sx={{
        maxWidth: 240
      }} disablePadding>
          <ListItem onClick={() => {}}>Default item</ListItem>
        </List>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Selected</Typography>
        <List sx={{
        maxWidth: 240
      }} disablePadding>
          <ListItem onClick={() => {}} selected>Selected item</ListItem>
        </List>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Disabled</Typography>
        <List sx={{
        maxWidth: 240
      }} disablePadding>
          <ListItem disabled>Disabled item</ListItem>
        </List>
      </div>
    </div>
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:"All interactive states visible simultaneously.",...(D=(W=c.parameters)==null?void 0:W.docs)==null?void 0:D.description}}};var T,w,z,P,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      <div>
        <Typography variant="overline" color="text.secondary">Standard padding</Typography>
        <List sx={{
        maxWidth: 240,
        border: '1px solid #eee'
      }} disablePadding>
          <ListItem onClick={() => {}}>Item one</ListItem>
          <ListItem onClick={() => {}}>Item two</ListItem>
          <ListItem onClick={() => {}}>Item three</ListItem>
        </List>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Dense</Typography>
        <List sx={{
        maxWidth: 240,
        border: '1px solid #eee'
      }} disablePadding>
          <ListItem dense onClick={() => {}}>Item one</ListItem>
          <ListItem dense onClick={() => {}}>Item two</ListItem>
          <ListItem dense onClick={() => {}}>Item three</ListItem>
        </List>
      </div>
    </div>
}`,...(z=(w=m.parameters)==null?void 0:w.docs)==null?void 0:z.source},description:{story:"Dense mode — tighter vertical padding.",...(A=(P=m.parameters)==null?void 0:P.docs)==null?void 0:A.description}}};var E,F,B,R,O;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <List sx={{
    maxWidth: 280
  }} disablePadding>
      <ListItem onClick={() => {}}>
        <span>
          <div style={{
          fontWeight: 500
        }}>Inbox</div>
        </span>
      </ListItem>
      <ListItem onClick={() => {}}>
        <span>
          <div style={{
          fontWeight: 500
        }}>Drafts</div>
        </span>
      </ListItem>
      <ListDivider />
      <ListItem onClick={() => {}}>
        <span>
          <div style={{
          fontWeight: 500
        }}>Sent</div>
        </span>
      </ListItem>
      <ListItem onClick={() => {}}>
        <span>
          <div style={{
          fontWeight: 500
        }}>Spam</div>
        </span>
      </ListItem>
      <ListDivider />
      <ListItem disabled>
        <span>
          <div style={{
          fontWeight: 500
        }}>Trash (disabled)</div>
        </span>
      </ListItem>
    </List>
}`,...(B=(F=p.parameters)==null?void 0:F.docs)==null?void 0:B.source},description:{story:"ListDivider — visual separator between item groups.",...(O=(R=p.parameters)==null?void 0:R.docs)==null?void 0:O.description}}};var N,U,_,$,M;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <List sx={{
    maxWidth: 300
  }} disablePadding>
      <ListItem onClick={() => {}} startIcon={<Icon name="person" size="sm" />}>
        Profile
      </ListItem>
      <ListItem onClick={() => {}} startIcon={<Icon name="settings" size="sm" />}>
        Settings
      </ListItem>
      <ListItem onClick={() => {}} startIcon={<Icon name="calendar" size="sm" />}>
        Calendar
      </ListItem>
      <ListDivider />
      <ListItem onClick={() => {}} startIcon={<Icon name="download" size="sm" />} endIcon={<Icon name="chevron-right" size="sm" />}>
        Downloads
      </ListItem>
      <ListItem onClick={() => {}} startIcon={<Icon name="upload" size="sm" />} endIcon={<Icon name="chevron-right" size="sm" />}>
        Uploads
      </ListItem>
    </List>
}`,...(_=(U=x.parameters)==null?void 0:U.docs)==null?void 0:_.source},description:{story:"WithIcons — startIcon and endIcon slots.",...(M=($=x.parameters)==null?void 0:$.docs)==null?void 0:M.description}}};var V,Y,q,G,H;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<string>('inbox');
    const items = [{
      id: 'inbox',
      label: 'Inbox',
      icon: 'person' as const
    }, {
      id: 'drafts',
      label: 'Drafts',
      icon: 'edit' as const
    }, {
      id: 'sent',
      label: 'Sent',
      icon: 'arrow-forward' as const
    }, {
      id: 'archive',
      label: 'Archive',
      icon: 'download' as const
    }];
    return <div style={{
      display: 'flex',
      gap: 32,
      flexWrap: 'wrap'
    }}>
        <div>
          <Typography variant="overline" color="text.secondary" sx={{
          display: 'block',
          mb: 0.5
        }}>
            Navigation list
          </Typography>
          <List sx={{
          maxWidth: 240
        }} disablePadding>
            {items.map(({
            id,
            label,
            icon
          }) => <ListItem key={id} selected={selected === id} onClick={() => setSelected(id)} startIcon={<Icon name={icon} size="sm" />}>
                {label}
              </ListItem>)}
          </List>
        </div>
        <div>
          <Typography variant="overline" color="text.secondary" sx={{
          display: 'block',
          mb: 0.5
        }}>
            With dividers
          </Typography>
          <List sx={{
          maxWidth: 240
        }} disablePadding>
            {items.slice(0, 2).map(({
            id,
            label
          }) => <ListItem key={id} selected={selected === id} onClick={() => setSelected(id)}>
                {label}
              </ListItem>)}
            <ListDivider />
            {items.slice(2).map(({
            id,
            label
          }) => <ListItem key={id} selected={selected === id} onClick={() => setSelected(id)}>
                {label}
              </ListItem>)}
          </List>
        </div>
      </div>;
  }
}`,...(q=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:q.source},description:{story:"WithSelection — selected state for navigation or active-item patterns.",...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,Q,X,Z;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    fontFamily: 'sans-serif'
  }}>
      <div>
        <Typography variant="overline" color="text.secondary">Role and keyboard</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Each ListItem renders as a focusable button. Tab or arrow keys move focus.
          Activated by Enter or Space. Focus state uses backgroundFocus (no ring).
        </Typography>
        <List sx={{
        maxWidth: 280
      }} disablePadding>
          <ListItem onClick={() => {}}>Tab to navigate</ListItem>
          <ListItem onClick={() => {}}>Enter or Space activates</ListItem>
          <ListItem disabled>Disabled — skipped in tab order</ListItem>
        </List>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Icons — aria-hidden</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Icon slots are wrapped in aria-hidden spans. Screen readers announce
          the label text only, not the icon.
        </Typography>
        <List sx={{
        maxWidth: 280
      }} disablePadding>
          <ListItem onClick={() => {}} startIcon={<Icon name="settings" size="sm" />} endIcon={<Icon name="chevron-right" size="sm" />}>
            Settings (screen reader: "Settings")
          </ListItem>
        </List>
      </div>
    </div>
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Accessibility — keyboard navigation and screen-reader patterns.",...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,te,ie,se,ne;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  render: () => {
    const vars = ['--ep-component-list-item-color', '--ep-component-list-item-color-secondary', '--ep-component-list-item-color-disabled', '--ep-component-list-item-background', '--ep-component-list-item-background-hover', '--ep-component-list-item-background-focus', '--ep-component-list-item-background-selected', '--ep-component-list-item-background-selected-hover', '--ep-component-list-item-background-disabled', '--ep-component-list-item-font-size', '--ep-component-list-item-padding-y', '--ep-component-list-item-padding-x', '--ep-component-list-item-dense-padding-y', '--ep-component-list-item-dense-padding-x', '--ep-component-list-item-icon-size', '--ep-component-list-item-icon-color', '--ep-component-list-item-icon-gap', '--ep-component-list-divider-color', '--ep-component-list-divider-margin-y'];
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
        <Typography variant="overline" color="text.secondary">Live renders</Typography>
        <List sx={{
        maxWidth: 280,
        mt: 1
      }} disablePadding>
          <ListItem onClick={() => {}}>Default</ListItem>
          <ListItem onClick={() => {}} selected>Selected</ListItem>
          <ListItem onClick={() => {}} startIcon={<Icon name="settings" size="sm" />}>With icon</ListItem>
          <ListItem dense onClick={() => {}}>Dense</ListItem>
          <ListDivider />
          <ListItem disabled>Disabled</ListItem>
        </List>
      </div>;
  }
}`,...(ie=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ie.source},description:{story:"Token Audit — all CSS custom properties the List component reads.",...(ne=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};const he=["Default","States","Dense","WithDivider","WithIcons","WithSelection","Accessibility","TokenAudit"];export{y as Accessibility,l as Default,m as Dense,c as States,v as TokenAudit,p as WithDivider,x as WithIcons,h as WithSelection,he as __namedExportsOrder,xe as default};

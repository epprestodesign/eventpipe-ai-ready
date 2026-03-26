import{j as e}from"./jsx-runtime-BT65X5dW.js";import{I as o,B as x,V as oe}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const ae=Object.keys(oe),se=[{label:"Foundational",names:["close","check","menu"]},{label:"Status / Feedback",names:["success","warning","error","info"]},{label:"Navigation",names:["chevron-down","chevron-up","chevron-right","chevron-left","arrow-back","arrow-forward"]},{label:"Action",names:["add","remove","delete","edit","search","download","upload","visibility","visibility-off","settings","person","calendar","filter"]},{label:"Application / Domain",names:["code-xml","support-agent","construction","signature","library-books","account-tree","stadium","airline-seat-flat","fork-spoon","apartment","bar-chart-4-bars","inventory","concierge","calendar-month","groups-2"]}],ne={fontSize:11,color:"#888",textAlign:"center",marginTop:4,lineHeight:1.2},te={display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:"12px 8px",width:80},me={title:"Foundations/Iconography",component:o,tags:["autodocs"],argTypes:{name:{control:"select",options:ae,description:"Semantic icon name from the Phase 1 approved registry."},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Maps to --ep-semantic-icon-size-* token. Default: md (20px)",table:{defaultValue:{summary:"md"}}},label:{control:"text",description:"Accessible label. Omit for decorative icons. Provide for semantic icons."}},args:{name:"add",size:"md"}},s={},r={parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:se.map(n=>e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px",fontSize:13,fontWeight:600,color:"#444",textTransform:"uppercase",letterSpacing:"0.06em"},children:n.label}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:n.names.map(t=>e.jsxs("div",{style:{...te,border:"1px solid #e5e7eb",borderRadius:6},children:[e.jsx(o,{name:t,size:"lg"}),e.jsx("span",{style:ne,children:t})]},t))})]},n.label))})},i={render:n=>e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:24},children:["xs","sm","md","lg","xl"].map(t=>e.jsxs("div",{style:{...te},children:[e.jsx(o,{...n,size:t}),e.jsxs("span",{style:ne,children:[t,e.jsx("br",{}),e.jsxs("span",{style:{color:"#bbb"},children:[t==="xs"?"12":t==="sm"?"16":t==="md"?"20":t==="lg"?"24":"32","px"]})]})]},t))})},l={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[e.jsxs("section",{children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:13},children:'Decorative — no label prop → aria-hidden="true"'}),e.jsxs("p",{style:{margin:"0 0 12px",fontSize:12,color:"#666"},children:["Icon is purely visual. The ",e.jsx("em",{children:"button text"})," carries all meaning."]}),e.jsx(x,{startSlot:e.jsx(o,{name:"download"}),children:"Export CSV"}),e.jsx("code",{style:{display:"block",marginTop:8,fontSize:11,color:"#888"},children:'<Icon name="download" />  →  aria-hidden="true"'})]}),e.jsxs("section",{children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:13},children:'Semantic — with label → role="img" + aria-label'}),e.jsx("p",{style:{margin:"0 0 12px",fontSize:12,color:"#666"},children:"Icon carries meaning. Announced by screen readers."}),e.jsx(o,{name:"warning",size:"lg",label:"Warning"}),e.jsx("code",{style:{display:"block",marginTop:8,fontSize:11,color:"#888"},children:'<Icon name="warning" label="Warning" />  →  role="img" aria-label="Warning"'})]}),e.jsxs("section",{children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:13},children:"Icon-only button — aria-label on the button"}),e.jsx("p",{style:{margin:"0 0 12px",fontSize:12,color:"#666"},children:"The button carries aria-label. Icon inside is decorative (no label)."}),e.jsx("button",{"aria-label":"Delete item",style:{padding:8,border:"1px solid #ccc",borderRadius:6,cursor:"pointer",display:"inline-flex",alignItems:"center",background:"none"},children:e.jsx(o,{name:"delete",size:"md"})}),e.jsx("code",{style:{display:"block",marginTop:8,fontSize:11,color:"#888"},children:'<button aria-label="Delete item"><Icon name="delete" /></button>'})]})]})},c={parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["xs","sm","md","lg","xl"].map(n=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[e.jsx("span",{style:{width:24,fontSize:11,color:"#888"},children:n}),e.jsx(x,{variant:"contained",size:n,startSlot:e.jsx(o,{name:"add",size:n}),children:"Create"}),e.jsx(x,{variant:"outlined",size:n,startSlot:e.jsx(o,{name:"download",size:n}),children:"Export"}),e.jsx(x,{variant:"text",size:n,endSlot:e.jsx(o,{name:"chevron-right",size:n}),children:"Continue"}),e.jsx(x,{variant:"soft",size:n,color:"error",startSlot:e.jsx(o,{name:"delete",size:n}),children:"Delete"})]},n))})},d={parameters:{layout:"padded"},render:()=>{const n=[{name:"success",label:"Success",color:"#16A34A"},{name:"warning",label:"Warning",color:"#CA8A04"},{name:"error",label:"Error",color:"#E11D48"},{name:"info",label:"Info",color:"#0057FF"}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:n.map(({name:t,label:a,color:y})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx("div",{style:{color:y,display:"flex"},children:e.jsx(o,{name:t,size:"lg",label:a})}),e.jsx("span",{style:{fontSize:14},children:a}),e.jsx("code",{style:{fontSize:11,color:"#888",marginLeft:"auto"},children:`<Icon name="${t}" size="lg" label="${a}" />`})]},t))})}},p={parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[{color:"#0057FF",label:"brand primary"},{color:"#E11D48",label:"error"},{color:"#16A34A",label:"success"},{color:"#374151",label:"neutral"},{color:"#9CA3AF",label:"disabled"}].map(({color:n,label:t})=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{color:n,display:"flex",justifyContent:"center"},children:e.jsx(o,{name:"settings",size:"lg"})}),e.jsx("div",{style:{fontSize:11,color:"#888",marginTop:4},children:t})]},t))})},m={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const n=[{name:"--ep-semantic-icon-size-xs",expected:"12px"},{name:"--ep-semantic-icon-size-sm",expected:"16px"},{name:"--ep-semantic-icon-size-md",expected:"20px"},{name:"--ep-semantic-icon-size-lg",expected:"24px"},{name:"--ep-semantic-icon-size-xl",expected:"32px"}];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsx("p",{style:{marginBottom:12,color:"#666"},children:"Each icon below is sized by a CSS variable. Inspect Computed to confirm resolution."}),e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",padding:"4px 16px 4px 0",background:"#f5f5f5"},children:"Token"}),e.jsx("th",{style:{textAlign:"left",padding:"4px 16px",background:"#f5f5f5"},children:"Expected"}),e.jsx("th",{style:{textAlign:"left",padding:"4px 0",background:"#f5f5f5"},children:"Rendered"})]})}),e.jsx("tbody",{children:n.map(({name:t,expected:a})=>{const y=t.split("-").pop();return e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"6px 16px 6px 0",color:"#333"},children:t}),e.jsx("td",{style:{padding:"6px 16px",color:"#888"},children:a}),e.jsx("td",{style:{padding:"6px 0"},children:e.jsx(o,{name:"settings",size:y})})]},t)})})]})]})}};var g,u,b,h,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source},description:{story:"Use the Controls panel to explore every prop and size.",...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};var v,z,S,j,I;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {ICON_GROUPS.map(group => <div key={group.label}>
          <h3 style={{
        margin: '0 0 12px',
        fontSize: 13,
        fontWeight: 600,
        color: '#444',
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }}>
            {group.label}
          </h3>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
            {group.names.map(name => <div key={name} style={{
          ...cell,
          border: '1px solid #e5e7eb',
          borderRadius: 6
        }}>
                <Icon name={name} size="lg" />
                <span style={label14}>{name}</span>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.source},description:{story:"Complete Phase 1 approved icon set, organized by category.\n\n**Governance:** Every icon here went through the PR process defined in\n`docs/decisions/006-icon-system.md`. Icons not shown are not available.\nTo add an icon, open a PR to `packages/ui/src/icons/registry.ts`.",...(I=(j=r.parameters)==null?void 0:j.docs)==null?void 0:I.description}}};var k,A,w,D,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: IconProps) => <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    gap: 24
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <div key={size} style={{
      ...cell
    }}>
          <Icon {...args} size={size} />
          <span style={label14}>{size}<br />
            <span style={{
          color: '#bbb'
        }}>
              {size === 'xs' ? '12' : size === 'sm' ? '16' : size === 'md' ? '20' : size === 'lg' ? '24' : '32'}px
            </span>
          </span>
        </div>)}
    </div>
}`,...(w=(A=i.parameters)==null?void 0:A.docs)==null?void 0:w.source},description:{story:"5-tier size scale using `--ep-semantic-icon-size-*` tokens.\nNo pixel values are hardcoded — all sizing comes from CSS custom properties.",...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.description}}};var T,B,E,F,W;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
      }}>Decorative — no label prop → aria-hidden="true"</h3>
        <p style={{
        margin: '0 0 12px',
        fontSize: 12,
        color: '#666'
      }}>
          Icon is purely visual. The <em>button text</em> carries all meaning.
        </p>
        <Button startSlot={<Icon name="download" />}>Export CSV</Button>
        <code style={{
        display: 'block',
        marginTop: 8,
        fontSize: 11,
        color: '#888'
      }}>
          {'<Icon name="download" />  →  aria-hidden="true"'}
        </code>
      </section>

      <section>
        <h3 style={{
        margin: '0 0 8px',
        fontSize: 13
      }}>Semantic — with label → role="img" + aria-label</h3>
        <p style={{
        margin: '0 0 12px',
        fontSize: 12,
        color: '#666'
      }}>
          Icon carries meaning. Announced by screen readers.
        </p>
        <Icon name="warning" size="lg" label="Warning" />
        <code style={{
        display: 'block',
        marginTop: 8,
        fontSize: 11,
        color: '#888'
      }}>
          {'<Icon name="warning" label="Warning" />  →  role="img" aria-label="Warning"'}
        </code>
      </section>

      <section>
        <h3 style={{
        margin: '0 0 8px',
        fontSize: 13
      }}>Icon-only button — aria-label on the button</h3>
        <p style={{
        margin: '0 0 12px',
        fontSize: 12,
        color: '#666'
      }}>
          The button carries aria-label. Icon inside is decorative (no label).
        </p>
        <button aria-label="Delete item" style={{
        padding: 8,
        border: '1px solid #ccc',
        borderRadius: 6,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        background: 'none'
      }}>
          <Icon name="delete" size="md" />
        </button>
        <code style={{
        display: 'block',
        marginTop: 8,
        fontSize: 11,
        color: '#888'
      }}>
          {'<button aria-label="Delete item"><Icon name="delete" /></button>'}
        </code>
      </section>

    </div>
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:'Decorative icons have `aria-hidden="true"` applied automatically\n(no `label` prop). Screen readers skip them entirely.\n\nSemantic icons have `role="img"` + `aria-label`. Screen readers announce them.\n\n**Rule:** never provide `label` here AND `aria-label` on a wrapping interactive\nelement — it creates duplicate announcements.',...(W=(F=l.parameters)==null?void 0:F.docs)==null?void 0:W.description}}};var R,N,O,P,G;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <div key={size} style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
          <span style={{
        width: 24,
        fontSize: 11,
        color: '#888'
      }}>{size}</span>
          <Button variant="contained" size={size} startSlot={<Icon name="add" size={size} />}>
            Create
          </Button>
          <Button variant="outlined" size={size} startSlot={<Icon name="download" size={size} />}>
            Export
          </Button>
          <Button variant="text" size={size} endSlot={<Icon name="chevron-right" size={size} />}>
            Continue
          </Button>
          <Button variant="soft" size={size} color="error" startSlot={<Icon name="delete" size={size} />}>
            Delete
          </Button>
        </div>)}
    </div>
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source},description:{story:'Icons used inside Button via `startSlot` and `endSlot`.\n\n**Sizing convention:** match the icon size to the button size.\n`<Button size="md" startSlot={<Icon name="add" size="md" />} />`',...(G=(P=c.parameters)==null?void 0:P.docs)==null?void 0:G.description}}};var V,_,L,$,U;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const statuses: {
      name: IconName;
      label: string;
      color: string;
    }[] = [{
      name: 'success',
      label: 'Success',
      color: '#16A34A'
    }, {
      name: 'warning',
      label: 'Warning',
      color: '#CA8A04'
    }, {
      name: 'error',
      label: 'Error',
      color: '#E11D48'
    }, {
      name: 'info',
      label: 'Info',
      color: '#0057FF'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        {statuses.map(({
        name,
        label,
        color
      }) => <div key={name} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }}>
            <div style={{
          color,
          display: 'flex'
        }}>
              <Icon name={name} size="lg" label={label} />
            </div>
            <span style={{
          fontSize: 14
        }}>{label}</span>
            <code style={{
          fontSize: 11,
          color: '#888',
          marginLeft: 'auto'
        }}>
              {\`<Icon name="\${name}" size="lg" label="\${label}" />\`}
            </code>
          </div>)}
      </div>;
  }
}`,...(L=(_=d.parameters)==null?void 0:_.docs)==null?void 0:L.source},description:{story:`Status icons used in Alert/Snackbar severity contexts.
These are the only approved icons for feedback components — see docs/decisions/006.`,...(U=($=d.parameters)==null?void 0:$.docs)==null?void 0:U.description}}};var M,H,q,J,K;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      {[{
      color: '#0057FF',
      label: 'brand primary'
    }, {
      color: '#E11D48',
      label: 'error'
    }, {
      color: '#16A34A',
      label: 'success'
    }, {
      color: '#374151',
      label: 'neutral'
    }, {
      color: '#9CA3AF',
      label: 'disabled'
    }].map(({
      color,
      label
    }) => <div key={label} style={{
      textAlign: 'center'
    }}>
          <div style={{
        color,
        display: 'flex',
        justifyContent: 'center'
      }}>
            <Icon name="settings" size="lg" />
          </div>
          <div style={{
        fontSize: 11,
        color: '#888',
        marginTop: 4
      }}>{label}</div>
        </div>)}
    </div>
}`,...(q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:q.source},description:{story:"Icons use `color: currentColor` — they inherit from their parent.\nNo color prop needed in most cases.",...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Y,Z,ee;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const tokens = [{
      name: '--ep-semantic-icon-size-xs',
      expected: '12px'
    }, {
      name: '--ep-semantic-icon-size-sm',
      expected: '16px'
    }, {
      name: '--ep-semantic-icon-size-md',
      expected: '20px'
    }, {
      name: '--ep-semantic-icon-size-lg',
      expected: '24px'
    }, {
      name: '--ep-semantic-icon-size-xl',
      expected: '32px'
    }];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <p style={{
        marginBottom: 12,
        color: '#666'
      }}>
          Each icon below is sized by a CSS variable. Inspect Computed to confirm resolution.
        </p>
        <table style={{
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>
              <th style={{
              textAlign: 'left',
              padding: '4px 16px 4px 0',
              background: '#f5f5f5'
            }}>Token</th>
              <th style={{
              textAlign: 'left',
              padding: '4px 16px',
              background: '#f5f5f5'
            }}>Expected</th>
              <th style={{
              textAlign: 'left',
              padding: '4px 0',
              background: '#f5f5f5'
            }}>Rendered</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map(({
            name,
            expected
          }) => {
            const size = name.split('-').pop() as 'xs' | 'sm' | 'md' | 'lg' | 'xl';
            return <tr key={name} style={{
              borderBottom: '1px solid #eee'
            }}>
                  <td style={{
                padding: '6px 16px 6px 0',
                color: '#333'
              }}>{name}</td>
                  <td style={{
                padding: '6px 16px',
                color: '#888'
              }}>{expected}</td>
                  <td style={{
                padding: '6px 0'
              }}>
                    <Icon name="settings" size={size} />
                  </td>
                </tr>;
          })}
          </tbody>
        </table>
      </div>;
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Verify all --ep-semantic-icon-size-* tokens resolve in the browser.
Open DevTools → Computed, inspect the swatch elements below.`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};const xe=["Default","Gallery","Sizes","Accessibility","WithButton","StatusIcons","ColorInheritance","TokenAudit"];export{l as Accessibility,p as ColorInheritance,s as Default,r as Gallery,i as Sizes,d as StatusIcons,m as TokenAudit,c as WithButton,xe as __namedExportsOrder,me as default};

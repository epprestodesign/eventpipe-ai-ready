import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as ye}from"./index-C6mWTJJr.js";import{s as a,T as r,I as i}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const ue={title:"Components/Selection/Chip",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Compact interactive or display element. Three variants: `filled`, `outlined`, `soft`. Three sizes (EpSize3). Focus pattern: dynamic color — focus ring uses the chip's foreground token."}}},argTypes:{variant:{control:"radio",options:["filled","outlined","soft"]},size:{control:"radio",options:["sm","md","lg"]},color:{control:"select",options:["primary","secondary","error","warning","info","success","neutral"]},label:{control:"text"},selected:{control:"boolean"},disabled:{control:"boolean"}},args:{variant:"filled",size:"md",color:"primary",label:"Chip label",selected:!1,disabled:!1}},d={},p={render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:12},children:["filled","outlined","soft"].map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(a,{variant:s,label:s,color:"primary"}),e.jsx(r,{variant:"caption",color:"text.secondary",children:s})]},s))})},y={render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:12},children:["sm","md","lg"].map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(a,{size:s,label:`Size ${s}`}),e.jsx(r,{variant:"caption",color:"text.secondary",children:s})]},s))})},x={parameters:{layout:"padded"},render:()=>{const s=["primary","secondary","error","warning","info","success","neutral"],l=["filled","outlined","soft"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:l.map(c=>e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:.5},children:c}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:s.map(n=>e.jsx(a,{variant:c,color:n,label:n},n))})]},c))})}},v={parameters:{layout:"padded"},render:()=>{const s=["filled","outlined","soft"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:s.map(l=>e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:.5},children:l}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:[e.jsx(a,{variant:l,label:"Default"}),e.jsx(a,{variant:l,label:"Clickable",onClick:()=>{}}),e.jsx(a,{variant:l,label:"Selected",selected:!0}),e.jsx(a,{variant:l,label:"Disabled",disabled:!0}),e.jsx(a,{variant:l,label:"Deletable",onDelete:()=>{}})]})]},l))})}},m={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:.5},children:"startIcon"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(a,{label:"Person",startIcon:e.jsx(i,{name:"person"})}),e.jsx(a,{label:"Calendar",startIcon:e.jsx(i,{name:"calendar"}),variant:"outlined"}),e.jsx(a,{label:"Settings",startIcon:e.jsx(i,{name:"settings"}),variant:"soft"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:.5},children:"endIcon (decorative — no onDelete)"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(a,{label:"Expand",endIcon:e.jsx(i,{name:"chevron-down"})}),e.jsx(a,{label:"Navigate",endIcon:e.jsx(i,{name:"chevron-right"}),variant:"outlined"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:.5},children:"onDelete (close button replaces endIcon)"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(a,{label:"Tag",onDelete:()=>{}}),e.jsx(a,{label:"Filter",onDelete:()=>{},variant:"outlined",color:"primary"}),e.jsx(a,{label:"Category",onDelete:()=>{},variant:"soft",color:"success"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:.5},children:"startIcon + onDelete"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(a,{label:"React",startIcon:e.jsx(i,{name:"code-xml"}),onDelete:()=>{}}),e.jsx(a,{label:"Urgent",startIcon:e.jsx(i,{name:"error"}),onDelete:()=>{},color:"error",variant:"soft"})]})]})]})},h={parameters:{layout:"padded"},render:()=>{const[s,l]=ye.useState(new Set(["react"])),c=["React","TypeScript","Design System","Tokens","MUI"],n=t=>{const o=t.toLowerCase().replace(/\s+/g,"-");l(pe=>{const u=new Set(pe);return u.has(o)?u.delete(o):u.add(o),u})};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:.5},children:"Filter chips (soft — click to toggle)"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:c.map(t=>{const o=t.toLowerCase().replace(/\s+/g,"-");return e.jsx(a,{label:t,variant:"soft",selected:s.has(o),onClick:()=>n(t)},o)})})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:.5},children:"Filter chips (outlined — click to toggle)"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:c.map(t=>{const o=t.toLowerCase().replace(/\s+/g,"-");return e.jsx(a,{label:t,variant:"outlined",selected:s.has(o),onClick:()=>n(t)},o)})})]})]})}},g={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",children:'Clickable chip — role="button"'}),e.jsx(r,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:'When onClick is provided, MUI adds role="button" and tabIndex=0. Tab to focus, Enter or Space activates.'}),e.jsx(a,{label:"Clickable",onClick:()=>{}})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",children:"Deletable chip"}),e.jsx(r,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:"The delete button is keyboard-accessible separately. Tab selects the chip, a second Tab focuses the delete button. Delete or Backspace also triggers onDelete."}),e.jsx(a,{label:"Tag to delete",onDelete:()=>{}})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",children:"Focus ring — dynamic color"}),e.jsx(r,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:"Focus ring uses the chip's own text token (not a static brand primary). Tab to see the ring for each variant."}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{label:"Filled",onClick:()=>{}}),e.jsx(a,{label:"Outlined",variant:"outlined",onClick:()=>{}}),e.jsx(a,{label:"Soft",variant:"soft",onClick:()=>{}}),e.jsx(a,{label:"Error filled",color:"error",onClick:()=>{}}),e.jsx(a,{label:"Success soft",color:"success",variant:"soft",onClick:()=>{}})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",children:"Static chip — no interactive role"}),e.jsx(r,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:'Without onClick or onDelete, MUI renders with role="presentation" (decorative). Not in tab order.'}),e.jsx(a,{label:"Tag / label"})]})]})},b={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const s=["sm","md","lg"].flatMap(t=>[`--ep-component-chip-size-${t}-height`,`--ep-component-chip-size-${t}-font-size`,`--ep-component-chip-size-${t}-padding-x`,`--ep-component-chip-size-${t}-icon-size`,`--ep-component-chip-size-${t}-gap`]),l=["filled","outlined","soft"].flatMap(t=>["primary","error","success","neutral"].flatMap(o=>[`--ep-component-chip-${t}-${o}-background`,`--ep-component-chip-${t}-${o}-background-hover`,`--ep-component-chip-${t}-${o}-background-selected`,`--ep-component-chip-${t}-${o}-text`,`--ep-component-chip-${t}-${o}-border`])),n=[...["--ep-component-chip-border-radius","--ep-component-chip-disabled-background","--ep-component-chip-disabled-text","--ep-component-chip-disabled-border","--ep-component-chip-focus-ring-width","--ep-component-chip-focus-ring-offset","--ep-component-chip-delete-icon-opacity","--ep-component-chip-delete-icon-opacity-hover"],...s,...l];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsx("p",{style:{color:"#666",marginBottom:8},children:"Showing a representative subset. Total component token count: 131. Open DevTools → Computed to verify all vars resolve."}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:n.map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:t}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${t})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},t))})]}),e.jsx(r,{variant:"overline",color:"text.secondary",children:"Live renders"}),e.jsxs("div",{style:{display:"flex",gap:8,marginTop:8,flexWrap:"wrap",alignItems:"center"},children:[["filled","outlined","soft"].map(t=>["primary","error","success","neutral"].map(o=>e.jsx(a,{variant:t,color:o,label:`${t}/${o}`,size:"sm"},`${t}-${o}`))),e.jsx(a,{label:"Selected",selected:!0}),e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Delete",onDelete:()=>{}}),e.jsx(a,{label:"Icon",startIcon:e.jsx(i,{name:"person"})})]})]})}};var f,j,k,C,T;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source},description:{story:"Default — use Controls to explore all props.",...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};var D,I,S,w,$;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }}>
      {(['filled', 'outlined', 'soft'] as const).map(v => <div key={v} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }}>
          <Chip variant={v} label={v} color="primary" />
          <Typography variant="caption" color="text.secondary">{v}</Typography>
        </div>)}
    </div>
}`,...(S=(I=p.parameters)==null?void 0:I.docs)==null?void 0:S.source},description:{story:"All three variants side-by-side.",...($=(w=p.parameters)==null?void 0:w.docs)==null?void 0:$.description}}};var z,W,A,F,V;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }}>
      {(['sm', 'md', 'lg'] as const).map(s => <div key={s} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }}>
          <Chip size={s} label={\`Size \${s}\`} />
          <Typography variant="caption" color="text.secondary">{s}</Typography>
        </div>)}
    </div>
}`,...(A=(W=y.parameters)==null?void 0:W.docs)==null?void 0:A.source},description:{story:"All three sizes.",...(V=(F=y.parameters)==null?void 0:F.docs)==null?void 0:V.description}}};var M,B,E,L,R;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const colors = ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const;
    const variants = ['filled', 'outlined', 'soft'] as const;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        {variants.map(v => <div key={v}>
            <Typography variant="overline" color="text.secondary" sx={{
          display: 'block',
          mb: 0.5
        }}>
              {v}
            </Typography>
            <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8
        }}>
              {colors.map(c => <Chip key={c} variant={v} color={c} label={c} />)}
            </div>
          </div>)}
      </div>;
  }
}`,...(E=(B=x.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:"All seven colors across all three variants.",...(R=(L=x.parameters)==null?void 0:L.docs)==null?void 0:R.description}}};var U,O,N,P,_;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const variants = ['filled', 'outlined', 'soft'] as const;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        {variants.map(v => <div key={v}>
            <Typography variant="overline" color="text.secondary" sx={{
          display: 'block',
          mb: 0.5
        }}>
              {v}
            </Typography>
            <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          alignItems: 'center'
        }}>
              <Chip variant={v} label="Default" />
              <Chip variant={v} label="Clickable" onClick={() => {}} />
              <Chip variant={v} label="Selected" selected />
              <Chip variant={v} label="Disabled" disabled />
              <Chip variant={v} label="Deletable" onDelete={() => {}} />
            </div>
          </div>)}
      </div>;
  }
}`,...(N=(O=v.parameters)==null?void 0:O.docs)==null?void 0:N.source},description:{story:"All interactive states — default, selected, disabled.",...(_=(P=v.parameters)==null?void 0:P.docs)==null?void 0:_.description}}};var q,G,H,J,K;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 0.5
      }}>
          startIcon
        </Typography>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
          <Chip label="Person" startIcon={<Icon name="person" />} />
          <Chip label="Calendar" startIcon={<Icon name="calendar" />} variant="outlined" />
          <Chip label="Settings" startIcon={<Icon name="settings" />} variant="soft" />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 0.5
      }}>
          endIcon (decorative — no onDelete)
        </Typography>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
          <Chip label="Expand" endIcon={<Icon name="chevron-down" />} />
          <Chip label="Navigate" endIcon={<Icon name="chevron-right" />} variant="outlined" />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 0.5
      }}>
          onDelete (close button replaces endIcon)
        </Typography>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
          <Chip label="Tag" onDelete={() => {}} />
          <Chip label="Filter" onDelete={() => {}} variant="outlined" color="primary" />
          <Chip label="Category" onDelete={() => {}} variant="soft" color="success" />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 0.5
      }}>
          startIcon + onDelete
        </Typography>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
          <Chip label="React" startIcon={<Icon name="code-xml" />} onDelete={() => {}} />
          <Chip label="Urgent" startIcon={<Icon name="error" />} onDelete={() => {}} color="error" variant="soft" />
        </div>
      </div>
    </div>
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"Icon slots — startIcon (decorative) and onDelete (interactive end slot).",...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Y,Z,ee;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [active, setActive] = React.useState<Set<string>>(new Set(['react']));
    const tags = ['React', 'TypeScript', 'Design System', 'Tokens', 'MUI'];
    const toggle = (tag: string) => {
      const key = tag.toLowerCase().replace(/\\s+/g, '-');
      setActive(prev => {
        const next = new Set(prev);
        next.has(key) ? next.delete(key) : next.add(key);
        return next;
      });
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div>
          <Typography variant="overline" color="text.secondary" sx={{
          display: 'block',
          mb: 0.5
        }}>
            Filter chips (soft — click to toggle)
          </Typography>
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8
        }}>
            {tags.map(tag => {
            const key = tag.toLowerCase().replace(/\\s+/g, '-');
            return <Chip key={key} label={tag} variant="soft" selected={active.has(key)} onClick={() => toggle(tag)} />;
          })}
          </div>
        </div>
        <div>
          <Typography variant="overline" color="text.secondary" sx={{
          display: 'block',
          mb: 0.5
        }}>
            Filter chips (outlined — click to toggle)
          </Typography>
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8
        }}>
            {tags.map(tag => {
            const key = tag.toLowerCase().replace(/\\s+/g, '-');
            return <Chip key={key} label={tag} variant="outlined" selected={active.has(key)} onClick={() => toggle(tag)} />;
          })}
          </div>
        </div>
      </div>;
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Filter chip pattern — toggle selected state.",...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,te,oe,re,se;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    fontFamily: 'sans-serif'
  }}>
      <div>
        <Typography variant="overline" color="text.secondary">Clickable chip — role="button"</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          When onClick is provided, MUI adds role="button" and tabIndex=0.
          Tab to focus, Enter or Space activates.
        </Typography>
        <Chip label="Clickable" onClick={() => {}} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Deletable chip</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          The delete button is keyboard-accessible separately. Tab selects the chip,
          a second Tab focuses the delete button. Delete or Backspace also triggers onDelete.
        </Typography>
        <Chip label="Tag to delete" onDelete={() => {}} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Focus ring — dynamic color</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Focus ring uses the chip's own text token (not a static brand primary).
          Tab to see the ring for each variant.
        </Typography>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <Chip label="Filled" onClick={() => {}} />
          <Chip label="Outlined" variant="outlined" onClick={() => {}} />
          <Chip label="Soft" variant="soft" onClick={() => {}} />
          <Chip label="Error filled" color="error" onClick={() => {}} />
          <Chip label="Success soft" color="success" variant="soft" onClick={() => {}} />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Static chip — no interactive role</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Without onClick or onDelete, MUI renders with role="presentation" (decorative).
          Not in tab order.
        </Typography>
        <Chip label="Tag / label" />
      </div>
    </div>
}`,...(oe=(te=g.parameters)==null?void 0:te.docs)==null?void 0:oe.source},description:{story:"Accessibility — keyboard focus, role, and aria patterns.",...(se=(re=g.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var le,ne,ie,ce,de;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const sizeVars = ['sm', 'md', 'lg'].flatMap(s => [\`--ep-component-chip-size-\${s}-height\`, \`--ep-component-chip-size-\${s}-font-size\`, \`--ep-component-chip-size-\${s}-padding-x\`, \`--ep-component-chip-size-\${s}-icon-size\`, \`--ep-component-chip-size-\${s}-gap\`]);
    const colorVars = ['filled', 'outlined', 'soft'].flatMap(v => ['primary', 'error', 'success', 'neutral'].flatMap(c => [\`--ep-component-chip-\${v}-\${c}-background\`, \`--ep-component-chip-\${v}-\${c}-background-hover\`, \`--ep-component-chip-\${v}-\${c}-background-selected\`, \`--ep-component-chip-\${v}-\${c}-text\`, \`--ep-component-chip-\${v}-\${c}-border\`]));
    const sharedVars = ['--ep-component-chip-border-radius', '--ep-component-chip-disabled-background', '--ep-component-chip-disabled-text', '--ep-component-chip-disabled-border', '--ep-component-chip-focus-ring-width', '--ep-component-chip-focus-ring-offset', '--ep-component-chip-delete-icon-opacity', '--ep-component-chip-delete-icon-opacity-hover'];
    const allVars = [...sharedVars, ...sizeVars, ...colorVars];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <p style={{
        color: '#666',
        marginBottom: 8
      }}>
          Showing a representative subset. Total component token count: 131.
          Open DevTools → Computed to verify all vars resolve.
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
            {allVars.map(v => <tr key={v} style={{
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
        <div style={{
        display: 'flex',
        gap: 8,
        marginTop: 8,
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
          {(['filled', 'outlined', 'soft'] as const).map(v => (['primary', 'error', 'success', 'neutral'] as const).map(c => <Chip key={\`\${v}-\${c}\`} variant={v} color={c} label={\`\${v}/\${c}\`} size="sm" />))}
          <Chip label="Selected" selected />
          <Chip label="Disabled" disabled />
          <Chip label="Delete" onDelete={() => {}} />
          <Chip label="Icon" startIcon={<Icon name="person" />} />
        </div>
      </div>;
  }
}`,...(ie=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:"Token Audit — all CSS custom properties the Chip component reads.",...(de=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};const fe=["Default","Variants","Sizes","Colors","States","WithIcons","WithSelection","Accessibility","TokenAudit"];export{g as Accessibility,x as Colors,d as Default,y as Sizes,v as States,b as TokenAudit,p as Variants,m as WithIcons,h as WithSelection,fe as __namedExportsOrder,ue as default};

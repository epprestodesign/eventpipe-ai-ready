import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as re}from"./index-C6mWTJJr.js";import{C as s,T as a}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const le={title:"Components/Feedback/CircularProgress",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Spinning arc indicator for loading and progress states. Two modes: indeterminate (continuous spin) and determinate (shows a fixed arc at value%). 5-tier named size scale (xs–xl). All EpColor values supported. Non-interactive — no focus ring, no disabled state."}}},argTypes:{variant:{control:"radio",options:["indeterminate","determinate"]},size:{control:"radio",options:["xs","sm","md","lg","xl"]},color:{control:"radio",options:["primary","secondary","error","warning","info","success","neutral"]},value:{control:{type:"range",min:0,max:100,step:1}},thickness:{control:{type:"number",min:1,max:10,step:.2}},disableShrink:{control:"boolean"}},args:{variant:"indeterminate",size:"md",color:"primary",value:void 0,disableShrink:!1}},t={},n={render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:24},children:["xs","sm","md","lg","xl"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(s,{size:r}),e.jsx(a,{variant:"caption",color:"text.secondary",children:r})]},r))})},i={render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},children:["primary","secondary","error","warning","info","success","neutral"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(s,{color:r}),e.jsx(a,{variant:"caption",color:"text.secondary",children:r})]},r))})},l={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:2},children:"Indeterminate — continuous spin (duration unknown)"}),e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(s,{variant:"indeterminate",color:"primary"}),e.jsx(s,{variant:"indeterminate",color:"secondary"}),e.jsx(s,{variant:"indeterminate",color:"success"})]})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:2},children:"Determinate — arc at 25 %, 50 %, 75 %, 100 %"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:24},children:[25,50,75,100].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(s,{variant:"determinate",value:r}),e.jsxs(a,{variant:"caption",color:"text.secondary",children:[r,"%"]})]},r))})]})]})},d={parameters:{layout:"padded"},render:()=>{const[r,x]=re.useState(25);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:24},children:[e.jsxs("div",{style:{position:"relative",display:"inline-flex"},children:[e.jsx(s,{variant:"determinate",value:r,size:"xl"}),e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(a,{variant:"caption",color:"text.secondary",fontWeight:600,children:[Math.round(r),"%"]})})]}),e.jsx("input",{type:"range",min:0,max:100,value:r,onChange:m=>x(Number(m.target.value)),style:{width:200}}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"Drag slider to update progress"})]})}},c={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Inline with text"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(s,{size:"sm"}),e.jsx(a,{variant:"body2",children:"Loading results…"})]})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Centered in a card placeholder"}),e.jsx("div",{style:{width:320,height:120,border:"1px solid var(--ep-semantic-color-border-default)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(s,{})})]})]})},p={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",children:'ARIA — role="progressbar"'}),e.jsxs(a,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:["MUI renders a ",e.jsx("code",{children:'role="progressbar"'})," with ",e.jsx("code",{children:'aria-valuemin="0"'})," ","and ",e.jsx("code",{children:'aria-valuemax="100"'}),". For indeterminate, ",e.jsx("code",{children:"aria-valuenow"})," ","is omitted. Provide ",e.jsx("code",{children:"aria-label"})," via ",e.jsx("code",{children:"sx"})," or wrap in a"," ",e.jsx("code",{children:'role="status"'})," region."]}),e.jsx("div",{role:"status","aria-label":"Loading content",children:e.jsx(s,{})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",children:"Determinate with aria-valuenow"}),e.jsxs(a,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:["Determinate mode passes ",e.jsx("code",{children:"aria-valuenow"})," automatically from the"," ",e.jsx("code",{children:"value"})," prop."]}),e.jsx(s,{variant:"determinate",value:68,"aria-label":"Upload progress: 68%"})]})]})},y={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const r=["xs","sm","md","lg","xl"].map(o=>`--ep-component-circular-progress-size-${o}`),x=["primary","secondary","error","warning","info","success","neutral"].map(o=>`--ep-component-circular-progress-color-${o}`),m=[...r,...x];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",m.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:m.map(o=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:o}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${o})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},o))})]}),e.jsx(a,{variant:"overline",color:"text.secondary",children:"Live renders — sizes"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:20,marginTop:8,marginBottom:24},children:["xs","sm","md","lg","xl"].map(o=>e.jsx(s,{size:o},o))}),e.jsx(a,{variant:"overline",color:"text.secondary",children:"Live renders — colors"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:20,marginTop:8},children:["primary","secondary","error","warning","info","success","neutral"].map(o=>e.jsx(s,{color:o},o))})]})}};var v,g,u,h,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:"Default — use Controls to explore all props.",...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};var j,b,T,C,I;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => <div key={s} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <CircularProgress size={s} />
          <Typography variant="caption" color="text.secondary">{s}</Typography>
        </div>)}
    </div>
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source},description:{story:"All five sizes on a single row.",...(I=(C=n.parameters)==null?void 0:C.docs)==null?void 0:I.description}}};var w,D,k,S,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap'
  }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => <div key={c} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
            <CircularProgress color={c} />
            <Typography variant="caption" color="text.secondary">{c}</Typography>
          </div>)}
    </div>
}`,...(k=(D=i.parameters)==null?void 0:D.docs)==null?void 0:k.source},description:{story:"All EpColor values.",...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.description}}};var z,P,V,B,F;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 2
      }}>
          Indeterminate — continuous spin (duration unknown)
        </Typography>
        <div style={{
        display: 'flex',
        gap: 24
      }}>
          <CircularProgress variant="indeterminate" color="primary" />
          <CircularProgress variant="indeterminate" color="secondary" />
          <CircularProgress variant="indeterminate" color="success" />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 2
      }}>
          Determinate — arc at 25 %, 50 %, 75 %, 100 %
        </Typography>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 24
      }}>
          {[25, 50, 75, 100].map(v => <div key={v} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <CircularProgress variant="determinate" value={v} />
              <Typography variant="caption" color="text.secondary">{v}%</Typography>
            </div>)}
        </div>
      </div>
    </div>
}`,...(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:"Indeterminate vs determinate modes.",...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};var R,L,$,E,M;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [value, setValue] = React.useState(25);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24
    }}>
        <div style={{
        position: 'relative',
        display: 'inline-flex'
      }}>
          <CircularProgress variant="determinate" value={value} size="xl" />
          <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            <Typography variant="caption" color="text.secondary" fontWeight={600}>
              {Math.round(value)}%
            </Typography>
          </div>
        </div>
        <input type="range" min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} style={{
        width: 200
      }} />
        <Typography variant="body2" color="text.secondary">
          Drag slider to update progress
        </Typography>
      </div>;
  }
}`,...($=(L=d.parameters)==null?void 0:L.docs)==null?void 0:$.source},description:{story:"Animated determinate — controlled value slider.",...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.description}}};var U,W,N,O,_;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Inline with text
        </Typography>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
          <CircularProgress size="sm" />
          <Typography variant="body2">Loading results…</Typography>
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Centered in a card placeholder
        </Typography>
        <div style={{
        width: 320,
        height: 120,
        border: '1px solid var(--ep-semantic-color-border-default)',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <CircularProgress />
        </div>
      </div>
    </div>
}`,...(N=(W=c.parameters)==null?void 0:W.docs)==null?void 0:N.source},description:{story:"In-context usage — button loading, inline text, overlay.",...(_=(O=c.parameters)==null?void 0:O.docs)==null?void 0:_.description}}};var q,G,H,J,K;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        <Typography variant="overline" color="text.secondary">
          ARIA — role="progressbar"
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          MUI renders a <code>role="progressbar"</code> with <code>aria-valuemin="0"</code>
          {' '}and <code>aria-valuemax="100"</code>. For indeterminate, <code>aria-valuenow</code>
          {' '}is omitted. Provide <code>aria-label</code> via <code>sx</code> or wrap in a
          {' '}<code>role="status"</code> region.
        </Typography>
        <div role="status" aria-label="Loading content">
          <CircularProgress />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">
          Determinate with aria-valuenow
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Determinate mode passes <code>aria-valuenow</code> automatically from the
          {' '}<code>value</code> prop.
        </Typography>
        <CircularProgress variant="determinate" value={68} aria-label="Upload progress: 68%" />
      </div>
    </div>
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"Accessibility — ARIA patterns for progress indicators.",...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Y,Z,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const sizeVars = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => \`--ep-component-circular-progress-size-\${s}\`);
    const colorVars = (['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => \`--ep-component-circular-progress-color-\${c}\`);
    const vars = [...sizeVars, ...colorVars];
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
        <Typography variant="overline" color="text.secondary">Live renders — sizes</Typography>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        marginTop: 8,
        marginBottom: 24
      }}>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => <CircularProgress key={s} size={s} />)}
        </div>
        <Typography variant="overline" color="text.secondary">Live renders — colors</Typography>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        marginTop: 8
      }}>
          {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => <CircularProgress key={c} color={c} />)}
        </div>
      </div>;
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Token Audit — all CSS custom properties the CircularProgress component reads.",...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};const de=["Default","Sizes","Colors","Variants","DeterminateProgress","InContext","Accessibility","TokenAudit"];export{p as Accessibility,i as Colors,t as Default,d as DeterminateProgress,c as InContext,n as Sizes,y as TokenAudit,l as Variants,de as __namedExportsOrder,le as default};

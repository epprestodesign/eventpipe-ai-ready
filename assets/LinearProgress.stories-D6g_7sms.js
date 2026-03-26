import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as g}from"./index-C6mWTJJr.js";import{W as a,T as r}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const me={title:"Components/Feedback/LinearProgress",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Horizontal bar indicator for loading and progress states. Four modes: indeterminate (continuous), determinate (value%), buffer (progress + buffered), query (reversed indeterminate). All EpColor values supported. Optional rounded end-caps. Non-interactive — no focus ring, no disabled state."}}},argTypes:{variant:{control:"radio",options:["indeterminate","determinate","buffer","query"]},color:{control:"radio",options:["primary","secondary","error","warning","info","success","neutral"]},value:{control:{type:"range",min:0,max:100,step:1}},valueBuffer:{control:{type:"range",min:0,max:100,step:1}},rounded:{control:"boolean"}},args:{variant:"indeterminate",color:"primary",value:void 0,valueBuffer:void 0,rounded:!1}},i={decorators:[o=>e.jsx("div",{style:{width:320},children:e.jsx(o,{})})]},n={parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,width:320},children:["primary","secondary","error","warning","info","success","neutral"].map(o=>e.jsxs("div",{children:[e.jsx(r,{variant:"caption",color:"text.secondary",sx:{display:"block",mb:.5},children:o}),e.jsx(a,{color:o})]},o))})},d={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:360},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Indeterminate — continuous (duration unknown)"}),e.jsx(a,{variant:"indeterminate"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Determinate — fixed arc at 60%"}),e.jsx(a,{variant:"determinate",value:60})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Buffer — progress 40%, buffered 70%"}),e.jsx(a,{variant:"buffer",value:40,valueBuffer:70})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Query — reversed indeterminate (pre-loading)"}),e.jsx(a,{variant:"query"})]})]})},l={parameters:{layout:"padded"},render:()=>{const[o,m]=g.useState(30);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:360},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(r,{variant:"body2",color:"text.secondary",children:"Loading…"}),e.jsxs(r,{variant:"body2",color:"text.secondary",fontWeight:600,children:[o,"%"]})]}),e.jsx(a,{variant:"determinate",value:o}),e.jsx("input",{type:"range",min:0,max:100,value:o,onChange:t=>m(Number(t.target.value)),style:{width:"100%"}}),e.jsx(r,{variant:"caption",color:"text.secondary",children:"Drag slider to update progress"})]})}},c={parameters:{layout:"padded"},render:()=>{const[o,m]=g.useState(20),[t,s]=g.useState(50);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:360},children:[e.jsx(a,{variant:"buffer",value:o,valueBuffer:t}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("label",{style:{fontSize:12,color:"#666"},children:["Progress: ",o,"%",e.jsx("input",{type:"range",min:0,max:t,value:o,onChange:x=>m(Number(x.target.value)),style:{display:"block",width:"100%"}})]}),e.jsxs("label",{style:{fontSize:12,color:"#666"},children:["Buffer: ",t,"%",e.jsx("input",{type:"range",min:o,max:100,value:t,onChange:x=>s(Number(x.target.value)),style:{display:"block",width:"100%"}})]})]})]})}},p={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:360},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Default (square ends)"}),e.jsx(a,{variant:"determinate",value:65})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Rounded end-caps"}),e.jsx(a,{variant:"determinate",value:65,rounded:!0})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Rounded — indeterminate"}),e.jsx(a,{variant:"indeterminate",rounded:!0})]})]})},y={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,width:400,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Page-level loader (top of viewport)"}),e.jsxs("div",{style:{border:"1px solid #eee",borderRadius:4,overflow:"hidden"},children:[e.jsx(a,{color:"primary"}),e.jsx("div",{style:{padding:16,background:"#fafafa"},children:e.jsx(r,{variant:"body2",color:"text.secondary",children:"Page content below…"})})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Upload progress"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(r,{variant:"body2",children:"document.pdf"}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"72%"})]}),e.jsx(a,{variant:"determinate",value:72,color:"success",rounded:!0})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Video buffering"}),e.jsx(a,{variant:"buffer",value:35,valueBuffer:65,color:"secondary"})]})]})},v={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:400,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",children:'ARIA — role="progressbar"'}),e.jsxs(r,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:["MUI renders ",e.jsx("code",{children:'role="progressbar"'})," with ",e.jsx("code",{children:'aria-valuemin="0"'})," ","and ",e.jsx("code",{children:'aria-valuemax="100"'}),". For indeterminate,"," ",e.jsx("code",{children:"aria-valuenow"})," is omitted. Wrap in a"," ",e.jsx("code",{children:'role="status"'})," region or pass ",e.jsx("code",{children:"aria-label"})," via ",e.jsx("code",{children:"sx"}),"."]}),e.jsx("div",{role:"status","aria-label":"Loading content",children:e.jsx(a,{})})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",children:"Determinate with aria-valuenow"}),e.jsxs(r,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:["Determinate mode passes ",e.jsx("code",{children:"aria-valuenow"})," automatically from the"," ",e.jsx("code",{children:"value"})," prop."]}),e.jsx(a,{variant:"determinate",value:55,"aria-label":"File upload: 55% complete"})]})]})},u={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const o=["primary","secondary","error","warning","info","success","neutral"].map(s=>`--ep-component-linear-progress-bar-${s}`),t=[...["--ep-component-linear-progress-height","--ep-component-linear-progress-border-radius","--ep-component-linear-progress-track-color"],...o];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",t.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch / value"})]})}),e.jsx("tbody",{children:t.map(s=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:s}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${s})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},s))})]}),e.jsx(r,{variant:"overline",color:"text.secondary",children:"Live renders — colors"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,marginTop:8,marginBottom:24,width:360},children:["primary","secondary","error","warning","info","success","neutral"].map(s=>e.jsxs("div",{children:[e.jsx(r,{variant:"caption",color:"text.secondary",sx:{display:"block",mb:.5},children:s}),e.jsx(a,{color:s})]},s))}),e.jsx(r,{variant:"overline",color:"text.secondary",children:"Live renders — rounded"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,marginTop:8,width:360},children:[e.jsx(a,{variant:"determinate",value:60}),e.jsx(a,{variant:"determinate",value:60,rounded:!0})]})]})}};var h,f,b,j,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:"Default — use Controls to explore all props.",...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.description}}};var w,k,D,P,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 320
  }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => <div key={c}>
            <Typography variant="caption" color="text.secondary" sx={{
        display: 'block',
        mb: 0.5
      }}>
              {c}
            </Typography>
            <LinearProgress color={c} />
          </div>)}
    </div>
}`,...(D=(k=n.parameters)==null?void 0:k.docs)==null?void 0:D.source},description:{story:"All EpColor values.",...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.description}}};var L,B,C,A,R;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 360
  }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Indeterminate — continuous (duration unknown)
        </Typography>
        <LinearProgress variant="indeterminate" />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Determinate — fixed arc at 60%
        </Typography>
        <LinearProgress variant="determinate" value={60} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Buffer — progress 40%, buffered 70%
        </Typography>
        <LinearProgress variant="buffer" value={40} valueBuffer={70} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Query — reversed indeterminate (pre-loading)
        </Typography>
        <LinearProgress variant="query" />
      </div>
    </div>
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source},description:{story:"All four variant modes.",...(R=(A=d.parameters)==null?void 0:A.docs)==null?void 0:R.description}}};var V,F,I,z,N;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [value, setValue] = React.useState(30);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 360
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
          <Typography variant="body2" color="text.secondary">Loading…</Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={600}>{value}%</Typography>
        </div>
        <LinearProgress variant="determinate" value={value} />
        <input type="range" min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} style={{
        width: '100%'
      }} />
        <Typography variant="caption" color="text.secondary">Drag slider to update progress</Typography>
      </div>;
  }
}`,...(I=(F=l.parameters)==null?void 0:F.docs)==null?void 0:I.source},description:{story:"Animated determinate — controlled value slider.",...(N=(z=l.parameters)==null?void 0:z.docs)==null?void 0:N.description}}};var q,W,E,O,U;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [progress, setProgress] = React.useState(20);
    const [buffer, setBuffer] = React.useState(50);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 360
    }}>
        <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <label style={{
          fontSize: 12,
          color: '#666'
        }}>
            Progress: {progress}%
            <input type="range" min={0} max={buffer} value={progress} onChange={e => setProgress(Number(e.target.value))} style={{
            display: 'block',
            width: '100%'
          }} />
          </label>
          <label style={{
          fontSize: 12,
          color: '#666'
        }}>
            Buffer: {buffer}%
            <input type="range" min={progress} max={100} value={buffer} onChange={e => setBuffer(Number(e.target.value))} style={{
            display: 'block',
            width: '100%'
          }} />
          </label>
        </div>
      </div>;
  }
}`,...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.source},description:{story:"Buffer mode — progress and buffered amount controlled independently.",...(U=(O=c.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};var $,M,Q,_,H;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 360
  }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Default (square ends)
        </Typography>
        <LinearProgress variant="determinate" value={65} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Rounded end-caps
        </Typography>
        <LinearProgress variant="determinate" value={65} rounded />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Rounded — indeterminate
        </Typography>
        <LinearProgress variant="indeterminate" rounded />
      </div>
    </div>
}`,...(Q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Q.source},description:{story:"Rounded end-caps via the `rounded` prop.",...(H=(_=p.parameters)==null?void 0:_.docs)==null?void 0:H.description}}};var G,J,K,X,Y;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    width: 400,
    fontFamily: 'sans-serif'
  }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Page-level loader (top of viewport)
        </Typography>
        <div style={{
        border: '1px solid #eee',
        borderRadius: 4,
        overflow: 'hidden'
      }}>
          <LinearProgress color="primary" />
          <div style={{
          padding: 16,
          background: '#fafafa'
        }}>
            <Typography variant="body2" color="text.secondary">Page content below…</Typography>
          </div>
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Upload progress
        </Typography>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
            <Typography variant="body2">document.pdf</Typography>
            <Typography variant="body2" color="text.secondary">72%</Typography>
          </div>
          <LinearProgress variant="determinate" value={72} color="success" rounded />
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Video buffering
        </Typography>
        <LinearProgress variant="buffer" value={35} valueBuffer={65} color="secondary" />
      </div>
    </div>
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"In-context usage — page loader, section loader, upload.",...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,re,ae,oe;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 400,
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
          MUI renders <code>role="progressbar"</code> with <code>aria-valuemin="0"</code>{' '}
          and <code>aria-valuemax="100"</code>. For indeterminate,{' '}
          <code>aria-valuenow</code> is omitted. Wrap in a{' '}
          <code>role="status"</code> region or pass <code>aria-label</code> via <code>sx</code>.
        </Typography>
        <div role="status" aria-label="Loading content">
          <LinearProgress />
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
          Determinate mode passes <code>aria-valuenow</code> automatically from the{' '}
          <code>value</code> prop.
        </Typography>
        <LinearProgress variant="determinate" value={55} aria-label="File upload: 55% complete" />
      </div>
    </div>
}`,...(re=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"Accessibility — ARIA patterns for progress indicators.",...(oe=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var se,te,ie,ne,de;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const colorVars = (['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => \`--ep-component-linear-progress-bar-\${c}\`);
    const shapeVars = ['--ep-component-linear-progress-height', '--ep-component-linear-progress-border-radius', '--ep-component-linear-progress-track-color'];
    const vars = [...shapeVars, ...colorVars];
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
        <Typography variant="overline" color="text.secondary">Live renders — colors</Typography>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 8,
        marginBottom: 24,
        width: 360
      }}>
          {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => <div key={c}>
              <Typography variant="caption" color="text.secondary" sx={{
            display: 'block',
            mb: 0.5
          }}>{c}</Typography>
              <LinearProgress color={c} />
            </div>)}
        </div>
        <Typography variant="overline" color="text.secondary">Live renders — rounded</Typography>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 8,
        width: 360
      }}>
          <LinearProgress variant="determinate" value={60} />
          <LinearProgress variant="determinate" value={60} rounded />
        </div>
      </div>;
  }
}`,...(ie=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ie.source},description:{story:"Token Audit — all CSS custom properties the LinearProgress component reads.",...(de=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:de.description}}};const xe=["Default","Colors","Variants","DeterminateProgress","BufferProgress","Rounded","InContext","Accessibility","TokenAudit"];export{v as Accessibility,c as BufferProgress,n as Colors,i as Default,l as DeterminateProgress,y as InContext,p as Rounded,u as TokenAudit,d as Variants,xe as __namedExportsOrder,me as default};

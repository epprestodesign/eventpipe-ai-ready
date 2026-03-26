import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as H}from"./index-C6mWTJJr.js";import{O as t,T as a}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const te={title:"Components/Feedback/Skeleton",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Animated placeholder for content that is still loading. Four shapes: text (single line), circular (avatar), rectangular (image/card), rounded (card with rounding). Two animations: wave (shimmer sweep) and pulse (opacity fade). Non-interactive — no focus ring, no color or size variants."}}},argTypes:{variant:{control:"radio",options:["text","circular","rectangular","rounded"]},animation:{control:"radio",options:["wave","pulse",!1]},width:{control:"text"},height:{control:"text"}},args:{variant:"text",animation:"wave",width:200,height:void 0}},o={},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"text — single line placeholder (default)"}),e.jsx(t,{variant:"text",width:280})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"circular — avatar or icon placeholder"}),e.jsx(t,{variant:"circular",width:48,height:48})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"rectangular — image or card placeholder"}),e.jsx(t,{variant:"rectangular",width:280,height:120})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"rounded — card with rounded corners"}),e.jsx(t,{variant:"rounded",width:280,height:120})]})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"wave — shimmer sweep (default)"}),e.jsx(t,{animation:"wave",width:280}),e.jsx(t,{animation:"wave",width:200,sx:{mt:.5}}),e.jsx(t,{animation:"wave",width:240,sx:{mt:.5}})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"pulse — opacity fade"}),e.jsx(t,{animation:"pulse",width:280}),e.jsx(t,{animation:"pulse",width:200,sx:{mt:.5}}),e.jsx(t,{animation:"pulse",width:240,sx:{mt:.5}})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"false — static, no animation"}),e.jsx(t,{animation:!1,width:280}),e.jsx(t,{animation:!1,width:200,sx:{mt:.5}}),e.jsx(t,{animation:!1,width:240,sx:{mt:.5}})]})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Card placeholder"}),e.jsx(t,{variant:"rounded",width:320,height:160,sx:{mb:1}}),e.jsx(t,{variant:"text",width:260}),e.jsx(t,{variant:"text",width:200,sx:{mt:.5}})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"List item placeholder"}),[1,2,3].map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:12},children:[e.jsx(t,{variant:"circular",width:40,height:40}),e.jsxs("div",{style:{flex:1},children:[e.jsx(t,{variant:"text",width:"80%"}),e.jsx(t,{variant:"text",width:"60%",sx:{mt:.5}})]})]},i))]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Article placeholder"}),e.jsx(t,{variant:"rectangular",width:"100%",height:200,sx:{mb:1.5}}),e.jsx(t,{variant:"text",width:"70%"}),e.jsx(t,{variant:"text",width:"100%",sx:{mt:.5}}),e.jsx(t,{variant:"text",width:"100%",sx:{mt:.5}}),e.jsx(t,{variant:"text",width:"60%",sx:{mt:.5}})]})]})},l={render:()=>{const[i,r]=H.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx("button",{onClick:()=>r(G=>!G),style:{alignSelf:"flex-start",padding:"6px 12px",cursor:"pointer"},children:i?"Show loading state":"Show loaded state"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[i?e.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"var(--ep-semantic-color-brand-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:600,fontFamily:"sans-serif"},children:"JD"}):e.jsx(t,{variant:"circular",width:40,height:40}),e.jsx("div",{style:{flex:1},children:i?e.jsxs("div",{style:{fontFamily:"sans-serif"},children:[e.jsx(a,{variant:"body1",children:"Jane Doe"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"Product Designer"})]}):e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"text",width:140}),e.jsx(t,{variant:"text",width:100,sx:{mt:.5}})]})})]})]})}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",children:"ARIA — role and aria-busy"}),e.jsxs(a,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:["Skeleton renders as a ",e.jsx("code",{children:"<span>"})," with no explicit ARIA role — it is purely visual. The containing region should use ",e.jsx("code",{children:'aria-busy="true"'})," while loading so that screen readers announce the loading state, and ",e.jsx("code",{children:'aria-busy="false"'})," when content is available."]}),e.jsx("div",{"aria-busy":"true","aria-label":"Profile loading",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(t,{variant:"circular",width:40,height:40}),e.jsxs("div",{children:[e.jsx(t,{variant:"text",width:140}),e.jsx(t,{variant:"text",width:100,sx:{mt:.5}})]})]})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",children:"Reduced motion — animation respects prefers-reduced-motion"}),e.jsxs(a,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:["MUI Skeleton automatically disables animation when",e.jsx("code",{children:" prefers-reduced-motion: reduce"})," is detected. Use"," ",e.jsxs("code",{children:["animation=","{false}"]})," to always show a static placeholder."]}),e.jsx(t,{animation:!1,width:240})]})]})},p={name:"Token Audit (DevTools)",render:()=>{const i=["--ep-component-skeleton-background","--ep-component-skeleton-border-radius-text","--ep-component-skeleton-border-radius-rectangular","--ep-component-skeleton-border-radius-rounded"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",i.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:i.map(r=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:r}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${r})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},r))})]}),e.jsx(a,{variant:"overline",color:"text.secondary",children:"Live renders"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,marginTop:8},children:[e.jsx(t,{variant:"text",width:200}),e.jsx(t,{variant:"circular",width:40,height:40}),e.jsx(t,{variant:"rectangular",width:200,height:60}),e.jsx(t,{variant:"rounded",width:200,height:60}),e.jsx(t,{animation:"pulse",width:200}),e.jsx(t,{animation:!1,width:200})]})]})}};var h,x,v,y,m;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:"Default — use Controls to explore variant, animation, width, and height.",...(m=(y=o.parameters)==null?void 0:y.docs)==null?void 0:m.description}}};var g,u,w,f,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          text — single line placeholder (default)
        </Typography>
        <Skeleton variant="text" width={280} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          circular — avatar or icon placeholder
        </Typography>
        <Skeleton variant="circular" width={48} height={48} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          rectangular — image or card placeholder
        </Typography>
        <Skeleton variant="rectangular" width={280} height={120} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          rounded — card with rounded corners
        </Typography>
        <Skeleton variant="rounded" width={280} height={120} />
      </div>
    </div>
}`,...(w=(u=n.parameters)==null?void 0:u.docs)==null?void 0:w.source},description:{story:"All four variant shapes.",...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var j,k,S,T,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          wave — shimmer sweep (default)
        </Typography>
        <Skeleton animation="wave" width={280} />
        <Skeleton animation="wave" width={200} sx={{
        mt: 0.5
      }} />
        <Skeleton animation="wave" width={240} sx={{
        mt: 0.5
      }} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          pulse — opacity fade
        </Typography>
        <Skeleton animation="pulse" width={280} />
        <Skeleton animation="pulse" width={200} sx={{
        mt: 0.5
      }} />
        <Skeleton animation="pulse" width={240} sx={{
        mt: 0.5
      }} />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          false — static, no animation
        </Typography>
        <Skeleton animation={false} width={280} />
        <Skeleton animation={false} width={200} sx={{
        mt: 0.5
      }} />
        <Skeleton animation={false} width={240} sx={{
        mt: 0.5
      }} />
      </div>
    </div>
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source},description:{story:"Wave, pulse, and no-animation variants.",...(A=(T=s.parameters)==null?void 0:T.docs)==null?void 0:A.description}}};var D,C,L,I,R;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {/* Card placeholder */}
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Card placeholder
        </Typography>
        <Skeleton variant="rounded" width={320} height={160} sx={{
        mb: 1
      }} />
        <Skeleton variant="text" width={260} />
        <Skeleton variant="text" width={200} sx={{
        mt: 0.5
      }} />
      </div>

      {/* List item placeholder */}
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          List item placeholder
        </Typography>
        {[1, 2, 3].map(i => <div key={i} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12
      }}>
            <Skeleton variant="circular" width={40} height={40} />
            <div style={{
          flex: 1
        }}>
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" sx={{
            mt: 0.5
          }} />
            </div>
          </div>)}
      </div>

      {/* Article placeholder */}
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Article placeholder
        </Typography>
        <Skeleton variant="rectangular" width="100%" height={200} sx={{
        mb: 1.5
      }} />
        <Skeleton variant="text" width="70%" />
        <Skeleton variant="text" width="100%" sx={{
        mt: 0.5
      }} />
        <Skeleton variant="text" width="100%" sx={{
        mt: 0.5
      }} />
        <Skeleton variant="text" width="60%" sx={{
        mt: 0.5
      }} />
      </div>
    </div>
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source},description:{story:"Typical content-loading pattern — card with avatar, title, and body lines.",...(R=(I=d.parameters)==null?void 0:I.docs)==null?void 0:R.description}}};var F,B,J,O,P;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [loaded, setLoaded] = React.useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <button onClick={() => setLoaded(v => !v)} style={{
        alignSelf: 'flex-start',
        padding: '6px 12px',
        cursor: 'pointer'
      }}>
          {loaded ? 'Show loading state' : 'Show loaded state'}
        </button>

        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }}>
          {loaded ? <div style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'var(--ep-semantic-color-brand-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 600,
          fontFamily: 'sans-serif'
        }}>
              JD
            </div> : <Skeleton variant="circular" width={40} height={40} />}
          <div style={{
          flex: 1
        }}>
            {loaded ? <div style={{
            fontFamily: 'sans-serif'
          }}>
                <Typography variant="body1">Jane Doe</Typography>
                <Typography variant="body2" color="text.secondary">Product Designer</Typography>
              </div> : <>
                <Skeleton variant="text" width={140} />
                <Skeleton variant="text" width={100} sx={{
              mt: 0.5
            }} />
              </>}
          </div>
        </div>
      </div>;
  }
}`,...(J=(B=l.parameters)==null?void 0:B.docs)==null?void 0:J.source},description:{story:"Loaded vs loading state toggle.",...(P=(O=l.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};var U,V,z,W,E;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    fontFamily: 'sans-serif'
  }}>
      <div>
        <Typography variant="overline" color="text.secondary">
          ARIA — role and aria-busy
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Skeleton renders as a <code>&lt;span&gt;</code> with no explicit ARIA role — it is purely
          visual. The containing region should use <code>aria-busy="true"</code> while loading so
          that screen readers announce the loading state, and <code>aria-busy="false"</code> when
          content is available.
        </Typography>
        <div aria-busy="true" aria-label="Profile loading">
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
            <Skeleton variant="circular" width={40} height={40} />
            <div>
              <Skeleton variant="text" width={140} />
              <Skeleton variant="text" width={100} sx={{
              mt: 0.5
            }} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">
          Reduced motion — animation respects prefers-reduced-motion
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          MUI Skeleton automatically disables animation when
          <code> prefers-reduced-motion: reduce</code> is detected. Use{' '}
          <code>animation={'{false}'}</code> to always show a static placeholder.
        </Typography>
        <Skeleton animation={false} width={240} />
      </div>
    </div>
}`,...(z=(V=c.parameters)==null?void 0:V.docs)==null?void 0:z.source},description:{story:"Accessibility — skeleton semantics and screen-reader behavior.",...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.description}}};var M,_,$,N,q;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  render: () => {
    const vars = ['--ep-component-skeleton-background', '--ep-component-skeleton-border-radius-text', '--ep-component-skeleton-border-radius-rectangular', '--ep-component-skeleton-border-radius-rounded'];
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
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 8
      }}>
          <Skeleton variant="text" width={200} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={200} height={60} />
          <Skeleton variant="rounded" width={200} height={60} />
          <Skeleton animation="pulse" width={200} />
          <Skeleton animation={false} width={200} />
        </div>
      </div>;
  }
}`,...($=(_=p.parameters)==null?void 0:_.docs)==null?void 0:$.source},description:{story:"Token Audit — all CSS custom properties the Skeleton component reads.",...(q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:q.description}}};const ae=["Default","Variants","Animations","ContentLoading","LoadedVsLoading","Accessibility","TokenAudit"];export{c as Accessibility,s as Animations,d as ContentLoading,o as Default,l as LoadedVsLoading,p as TokenAudit,n as Variants,ae as __namedExportsOrder,te as default};

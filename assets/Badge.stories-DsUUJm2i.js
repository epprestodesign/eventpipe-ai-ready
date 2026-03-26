import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as oe}from"./index-C6mWTJJr.js";import{c as o,T as a,I as y,b as n}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const de={title:"Components/Surfaces/Badge",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Overlaid indicator anchored to a child element. `standard` variant shows a count or label; `dot` is a presence-only indicator. Wraps any child — commonly Avatar, Icon, or IconButton."}}},argTypes:{variant:{control:"radio",options:["standard","dot"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},color:{control:"select",options:["primary","secondary","error","warning","info","success","neutral"]},overlap:{control:"radio",options:["rectangular","circular"]},badgeContent:{control:"text"},max:{control:"number"},showZero:{control:"boolean"},invisible:{control:"boolean"}},args:{variant:"standard",size:"md",color:"primary",overlap:"rectangular",badgeContent:4,max:99,showZero:!1,invisible:!1,children:oe.createElement(n,{size:"md"})}},i={},s={render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:32},children:["xs","sm","md","lg","xl"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(o,{size:t,badgeContent:4,color:"primary",children:e.jsx(n,{size:t})}),e.jsx(a,{variant:"caption",color:"text.secondary",children:t})]},t))})},l={render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"},children:["primary","secondary","error","warning","info","success","neutral"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(o,{size:"md",badgeContent:4,color:t,children:e.jsx(n,{size:"md"})}),e.jsx(a,{variant:"caption",color:"text.secondary",children:t})]},t))})},c={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(o,{variant:"dot",color:"success",overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(n,{size:"lg",children:"JD"})}),e.jsx(a,{variant:"caption",color:"text.secondary",children:"online"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(o,{variant:"dot",color:"error",overlap:"circular",anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(n,{size:"lg",children:e.jsx(y,{name:"info",size:"lg"})})}),e.jsx(a,{variant:"caption",color:"text.secondary",children:"alert"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(o,{variant:"dot",color:"warning",children:e.jsx(y,{name:"calendar",size:"lg"})}),e.jsx(a,{variant:"caption",color:"text.secondary",children:"rectangular"})]})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:32},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(o,{badgeContent:99,max:99,color:"error",children:e.jsx(n,{size:"md"})}),e.jsx(a,{variant:"caption",color:"text.secondary",children:"99 (at max)"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(o,{badgeContent:100,max:99,color:"error",children:e.jsx(n,{size:"md"})}),e.jsx(a,{variant:"caption",color:"text.secondary",children:"100 → 99+"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(o,{badgeContent:1e3,max:999,color:"primary",children:e.jsx(n,{size:"md"})}),e.jsx(a,{variant:"caption",color:"text.secondary",children:"1000 → 999+"})]})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:40},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(o,{badgeContent:3,color:"error",overlap:"rectangular",children:e.jsx(y,{name:"settings",size:"xl"})}),e.jsx(a,{variant:"caption",color:"text.secondary",children:"rectangular"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(o,{badgeContent:3,color:"error",overlap:"circular",anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(n,{size:"lg",children:"JD"})}),e.jsx(a,{variant:"caption",color:"text.secondary",children:"circular"})]})]})},g={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",children:"Numeric badge — wrap in aria-label"}),e.jsx(a,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:"Badge content is visual only. Wrap the trigger with an aria-label that includes the count."}),e.jsx("div",{"aria-label":"4 notifications",children:e.jsx(o,{badgeContent:4,color:"error",children:e.jsx(y,{name:"info",size:"lg"})})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",children:"Dot badge — status via aria-label"}),e.jsx(a,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:"Dot conveys no count — nearby text or aria-label on the trigger provides meaning."}),e.jsx("div",{"aria-label":"Jane Doe — online",children:e.jsx(o,{variant:"dot",color:"success",overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(n,{size:"lg",children:"JD"})})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"text.secondary",children:"Invisible — hidden badge (invisible=true)"}),e.jsx(a,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:"Set invisible to hide the badge without unmounting. The trigger remains in the tab order."}),e.jsx(o,{badgeContent:4,color:"error",invisible:!0,children:e.jsx(y,{name:"info",size:"lg"})})]})]})},m={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const t=["xs","sm","md","lg","xl"].flatMap(r=>[`--ep-component-badge-size-${r}-height`,`--ep-component-badge-size-${r}-min-width`,`--ep-component-badge-size-${r}-font-size`,`--ep-component-badge-size-${r}-padding-x`,`--ep-component-badge-size-${r}-dot-size`]),ae=["primary","secondary","error","warning","info","success","neutral"].flatMap(r=>[`--ep-component-badge-color-${r}-background`,`--ep-component-badge-color-${r}-text`]),x=["--ep-component-badge-border-radius",...t,...ae];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves (no fallback value). Total: ",x.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:x.map(r=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:r}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${r})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},r))})]}),e.jsx(a,{variant:"overline",color:"text.secondary",children:"Live renders"}),e.jsxs("div",{style:{display:"flex",gap:16,marginTop:8,flexWrap:"wrap",alignItems:"center"},children:[["xs","sm","md","lg","xl"].map(r=>e.jsx(o,{size:r,badgeContent:4,color:"primary",children:e.jsx(n,{size:r})},r)),["primary","secondary","error","warning","info","success","neutral"].map(r=>e.jsx(o,{badgeContent:1,color:r,children:e.jsx(n,{size:"md"})},r)),e.jsx(o,{variant:"dot",color:"success",overlap:"circular",children:e.jsx(n,{size:"md",children:"JD"})})]})]})}};var v,h,u,b,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:"Default — use Controls to explore all props.",...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var j,z,T,B,D;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 32
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => <div key={s} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <Badge size={s} badgeContent={4} color="primary">
            <Avatar size={s} />
          </Badge>
          <Typography variant="caption" color="text.secondary">{s}</Typography>
        </div>)}
    </div>
}`,...(T=(z=s.parameters)==null?void 0:z.docs)==null?void 0:T.source},description:{story:"All five sizes side-by-side (standard variant).",...(D=(B=s.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var I,C,A,w,S;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => <div key={c} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <Badge size="md" badgeContent={4} color={c}>
            <Avatar size="md" />
          </Badge>
          <Typography variant="caption" color="text.secondary">{c}</Typography>
        </div>)}
    </div>
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source},description:{story:"All seven colors.",...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.description}}};var k,O,$,V,J;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Badge variant="dot" color="success" overlap="circular" anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}>
          <Avatar size="lg">JD</Avatar>
        </Badge>
        <Typography variant="caption" color="text.secondary">online</Typography>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Badge variant="dot" color="error" overlap="circular" anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
          <Avatar size="lg"><Icon name="info" size="lg" /></Avatar>
        </Badge>
        <Typography variant="caption" color="text.secondary">alert</Typography>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Badge variant="dot" color="warning">
          <Icon name="calendar" size="lg" />
        </Badge>
        <Typography variant="caption" color="text.secondary">rectangular</Typography>
      </div>
    </div>
}`,...($=(O=c.parameters)==null?void 0:O.docs)==null?void 0:$.source},description:{story:"Dot variant — presence indicator only (no content).",...(J=(V=c.parameters)==null?void 0:V.docs)==null?void 0:J.description}}};var M,W,F,E,R;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 32
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Badge badgeContent={99} max={99} color="error">
          <Avatar size="md" />
        </Badge>
        <Typography variant="caption" color="text.secondary">99 (at max)</Typography>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Badge badgeContent={100} max={99} color="error">
          <Avatar size="md" />
        </Badge>
        <Typography variant="caption" color="text.secondary">100 → 99+</Typography>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Badge badgeContent={1000} max={999} color="primary">
          <Avatar size="md" />
        </Badge>
        <Typography variant="caption" color="text.secondary">1000 → 999+</Typography>
      </div>
    </div>
}`,...(F=(W=d.parameters)==null?void 0:W.docs)==null?void 0:F.source},description:{story:"Max overflow — badgeContent exceeds max, shows `{max}+`.",...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.description}}};var L,N,Z,_,q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 40
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Badge badgeContent={3} color="error" overlap="rectangular">
          <Icon name="settings" size="xl" />
        </Badge>
        <Typography variant="caption" color="text.secondary">rectangular</Typography>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Badge badgeContent={3} color="error" overlap="circular" anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
          <Avatar size="lg">JD</Avatar>
        </Badge>
        <Typography variant="caption" color="text.secondary">circular</Typography>
      </div>
    </div>
}`,...(Z=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Z.source},description:{story:"Overlap — rectangular vs circular wrapping children.",...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.description}}};var G,H,K,P,Q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        <Typography variant="overline" color="text.secondary">Numeric badge — wrap in aria-label</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Badge content is visual only. Wrap the trigger with an aria-label that includes the count.
        </Typography>
        <div aria-label="4 notifications">
          <Badge badgeContent={4} color="error">
            <Icon name="info" size="lg" />
          </Badge>
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Dot badge — status via aria-label</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Dot conveys no count — nearby text or aria-label on the trigger provides meaning.
        </Typography>
        <div aria-label="Jane Doe — online">
          <Badge variant="dot" color="success" overlap="circular" anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}>
            <Avatar size="lg">JD</Avatar>
          </Badge>
        </div>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Invisible — hidden badge (invisible=true)</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Set invisible to hide the badge without unmounting. The trigger remains in the tab order.
        </Typography>
        <Badge badgeContent={4} color="error" invisible>
          <Icon name="info" size="lg" />
        </Badge>
      </div>
    </div>
}`,...(K=(H=g.parameters)==null?void 0:H.docs)==null?void 0:K.source},description:{story:"Accessibility — badge role, aria-label patterns.",...(Q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:Q.description}}};var U,X,Y,ee,re;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const sizeVars = ['xs', 'sm', 'md', 'lg', 'xl'].flatMap(s => [\`--ep-component-badge-size-\${s}-height\`, \`--ep-component-badge-size-\${s}-min-width\`, \`--ep-component-badge-size-\${s}-font-size\`, \`--ep-component-badge-size-\${s}-padding-x\`, \`--ep-component-badge-size-\${s}-dot-size\`]);
    const colorVars = ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'].flatMap(c => [\`--ep-component-badge-color-\${c}-background\`, \`--ep-component-badge-color-\${c}-text\`]);
    const allVars = ['--ep-component-badge-border-radius', ...sizeVars, ...colorVars];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <p style={{
        color: '#666',
        marginBottom: 8
      }}>
          Open DevTools → Computed to verify each var resolves (no fallback value). Total: {allVars.length} vars.
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
        gap: 16,
        marginTop: 8,
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => <Badge key={s} size={s} badgeContent={4} color="primary">
              <Avatar size={s} />
            </Badge>)}
          {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => <Badge key={c} badgeContent={1} color={c}>
              <Avatar size="md" />
            </Badge>)}
          <Badge variant="dot" color="success" overlap="circular">
            <Avatar size="md">JD</Avatar>
          </Badge>
        </div>
      </div>;
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Token Audit — all CSS custom properties the Badge component reads.",...(re=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};const pe=["Default","Sizes","Colors","DotVariant","MaxOverflow","Overlap","Accessibility","TokenAudit"];export{g as Accessibility,l as Colors,i as Default,c as DotVariant,d as MaxOverflow,p as Overlap,s as Sizes,m as TokenAudit,pe as __namedExportsOrder,de as default};

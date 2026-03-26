import{j as e}from"./jsx-runtime-BT65X5dW.js";import{b as a,T as r,c as x,I as g}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const ve={title:"Components/Surfaces/Avatar",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays an image, initials, or icon to represent a person or entity. Fallback order: src image → children → person icon. No `color` prop — single background/foreground token pair."}}},argTypes:{variant:{control:"radio",options:["circular","rounded","square"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},src:{control:"text"},alt:{control:"text"},children:{control:"text"}},args:{variant:"circular",size:"md"}},i={},o={render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:16},children:["xs","sm","md","lg","xl"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(a,{size:t}),e.jsx(r,{variant:"caption",color:"text.secondary",children:t})]},t))})},n={render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:24},children:["circular","rounded","square"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(a,{variant:t,size:"lg"}),e.jsx(r,{variant:"caption",color:"text.secondary",children:t})]},t))})},c={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(a,{size:"xl",children:"JD"}),e.jsx(a,{size:"lg",children:"AB"}),e.jsx(a,{size:"md",children:"EP"}),e.jsx(a,{size:"sm",children:"T"}),e.jsx(a,{size:"xs",children:"Z"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(a,{size:"xl",children:e.jsx(g,{name:"person",size:"xl"})}),e.jsx(a,{size:"lg",children:e.jsx(g,{name:"settings",size:"lg"})}),e.jsx(a,{size:"md",children:e.jsx(g,{name:"calendar",size:"md"})})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(a,{size:"xl",src:"https://mui.com/static/images/avatar/1.jpg",alt:"User avatar"}),e.jsx(a,{size:"lg",src:"https://mui.com/static/images/avatar/2.jpg",alt:"User avatar"}),e.jsx(a,{size:"md",src:"https://mui.com/static/images/avatar/3.jpg",alt:"User avatar"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(a,{size:"md",src:"broken-url",alt:"Broken image"}),e.jsx(r,{variant:"caption",color:"text.secondary",children:"broken src → icon"})]})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(x,{variant:"dot",color:"success",overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(a,{size:"lg",children:"JD"})}),e.jsx(x,{badgeContent:3,color:"error",overlap:"circular",anchorOrigin:{vertical:"top",horizontal:"right"},children:e.jsx(a,{size:"lg",children:e.jsx(g,{name:"person",size:"lg"})})})]})},m={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",children:"With alt (semantic image)"}),e.jsx(r,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:'Screen reader announces: "User avatar, image"'}),e.jsx(a,{size:"lg",src:"https://mui.com/static/images/avatar/1.jpg",alt:"Jane Doe"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",children:"Initials — no alt needed"}),e.jsx(r,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:"The initials text is visible and read by screen readers as text content."}),e.jsx(a,{size:"lg",children:"JD"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"overline",color:"text.secondary",children:"Icon fallback — decorative"}),e.jsx(r,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:'The injected person icon has aria-hidden="true" (EP Icon default for decorative use). Screen readers skip it; surrounding context provides meaning.'}),e.jsx(a,{size:"lg"})]})]})},v={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const t=["--ep-component-avatar-size-xs-width","--ep-component-avatar-size-xs-height","--ep-component-avatar-size-xs-font-size","--ep-component-avatar-size-sm-width","--ep-component-avatar-size-sm-height","--ep-component-avatar-size-sm-font-size","--ep-component-avatar-size-md-width","--ep-component-avatar-size-md-height","--ep-component-avatar-size-md-font-size","--ep-component-avatar-size-lg-width","--ep-component-avatar-size-lg-height","--ep-component-avatar-size-lg-font-size","--ep-component-avatar-size-xl-width","--ep-component-avatar-size-xl-height","--ep-component-avatar-size-xl-font-size","--ep-component-avatar-border-radius-circular","--ep-component-avatar-border-radius-rounded","--ep-component-avatar-border-radius-square","--ep-component-avatar-background","--ep-component-avatar-color"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsx("p",{style:{color:"#666",marginBottom:8},children:"Open DevTools → Computed to verify each var resolves (no fallback value)."}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:t.map(s=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:s}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${s})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},s))})]}),e.jsx(r,{variant:"overline",color:"text.secondary",children:"Live renders"}),e.jsxs("div",{style:{display:"flex",gap:12,marginTop:8,flexWrap:"wrap",alignItems:"center"},children:[["xs","sm","md","lg","xl"].map(s=>e.jsx(a,{size:s},s)),e.jsx(a,{size:"md",children:"JD"}),e.jsx(a,{variant:"rounded",size:"md"}),e.jsx(a,{variant:"square",size:"md"})]})]})}};var y,h,u,z,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:"Default — no image, no children → person icon fallback. Use Controls to explore.",...(f=(z=i.parameters)==null?void 0:z.docs)==null?void 0:f.description}}};var j,b,A,T,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => <div key={s} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }}>
          <Avatar size={s} />
          <Typography variant="caption" color="text.secondary">{s}</Typography>
        </div>)}
    </div>
}`,...(A=(b=o.parameters)==null?void 0:b.docs)==null?void 0:A.source},description:{story:"All five sizes side-by-side.",...(I=(T=o.parameters)==null?void 0:T.docs)==null?void 0:I.description}}};var k,D,S,B,w;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }}>
      {(['circular', 'rounded', 'square'] as const).map(v => <div key={v} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <Avatar variant={v} size="lg" />
          <Typography variant="caption" color="text.secondary">{v}</Typography>
        </div>)}
    </div>
}`,...(S=(D=n.parameters)==null?void 0:D.docs)==null?void 0:S.source},description:{story:"All three shape variants.",...(w=(B=n.parameters)==null?void 0:B.docs)==null?void 0:w.description}}};var W,C,J,U,q;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }}>
      <Avatar size="xl">JD</Avatar>
      <Avatar size="lg">AB</Avatar>
      <Avatar size="md">EP</Avatar>
      <Avatar size="sm">T</Avatar>
      <Avatar size="xs">Z</Avatar>
    </div>
}`,...(J=(C=c.parameters)==null?void 0:C.docs)==null?void 0:J.source},description:{story:"Text initials as fallback children.",...(q=(U=c.parameters)==null?void 0:U.docs)==null?void 0:q.description}}};var O,E,F,P,L;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }}>
      <Avatar size="xl"><Icon name="person" size="xl" /></Avatar>
      <Avatar size="lg"><Icon name="settings" size="lg" /></Avatar>
      <Avatar size="md"><Icon name="calendar" size="md" /></Avatar>
    </div>
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source},description:{story:"Icon as fallback children.",...(L=(P=l.parameters)==null?void 0:P.docs)==null?void 0:L.description}}};var V,Z,_,$,N;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }}>
      <Avatar size="xl" src="https://mui.com/static/images/avatar/1.jpg" alt="User avatar" />
      <Avatar size="lg" src="https://mui.com/static/images/avatar/2.jpg" alt="User avatar" />
      <Avatar size="md" src="https://mui.com/static/images/avatar/3.jpg" alt="User avatar" />
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }}>
        <Avatar size="md" src="broken-url" alt="Broken image" />
        <Typography variant="caption" color="text.secondary">broken src → icon</Typography>
      </div>
    </div>
}`,...(_=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:_.source},description:{story:"Image source — fallback shown when src is empty.",...(N=($=d.parameters)==null?void 0:$.docs)==null?void 0:N.description}}};var R,G,H,K,M;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }}>
      <Badge variant="dot" color="success" overlap="circular" anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}>
        <Avatar size="lg">JD</Avatar>
      </Badge>
      <Badge badgeContent={3} color="error" overlap="circular" anchorOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}>
        <Avatar size="lg"><Icon name="person" size="lg" /></Avatar>
      </Badge>
    </div>
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"Avatar + Badge pattern — the canonical pairing.",...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};var Q,X,Y,ee,ae;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
        <Typography variant="overline" color="text.secondary">With alt (semantic image)</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Screen reader announces: "User avatar, image"
        </Typography>
        <Avatar size="lg" src="https://mui.com/static/images/avatar/1.jpg" alt="Jane Doe" />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Initials — no alt needed</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          The initials text is visible and read by screen readers as text content.
        </Typography>
        <Avatar size="lg">JD</Avatar>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Icon fallback — decorative</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          The injected person icon has aria-hidden="true" (EP Icon default for decorative use).
          Screen readers skip it; surrounding context provides meaning.
        </Typography>
        <Avatar size="lg" />
      </div>
    </div>
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Accessibility — alt text, decorative usage, and group context.",...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var re,te,se,ie,oe;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const vars = ['--ep-component-avatar-size-xs-width', '--ep-component-avatar-size-xs-height', '--ep-component-avatar-size-xs-font-size', '--ep-component-avatar-size-sm-width', '--ep-component-avatar-size-sm-height', '--ep-component-avatar-size-sm-font-size', '--ep-component-avatar-size-md-width', '--ep-component-avatar-size-md-height', '--ep-component-avatar-size-md-font-size', '--ep-component-avatar-size-lg-width', '--ep-component-avatar-size-lg-height', '--ep-component-avatar-size-lg-font-size', '--ep-component-avatar-size-xl-width', '--ep-component-avatar-size-xl-height', '--ep-component-avatar-size-xl-font-size', '--ep-component-avatar-border-radius-circular', '--ep-component-avatar-border-radius-rounded', '--ep-component-avatar-border-radius-square', '--ep-component-avatar-background', '--ep-component-avatar-color'];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <p style={{
        color: '#666',
        marginBottom: 8
      }}>
          Open DevTools → Computed to verify each var resolves (no fallback value).
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
        gap: 12,
        marginTop: 8,
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => <Avatar key={s} size={s} />)}
          <Avatar size="md">JD</Avatar>
          <Avatar variant="rounded" size="md" />
          <Avatar variant="square" size="md" />
        </div>
      </div>;
  }
}`,...(se=(te=v.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"Token Audit — all 20 CSS custom properties the Avatar component reads.",...(oe=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:oe.description}}};const ge=["Default","Sizes","Variants","WithInitials","WithIcon","WithImage","WithBadge","Accessibility","TokenAudit"];export{m as Accessibility,i as Default,o as Sizes,v as TokenAudit,n as Variants,p as WithBadge,l as WithIcon,d as WithImage,c as WithInitials,ge as __namedExportsOrder,ve as default};

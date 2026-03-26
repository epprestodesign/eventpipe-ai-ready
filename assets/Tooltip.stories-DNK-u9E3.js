import{j as t}from"./jsx-runtime-BT65X5dW.js";import{R as at}from"./index-C6mWTJJr.js";import{ac as e,T as i,g as o,b as lt,I as st}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const xt={title:"Components/Surfaces/Tooltip",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Portal-rendered overlay that describes a trigger element on hover or focus. No `forwardRef` — the trigger's ref belongs to the caller. Styled via `componentsProps` so CSS vars resolve inside the Portal."}}},argTypes:{size:{control:"radio",options:["sm","md"]},placement:{control:"select",options:["bottom","bottom-start","bottom-end","top","top-start","top-end","left","left-start","left-end","right","right-start","right-end"]},arrow:{control:"boolean"},title:{control:"text"},enterDelay:{control:"number"},leaveDelay:{control:"number"}},args:{size:"md",placement:"bottom",arrow:!1,title:"Tooltip label",enterDelay:100,leaveDelay:0,children:at.createElement(o,{variant:"outlined"},"Hover me")}},n={},a={render:()=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:80},children:[t.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:t.jsx(e,{title:"Small tooltip",size:"sm",open:!0,children:t.jsx(o,{variant:"outlined",children:"sm"})})}),t.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,marginTop:48},children:t.jsx(e,{title:"Medium tooltip",size:"md",open:!0,children:t.jsx(o,{variant:"outlined",children:"md"})})})]})},l={render:()=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:80},children:[t.jsx(e,{title:"Arrow on bottom",arrow:!0,placement:"bottom",open:!0,children:t.jsx(o,{variant:"outlined",children:"bottom"})}),t.jsx("div",{style:{marginTop:64},children:t.jsx(e,{title:"Arrow on top",arrow:!0,placement:"top",open:!0,children:t.jsx(o,{variant:"outlined",children:"top"})})}),t.jsx(e,{title:"Arrow on right",arrow:!0,placement:"right",open:!0,children:t.jsx(o,{variant:"outlined",children:"right"})})]})},s={parameters:{layout:"padded"},render:()=>{const y=["top-start","top","top-end","left-start","right-start","left","right","left-end","right-end","bottom-start","bottom","bottom-end"];return t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:40,justifyContent:"center",padding:48},children:y.map(r=>t.jsx(e,{title:r,placement:r,arrow:!0,open:!0,children:t.jsx(o,{variant:"outlined",size:"small",sx:{minWidth:120,fontSize:11},children:r})},r))})}},p={render:()=>t.jsx(e,{title:"This tooltip contains a longer description to demonstrate how the maxWidth token constrains the content and causes line wrapping at 300px.",placement:"bottom",open:!0,children:t.jsx(o,{variant:"outlined",children:"Long tooltip"})})},d={render:()=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:32},children:[t.jsx(e,{title:"Button trigger",children:t.jsx(o,{variant:"contained",children:"Button"})}),t.jsx(e,{title:"Avatar trigger",children:t.jsx(lt,{size:"md",children:"JD"})}),t.jsx(e,{title:"Icon trigger",children:t.jsx("span",{children:t.jsx(st,{name:"info",size:"lg"})})}),t.jsx(e,{title:"Span text trigger",children:t.jsx("span",{style:{cursor:"default",textDecoration:"underline dotted"},children:"Underlined text"})})]})},c={render:()=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:80},children:[t.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:t.jsx(e,{title:"Always visible (open=true)",open:!0,children:t.jsx(o,{variant:"outlined",children:"open=true"})})}),t.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,marginTop:48},children:t.jsx(e,{title:"Never visible (open=false)",open:!1,children:t.jsx(o,{variant:"outlined",children:"open=false"})})})]})},m={parameters:{layout:"padded"},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[t.jsxs("div",{children:[t.jsx(i,{variant:"overline",color:"text.secondary",children:"Focus-triggered tooltip"}),t.jsx(i,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:'Tab to the button — the tooltip opens on focus. MUI adds role="tooltip" and aria-describedby automatically.'}),t.jsx(e,{title:"Appears on focus and hover",placement:"right",children:t.jsx(o,{variant:"outlined",children:"Tab to me"})})]}),t.jsxs("div",{children:[t.jsx(i,{variant:"overline",color:"text.secondary",children:"Hover-only (focus disabled)"}),t.jsx(i,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:"disableFocusListener removes keyboard accessibility. Only use for purely decorative tooltips."}),t.jsx(e,{title:"Mouse-hover only",disableFocusListener:!0,placement:"right",children:t.jsx(o,{variant:"outlined",children:"Hover only"})})]}),t.jsxs("div",{children:[t.jsx(i,{variant:"overline",color:"text.secondary",children:"Empty title — tooltip disabled"}),t.jsx(i,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:"Pass an empty string or null to suppress the tooltip without removing it from the tree."}),t.jsx(e,{title:"",children:t.jsx(o,{variant:"outlined",children:"No tooltip"})})]})]})},u={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const y=["--ep-component-tooltip-background","--ep-component-tooltip-color","--ep-component-tooltip-border-radius","--ep-component-tooltip-max-width","--ep-component-tooltip-arrow-size","--ep-component-tooltip-padding-sm-y","--ep-component-tooltip-padding-sm-x","--ep-component-tooltip-padding-md-y","--ep-component-tooltip-padding-md-x","--ep-component-tooltip-font-size-sm","--ep-component-tooltip-font-size-md"];return t.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[t.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves (no fallback value). Total: ",y.length," vars."]}),t.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:48},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[t.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),t.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),t.jsx("tbody",{children:y.map(r=>t.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[t.jsx("td",{style:{padding:"4px 12px 4px 0"},children:r}),t.jsx("td",{style:{padding:"4px 12px"},children:t.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${r})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},r))})]}),t.jsx(i,{variant:"overline",color:"text.secondary",children:"Live renders"}),t.jsxs("div",{style:{display:"flex",gap:80,marginTop:48,flexWrap:"wrap",alignItems:"flex-start"},children:[t.jsx(e,{title:"size sm",size:"sm",open:!0,placement:"top",children:t.jsx(o,{variant:"outlined",size:"small",children:"sm"})}),t.jsx(e,{title:"size md, no arrow",size:"md",open:!0,placement:"top",children:t.jsx(o,{variant:"outlined",children:"md"})}),t.jsx(e,{title:"with arrow",size:"md",arrow:!0,open:!0,placement:"top",children:t.jsx(o,{variant:"outlined",children:"arrow"})})]})]})}};var x,g,h,v,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"Default — hover the button to see the tooltip. Use Controls to explore.",...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var b,T,j,w,B;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 80
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Tooltip title="Small tooltip" size="sm" open>
          <Button variant="outlined">sm</Button>
        </Tooltip>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      marginTop: 48
    }}>
        <Tooltip title="Medium tooltip" size="md" open>
          <Button variant="outlined">md</Button>
        </Tooltip>
      </div>
    </div>
}`,...(j=(T=a.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:"Both sizes — sm is compact (caption), md is standard (body2).",...(B=(w=a.parameters)==null?void 0:w.docs)==null?void 0:B.description}}};var z,A,S,I,D;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 80
  }}>
      <Tooltip title="Arrow on bottom" arrow placement="bottom" open>
        <Button variant="outlined">bottom</Button>
      </Tooltip>
      <div style={{
      marginTop: 64
    }}>
        <Tooltip title="Arrow on top" arrow placement="top" open>
          <Button variant="outlined">top</Button>
        </Tooltip>
      </div>
      <Tooltip title="Arrow on right" arrow placement="right" open>
        <Button variant="outlined">right</Button>
      </Tooltip>
    </div>
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source},description:{story:"Arrow variant — pointer aimed at the trigger.",...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.description}}};var k,C,W,L,F;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const placements = ['top-start', 'top', 'top-end', 'left-start', 'right-start', 'left', 'right', 'left-end', 'right-end', 'bottom-start', 'bottom', 'bottom-end'] as const;
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40,
      justifyContent: 'center',
      padding: 48
    }}>
        {placements.map(p => <Tooltip key={p} title={p} placement={p} arrow open>
            <Button variant="outlined" size="small" sx={{
          minWidth: 120,
          fontSize: 11
        }}>
              {p}
            </Button>
          </Tooltip>)}
      </div>;
  }
}`,...(W=(C=s.parameters)==null?void 0:C.docs)==null?void 0:W.source},description:{story:"All 12 placements — force-open to show positions simultaneously.",...(F=(L=s.parameters)==null?void 0:L.docs)==null?void 0:F.description}}};var M,O,P,E,U;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Tooltip title="This tooltip contains a longer description to demonstrate how the maxWidth token constrains the content and causes line wrapping at 300px." placement="bottom" open>
      <Button variant="outlined">Long tooltip</Button>
    </Tooltip>
}`,...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source},description:{story:"Long content — wraps at maxWidth token (300px default).",...(U=(E=p.parameters)==null?void 0:E.docs)==null?void 0:U.description}}};var H,N,R,J,V;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 32
  }}>
      <Tooltip title="Button trigger">
        <Button variant="contained">Button</Button>
      </Tooltip>
      <Tooltip title="Avatar trigger">
        <Avatar size="md">JD</Avatar>
      </Tooltip>
      <Tooltip title="Icon trigger">
        <span>
          <Icon name="info" size="lg" />
        </span>
      </Tooltip>
      <Tooltip title="Span text trigger">
        <span style={{
        cursor: 'default',
        textDecoration: 'underline dotted'
      }}>
          Underlined text
        </span>
      </Tooltip>
    </div>
}`,...(R=(N=d.parameters)==null?void 0:N.docs)==null?void 0:R.source},description:{story:"Wrapping non-button elements — any single ReactElement trigger.",...(V=(J=d.parameters)==null?void 0:J.docs)==null?void 0:V.description}}};var _,$,q,G,K;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 80
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Tooltip title="Always visible (open=true)" open>
          <Button variant="outlined">open=true</Button>
        </Tooltip>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      marginTop: 48
    }}>
        <Tooltip title="Never visible (open=false)" open={false}>
          <Button variant="outlined">open=false</Button>
        </Tooltip>
      </div>
    </div>
}`,...(q=($=c.parameters)==null?void 0:$.docs)==null?void 0:q.source},description:{story:"Controlled open state — open is pinned true/false via prop.",...(K=(G=c.parameters)==null?void 0:G.docs)==null?void 0:K.description}}};var Q,X,Y,Z,tt;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
        <Typography variant="overline" color="text.secondary">Focus-triggered tooltip</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Tab to the button — the tooltip opens on focus. MUI adds role="tooltip" and
          aria-describedby automatically.
        </Typography>
        <Tooltip title="Appears on focus and hover" placement="right">
          <Button variant="outlined">Tab to me</Button>
        </Tooltip>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Hover-only (focus disabled)</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          disableFocusListener removes keyboard accessibility. Only use for purely decorative tooltips.
        </Typography>
        <Tooltip title="Mouse-hover only" disableFocusListener placement="right">
          <Button variant="outlined">Hover only</Button>
        </Tooltip>
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">Empty title — tooltip disabled</Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Pass an empty string or null to suppress the tooltip without removing it from the tree.
        </Typography>
        <Tooltip title="">
          <Button variant="outlined">No tooltip</Button>
        </Tooltip>
      </div>
    </div>
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:'Accessibility — keyboard focus triggers tooltip; role="tooltip" applied by MUI.',...(tt=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:tt.description}}};var et,ot,rt,it,nt;u.parameters={...u.parameters,docs:{...(et=u.parameters)==null?void 0:et.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const vars = ['--ep-component-tooltip-background', '--ep-component-tooltip-color', '--ep-component-tooltip-border-radius', '--ep-component-tooltip-max-width', '--ep-component-tooltip-arrow-size', '--ep-component-tooltip-padding-sm-y', '--ep-component-tooltip-padding-sm-x', '--ep-component-tooltip-padding-md-y', '--ep-component-tooltip-padding-md-x', '--ep-component-tooltip-font-size-sm', '--ep-component-tooltip-font-size-md'];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <p style={{
        color: '#666',
        marginBottom: 8
      }}>
          Open DevTools → Computed to verify each var resolves (no fallback value). Total: {vars.length} vars.
        </p>
        <table style={{
        borderCollapse: 'collapse',
        marginBottom: 48
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
        gap: 80,
        marginTop: 48,
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      }}>
          <Tooltip title="size sm" size="sm" open placement="top">
            <Button variant="outlined" size="small">sm</Button>
          </Tooltip>
          <Tooltip title="size md, no arrow" size="md" open placement="top">
            <Button variant="outlined">md</Button>
          </Tooltip>
          <Tooltip title="with arrow" size="md" arrow open placement="top">
            <Button variant="outlined">arrow</Button>
          </Tooltip>
        </div>
      </div>;
  }
}`,...(rt=(ot=u.parameters)==null?void 0:ot.docs)==null?void 0:rt.source},description:{story:"Token Audit — all CSS custom properties the Tooltip component reads.",...(nt=(it=u.parameters)==null?void 0:it.docs)==null?void 0:nt.description}}};const gt=["Default","Sizes","WithArrow","Placements","LongContent","VariousTriggers","ControlledOpen","Accessibility","TokenAudit"];export{m as Accessibility,c as ControlledOpen,n as Default,p as LongContent,s as Placements,a as Sizes,u as TokenAudit,d as VariousTriggers,l as WithArrow,gt as __namedExportsOrder,xt as default};

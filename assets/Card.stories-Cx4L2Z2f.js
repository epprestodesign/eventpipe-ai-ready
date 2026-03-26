import{j as e}from"./jsx-runtime-BT65X5dW.js";import{l as a,T as t,m as o,n as d,B as n,I as b,o as i,p as g,q as me,D as f,A as C}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const be={title:"Components/Surfaces/Card",component:a,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["elevated","outlined","filled"],description:"Visual surface style.",table:{defaultValue:{summary:"elevated"}}},interactive:{control:"boolean",description:'Enables hover/focus/click behavior. Adds role="button" and tabIndex=0.',table:{defaultValue:{summary:"false"}}},onClick:{action:"clicked"}},args:{variant:"elevated",interactive:!1}},c={render:r=>e.jsxs(a,{...r,sx:{maxWidth:400},children:[e.jsx(d,{title:"Default Card",subheader:"Subheader text"}),e.jsx(o,{children:e.jsx(t,{variant:"body2",color:"text.secondary",children:"Card body content goes here. This is the primary content area."})}),e.jsxs(i,{children:[e.jsx(n,{variant:"contained",size:"sm",children:"Action"}),e.jsx(n,{variant:"outlined",size:"sm",children:"Cancel"})]})]})},l={render:()=>e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap",alignItems:"flex-start"},children:["elevated","outlined","filled"].map(r=>e.jsxs(a,{variant:r,sx:{width:260},children:[e.jsx(d,{title:r.charAt(0).toUpperCase()+r.slice(1),subheader:"Card variant"}),e.jsx(o,{children:e.jsxs(t,{variant:"body2",color:"text.secondary",children:["Surface: ",r==="filled"?"neutral bg":"white",r==="elevated"?", drop shadow":"",r==="outlined"?", 1px border":""]})}),e.jsx(i,{children:e.jsx(n,{variant:"contained",size:"sm",children:"Action"})})]},r))})},p={render:()=>e.jsxs(a,{sx:{maxWidth:480},children:[e.jsx(d,{title:"EventPipe Conference 2026",subheader:"March 24–26 · San Francisco, CA",avatar:e.jsx(me,{sx:{bgcolor:"var(--ep-component-card-focus-ring-color)",width:40,height:40},children:"E"}),action:e.jsx("button",{"aria-label":"More options",style:{background:"none",border:"none",cursor:"pointer",padding:4},children:e.jsx(b,{name:"settings",size:"md"})})}),e.jsx(f,{sx:{borderColor:"var(--ep-component-card-divider-color)"}}),e.jsxs(o,{children:[e.jsx(t,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:"Join 2,000+ event professionals for three days of workshops, talks, and networking."}),e.jsx(C,{severity:"info",size:"sm",sx:{mt:1},children:"Early registration ends April 1st."})]}),e.jsx(f,{sx:{borderColor:"var(--ep-component-card-divider-color)"}}),e.jsxs(i,{children:[e.jsx(n,{variant:"contained",children:"Register now"}),e.jsx(n,{variant:"outlined",children:"Learn more"})]})]})},h={render:()=>e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:["elevated","outlined","filled"].map(r=>e.jsx(a,{variant:r,interactive:!0,onClick:()=>alert(`Clicked: ${r}`),sx:{width:220},children:e.jsxs(o,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:[r.charAt(0).toUpperCase()+r.slice(1)," Interactive"]}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Click or press Enter/Space to activate."})]})},r))})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap",alignItems:"flex-start"},children:[e.jsxs(a,{variant:"outlined",sx:{width:360},children:[e.jsx(d,{title:"Register for event",subheader:"Fill in your details below"}),e.jsx(o,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(g,{label:"Full name",fullWidth:!0}),e.jsx(g,{label:"Email address",type:"email",fullWidth:!0})]})}),e.jsx(i,{children:e.jsx(n,{variant:"contained",fullWidth:!0,children:"Submit registration"})})]}),e.jsxs(a,{variant:"elevated",sx:{width:360},children:[e.jsx(d,{title:"Quick search"}),e.jsx(o,{children:e.jsx(g,{label:"Search events",placeholder:"Type to search...",fullWidth:!0,startAdornment:e.jsx(b,{name:"search",size:"sm"})})}),e.jsxs(i,{children:[e.jsx(n,{variant:"contained",size:"sm",children:"Search"}),e.jsx(n,{variant:"text",size:"sm",children:"Clear"})]})]})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:420},children:[e.jsxs(a,{variant:"outlined",children:[e.jsx(d,{title:"Payment status",subheader:"Invoice #2026-0324"}),e.jsx(o,{children:e.jsx(C,{severity:"success",children:"Payment confirmed — $299.00 received."})})]}),e.jsxs(a,{variant:"outlined",children:[e.jsx(d,{title:"Event check-in",subheader:"Workshop: Design Systems"}),e.jsx(o,{children:e.jsx(C,{severity:"warning",children:"Check-in closes in 15 minutes."})}),e.jsx(i,{children:e.jsx(n,{variant:"contained",color:"warning",children:"Check in now"})})]}),e.jsxs(a,{variant:"outlined",children:[e.jsx(d,{title:"Schedule conflict"}),e.jsx(o,{children:e.jsx(C,{severity:"error",children:"Two sessions overlap at 2:00 PM on March 25."})}),e.jsx(i,{children:e.jsx(n,{variant:"outlined",color:"error",children:"Resolve conflict"})})]})]})},x={render:()=>e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:["elevated","outlined","filled"].map(r=>e.jsxs(a,{variant:r,sx:{p:3,width:200},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:r.charAt(0).toUpperCase()+r.slice(1)}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Direct children, no sub-components."})]},r))})},u={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:'Interactive card (role="button")'}),e.jsx(a,{variant:"elevated",interactive:!0,onClick:()=>alert("Navigating to event detail"),sx:{maxWidth:340,mt:1},"aria-label":"Summer Tech Summit — click to view details",children:e.jsxs(o,{children:[e.jsx(t,{variant:"subtitle2",children:"Summer Tech Summit"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:'Tab to this card and press Enter or Space. Screen reader announces role="button".'})]})})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"Static card (no role)"}),e.jsxs(a,{variant:"outlined",sx:{maxWidth:340,mt:1},children:[e.jsx(d,{title:"Attendee record",subheader:"ID: EP-20260324",action:e.jsx(n,{variant:"text",size:"sm","aria-label":"Edit attendee record",children:e.jsx(b,{name:"edit",size:"sm"})})}),e.jsx(o,{children:e.jsx(t,{variant:"body2",color:"text.secondary",children:"This card is a static container. The edit button has its own accessible name."})})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"disablePadding slots"}),e.jsxs(a,{variant:"elevated",sx:{maxWidth:340,mt:1},children:[e.jsx(d,{title:"Flush header",disablePadding:!0}),e.jsx(o,{disablePadding:!0,children:e.jsx("div",{style:{background:"#F3F4F6",padding:"16px 24px"},children:"Custom flush content — padding controlled by child, not CardContent."})})]})]})]})},y={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const r=["--ep-component-card-border-radius","--ep-component-card-border-width","--ep-component-card-background-elevated","--ep-component-card-background-outlined","--ep-component-card-background-filled","--ep-component-card-border-elevated","--ep-component-card-border-outlined","--ep-component-card-border-filled","--ep-component-card-shadow","--ep-component-card-shadow-hover","--ep-component-card-hover-background","--ep-component-card-header-title-color","--ep-component-card-header-subheader-color","--ep-component-card-header-padding-y","--ep-component-card-header-padding-x","--ep-component-card-header-gap","--ep-component-card-content-color","--ep-component-card-content-padding-y","--ep-component-card-content-padding-x","--ep-component-card-footer-padding-y","--ep-component-card-footer-padding-x","--ep-component-card-footer-gap","--ep-component-card-divider-color","--ep-component-card-focus-ring-color","--ep-component-card-focus-ring-width","--ep-component-card-focus-ring-offset"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsx("p",{style:{color:"#666",marginBottom:8},children:"Open DevTools → Computed to verify each var resolves (no fallback value)."}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:r.map(s=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:s}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${s})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},s))})]}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[["elevated","outlined","filled"].map(s=>e.jsxs(a,{variant:s,sx:{width:200},children:[e.jsx(d,{title:s,subheader:"Token audit"}),e.jsx(o,{children:e.jsx(t,{variant:"body2",children:"Live preview"})}),e.jsx(i,{children:e.jsx(n,{variant:"contained",size:"sm",children:"Action"})})]},s)),e.jsx(a,{variant:"elevated",interactive:!0,onClick:()=>{},sx:{width:200},children:e.jsxs(o,{children:[e.jsx(t,{variant:"subtitle2",children:"Interactive"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Hover + focus ring"})]})})]})]})}};var j,w,T,k,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args: CardProps) => <Card {...args} sx={{
    maxWidth: 400
  }}>
      <CardHeader title="Default Card" subheader="Subheader text" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Card body content goes here. This is the primary content area.
        </Typography>
      </CardContent>
      <CardFooter>
        <Button variant="contained" size="sm">Action</Button>
        <Button variant="outlined" size="sm">Cancel</Button>
      </CardFooter>
    </Card>
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:"Use Controls to explore variant and interactive props.",...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.description}}};var A,F,B,W,D;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      {(['elevated', 'outlined', 'filled'] as const).map(v => <Card key={v} variant={v} sx={{
      width: 260
    }}>
          <CardHeader title={v.charAt(0).toUpperCase() + v.slice(1)} subheader="Card variant" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Surface: {v === 'filled' ? 'neutral bg' : 'white'}
              {v === 'elevated' ? ', drop shadow' : ''}
              {v === 'outlined' ? ', 1px border' : ''}
            </Typography>
          </CardContent>
          <CardFooter>
            <Button variant="contained" size="sm">Action</Button>
          </CardFooter>
        </Card>)}
    </div>
}`,...(B=(F=l.parameters)==null?void 0:F.docs)==null?void 0:B.source},description:{story:"All three surface variants side by side.",...(D=(W=l.parameters)==null?void 0:W.docs)==null?void 0:D.description}}};var z,I,E,P,H;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 480
  }}>
      <CardHeader title="EventPipe Conference 2026" subheader="March 24–26 · San Francisco, CA" avatar={<Avatar sx={{
      bgcolor: 'var(--ep-component-card-focus-ring-color)',
      width: 40,
      height: 40
    }}>
            E
          </Avatar>} action={<button aria-label="More options" style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4
    }}>
            <Icon name="settings" size="md" />
          </button>} />
      <Divider sx={{
      borderColor: 'var(--ep-component-card-divider-color)'
    }} />
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Join 2,000+ event professionals for three days of workshops, talks, and networking.
        </Typography>
        <Alert severity="info" size="sm" sx={{
        mt: 1
      }}>
          Early registration ends April 1st.
        </Alert>
      </CardContent>
      <Divider sx={{
      borderColor: 'var(--ep-component-card-divider-color)'
    }} />
      <CardFooter>
        <Button variant="contained">Register now</Button>
        <Button variant="outlined">Learn more</Button>
      </CardFooter>
    </Card>
}`,...(E=(I=p.parameters)==null?void 0:I.docs)==null?void 0:E.source},description:{story:"Card with the full header/content/footer composition.",...(H=(P=p.parameters)==null?void 0:P.docs)==null?void 0:H.description}}};var M,R,U,$,V;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      {(['elevated', 'outlined', 'filled'] as const).map(v => <Card key={v} variant={v} interactive onClick={() => alert(\`Clicked: \${v}\`)} sx={{
      width: 220
    }}>
          <CardContent>
            <Typography variant="subtitle2" gutterBottom>
              {v.charAt(0).toUpperCase() + v.slice(1)} Interactive
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click or press Enter/Space to activate.
            </Typography>
          </CardContent>
        </Card>)}
    </div>
}`,...(U=(R=h.parameters)==null?void 0:R.docs)==null?void 0:U.source},description:{story:"Interactive cards — all variants with click and keyboard support.",...(V=($=h.parameters)==null?void 0:$.docs)==null?void 0:V.description}}};var L,O,N,J,Q;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      <Card variant="outlined" sx={{
      width: 360
    }}>
        <CardHeader title="Register for event" subheader="Fill in your details below" />
        <CardContent>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            <TextField label="Full name" fullWidth />
            <TextField label="Email address" type="email" fullWidth />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="contained" fullWidth>Submit registration</Button>
        </CardFooter>
      </Card>

      <Card variant="elevated" sx={{
      width: 360
    }}>
        <CardHeader title="Quick search" />
        <CardContent>
          <TextField label="Search events" placeholder="Type to search..." fullWidth startAdornment={<Icon name="search" size="sm" />} />
        </CardContent>
        <CardFooter>
          <Button variant="contained" size="sm">Search</Button>
          <Button variant="text" size="sm">Clear</Button>
        </CardFooter>
      </Card>
    </div>
}`,...(N=(O=m.parameters)==null?void 0:O.docs)==null?void 0:N.source},description:{story:"Cards containing form controls — non-interactive container usage.",...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var _,q,G,K,X;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 420
  }}>
      <Card variant="outlined">
        <CardHeader title="Payment status" subheader="Invoice #2026-0324" />
        <CardContent>
          <Alert severity="success">Payment confirmed — $299.00 received.</Alert>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardHeader title="Event check-in" subheader="Workshop: Design Systems" />
        <CardContent>
          <Alert severity="warning">Check-in closes in 15 minutes.</Alert>
        </CardContent>
        <CardFooter>
          <Button variant="contained" color="warning">Check in now</Button>
        </CardFooter>
      </Card>

      <Card variant="outlined">
        <CardHeader title="Schedule conflict" />
        <CardContent>
          <Alert severity="error">Two sessions overlap at 2:00 PM on March 25.</Alert>
        </CardContent>
        <CardFooter>
          <Button variant="outlined" color="error">Resolve conflict</Button>
        </CardFooter>
      </Card>
    </div>
}`,...(G=(q=v.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"Cards with status alerts — common pattern for event status displays.",...(X=(K=v.parameters)==null?void 0:K.docs)==null?void 0:X.description}}};var Y,Z,ee,re,te;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      {(['elevated', 'outlined', 'filled'] as const).map(v => <Card key={v} variant={v} sx={{
      p: 3,
      width: 200
    }}>
          <Typography variant="h6" gutterBottom>
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Direct children, no sub-components.
          </Typography>
        </Card>)}
    </div>
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"No sub-components — Card as a bare surface container.",...(te=(re=x.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var ae,oe,ne,de,ie;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
        <Typography variant="overline" color="text.secondary">Interactive card (role="button")</Typography>
        <Card variant="elevated" interactive onClick={() => alert('Navigating to event detail')} sx={{
        maxWidth: 340,
        mt: 1
      }} aria-label="Summer Tech Summit — click to view details">
          <CardContent>
            <Typography variant="subtitle2">Summer Tech Summit</Typography>
            <Typography variant="body2" color="text.secondary">
              Tab to this card and press Enter or Space. Screen reader announces role="button".
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">Static card (no role)</Typography>
        <Card variant="outlined" sx={{
        maxWidth: 340,
        mt: 1
      }}>
          <CardHeader title="Attendee record" subheader="ID: EP-20260324" action={<Button variant="text" size="sm" aria-label="Edit attendee record">
                <Icon name="edit" size="sm" />
              </Button>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This card is a static container. The edit button has its own accessible name.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">disablePadding slots</Typography>
        <Card variant="elevated" sx={{
        maxWidth: 340,
        mt: 1
      }}>
          <CardHeader title="Flush header" disablePadding />
          <CardContent disablePadding>
            <div style={{
            background: '#F3F4F6',
            padding: '16px 24px'
          }}>
              Custom flush content — padding controlled by child, not CardContent.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
}`,...(ne=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:ne.source},description:{story:"Accessibility patterns — interactive vs static, ARIA, keyboard navigation.",...(ie=(de=u.parameters)==null?void 0:de.docs)==null?void 0:ie.description}}};var se,ce,le,pe,he;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const vars = ['--ep-component-card-border-radius', '--ep-component-card-border-width', '--ep-component-card-background-elevated', '--ep-component-card-background-outlined', '--ep-component-card-background-filled', '--ep-component-card-border-elevated', '--ep-component-card-border-outlined', '--ep-component-card-border-filled', '--ep-component-card-shadow', '--ep-component-card-shadow-hover', '--ep-component-card-hover-background', '--ep-component-card-header-title-color', '--ep-component-card-header-subheader-color', '--ep-component-card-header-padding-y', '--ep-component-card-header-padding-x', '--ep-component-card-header-gap', '--ep-component-card-content-color', '--ep-component-card-content-padding-y', '--ep-component-card-content-padding-x', '--ep-component-card-footer-padding-y', '--ep-component-card-footer-padding-x', '--ep-component-card-footer-gap', '--ep-component-card-divider-color', '--ep-component-card-focus-ring-color', '--ep-component-card-focus-ring-width', '--ep-component-card-focus-ring-offset'];
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

        <div style={{
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap'
      }}>
          {(['elevated', 'outlined', 'filled'] as const).map(v => <Card key={v} variant={v} sx={{
          width: 200
        }}>
              <CardHeader title={v} subheader="Token audit" />
              <CardContent>
                <Typography variant="body2">Live preview</Typography>
              </CardContent>
              <CardFooter>
                <Button variant="contained" size="sm">Action</Button>
              </CardFooter>
            </Card>)}
          <Card variant="elevated" interactive onClick={() => {}} sx={{
          width: 200
        }}>
            <CardContent>
              <Typography variant="subtitle2">Interactive</Typography>
              <Typography variant="body2" color="text.secondary">Hover + focus ring</Typography>
            </CardContent>
          </Card>
        </div>
      </div>;
  }
}`,...(le=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:le.source},description:{story:`Token Audit — all 26 CSS custom properties the Card component reads.
Open DevTools → Computed tab to verify each var resolves correctly.`,...(he=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:he.description}}};const fe=["Default","Variants","WithHeaderContentFooter","Interactive","WithFormContent","WithStatusContent","BareCard","Accessibility","TokenAudit"];export{u as Accessibility,x as BareCard,c as Default,h as Interactive,y as TokenAudit,l as Variants,m as WithFormContent,p as WithHeaderContentFooter,v as WithStatusContent,fe as __namedExportsOrder,be as default};

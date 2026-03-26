import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as ee}from"./index-C6mWTJJr.js";import{i as a,j as r,k as s}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const ne={title:"Components/Navigation/Breadcrumbs",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'Hierarchical navigation trail. Wraps children in <nav aria-label="breadcrumb"><ol> per ARIA landmark spec. Last child is BreadcrumbItem (non-interactive, aria-current="page"). Preceding children are BreadcrumbLink (interactive). Default separator: chevron-right icon from EP icon system. Spec: docs/specs/components/breadcrumbs.md'}}},argTypes:{maxItems:{control:"number"},itemsBeforeCollapse:{control:"number"},itemsAfterCollapse:{control:"number"},"aria-label":{control:"text"}}},t={render:()=>e.jsxs(a,{"aria-label":"breadcrumb",children:[e.jsx(r,{href:"/home",children:"Home"}),e.jsx(r,{href:"/events",children:"Events"}),e.jsx(s,{children:"Summer Gala 2026"})]})},n={name:"Two Levels",render:()=>e.jsxs(a,{"aria-label":"breadcrumb",children:[e.jsx(r,{href:"/dashboard",children:"Dashboard"}),e.jsx(s,{children:"Settings"})]})},i={name:"Four Levels",render:()=>e.jsxs(a,{"aria-label":"breadcrumb",children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/org",children:"Organization"}),e.jsx(r,{href:"/org/events",children:"Events"}),e.jsx(s,{children:"Annual Gala 2026"})]})},d={name:"Collapsed (maxItems=3)",render:()=>e.jsxs(a,{"aria-label":"breadcrumb",maxItems:3,itemsBeforeCollapse:1,itemsAfterCollapse:1,children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/org",children:"Organization"}),e.jsx(r,{href:"/org/events",children:"Events"}),e.jsx(r,{href:"/org/events/2026",children:"2026 Season"}),e.jsx(r,{href:"/org/events/2026/gala",children:"Gala"}),e.jsx(s,{children:"Ticket Sales"})]})},m={name:"onClick Handler",render:()=>{const[c,o]=ee.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs(a,{"aria-label":"breadcrumb",children:[e.jsx(r,{onClick:()=>o("Home"),children:"Home"}),e.jsx(r,{onClick:()=>o("Events"),children:"Events"}),e.jsx(s,{children:"Summer Gala 2026"})]}),c&&e.jsxs("p",{style:{fontFamily:"monospace",fontSize:12,color:"#666",margin:0},children:["Clicked: ",c]})]})}},l={name:"Custom Separator",render:()=>e.jsxs(a,{"aria-label":"breadcrumb",separator:"/",children:[e.jsx(r,{href:"/home",children:"Home"}),e.jsx(r,{href:"/events",children:"Events"}),e.jsx(s,{children:"Summer Gala 2026"})]})},p={name:"Accessibility",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,fontFamily:"sans-serif"},children:[e.jsxs("p",{style:{fontSize:13,color:"#666",margin:0},children:["MUI wraps children in ",e.jsx("code",{children:'<nav aria-label="breadcrumb"><ol>'})," automatically.",e.jsx("br",{}),"Last crumb (",e.jsx("code",{children:"BreadcrumbItem"}),") carries ",e.jsx("code",{children:'aria-current="page"'}),".",e.jsx("br",{}),"Link crumbs (",e.jsx("code",{children:"BreadcrumbLink"}),") are keyboard-focusable with the EP focus ring."]}),e.jsxs(a,{"aria-label":"breadcrumb",children:[e.jsx(r,{href:"/home",children:"Home"}),e.jsx(r,{href:"/events",children:"Events"}),e.jsx(s,{children:"Summer Gala 2026"})]})]})},u={name:"Token Audit (DevTools)",render:()=>{const c=["--ep-component-breadcrumbs-item-color","--ep-component-breadcrumbs-item-color-active","--ep-component-breadcrumbs-item-color-hover","--ep-component-breadcrumbs-item-font-size","--ep-component-breadcrumbs-separator-color","--ep-component-breadcrumbs-separator-gap","--ep-component-breadcrumbs-focus-ring-color","--ep-component-breadcrumbs-focus-ring-width","--ep-component-breadcrumbs-focus-ring-offset"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",c.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:c.map(o=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:o}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${o})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},o))})]}),e.jsxs(a,{"aria-label":"breadcrumb",children:[e.jsx(r,{href:"/home",children:"Home"}),e.jsx(r,{href:"/events",children:"Events"}),e.jsx(s,{children:"Summer Gala 2026"})]})]})}};var b,h,x,f,B;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Breadcrumbs aria-label="breadcrumb">
      <BreadcrumbLink href="/home">Home</BreadcrumbLink>
      <BreadcrumbLink href="/events">Events</BreadcrumbLink>
      <BreadcrumbItem>Summer Gala 2026</BreadcrumbItem>
    </Breadcrumbs>
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Default — three-level hierarchy with links and current page.",...(B=(f=t.parameters)==null?void 0:f.docs)==null?void 0:B.description}}};var g,v,k,y,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Two Levels',
  render: () => <Breadcrumbs aria-label="breadcrumb">
      <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
      <BreadcrumbItem>Settings</BreadcrumbItem>
    </Breadcrumbs>
}`,...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.source},description:{story:"Two levels — minimal hierarchy: one link + current page.",...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.description}}};var L,S,C,I,A;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Four Levels',
  render: () => <Breadcrumbs aria-label="breadcrumb">
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
      <BreadcrumbLink href="/org">Organization</BreadcrumbLink>
      <BreadcrumbLink href="/org/events">Events</BreadcrumbLink>
      <BreadcrumbItem>Annual Gala 2026</BreadcrumbItem>
    </Breadcrumbs>
}`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source},description:{story:"Four levels — deeper hierarchy.",...(A=(I=i.parameters)==null?void 0:I.docs)==null?void 0:A.description}}};var E,H,T,w,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Collapsed (maxItems=3)',
  render: () => <Breadcrumbs aria-label="breadcrumb" maxItems={3} itemsBeforeCollapse={1} itemsAfterCollapse={1}>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
      <BreadcrumbLink href="/org">Organization</BreadcrumbLink>
      <BreadcrumbLink href="/org/events">Events</BreadcrumbLink>
      <BreadcrumbLink href="/org/events/2026">2026 Season</BreadcrumbLink>
      <BreadcrumbLink href="/org/events/2026/gala">Gala</BreadcrumbLink>
      <BreadcrumbItem>Ticket Sales</BreadcrumbItem>
    </Breadcrumbs>
}`,...(T=(H=d.parameters)==null?void 0:H.docs)==null?void 0:T.source},description:{story:"Collapsed — maxItems triggers ellipsis when list is long.",...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.description}}};var G,z,F,O,R;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'onClick Handler',
  render: () => {
    const [clicked, setClicked] = React.useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <Breadcrumbs aria-label="breadcrumb">
          <BreadcrumbLink onClick={() => setClicked('Home')}>Home</BreadcrumbLink>
          <BreadcrumbLink onClick={() => setClicked('Events')}>Events</BreadcrumbLink>
          <BreadcrumbItem>Summer Gala 2026</BreadcrumbItem>
        </Breadcrumbs>
        {clicked && <p style={{
        fontFamily: 'monospace',
        fontSize: 12,
        color: '#666',
        margin: 0
      }}>
            Clicked: {clicked}
          </p>}
      </div>;
  }
}`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source},description:{story:"onClick handler — link crumb using onClick instead of href.",...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var P,W,M,U,_;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Custom Separator',
  render: () => <Breadcrumbs aria-label="breadcrumb" separator="/">
      <BreadcrumbLink href="/home">Home</BreadcrumbLink>
      <BreadcrumbLink href="/events">Events</BreadcrumbLink>
      <BreadcrumbItem>Summer Gala 2026</BreadcrumbItem>
    </Breadcrumbs>
}`,...(M=(W=l.parameters)==null?void 0:W.docs)==null?void 0:M.source},description:{story:"Custom separator — override the default chevron-right.",...(_=(U=l.parameters)==null?void 0:U.docs)==null?void 0:_.description}}};var $,N,q,J,K;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Accessibility',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    fontFamily: 'sans-serif'
  }}>
      <p style={{
      fontSize: 13,
      color: '#666',
      margin: 0
    }}>
        MUI wraps children in <code>&lt;nav aria-label="breadcrumb"&gt;&lt;ol&gt;</code> automatically.<br />
        Last crumb (<code>BreadcrumbItem</code>) carries <code>aria-current="page"</code>.<br />
        Link crumbs (<code>BreadcrumbLink</code>) are keyboard-focusable with the EP focus ring.
      </p>
      <Breadcrumbs aria-label="breadcrumb">
        <BreadcrumbLink href="/home">Home</BreadcrumbLink>
        <BreadcrumbLink href="/events">Events</BreadcrumbLink>
        <BreadcrumbItem>Summer Gala 2026</BreadcrumbItem>
      </Breadcrumbs>
    </div>
}`,...(q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:q.source},description:{story:"Accessibility — ARIA landmark structure and keyboard navigation.",...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,V,X,Y,Z;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  render: () => {
    const vars = ['--ep-component-breadcrumbs-item-color', '--ep-component-breadcrumbs-item-color-active', '--ep-component-breadcrumbs-item-color-hover', '--ep-component-breadcrumbs-item-font-size', '--ep-component-breadcrumbs-separator-color', '--ep-component-breadcrumbs-separator-gap', '--ep-component-breadcrumbs-focus-ring-color', '--ep-component-breadcrumbs-focus-ring-width', '--ep-component-breadcrumbs-focus-ring-offset'];
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
        <Breadcrumbs aria-label="breadcrumb">
          <BreadcrumbLink href="/home">Home</BreadcrumbLink>
          <BreadcrumbLink href="/events">Events</BreadcrumbLink>
          <BreadcrumbItem>Summer Gala 2026</BreadcrumbItem>
        </Breadcrumbs>
      </div>;
  }
}`,...(X=(V=u.parameters)==null?void 0:V.docs)==null?void 0:X.source},description:{story:"Token Audit — all CSS custom properties the Breadcrumbs component reads.",...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};const ie=["Default","TwoLevels","FourLevels","Collapsed","WithClickHandler","CustomSeparator","Accessibility","TokenAudit"];export{p as Accessibility,d as Collapsed,l as CustomSeparator,t as Default,i as FourLevels,u as TokenAudit,n as TwoLevels,m as WithClickHandler,ie as __namedExportsOrder,ne as default};

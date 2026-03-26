import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as se}from"./index-C6mWTJJr.js";import{X as n}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const me={title:"Components/Navigation/Link",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Inline typographic link element. Renders as <a> by default. Color variants: primary (brand.primary), secondary (brand.secondary), inherit (parent). Underline: hover (default), always, none. EP focus ring on :focus-visible. Spec: docs/specs/components/link.md"}}},argTypes:{color:{control:"radio",options:["primary","secondary","inherit"]},underline:{control:"radio",options:["hover","always","none"]},variant:{control:"select",options:["body1","body2","caption","subtitle1","subtitle2","h6"]}},args:{children:"Browse events",color:"primary",underline:"hover"}},i={args:{href:"/events"}},s={name:"Color Variants",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(n,{href:"#",color:"primary",children:"Primary link"})," ",e.jsx("span",{style:{fontSize:12,color:"#666"},children:"— brand.primary"})]}),e.jsxs("div",{children:[e.jsx(n,{href:"#",color:"secondary",children:"Secondary link"})," ",e.jsx("span",{style:{fontSize:12,color:"#666"},children:"— brand.secondary"})]}),e.jsxs("div",{style:{color:"#4B5563"},children:[e.jsx(n,{href:"#",color:"inherit",children:"Inherit link"})," ",e.jsx("span",{style:{fontSize:12,color:"#666"},children:"— inherits parent color (#4B5563)"})]})]})},t={name:"Underline Variants",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(n,{href:"#",underline:"hover",children:"Underline on hover"})," ",e.jsx("span",{style:{fontSize:12,color:"#666"},children:"— default"})]}),e.jsx("div",{children:e.jsx(n,{href:"#",underline:"always",children:"Always underlined"})}),e.jsx("div",{children:e.jsx(n,{href:"#",underline:"none",children:"No underline"})})]})},a={name:"Typography Scale",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,fontFamily:"sans-serif"},children:["h6","subtitle1","body1","body2","caption"].map(r=>e.jsx("div",{children:e.jsxs(n,{href:"#",variant:r,children:[r," — Browse events"]})},r))})},l={name:"External Link",render:()=>e.jsxs("p",{style:{fontFamily:"sans-serif",fontSize:14},children:["Visit our"," ",e.jsx(n,{href:"https://example.com",target:"_blank",rel:"noopener noreferrer",children:"external documentation"})," ","for more details."]})},d={name:"Inline in Text",render:()=>e.jsxs("p",{style:{fontFamily:"sans-serif",fontSize:14,lineHeight:1.6,maxWidth:480},children:["EventPipe helps you manage"," ",e.jsx(n,{href:"/events",children:"events"}),","," ",e.jsx(n,{href:"/venues",children:"venues"}),", and"," ",e.jsx(n,{href:"/attendees",children:"attendees"})," ","all in one place. Get started with our"," ",e.jsx(n,{href:"/docs",underline:"always",children:"documentation"}),"."]})},c={name:"onClick Handler",render:()=>{const[r,o]=se.useState(0);return e.jsxs("div",{style:{fontFamily:"sans-serif",fontSize:14},children:[e.jsx(n,{onClick:()=>o(ie=>ie+1),children:"Click me"}),r>0&&e.jsxs("span",{style:{marginLeft:8,color:"#666",fontSize:12},children:["Clicked ",r," time",r!==1?"s":""]})]})}},p={name:"Accessibility",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,fontFamily:"sans-serif"},children:[e.jsxs("p",{style:{fontSize:13,color:"#666",margin:0},children:["Tab to focus each link — EP focus ring appears on ",e.jsx("code",{children:":focus-visible"}),".",e.jsx("br",{}),"Links render as ",e.jsx("code",{children:"<a>"})," elements and are natively keyboard-accessible."]}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(n,{href:"#",children:"Primary"}),e.jsx(n,{href:"#",color:"secondary",children:"Secondary"}),e.jsx(n,{href:"#",underline:"none",children:"No underline"})]})]})},m={name:"Token Audit (DevTools)",render:()=>{const r=["--ep-component-link-color","--ep-component-link-color-hover","--ep-component-link-color-visited","--ep-component-link-color-secondary","--ep-component-link-color-secondary-hover","--ep-component-link-focus-ring-color","--ep-component-link-focus-ring-width","--ep-component-link-focus-ring-offset"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",r.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:r.map(o=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:o}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${o})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},o))})]}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(n,{href:"#",children:"Primary link"}),e.jsx(n,{href:"#",color:"secondary",children:"Secondary link"}),e.jsx(n,{href:"#",color:"inherit",children:"Inherit link"})]})]})}};var y,h,f,u,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    href: '/events'
  }
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:"Default — primary color, hover underline.",...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};var v,k,g,j,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Color Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    fontFamily: 'sans-serif'
  }}>
      <div>
        <Link href="#" color="primary">Primary link</Link>
        {' '}<span style={{
        fontSize: 12,
        color: '#666'
      }}>— brand.primary</span>
      </div>
      <div>
        <Link href="#" color="secondary">Secondary link</Link>
        {' '}<span style={{
        fontSize: 12,
        color: '#666'
      }}>— brand.secondary</span>
      </div>
      <div style={{
      color: '#4B5563'
    }}>
        <Link href="#" color="inherit">Inherit link</Link>
        {' '}<span style={{
        fontSize: 12,
        color: '#666'
      }}>— inherits parent color (#4B5563)</span>
      </div>
    </div>
}`,...(g=(k=s.parameters)==null?void 0:k.docs)==null?void 0:g.source},description:{story:"Color variants — primary, secondary, inherit.",...(b=(j=s.parameters)==null?void 0:j.docs)==null?void 0:b.description}}};var S,L,C,w,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Underline Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    fontFamily: 'sans-serif'
  }}>
      <div>
        <Link href="#" underline="hover">Underline on hover</Link>
        {' '}<span style={{
        fontSize: 12,
        color: '#666'
      }}>— default</span>
      </div>
      <div>
        <Link href="#" underline="always">Always underlined</Link>
      </div>
      <div>
        <Link href="#" underline="none">No underline</Link>
      </div>
    </div>
}`,...(C=(L=t.parameters)==null?void 0:L.docs)==null?void 0:C.source},description:{story:"Underline variants — hover (default), always, none.",...(T=(w=t.parameters)==null?void 0:w.docs)==null?void 0:T.description}}};var z,A,F,B,D;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Typography Scale',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontFamily: 'sans-serif'
  }}>
      {(['h6', 'subtitle1', 'body1', 'body2', 'caption'] as const).map(v => <div key={v}>
          <Link href="#" variant={v}>{v} — Browse events</Link>
        </div>)}
    </div>
}`,...(F=(A=a.parameters)==null?void 0:A.docs)==null?void 0:F.source},description:{story:"Typography variants — link inherits typography scale.",...(D=(B=a.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var E,P,I,U,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'External Link',
  render: () => <p style={{
    fontFamily: 'sans-serif',
    fontSize: 14
  }}>
      Visit our{' '}
      <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
        external documentation
      </Link>{' '}
      for more details.
    </p>
}`,...(I=(P=l.parameters)==null?void 0:P.docs)==null?void 0:I.source},description:{story:'External link — target="_blank" with rel="noopener noreferrer".',...(V=(U=l.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};var H,N,R,_,W;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Inline in Text',
  render: () => <p style={{
    fontFamily: 'sans-serif',
    fontSize: 14,
    lineHeight: 1.6,
    maxWidth: 480
  }}>
      EventPipe helps you manage{' '}
      <Link href="/events">events</Link>,{' '}
      <Link href="/venues">venues</Link>, and{' '}
      <Link href="/attendees">attendees</Link>{' '}
      all in one place. Get started with our{' '}
      <Link href="/docs" underline="always">documentation</Link>.
    </p>
}`,...(R=(N=d.parameters)==null?void 0:N.docs)==null?void 0:R.source},description:{story:"Inline usage — link within a paragraph of text.",...(W=(_=d.parameters)==null?void 0:_.docs)==null?void 0:W.description}}};var O,G,$,X,q;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'onClick Handler',
  render: () => {
    const [count, setCount] = React.useState(0);
    return <div style={{
      fontFamily: 'sans-serif',
      fontSize: 14
    }}>
        <Link onClick={() => setCount(c => c + 1)}>
          Click me
        </Link>
        {count > 0 && <span style={{
        marginLeft: 8,
        color: '#666',
        fontSize: 12
      }}>
            Clicked {count} time{count !== 1 ? 's' : ''}
          </span>}
      </div>;
  }
}`,...($=(G=c.parameters)==null?void 0:G.docs)==null?void 0:$.source},description:{story:"onClick handler — link used as an action trigger without href.",...(q=(X=c.parameters)==null?void 0:X.docs)==null?void 0:q.description}}};var J,K,M,Q,Y;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        Tab to focus each link — EP focus ring appears on <code>:focus-visible</code>.<br />
        Links render as <code>&lt;a&gt;</code> elements and are natively keyboard-accessible.
      </p>
      <div style={{
      display: 'flex',
      gap: 16
    }}>
        <Link href="#">Primary</Link>
        <Link href="#" color="secondary">Secondary</Link>
        <Link href="#" underline="none">No underline</Link>
      </div>
    </div>
}`,...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.source},description:{story:"Accessibility — focus ring, keyboard navigation.",...(Y=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var Z,ee,ne,re,oe;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  render: () => {
    const vars = ['--ep-component-link-color', '--ep-component-link-color-hover', '--ep-component-link-color-visited', '--ep-component-link-color-secondary', '--ep-component-link-color-secondary-hover', '--ep-component-link-focus-ring-color', '--ep-component-link-focus-ring-width', '--ep-component-link-focus-ring-offset'];
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
        <div style={{
        display: 'flex',
        gap: 16
      }}>
          <Link href="#">Primary link</Link>
          <Link href="#" color="secondary">Secondary link</Link>
          <Link href="#" color="inherit">Inherit link</Link>
        </div>
      </div>;
  }
}`,...(ne=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ne.source},description:{story:"Token Audit — all CSS custom properties the Link component reads.",...(oe=(re=m.parameters)==null?void 0:re.docs)==null?void 0:oe.description}}};const ye=["Default","Colors","UnderlineVariants","TypographyScale","External","Inline","WithClickHandler","Accessibility","TokenAudit"];export{p as Accessibility,s as Colors,i as Default,l as External,d as Inline,m as TokenAudit,a as TypographyScale,t as UnderlineVariants,c as WithClickHandler,ye as __namedExportsOrder,me as default};

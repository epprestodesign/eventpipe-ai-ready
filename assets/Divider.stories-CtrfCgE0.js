import{j as e}from"./jsx-runtime-BT65X5dW.js";import{y as i,T as t,B as v}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const Q={title:"Components/Surfaces/Divider",component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'Visual separator between sections or list items. Renders as `<hr>` or `<div role="separator">` (when text children are present). No size or color variants — single token-driven line throughout.'}}},argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},variant:{control:"radio",options:["fullWidth","inset","middle"]},textAlign:{control:"radio",options:["center","left","right"]},flexItem:{control:"boolean"},children:{control:"text"}},args:{orientation:"horizontal",variant:"fullWidth",textAlign:"center",flexItem:!1}};function x({children:o}){return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:0},children:o})}function r({label:o}){return e.jsx("div",{style:{padding:"12px 0"},children:e.jsx(t,{variant:"body2",color:"text.secondary",children:o})})}const a={render:o=>e.jsxs("div",{style:{width:320},children:[e.jsx(r,{label:"Section A content"}),e.jsx(i,{...o}),e.jsx(r,{label:"Section B content"})]})},n={render:()=>e.jsxs("div",{style:{width:360,display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"fullWidth (default)"}),e.jsxs(x,{children:[e.jsx(r,{label:"Item above"}),e.jsx(i,{variant:"fullWidth"}),e.jsx(r,{label:"Item below"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"inset — list context"}),e.jsxs(x,{children:[e.jsx(r,{label:"List item"}),e.jsx(i,{variant:"inset"}),e.jsx(r,{label:"List item"}),e.jsx(i,{variant:"inset"}),e.jsx(r,{label:"List item"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"middle — section separator"}),e.jsxs(x,{children:[e.jsx(r,{label:"Content above"}),e.jsx(i,{variant:"middle"}),e.jsx(r,{label:"Content below"})]})]})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Horizontal (default)"}),e.jsxs("div",{style:{width:320},children:[e.jsx(r,{label:"Above"}),e.jsx(i,{orientation:"horizontal"}),e.jsx(r,{label:"Below"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Vertical — requires flex container + flexItem"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",height:40,gap:12},children:[e.jsx(t,{variant:"body2",children:"Left"}),e.jsx(i,{orientation:"vertical",flexItem:!0}),e.jsx(t,{variant:"body2",children:"Center"}),e.jsx(i,{orientation:"vertical",flexItem:!0}),e.jsx(t,{variant:"body2",children:"Right"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Vertical in button group"}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",border:"1px solid #e0e0e0",borderRadius:4},children:[e.jsx(v,{variant:"text",color:"neutral",size:"sm",children:"Cut"}),e.jsx(i,{orientation:"vertical",flexItem:!0}),e.jsx(v,{variant:"text",color:"neutral",size:"sm",children:"Copy"}),e.jsx(i,{orientation:"vertical",flexItem:!0}),e.jsx(v,{variant:"text",color:"neutral",size:"sm",children:"Paste"})]})]})]})},d={render:()=>e.jsxs("div",{style:{width:360,display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"center (default)"}),e.jsxs("div",{style:{paddingTop:8},children:[e.jsx(r,{label:"Content above"}),e.jsx(i,{children:"Section break"}),e.jsx(r,{label:"Content below"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"textAlign left"}),e.jsxs("div",{style:{paddingTop:8},children:[e.jsx(r,{label:"Content above"}),e.jsx(i,{textAlign:"left",children:"January 2026"}),e.jsx(r,{label:"Content below"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"textAlign right"}),e.jsxs("div",{style:{paddingTop:8},children:[e.jsx(r,{label:"Content above"}),e.jsx(i,{textAlign:"right",children:"End of section"}),e.jsx(r,{label:"Content below"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"middle + text"}),e.jsxs("div",{style:{paddingTop:8},children:[e.jsx(r,{label:"Content above"}),e.jsx(i,{variant:"middle",children:"OR"}),e.jsx(r,{label:"Content below"})]})]})]})},s={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:'No children → <hr> (implicit role="separator")'}),e.jsx(t,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:'Screen readers announce "separator". No aria-label needed — the surrounding context provides meaning.'}),e.jsx(i,{})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:'With children → <div role="separator"> (explicit role via MUI)'}),e.jsx(t,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:'MUI renders a div with role="separator" when children are present (because <hr> cannot contain child elements).'}),e.jsx(i,{children:"Label"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:'Vertical → aria-orientation="vertical"'}),e.jsx(t,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:'MUI sets aria-orientation="vertical" automatically on vertical dividers.'}),e.jsxs("div",{style:{display:"flex",alignItems:"center",height:32,gap:12},children:[e.jsx(t,{variant:"body2",children:"Left"}),e.jsx(i,{orientation:"vertical",flexItem:!0}),e.jsx(t,{variant:"body2",children:"Right"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"Decorative use — aria-hidden"}),e.jsxs(t,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:["When a divider is purely cosmetic (e.g. inside a card footer between buttons), pass aria-hidden via sx or className to remove it from the accessibility tree. Example: ",e.jsx("code",{children:"<Divider sx={{ 'aria-hidden': true }} />"})]})]})]})},c={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const o=["--ep-component-divider-color","--ep-component-divider-thickness","--ep-component-divider-inset-indent","--ep-component-divider-middle-indent","--ep-component-divider-text-color","--ep-component-divider-text-font-size","--ep-component-divider-text-gap"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsx("p",{style:{color:"#666",marginBottom:8},children:"Open DevTools → Computed to verify each var resolves (no fallback value). Note: dimension vars won't show a color swatch — inspect the raw value."}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:o.map(p=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:p}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${p})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},p))})]}),e.jsx(t,{variant:"overline",color:"text.secondary",children:"Live renders"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,marginTop:8,maxWidth:400},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"caption",color:"text.secondary",children:"fullWidth"}),e.jsx(i,{})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"caption",color:"text.secondary",children:"inset"}),e.jsx(i,{variant:"inset"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"caption",color:"text.secondary",children:"middle"}),e.jsx(i,{variant:"middle"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"caption",color:"text.secondary",children:"with text"}),e.jsx(i,{children:"Label"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"caption",color:"text.secondary",children:"vertical (flex)"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",height:32,gap:8},children:[e.jsx("span",{children:"Left"}),e.jsx(i,{orientation:"vertical",flexItem:!0}),e.jsx("span",{children:"Right"})]})]})]})]})}};var y,h,m,g,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: DividerProps) => <div style={{
    width: 320
  }}>
      <Block label="Section A content" />
      <Divider {...args} />
      <Block label="Section B content" />
    </div>
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source},description:{story:"Default horizontal full-width divider. Use Controls to explore all props.",...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};var u,j,f,T,D;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <Typography variant="overline" color="text.secondary">fullWidth (default)</Typography>
        <Section>
          <Block label="Item above" />
          <Divider variant="fullWidth" />
          <Block label="Item below" />
        </Section>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">inset — list context</Typography>
        <Section>
          <Block label="List item" />
          <Divider variant="inset" />
          <Block label="List item" />
          <Divider variant="inset" />
          <Block label="List item" />
        </Section>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">middle — section separator</Typography>
        <Section>
          <Block label="Content above" />
          <Divider variant="middle" />
          <Block label="Content below" />
        </Section>
      </div>
    </div>
}`,...(f=(j=n.parameters)==null?void 0:j.docs)==null?void 0:f.source},description:{story:"All three indent variants — fullWidth, inset, and middle.",...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var w,k,B,C,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Horizontal (default)
        </Typography>
        <div style={{
        width: 320
      }}>
          <Block label="Above" />
          <Divider orientation="horizontal" />
          <Block label="Below" />
        </div>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Vertical — requires flex container + flexItem
        </Typography>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        height: 40,
        gap: 12
      }}>
          <Typography variant="body2">Left</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2">Center</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2">Right</Typography>
        </div>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Vertical in button group
        </Typography>
        <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid #e0e0e0',
        borderRadius: 4
      }}>
          <Button variant="text" color="neutral" size="sm">Cut</Button>
          <Divider orientation="vertical" flexItem />
          <Button variant="text" color="neutral" size="sm">Copy</Button>
          <Divider orientation="vertical" flexItem />
          <Button variant="text" color="neutral" size="sm">Paste</Button>
        </div>
      </div>
    </div>
}`,...(B=(k=l.parameters)==null?void 0:k.docs)==null?void 0:B.source},description:{story:"Horizontal vs vertical orientation. Vertical requires a flex container and flexItem.",...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.description}}};var S,A,z,L,W;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <Typography variant="overline" color="text.secondary">center (default)</Typography>
        <div style={{
        paddingTop: 8
      }}>
          <Block label="Content above" />
          <Divider>Section break</Divider>
          <Block label="Content below" />
        </div>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">textAlign left</Typography>
        <div style={{
        paddingTop: 8
      }}>
          <Block label="Content above" />
          <Divider textAlign="left">January 2026</Divider>
          <Block label="Content below" />
        </div>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">textAlign right</Typography>
        <div style={{
        paddingTop: 8
      }}>
          <Block label="Content above" />
          <Divider textAlign="right">End of section</Divider>
          <Block label="Content below" />
        </div>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">middle + text</Typography>
        <div style={{
        paddingTop: 8
      }}>
          <Block label="Content above" />
          <Divider variant="middle">OR</Divider>
          <Block label="Content below" />
        </div>
      </div>
    </div>
}`,...(z=(A=d.parameters)==null?void 0:A.docs)==null?void 0:z.source},description:{story:"Text label support — renders label centered between two flanking lines.",...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.description}}};var R,V,N,O,U;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
          No children → &lt;hr&gt; (implicit role="separator")
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Screen readers announce "separator". No aria-label needed — the surrounding
          context provides meaning.
        </Typography>
        <Divider />
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">
          With children → &lt;div role="separator"&gt; (explicit role via MUI)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          MUI renders a div with role="separator" when children are present
          (because &lt;hr&gt; cannot contain child elements).
        </Typography>
        <Divider>Label</Divider>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">
          Vertical → aria-orientation="vertical"
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          MUI sets aria-orientation="vertical" automatically on vertical dividers.
        </Typography>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        height: 32,
        gap: 12
      }}>
          <Typography variant="body2">Left</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2">Right</Typography>
        </div>
      </div>

      <div>
        <Typography variant="overline" color="text.secondary">
          Decorative use — aria-hidden
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          When a divider is purely cosmetic (e.g. inside a card footer between buttons),
          pass aria-hidden via sx or className to remove it from the accessibility tree.
          Example: <code>{\`<Divider sx={{ 'aria-hidden': true }} />\`}</code>
        </Typography>
      </div>
    </div>
}`,...(N=(V=s.parameters)==null?void 0:V.docs)==null?void 0:N.source},description:{story:"Accessibility patterns — rendered elements, roles, and screen-reader behavior.",...(U=(O=s.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};var E,M,F,q,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const vars = ['--ep-component-divider-color', '--ep-component-divider-thickness', '--ep-component-divider-inset-indent', '--ep-component-divider-middle-indent', '--ep-component-divider-text-color', '--ep-component-divider-text-font-size', '--ep-component-divider-text-gap'];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <p style={{
        color: '#666',
        marginBottom: 8
      }}>
          Open DevTools → Computed to verify each var resolves (no fallback value).
          Note: dimension vars won't show a color swatch — inspect the raw value.
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
        gap: 16,
        marginTop: 8,
        maxWidth: 400
      }}>
          <div>
            <Typography variant="caption" color="text.secondary">fullWidth</Typography>
            <Divider />
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">inset</Typography>
            <Divider variant="inset" />
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">middle</Typography>
            <Divider variant="middle" />
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">with text</Typography>
            <Divider>Label</Divider>
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">vertical (flex)</Typography>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            height: 32,
            gap: 8
          }}>
              <span>Left</span>
              <Divider orientation="vertical" flexItem />
              <span>Right</span>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(F=(M=c.parameters)==null?void 0:M.docs)==null?void 0:F.source},description:{story:`Token Audit — all 7 CSS custom properties the Divider component reads.
Open DevTools → Computed to verify each var resolves correctly.`,...(H=(q=c.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};const X=["Default","Variants","Orientation","WithText","Accessibility","TokenAudit"];export{s as Accessibility,a as Default,l as Orientation,c as TokenAudit,n as Variants,d as WithText,X as __namedExportsOrder,Q as default};

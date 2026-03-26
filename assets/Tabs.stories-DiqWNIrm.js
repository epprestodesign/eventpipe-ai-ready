import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as r}from"./index-C6mWTJJr.js";import{aa as n,ab as t,I as x}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const ge={title:"Components/Navigation/Tabs",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'Horizontal (or vertical) tab strip with keyboard navigation. Implements ARIA tabs pattern: role="tablist", role="tab", role="tabpanel". Arrow key navigation handled by MUI. Compose with Tab children and Tabs.Panel for content regions. Spec: docs/specs/components/tabs.md'}}},argTypes:{variant:{control:"radio",options:["standard","scrollable","fullWidth"]},orientation:{control:"radio",options:["horizontal","vertical"]},centered:{control:"boolean"},value:{control:!1,table:{disable:!0}},onChange:{control:!1,table:{disable:!0}}},args:{variant:"standard",orientation:"horizontal",centered:!1}},d={args:{},render:function(a){const[s,l]=r.useState("events");return e.jsxs("div",{children:[e.jsxs(n,{variant:a.variant,orientation:a.orientation,centered:a.centered,value:s,onChange:(i,be)=>l(be),children:[e.jsx(t,{label:"Events",value:"events"}),e.jsx(t,{label:"Venues",value:"venues"}),e.jsx(t,{label:"Attendees",value:"attendees"})]}),e.jsx(n.Panel,{value:s,index:"events",children:e.jsx("div",{style:{padding:"16px 0"},children:"Events content panel."})}),e.jsx(n.Panel,{value:s,index:"venues",children:e.jsx("div",{style:{padding:"16px 0"},children:"Venues content panel."})}),e.jsx(n.Panel,{value:s,index:"attendees",children:e.jsx("div",{style:{padding:"16px 0"},children:"Attendees content panel."})})]})}},c={name:"Controlled",args:{variant:"standard"},render:function(){const[a,s]=r.useState("tab-one");return e.jsxs("div",{children:[e.jsxs(n,{value:a,onChange:(l,i)=>s(i),children:[e.jsx(t,{label:"Tab One",value:"tab-one"}),e.jsx(t,{label:"Tab Two",value:"tab-two"}),e.jsx(t,{label:"Tab Three",value:"tab-three"})]}),e.jsx(n.Panel,{value:a,index:"tab-one",children:e.jsx("div",{style:{padding:"16px 0"},children:"Content for Tab One."})}),e.jsx(n.Panel,{value:a,index:"tab-two",children:e.jsx("div",{style:{padding:"16px 0"},children:"Content for Tab Two."})}),e.jsx(n.Panel,{value:a,index:"tab-three",children:e.jsx("div",{style:{padding:"16px 0"},children:"Content for Tab Three."})})]})}},b={name:"With Disabled Tab",args:{variant:"standard"},render:function(){const[a,s]=r.useState("active");return e.jsxs(n,{value:a,onChange:(l,i)=>s(i),children:[e.jsx(t,{label:"Active",value:"active"}),e.jsx(t,{label:"Disabled",value:"disabled",disabled:!0}),e.jsx(t,{label:"Another",value:"another"})]})}},p={name:"Full Width",args:{variant:"fullWidth"},render:function(){const[a,s]=r.useState("overview");return e.jsx("div",{style:{width:480},children:e.jsxs(n,{value:a,variant:"fullWidth",onChange:(l,i)=>s(i),children:[e.jsx(t,{label:"Overview",value:"overview"}),e.jsx(t,{label:"Details",value:"details"}),e.jsx(t,{label:"History",value:"history"})]})})}},pe=["January","February","March","April","May","June","July","August"],v={name:"Scrollable",args:{variant:"scrollable"},render:function(){const[a,s]=r.useState("January");return e.jsx("div",{style:{width:400},children:e.jsx(n,{value:a,variant:"scrollable",scrollButtons:"auto",onChange:(l,i)=>s(i),children:pe.map(l=>e.jsx(t,{label:l,value:l},l))})})}},u={name:"With Icons",args:{variant:"standard"},render:function(){const[a,s]=r.useState("calendar");return e.jsxs(n,{value:a,onChange:(l,i)=>s(i),children:[e.jsx(t,{label:"Calendar",value:"calendar",icon:e.jsx(x,{name:"calendar",size:"sm"}),iconPosition:"start"}),e.jsx(t,{label:"People",value:"people",icon:e.jsx(x,{name:"person",size:"sm"}),iconPosition:"start"}),e.jsx(t,{label:"Settings",value:"settings",icon:e.jsx(x,{name:"settings",size:"sm"}),iconPosition:"start"})]})}},h={name:"keepMounted Panel",args:{variant:"standard"},render:function(){const[a,s]=r.useState("panel-a");return e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"monospace",fontSize:12,color:"#666",marginBottom:8},children:"Both panels remain in the DOM even when inactive (keepMounted)."}),e.jsxs(n,{value:a,onChange:(l,i)=>s(i),children:[e.jsx(t,{label:"Panel A",value:"panel-a"}),e.jsx(t,{label:"Panel B",value:"panel-b"})]}),e.jsx(n.Panel,{value:a,index:"panel-a",keepMounted:!0,children:e.jsx("div",{style:{padding:"16px 0"},children:"Panel A — always in DOM."})}),e.jsx(n.Panel,{value:a,index:"panel-b",keepMounted:!0,children:e.jsx("div",{style:{padding:"16px 0"},children:"Panel B — always in DOM."})})]})}},T={name:"Accessibility",args:{variant:"standard"},render:function(){const[a,s]=r.useState("first");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("p",{style:{fontSize:13,color:"#666",margin:0},children:["MUI implements the ARIA tabs pattern automatically:",e.jsx("br",{}),"• ",e.jsx("code",{children:'role="tablist"'})," on the Tabs container",e.jsx("br",{}),"• ",e.jsx("code",{children:'role="tab"'})," on each Tab",e.jsx("br",{}),"• ",e.jsx("code",{children:'role="tabpanel"'})," on each Tabs.Panel",e.jsx("br",{}),"• Arrow keys (← →) navigate between tabs",e.jsx("br",{}),"• Focus indicator uses the EP focus ring token"]}),e.jsxs(n,{value:a,onChange:(l,i)=>s(i),children:[e.jsx(t,{label:"First",value:"first"}),e.jsx(t,{label:"Second",value:"second"}),e.jsx(t,{label:"Third",value:"third"})]}),e.jsx(n.Panel,{value:a,index:"first",children:e.jsx("div",{style:{padding:"16px 0"},children:"First panel content."})}),e.jsx(n.Panel,{value:a,index:"second",children:e.jsx("div",{style:{padding:"16px 0"},children:"Second panel content."})}),e.jsx(n.Panel,{value:a,index:"third",children:e.jsx("div",{style:{padding:"16px 0"},children:"Third panel content."})})]})}},g=["--ep-component-tabs-border-bottom-color","--ep-component-tabs-border-bottom-width","--ep-component-tabs-tab-color","--ep-component-tabs-tab-color-active","--ep-component-tabs-tab-color-disabled","--ep-component-tabs-tab-background-hover","--ep-component-tabs-tab-background-focus","--ep-component-tabs-tab-font-size","--ep-component-tabs-tab-font-weight","--ep-component-tabs-tab-font-weight-active","--ep-component-tabs-tab-padding-y","--ep-component-tabs-tab-padding-x","--ep-component-tabs-tab-min-width","--ep-component-tabs-indicator-color","--ep-component-tabs-indicator-height","--ep-component-tabs-indicator-border-radius","--ep-component-tabs-focus-ring-color","--ep-component-tabs-focus-ring-width","--ep-component-tabs-focus-ring-offset"],m={name:"Token Audit (DevTools)",args:{variant:"standard"},render:function(){const[a,s]=r.useState("alpha");return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",g.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:g.map(l=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:l}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${l})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},l))})]}),e.jsxs(n,{value:a,onChange:(l,i)=>s(i),children:[e.jsx(t,{label:"Alpha",value:"alpha"}),e.jsx(t,{label:"Beta",value:"beta"}),e.jsx(t,{label:"Gamma",value:"gamma",disabled:!0})]})]})}};var y,j,f,A,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {},
  render: function DefaultRender(args) {
    const [activeTab, setActiveTab] = React.useState('events');
    return <div>
        <Tabs variant={args.variant} orientation={args.orientation} centered={args.centered} value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
          <Tab label="Events" value="events" />
          <Tab label="Venues" value="venues" />
          <Tab label="Attendees" value="attendees" />
        </Tabs>
        <Tabs.Panel value={activeTab} index="events">
          <div style={{
          padding: '16px 0'
        }}>Events content panel.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="venues">
          <div style={{
          padding: '16px 0'
        }}>Venues content panel.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="attendees">
          <div style={{
          padding: '16px 0'
        }}>Attendees content panel.</div>
        </Tabs.Panel>
      </div>;
  }
}`,...(f=(j=d.parameters)==null?void 0:j.docs)==null?void 0:f.source},description:{story:`Default — three-tab strip with controlled panels.
variant / orientation / centered from Controls update layout without
resetting the selected tab.`,...(w=(A=d.parameters)==null?void 0:A.docs)==null?void 0:w.description}}};var S,P,C,R,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Controlled',
  args: {
    variant: 'standard'
  },
  render: function ControlledRender() {
    const [activeTab, setActiveTab] = React.useState('tab-one');
    return <div>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
          <Tab label="Tab One" value="tab-one" />
          <Tab label="Tab Two" value="tab-two" />
          <Tab label="Tab Three" value="tab-three" />
        </Tabs>
        <Tabs.Panel value={activeTab} index="tab-one">
          <div style={{
          padding: '16px 0'
        }}>Content for Tab One.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="tab-two">
          <div style={{
          padding: '16px 0'
        }}>Content for Tab Two.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="tab-three">
          <div style={{
          padding: '16px 0'
        }}>Content for Tab Three.</div>
        </Tabs.Panel>
      </div>;
  }
}`,...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source},description:{story:"Controlled — value managed externally, onChange drives state.",...(D=(R=c.parameters)==null?void 0:R.docs)==null?void 0:D.description}}};var k,_,M,V,B;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'With Disabled Tab',
  args: {
    variant: 'standard'
  },
  render: function WithDisabledRender() {
    const [activeTab, setActiveTab] = React.useState('active');
    return <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
        <Tab label="Active" value="active" />
        <Tab label="Disabled" value="disabled" disabled />
        <Tab label="Another" value="another" />
      </Tabs>;
  }
}`,...(M=(_=b.parameters)==null?void 0:_.docs)==null?void 0:M.source},description:{story:"Disabled tab — one tab in the strip is non-interactive.",...(B=(V=b.parameters)==null?void 0:V.docs)==null?void 0:B.description}}};var W,I,O,F,z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    variant: 'fullWidth'
  },
  render: function FullWidthRender() {
    const [activeTab, setActiveTab] = React.useState('overview');
    return <div style={{
      width: 480
    }}>
        <Tabs value={activeTab} variant="fullWidth" onChange={(_, newValue) => setActiveTab(newValue as string)}>
          <Tab label="Overview" value="overview" />
          <Tab label="Details" value="details" />
          <Tab label="History" value="history" />
        </Tabs>
      </div>;
  }
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source},description:{story:"Full width — tabs stretch to fill container width.",...(z=(F=p.parameters)==null?void 0:F.docs)==null?void 0:z.description}}};var E,K,L,U,J;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Scrollable',
  args: {
    variant: 'scrollable'
  },
  render: function ScrollableRender() {
    const [activeTab, setActiveTab] = React.useState('January');
    return <div style={{
      width: 400
    }}>
        <Tabs value={activeTab} variant="scrollable" scrollButtons="auto" onChange={(_, newValue) => setActiveTab(newValue as string)}>
          {SCROLLABLE_TABS.map(t => <Tab key={t} label={t} value={t} />)}
        </Tabs>
      </div>;
  }
}`,...(L=(K=v.parameters)==null?void 0:K.docs)==null?void 0:L.source},description:{story:"Scrollable — more tabs than fit, scroll buttons appear on overflow.",...(J=(U=v.parameters)==null?void 0:U.docs)==null?void 0:J.description}}};var N,H,G,$,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With Icons',
  args: {
    variant: 'standard'
  },
  render: function WithIconsRender() {
    const [activeTab, setActiveTab] = React.useState('calendar');
    return <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
        <Tab label="Calendar" value="calendar" icon={<Icon name="calendar" size="sm" />} iconPosition="start" />
        <Tab label="People" value="people" icon={<Icon name="person" size="sm" />} iconPosition="start" />
        <Tab label="Settings" value="settings" icon={<Icon name="settings" size="sm" />} iconPosition="start" />
      </Tabs>;
  }
}`,...(G=(H=u.parameters)==null?void 0:H.docs)==null?void 0:G.source},description:{story:"With Icons — icon + label in tab buttons.",...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.description}}};var Q,X,Y,Z,ee;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'keepMounted Panel',
  args: {
    variant: 'standard'
  },
  render: function KeepMountedRender() {
    const [activeTab, setActiveTab] = React.useState('panel-a');
    return <div>
        <p style={{
        fontFamily: 'monospace',
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>
          Both panels remain in the DOM even when inactive (keepMounted).
        </p>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
          <Tab label="Panel A" value="panel-a" />
          <Tab label="Panel B" value="panel-b" />
        </Tabs>
        <Tabs.Panel value={activeTab} index="panel-a" keepMounted>
          <div style={{
          padding: '16px 0'
        }}>Panel A — always in DOM.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="panel-b" keepMounted>
          <div style={{
          padding: '16px 0'
        }}>Panel B — always in DOM.</div>
        </Tabs.Panel>
      </div>;
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"keepMounted — inactive panels stay in DOM; useful for preserving state.",...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,te,ne,se,le;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Accessibility',
  args: {
    variant: 'standard'
  },
  render: function AccessibilityRender() {
    const [activeTab, setActiveTab] = React.useState('first');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <p style={{
        fontSize: 13,
        color: '#666',
        margin: 0
      }}>
          MUI implements the ARIA tabs pattern automatically:<br />
          • <code>role="tablist"</code> on the Tabs container<br />
          • <code>role="tab"</code> on each Tab<br />
          • <code>role="tabpanel"</code> on each Tabs.Panel<br />
          • Arrow keys (← →) navigate between tabs<br />
          • Focus indicator uses the EP focus ring token
        </p>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
          <Tab label="First" value="first" />
          <Tab label="Second" value="second" />
          <Tab label="Third" value="third" />
        </Tabs>
        <Tabs.Panel value={activeTab} index="first">
          <div style={{
          padding: '16px 0'
        }}>First panel content.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="second">
          <div style={{
          padding: '16px 0'
        }}>Second panel content.</div>
        </Tabs.Panel>
        <Tabs.Panel value={activeTab} index="third">
          <div style={{
          padding: '16px 0'
        }}>Third panel content.</div>
        </Tabs.Panel>
      </div>;
  }
}`,...(ne=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"Accessibility — ARIA tabs pattern, keyboard navigation notes.",...(le=(se=T.parameters)==null?void 0:se.docs)==null?void 0:le.description}}};var ie,re,oe,de,ce;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  args: {
    variant: 'standard'
  },
  render: function TokenAuditRender() {
    const [activeTab, setActiveTab] = React.useState('alpha');
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <p style={{
        color: '#666',
        marginBottom: 8
      }}>
          Open DevTools → Computed to verify each var resolves. Total: {TOKEN_AUDIT_VARS.length} vars.
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
            {TOKEN_AUDIT_VARS.map(v => <tr key={v} style={{
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
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue as string)}>
          <Tab label="Alpha" value="alpha" />
          <Tab label="Beta" value="beta" />
          <Tab label="Gamma" value="gamma" disabled />
        </Tabs>
      </div>;
  }
}`,...(oe=(re=m.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:"Token Audit — all CSS custom properties the Tabs component reads.",...(ce=(de=m.parameters)==null?void 0:de.docs)==null?void 0:ce.description}}};const ye=["Default","Controlled","WithDisabled","FullWidth","Scrollable","WithIcons","KeepMounted","Accessibility","TokenAudit"];export{T as Accessibility,c as Controlled,d as Default,p as FullWidth,h as KeepMounted,v as Scrollable,m as TokenAudit,b as WithDisabled,u as WithIcons,ye as __namedExportsOrder,ge as default};

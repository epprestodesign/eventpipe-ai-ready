import{j as e}from"./jsx-runtime-BT65X5dW.js";import{a4 as r}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const le={title:"Components/Slider",component:r,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the slider thumb and track.",table:{defaultValue:{summary:"md"}}},color:{control:"select",options:["primary","secondary","error","warning","info","success","neutral"],description:"Color theme for the slider.",table:{defaultValue:{summary:"primary"}}},disabled:{control:"boolean",description:"Prevents interaction."},min:{control:"number",description:"Minimum value.",table:{defaultValue:{summary:"0"}}},max:{control:"number",description:"Maximum value.",table:{defaultValue:{summary:"100"}}},step:{control:"number",description:"Step increment.",table:{defaultValue:{summary:"1"}}},valueLabelDisplay:{control:"select",options:["off","on","auto"],description:"When to display the value label.",table:{defaultValue:{summary:"auto"}}}}},l={args:{"aria-label":"Default slider",defaultValue:30}},s={args:{"aria-label":"Disabled slider",defaultValue:50,disabled:!0}},i={args:{"aria-label":"Slider with marks",defaultValue:40,min:0,max:100,step:10,marks:[{value:0,label:"0°C"},{value:25,label:"25°C"},{value:50,label:"50°C"},{value:75,label:"75°C"},{value:100,label:"100°C"}]}},t={args:{"aria-label":"Range slider",defaultValue:[20,80]}},o={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,width:300},children:["primary","secondary","error","warning","info","success","neutral"].map(a=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,marginBottom:4,color:"#666"},children:a}),e.jsx(r,{"aria-label":`${a} slider`,defaultValue:60,color:a})]},a))})},n={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,width:300},children:["sm","md","lg"].map(a=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,marginBottom:4,color:"#666"},children:a}),e.jsx(r,{"aria-label":`${a} slider`,defaultValue:50,size:a})]},a))})},d={args:{"aria-label":"Slider with value label",defaultValue:65,valueLabelDisplay:"on"}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:300},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,marginBottom:4,color:"#666"},children:'aria-label: "Volume control"'}),e.jsx(r,{"aria-label":"Volume control",defaultValue:70})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,marginBottom:4,color:"#666"},children:'aria-label: "Temperature range" (range)'}),e.jsx(r,{"aria-label":"Temperature range",defaultValue:[30,70]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,marginBottom:4,color:"#666"},children:"Disabled with aria-label"}),e.jsx(r,{"aria-label":"Unavailable setting",defaultValue:40,disabled:!0})]})]})};var u,m,p,b,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default slider',
    defaultValue: 30
  }
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"Default slider: 0–100, primary color.",...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var v,y,g,h,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Disabled slider',
    defaultValue: 50,
    disabled: true
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source},description:{story:"Disabled state.",...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var S,V,D,j,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Slider with marks',
    defaultValue: 40,
    min: 0,
    max: 100,
    step: 10,
    marks: [{
      value: 0,
      label: '0°C'
    }, {
      value: 25,
      label: '25°C'
    }, {
      value: 50,
      label: '50°C'
    }, {
      value: 75,
      label: '75°C'
    }, {
      value: 100,
      label: '100°C'
    }]
  }
}`,...(D=(V=i.parameters)==null?void 0:V.docs)==null?void 0:D.source},description:{story:"Custom marks with labels.",...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var z,C,k,B,R;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Range slider',
    defaultValue: [20, 80]
  }
}`,...(k=(C=t.parameters)==null?void 0:C.docs)==null?void 0:k.source},description:{story:"Range slider with two thumbs.",...(R=(B=t.parameters)==null?void 0:B.docs)==null?void 0:R.description}}};var A,L,T,W,q;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 300
  }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'neutral'] as const).map(c => <div key={c}>
          <div style={{
        fontSize: 12,
        marginBottom: 4,
        color: '#666'
      }}>{c}</div>
          <Slider aria-label={\`\${c} slider\`} defaultValue={60} color={c} />
        </div>)}
    </div>
}`,...(T=(L=o.parameters)==null?void 0:L.docs)==null?void 0:T.source},description:{story:"All seven color variants.",...(q=(W=o.parameters)==null?void 0:W.docs)==null?void 0:q.description}}};var M,$,E,U,_;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 300
  }}>
      {(['sm', 'md', 'lg'] as const).map(s => <div key={s}>
          <div style={{
        fontSize: 12,
        marginBottom: 4,
        color: '#666'
      }}>{s}</div>
          <Slider aria-label={\`\${s} slider\`} defaultValue={50} size={s} />
        </div>)}
    </div>
}`,...(E=($=n.parameters)==null?void 0:$.docs)==null?void 0:E.source},description:{story:"All three sizes.",...(_=(U=n.parameters)==null?void 0:U.docs)==null?void 0:_.description}}};var O,P,F,G,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Slider with value label',
    defaultValue: 65,
    valueLabelDisplay: 'on'
  }
}`,...(F=(P=d.parameters)==null?void 0:P.docs)==null?void 0:F.source},description:{story:"Value label always visible.",...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var I,J,K,N,Q;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 300
  }}>
      <div>
        <div style={{
        fontSize: 12,
        marginBottom: 4,
        color: '#666'
      }}>
          aria-label: &quot;Volume control&quot;
        </div>
        <Slider aria-label="Volume control" defaultValue={70} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        marginBottom: 4,
        color: '#666'
      }}>
          aria-label: &quot;Temperature range&quot; (range)
        </div>
        <Slider aria-label="Temperature range" defaultValue={[30, 70]} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        marginBottom: 4,
        color: '#666'
      }}>
          Disabled with aria-label
        </div>
        <Slider aria-label="Unavailable setting" defaultValue={40} disabled />
      </div>
    </div>
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Accessibility: aria-label demonstrated.",...(Q=(N=c.parameters)==null?void 0:N.docs)==null?void 0:Q.description}}};const se=["Default","Disabled","WithMarks","Range","Colors","Sizes","WithValueLabel","Accessibility"];export{c as Accessibility,o as Colors,l as Default,s as Disabled,t as Range,n as Sizes,i as WithMarks,d as WithValueLabel,se as __namedExportsOrder,le as default};

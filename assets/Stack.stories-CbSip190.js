import{j as e}from"./jsx-runtime-BT65X5dW.js";import{S as r,e as n,y as B}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const O={title:"Components/Layout/Stack",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Flexbox layout component for vertical or horizontal arrangement. Pure layout — no tokens. Spacing uses an 8px base multiplier. Wraps MUI Stack as the EP design-system boundary."}}},argTypes:{direction:{control:"select",options:["column","column-reverse","row","row-reverse"],description:"Flex direction.",table:{defaultValue:{summary:"column"}}},spacing:{control:"select",options:[0,.5,1,1.5,2,3,4,6,8],description:"Spacing between children. Multiplied by 8px base.",table:{defaultValue:{summary:"0"}}},alignItems:{control:"select",options:["flex-start","center","flex-end","stretch","baseline"]},justifyContent:{control:"select",options:["flex-start","center","flex-end","space-between","space-around","space-evenly"]}},args:{direction:"column",spacing:2}},t=({children:s})=>e.jsx("div",{style:{padding:"8px 16px",backgroundColor:"var(--ep-semantic-color-neutral-light, #f0f0f0)",borderRadius:4},children:e.jsx(n,{variant:"body2",children:s})}),i={render:()=>e.jsxs(r,{direction:"column",spacing:2,children:[e.jsx(t,{children:"Registration"}),e.jsx(t,{children:"Check-in"}),e.jsx(t,{children:"Session Tracking"})]})},a={render:()=>e.jsxs(r,{direction:"row",spacing:2,children:[e.jsx(t,{children:"Dashboard"}),e.jsx(t,{children:"Analytics"}),e.jsx(t,{children:"Reports"})]})},o={render:()=>e.jsxs(r,{direction:"column",spacing:1,divider:e.jsx(B,{}),children:[e.jsx(n,{children:"Keynote: Future of Hybrid Events"}),e.jsx(n,{children:"Panel: Attendee Engagement Strategies"}),e.jsx(n,{children:"Workshop: Data-Driven Event Planning"})]})},c={render:()=>e.jsx(r,{spacing:3,children:["flex-start","center","flex-end","space-between"].map(s=>e.jsxs("div",{children:[e.jsxs(n,{variant:"caption",color:"secondary",gutterBottom:!0,children:["justifyContent: ",s]}),e.jsxs(r,{direction:"row",justifyContent:s,alignItems:"center",spacing:1,sx:{border:"1px dashed #ccc",padding:1,minHeight:48},children:[e.jsx(t,{children:"A"}),e.jsx(t,{children:"B"}),e.jsx(t,{children:"C"})]})]},s))})},d={render:()=>e.jsxs(r,{spacing:3,children:[e.jsx(n,{variant:"h6",children:"Event Schedule"}),e.jsxs(r,{direction:"row",spacing:2,children:[e.jsx(t,{children:"9:00 AM"}),e.jsx(t,{children:"Opening Remarks"})]}),e.jsxs(r,{direction:"row",spacing:2,children:[e.jsx(t,{children:"10:00 AM"}),e.jsx(t,{children:"Breakout Sessions"})]}),e.jsxs(r,{direction:"row",spacing:2,children:[e.jsx(t,{children:"12:00 PM"}),e.jsx(t,{children:"Networking Lunch"})]})]})};var p,l,m,g,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Stack direction="column" spacing={2}>
      <Item>Registration</Item>
      <Item>Check-in</Item>
      <Item>Session Tracking</Item>
    </Stack>
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"Vertical column layout with spacing between items.",...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var u,y,x,j,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      <Item>Dashboard</Item>
      <Item>Analytics</Item>
      <Item>Reports</Item>
    </Stack>
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:"Horizontal row layout with spacing between items.",...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.description}}};var k,I,v,w,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Stack direction="column" spacing={1} divider={<Divider />}>
      <Typography>Keynote: Future of Hybrid Events</Typography>
      <Typography>Panel: Attendee Engagement Strategies</Typography>
      <Typography>Workshop: Data-Driven Event Planning</Typography>
    </Stack>
}`,...(v=(I=o.parameters)==null?void 0:I.docs)==null?void 0:v.source},description:{story:"Stack with a Divider inserted between each child.",...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.description}}};var f,T,A,C,D;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      {(['flex-start', 'center', 'flex-end', 'space-between'] as const).map(jc => <div key={jc}>
          <Typography variant="caption" color="secondary" gutterBottom>
            justifyContent: {jc}
          </Typography>
          <Stack direction="row" justifyContent={jc} alignItems="center" spacing={1} sx={{
        border: '1px dashed #ccc',
        padding: 1,
        minHeight: 48
      }}>
            <Item>A</Item>
            <Item>B</Item>
            <Item>C</Item>
          </Stack>
        </div>)}
    </Stack>
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source},description:{story:"Demonstrates justifyContent and alignItems combinations.",...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};var E,M,P,R,H;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Typography variant="h6">Event Schedule</Typography>
      <Stack direction="row" spacing={2}>
        <Item>9:00 AM</Item>
        <Item>Opening Remarks</Item>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Item>10:00 AM</Item>
        <Item>Breakout Sessions</Item>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Item>12:00 PM</Item>
        <Item>Networking Lunch</Item>
      </Stack>
    </Stack>
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source},description:{story:"Nested Stacks — an outer vertical Stack containing horizontal inner Stacks.",...(H=(R=d.parameters)==null?void 0:R.docs)==null?void 0:H.description}}};const K=["Vertical","Horizontal","WithDivider","AlignmentShowcase","Nested"];export{c as AlignmentShowcase,a as Horizontal,d as Nested,i as Vertical,o as WithDivider,K as __namedExportsOrder,O as default};

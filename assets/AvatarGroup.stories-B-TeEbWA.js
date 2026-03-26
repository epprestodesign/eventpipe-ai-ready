import{j as a}from"./jsx-runtime-BT65X5dW.js";import{d as s,b as r,S as d,e as p}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const q={title:"Components/AvatarGroup",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'Displays a collection of avatars with overlap and an optional "+N" overflow indicator. Forces size and variant on all child avatars. Renders with role="group" and accepts an aria-label for accessibility.'}}},argTypes:{max:{control:{type:"number",min:1,max:20},description:"Maximum avatars to display before showing overflow.",table:{defaultValue:{summary:"5"}}},total:{control:{type:"number",min:0},description:"Override total count for surplus calculation."},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size forced on all child avatars.",table:{defaultValue:{summary:"md"}}},spacing:{control:"radio",options:["medium","small"],description:"Overlap spacing between avatars.",table:{defaultValue:{summary:"medium"}}},variant:{control:"radio",options:["circular","rounded","square"],description:"Shape forced on all child avatars.",table:{defaultValue:{summary:"circular"}}}},args:{max:5,size:"md",spacing:"medium",variant:"circular"}},t={render:()=>a.jsxs(s,{"aria-label":"Event organizers",children:[a.jsx(r,{children:"JD"}),a.jsx(r,{children:"KM"}),a.jsx(r,{children:"SL"}),a.jsx(r,{children:"AP"}),a.jsx(r,{children:"RH"})]})},n={render:()=>a.jsxs(s,{max:4,"aria-label":"Registered attendees",children:[a.jsx(r,{children:"JD"}),a.jsx(r,{children:"KM"}),a.jsx(r,{children:"SL"}),a.jsx(r,{children:"AP"}),a.jsx(r,{children:"RH"}),a.jsx(r,{children:"BT"}),a.jsx(r,{children:"NW"}),a.jsx(r,{children:"CF"})]})},i={render:()=>a.jsxs(d,{spacing:1,alignItems:"center",children:[a.jsxs(s,{max:4,total:47,"aria-label":"Conference attendees",children:[a.jsx(r,{children:"JD"}),a.jsx(r,{children:"KM"}),a.jsx(r,{children:"SL"})]}),a.jsx(p,{variant:"caption",color:"secondary",children:"total=47, 3 children, max=4 — surplus shows +44"})]})},o={render:()=>a.jsx(d,{spacing:3,alignItems:"flex-start",children:["xs","sm","md","lg","xl"].map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[a.jsx(p,{variant:"caption",color:"secondary",sx:{minWidth:24},children:e}),a.jsxs(s,{size:e,"aria-label":`Group size ${e}`,children:[a.jsx(r,{children:"JD"}),a.jsx(r,{children:"KM"}),a.jsx(r,{children:"SL"})]})]},e))})},l={render:()=>a.jsx(d,{spacing:3,alignItems:"flex-start",children:["medium","small"].map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[a.jsx(p,{variant:"caption",color:"secondary",sx:{minWidth:60},children:e}),a.jsxs(s,{spacing:e,size:"lg","aria-label":`Spacing ${e}`,children:[a.jsx(r,{children:"JD"}),a.jsx(r,{children:"KM"}),a.jsx(r,{children:"SL"}),a.jsx(r,{children:"AP"})]})]},e))})},c={render:()=>a.jsxs(s,{variant:"rounded",size:"lg","aria-label":"Team members",children:[a.jsx(r,{children:"JD"}),a.jsx(r,{children:"KM"}),a.jsx(r,{children:"SL"}),a.jsx(r,{children:"AP"}),a.jsx(r,{children:"RH"})]})};var v,m,u,A,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <AvatarGroup aria-label="Event organizers">
      <Avatar>JD</Avatar>
      <Avatar>KM</Avatar>
      <Avatar>SL</Avatar>
      <Avatar>AP</Avatar>
      <Avatar>RH</Avatar>
    </AvatarGroup>
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Five attendee avatars — no overflow.",...(x=(A=t.parameters)==null?void 0:A.docs)==null?void 0:x.description}}};var h,g,y,j,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={4} aria-label="Registered attendees">
      <Avatar>JD</Avatar>
      <Avatar>KM</Avatar>
      <Avatar>SL</Avatar>
      <Avatar>AP</Avatar>
      <Avatar>RH</Avatar>
      <Avatar>BT</Avatar>
      <Avatar>NW</Avatar>
      <Avatar>CF</Avatar>
    </AvatarGroup>
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:'Eight avatars with max=4 — shows "+5" overflow indicator.',...(f=(j=n.parameters)==null?void 0:j.docs)==null?void 0:f.description}}};var S,b,z,G,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Stack spacing={1} alignItems="center">
      <AvatarGroup max={4} total={47} aria-label="Conference attendees">
        <Avatar>JD</Avatar>
        <Avatar>KM</Avatar>
        <Avatar>SL</Avatar>
      </AvatarGroup>
      <Typography variant="caption" color="secondary">
        total=47, 3 children, max=4 — surplus shows +44
      </Typography>
    </Stack>
}`,...(z=(b=i.parameters)==null?void 0:b.docs)==null?void 0:z.source},description:{story:'Three visible avatars but total=47 — shows "+44" surplus. Useful for server-side pagination.',...(w=(G=i.parameters)==null?void 0:G.docs)==null?void 0:w.description}}};var D,T,M,R,J;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} alignItems="flex-start">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => <div key={s} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <Typography variant="caption" color="secondary" sx={{
        minWidth: 24
      }}>
            {s}
          </Typography>
          <AvatarGroup size={s} aria-label={\`Group size \${s}\`}>
            <Avatar>JD</Avatar>
            <Avatar>KM</Avatar>
            <Avatar>SL</Avatar>
          </AvatarGroup>
        </div>)}
    </Stack>
}`,...(M=(T=o.parameters)==null?void 0:T.docs)==null?void 0:M.source},description:{story:"All five sizes side by side.",...(J=(R=o.parameters)==null?void 0:R.docs)==null?void 0:J.description}}};var K,L,I,k,P;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} alignItems="flex-start">
      {(['medium', 'small'] as const).map(sp => <div key={sp} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <Typography variant="caption" color="secondary" sx={{
        minWidth: 60
      }}>
            {sp}
          </Typography>
          <AvatarGroup spacing={sp} size="lg" aria-label={\`Spacing \${sp}\`}>
            <Avatar>JD</Avatar>
            <Avatar>KM</Avatar>
            <Avatar>SL</Avatar>
            <Avatar>AP</Avatar>
          </AvatarGroup>
        </div>)}
    </Stack>
}`,...(I=(L=l.parameters)==null?void 0:L.docs)==null?void 0:I.source},description:{story:"Medium (default) vs small overlap spacing. Small has tighter overlap (-12px vs -8px).",...(P=(k=l.parameters)==null?void 0:k.docs)==null?void 0:P.description}}};var W,H,V,C,E;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <AvatarGroup variant="rounded" size="lg" aria-label="Team members">
      <Avatar>JD</Avatar>
      <Avatar>KM</Avatar>
      <Avatar>SL</Avatar>
      <Avatar>AP</Avatar>
      <Avatar>RH</Avatar>
    </AvatarGroup>
}`,...(V=(H=c.parameters)==null?void 0:H.docs)==null?void 0:V.source},description:{story:"Rounded variant — all avatars use rounded corners instead of circular.",...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};const U=["Default","Overflow","WithTotal","Sizes","SpacingVariants","Rounded"];export{t as Default,n as Overflow,c as Rounded,o as Sizes,l as SpacingVariants,i as WithTotal,U as __namedExportsOrder,q as default};

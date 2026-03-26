import{j as a}from"./jsx-runtime-BT65X5dW.js";import{a7 as n,T as r,a8 as c}from"./index-BlH9IZLb.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const q={title:"Components/Surfaces/Surface",component:n,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["plain","raised","overlay","panel","modal"],description:"Visual depth level.",table:{defaultValue:{summary:"plain"}}},border:{control:"select",options:["none","default","strong"],description:"Border style.",table:{defaultValue:{summary:"none"}}},radius:{control:"select",options:["none","xs","sm","md","lg","xl","pill"],description:"Override border-radius."},padding:{control:"select",options:["none","xs","sm","md","lg"],description:"Padding inside the surface.",table:{defaultValue:{summary:"none"}}},component:{control:"select",options:["div","section","aside","article","main"],description:"Override the rendered HTML element.",table:{defaultValue:{summary:"div"}}}},args:{variant:"plain",border:"none",padding:"md"}},s={render:o=>a.jsx(n,{...o,sx:{maxWidth:400},children:a.jsx(r,{variant:"body2",children:"A semantic surface container for visual depth and layering."})})},t={render:()=>{const o=["plain","raised","overlay","panel","modal"];return a.jsx(c,{sx:{display:"flex",gap:3,flexWrap:"wrap"},children:o.map(e=>a.jsxs(n,{variant:e,padding:"md",sx:{width:180},children:[a.jsx(r,{variant:"subtitle2",sx:{textTransform:"capitalize"},children:e}),a.jsxs(r,{variant:"caption",color:"text.secondary",children:['variant="',e,'"']})]},e))})}},i={render:()=>{const o=["none","default","strong"];return a.jsx(c,{sx:{display:"flex",gap:3,flexWrap:"wrap"},children:o.map(e=>a.jsx(n,{variant:"plain",border:e,padding:"md",sx:{width:200},children:a.jsxs(r,{variant:"subtitle2",children:['border="',e,'"']})},e))})}},d={render:()=>a.jsxs(c,{sx:{display:"flex",flexDirection:"column",gap:3,maxWidth:500},children:[a.jsxs(n,{variant:"raised",border:"default",padding:"lg",children:[a.jsx(r,{variant:"h6",sx:{mb:1},children:"Settings"}),a.jsx(r,{variant:"body2",color:"text.secondary",children:"Configure your event preferences and notification settings."})]}),a.jsxs(n,{variant:"overlay",padding:"md",component:"aside",children:[a.jsx(r,{variant:"subtitle2",sx:{mb:.5},children:"Quick Tip"}),a.jsx(r,{variant:"body2",color:"text.secondary",children:"You can use the component prop to render as section, aside, article, or main."})]})]})},p={render:()=>{const o=[{variant:"plain",bg:"--ep-semantic-color-background-paper",shadow:"none",radius:"--ep-semantic-radius-md"},{variant:"raised",bg:"--ep-semantic-color-background-paper",shadow:"--ep-semantic-elevation-raised",radius:"--ep-semantic-radius-lg"},{variant:"overlay",bg:"--ep-semantic-color-surface-overlay",shadow:"--ep-semantic-elevation-overlay",radius:"--ep-semantic-radius-lg"},{variant:"panel",bg:"--ep-semantic-color-surface-overlay",shadow:"--ep-semantic-elevation-panel",radius:"--ep-semantic-radius-xl"},{variant:"modal",bg:"--ep-semantic-color-surface-overlay",shadow:"--ep-semantic-elevation-modal",radius:"--ep-semantic-radius-xl"}];return a.jsx(c,{sx:{display:"flex",flexDirection:"column",gap:2},children:o.map(({variant:e,bg:E,shadow:P,radius:Q})=>a.jsxs(n,{variant:e,padding:"sm",border:"default",children:[a.jsx(r,{variant:"subtitle2",sx:{textTransform:"capitalize",mb:.5},children:e}),a.jsxs(r,{variant:"caption",component:"div",sx:{fontFamily:"monospace"},children:["bg: ",E]}),a.jsxs(r,{variant:"caption",component:"div",sx:{fontFamily:"monospace"},children:["shadow: ",P]}),a.jsxs(r,{variant:"caption",component:"div",sx:{fontFamily:"monospace"},children:["radius: ",Q]})]},e))})}};var l,m,u,y,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: SurfaceProps) => <Surface {...args} sx={{
    maxWidth: 400
  }}>
      <Typography variant="body2">
        A semantic surface container for visual depth and layering.
      </Typography>
    </Surface>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Use Controls to explore variant, border, radius, and padding props.",...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};var v,g,h,f,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const variants: SurfaceVariant[] = ['plain', 'raised', 'overlay', 'panel', 'modal'];
    return <Box sx={{
      display: 'flex',
      gap: 3,
      flexWrap: 'wrap'
    }}>
        {variants.map(v => <Surface key={v} variant={v} padding="md" sx={{
        width: 180
      }}>
            <Typography variant="subtitle2" sx={{
          textTransform: 'capitalize'
        }}>
              {v}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              variant="{v}"
            </Typography>
          </Surface>)}
      </Box>;
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"All five variant levels side-by-side.",...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var T,S,j,w,k;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const borders: SurfaceBorder[] = ['none', 'default', 'strong'];
    return <Box sx={{
      display: 'flex',
      gap: 3,
      flexWrap: 'wrap'
    }}>
        {borders.map(b => <Surface key={b} variant="plain" border={b} padding="md" sx={{
        width: 200
      }}>
            <Typography variant="subtitle2">border="{b}"</Typography>
          </Surface>)}
      </Box>;
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:"Border options on a plain surface.",...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var B,W,V,C,D;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    maxWidth: 500
  }}>
      <Surface variant="raised" border="default" padding="lg">
        <Typography variant="h6" sx={{
        mb: 1
      }}>Settings</Typography>
        <Typography variant="body2" color="text.secondary">
          Configure your event preferences and notification settings.
        </Typography>
      </Surface>
      <Surface variant="overlay" padding="md" component="aside">
        <Typography variant="subtitle2" sx={{
        mb: 0.5
      }}>Quick Tip</Typography>
        <Typography variant="body2" color="text.secondary">
          You can use the component prop to render as section, aside, article, or main.
        </Typography>
      </Surface>
    </Box>
}`,...(V=(W=d.parameters)==null?void 0:W.docs)==null?void 0:V.source},description:{story:"Surfaces with rich content to demonstrate real-world usage.",...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};var F,A,z,M,O;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const tokenMap = [{
      variant: 'plain' as const,
      bg: '--ep-semantic-color-background-paper',
      shadow: 'none',
      radius: '--ep-semantic-radius-md'
    }, {
      variant: 'raised' as const,
      bg: '--ep-semantic-color-background-paper',
      shadow: '--ep-semantic-elevation-raised',
      radius: '--ep-semantic-radius-lg'
    }, {
      variant: 'overlay' as const,
      bg: '--ep-semantic-color-surface-overlay',
      shadow: '--ep-semantic-elevation-overlay',
      radius: '--ep-semantic-radius-lg'
    }, {
      variant: 'panel' as const,
      bg: '--ep-semantic-color-surface-overlay',
      shadow: '--ep-semantic-elevation-panel',
      radius: '--ep-semantic-radius-xl'
    }, {
      variant: 'modal' as const,
      bg: '--ep-semantic-color-surface-overlay',
      shadow: '--ep-semantic-elevation-modal',
      radius: '--ep-semantic-radius-xl'
    }];
    return <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
        {tokenMap.map(({
        variant,
        bg,
        shadow,
        radius
      }) => <Surface key={variant} variant={variant} padding="sm" border="default">
            <Typography variant="subtitle2" sx={{
          textTransform: 'capitalize',
          mb: 0.5
        }}>
              {variant}
            </Typography>
            <Typography variant="caption" component="div" sx={{
          fontFamily: 'monospace'
        }}>
              bg: {bg}
            </Typography>
            <Typography variant="caption" component="div" sx={{
          fontFamily: 'monospace'
        }}>
              shadow: {shadow}
            </Typography>
            <Typography variant="caption" component="div" sx={{
          fontFamily: 'monospace'
        }}>
              radius: {radius}
            </Typography>
          </Surface>)}
      </Box>;
  }
}`,...(z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:z.source},description:{story:"Token audit — verifies each variant references the correct CSS custom properties.",...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.description}}};const G=["Default","Variants","WithBorder","WithContent","TokenAudit"];export{s as Default,p as TokenAudit,t as Variants,i as WithBorder,d as WithContent,G as __namedExportsOrder,q as default};

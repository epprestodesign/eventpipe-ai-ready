import{j as e}from"./jsx-runtime-BT65X5dW.js";import{useMDXComponents as s}from"./index-Cd31CJfN.js";import{M as r}from"./index-DF1I-CVt.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BpT0z86u.js";import"./index-Bq2HnrkM.js";import"./index-jimAspun.js";import"./index-DrFu-skq.js";function o(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Get started/Develop"}),`
`,e.jsxs("div",{style:{maxWidth:760,fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx(n.h1,{id:"develop",children:"Develop"}),e.jsx(n.p,{children:"Everything you need to start building with EventPipe UI."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"1-install",children:"1. Install"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add @eventpipe/ui @eventpipe/tokens
`})}),e.jsx(n.p,{children:"Or with npm / yarn:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @eventpipe/ui @eventpipe/tokens
yarn add @eventpipe/ui @eventpipe/tokens
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"2-import-token-css",children:"2. Import token CSS"}),e.jsxs(n.p,{children:["Import the compiled token stylesheet once at the root of your application. This makes all ",e.jsx(n.code,{children:"--ep-*"})," CSS custom properties available globally."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// app/layout.tsx  (Next.js App Router)
import '@eventpipe/tokens/css';
`})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// src/index.tsx  (CRA / Vite)
import '@eventpipe/tokens/css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
`})}),e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," EventPipe UI does ",e.jsx(n.strong,{children:"not"})," require MUI's ",e.jsx(n.code,{children:"ThemeProvider"}),". Components read tokens from CSS custom properties, not MUI's theme palette."]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"3-use-components",children:"3. Use components"}),e.jsxs(n.p,{children:["All components are named exports from ",e.jsx(n.code,{children:"@eventpipe/ui"}),"."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, TextField, Select, Dialog } from '@eventpipe/ui';
import type { ButtonProps, DialogProps } from '@eventpipe/ui';

export function CreateEventForm() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Create event
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="title">
        <Dialog.Title id="title" onClose={() => setOpen(false)}>New event</Dialog.Title>
        <Dialog.Content>
          <TextField label="Event name" fullWidth />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained">Create</Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
}
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"4-token-aware-styling",children:"4. Token-aware styling"}),e.jsx(n.p,{children:"When you need custom styles adjacent to EP components, reference CSS variables directly:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// ✅ Reference semantic tokens for custom styles
<div style={{ color: 'var(--ep-semantic-color-text-secondary)' }}>
  Helper text
</div>

// ✅ Use component tokens for consistent spacing
<div style={{ padding: 'var(--ep-component-card-padding-y) var(--ep-component-card-padding-x)' }}>
  Custom card content
</div>

// ❌ Never hardcode design values
<div style={{ color: '#4B5563' }}>   {/* bypasses token system */}
  Helper text
</div>
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"5-typescript",children:"5. TypeScript"}),e.jsx(n.p,{children:"Every component ships with full TypeScript types."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { ButtonProps, ButtonVariant } from '@eventpipe/ui';

// Props are fully typed
const buttonProps: ButtonProps = {
  variant: 'contained',  // 'contained' | 'outlined' | 'text' | 'soft'
  color: 'primary',      // 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'neutral'
  size: 'md',            // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
};
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"6-peer-dependencies",children:"6. Peer dependencies"}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@eventpipe/ui"})," requires these peer dependencies:"]}),e.jsxs(n.p,{children:[`| Package | Version |
|---|---|
| `,e.jsx(n.code,{children:"react"})," | ",e.jsx(n.code,{children:"^18.0.0"}),` |
| `,e.jsx(n.code,{children:"react-dom"})," | ",e.jsx(n.code,{children:"^18.0.0"}),` |
| `,e.jsx(n.code,{children:"@mui/material"})," | ",e.jsx(n.code,{children:"^5.0.0"}),` |
| `,e.jsx(n.code,{children:"@emotion/react"})," | ",e.jsx(n.code,{children:"^11.0.0"}),` |
| `,e.jsx(n.code,{children:"@emotion/styled"})," | ",e.jsx(n.code,{children:"^11.0.0"})," |"]})]})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as default};

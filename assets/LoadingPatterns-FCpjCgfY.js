import{j as e}from"./jsx-runtime-BT65X5dW.js";import{useMDXComponents as r}from"./index-Cd31CJfN.js";import{M as s}from"./index-DF1I-CVt.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BpT0z86u.js";import"./index-Bq2HnrkM.js";import"./index-jimAspun.js";import"./index-DrFu-skq.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Patterns/Loading patterns"}),`
`,e.jsxs("div",{style:{maxWidth:760,fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx(n.h1,{id:"loading-patterns",children:"Loading patterns"}),e.jsx(n.p,{children:"EventPipe provides four loading primitives. Choosing the right one depends on context, scope, and whether you know the progress value."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"decision-table",children:"Decision table"}),e.jsxs(n.p,{children:[`| Scenario | Component | Why |
|---|---|---|
| Page or section content loading | `,e.jsx(n.code,{children:"Skeleton"}),` | Shows the shape of incoming content. Reduces perceived latency. |
| Button or form submit in progress | `,e.jsx(n.code,{children:"CircularProgress"}),` (inline) | Small, inline. Sits beside or replaces the button label. |
| File upload, multi-step process | `,e.jsx(n.code,{children:"LinearProgress"}),` | Horizontal bar suits left-to-right progress metaphors. |
| Full-page or modal blocking load | `,e.jsx(n.code,{children:"Backdrop"})," + ",e.jsx(n.code,{children:"CircularProgress"}),` | Blocks all interaction while preserving page context. |
| Dialog action in progress | `,e.jsx(n.code,{children:"Dialog loading={true}"})," | Built-in — Dialog has a ",e.jsx(n.code,{children:"loading"})," prop that overlays a spinner and blocks close. |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"skeleton",children:"Skeleton"}),e.jsx(n.p,{children:"Use Skeleton when you know the layout of incoming content. It communicates the shape and position of elements before data arrives."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Match the shape of the content it represents
<Skeleton variant="text" width={240} />          // Single line of text
<Skeleton variant="text" width="60%" />           // Relative-width text
<Skeleton variant="rectangular" height={200} />   // Image or card body
<Skeleton variant="circular" width={40} height={40} />  // Avatar

// Compose to match a card layout
<div>
  <Skeleton variant="rectangular" height={160} />
  <Skeleton variant="text" sx={{ mt: 1 }} />
  <Skeleton variant="text" width="80%" />
</div>
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Rules:"})}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Match the exact dimensions of the real content"}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'animation="pulse"'})," (default) for continuous loading; ",e.jsx(n.code,{children:'animation="wave"'})," for streaming"]}),`
`,e.jsxs(n.li,{children:["Remove Skeleton when content is ready — don't keep it mounted with ",e.jsx(n.code,{children:"hidden"})]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"circularprogress",children:"CircularProgress"}),e.jsx(n.p,{children:"Use for indeterminate operations where duration is unknown: API calls, background saves, authentication."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Indeterminate (default) — unknown duration
<CircularProgress size="md" color="primary" />

// Determinate — known percentage
<CircularProgress size="md" color="primary" variant="determinate" value={65} />

// Inside a button
<Button variant="contained" disabled startIcon={<CircularProgress size="xs" />}>
  Saving...
</Button>
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"linearprogress",children:"LinearProgress"}),e.jsx(n.p,{children:"Use for operations with measurable progress: file uploads, step-by-step wizards, batch processing."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Indeterminate
<LinearProgress color="primary" />

// Determinate with known value
<LinearProgress color="primary" variant="determinate" value={uploadProgress} />

// Buffer (streaming)
<LinearProgress variant="buffer" value={downloaded} valueBuffer={buffered} />
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"backdrop-full-page-blocking",children:"Backdrop (full-page blocking)"}),e.jsx(n.p,{children:"Use when the entire page must be blocked during a critical operation: initial data load, authentication, destructive action in progress."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Backdrop open={isLoading}>
  <div role="status" aria-label="Loading page">
    <CircularProgress size="lg" color="primary" />
  </div>
</Backdrop>
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Rules:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always include a ",e.jsx(n.code,{children:'role="status"'})," + ",e.jsx(n.code,{children:"aria-label"})," inside Backdrop for screen readers"]}),`
`,e.jsx(n.li,{children:"Do not use for partial page loads — scope loading indicators to the affected area"}),`
`,e.jsx(n.li,{children:"Do not compose standalone Backdrop with Dialog — Dialog has a built-in backdrop"}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"dialog-loading-state",children:"Dialog loading state"}),e.jsxs(n.p,{children:["When a dialog is performing an action (saving, deleting), use the ",e.jsx(n.code,{children:"loading"})," prop instead of composing your own overlay."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Dialog open={open} onClose={handleClose} loading={isSaving}>
  <Dialog.Title onClose={handleClose}>Delete event?</Dialog.Title>
  <Dialog.Content>This action cannot be undone.</Dialog.Content>
  <Dialog.Actions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button color="error" onClick={handleDelete}>Delete</Button>
  </Dialog.Actions>
</Dialog>
`})}),e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"loading={true}"}),":"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"CircularProgress"})," overlay appears over the dialog content"]}),`
`,e.jsxs(n.li,{children:["All ",e.jsx(n.code,{children:"onClose"})," calls are suppressed (no accidental dismissal mid-operation)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disableEscapeKeyDown"})," is enforced automatically"]}),`
`]})]})]})}function x(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{x as default};

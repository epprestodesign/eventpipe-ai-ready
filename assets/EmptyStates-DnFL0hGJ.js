import{j as e}from"./jsx-runtime-BT65X5dW.js";import{useMDXComponents as i}from"./index-Cd31CJfN.js";import{M as s}from"./index-DF1I-CVt.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BpT0z86u.js";import"./index-Bq2HnrkM.js";import"./index-jimAspun.js";import"./index-DrFu-skq.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Patterns/Empty states"}),`
`,e.jsxs("div",{style:{maxWidth:760,fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx(n.h1,{id:"empty-states",children:"Empty states"}),e.jsx(n.p,{children:"Guidance for designing and writing empty states in EventPipe product surfaces."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"what-is-an-empty-state",children:"What is an empty state?"}),e.jsx(n.p,{children:"An empty state is any surface where the expected content is absent. This includes:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A brand-new account with no data yet"}),`
`,e.jsx(n.li,{children:"A filtered list that returned no results"}),`
`,e.jsx(n.li,{children:"A feature the user hasn't set up"}),`
`,e.jsx(n.li,{children:"An error that prevented content from loading"}),`
`]}),e.jsx(n.p,{children:"Each scenario has a different cause and a different appropriate response."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"decision-table",children:"Decision table"}),e.jsxs(n.p,{children:[`| Scenario | Primary action | Secondary action |
|---|---|---|
| First use (no data ever created) | Create CTA — `,e.jsx(n.code,{children:'Button variant="contained"'}),` | None |
| Filter / search returned nothing | Clear filter — `,e.jsx(n.code,{children:'Button variant="outlined"'}),` | Adjust search |
| Feature not configured | Set up CTA | Link to docs |
| Permission — no access | None (informational) | Contact admin link |
| Error — load failed | Retry — `,e.jsx(n.code,{children:'Button variant="outlined"'})," | None |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`   [ Illustration / Icon ]          ← Optional. Use for first-use states only.

   No events yet                    ← Heading: short, specific (not "No data")

   Create your first event to       ← Body: 1–2 sentences max. Explain why
   start managing your calendar.       the state exists and what to do.

   [ Create event ]                 ← Primary CTA (if actionable)
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"content-rules",children:"Content rules"}),e.jsx(n.h3,{id:"heading",children:"Heading"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Be specific: ",e.jsx(n.strong,{children:'"No events yet"'})," not ",e.jsx(n.strong,{children:'"Nothing here"'})]}),`
`,e.jsx(n.li,{children:"Do not use exclamation marks"}),`
`,e.jsx(n.li,{children:"3–5 words is ideal; never more than 8"}),`
`]}),e.jsx(n.h3,{id:"body-text",children:"Body text"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Explain what to do, not just what is missing"}),`
`,e.jsx(n.li,{children:'Write in second person: "You can create…" not "Users can create…"'}),`
`,e.jsx(n.li,{children:"If the cause is a filter or search: tell them how to see results"}),`
`]}),e.jsx(n.h3,{id:"call-to-action",children:"Call to action"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Match the button label to the heading verb: if heading is "No events yet" → CTA is "Create event"'}),`
`,e.jsx(n.li,{children:'Do not use generic labels like "Get started" or "Click here"'}),`
`,e.jsx(n.li,{children:"One CTA per empty state — two competing actions undermine decision-making"}),`
`]}),e.jsx(n.h3,{id:"illustration--icon",children:"Illustration / Icon"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Only use for ",e.jsx(n.strong,{children:"first-use"})," states — not for filter/error states"]}),`
`,e.jsxs(n.li,{children:["Use a conceptually relevant icon at ",e.jsx(n.code,{children:'size="xl"'})," with ",e.jsx(n.code,{children:'color="neutral"'})," styling"]}),`
`,e.jsx(n.li,{children:"Do not use illustration for destructive or error states"}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"composition-example",children:"Composition example"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// First-use empty state
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '64px 24px', textAlign: 'center' }}>
  <Icon name="calendar" size="xl" label="No events" />
  <div>
    <Typography variant="h6" gutterBottom>No events yet</Typography>
    <Typography variant="body2" color="text.secondary">
      Create your first event to start managing your calendar.
    </Typography>
  </div>
  <Button variant="contained" color="primary">
    Create event
  </Button>
</div>

// Filter empty state (no illustration)
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '48px 24px', textAlign: 'center' }}>
  <Typography variant="h6">No results for "summer gala"</Typography>
  <Typography variant="body2" color="text.secondary">
    Try adjusting your search or clearing filters.
  </Typography>
  <Button variant="outlined" onClick={clearFilters}>Clear filters</Button>
</div>

// Error empty state
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '48px 24px', textAlign: 'center' }}>
  <Typography variant="h6">Couldn't load events</Typography>
  <Typography variant="body2" color="text.secondary">
    There was a problem loading your events. Try again.
  </Typography>
  <Button variant="outlined" onClick={retry}>Retry</Button>
</div>
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"rules",children:"Rules"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Never show a blank white area with no message — always acknowledge the state"}),`
`,e.jsx(n.li,{children:"Do not mix error and first-use patterns (an error is not a feature discovery moment)"}),`
`,e.jsx(n.li,{children:"Do not add marketing copy to error empty states"}),`
`,e.jsx(n.li,{children:"Empty states inside a Dialog or Drawer: omit the illustration, reduce padding"}),`
`]})]})]})}function y(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{y as default};

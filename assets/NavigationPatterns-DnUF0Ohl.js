import{j as e}from"./jsx-runtime-BT65X5dW.js";import{useMDXComponents as r}from"./index-Cd31CJfN.js";import{M as t}from"./index-DF1I-CVt.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BpT0z86u.js";import"./index-Bq2HnrkM.js";import"./index-jimAspun.js";import"./index-DrFu-skq.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Patterns/Navigation patterns"}),`
`,e.jsxs("div",{style:{maxWidth:760,fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx(n.h1,{id:"navigation-patterns",children:"Navigation patterns"}),e.jsx(n.p,{children:"Guidance for composing navigation with EventPipe components."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"component-selection",children:"Component selection"}),e.jsxs(n.p,{children:[`| Use case | Component |
|---|---|
| Sub-page sections on a single page | `,e.jsx(n.code,{children:"Tabs"}),` |
| Location hierarchy (where am I) | `,e.jsx(n.code,{children:"Breadcrumbs"}),` |
| Inline text navigation | `,e.jsx(n.code,{children:"Link"}),` |
| Multi-page number navigation | `,e.jsx(n.code,{children:"Pagination"}),` |
| Action/option menu triggered by a button | `,e.jsx(n.code,{children:"Menu"}),` |
| Full navigation panel (mobile nav, sidebar) | `,e.jsx(n.code,{children:"Drawer"})," |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"tabs",children:"Tabs"}),e.jsxs(n.p,{children:["Use Tabs for ",e.jsx(n.strong,{children:"same-page section switching"})," where all content is loaded. Do not use Tabs as a substitute for routing between pages."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [active, setActive] = React.useState('overview');

<Tabs value={active} onChange={(_, v) => setActive(v as string)}>
  <Tab label="Overview" value="overview" />
  <Tab label="Attendees" value="attendees" />
  <Tab label="Schedule" value="schedule" />
</Tabs>

<Tabs.Panel value={active} index="overview">
  <EventOverview />
</Tabs.Panel>
<Tabs.Panel value={active} index="attendees">
  <AttendeeList />
</Tabs.Panel>
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Rules:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"value"})," strings (not indices) so labels can reorder without breaking state"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"keepMounted"})," on panels that are expensive to remount"]}),`
`,e.jsxs(n.li,{children:["Tabs with icons: use ",e.jsx(n.code,{children:'iconPosition="start"'})," for horizontal readability"]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"breadcrumbs",children:"Breadcrumbs"}),e.jsx(n.p,{children:"Use Breadcrumbs to orient users in deep hierarchies (3+ levels). Do not use for flat structures."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Breadcrumbs aria-label="breadcrumb">
  <BreadcrumbLink href="/">Home</BreadcrumbLink>
  <BreadcrumbLink href="/events">Events</BreadcrumbLink>
  <BreadcrumbLink href="/events/2026">2026 Season</BreadcrumbLink>
  <BreadcrumbItem>Summer Gala</BreadcrumbItem>
</Breadcrumbs>
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Rules:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Last item is always ",e.jsx(n.code,{children:"BreadcrumbItem"})," (non-interactive, ",e.jsx(n.code,{children:'aria-current="page"'}),")"]}),`
`,e.jsxs(n.li,{children:["Preceding items are always ",e.jsx(n.code,{children:"BreadcrumbLink"})]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"maxItems"})," (default 8) + ",e.jsx(n.code,{children:"itemsBeforeCollapse"}),"/",e.jsx(n.code,{children:"itemsAfterCollapse"})," for very deep paths"]}),`
`,e.jsx(n.li,{children:"Place above the page title, not below it"}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"breadcrumbs--tabs-together",children:"Breadcrumbs + Tabs together"}),e.jsx(n.p,{children:"A common EventPipe pattern: Breadcrumbs for location, Tabs for section."}),e.jsx(n.pre,{children:e.jsx(n.code,{children:`                           [Home > Events > Summer Gala]   ← Breadcrumbs
Summer Gala 2026                                           ← Page heading
[Overview] [Attendees] [Schedule] [Settings]               ← Tabs
─────────────────────────────────────────────────────
Tab content area
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"pagination",children:"Pagination"}),e.jsx(n.p,{children:"Use Pagination for navigating multi-page lists. Always pair with a page size control."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Pagination
  count={totalPages}
  page={currentPage}
  onChange={(_, page) => setCurrentPage(page)}
  variant="outlined"
  shape="rounded"
/>
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Rules:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Expose ",e.jsx(n.code,{children:"count"})," (total pages), ",e.jsx(n.code,{children:"page"})," (current, 1-indexed)"]}),`
`,e.jsx(n.li,{children:"Place below the list content, right-aligned or centered"}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'size="small"'})," on mobile or in compact layouts"]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"link",children:"Link"}),e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"Link"})," for inline navigation within body text. Do not use ",e.jsx(n.code,{children:"Link"})," as a substitute for a Button."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// ✅ Inline contextual navigation
<p>
  View all <Link href="/events">upcoming events</Link> or <Link href="/venues">browse venues</Link>.
</p>

// ✅ External link
<Link href="https://..." target="_blank" rel="noopener noreferrer">
  EventPipe documentation
</Link>

// ❌ Not for primary CTAs — use Button instead
<Link href="/create">Create event</Link>  {/* ← use Button */}
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"menu",children:"Menu"}),e.jsx(n.p,{children:"Use Menu for contextual actions triggered by a button (typically an ellipsis or chevron icon)."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);

<Button onClick={(e) => setAnchor(e.currentTarget)}>Actions</Button>
<Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
  <MenuItem onClick={handleEdit}>Edit event</MenuItem>
  <MenuItem onClick={handleDuplicate}>Duplicate</MenuItem>
  <MenuDivider />
  <MenuItem onClick={handleDelete}>Delete event</MenuItem>
</Menu>
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Rules:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"MenuDivider"})," to group related actions"]}),`
`,e.jsx(n.li,{children:"Destructive actions go last, after a divider"}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'size="sm"'})," icon buttons for ellipsis triggers in tables and cards"]}),`
`]})]})]})}function j(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};

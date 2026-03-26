import{j as e}from"./jsx-runtime-BT65X5dW.js";import{useMDXComponents as t}from"./index-Cd31CJfN.js";import{M as r}from"./index-DF1I-CVt.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BpT0z86u.js";import"./index-Bq2HnrkM.js";import"./index-jimAspun.js";import"./index-DrFu-skq.js";function i(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Get started/Content design"}),`
`,e.jsxs("div",{style:{maxWidth:760,fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx(n.h1,{id:"content-design",children:"Content design"}),e.jsx(n.p,{children:"Writing guidelines for UI text in EventPipe products."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"voice-and-tone",children:"Voice and tone"}),e.jsxs(n.p,{children:["EventPipe's voice is ",e.jsx(n.strong,{children:"direct, helpful, and human."})," It respects users' time without being terse, and uses plain language without being overly casual."]}),e.jsxs(n.p,{children:[`| Quality | In practice |
|---|---|
| `,e.jsx(n.strong,{children:"Direct"}),` | Lead with the action or result. Don't bury the point. |
| `,e.jsx(n.strong,{children:"Helpful"}),` | Anticipate what the user needs next. Provide enough context without overwhelming. |
| `,e.jsx(n.strong,{children:"Human"}),` | Write like a knowledgeable colleague, not a legal document. |
| `,e.jsx(n.strong,{children:"Consistent"})," | Use the same terms across the product. Avoid synonyms for the same concept. |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"writing-for-ui-components",children:"Writing for UI components"}),e.jsx(n.h3,{id:"buttons",children:"Buttons"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:"verb + noun"})," for primary actions: ",e.jsx(n.em,{children:"Create event"}),", ",e.jsx(n.em,{children:"Save changes"}),", ",e.jsx(n.em,{children:"Delete venue"})]}),`
`,e.jsxs(n.li,{children:["Use a single verb for secondary actions in context: ",e.jsx(n.em,{children:"Cancel"}),", ",e.jsx(n.em,{children:"Close"}),", ",e.jsx(n.em,{children:"Edit"})]}),`
`,e.jsxs(n.li,{children:["Capitalize only the first word (sentence case): ~~CREATE EVENT~~ → ",e.jsx(n.em,{children:"Create event"})]}),`
`,e.jsx(n.li,{children:"Keep labels under 3 words where possible"}),`
`]}),e.jsx(n.h3,{id:"labels-and-form-fields",children:"Labels and form fields"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:"noun phrases"})," for labels: ",e.jsx(n.em,{children:"Event name"}),", ",e.jsx(n.em,{children:"Start date"}),", ",e.jsx(n.em,{children:"Ticket price"})]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:"sentence case"}),": ~~Event Name~~ → ",e.jsx(n.em,{children:"Event name"})]}),`
`,e.jsxs(n.li,{children:["Place labels ",e.jsx(n.strong,{children:"above"})," fields (not inline, which reduces scannability)"]}),`
`,e.jsx(n.li,{children:"Use placeholder text sparingly — it disappears on input and is not a substitute for a label"}),`
`]}),e.jsx(n.h3,{id:"dialogs",children:"Dialogs"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Title"}),": state the action or outcome (e.g., ",e.jsx(n.em,{children:"Delete event?"}),", ",e.jsx(n.em,{children:"Edit venue details"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Body"}),": explain consequences, especially for destructive actions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary button"}),": mirrors the dialog title verb (",e.jsx(n.em,{children:"Delete"}),", ",e.jsx(n.em,{children:"Save"}),", ",e.jsx(n.em,{children:"Confirm"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cancel button"}),": always labeled ",e.jsx(n.em,{children:"Cancel"}),", never ",e.jsx(n.em,{children:"No"})," or ",e.jsx(n.em,{children:"Dismiss"})]}),`
`]}),e.jsx(n.h3,{id:"empty-states",children:"Empty states"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Explain what the space is for: ",e.jsx(n.em,{children:"No events yet"})]}),`
`,e.jsxs(n.li,{children:["Provide a clear next step: ",e.jsx(n.em,{children:"Create your first event"})]}),`
`,e.jsxs(n.li,{children:["Avoid: ",e.jsx(n.em,{children:"Nothing here"}),", ",e.jsx(n.em,{children:"No data found"}),", ",e.jsx(n.em,{children:"Empty"})]}),`
`]}),e.jsx(n.h3,{id:"error-messages",children:"Error messages"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Say what went wrong in plain terms"}),`
`,e.jsx(n.li,{children:"Tell the user what to do next"}),`
`,e.jsxs(n.li,{children:["Avoid jargon and blame: ~~Error 422~~ → ",e.jsx(n.em,{children:"This email is already in use. Try signing in instead."})]}),`
`]}),e.jsx(n.h3,{id:"confirmation-dialogs-destructive",children:"Confirmation dialogs (destructive)"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always mention what will be deleted by name when possible: ",e.jsx(n.em,{children:'Delete "Summer Gala 2026"?'})]}),`
`,e.jsx(n.li,{children:"State that the action cannot be undone when relevant"}),`
`,e.jsxs(n.li,{children:["Make the destructive button red (",e.jsx(n.code,{children:'color="error"'}),") and specific: ",e.jsx(n.em,{children:"Delete event"}),", not just ",e.jsx(n.em,{children:"Delete"})]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"capitalization",children:"Capitalization"}),e.jsxs(n.p,{children:[`| Usage | Convention | Example |
|---|---|---|
| UI labels, buttons | Sentence case | `,e.jsx(n.em,{children:"Create event"}),` |
| Section headings | Sentence case | `,e.jsx(n.em,{children:"Event details"}),` |
| Navigation items | Title Case | `,e.jsx(n.em,{children:"My Events"}),` |
| Error messages | Sentence case | `,e.jsx(n.em,{children:"Please enter a valid email"}),` |
| Tooltip text | Sentence case | `,e.jsx(n.em,{children:"Opens in a new tab"})," |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"numbers-and-dates",children:"Numbers and dates"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use numerals for quantities: ",e.jsx(n.em,{children:"3 events"}),", ",e.jsx(n.em,{children:"500 attendees"})," (not ",e.jsx(n.em,{children:"three events"}),")"]}),`
`,e.jsxs(n.li,{children:["Date format: ",e.jsx(n.em,{children:"August 15, 2026"})," (full month name in context); ",e.jsx(n.em,{children:"Aug 15"})," in compact UI"]}),`
`,e.jsxs(n.li,{children:["Time: use 12-hour with am/pm: ",e.jsx(n.em,{children:"9:00 am"}),", ",e.jsx(n.em,{children:"2:30 pm"})]}),`
`,e.jsxs(n.li,{children:["Currency: ",e.jsx(n.em,{children:"$1,200"})," (no decimals for whole amounts)"]}),`
`]})]})]})}function u(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};

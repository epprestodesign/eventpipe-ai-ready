import{j as e}from"./jsx-runtime-BT65X5dW.js";import{useMDXComponents as l}from"./index-Cd31CJfN.js";import{M as r}from"./index-DF1I-CVt.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BpT0z86u.js";import"./index-Bq2HnrkM.js";import"./index-jimAspun.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Patterns/Form patterns"}),`
`,e.jsxs("div",{style:{maxWidth:760,fontFamily:"system-ui, -apple-system, sans-serif"},children:[e.jsx(n.h1,{id:"form-patterns",children:"Form patterns"}),e.jsx(n.p,{children:"Guidance for composing forms with EventPipe input components."}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"input-component-selection",children:"Input component selection"}),e.jsxs(n.p,{children:[`| Use case | Component |
|---|---|
| Short freeform text | `,e.jsx(n.code,{children:"TextField"}),` |
| Long freeform text | `,e.jsx(n.code,{children:"TextField multiline"}),` |
| Fixed set of options (≤7) | `,e.jsx(n.code,{children:"Select"}),` |
| Fixed set with search | `,e.jsx(n.code,{children:"Autocomplete"}),` |
| Multiple fixed-option selections | `,e.jsx(n.code,{children:"Autocomplete multiple"}),` |
| Freeform + suggestions | `,e.jsx(n.code,{children:"Autocomplete freeSolo"}),` |
| Boolean toggle | `,e.jsx(n.code,{children:"Switch"})," (settings) / ",e.jsx(n.code,{children:"Checkbox"}),` (forms) |
| One of N options | `,e.jsx(n.code,{children:"RadioGroup"}),` |
| Filter chips | `,e.jsx(n.code,{children:"Chip"})," (controlled) |"]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"standard-form-layout",children:"Standard form layout"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<form onSubmit={handleSubmit}>
  <TextField
    label="Event name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    error={!!errors.name}
    helperText={errors.name}
    fullWidth
    required
  />

  <Select
    label="Category"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    error={!!errors.category}
    helperText={errors.category}
    fullWidth
    required
  >
    <MenuItem value="conference">Conference</MenuItem>
    <MenuItem value="gala">Gala</MenuItem>
    <MenuItem value="workshop">Workshop</MenuItem>
  </Select>

  <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 24 }}>
    <Button onClick={onCancel}>Cancel</Button>
    <Button type="submit" variant="contained">Create event</Button>
  </div>
</form>
`})}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"validation-state",children:"Validation state"}),e.jsxs(n.p,{children:["All form inputs expose ",e.jsx(n.code,{children:"error"})," and ",e.jsx(n.code,{children:"helperText"})," props. Validation runs on submit (not on blur) for most EventPipe forms to avoid premature error states."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Error state
<TextField
  label="Email"
  error={!!emailError}
  helperText={emailError || 'We\\'ll send event updates here.'}
/>

// Success is shown by clearing the error — no explicit success prop needed
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Rules:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Place error messages in ",e.jsx(n.code,{children:"helperText"})," — not in alerts above the form"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"error"})," only when the field value is invalid and the user has attempted to proceed"]}),`
`,e.jsxs(n.li,{children:["Required field markers: use ",e.jsx(n.code,{children:"required"})," prop — MUI adds ",e.jsx(n.code,{children:"*"})," to the label automatically"]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"form-in-a-dialog",children:"Form in a Dialog"}),e.jsx(n.p,{children:"The most common EventPipe form pattern: a Dialog containing a form with TextField/Select inputs and Dialog.Actions buttons."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="sm">
  <Dialog.Title id="form-dialog-title" onClose={handleClose}>
    Create event
  </Dialog.Title>
  <Dialog.Content>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 8 }}>
      <TextField label="Event name" fullWidth required />
      <Select label="Venue" fullWidth>
        <MenuItem value="grand">Grand Ballroom</MenuItem>
        <MenuItem value="rooftop">Rooftop Terrace</MenuItem>
      </Select>
      <TextField label="Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
    </div>
  </Dialog.Content>
  <Dialog.Actions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button variant="contained" onClick={handleSubmit}>Create</Button>
  </Dialog.Actions>
</Dialog>
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Rules:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:"paddingTop: 8"})," to the first child inside ",e.jsx(n.code,{children:"Dialog.Content"})," — MUI reduces ",e.jsx(n.code,{children:"DialogContent"})," top padding when it follows ",e.jsx(n.code,{children:"DialogTitle"}),"; the token enforces it, but visual breathing room from the title is still needed"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'fullWidth maxWidth="sm"'})," for most form dialogs"]}),`
`,e.jsxs(n.li,{children:["Primary action goes last (right-most) in ",e.jsx(n.code,{children:"Dialog.Actions"})]}),`
`,e.jsxs(n.li,{children:["Destructive actions use ",e.jsx(n.code,{children:'color="error"'})," on the primary button"]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.h2,{id:"autocomplete-patterns",children:"Autocomplete patterns"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Single select with search
<Autocomplete
  options={venues}
  getOptionLabel={(v) => v.name}
  renderInput={(params) => <TextField {...params} label="Venue" />}
/>

// Multi-select
<Autocomplete
  multiple
  options={tags}
  renderInput={(params) => <TextField {...params} label="Tags" />}
/>

// Free text + suggestions
<Autocomplete
  freeSolo
  options={suggestions}
  renderInput={(params) => <TextField {...params} label="Search events" />}
/>
`})})]})]})}function x(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{x as default};

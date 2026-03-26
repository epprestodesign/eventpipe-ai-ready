import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as x}from"./index-C6mWTJJr.js";import{G as T,H as C,J as c,K as l,M as j,N as n,s as E,I as y,B as v,a9 as ce,r as L,a0 as Te,Z as me,_ as z,$ as pe,O as ge}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const b=[{id:"1",name:"Summer Gala 2026",venue:"Grand Ballroom",date:"2026-06-15",status:"upcoming"},{id:"2",name:"Product Launch Event",venue:"Rooftop Terrace",date:"2026-03-28",status:"live"},{id:"3",name:"Annual Charity Dinner",venue:"Crystal Hall",date:"2026-02-14",status:"completed"},{id:"4",name:"Tech Conference 2026",venue:"Convention Center",date:"2026-09-10",status:"upcoming"},{id:"5",name:"Holiday Reception",venue:"Garden Pavilion",date:"2025-12-20",status:"cancelled"}],k={upcoming:"primary",live:"success",completed:"neutral",cancelled:"error"},ze={title:"Components/Surfaces/Table",component:T,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},stickyHeader:{control:"boolean"}},args:{size:"md",stickyHeader:!1}},w={name:"Basic",render:i=>e.jsxs(T,{...i,children:[e.jsx(C,{children:e.jsxs(c,{hover:!1,children:[e.jsx(l,{children:"Event name"}),e.jsx(l,{children:"Venue"}),e.jsx(l,{children:"Date"}),e.jsx(l,{children:"Status"})]})}),e.jsx(j,{children:b.map(t=>e.jsxs(c,{children:[e.jsx(n,{children:t.name}),e.jsx(n,{children:t.venue}),e.jsx(n,{children:t.date}),e.jsx(n,{children:e.jsx(E,{label:t.status,color:k[t.status],variant:"soft",size:"sm"})})]},t.id))})]})},H={name:"Selectable rows",render:i=>{const[t,d]=x.useState(new Set),o=t.size===b.length,p=t.size>0&&t.size<b.length,u=()=>{d(o?new Set:new Set(b.map(s=>s.id)))},h=s=>{d(r=>{const m=new Set(r);return m.has(s)?m.delete(s):m.add(s),m})};return e.jsxs("div",{children:[e.jsx(ce,{title:"Events",selectionCount:t.size,selectionTitle:`${t.size} row${t.size!==1?"s":""} selected`,actions:e.jsx(v,{variant:"outlined",size:"sm",children:"Export"}),selectionActions:e.jsx(v,{variant:"outlined",size:"sm",color:"error",children:"Delete selected"})}),e.jsxs(T,{...i,children:[e.jsx(C,{children:e.jsxs(c,{hover:!1,children:[e.jsx(l,{padding:"checkbox",children:e.jsx(L,{checked:o,indeterminate:p,onChange:u,"aria-label":"Select all rows",size:"sm"})}),e.jsx(l,{children:"Event name"}),e.jsx(l,{children:"Venue"}),e.jsx(l,{children:"Status"})]})}),e.jsx(j,{children:b.map(s=>e.jsxs(c,{selected:t.has(s.id),children:[e.jsx(n,{padding:"checkbox",children:e.jsx(L,{checked:t.has(s.id),onChange:()=>h(s.id),"aria-label":`Select ${s.name}`,size:"sm"})}),e.jsx(n,{children:s.name}),e.jsx(n,{children:s.venue}),e.jsx(n,{children:e.jsx(E,{label:s.status,color:k[s.status],variant:"soft",size:"sm"})})]},s.id))})]})]})}},R={name:"Sortable headers",render:i=>{const[t,d]=x.useState("name"),[o,p]=x.useState("asc"),u=r=>{t===r?p(m=>m==="asc"?"desc":"asc"):(d(r),p("asc"))},h=r=>t===r?o:!1,s=[...b].sort((r,m)=>{const g=r[t]<m[t]?-1:r[t]>m[t]?1:0;return o==="asc"?g:-g});return e.jsxs(T,{...i,children:[e.jsx(C,{children:e.jsxs(c,{hover:!1,children:[e.jsx(l,{sortDirection:h("name"),onSort:()=>u("name"),children:"Event name"}),e.jsx(l,{sortDirection:h("venue"),onSort:()=>u("venue"),children:"Venue"}),e.jsx(l,{sortDirection:h("date"),onSort:()=>u("date"),children:"Date"}),e.jsx(l,{children:"Status"})]})}),e.jsx(j,{children:s.map(r=>e.jsxs(c,{children:[e.jsx(n,{children:r.name}),e.jsx(n,{children:r.venue}),e.jsx(n,{children:r.date}),e.jsx(n,{children:e.jsx(E,{label:r.status,color:k[r.status],variant:"soft",size:"sm"})})]},r.id))})]})}},F={name:"Loading state",render:i=>e.jsxs(T,{...i,children:[e.jsx(C,{children:e.jsxs(c,{hover:!1,children:[e.jsx(l,{children:"Event name"}),e.jsx(l,{children:"Venue"}),e.jsx(l,{children:"Date"}),e.jsx(l,{children:"Status"})]})}),e.jsx(j,{children:Array.from({length:5}).map((o,p)=>e.jsx(c,{hover:!1,children:Array.from({length:4}).map((u,h)=>e.jsx(n,{children:e.jsx(ge,{variant:"text",width:`${60+(p+h*3)%4*10}%`})},h))},`skeleton-${p}`))})]})},B={name:"Empty state",render:i=>e.jsxs(T,{...i,children:[e.jsx(C,{children:e.jsxs(c,{hover:!1,children:[e.jsx(l,{children:"Event name"}),e.jsx(l,{children:"Venue"}),e.jsx(l,{children:"Date"}),e.jsx(l,{children:"Status"})]})}),e.jsx(j,{children:e.jsx(c,{hover:!1,children:e.jsx(n,{colSpan:4,padding:"none",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12,padding:"48px 24px",textAlign:"center"},children:[e.jsx(y,{name:"calendar",size:"lg",label:"No events"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:600,fontSize:"1rem",marginBottom:4},children:"No events yet"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"var(--ep-semantic-color-text-secondary)"},children:"Create your first event to start managing your calendar."})]}),e.jsx(v,{variant:"contained",size:"sm",children:"Create event"})]})})})})]})},A={name:"With row actions",render:i=>{const[t,d]=x.useState(null);return e.jsxs("div",{children:[e.jsxs(T,{...i,children:[e.jsx(C,{children:e.jsxs(c,{hover:!1,children:[e.jsx(l,{children:"Event name"}),e.jsx(l,{children:"Venue"}),e.jsx(l,{children:"Status"}),e.jsx(l,{padding:"none",align:"right"})]})}),e.jsx(j,{children:b.map(o=>e.jsxs(c,{children:[e.jsx(n,{children:o.name}),e.jsx(n,{children:o.venue}),e.jsx(n,{children:e.jsx(E,{label:o.status,color:k[o.status],variant:"soft",size:"sm"})}),e.jsx(n,{padding:"none",align:"right",children:e.jsx(v,{variant:"text",size:"sm","aria-label":"Row actions",onClick:p=>d({el:p.currentTarget,id:o.id}),children:e.jsx(y,{name:"more-vertical",size:"sm"})})})]},o.id))})]}),e.jsxs(me,{anchorEl:(t==null?void 0:t.el)??null,open:!!t,onClose:()=>d(null),children:[e.jsxs(z,{onClick:()=>d(null),children:[e.jsx(y,{name:"edit",size:"sm"}),"Edit event"]}),e.jsxs(z,{onClick:()=>d(null),children:[e.jsx(y,{name:"visibility",size:"sm"}),"View details"]}),e.jsx(pe,{}),e.jsxs(z,{onClick:()=>d(null),children:[e.jsx(y,{name:"delete",size:"sm"}),"Delete event"]})]})]})}},D={name:"Full featured",render:i=>{const[t,d]=x.useState(new Set),[o,p]=x.useState("name"),[u,h]=x.useState("asc"),[s,r]=x.useState(1),[m,g]=x.useState(null),O=t.size===b.length,be=t.size>0&&t.size<b.length,he=()=>d(O?new Set:new Set(b.map(a=>a.id))),ue=a=>d(S=>{const f=new Set(S);return f.has(a)?f.delete(a):f.add(a),f}),N=a=>{o===a?h(S=>S==="asc"?"desc":"asc"):(p(a),h("asc"))},_=a=>o===a?u:!1,xe=[...b].sort((a,S)=>{const f=a[o]<S[o]?-1:a[o]>S[o]?1:0;return u==="asc"?f:-f});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(ce,{title:"Events",selectionCount:t.size,selectionTitle:`${t.size} row${t.size!==1?"s":""} selected`,actions:e.jsxs(e.Fragment,{children:[e.jsx(v,{variant:"outlined",size:"sm",startSlot:e.jsx(y,{name:"download",size:"sm"}),children:"Export"}),e.jsx(v,{variant:"contained",size:"sm",startSlot:e.jsx(y,{name:"add",size:"sm"}),children:"Create event"})]}),selectionActions:e.jsx(v,{variant:"outlined",size:"sm",color:"error",children:"Delete selected"})}),e.jsxs(T,{...i,children:[e.jsx(C,{children:e.jsxs(c,{hover:!1,children:[e.jsx(l,{padding:"checkbox",children:e.jsx(L,{checked:O,indeterminate:be,onChange:he,"aria-label":"Select all rows",size:"sm"})}),e.jsx(l,{sortDirection:_("name"),onSort:()=>N("name"),children:"Event name"}),e.jsx(l,{sortDirection:_("venue"),onSort:()=>N("venue"),children:"Venue"}),e.jsx(l,{sortDirection:_("date"),onSort:()=>N("date"),children:"Date"}),e.jsx(l,{padding:"none",align:"right"})]})}),e.jsx(j,{children:xe.map(a=>e.jsxs(c,{selected:t.has(a.id),children:[e.jsx(n,{padding:"checkbox",children:e.jsx(L,{checked:t.has(a.id),onChange:()=>ue(a.id),"aria-label":`Select ${a.name}`,size:"sm"})}),e.jsx(n,{children:a.name}),e.jsx(n,{children:a.venue}),e.jsx(n,{children:a.date}),e.jsx(n,{padding:"none",align:"right",children:e.jsx(v,{variant:"text",size:"sm","aria-label":"Row actions",onClick:S=>g({el:S.currentTarget,id:a.id}),children:e.jsx(y,{name:"more-vertical",size:"sm"})})})]},a.id))})]}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:12},children:e.jsx(Te,{count:Math.ceil(b.length/10)||1,page:s,onChange:a=>r(a),variant:"outlined",shape:"rounded"})}),e.jsxs(me,{anchorEl:(m==null?void 0:m.el)??null,open:!!m,onClose:()=>g(null),children:[e.jsx(z,{onClick:()=>g(null),children:"Edit event"}),e.jsx(z,{onClick:()=>g(null),children:"Duplicate"}),e.jsx(pe,{}),e.jsx(z,{onClick:()=>g(null),children:"Delete event"})]})]})}},M={name:"Token Audit (DevTools)",parameters:{layout:"padded"},render:()=>{const i=[{name:"--ep-component-table-background",type:"color"},{name:"--ep-component-table-border-color",type:"color"},{name:"--ep-component-table-border-radius",type:"size"},{name:"--ep-component-table-header-background",type:"color"},{name:"--ep-component-table-header-color",type:"color"},{name:"--ep-component-table-header-font-size",type:"size"},{name:"--ep-component-table-header-font-weight",type:"number"},{name:"--ep-component-table-header-padding-sm-y",type:"size"},{name:"--ep-component-table-header-padding-sm-x",type:"size"},{name:"--ep-component-table-header-padding-md-y",type:"size"},{name:"--ep-component-table-header-padding-md-x",type:"size"},{name:"--ep-component-table-header-padding-lg-y",type:"size"},{name:"--ep-component-table-header-padding-lg-x",type:"size"},{name:"--ep-component-table-header-sort-icon-color",type:"color"},{name:"--ep-component-table-header-sort-icon-color-active",type:"color"},{name:"--ep-component-table-row-background",type:"color"},{name:"--ep-component-table-row-background-hover",type:"color"},{name:"--ep-component-table-row-background-selected",type:"color"},{name:"--ep-component-table-row-background-selected-hover",type:"color"},{name:"--ep-component-table-row-border-color",type:"color"},{name:"--ep-component-table-cell-color",type:"color"},{name:"--ep-component-table-cell-font-size-sm",type:"size"},{name:"--ep-component-table-cell-font-size-md",type:"size"},{name:"--ep-component-table-cell-font-size-lg",type:"size"},{name:"--ep-component-table-cell-padding-sm-y",type:"size"},{name:"--ep-component-table-cell-padding-sm-x",type:"size"},{name:"--ep-component-table-cell-padding-md-y",type:"size"},{name:"--ep-component-table-cell-padding-md-x",type:"size"},{name:"--ep-component-table-cell-padding-lg-y",type:"size"},{name:"--ep-component-table-cell-padding-lg-x",type:"size"},{name:"--ep-component-table-padding-checkbox-y",type:"size"},{name:"--ep-component-table-padding-checkbox-x",type:"size"},{name:"--ep-component-table-toolbar-background",type:"color"},{name:"--ep-component-table-toolbar-selected-background",type:"color"},{name:"--ep-component-table-toolbar-padding-y",type:"size"},{name:"--ep-component-table-toolbar-padding-x",type:"size"},{name:"--ep-component-table-focus-ring-color",type:"color"},{name:"--ep-component-table-focus-ring-width",type:"size"},{name:"--ep-component-table-focus-ring-offset",type:"size"}];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("div",{style:{marginBottom:24,fontFamily:"system-ui",fontSize:14,fontWeight:600},children:["Table token audit — ",i.length," vars"]}),e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#F9FAFB",borderBottom:"2px solid #E5E7EB"},children:[e.jsx("th",{style:{textAlign:"left",padding:"6px 12px",fontFamily:"system-ui",fontSize:12,color:"#6B7280"},children:"CSS variable"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 12px",fontFamily:"system-ui",fontSize:12,color:"#6B7280"},children:"Resolved value"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 12px",fontFamily:"system-ui",fontSize:12,color:"#6B7280"},children:"Swatch"})]})}),e.jsx("tbody",{children:i.map(({name:t,type:d})=>e.jsxs("tr",{style:{borderBottom:"1px solid #F3F4F6"},children:[e.jsx("td",{style:{padding:"5px 12px",color:"#374151"},children:t}),e.jsx("td",{ref:o=>{if(o){const p=getComputedStyle(document.documentElement).getPropertyValue(t).trim();o.textContent=p||"(not set)"}},style:{padding:"5px 12px",color:"#6B7280"}}),e.jsx("td",{style:{padding:"5px 12px"},children:d==="color"&&e.jsx("span",{style:{display:"inline-block",width:20,height:20,borderRadius:4,background:`var(${t})`,border:"1px solid #E5E7EB",verticalAlign:"middle"}})})]},t))})]}),e.jsxs("div",{style:{marginTop:32},children:[e.jsx("div",{style:{fontFamily:"system-ui",fontSize:14,fontWeight:600,marginBottom:12},children:"Live render"}),e.jsxs(T,{size:"md",children:[e.jsx(C,{children:e.jsxs(c,{hover:!1,children:[e.jsx(l,{sortDirection:!1,onSort:()=>{},children:"Event"}),e.jsx(l,{children:"Venue"}),e.jsx(l,{children:"Status"})]})}),e.jsx(j,{children:b.slice(0,3).map(t=>e.jsxs(c,{children:[e.jsx(n,{children:t.name}),e.jsx(n,{children:t.venue}),e.jsx(n,{children:e.jsx(E,{label:t.status,color:k[t.status],variant:"soft",size:"sm"})})]},t.id))})]})]})]})}};var V,I,U;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Basic',
  render: args => <Table {...args}>
      <TableHead>
        <TableRow hover={false}>
          <TableHeaderCell>Event name</TableHeaderCell>
          <TableHeaderCell>Venue</TableHeaderCell>
          <TableHeaderCell>Date</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {SAMPLE_EVENTS.map(event => <TableRow key={event.id}>
            <TableCell>{event.name}</TableCell>
            <TableCell>{event.venue}</TableCell>
            <TableCell>{event.date}</TableCell>
            <TableCell>
              <Chip label={event.status} color={STATUS_COLORS[event.status]} variant="soft" size="sm" />
            </TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(U=(I=w.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var P,$,W;H.parameters={...H.parameters,docs:{...(P=H.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Selectable rows',
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = React.useState<Set<string>>(new Set());
    const allSelected = selected.size === SAMPLE_EVENTS.length;
    const someSelected = selected.size > 0 && selected.size < SAMPLE_EVENTS.length;
    const toggleAll = () => {
      setSelected(allSelected ? new Set() : new Set(SAMPLE_EVENTS.map(e => e.id)));
    };
    const toggleRow = (id: string) => {
      setSelected(prev => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      });
    };
    return <div>
        <TableToolbar title="Events" selectionCount={selected.size} selectionTitle={\`\${selected.size} row\${selected.size !== 1 ? 's' : ''} selected\`} actions={<Button variant="outlined" size="sm">
              Export
            </Button>} selectionActions={<Button variant="outlined" size="sm" color="error">
              Delete selected
            </Button>} />
        <Table {...args}>
          <TableHead>
            <TableRow hover={false}>
              <TableHeaderCell padding="checkbox">
                <Checkbox checked={allSelected} indeterminate={someSelected} onChange={toggleAll} aria-label="Select all rows" size="sm" />
              </TableHeaderCell>
              <TableHeaderCell>Event name</TableHeaderCell>
              <TableHeaderCell>Venue</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SAMPLE_EVENTS.map(event => <TableRow key={event.id} selected={selected.has(event.id)}>
                <TableCell padding="checkbox">
                  <Checkbox checked={selected.has(event.id)} onChange={() => toggleRow(event.id)} aria-label={\`Select \${event.name}\`} size="sm" />
                </TableCell>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.venue}</TableCell>
                <TableCell>
                  <Chip label={event.status} color={STATUS_COLORS[event.status]} variant="soft" size="sm" />
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>;
  }
}`,...(W=($=H.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var K,G,J;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Sortable headers',
  render: args => {
    type SortField = 'name' | 'venue' | 'date';

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortField, setSortField] = React.useState<SortField>('name');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortDir, setSortDir] = React.useState<'asc' | 'desc'>('asc');
    const handleSort = (field: SortField) => {
      if (sortField === field) {
        setSortDir(d => d === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDir('asc');
      }
    };
    const dirFor = (field: SortField): SortDirection => sortField === field ? sortDir : false;
    const sorted = [...SAMPLE_EVENTS].sort((a, b) => {
      const val = a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0;
      return sortDir === 'asc' ? val : -val;
    });
    return <Table {...args}>
        <TableHead>
          <TableRow hover={false}>
            <TableHeaderCell sortDirection={dirFor('name')} onSort={() => handleSort('name')}>
              Event name
            </TableHeaderCell>
            <TableHeaderCell sortDirection={dirFor('venue')} onSort={() => handleSort('venue')}>
              Venue
            </TableHeaderCell>
            <TableHeaderCell sortDirection={dirFor('date')} onSort={() => handleSort('date')}>
              Date
            </TableHeaderCell>
            {/* Non-sortable column — no sortDirection or onSort */}
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sorted.map(event => <TableRow key={event.id}>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.venue}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>
                <Chip label={event.status} color={STATUS_COLORS[event.status]} variant="soft" size="sm" />
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...(J=(G=R.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Z,q,Q;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Loading state',
  render: args => {
    const COLUMN_COUNT = 4;
    const SKELETON_ROWS = 5;
    return <Table {...args}>
        <TableHead>
          <TableRow hover={false}>
            <TableHeaderCell>Event name</TableHeaderCell>
            <TableHeaderCell>Venue</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({
          length: SKELETON_ROWS
        }).map((_, i) =>
        // eslint-disable-next-line react/no-array-index-key
        <TableRow key={\`skeleton-\${i}\`} hover={false}>
              {Array.from({
            length: COLUMN_COUNT
          }).map((__, j) =>
          // eslint-disable-next-line react/no-array-index-key
          <TableCell key={j}>
                  {/* Width varies to mimic realistic content widths */}
                  <Skeleton variant="text" width={\`\${60 + (i + j * 3) % 4 * 10}%\`} />
                </TableCell>)}
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...(Q=(q=F.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var X,Y,ee;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Empty state',
  render: args => {
    const COLUMN_COUNT = 4;
    return <Table {...args}>
        <TableHead>
          <TableRow hover={false}>
            <TableHeaderCell>Event name</TableHeaderCell>
            <TableHeaderCell>Venue</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={false}>
            <TableCell colSpan={COLUMN_COUNT} padding="none">
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
              padding: '48px 24px',
              textAlign: 'center'
            }}>
                <Icon name="calendar" size="lg" label="No events" />
                <div>
                  <div style={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  marginBottom: 4
                }}>
                    No events yet
                  </div>
                  <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--ep-semantic-color-text-secondary)'
                }}>
                    Create your first event to start managing your calendar.
                  </div>
                </div>
                <Button variant="contained" size="sm">
                  Create event
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  }
}`,...(ee=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,le,ne;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'With row actions',
  render: args => {
    // Single Menu instance anchored by row id — not one per row
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchor, setAnchor] = React.useState<{
      el: HTMLElement;
      id: string;
    } | null>(null);
    return <div>
        <Table {...args}>
          <TableHead>
            <TableRow hover={false}>
              <TableHeaderCell>Event name</TableHeaderCell>
              <TableHeaderCell>Venue</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell padding="none" align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {SAMPLE_EVENTS.map(event => <TableRow key={event.id}>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.venue}</TableCell>
                <TableCell>
                  <Chip label={event.status} color={STATUS_COLORS[event.status]} variant="soft" size="sm" />
                </TableCell>
                <TableCell padding="none" align="right">
                  <Button variant="text" size="sm" aria-label="Row actions" onClick={(e: React.MouseEvent<HTMLButtonElement>) => setAnchor({
                el: e.currentTarget,
                id: event.id
              })}>
                    <Icon name="more-vertical" size="sm" />
                  </Button>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>

        {/* Single Menu instance — open state gated by matching row id */}
        <Menu anchorEl={anchor?.el ?? null} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
          <MenuItem onClick={() => setAnchor(null)}>
            <Icon name="edit" size="sm" />
            Edit event
          </MenuItem>
          <MenuItem onClick={() => setAnchor(null)}>
            <Icon name="visibility" size="sm" />
            View details
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => setAnchor(null)}>
            <Icon name="delete" size="sm" />
            Delete event
          </MenuItem>
        </Menu>
      </div>;
  }
}`,...(ne=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ae,oe,se;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Full featured',
  render: args => {
    type SortField = 'name' | 'venue' | 'date';

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = React.useState<Set<string>>(new Set());
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortField, setSortField] = React.useState<SortField>('name');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortDir, setSortDir] = React.useState<'asc' | 'desc'>('asc');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = React.useState(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchor, setAnchor] = React.useState<{
      el: HTMLElement;
      id: string;
    } | null>(null);
    const allSelected = selected.size === SAMPLE_EVENTS.length;
    const someSelected = selected.size > 0 && selected.size < SAMPLE_EVENTS.length;
    const toggleAll = () => setSelected(allSelected ? new Set() : new Set(SAMPLE_EVENTS.map(e => e.id)));
    const toggleRow = (id: string) => setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
    const handleSort = (field: SortField) => {
      if (sortField === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc');else {
        setSortField(field);
        setSortDir('asc');
      }
    };
    const dirFor = (field: SortField): SortDirection => sortField === field ? sortDir : false;
    const sorted = [...SAMPLE_EVENTS].sort((a, b) => {
      const v = a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0;
      return sortDir === 'asc' ? v : -v;
    });

    // 5 columns: checkbox + name + venue + status + actions
    const COLUMN_COUNT = 5;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }}>
        <TableToolbar title="Events" selectionCount={selected.size} selectionTitle={\`\${selected.size} row\${selected.size !== 1 ? 's' : ''} selected\`} actions={<>
              <Button variant="outlined" size="sm" startSlot={<Icon name="download" size="sm" />}>
                Export
              </Button>
              <Button variant="contained" size="sm" startSlot={<Icon name="add" size="sm" />}>
                Create event
              </Button>
            </>} selectionActions={<Button variant="outlined" size="sm" color="error">
              Delete selected
            </Button>} />

        <Table {...args}>
          <TableHead>
            <TableRow hover={false}>
              <TableHeaderCell padding="checkbox">
                <Checkbox checked={allSelected} indeterminate={someSelected} onChange={toggleAll} aria-label="Select all rows" size="sm" />
              </TableHeaderCell>
              <TableHeaderCell sortDirection={dirFor('name')} onSort={() => handleSort('name')}>Event name</TableHeaderCell>
              <TableHeaderCell sortDirection={dirFor('venue')} onSort={() => handleSort('venue')}>Venue</TableHeaderCell>
              <TableHeaderCell sortDirection={dirFor('date')} onSort={() => handleSort('date')}>Date</TableHeaderCell>
              <TableHeaderCell padding="none" align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {sorted.map(event => <TableRow key={event.id} selected={selected.has(event.id)}>
                <TableCell padding="checkbox">
                  <Checkbox checked={selected.has(event.id)} onChange={() => toggleRow(event.id)} aria-label={\`Select \${event.name}\`} size="sm" />
                </TableCell>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.venue}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell padding="none" align="right">
                  <Button variant="text" size="sm" aria-label="Row actions" onClick={(e: React.MouseEvent<HTMLButtonElement>) => setAnchor({
                el: e.currentTarget,
                id: event.id
              })}>
                    <Icon name="more-vertical" size="sm" />
                  </Button>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>

        <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: 12
      }}>
          <Pagination count={Math.ceil(SAMPLE_EVENTS.length / 10) || 1} page={page} onChange={p => setPage(p)} variant="outlined" shape="rounded" />
        </div>

        <Menu anchorEl={anchor?.el ?? null} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
          <MenuItem onClick={() => setAnchor(null)}>Edit event</MenuItem>
          <MenuItem onClick={() => setAnchor(null)}>Duplicate</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => setAnchor(null)}>Delete event</MenuItem>
        </Menu>
      </div>;
  }
}`,...(se=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ie,de;M.parameters={...M.parameters,docs:{...(re=M.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const vars: Array<{
      name: string;
      type: 'color' | 'size' | 'number';
    }> = [{
      name: '--ep-component-table-background',
      type: 'color'
    }, {
      name: '--ep-component-table-border-color',
      type: 'color'
    }, {
      name: '--ep-component-table-border-radius',
      type: 'size'
    }, {
      name: '--ep-component-table-header-background',
      type: 'color'
    }, {
      name: '--ep-component-table-header-color',
      type: 'color'
    }, {
      name: '--ep-component-table-header-font-size',
      type: 'size'
    }, {
      name: '--ep-component-table-header-font-weight',
      type: 'number'
    }, {
      name: '--ep-component-table-header-padding-sm-y',
      type: 'size'
    }, {
      name: '--ep-component-table-header-padding-sm-x',
      type: 'size'
    }, {
      name: '--ep-component-table-header-padding-md-y',
      type: 'size'
    }, {
      name: '--ep-component-table-header-padding-md-x',
      type: 'size'
    }, {
      name: '--ep-component-table-header-padding-lg-y',
      type: 'size'
    }, {
      name: '--ep-component-table-header-padding-lg-x',
      type: 'size'
    }, {
      name: '--ep-component-table-header-sort-icon-color',
      type: 'color'
    }, {
      name: '--ep-component-table-header-sort-icon-color-active',
      type: 'color'
    }, {
      name: '--ep-component-table-row-background',
      type: 'color'
    }, {
      name: '--ep-component-table-row-background-hover',
      type: 'color'
    }, {
      name: '--ep-component-table-row-background-selected',
      type: 'color'
    }, {
      name: '--ep-component-table-row-background-selected-hover',
      type: 'color'
    }, {
      name: '--ep-component-table-row-border-color',
      type: 'color'
    }, {
      name: '--ep-component-table-cell-color',
      type: 'color'
    }, {
      name: '--ep-component-table-cell-font-size-sm',
      type: 'size'
    }, {
      name: '--ep-component-table-cell-font-size-md',
      type: 'size'
    }, {
      name: '--ep-component-table-cell-font-size-lg',
      type: 'size'
    }, {
      name: '--ep-component-table-cell-padding-sm-y',
      type: 'size'
    }, {
      name: '--ep-component-table-cell-padding-sm-x',
      type: 'size'
    }, {
      name: '--ep-component-table-cell-padding-md-y',
      type: 'size'
    }, {
      name: '--ep-component-table-cell-padding-md-x',
      type: 'size'
    }, {
      name: '--ep-component-table-cell-padding-lg-y',
      type: 'size'
    }, {
      name: '--ep-component-table-cell-padding-lg-x',
      type: 'size'
    }, {
      name: '--ep-component-table-padding-checkbox-y',
      type: 'size'
    }, {
      name: '--ep-component-table-padding-checkbox-x',
      type: 'size'
    }, {
      name: '--ep-component-table-toolbar-background',
      type: 'color'
    }, {
      name: '--ep-component-table-toolbar-selected-background',
      type: 'color'
    }, {
      name: '--ep-component-table-toolbar-padding-y',
      type: 'size'
    }, {
      name: '--ep-component-table-toolbar-padding-x',
      type: 'size'
    }, {
      name: '--ep-component-table-focus-ring-color',
      type: 'color'
    }, {
      name: '--ep-component-table-focus-ring-width',
      type: 'size'
    }, {
      name: '--ep-component-table-focus-ring-offset',
      type: 'size'
    }];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <div style={{
        marginBottom: 24,
        fontFamily: 'system-ui',
        fontSize: 14,
        fontWeight: 600
      }}>
          Table token audit — {vars.length} vars
        </div>
        <table style={{
        borderCollapse: 'collapse',
        width: '100%'
      }}>
          <thead>
            <tr style={{
            background: '#F9FAFB',
            borderBottom: '2px solid #E5E7EB'
          }}>
              <th style={{
              textAlign: 'left',
              padding: '6px 12px',
              fontFamily: 'system-ui',
              fontSize: 12,
              color: '#6B7280'
            }}>CSS variable</th>
              <th style={{
              textAlign: 'left',
              padding: '6px 12px',
              fontFamily: 'system-ui',
              fontSize: 12,
              color: '#6B7280'
            }}>Resolved value</th>
              <th style={{
              textAlign: 'left',
              padding: '6px 12px',
              fontFamily: 'system-ui',
              fontSize: 12,
              color: '#6B7280'
            }}>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {vars.map(({
            name,
            type
          }) => <tr key={name} style={{
            borderBottom: '1px solid #F3F4F6'
          }}>
                <td style={{
              padding: '5px 12px',
              color: '#374151'
            }}>{name}</td>
                <td ref={el => {
              if (el) {
                const val = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
                el.textContent = val || '(not set)';
              }
            }} style={{
              padding: '5px 12px',
              color: '#6B7280'
            }} />
                <td style={{
              padding: '5px 12px'
            }}>
                  {type === 'color' && <span style={{
                display: 'inline-block',
                width: 20,
                height: 20,
                borderRadius: 4,
                background: \`var(\${name})\`,
                border: '1px solid #E5E7EB',
                verticalAlign: 'middle'
              }} />}
                </td>
              </tr>)}
          </tbody>
        </table>

        <div style={{
        marginTop: 32
      }}>
          <div style={{
          fontFamily: 'system-ui',
          fontSize: 14,
          fontWeight: 600,
          marginBottom: 12
        }}>
            Live render
          </div>
          <Table size="md">
            <TableHead>
              <TableRow hover={false}>
                <TableHeaderCell sortDirection={false} onSort={() => {}}>Event</TableHeaderCell>
                <TableHeaderCell>Venue</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {SAMPLE_EVENTS.slice(0, 3).map(event => <TableRow key={event.id}>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.venue}</TableCell>
                  <TableCell>
                    <Chip label={event.status} color={STATUS_COLORS[event.status]} variant="soft" size="sm" />
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </div>
      </div>;
  }
}`,...(de=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const Ee=["Basic","SelectableRows","SortableHeaders","LoadingState","EmptyState","WithRowActions","FullFeatured","TokenAudit"];export{w as Basic,B as EmptyState,D as FullFeatured,F as LoadingState,H as SelectableRows,R as SortableHeaders,M as TokenAudit,A as WithRowActions,Ee as __namedExportsOrder,ze as default};

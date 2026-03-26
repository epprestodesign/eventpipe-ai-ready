import{j as t}from"./jsx-runtime-BT65X5dW.js";import{r as y}from"./index-C6mWTJJr.js";import{u as n,v as fe}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const je={title:"Components/Data/DataGrid",component:n,parameters:{layout:"padded",docs:{description:{component:"DataGrid — production-ready data table built by composing Table, FilterBar, Pagination, Checkbox, and Menu. Patterns: B (selection), C (bulk toolbar state), E (loading), F (empty). Sorting and pagination are client-side by default."}}}},s=[{id:"e1",name:"Summer Gala 2026",date:"2026-07-12",venue:"Grand Ballroom",capacity:500,status:"published"},{id:"e2",name:"Tech Summit SF",date:"2026-08-03",venue:"Convention Center",capacity:1200,status:"published"},{id:"e3",name:"Q3 Team Offsite",date:"2026-09-15",venue:"Retreat Lodge",capacity:80,status:"draft"},{id:"e4",name:"Product Launch Party",date:"2026-10-01",venue:"Rooftop Venue",capacity:300,status:"published"},{id:"e5",name:"Annual Fundraiser",date:"2026-11-20",venue:"City Hall",capacity:750,status:"draft"},{id:"e6",name:"Design Conference",date:"2026-06-18",venue:"Museum Atrium",capacity:400,status:"cancelled"},{id:"e7",name:"Engineering All-Hands",date:"2026-07-30",venue:"HQ Auditorium",capacity:200,status:"published"},{id:"e8",name:"Investor Roundtable",date:"2026-08-14",venue:"Executive Suite",capacity:40,status:"draft"},{id:"e9",name:"Community Meetup",date:"2026-09-22",venue:"Co-Working Space",capacity:120,status:"published"},{id:"e10",name:"Hackathon Weekend",date:"2026-10-10",venue:"Innovation Lab",capacity:250,status:"published"},{id:"e11",name:"Holiday Party",date:"2026-12-19",venue:"Rooftop Venue",capacity:350,status:"draft"},{id:"e12",name:"Spring Kickoff",date:"2026-03-08",venue:"Grand Ballroom",capacity:600,status:"cancelled"}],Ce={published:{bg:"#D1FAE5",color:"#065F46"},draft:{bg:"#FEF3C7",color:"#92400E"},cancelled:{bg:"#FEE2E2",color:"#991B1B"}},Ae=({status:e})=>{const{bg:o,color:r}=Ce[e];return t.jsx("span",{style:{display:"inline-block",padding:"2px 8px",borderRadius:12,fontSize:11,fontWeight:600,background:o,color:r,textTransform:"capitalize"},children:e})},a=[{id:"name",header:"Event name",accessor:e=>e.name,sortable:!0},{id:"date",header:"Date",accessor:e=>e.date,sortable:!0,width:120},{id:"venue",header:"Venue",accessor:e=>e.venue,sortable:!0},{id:"capacity",header:"Capacity",accessor:e=>e.capacity,sortable:!0,align:"right",width:100},{id:"status",header:"Status",accessor:e=>e.status,sortable:!0,width:120,renderCell:e=>t.jsx(Ae,{status:e.status})}],Ee=[{id:"edit",label:"Edit event",icon:"edit",onClick:e=>alert(`Edit: ${e.name}`)},{id:"duplicate",label:"Duplicate",icon:"add",onClick:e=>alert(`Duplicate: ${e.name}`)},{id:"delete",label:"Delete event",icon:"delete",onClick:e=>alert(`Delete: ${e.name}`),destructive:!0}],d={render:()=>t.jsx(n,{rows:s.slice(0,6),columns:a,getRowId:e=>e.id,title:"Events"})},c={render:()=>t.jsx(n,{rows:s,columns:a,getRowId:e=>e.id,title:"Events",sortable:!0})},l={render:()=>{const[e,o]=y.useState(new Set);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:8,fontSize:13,color:"#6B7280"},children:["Selected IDs: ",e.size===0?"none":[...e].join(", ")]}),t.jsx(n,{rows:s.slice(0,6),columns:a,getRowId:r=>r.id,selectable:!0,onSelectionChange:o})]})}},p={render:()=>{const[e,o]=y.useState(new Set);return t.jsx(n,{rows:s.slice(0,6),columns:a,getRowId:r=>r.id,title:"Events",toolbarActions:t.jsx("button",{style:{padding:"6px 12px",borderRadius:4,border:"1px solid #E5E7EB",cursor:"pointer",fontSize:13},onClick:()=>alert("Export"),children:"Export"}),selectable:!0,onSelectionChange:o})},parameters:{docs:{description:{story:"Select one or more rows to see the toolbar switch to the selected-background token. Pattern C: state-driven visual affordance via selectionCount."}}}},u={render:()=>{const[e,o]=y.useState(""),r=s.filter(i=>e===""||i.name.toLowerCase().includes(e.toLowerCase())||i.venue.toLowerCase().includes(e.toLowerCase()));return t.jsx(n,{rows:r,columns:a,getRowId:i=>i.id,filterBar:t.jsx(fe,{onSearchChange:o,searchPlaceholder:"Search events or venues…"}),emptyMessage:"No events match your search",selectable:!0,sortable:!0})}},m={render:()=>{const[e,o]=y.useState(1);return t.jsx(n,{rows:s,columns:a,getRowId:r=>r.id,title:"All events",sortable:!0,pagination:!0,pageSize:4,page:e,onPageChange:o})}},g={render:()=>t.jsx(n,{rows:[],columns:a,getRowId:e=>e.id,title:"Events",selectable:!0,loading:!0})},b={render:()=>t.jsx(n,{rows:[],columns:a,getRowId:e=>e.id,title:"Events",emptyMessage:"No events found"})},S={render:()=>t.jsx(n,{rows:s.slice(0,5),columns:a,getRowId:e=>e.id,title:"Events",rowActions:Ee})},h={parameters:{docs:{description:{story:'- `<table>` with `<thead>` / `<tbody>` provides correct grid semantics.\n- Select-all checkbox: `aria-label="Select all rows on this page"`.\n- Row checkboxes: `aria-label="Select row {id}"`.\n- Row action trigger: `aria-label="Row actions"`.\n- Toolbar: `role="toolbar"` + `aria-live="polite"` (from TableToolbar).\n- Sort headers: `aria-sort` derived from `sortDirection` (from TableHeaderCell).\n- Keyboard: Tab/Enter/Space for checkboxes, Enter for sort headers.'}}},render:()=>t.jsx(n,{rows:s.slice(0,5),columns:a,getRowId:e=>e.id,title:"Events",selectable:!0,sortable:!0,rowActions:Ee})},w={parameters:{docs:{description:{story:"DataGrid adds 10 component tokens. Row/cell/header/toolbar tokens delegate to `--ep-component-table-*`."}}},render:()=>{const e=["--ep-component-data-grid-container-background","--ep-component-data-grid-container-border-color","--ep-component-data-grid-container-border-radius","--ep-component-data-grid-footer-padding-y","--ep-component-data-grid-footer-padding-x","--ep-component-data-grid-footer-border-color","--ep-component-data-grid-empty-padding-y","--ep-component-data-grid-empty-color","--ep-component-data-grid-empty-font-size","--ep-component-data-grid-actions-column-width"];return t.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[t.jsx("div",{style:{marginBottom:16,fontWeight:700,fontSize:14},children:"DataGrid — 10 component tokens"}),t.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{borderBottom:"2px solid #E5E7EB"},children:[t.jsx("th",{style:{textAlign:"left",padding:"6px 12px",color:"#6B7280"},children:"#"}),t.jsx("th",{style:{textAlign:"left",padding:"6px 12px",color:"#6B7280"},children:"Token"}),t.jsx("th",{style:{textAlign:"left",padding:"6px 12px",color:"#6B7280"},children:"Resolved value"})]})}),t.jsx("tbody",{children:e.map((o,r)=>t.jsxs("tr",{style:{borderBottom:"1px solid #F3F4F6"},children:[t.jsx("td",{style:{padding:"5px 12px",color:"#9CA3AF"},children:r+1}),t.jsx("td",{style:{padding:"5px 12px",color:"#374151"},children:o}),t.jsx("td",{style:{padding:"5px 12px",color:"#6B7280"},children:t.jsx("span",{ref:i=>{if(i){const xe=getComputedStyle(document.documentElement).getPropertyValue(o).trim();i.textContent=xe||"(not resolved)"}}})})]},o))})]})]})}};var v,E,x,f,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <DataGrid<EventRow> rows={SAMPLE_EVENTS.slice(0, 6)} columns={BASE_COLUMNS} getRowId={r => r.id} title="Events" />
}`,...(x=(E=d.parameters)==null?void 0:E.docs)==null?void 0:x.source},description:{story:"Default — read-only DataGrid with no interactive features enabled.",...(C=(f=d.parameters)==null?void 0:f.docs)==null?void 0:C.description}}};var A,R,k,B,T;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <DataGrid<EventRow> rows={SAMPLE_EVENTS} columns={BASE_COLUMNS} getRowId={r => r.id} title="Events" sortable />
}`,...(k=(R=c.parameters)==null?void 0:R.docs)==null?void 0:k.source},description:{story:`Sorting — all columns sortable. Click a header to sort, click again to reverse.
Arrow icons follow the existing TableHeaderCell sort pattern (Wave 3A).`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.description}}};var D,L,j,P,M;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    return <div>
        <div style={{
        marginBottom: 8,
        fontSize: 13,
        color: '#6B7280'
      }}>
          Selected IDs: {selected.size === 0 ? 'none' : [...selected].join(', ')}
        </div>
        <DataGrid<EventRow> rows={SAMPLE_EVENTS.slice(0, 6)} columns={BASE_COLUMNS} getRowId={r => r.id} selectable onSelectionChange={setSelected} />
      </div>;
  }
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source},description:{story:`Selection — row checkboxes + select-all. Selection state is internal;
onSelectionChange fires on every change with the full Set<string>.`,...(M=(P=l.parameters)==null?void 0:P.docs)==null?void 0:M.description}}};var F,I,N,_,G;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    return <DataGrid<EventRow> rows={SAMPLE_EVENTS.slice(0, 6)} columns={BASE_COLUMNS} getRowId={r => r.id} title="Events" toolbarActions={<button style={{
      padding: '6px 12px',
      borderRadius: 4,
      border: '1px solid #E5E7EB',
      cursor: 'pointer',
      fontSize: 13
    }} onClick={() => alert('Export')}>
            Export
          </button>} selectable onSelectionChange={setSelected} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Select one or more rows to see the toolbar switch to the selected-background ' + 'token. Pattern C: state-driven visual affordance via selectionCount.'
      }
    }
  }
}`,...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.source},description:{story:`BulkSelectionToolbar — Pattern C: toolbar background switches to selectedBackground
token when selectionCount > 0. Bulk "Clear selection" button resets state.`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.description}}};var O,z,W,V,U;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState('');
    const filtered = SAMPLE_EVENTS.filter(e => search === '' || e.name.toLowerCase().includes(search.toLowerCase()) || e.venue.toLowerCase().includes(search.toLowerCase()));
    return <DataGrid<EventRow> rows={filtered} columns={BASE_COLUMNS} getRowId={r => r.id} filterBar={<FilterBar onSearchChange={setSearch} searchPlaceholder="Search events or venues…" />} emptyMessage="No events match your search" selectable sortable />;
  }
}`,...(W=(z=u.parameters)==null?void 0:z.docs)==null?void 0:W.source},description:{story:`WithFilters — FilterBar slot rendered above the Table.
DataGrid does not manage filter state — consumer provides a configured FilterBar.`,...(U=(V=u.parameters)==null?void 0:V.docs)==null?void 0:U.description}}};var H,K,$,Q,q;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <DataGrid<EventRow> rows={SAMPLE_EVENTS} columns={BASE_COLUMNS} getRowId={r => r.id} title="All events" sortable pagination pageSize={4} page={page} onPageChange={setPage} />;
  }
}`,...($=(K=m.parameters)==null?void 0:K.docs)==null?void 0:$.source},description:{story:`WithPagination — client-side pagination slices the rows array.
Pagination controls appear when pageCount > 1.`,...(q=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:q.description}}};var J,X,Y,Z,ee;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <DataGrid<EventRow> rows={[]} columns={BASE_COLUMNS} getRowId={r => r.id} title="Events" selectable loading />
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Loading — isLoading=true renders skeleton rows (Pattern E).
Column count and selection column are respected in skeleton layout.`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,oe,re,ne,ae;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <DataGrid<EventRow> rows={[]} columns={BASE_COLUMNS} getRowId={r => r.id} title="Events" emptyMessage="No events found" />
}`,...(re=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:re.source},description:{story:`Empty — no rows, loading=false renders empty state (Pattern F).
Full-width row with search icon and emptyMessage.`,...(ae=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};var se,ie,de,ce,le;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <DataGrid<EventRow> rows={SAMPLE_EVENTS.slice(0, 5)} columns={BASE_COLUMNS} getRowId={r => r.id} title="Events" rowActions={ROW_ACTIONS} />
}`,...(de=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:de.source},description:{story:`RowActions — per-row ⋮ button opens a Menu. Non-destructive actions first;
destructive (Delete) after MenuDivider. One Menu instance per grid.`,...(le=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};var pe,ue,me,ge,be;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '- \`<table>\` with \`<thead>\` / \`<tbody>\` provides correct grid semantics.\\n' + '- Select-all checkbox: \`aria-label="Select all rows on this page"\`.\\n' + '- Row checkboxes: \`aria-label="Select row {id}"\`.\\n' + '- Row action trigger: \`aria-label="Row actions"\`.\\n' + '- Toolbar: \`role="toolbar"\` + \`aria-live="polite"\` (from TableToolbar).\\n' + '- Sort headers: \`aria-sort\` derived from \`sortDirection\` (from TableHeaderCell).\\n' + '- Keyboard: Tab/Enter/Space for checkboxes, Enter for sort headers.'
      }
    }
  },
  render: () => <DataGrid<EventRow> rows={SAMPLE_EVENTS.slice(0, 5)} columns={BASE_COLUMNS} getRowId={r => r.id} title="Events" selectable sortable rowActions={ROW_ACTIONS} />
}`,...(me=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:`Accessibility — annotates ARIA structure.
- Table has implicit role="grid" via semantics
- Select-all: aria-label="Select all rows on this page"
- Row checkboxes: aria-label="Select row {id}"
- Row actions trigger: aria-label="Row actions"
- Bulk toolbar: role="toolbar" + aria-live="polite"`,...(be=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};var Se,he,we,ye,ve;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'DataGrid adds 10 component tokens. ' + 'Row/cell/header/toolbar tokens delegate to \`--ep-component-table-*\`.'
      }
    }
  },
  render: () => {
    const tokens = ['--ep-component-data-grid-container-background', '--ep-component-data-grid-container-border-color', '--ep-component-data-grid-container-border-radius', '--ep-component-data-grid-footer-padding-y', '--ep-component-data-grid-footer-padding-x', '--ep-component-data-grid-footer-border-color', '--ep-component-data-grid-empty-padding-y', '--ep-component-data-grid-empty-color', '--ep-component-data-grid-empty-font-size', '--ep-component-data-grid-actions-column-width'];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <div style={{
        marginBottom: 16,
        fontWeight: 700,
        fontSize: 14
      }}>
          DataGrid — 10 component tokens
        </div>
        <table style={{
        borderCollapse: 'collapse',
        width: '100%'
      }}>
          <thead>
            <tr style={{
            borderBottom: '2px solid #E5E7EB'
          }}>
              <th style={{
              textAlign: 'left',
              padding: '6px 12px',
              color: '#6B7280'
            }}>#</th>
              <th style={{
              textAlign: 'left',
              padding: '6px 12px',
              color: '#6B7280'
            }}>Token</th>
              <th style={{
              textAlign: 'left',
              padding: '6px 12px',
              color: '#6B7280'
            }}>Resolved value</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token, i) => <tr key={token} style={{
            borderBottom: '1px solid #F3F4F6'
          }}>
                <td style={{
              padding: '5px 12px',
              color: '#9CA3AF'
            }}>{i + 1}</td>
                <td style={{
              padding: '5px 12px',
              color: '#374151'
            }}>{token}</td>
                <td style={{
              padding: '5px 12px',
              color: '#6B7280'
            }}>
                  <span ref={el => {
                if (el) {
                  const v = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
                  el.textContent = v || '(not resolved)';
                }
              }} />
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...(we=(he=w.parameters)==null?void 0:he.docs)==null?void 0:we.source},description:{story:`TokenAudit — all 10 DataGrid component tokens.
Row/cell/header tokens are in the Table namespace and not duplicated here.`,...(ve=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:ve.description}}};const Pe=["Default","Sorting","Selection","BulkSelectionToolbar","WithFilters","WithPagination","Loading","Empty","RowActions","Accessibility","TokenAudit"];export{h as Accessibility,p as BulkSelectionToolbar,d as Default,b as Empty,g as Loading,S as RowActions,l as Selection,c as Sorting,w as TokenAudit,u as WithFilters,m as WithPagination,Pe as __namedExportsOrder,je as default};

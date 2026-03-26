import{j as e}from"./jsx-runtime-BT65X5dW.js";import{r as i}from"./index-C6mWTJJr.js";import{v as d,B as f,I as R,G as he,H as me,J as C,K as F,M as ve,N as v,O as fe,s as ye}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const Ae={title:"Components/Surfaces/FilterBar",component:d,parameters:{layout:"padded",docs:{description:{component:"FilterBar composes search input, dropdown selects, and active filter chips into a unified surface. Patterns used: MA-1 (FilterChip), MA-2 (debounced search), MA-3 (async options), C (toolbar state), E (loading), F (empty)."}}}},b=[{id:"1",name:"Summit 2025",venue:"Madison Square Garden",status:"upcoming",type:"conference"},{id:"2",name:"Product Launch",venue:"Javits Center",status:"live",type:"launch"},{id:"3",name:"Q4 Kickoff",venue:"The Shed",status:"completed",type:"internal"},{id:"4",name:"Spring Workshop",venue:"WeWork SOHO",status:"upcoming",type:"workshop"},{id:"5",name:"Annual Gala",venue:"Cipriani 42nd Street",status:"cancelled",type:"gala"},{id:"6",name:"Dev Conf",venue:"Javits Center",status:"upcoming",type:"conference"}],ge={upcoming:"neutral",live:"success",completed:"neutral",cancelled:"error"},y=({events:s,isLoading:r})=>e.jsxs(he,{size:"md",children:[e.jsx(me,{children:e.jsxs(C,{children:[e.jsx(F,{children:"Name"}),e.jsx(F,{children:"Venue"}),e.jsx(F,{children:"Type"}),e.jsx(F,{children:"Status"})]})}),e.jsx(ve,{children:r?Array.from({length:4}).map((t,n)=>e.jsx(C,{hover:!1,children:[120,100,80,80].map((l,c)=>e.jsx(v,{children:e.jsx(fe,{variant:"text",width:l})},c))},n)):s.length===0?e.jsx(C,{hover:!1,children:e.jsx(v,{colSpan:4,align:"center",padding:"none",children:e.jsxs("div",{style:{padding:"40px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[e.jsx(R,{name:"filter",size:"lg"}),e.jsx("div",{style:{fontWeight:600},children:"No events match the filters"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"var(--ep-semantic-color-text-secondary)"},children:"Try removing some filters to see more results."})]})})}):s.map(t=>e.jsxs(C,{children:[e.jsx(v,{children:t.name}),e.jsx(v,{children:t.venue}),e.jsx(v,{children:t.type}),e.jsx(v,{children:e.jsx(ye,{label:t.status,variant:"soft",color:ge[t.status],size:"sm"})})]},t.id))})]}),T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(d,{actions:e.jsx(f,{variant:"outlined",size:"sm",startSlot:e.jsx(R,{name:"download",size:"sm"}),children:"Export"})}),e.jsx(y,{events:b})]}),parameters:{docs:{description:{story:"FilterBar with only the actions slot. No search or filters."}}}},A={render:()=>{const[s,r]=i.useState(""),t=b.filter(n=>n.name.toLowerCase().includes(s.toLowerCase())||n.venue.toLowerCase().includes(s.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(d,{searchValue:s,onSearchChange:r,searchPlaceholder:"Search events...",searchDebounceMs:300,actions:e.jsx(f,{variant:"outlined",size:"sm",children:"Export"})}),e.jsx(y,{events:t})]})},parameters:{docs:{description:{story:"Search field with MA-2 debounce (300ms). The table filters in real-time. Pattern F empty state appears when no events match."}}}},j={render:()=>{const[s,r]=i.useState(""),[t,n]=i.useState([{id:"status-live",label:"Status: Live",onRemove:()=>{}},{id:"type-conference",label:"Type: Conference",onRemove:()=>{}}]),l=t.map(o=>({...o,onRemove:()=>n(p=>p.filter(u=>u.id!==o.id))})),c=b.filter(o=>{if(s&&!o.name.toLowerCase().includes(s.toLowerCase()))return!1;const p=l.find(g=>g.id.startsWith("status-"));if(p&&!p.label.includes(o.status))return!1;const u=l.find(g=>g.id.startsWith("type-"));return!(u&&!u.label.toLowerCase().includes(o.type))});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(d,{searchValue:s,onSearchChange:r,searchPlaceholder:"Search events...",activeFilters:l,onClearAll:()=>n([]),actions:e.jsx(f,{variant:"outlined",size:"sm",startSlot:e.jsx(R,{name:"filter",size:"sm"}),children:"Add filter"})}),e.jsx(y,{events:c})]})},parameters:{docs:{description:{story:"Active filter chips using MA-1 FilterChip pattern. Each chip has an × to remove its filter. Clear all removes all chips."}}}},E={render:()=>{const[s,r]=i.useState(""),[t,n]=i.useState(""),[l,c]=i.useState(!0),[o,p]=i.useState(!0),[u,g]=i.useState([]),[V,le]=i.useState([]),[ie,S]=i.useState([]);i.useEffect(()=>{const a=setTimeout(()=>{g([{value:"upcoming",label:"Upcoming"},{value:"live",label:"Live"},{value:"completed",label:"Completed"},{value:"cancelled",label:"Cancelled"}]),c(!1)},1200);return()=>clearTimeout(a)},[]),i.useEffect(()=>{const a=setTimeout(()=>{le([{value:"conference",label:"Conference"},{value:"launch",label:"Launch"},{value:"workshop",label:"Workshop"},{value:"internal",label:"Internal"},{value:"gala",label:"Gala"}]),p(!1)},1800);return()=>clearTimeout(a)},[]);const oe=a=>{var h;r(a);const x=((h=u.find(m=>m.value===a))==null?void 0:h.label)??a;S(m=>[...m.filter(z=>!z.id.startsWith("status-")),{id:`status-${a}`,label:`Status: ${x}`,onRemove:()=>{}}])},ce=a=>{var h;n(a);const x=((h=V.find(m=>m.value===a))==null?void 0:h.label)??a;S(m=>[...m.filter(z=>!z.id.startsWith("type-")),{id:`type-${a}`,label:`Type: ${x}`,onRemove:()=>{}}])},de=ie.map(a=>({...a,onRemove:()=>S(x=>x.filter(h=>h.id!==a.id))})),pe=b.filter(a=>!(s&&a.status!==s||t&&a.type!==t)),ue=[{id:"status",label:"Status",options:u,value:s,onChange:oe,loading:l,placeholder:"All statuses"},{id:"type",label:"Type",options:V,value:t,onChange:ce,loading:o,placeholder:"All types"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(d,{selectFilters:ue,activeFilters:de,onClearAll:()=>{S([]),r(""),n("")}}),e.jsx(y,{events:pe})]})},parameters:{docs:{description:{story:"Select filters with MA-3 async option loading. Options arrive after 1.2s and 1.8s. Select shows spinner + blocks interaction while loading. Selecting an option creates an active FilterChip."}}}},L={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(d,{searchValue:"",onSearchChange:()=>{},isLoading:!0,actions:e.jsx(f,{variant:"outlined",size:"sm",disabled:!0,children:"Export"})}),e.jsx(y,{events:[],isLoading:!0})]}),parameters:{docs:{description:{story:"Pattern E: loading state. FilterBar chips area shows Skeleton placeholders. Table body also shows Skeleton rows (matched to page size)."}}}},k={render:()=>{const[s,r]=i.useState([{id:"status-cancelled",label:"Status: Cancelled",onRemove:()=>{}},{id:"type-gala",label:"Type: Gala",onRemove:()=>{}}]),t=s.map(l=>({...l,onRemove:()=>r(c=>c.filter(o=>o.id!==l.id))})),n=b.filter(l=>l.status==="cancelled"&&l.type==="gala");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(d,{activeFilters:t,onClearAll:()=>r([])}),e.jsx(y,{events:n})]})},parameters:{docs:{description:{story:'Pattern F: filtered empty state. Two active filters produce zero results. The "No events match" state renders inside a full-colSpan TableCell. Remove a chip or click Clear all to restore results.'}}}},w={render:()=>{const[s,r]=i.useState(""),[t,n]=i.useState([{id:"type-conference",label:"Type: Conference",onRemove:()=>{}}]),l=t.map(c=>({...c,onRemove:()=>n(o=>o.filter(p=>p.id!==c.id))}));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{fontSize:13,color:"var(--ep-semantic-color-text-secondary)",lineHeight:1.6},children:[e.jsx("strong",{children:"Keyboard behaviour:"}),e.jsxs("ul",{style:{margin:"4px 0 0",paddingLeft:20},children:[e.jsx("li",{children:"Tab → Search field"}),e.jsx("li",{children:"Tab → FilterChip (focus ring on chip)"}),e.jsx("li",{children:"Tab → × button on chip (delete chip)"}),e.jsx("li",{children:"Tab → Clear all button"}),e.jsx("li",{children:'aria-live="polite" announces active filter count to screen readers'}),e.jsx("li",{children:"FilterChip delete button has implicit aria-label from MUI Chip"})]})]}),e.jsx(d,{searchValue:s,onSearchChange:r,searchPlaceholder:"Search events...",activeFilters:l,onClearAll:()=>n([]),actions:e.jsx(f,{variant:"outlined",size:"sm",children:"Export"})})]})},parameters:{docs:{description:{story:'Demonstrates keyboard navigation and ARIA attributes. Tab through: search → chip → × button → clear all → actions. Filter count is announced via aria-live="polite".'}}}},O=[{token:"--ep-component-filter-bar-background",role:"Container background"},{token:"--ep-component-filter-bar-border-radius",role:"Container radius"},{token:"--ep-component-filter-bar-padding-sm-y",role:"Vertical padding (sm)"},{token:"--ep-component-filter-bar-padding-sm-x",role:"Horizontal padding (sm)"},{token:"--ep-component-filter-bar-padding-md-y",role:"Vertical padding (md)"},{token:"--ep-component-filter-bar-padding-md-x",role:"Horizontal padding (md)"},{token:"--ep-component-filter-bar-padding-lg-y",role:"Vertical padding (lg)"},{token:"--ep-component-filter-bar-padding-lg-x",role:"Horizontal padding (lg)"},{token:"--ep-component-filter-bar-gap-sm",role:"Element gap (sm)"},{token:"--ep-component-filter-bar-gap-md",role:"Element gap (md)"},{token:"--ep-component-filter-bar-gap-lg",role:"Element gap (lg)"},{token:"--ep-component-filter-bar-chip-gap-sm",role:"Chip gap (sm)"},{token:"--ep-component-filter-bar-chip-gap-md",role:"Chip gap (md)"},{token:"--ep-component-filter-bar-chip-gap-lg",role:"Chip gap (lg)"},{token:"--ep-component-filter-bar-search-min-width",role:"Search field min width"},{token:"--ep-component-filter-bar-search-max-width",role:"Search field max width"},{token:"--ep-component-filter-bar-divider-color",role:"Section divider color"},{token:"--ep-component-filter-bar-divider-height",role:"Section divider height"},{token:"--ep-component-filter-bar-count-color",role:"Active filter count text color"},{token:"--ep-component-filter-bar-count-font-size",role:"Active filter count font size"}],B={render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",fontSize:13},children:[e.jsxs("h3",{style:{margin:"0 0 16px",fontSize:15},children:["FilterBar — ",O.length," CSS custom properties"]}),e.jsxs("p",{style:{margin:"0 0 16px",color:"var(--ep-semantic-color-text-secondary)",fontSize:12},children:["FilterChip has no own tokens — composes Chip token namespace ("," ",e.jsx("code",{children:"--ep-component-chip-*"}),"). Select and TextField use their own namespaces."]}),e.jsx("div",{style:{marginBottom:20,padding:16,border:"1px solid var(--ep-semantic-color-divider)",borderRadius:4},children:e.jsx(d,{searchValue:"",onSearchChange:()=>{},searchPlaceholder:"Search...",activeFilters:[{id:"a",label:"Status: Live",onRemove:()=>{}},{id:"b",label:"Type: Conference",onRemove:()=>{}}],onClearAll:()=>{},actions:e.jsx(f,{variant:"outlined",size:"sm",children:"Export"})})}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #E5E7EB"},children:[e.jsx("th",{style:{textAlign:"left",padding:"6px 10px",color:"#6B7280",fontSize:12},children:"Token"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 10px",color:"#6B7280",fontSize:12},children:"Value"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 10px",color:"#6B7280",fontSize:12},children:"Role"})]})}),e.jsx("tbody",{children:O.map(({token:s,role:r})=>{const t=typeof window<"u"?getComputedStyle(document.documentElement).getPropertyValue(s).trim():"",n=t.startsWith("#")||t.startsWith("rgb")||t==="transparent";return e.jsxs("tr",{style:{borderBottom:"1px solid #F3F4F6"},children:[e.jsx("td",{style:{padding:"6px 10px",fontFamily:"monospace",fontSize:11,color:"#374151"},children:s}),e.jsxs("td",{style:{padding:"6px 10px",display:"flex",alignItems:"center",gap:6},children:[n&&e.jsx("span",{style:{display:"inline-block",width:12,height:12,borderRadius:2,background:t,border:"1px solid #E5E7EB",flexShrink:0}}),e.jsx("code",{style:{fontSize:11,color:"#6B7280"},children:t||"—"})]}),e.jsx("td",{style:{padding:"6px 10px",color:"#6B7280",fontSize:12},children:r})]},s)})})]})]}),parameters:{docs:{description:{story:"Live token audit. All 20 CSS custom properties with resolved values."}}}};var W,D,P;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 0
  }}>
      <FilterBar actions={<Button variant="outlined" size="sm" startSlot={<Icon name="download" size="sm" />}>
            Export
          </Button>} />
      <EventTable events={ALL_EVENTS} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'FilterBar with only the actions slot. No search or filters.'
      }
    }
  }
}`,...(P=(D=T.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var I,M,N;A.parameters={...A.parameters,docs:{...(I=A.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState('');
    const filtered = ALL_EVENTS.filter(e => e.name.toLowerCase().includes(query.toLowerCase()) || e.venue.toLowerCase().includes(query.toLowerCase()));
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }}>
        <FilterBar searchValue={query} onSearchChange={setQuery} searchPlaceholder="Search events..." searchDebounceMs={300} actions={<Button variant="outlined" size="sm">Export</Button>} />
        <EventTable events={filtered} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Search field with MA-2 debounce (300ms). The table filters in real-time. ' + 'Pattern F empty state appears when no events match.'
      }
    }
  }
}`,...(N=(M=A.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var _,q,Q;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState('');
    const [activeFilters, setActive] = useState<FilterChipProps[]>([{
      id: 'status-live',
      label: 'Status: Live',
      onRemove: () => {}
    }, {
      id: 'type-conference',
      label: 'Type: Conference',
      onRemove: () => {}
    }]);

    // Wire up onRemove now that setActive is in scope
    const filters = activeFilters.map(f => ({
      ...f,
      onRemove: () => setActive(prev => prev.filter(x => x.id !== f.id))
    }));
    const filtered = ALL_EVENTS.filter(e => {
      if (query && !e.name.toLowerCase().includes(query.toLowerCase())) return false;
      const statusFilter = filters.find(f => f.id.startsWith('status-'));
      if (statusFilter && !statusFilter.label.includes(e.status)) return false;
      const typeFilter = filters.find(f => f.id.startsWith('type-'));
      if (typeFilter && !typeFilter.label.toLowerCase().includes(e.type)) return false;
      return true;
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }}>
        <FilterBar searchValue={query} onSearchChange={setQuery} searchPlaceholder="Search events..." activeFilters={filters} onClearAll={() => setActive([])} actions={<Button variant="outlined" size="sm" startSlot={<Icon name="filter" size="sm" />}>
              Add filter
            </Button>} />
        <EventTable events={filtered} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Active filter chips using MA-1 FilterChip pattern. ' + 'Each chip has an × to remove its filter. Clear all removes all chips.'
      }
    }
  }
}`,...(Q=(q=j.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var H,$,G;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [statusValue, setStatusValue] = useState('');
    const [typeValue, setTypeValue] = useState('');
    const [statusLoading, setStatusLoading] = useState(true);
    const [typeLoading, setTypeLoading] = useState(true);
    const [statusOpts, setStatusOpts] = useState<Array<{
      value: string;
      label: string;
    }>>([]);
    const [typeOpts, setTypeOpts] = useState<Array<{
      value: string;
      label: string;
    }>>([]);
    const [activeFilters, setActive] = useState<FilterChipProps[]>([]);

    // Simulate async option fetch — MA-3 pattern
    useEffect(() => {
      const t = setTimeout(() => {
        setStatusOpts([{
          value: 'upcoming',
          label: 'Upcoming'
        }, {
          value: 'live',
          label: 'Live'
        }, {
          value: 'completed',
          label: 'Completed'
        }, {
          value: 'cancelled',
          label: 'Cancelled'
        }]);
        setStatusLoading(false);
      }, 1200);
      return () => clearTimeout(t);
    }, []);
    useEffect(() => {
      const t = setTimeout(() => {
        setTypeOpts([{
          value: 'conference',
          label: 'Conference'
        }, {
          value: 'launch',
          label: 'Launch'
        }, {
          value: 'workshop',
          label: 'Workshop'
        }, {
          value: 'internal',
          label: 'Internal'
        }, {
          value: 'gala',
          label: 'Gala'
        }]);
        setTypeLoading(false);
      }, 1800);
      return () => clearTimeout(t);
    }, []);
    const handleStatusChange = (v: string) => {
      setStatusValue(v);
      const label = statusOpts.find(o => o.value === v)?.label ?? v;
      setActive(prev => [...prev.filter(f => !f.id.startsWith('status-')), {
        id: \`status-\${v}\`,
        label: \`Status: \${label}\`,
        onRemove: () => {}
      }]);
    };
    const handleTypeChange = (v: string) => {
      setTypeValue(v);
      const label = typeOpts.find(o => o.value === v)?.label ?? v;
      setActive(prev => [...prev.filter(f => !f.id.startsWith('type-')), {
        id: \`type-\${v}\`,
        label: \`Type: \${label}\`,
        onRemove: () => {}
      }]);
    };
    const filters = activeFilters.map(f => ({
      ...f,
      onRemove: () => setActive(prev => prev.filter(x => x.id !== f.id))
    }));
    const filtered = ALL_EVENTS.filter(e => {
      if (statusValue && e.status !== statusValue) return false;
      if (typeValue && e.type !== typeValue) return false;
      return true;
    });
    const selectFilters: FilterSelectItem[] = [{
      id: 'status',
      label: 'Status',
      options: statusOpts,
      value: statusValue,
      onChange: handleStatusChange,
      loading: statusLoading,
      placeholder: 'All statuses'
    }, {
      id: 'type',
      label: 'Type',
      options: typeOpts,
      value: typeValue,
      onChange: handleTypeChange,
      loading: typeLoading,
      placeholder: 'All types'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }}>
        <FilterBar selectFilters={selectFilters} activeFilters={filters} onClearAll={() => {
        setActive([]);
        setStatusValue('');
        setTypeValue('');
      }} />
        <EventTable events={filtered} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Select filters with MA-3 async option loading. ' + 'Options arrive after 1.2s and 1.8s. Select shows spinner + blocks interaction while loading. ' + 'Selecting an option creates an active FilterChip.'
      }
    }
  }
}`,...(G=($=E.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var K,U,J;L.parameters={...L.parameters,docs:{...(K=L.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 0
  }}>
      <FilterBar searchValue="" onSearchChange={() => {}} isLoading={true} actions={<Button variant="outlined" size="sm" disabled>Export</Button>} />
      <EventTable events={[]} isLoading={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Pattern E: loading state. FilterBar chips area shows Skeleton placeholders. ' + 'Table body also shows Skeleton rows (matched to page size).'
      }
    }
  }
}`,...(J=(U=L.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [activeFilters, setActive] = useState<FilterChipProps[]>([{
      id: 'status-cancelled',
      label: 'Status: Cancelled',
      onRemove: () => {}
    }, {
      id: 'type-gala',
      label: 'Type: Gala',
      onRemove: () => {}
    }]);
    const filters = activeFilters.map(f => ({
      ...f,
      onRemove: () => setActive(prev => prev.filter(x => x.id !== f.id))
    }));

    // Apply filters — result is empty (no cancelled galas in data)
    const filtered = ALL_EVENTS.filter(e => e.status === 'cancelled' && e.type === 'gala');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }}>
        <FilterBar activeFilters={filters} onClearAll={() => setActive([])} />
        <EventTable events={filtered} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Pattern F: filtered empty state. Two active filters produce zero results. ' + 'The "No events match" state renders inside a full-colSpan TableCell. ' + 'Remove a chip or click Clear all to restore results.'
      }
    }
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,se;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState('');
    const [activeFilters, setActive] = useState<FilterChipProps[]>([{
      id: 'type-conference',
      label: 'Type: Conference',
      onRemove: () => {}
    }]);
    const filters = activeFilters.map(f => ({
      ...f,
      onRemove: () => setActive(prev => prev.filter(x => x.id !== f.id))
    }));
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div style={{
        fontSize: 13,
        color: 'var(--ep-semantic-color-text-secondary)',
        lineHeight: 1.6
      }}>
          <strong>Keyboard behaviour:</strong>
          <ul style={{
          margin: '4px 0 0',
          paddingLeft: 20
        }}>
            <li>Tab → Search field</li>
            <li>Tab → FilterChip (focus ring on chip)</li>
            <li>Tab → × button on chip (delete chip)</li>
            <li>Tab → Clear all button</li>
            <li>aria-live="polite" announces active filter count to screen readers</li>
            <li>FilterChip delete button has implicit aria-label from MUI Chip</li>
          </ul>
        </div>
        <FilterBar searchValue={query} onSearchChange={setQuery} searchPlaceholder="Search events..." activeFilters={filters} onClearAll={() => setActive([])} actions={<Button variant="outlined" size="sm">Export</Button>} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates keyboard navigation and ARIA attributes. ' + 'Tab through: search → chip → × button → clear all → actions. ' + 'Filter count is announced via aria-live="polite".'
      }
    }
  }
}`,...(se=(te=w.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,ne,re;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: 'system-ui',
    fontSize: 13
  }}>
      <h3 style={{
      margin: '0 0 16px',
      fontSize: 15
    }}>
        FilterBar — {FILTER_BAR_TOKENS.length} CSS custom properties
      </h3>
      <p style={{
      margin: '0 0 16px',
      color: 'var(--ep-semantic-color-text-secondary)',
      fontSize: 12
    }}>
        FilterChip has no own tokens — composes Chip token namespace ({' '}
        <code>--ep-component-chip-*</code>). Select and TextField use their own namespaces.
      </p>

      {/* Live render */}
      <div style={{
      marginBottom: 20,
      padding: 16,
      border: '1px solid var(--ep-semantic-color-divider)',
      borderRadius: 4
    }}>
        <FilterBar searchValue="" onSearchChange={() => {}} searchPlaceholder="Search..." activeFilters={[{
        id: 'a',
        label: 'Status: Live',
        onRemove: () => {}
      }, {
        id: 'b',
        label: 'Type: Conference',
        onRemove: () => {}
      }]} onClearAll={() => {}} actions={<Button variant="outlined" size="sm">Export</Button>} />
      </div>

      <table style={{
      width: '100%',
      borderCollapse: 'collapse'
    }}>
        <thead>
          <tr style={{
          borderBottom: '2px solid #E5E7EB'
        }}>
            <th style={{
            textAlign: 'left',
            padding: '6px 10px',
            color: '#6B7280',
            fontSize: 12
          }}>Token</th>
            <th style={{
            textAlign: 'left',
            padding: '6px 10px',
            color: '#6B7280',
            fontSize: 12
          }}>Value</th>
            <th style={{
            textAlign: 'left',
            padding: '6px 10px',
            color: '#6B7280',
            fontSize: 12
          }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {FILTER_BAR_TOKENS.map(({
          token,
          role
        }) => {
          const value = typeof window !== 'undefined' ? getComputedStyle(document.documentElement).getPropertyValue(token).trim() : '';
          const isColor = value.startsWith('#') || value.startsWith('rgb') || value === 'transparent';
          return <tr key={token} style={{
            borderBottom: '1px solid #F3F4F6'
          }}>
                <td style={{
              padding: '6px 10px',
              fontFamily: 'monospace',
              fontSize: 11,
              color: '#374151'
            }}>
                  {token}
                </td>
                <td style={{
              padding: '6px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}>
                  {isColor && <span style={{
                display: 'inline-block',
                width: 12,
                height: 12,
                borderRadius: 2,
                background: value,
                border: '1px solid #E5E7EB',
                flexShrink: 0
              }} />}
                  <code style={{
                fontSize: 11,
                color: '#6B7280'
              }}>{value || '—'}</code>
                </td>
                <td style={{
              padding: '6px 10px',
              color: '#6B7280',
              fontSize: 12
            }}>{role}</td>
              </tr>;
        })}
        </tbody>
      </table>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Live token audit. All 20 CSS custom properties with resolved values.'
      }
    }
  }
}`,...(re=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const je=["Default","WithSearch","WithFilters","WithAsyncFilters","Loading","Empty","Accessibility","TokenAudit"];export{w as Accessibility,T as Default,k as Empty,L as Loading,B as TokenAudit,E as WithAsyncFilters,j as WithFilters,A as WithSearch,je as __namedExportsOrder,Ae as default};

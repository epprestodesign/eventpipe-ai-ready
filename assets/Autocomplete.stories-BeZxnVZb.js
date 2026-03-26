import{j as e}from"./jsx-runtime-BT65X5dW.js";import{R as x}from"./index-C6mWTJJr.js";import{a as o,T as t}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const a=["Afghanistan","Albania","Algeria","Argentina","Australia","Austria","Bangladesh","Belgium","Brazil","Canada","Chile","China","Colombia","Croatia","Czech Republic","Denmark","Egypt","Finland","France","Germany","Ghana","Greece","Hungary","India","Indonesia","Ireland","Israel","Italy","Japan","Kenya","Malaysia","Mexico","Morocco","Netherlands","New Zealand","Nigeria","Norway","Pakistan","Peru","Philippines","Poland","Portugal","Romania","Russia","Saudi Arabia","South Africa","South Korea","Spain","Sweden","Switzerland","Thailand","Turkey","Ukraine","United Kingdom","United States","Vietnam","Zimbabwe"],se=[{id:1,title:"The Shawshank Redemption",year:1994},{id:2,title:"The Godfather",year:1972},{id:3,title:"The Dark Knight",year:2008},{id:4,title:"Schindler's List",year:1993},{id:5,title:"Pulp Fiction",year:1994},{id:6,title:"Forrest Gump",year:1994},{id:7,title:"Inception",year:2010},{id:8,title:"The Matrix",year:1999},{id:9,title:"Goodfellas",year:1990},{id:10,title:"Fight Club",year:1999}],he={title:"Components/Inputs/Autocomplete",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Composition component combining TextField input, portal dropdown, option list, Chip tags (multiple mode), and Icon system (close + chevron). Dropdown uses PaperProps.sx for portal-safe styling. Options follow the backgroundFocus pattern (background-change focus rule, not outline ring). Supports controlled and uncontrolled usage, single/multiple selection, and freeSolo."}}},argTypes:{size:{control:"radio",options:["sm","md","lg"]},variant:{control:"radio",options:["outlined","filled"]},multiple:{control:"boolean"},freeSolo:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},error:{control:"boolean"},required:{control:"boolean"}},args:{options:a,label:"Country",size:"md",variant:"outlined",multiple:!1,freeSolo:!1,disabled:!1,loading:!1,fullWidth:!1,error:!1,required:!1}},s={},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Single select — choose one country"}),e.jsx(o,{options:a,label:"Country",placeholder:"Search countries…",fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Multiple select — choose any number of countries"}),e.jsx(o,{options:a,label:"Countries",placeholder:"Search countries…",multiple:!0,fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Free solo — type anything or pick from list"}),e.jsx(o,{options:a,label:"Destination",placeholder:"Type or select a country…",freeSolo:!0,fullWidth:!0})]})]})},p={render:()=>{const[r,i]=x.useState(["Canada","Germany"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsxs(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:.5},children:["Multi-select with tags — ",r.length," selected"]}),e.jsx(o,{options:a,label:"Countries",multiple:!0,value:r,onChange:g=>i(g??[]),fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:.5},children:"limitTags=2 — collapses overflow chips"}),e.jsx(o,{options:a,label:"Countries",multiple:!0,limitTags:2,defaultValue:["Canada","Germany","France","Japan"],fullWidth:!0})]})]})}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:'Loading — spinner in input, "Loading…" text in dropdown'}),e.jsx(o,{options:[],label:"Search",loading:!0,open:!0,fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Custom loading text"}),e.jsx(o,{options:[],label:"Search",loading:!0,open:!0,loadingText:"Fetching results…",fullWidth:!0})]})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Disabled — single select"}),e.jsx(o,{options:a,label:"Country",defaultValue:"Canada",disabled:!0,fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Disabled — multiple with tags"}),e.jsx(o,{options:a,label:"Countries",multiple:!0,defaultValue:["Canada","Germany"],disabled:!0,fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Error state"}),e.jsx(o,{options:a,label:"Country",error:!0,helperText:"Please select a valid country",fullWidth:!0})]})]})},m={render:()=>{const[r,i]=x.useState(""),[g,b]=x.useState([]),[ie,v]=x.useState(!1);return x.useEffect(()=>{if(!r){b([]);return}v(!0);const l=setTimeout(()=>{const n=r.toLowerCase();b(se.filter(ne=>ne.title.toLowerCase().includes(n))),v(!1)},600);return()=>clearTimeout(l)},[r]),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(t,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Async search — type a movie title (600 ms mock delay)"}),e.jsx(o,{options:g,getOptionLabel:l=>typeof l=="string"?l:l.title,isOptionEqualToValue:(l,n)=>l.id===n.id,inputValue:r,onInputChange:i,loading:ie,noOptionsText:r?"No movies found":"Start typing to search",renderOption:(l,n)=>e.jsxs("span",{children:[e.jsx("strong",{children:l.title})," ",e.jsxs("span",{style:{color:"var(--ep-semantic-color-text-secondary)",fontSize:"0.875em"},children:["(",l.year,")",n.selected?" ✓":""]})]}),label:"Movie",placeholder:"Search movies…",fullWidth:!0}),e.jsx(t,{variant:"body2",color:"text.secondary",children:'Type "the", "pulp", or "fight" to see results.'})]})}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,fontFamily:"sans-serif"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"ARIA — combobox role and live region"}),e.jsxs(t,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:["The input has ",e.jsx("code",{children:'role="combobox"'}),", ",e.jsx("code",{children:'aria-autocomplete="list"'}),", and ",e.jsx("code",{children:"aria-expanded"}),". The listbox has ",e.jsx("code",{children:'role="listbox"'}),"; each option has ",e.jsx("code",{children:'role="option"'})," and ",e.jsx("code",{children:"aria-selected"}),". Navigate with ↑/↓, confirm with Enter, dismiss with Escape."]}),e.jsx(o,{options:a,label:"Country (accessible)",placeholder:"Start typing…",fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"Required field with error"}),e.jsxs(t,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:[e.jsx("code",{children:"required"})," appends * to the label and sets the required attribute on the native input. ",e.jsx("code",{children:"error"})," + ",e.jsx("code",{children:"helperText"})," provide visible error feedback."]}),e.jsx(o,{options:a,label:"Country",required:!0,error:!0,helperText:"Country is required",fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"overline",color:"text.secondary",children:"Multiple — tag keyboard removal"}),e.jsx(t,{variant:"body2",color:"text.secondary",sx:{mt:.5,mb:1},children:"Tags are announced as buttons. Backspace removes the last tag when the input is focused and empty. Each chip's × button is reachable via Tab."}),e.jsx(o,{options:a,label:"Countries",multiple:!0,defaultValue:["Canada","Japan"],fullWidth:!0})]})]})},h={name:"Token Audit (DevTools)",render:()=>{const r=["--ep-component-autocomplete-dropdown-background","--ep-component-autocomplete-dropdown-border-radius","--ep-component-autocomplete-dropdown-shadow","--ep-component-autocomplete-dropdown-max-height","--ep-component-autocomplete-option-color","--ep-component-autocomplete-option-color-disabled","--ep-component-autocomplete-option-background","--ep-component-autocomplete-option-background-hover","--ep-component-autocomplete-option-background-focus","--ep-component-autocomplete-option-background-selected","--ep-component-autocomplete-option-background-selected-hover","--ep-component-autocomplete-option-background-disabled","--ep-component-autocomplete-option-font-size","--ep-component-autocomplete-option-padding-y","--ep-component-autocomplete-option-padding-x","--ep-component-autocomplete-tag-gap","--ep-component-autocomplete-tag-margin-y","--ep-component-autocomplete-indicator-color","--ep-component-autocomplete-loading-color","--ep-component-autocomplete-loading-font-size"];return e.jsxs("div",{style:{fontFamily:"monospace",fontSize:12},children:[e.jsxs("p",{style:{color:"#666",marginBottom:8},children:["Open DevTools → Computed to verify each var resolves. Total: ",r.length," vars."]}),e.jsxs("table",{style:{borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #ddd"},children:[e.jsx("th",{style:{padding:"4px 12px 4px 0",textAlign:"left"},children:"CSS custom property"}),e.jsx("th",{style:{padding:"4px 12px",textAlign:"left"},children:"Swatch"})]})}),e.jsx("tbody",{children:r.map(i=>e.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[e.jsx("td",{style:{padding:"4px 12px 4px 0"},children:i}),e.jsx("td",{style:{padding:"4px 12px"},children:e.jsx("span",{style:{display:"inline-block",width:16,height:16,background:`var(${i})`,border:"1px solid #ccc",verticalAlign:"middle"}})})]},i))})]}),e.jsx(t,{variant:"overline",color:"text.secondary",children:"Live renders"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,marginTop:8,maxWidth:400},children:[e.jsx(o,{options:a,label:"Single (outlined, md)"}),e.jsx(o,{options:a,label:"Single (filled, md)",variant:"filled"}),e.jsx(o,{options:a,label:"Multiple",multiple:!0}),e.jsx(o,{options:a,label:"Loading",loading:!0}),e.jsx(o,{options:a,label:"Disabled",disabled:!0,defaultValue:"Canada"}),e.jsx(o,{options:a,label:"Error",error:!0,helperText:"Error text"})]})]})}};var f,T,j,S,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:"Default — single-select, string options, use Controls to explore props.",...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};var k,A,w,E,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Single select — choose one country
        </Typography>
        <Autocomplete options={COUNTRIES} label="Country" placeholder="Search countries…" fullWidth />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Multiple select — choose any number of countries
        </Typography>
        <Autocomplete options={COUNTRIES} label="Countries" placeholder="Search countries…" multiple fullWidth />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Free solo — type anything or pick from list
        </Typography>
        <Autocomplete options={COUNTRIES} label="Destination" placeholder="Type or select a country…" freeSolo fullWidth />
      </div>
    </div>
}`,...(w=(A=d.parameters)==null?void 0:A.docs)==null?void 0:w.source},description:{story:"Single and multiple selection modes side-by-side.",...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.description}}};var O,D,R,W,V;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>(['Canada', 'Germany']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }}>
        <div>
          <Typography variant="overline" color="text.secondary" sx={{
          display: 'block',
          mb: 0.5
        }}>
            Multi-select with tags — {value.length} selected
          </Typography>
          <Autocomplete options={COUNTRIES} label="Countries" multiple value={value} onChange={v => setValue(v as string[] ?? [])} fullWidth />
        </div>
        <div>
          <Typography variant="overline" color="text.secondary" sx={{
          display: 'block',
          mb: 0.5
        }}>
            limitTags=2 — collapses overflow chips
          </Typography>
          <Autocomplete options={COUNTRIES} label="Countries" multiple limitTags={2} defaultValue={['Canada', 'Germany', 'France', 'Japan']} fullWidth />
        </div>
      </div>;
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source},description:{story:"Multiple mode — selected values render as Chip tags (soft, neutral).",...(V=(W=p.parameters)==null?void 0:W.docs)==null?void 0:V.description}}};var N,L,U,M,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Loading — spinner in input, "Loading…" text in dropdown
        </Typography>
        <Autocomplete options={[]} label="Search" loading open fullWidth />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Custom loading text
        </Typography>
        <Autocomplete options={[]} label="Search" loading open loadingText="Fetching results…" fullWidth />
      </div>
    </div>
}`,...(U=(L=c.parameters)==null?void 0:L.docs)==null?void 0:U.source},description:{story:"Loading state — shown while options are being fetched.",...(q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:q.description}}};var F,z,B,G,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Disabled — single select
        </Typography>
        <Autocomplete options={COUNTRIES} label="Country" defaultValue="Canada" disabled fullWidth />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Disabled — multiple with tags
        </Typography>
        <Autocomplete options={COUNTRIES} label="Countries" multiple defaultValue={['Canada', 'Germany']} disabled fullWidth />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Error state
        </Typography>
        <Autocomplete options={COUNTRIES} label="Country" error helperText="Please select a valid country" fullWidth />
      </div>
    </div>
}`,...(B=(z=u.parameters)==null?void 0:z.docs)==null?void 0:B.source},description:{story:"Disabled state — all interaction blocked.",...(P=(G=u.parameters)==null?void 0:G.docs)==null?void 0:P.description}}};var J,K,Z,_,$;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState<Movie[]>([]);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
      if (!inputValue) {
        setOptions([]);
        return;
      }
      setLoading(true);
      const timer = setTimeout(() => {
        const query = inputValue.toLowerCase();
        setOptions(MOVIES.filter(m => m.title.toLowerCase().includes(query)));
        setLoading(false);
      }, 600);
      return () => clearTimeout(timer);
    }, [inputValue]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <Typography variant="overline" color="text.secondary" sx={{
        display: 'block',
        mb: 1
      }}>
          Async search — type a movie title (600 ms mock delay)
        </Typography>
        <Autocomplete<Movie> options={options} getOptionLabel={o => typeof o === 'string' ? o : o.title} isOptionEqualToValue={(o, v) => o.id === v.id} inputValue={inputValue} onInputChange={setInputValue} loading={loading} noOptionsText={inputValue ? 'No movies found' : 'Start typing to search'} renderOption={(option, state) => <span>
              <strong>{option.title}</strong>
              {' '}
              <span style={{
          color: 'var(--ep-semantic-color-text-secondary)',
          fontSize: '0.875em'
        }}>
                ({option.year})
                {state.selected ? ' ✓' : ''}
              </span>
            </span>} label="Movie" placeholder="Search movies…" fullWidth />
        <Typography variant="body2" color="text.secondary">
          Type "the", "pulp", or "fight" to see results.
        </Typography>
      </div>;
  }
}`,...(Z=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Z.source},description:{story:"Async — simulates an API call with loading state on keystroke.",...($=(_=m.parameters)==null?void 0:_.docs)==null?void 0:$.description}}};var H,Q,X,Y,ee;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    fontFamily: 'sans-serif'
  }}>
      <div>
        <Typography variant="overline" color="text.secondary">
          ARIA — combobox role and live region
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          The input has <code>role="combobox"</code>, <code>aria-autocomplete="list"</code>,
          and <code>aria-expanded</code>. The listbox has <code>role="listbox"</code>;
          each option has <code>role="option"</code> and <code>aria-selected</code>.
          Navigate with ↑/↓, confirm with Enter, dismiss with Escape.
        </Typography>
        <Autocomplete options={COUNTRIES} label="Country (accessible)" placeholder="Start typing…" fullWidth />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">
          Required field with error
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          <code>required</code> appends * to the label and sets the required attribute on
          the native input. <code>error</code> + <code>helperText</code> provide visible
          error feedback.
        </Typography>
        <Autocomplete options={COUNTRIES} label="Country" required error helperText="Country is required" fullWidth />
      </div>
      <div>
        <Typography variant="overline" color="text.secondary">
          Multiple — tag keyboard removal
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mt: 0.5,
        mb: 1
      }}>
          Tags are announced as buttons. Backspace removes the last tag when the input
          is focused and empty. Each chip's × button is reachable via Tab.
        </Typography>
        <Autocomplete options={COUNTRIES} label="Countries" multiple defaultValue={['Canada', 'Japan']} fullWidth />
      </div>
    </div>
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Accessibility — ARIA roles, keyboard navigation, screen-reader labels.",...(ee=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:ee.description}}};var oe,te,ae,re,le;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Token Audit (DevTools)',
  render: () => {
    const vars = [
    // Dropdown surface
    '--ep-component-autocomplete-dropdown-background', '--ep-component-autocomplete-dropdown-border-radius', '--ep-component-autocomplete-dropdown-shadow', '--ep-component-autocomplete-dropdown-max-height',
    // Option states
    '--ep-component-autocomplete-option-color', '--ep-component-autocomplete-option-color-disabled', '--ep-component-autocomplete-option-background', '--ep-component-autocomplete-option-background-hover', '--ep-component-autocomplete-option-background-focus', '--ep-component-autocomplete-option-background-selected', '--ep-component-autocomplete-option-background-selected-hover', '--ep-component-autocomplete-option-background-disabled', '--ep-component-autocomplete-option-font-size', '--ep-component-autocomplete-option-padding-y', '--ep-component-autocomplete-option-padding-x',
    // Tags
    '--ep-component-autocomplete-tag-gap', '--ep-component-autocomplete-tag-margin-y',
    // Indicators
    '--ep-component-autocomplete-indicator-color',
    // Loading / no-options
    '--ep-component-autocomplete-loading-color', '--ep-component-autocomplete-loading-font-size'];
    return <div style={{
      fontFamily: 'monospace',
      fontSize: 12
    }}>
        <p style={{
        color: '#666',
        marginBottom: 8
      }}>
          Open DevTools → Computed to verify each var resolves. Total: {vars.length} vars.
        </p>
        <table style={{
        borderCollapse: 'collapse',
        marginBottom: 32
      }}>
          <thead>
            <tr style={{
            borderBottom: '2px solid #ddd'
          }}>
              <th style={{
              padding: '4px 12px 4px 0',
              textAlign: 'left'
            }}>CSS custom property</th>
              <th style={{
              padding: '4px 12px',
              textAlign: 'left'
            }}>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {vars.map(v => <tr key={v} style={{
            borderBottom: '1px solid #eee'
          }}>
                <td style={{
              padding: '4px 12px 4px 0'
            }}>{v}</td>
                <td style={{
              padding: '4px 12px'
            }}>
                  <span style={{
                display: 'inline-block',
                width: 16,
                height: 16,
                background: \`var(\${v})\`,
                border: '1px solid #ccc',
                verticalAlign: 'middle'
              }} />
                </td>
              </tr>)}
          </tbody>
        </table>
        <Typography variant="overline" color="text.secondary">Live renders</Typography>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        marginTop: 8,
        maxWidth: 400
      }}>
          <Autocomplete options={COUNTRIES} label="Single (outlined, md)" />
          <Autocomplete options={COUNTRIES} label="Single (filled, md)" variant="filled" />
          <Autocomplete options={COUNTRIES} label="Multiple" multiple />
          <Autocomplete options={COUNTRIES} label="Loading" loading />
          <Autocomplete options={COUNTRIES} label="Disabled" disabled defaultValue="Canada" />
          <Autocomplete options={COUNTRIES} label="Error" error helperText="Error text" />
        </div>
      </div>;
  }
}`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:"Token Audit — all CSS custom properties the Autocomplete component reads.",...(le=(re=h.parameters)==null?void 0:re.docs)==null?void 0:le.description}}};const xe=["Default","Variants","WithTags","Loading","Disabled","Async","Accessibility","TokenAudit"];export{y as Accessibility,m as Async,s as Default,u as Disabled,c as Loading,h as TokenAudit,d as Variants,p as WithTags,xe as __namedExportsOrder,he as default};

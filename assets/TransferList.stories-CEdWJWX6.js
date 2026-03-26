import{j as e}from"./jsx-runtime-BT65X5dW.js";import{r as n,R as Z}from"./index-C6mWTJJr.js";import{ad as T}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const le={title:"Components/Surfaces/TransferList",component:T,parameters:{layout:"padded",docs:{description:{component:"TransferList — dual-list selection and move system. Patterns: B (selection), C (header state), E (loading), F (empty), MA-2 (debounce). Consumer owns list data; component owns checkbox staging state."}}}},s=[{id:"g1",label:"Alice Johnson"},{id:"g2",label:"Bob Martinez"},{id:"g3",label:"Carol White"},{id:"g4",label:"David Lee"},{id:"g5",label:"Emma Davis"},{id:"g6",label:"Frank Wilson"},{id:"g7",label:"Grace Taylor"},{id:"g8",label:"Henry Anderson"}],k=[{id:"g9",label:"Irene Thomas"},{id:"g10",label:"Jack Jackson"}],o=({initialLeft:r,initialRight:i=[],...t})=>{const[l,a]=n.useState(r),[d,c]=n.useState(i);return e.jsx(T,{leftItems:l,rightItems:d,onChange:(p,v)=>{a(p),c(v)},...t})},h={render:()=>e.jsx(o,{initialLeft:s,leftTitle:"Available guests",rightTitle:"Checked in"}),parameters:{docs:{description:{story:"Default state. Left list has 8 items; right is empty. Check items then click → to move them."}}}},m={render:()=>e.jsx(o,{initialLeft:s,initialRight:k,leftTitle:"Available guests",rightTitle:"Checked in"}),parameters:{docs:{description:{story:"Both lists have items. Pattern B: select items on either side, then use the control buttons to move them. Pattern C: header background switches when items are selected."}}}},g={render:()=>{const[r,i]=n.useState(s.slice(0,5)),[t,l]=n.useState(s.slice(5)),[a,d]=n.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(T,{leftItems:r,rightItems:t,leftTitle:"Pending",rightTitle:"Confirmed",onChange:(c,p)=>{const v=Math.abs(c.length-r.length);d(Y=>[`Moved ${v} item(s)`,...Y].slice(0,5)),i(c),l(p)}}),a.length>0&&e.jsxs("div",{style:{fontSize:13,color:"var(--ep-semantic-color-text-secondary)"},children:[e.jsx("strong",{children:"Move log:"}),e.jsx("ul",{style:{margin:"4px 0",paddingLeft:20},children:a.map((c,p)=>e.jsx("li",{children:c},p))})]})]})},parameters:{docs:{description:{story:"Shows the move log after each operation. Select items then use › or ‹ buttons."}}}},f={render:()=>e.jsx(o,{initialLeft:s,leftTitle:"All guests",rightTitle:"Selected"}),parameters:{docs:{description:{story:"Use »› (double arrow) to move all items at once. Disabled items are never moved by move-all operations."}}}},u={render:()=>e.jsx(o,{initialLeft:s,initialRight:k,leftTitle:"Available",rightTitle:"Checked in",searchable:!0,searchPlaceholder:"Search guests..."}),parameters:{docs:{description:{story:"searchable={true} adds a search field to each panel. Pattern MA-2: debounced client-side filter. Pattern F: filtered empty state appears when no items match."}}}},x={render:()=>{const[r,i]=n.useState(!1),[t,l]=n.useState(!1);return Z.useEffect(()=>{const a=setTimeout(()=>i(!0),1500),d=setTimeout(()=>l(!0),2500);return()=>{clearTimeout(a),clearTimeout(d)}},[]),e.jsx(o,{initialLeft:r?s:[],initialRight:t?k:[],leftTitle:"Available guests",rightTitle:"Checked in",leftLoading:!r,rightLoading:!t})},parameters:{docs:{description:{story:"Pattern E: loading state. Left panel resolves after 1.5s, right after 2.5s. Skeleton rows match the expected item height. Controls are disabled during load."}}}},b={render:()=>e.jsx(o,{initialLeft:[],leftTitle:"Available",rightTitle:"Selected"}),parameters:{docs:{description:{story:"Pattern F: empty state. Both lists have no items. The empty state icon and message are rendered inside the list body area."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{fontSize:13,color:"var(--ep-semantic-color-text-secondary)",lineHeight:1.6},children:[e.jsx("strong",{children:"Keyboard behaviour:"}),e.jsxs("ul",{style:{margin:"4px 0 0",paddingLeft:20},children:[e.jsx("li",{children:"Tab → first list item in left panel"}),e.jsx("li",{children:"Arrow keys → navigate list items"}),e.jsx("li",{children:"Space → toggle item selection (checkbox)"}),e.jsx("li",{children:"Tab → control buttons (›, »›, ‹«, ‹)"}),e.jsx("li",{children:"Tab → first list item in right panel"}),e.jsx("li",{children:'aria-live="polite" announces selection count changes'}),e.jsx("li",{children:'role="listbox" on each panel; select-all uses aria-label'})]}),e.jsx("strong",{children:"ARIA landmarks:"}),e.jsxs("ul",{style:{margin:"4px 0 0",paddingLeft:20},children:[e.jsx("li",{children:'Each panel header has id used as aria-labelledby on role="listbox"'}),e.jsx("li",{children:'Control group has role="group" aria-label="Transfer controls"'}),e.jsx("li",{children:"Each button has aria-label describing the move operation"})]})]}),e.jsx(o,{initialLeft:s.slice(0,4),initialRight:s.slice(4,6),leftTitle:"Available guests",rightTitle:"Selected guests"})]}),parameters:{docs:{description:{story:"Accessibility annotations for keyboard navigation and screen reader behaviour."}}}},L=[{token:"--ep-component-transfer-list-list-background",role:"Panel background"},{token:"--ep-component-transfer-list-list-border-color",role:"Panel border"},{token:"--ep-component-transfer-list-list-border-radius",role:"Panel corner radius"},{token:"--ep-component-transfer-list-list-min-height",role:"List min height"},{token:"--ep-component-transfer-list-list-max-height",role:"List max height (scroll)"},{token:"--ep-component-transfer-list-list-width",role:"Panel fixed width"},{token:"--ep-component-transfer-list-header-background",role:"Header bg (default)"},{token:"--ep-component-transfer-list-header-selected-background",role:"Header bg (items selected)"},{token:"--ep-component-transfer-list-header-color",role:"Header text"},{token:"--ep-component-transfer-list-header-padding-y",role:"Header vertical padding"},{token:"--ep-component-transfer-list-header-padding-x",role:"Header horizontal padding"},{token:"--ep-component-transfer-list-header-font-size",role:"Header font size"},{token:"--ep-component-transfer-list-header-font-weight",role:"Header font weight"},{token:"--ep-component-transfer-list-header-divider-color",role:"Header bottom border"},{token:"--ep-component-transfer-list-search-border-color",role:"Search area bottom border"},{token:"--ep-component-transfer-list-item-checkbox-gap",role:"Gap: checkbox → label"},{token:"--ep-component-transfer-list-controls-gap",role:"Gap between control buttons"},{token:"--ep-component-transfer-list-controls-width",role:"Controls column width"},{token:"--ep-component-transfer-list-count-color",role:"Item count text color"},{token:"--ep-component-transfer-list-count-font-size",role:"Item count font size"},{token:"--ep-component-transfer-list-empty-color",role:"Empty state text color"},{token:"--ep-component-transfer-list-empty-font-size",role:"Empty state font size"},{token:"--ep-component-transfer-list-focus-ring-color",role:"Focus ring color"},{token:"--ep-component-transfer-list-focus-ring-width",role:"Focus ring width"},{token:"--ep-component-transfer-list-focus-ring-offset",role:"Focus ring offset"}],S={render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",fontSize:13},children:[e.jsxs("h3",{style:{margin:"0 0 16px",fontSize:15},children:["TransferList — ",L.length," CSS custom properties"]}),e.jsx("p",{style:{margin:"0 0 16px",color:"var(--ep-semantic-color-text-secondary)",fontSize:12},children:"Control buttons use Button token namespace. List items use List token namespace. Checkboxes use Checkbox token namespace. TransferList tokens cover only the structural layout and panel-level design."}),e.jsx("div",{style:{marginBottom:20},children:e.jsx(o,{initialLeft:s.slice(0,4),initialRight:s.slice(4,6),leftTitle:"Available",rightTitle:"Selected"})}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #E5E7EB"},children:[e.jsx("th",{style:{textAlign:"left",padding:"6px 10px",color:"#6B7280",fontSize:12},children:"Token"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 10px",color:"#6B7280",fontSize:12},children:"Value"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 10px",color:"#6B7280",fontSize:12},children:"Role"})]})}),e.jsx("tbody",{children:L.map(({token:r,role:i})=>{const t=typeof window<"u"?getComputedStyle(document.documentElement).getPropertyValue(r).trim():"",l=t.startsWith("#")||t.startsWith("rgb")||t==="transparent";return e.jsxs("tr",{style:{borderBottom:"1px solid #F3F4F6"},children:[e.jsx("td",{style:{padding:"6px 10px",fontFamily:"monospace",fontSize:11,color:"#374151"},children:r}),e.jsx("td",{style:{padding:"6px 10px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l&&e.jsx("span",{style:{display:"inline-block",width:12,height:12,borderRadius:2,background:t,border:"1px solid #E5E7EB",flexShrink:0}}),e.jsx("code",{style:{fontSize:11,color:"#6B7280"},children:t||"—"})]})}),e.jsx("td",{style:{padding:"6px 10px",color:"#6B7280",fontSize:12},children:i})]},r)})})]})]}),parameters:{docs:{description:{story:"Live token audit. 25 CSS custom properties with resolved values."}}}};var C,E,j;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ControlledTransferList initialLeft={GUESTS} leftTitle="Available guests" rightTitle="Checked in" />,
  parameters: {
    docs: {
      description: {
        story: 'Default state. Left list has 8 items; right is empty. Check items then click → to move them.'
      }
    }
  }
}`,...(j=(E=h.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var A,w,z;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <ControlledTransferList initialLeft={GUESTS} initialRight={CHECKED_IN} leftTitle="Available guests" rightTitle="Checked in" />,
  parameters: {
    docs: {
      description: {
        story: 'Both lists have items. ' + 'Pattern B: select items on either side, then use the control buttons to move them. ' + 'Pattern C: header background switches when items are selected.'
      }
    }
  }
}`,...(z=(w=m.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var B,D,R;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [left, setLeft] = useState<TransferListItem[]>(GUESTS.slice(0, 5));
    const [right, setRight] = useState<TransferListItem[]>(GUESTS.slice(5));
    const [log, setLog] = useState<string[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <TransferList leftItems={left} rightItems={right} leftTitle="Pending" rightTitle="Confirmed" onChange={(l, r) => {
        const moved = Math.abs(l.length - left.length);
        setLog(prev => [\`Moved \${moved} item(s)\`, ...prev].slice(0, 5));
        setLeft(l);
        setRight(r);
      }} />
        {log.length > 0 && <div style={{
        fontSize: 13,
        color: 'var(--ep-semantic-color-text-secondary)'
      }}>
            <strong>Move log:</strong>
            <ul style={{
          margin: '4px 0',
          paddingLeft: 20
        }}>
              {log.map((entry, i) => <li key={i}>{entry}</li>)}
            </ul>
          </div>}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the move log after each operation. Select items then use › or ‹ buttons.'
      }
    }
  }
}`,...(R=(D=g.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var P,F,I;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <ControlledTransferList initialLeft={GUESTS} leftTitle="All guests" rightTitle="Selected" />,
  parameters: {
    docs: {
      description: {
        story: 'Use »› (double arrow) to move all items at once. ' + 'Disabled items are never moved by move-all operations.'
      }
    }
  }
}`,...(I=(F=f.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var G,H,M;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ControlledTransferList initialLeft={GUESTS} initialRight={CHECKED_IN} leftTitle="Available" rightTitle="Checked in" searchable searchPlaceholder="Search guests..." />,
  parameters: {
    docs: {
      description: {
        story: 'searchable={true} adds a search field to each panel. ' + 'Pattern MA-2: debounced client-side filter. ' + 'Pattern F: filtered empty state appears when no items match.'
      }
    }
  }
}`,...(M=(H=u.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var U,W,K;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [leftDone, setLeftDone] = useState(false);
    const [rightDone, setRightDone] = useState(false);

    // Simulate async load
    React.useEffect(() => {
      const t1 = setTimeout(() => setLeftDone(true), 1500);
      const t2 = setTimeout(() => setRightDone(true), 2500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }, []);
    return <ControlledTransferList initialLeft={leftDone ? GUESTS : []} initialRight={rightDone ? CHECKED_IN : []} leftTitle="Available guests" rightTitle="Checked in" leftLoading={!leftDone} rightLoading={!rightDone} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Pattern E: loading state. Left panel resolves after 1.5s, right after 2.5s. ' + 'Skeleton rows match the expected item height. Controls are disabled during load.'
      }
    }
  }
}`,...(K=(W=x.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var _,N,O;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <ControlledTransferList initialLeft={[]} leftTitle="Available" rightTitle="Selected" />,
  parameters: {
    docs: {
      description: {
        story: 'Pattern F: empty state. Both lists have no items. ' + 'The empty state icon and message are rendered inside the list body area.'
      }
    }
  }
}`,...(O=(N=b.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var V,J,$;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
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
          <li>Tab → first list item in left panel</li>
          <li>Arrow keys → navigate list items</li>
          <li>Space → toggle item selection (checkbox)</li>
          <li>Tab → control buttons (›, »›, ‹«, ‹)</li>
          <li>Tab → first list item in right panel</li>
          <li>aria-live="polite" announces selection count changes</li>
          <li>role="listbox" on each panel; select-all uses aria-label</li>
        </ul>
        <strong>ARIA landmarks:</strong>
        <ul style={{
        margin: '4px 0 0',
        paddingLeft: 20
      }}>
          <li>Each panel header has id used as aria-labelledby on role="listbox"</li>
          <li>Control group has role="group" aria-label="Transfer controls"</li>
          <li>Each button has aria-label describing the move operation</li>
        </ul>
      </div>
      <ControlledTransferList initialLeft={GUESTS.slice(0, 4)} initialRight={GUESTS.slice(4, 6)} leftTitle="Available guests" rightTitle="Selected guests" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility annotations for keyboard navigation and screen reader behaviour.'
      }
    }
  }
}`,...($=(J=y.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var q,Q,X;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: 'system-ui',
    fontSize: 13
  }}>
      <h3 style={{
      margin: '0 0 16px',
      fontSize: 15
    }}>
        TransferList — {TL_TOKENS.length} CSS custom properties
      </h3>
      <p style={{
      margin: '0 0 16px',
      color: 'var(--ep-semantic-color-text-secondary)',
      fontSize: 12
    }}>
        Control buttons use Button token namespace. List items use List token namespace.
        Checkboxes use Checkbox token namespace.
        TransferList tokens cover only the structural layout and panel-level design.
      </p>

      <div style={{
      marginBottom: 20
    }}>
        <ControlledTransferList initialLeft={GUESTS.slice(0, 4)} initialRight={GUESTS.slice(4, 6)} leftTitle="Available" rightTitle="Selected" />
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
          {TL_TOKENS.map(({
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
              padding: '6px 10px'
            }}>
                  <div style={{
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
                  </div>
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
        story: 'Live token audit. 25 CSS custom properties with resolved values.'
      }
    }
  }
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ne=["Default","WithSelection","MoveSelected","MoveAll","WithSearch","Loading","Empty","Accessibility","TokenAudit"];export{y as Accessibility,h as Default,b as Empty,x as Loading,f as MoveAll,g as MoveSelected,S as TokenAudit,u as WithSearch,m as WithSelection,ne as __namedExportsOrder,le as default};

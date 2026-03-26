import{j as e}from"./jsx-runtime-BT65X5dW.js";import{r as d}from"./index-C6mWTJJr.js";import{a6 as i}from"./index-BlH9IZLb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GlobalStyles-BQGcaa1d.js";import"./index-Bq2HnrkM.js";const le={title:"Components/Navigation/Stepper",component:i,parameters:{layout:"padded",docs:{description:{component:"Stepper — progression indicator and optional step navigation. Patterns: A (active affordance), C (state-driven indicator). Consumer owns activeStep + completedSteps; component owns no persistent state."}}}},l=[{label:"Cart review"},{label:"Shipping"},{label:"Payment"},{label:"Confirmation"}],k=[{label:"Create account",description:"Name and email"},{label:"Verify email",description:"Check your inbox"},{label:"Set preferences",description:"Notifications and privacy"},{label:"Complete",description:"You're all set"}],j=[{label:"Draft"},{label:"Review"},{label:"Approval",disabled:!1},{label:"Published"}],E=[{label:"Draft"},{label:"Review"},{label:"Legal review",disabled:!0},{label:"Published"}],g=({steps:n,initialStep:s=0,initialCompleted:r,...p})=>{const[o,t]=d.useState(s),[c,a]=d.useState(r??new Set(Array.from({length:s},(C,ee)=>ee)));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(i,{steps:n,activeStep:o,completedSteps:c,onStepClick:C=>t(C),...p}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("button",{onClick:()=>{o>0&&t(o-1)},disabled:o===0,style:{padding:"6px 14px",cursor:"pointer",borderRadius:4,border:"1px solid #D1D5DB"},children:"Back"}),e.jsx("button",{onClick:()=>{o<n.length-1?(a(new Set([...c,o])),t(o+1)):a(new Set([...c,o]))},disabled:o===n.length-1&&c.has(o),style:{padding:"6px 14px",cursor:"pointer",borderRadius:4,border:"none",background:"#0057FF",color:"#fff"},children:o===n.length-1?"Finish":"Next"}),e.jsx("button",{onClick:()=>{t(0),a(new Set)},style:{padding:"6px 14px",cursor:"pointer",borderRadius:4,border:"1px solid #D1D5DB"},children:"Reset"})]}),e.jsxs("div",{style:{fontSize:12,color:"#6B7280"},children:["Active: ",o," — Completed: [",[...c].join(", "),"]"]})]})},m={render:()=>e.jsx(i,{steps:l,activeStep:1}),parameters:{docs:{description:{story:"Default horizontal stepper. Step 0 is completed (auto-derived), step 1 is active, steps 2–3 are inactive. No click handler — read-only display."}}}},S={render:()=>e.jsx(g,{steps:l,initialStep:1}),parameters:{docs:{description:{story:"Interactive horizontal stepper. Click a step or use Back/Next controls. Connectors turn brand blue as steps complete. Pattern C: indicator state switches on activeStep change."}}}},u={render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(g,{steps:k,initialStep:1,orientation:"vertical"})}),parameters:{docs:{description:{story:"Vertical layout. Steps stack in a column with a vertical connector line. Labels and descriptions sit to the right of the indicator column."}}}},x={render:()=>{const[n,s]=d.useState(0),[r,p]=d.useState(new Set),o=()=>{p(t=>new Set([...t,n])),s(t=>t+1)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(i,{steps:l,activeStep:n,completedSteps:r,onStepClick:t=>s(t)}),e.jsxs("div",{style:{fontSize:13,color:"#374151",padding:"16px",background:"#F9FAFB",borderRadius:8},children:[e.jsxs("strong",{children:["Step ",n+1,":"]})," ",l[n].label,e.jsx("p",{style:{marginTop:8,marginBottom:0,color:"#6B7280",fontSize:12},children:"In linear mode, you can only navigate to completed steps or the current step. Future steps are not clickable until reached."})]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("button",{onClick:()=>s(t=>t-1),disabled:n===0,style:{padding:"6px 14px",borderRadius:4,border:"1px solid #D1D5DB",cursor:"pointer"},children:"Back"}),e.jsx("button",{onClick:o,disabled:n===l.length-1,style:{padding:"6px 14px",borderRadius:4,border:"none",background:"#0057FF",color:"#fff",cursor:"pointer"},children:"Next"})]})]})},parameters:{docs:{description:{story:"Linear mode (default). Only completed steps and the current active step are clickable. Clicking a future step has no effect. Use Next/Back to progress."}}}},b={render:()=>{const[n,s]=d.useState(0),[r,p]=d.useState(new Set([0,2]));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(i,{steps:j,activeStep:n,completedSteps:r,onStepClick:s,nonLinear:!0}),e.jsx("div",{style:{fontSize:13,color:"#6B7280"},children:"Non-linear: click any step freely. Steps 0 and 2 start as completed."}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:j.map((o,t)=>e.jsxs("button",{onClick:()=>p(c=>{const a=new Set(c);return a.has(t)?a.delete(t):a.add(t),a}),style:{padding:"4px 10px",borderRadius:4,fontSize:12,border:"1px solid #D1D5DB",cursor:"pointer",background:r.has(t)?"#D1FAE5":"#fff",color:r.has(t)?"#065F46":"#374151"},children:["Toggle ",o.label]},t))})]})},parameters:{docs:{description:{story:"Non-linear mode: all steps are freely clickable. Useful for multi-section forms where order is flexible. Toggle buttons let you mark any step as completed independently."}}}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:13,color:"#6B7280"},children:"All steps completed"}),e.jsx(i,{steps:l,activeStep:3,completedSteps:new Set([0,1,2,3])})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:13,color:"#6B7280"},children:"Partial completion (steps 0–1 done, step 2 active)"}),e.jsx(i,{steps:l,activeStep:2})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:13,color:"#6B7280"},children:"First step active (none completed)"}),e.jsx(i,{steps:l,activeStep:0,completedSteps:new Set})]})]}),parameters:{docs:{description:{story:"Three completion scenarios shown together. Completed steps show a check icon (Pattern A visual affordance). Connectors between completed steps render in brand color."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:13,color:"#6B7280"},children:"Horizontal — step 2 disabled"}),e.jsx(i,{steps:E,activeStep:1,onStepClick:()=>{},nonLinear:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:13,color:"#6B7280"},children:"Vertical — step 2 disabled"}),e.jsx("div",{style:{maxWidth:300},children:e.jsx(i,{steps:E,activeStep:1,orientation:"vertical",onStepClick:()=>{},nonLinear:!0})})]})]}),parameters:{docs:{description:{story:"Disabled steps use muted indicator colors and are never clickable, even in non-linear mode. The step item `disabled: true` prevents interaction."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{fontSize:13,color:"#374151",lineHeight:1.6},children:[e.jsx("strong",{children:"Keyboard behaviour:"}),e.jsxs("ul",{style:{margin:"4px 0 0",paddingLeft:20},children:[e.jsx("li",{children:"Tab → focuses each clickable step indicator (button)"}),e.jsx("li",{children:"Enter / Space → activates the focused step"}),e.jsx("li",{children:"Non-clickable steps are not in the tab order"}),e.jsx("li",{children:"Disabled steps are skipped entirely"})]}),e.jsx("strong",{children:"ARIA landmarks:"}),e.jsxs("ul",{style:{margin:"4px 0 0",paddingLeft:20},children:[e.jsxs("li",{children:["Each clickable indicator: ",e.jsx("code",{children:'role="button"'}),", ",e.jsx("code",{children:'aria-label="Step N: Label"'})]}),e.jsxs("li",{children:["Active step indicator: ",e.jsx("code",{children:'aria-current="step"'})]}),e.jsxs("li",{children:["Indicator icons: ",e.jsx("code",{children:'aria-hidden="true"'})," (number/check is presentational)"]}),e.jsxs("li",{children:["Connectors: ",e.jsx("code",{children:'aria-hidden="true"'})]})]})]}),e.jsx(g,{steps:k,initialStep:1}),e.jsx("div",{style:{maxWidth:320,marginTop:8},children:e.jsx(g,{steps:k,initialStep:1,orientation:"vertical"})})]}),parameters:{docs:{description:{story:"Accessibility annotations for keyboard navigation and screen reader behaviour."}}}},B=[{token:"--ep-component-stepper-indicator-size",role:"Indicator circle diameter"},{token:"--ep-component-stepper-indicator-border-radius",role:"Indicator border radius (50% = circle)"},{token:"--ep-component-stepper-indicator-font-size",role:"Step number font size"},{token:"--ep-component-stepper-indicator-font-weight",role:"Step number font weight"},{token:"--ep-component-stepper-indicator-border-width",role:"Indicator border width"},{token:"--ep-component-stepper-indicator-inactive-background",role:"Indicator bg (inactive)"},{token:"--ep-component-stepper-indicator-inactive-border-color",role:"Indicator border (inactive)"},{token:"--ep-component-stepper-indicator-inactive-color",role:"Indicator text (inactive)"},{token:"--ep-component-stepper-indicator-active-background",role:"Indicator bg (active)"},{token:"--ep-component-stepper-indicator-active-border-color",role:"Indicator border (active)"},{token:"--ep-component-stepper-indicator-active-color",role:"Indicator text (active)"},{token:"--ep-component-stepper-indicator-completed-background",role:"Indicator bg (completed)"},{token:"--ep-component-stepper-indicator-completed-border-color",role:"Indicator border (completed)"},{token:"--ep-component-stepper-indicator-completed-color",role:"Indicator icon (completed)"},{token:"--ep-component-stepper-indicator-disabled-background",role:"Indicator bg (disabled)"},{token:"--ep-component-stepper-indicator-disabled-border-color",role:"Indicator border (disabled)"},{token:"--ep-component-stepper-indicator-disabled-color",role:"Indicator text (disabled)"},{token:"--ep-component-stepper-label-font-size",role:"Label font size"},{token:"--ep-component-stepper-label-active-weight",role:"Label font weight (active)"},{token:"--ep-component-stepper-label-inactive-color",role:"Label text (inactive)"},{token:"--ep-component-stepper-label-active-color",role:"Label text (active)"},{token:"--ep-component-stepper-label-completed-color",role:"Label text (completed)"},{token:"--ep-component-stepper-label-disabled-color",role:"Label text (disabled)"},{token:"--ep-component-stepper-description-font-size",role:"Description font size"},{token:"--ep-component-stepper-description-color",role:"Description text color"},{token:"--ep-component-stepper-connector-color",role:"Connector line (default)"},{token:"--ep-component-stepper-connector-completed-color",role:"Connector line (completed)"},{token:"--ep-component-stepper-connector-thickness",role:"Connector line thickness"}],f={render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",fontSize:13},children:[e.jsxs("h3",{style:{margin:"0 0 8px",fontSize:15},children:["Stepper — ",B.length," CSS custom properties"]}),e.jsx("p",{style:{margin:"0 0 16px",color:"#6B7280",fontSize:12},children:"All 4 states (inactive/active/completed/disabled) are fully tokenized. Pattern C: state string drives token key lookup — no prop explosion."}),e.jsx("div",{style:{marginBottom:24},children:e.jsx(i,{steps:l,activeStep:2,completedSteps:new Set([0,1])})}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #E5E7EB"},children:[e.jsx("th",{style:{textAlign:"left",padding:"6px 10px",color:"#6B7280",fontSize:12},children:"Token"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 10px",color:"#6B7280",fontSize:12},children:"Value"}),e.jsx("th",{style:{textAlign:"left",padding:"6px 10px",color:"#6B7280",fontSize:12},children:"Role"})]})}),e.jsx("tbody",{children:B.map(({token:n,role:s})=>{const r=typeof window<"u"?getComputedStyle(document.documentElement).getPropertyValue(n).trim():"",p=r.startsWith("#")||r.startsWith("rgb")||r==="transparent";return e.jsxs("tr",{style:{borderBottom:"1px solid #F3F4F6"},children:[e.jsx("td",{style:{padding:"6px 10px",fontFamily:"monospace",fontSize:11,color:"#374151"},children:n}),e.jsx("td",{style:{padding:"6px 10px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[p&&e.jsx("span",{style:{display:"inline-block",width:12,height:12,borderRadius:2,background:r,border:"1px solid #E5E7EB",flexShrink:0}}),e.jsx("code",{style:{fontSize:11,color:"#6B7280"},children:r||"—"})]})}),e.jsx("td",{style:{padding:"6px 10px",color:"#6B7280",fontSize:12},children:s})]},n)})})]})]}),parameters:{docs:{description:{story:"Live token audit. 28 CSS custom properties with resolved values."}}}};var z,D,w;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Stepper steps={CHECKOUT_STEPS} activeStep={1} />,
  parameters: {
    docs: {
      description: {
        story: 'Default horizontal stepper. Step 0 is completed (auto-derived), step 1 is active, ' + 'steps 2–3 are inactive. No click handler — read-only display.'
      }
    }
  }
}`,...(w=(D=m.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var T,A,P;S.parameters={...S.parameters,docs:{...(T=S.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <ControlledStepper steps={CHECKOUT_STEPS} initialStep={1} />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive horizontal stepper. Click a step or use Back/Next controls. ' + 'Connectors turn brand blue as steps complete. Pattern C: indicator state switches on activeStep change.'
      }
    }
  }
}`,...(P=(A=S.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var L,N,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 320
  }}>
      <ControlledStepper steps={ONBOARDING_STEPS} initialStep={1} orientation="vertical" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Vertical layout. Steps stack in a column with a vertical connector line. ' + 'Labels and descriptions sit to the right of the indicator column.'
      }
    }
  }
}`,...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var I,R,O;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState<Set<number>>(new Set());
    const handleNext = () => {
      setCompleted(prev => new Set([...prev, activeStep]));
      setActiveStep(prev => prev + 1);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <Stepper steps={CHECKOUT_STEPS} activeStep={activeStep} completedSteps={completed} onStepClick={idx => setActiveStep(idx)}
      // nonLinear defaults to false — linear mode enforced
      />
        <div style={{
        fontSize: 13,
        color: '#374151',
        padding: '16px',
        background: '#F9FAFB',
        borderRadius: 8
      }}>
          <strong>Step {activeStep + 1}:</strong> {(CHECKOUT_STEPS[activeStep] as {
          label: string;
        }).label}
          <p style={{
          marginTop: 8,
          marginBottom: 0,
          color: '#6B7280',
          fontSize: 12
        }}>
            In linear mode, you can only navigate to completed steps or the current step.
            Future steps are not clickable until reached.
          </p>
        </div>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <button onClick={() => setActiveStep(s => s - 1)} disabled={activeStep === 0} style={{
          padding: '6px 14px',
          borderRadius: 4,
          border: '1px solid #D1D5DB',
          cursor: 'pointer'
        }}>
            Back
          </button>
          <button onClick={handleNext} disabled={activeStep === CHECKOUT_STEPS.length - 1} style={{
          padding: '6px 14px',
          borderRadius: 4,
          border: 'none',
          background: '#0057FF',
          color: '#fff',
          cursor: 'pointer'
        }}>
            Next
          </button>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Linear mode (default). Only completed steps and the current active step are clickable. ' + 'Clicking a future step has no effect. Use Next/Back to progress.'
      }
    }
  }
}`,...(O=(R=x.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var _,W,K;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState<Set<number>>(new Set([0, 2]));
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <Stepper steps={WORKFLOW_STEPS} activeStep={activeStep} completedSteps={completed} onStepClick={setActiveStep} nonLinear />
        <div style={{
        fontSize: 13,
        color: '#6B7280'
      }}>
          Non-linear: click any step freely. Steps 0 and 2 start as completed.
        </div>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          {WORKFLOW_STEPS.map((step, i) => <button key={i} onClick={() => setCompleted(prev => {
          const next = new Set(prev);
          next.has(i) ? next.delete(i) : next.add(i);
          return next;
        })} style={{
          padding: '4px 10px',
          borderRadius: 4,
          fontSize: 12,
          border: '1px solid #D1D5DB',
          cursor: 'pointer',
          background: completed.has(i) ? '#D1FAE5' : '#fff',
          color: completed.has(i) ? '#065F46' : '#374151'
        }}>
              Toggle {(step as {
            label: string;
          }).label}
            </button>)}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Non-linear mode: all steps are freely clickable. ' + 'Useful for multi-section forms where order is flexible. ' + 'Toggle buttons let you mark any step as completed independently.'
      }
    }
  }
}`,...(K=(W=b.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var H,U,V;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <p style={{
        margin: '0 0 12px',
        fontSize: 13,
        color: '#6B7280'
      }}>All steps completed</p>
        <Stepper steps={CHECKOUT_STEPS} activeStep={3} completedSteps={new Set([0, 1, 2, 3])} />
      </div>
      <div>
        <p style={{
        margin: '0 0 12px',
        fontSize: 13,
        color: '#6B7280'
      }}>Partial completion (steps 0–1 done, step 2 active)</p>
        <Stepper steps={CHECKOUT_STEPS} activeStep={2} />
      </div>
      <div>
        <p style={{
        margin: '0 0 12px',
        fontSize: 13,
        color: '#6B7280'
      }}>First step active (none completed)</p>
        <Stepper steps={CHECKOUT_STEPS} activeStep={0} completedSteps={new Set()} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Three completion scenarios shown together. ' + 'Completed steps show a check icon (Pattern A visual affordance). ' + 'Connectors between completed steps render in brand color.'
      }
    }
  }
}`,...(V=(U=v.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var G,Y,q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <p style={{
        margin: '0 0 12px',
        fontSize: 13,
        color: '#6B7280'
      }}>Horizontal — step 2 disabled</p>
        <Stepper steps={DISABLED_STEPS} activeStep={1} onStepClick={() => {}} nonLinear />
      </div>
      <div>
        <p style={{
        margin: '0 0 12px',
        fontSize: 13,
        color: '#6B7280'
      }}>Vertical — step 2 disabled</p>
        <div style={{
        maxWidth: 300
      }}>
          <Stepper steps={DISABLED_STEPS} activeStep={1} orientation="vertical" onStepClick={() => {}} nonLinear />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Disabled steps use muted indicator colors and are never clickable, ' + 'even in non-linear mode. The step item \`disabled: true\` prevents interaction.'
      }
    }
  }
}`,...(q=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var J,M,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div style={{
      fontSize: 13,
      color: '#374151',
      lineHeight: 1.6
    }}>
        <strong>Keyboard behaviour:</strong>
        <ul style={{
        margin: '4px 0 0',
        paddingLeft: 20
      }}>
          <li>Tab → focuses each clickable step indicator (button)</li>
          <li>Enter / Space → activates the focused step</li>
          <li>Non-clickable steps are not in the tab order</li>
          <li>Disabled steps are skipped entirely</li>
        </ul>
        <strong>ARIA landmarks:</strong>
        <ul style={{
        margin: '4px 0 0',
        paddingLeft: 20
      }}>
          <li>Each clickable indicator: <code>role="button"</code>, <code>aria-label="Step N: Label"</code></li>
          <li>Active step indicator: <code>aria-current="step"</code></li>
          <li>Indicator icons: <code>aria-hidden="true"</code> (number/check is presentational)</li>
          <li>Connectors: <code>aria-hidden="true"</code></li>
        </ul>
      </div>
      <ControlledStepper steps={ONBOARDING_STEPS} initialStep={1} />
      <div style={{
      maxWidth: 320,
      marginTop: 8
    }}>
        <ControlledStepper steps={ONBOARDING_STEPS} initialStep={1} orientation="vertical" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility annotations for keyboard navigation and screen reader behaviour.'
      }
    }
  }
}`,...(Q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,Z,$;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: 'system-ui',
    fontSize: 13
  }}>
      <h3 style={{
      margin: '0 0 8px',
      fontSize: 15
    }}>
        Stepper — {STEPPER_TOKENS.length} CSS custom properties
      </h3>
      <p style={{
      margin: '0 0 16px',
      color: '#6B7280',
      fontSize: 12
    }}>
        All 4 states (inactive/active/completed/disabled) are fully tokenized.
        Pattern C: state string drives token key lookup — no prop explosion.
      </p>

      <div style={{
      marginBottom: 24
    }}>
        <Stepper steps={CHECKOUT_STEPS} activeStep={2} completedSteps={new Set([0, 1])} />
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
          {STEPPER_TOKENS.map(({
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
        story: 'Live token audit. 28 CSS custom properties with resolved values.'
      }
    }
  }
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const ae=["Default","Horizontal","Vertical","Linear","NonLinear","WithCompleted","DisabledSteps","Accessibility","TokenAudit"];export{y as Accessibility,m as Default,h as DisabledSteps,S as Horizontal,x as Linear,b as NonLinear,f as TokenAudit,u as Vertical,v as WithCompleted,ae as __namedExportsOrder,le as default};

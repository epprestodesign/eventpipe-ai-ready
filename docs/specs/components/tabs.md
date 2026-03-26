# Tabs

**Package:** `@eventpipe/components` | **MUI Base:** `Tabs` + `Tab`

## TypeScript Interfaces
```ts
interface TabsProps {
  value?: unknown;
  defaultValue?: unknown;
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  orientation?: 'horizontal' | 'vertical';
  scrollButtons?: 'auto' | true | false;
  textColor?: 'primary' | 'secondary' | 'inherit';
  indicatorColor?: 'primary' | 'secondary';
  centered?: boolean;
  onChange?: (event: SyntheticEvent, value: unknown) => void;
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}

interface TabProps {
  label: ReactNode;
  value?: unknown;
  icon?: ReactElement;
  iconPosition?: 'start' | 'end' | 'top' | 'bottom';
  disabled?: boolean;
  wrapped?: boolean;
  className?: string;
  sx?: SxProps;
}

// EP Addition — not in MUI
interface TabPanelProps {
  value: unknown;
  index: unknown;
  keepMounted?: boolean;         // keep DOM when inactive (default: false)
  className?: string;
  sx?: SxProps;
  children: ReactNode;
}
```

## Compound Sub-components
```tsx
Tabs.Panel = TabPanel;  // EP addition
```

## Usage Pattern
```tsx
<Tabs value={activeTab} onChange={handleChange}>
  <Tab label="Events" value="events" />
  <Tab label="Venues" value="venues" />
</Tabs>
<Tabs.Panel value={activeTab} index="events">
  Events content
</Tabs.Panel>
<Tabs.Panel value={activeTab} index="venues">
  Venues content
</Tabs.Panel>
```

## EP Additions
- `Tabs.Panel` compound sub-component (MUI provides no Panel primitive)
- `keepMounted` on Panel for preserving panel state

## Accessibility
Tabs implement ARIA tabs pattern: `role="tablist"`, `role="tab"`, `role="tabpanel"`.
Arrow key navigation between tabs. Panels associated via `aria-labelledby`.

## Token Consumption
`ep.component.tabs.*` — indicator, tab text, background, active state.

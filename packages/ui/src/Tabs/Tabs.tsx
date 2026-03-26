import { forwardRef } from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import type { TabsProps, TabProps, TabPanelProps } from './Tabs.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-tabs-* custom properties.

const TOKEN = {
  fontFamily:          () => `var(--ep-component-tabs-font-family)`,
  borderBottomColor:   () => `var(--ep-component-tabs-border-bottom-color)`,
  borderBottomWidth:   () => `var(--ep-component-tabs-border-bottom-width)`,

  tabColor:            () => `var(--ep-component-tabs-tab-color)`,
  tabColorActive:      () => `var(--ep-component-tabs-tab-color-active)`,
  tabColorDisabled:    () => `var(--ep-component-tabs-tab-color-disabled)`,
  tabBgHover:          () => `var(--ep-component-tabs-tab-background-hover)`,
  tabBgFocus:          () => `var(--ep-component-tabs-tab-background-focus)`,

  tabFontSize:         () => `var(--ep-component-tabs-tab-font-size)`,
  tabFontWeight:       () => `var(--ep-component-tabs-tab-font-weight)`,
  tabFontWeightActive: () => `var(--ep-component-tabs-tab-font-weight-active)`,
  tabPy:               () => `var(--ep-component-tabs-tab-padding-y)`,
  tabPx:               () => `var(--ep-component-tabs-tab-padding-x)`,
  tabMinWidth:         () => `var(--ep-component-tabs-tab-min-width)`,

  indicatorColor:      () => `var(--ep-component-tabs-indicator-color)`,
  indicatorHeight:     () => `var(--ep-component-tabs-indicator-height)`,
  indicatorRadius:     () => `var(--ep-component-tabs-indicator-border-radius)`,

  focusColor:          () => `var(--ep-component-tabs-focus-ring-color)`,
  focusWidth:          () => `var(--ep-component-tabs-focus-ring-width)`,
  focusOffset:         () => `var(--ep-component-tabs-focus-ring-offset)`,
} as const;

// ─── Styled Tabs ────────────────────────────────────────────────────────────

const StyledTabs = styled(MuiTabs)({
  // Divider line under the tablist
  borderBottom: `${TOKEN.borderBottomWidth()} solid ${TOKEN.borderBottomColor()}`,

  // Active indicator bar
  '& .MuiTabs-indicator': {
    backgroundColor: TOKEN.indicatorColor(),
    height:          TOKEN.indicatorHeight(),
    borderRadius:    TOKEN.indicatorRadius(),
  },

  // Framework reset — MUI scrollButtons use SVG icons; no token override needed
});

// ─── Styled Tab ─────────────────────────────────────────────────────────────

const StyledTab = styled(MuiTab)({
  // Base text
  // fontFamily: explicitly set via token — MUI's theme sets Roboto which bleeds
  // through even after 'inherit' if no ancestor provides the EP font stack.
  fontFamily:  TOKEN.fontFamily(),
  color:       TOKEN.tabColor(),
  fontSize:    TOKEN.tabFontSize(),
  fontWeight:  TOKEN.tabFontWeight(),
  minWidth:    TOKEN.tabMinWidth(),
  padding:     `${TOKEN.tabPy()} ${TOKEN.tabPx()}`,
  // Framework reset — MUI uppercases tab labels; preserve case from props
  textTransform: 'none',

  // Selected state
  '&.Mui-selected': {
    color:      TOKEN.tabColorActive(),
    fontWeight: TOKEN.tabFontWeightActive(),
  },

  // Disabled state
  '&.Mui-disabled': {
    color: TOKEN.tabColorDisabled(),
  },

  // Hover — scoped away from disabled
  '&:hover:not(.Mui-disabled)': {
    backgroundColor: TOKEN.tabBgHover(),
    // Framework reset — MUI applies opacity on hover for Tab
    opacity: 1,
  },

  // Focus ring — keyboard only, consistent with EP interactive controls
  '&.Mui-focusVisible': {
    // Framework convention — 2px width and 2px offset are structural focus ring
    // geometry consistent with all EP interactive controls; color is the design decision.
    outline:       `${TOKEN.focusWidth()} solid ${TOKEN.focusColor()}`,
    outlineOffset: TOKEN.focusOffset(),
    borderRadius:  '4px', // structural — slight rounding on the focus ring hit area
    backgroundColor: TOKEN.tabBgFocus(),
  },

  // Framework reset — MUI sets opacity: 0.7 on Tabs that are not selected
  opacity: 1,
});

// ─── TabPanel ────────────────────────────────────────────────────────────────

/**
 * TabPanel — content region associated with a Tab.
 *
 * EP addition — MUI provides no Panel primitive.
 * Renders when `value === index`. `keepMounted` preserves DOM when inactive.
 *
 * Spec: docs/specs/components/tabs.md
 */
const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  function TabPanel({ value, index, keepMounted = false, id, className, sx, children }, ref) {
    const isActive = value === index;

    if (!isActive && !keepMounted) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        hidden={!isActive}
        id={id}
        aria-labelledby={id ? `tab-${id}` : undefined}
        className={className}
        // sx is not directly supported on a plain div; consumers can pass className or inline style
      >
        {(isActive || keepMounted) && children}
      </div>
    );
  }
);

TabPanel.displayName = 'TabPanel';

// ─── Tab ─────────────────────────────────────────────────────────────────────

/**
 * Tab — individual tab button inside a Tabs container.
 *
 * Spec: docs/specs/components/tabs.md
 */
export const Tab = forwardRef<HTMLDivElement, TabProps>(
  function Tab({ label, value, icon, iconPosition, disabled, wrapped, className, sx, ...rest }, ref) {
    return (
      <StyledTab
        ref={ref}
        label={label}
        value={value}
        icon={icon}
        iconPosition={iconPosition}
        disabled={disabled}
        wrapped={wrapped}
        className={className}
        sx={sx}
        {...rest}
      />
    );
  }
);

Tab.displayName = 'Tab';

// ─── Tabs ─────────────────────────────────────────────────────────────────────

/**
 * Tabs — horizontal (or vertical) tab strip with keyboard navigation.
 *
 * Implements ARIA tabs pattern: role="tablist", role="tab", role="tabpanel".
 * Arrow key navigation between tabs handled by MUI.
 * Compose with Tab children and Tabs.Panel for content regions.
 *
 * ```tsx
 * <Tabs value={active} onChange={(_, v) => setActive(v)}>
 *   <Tab label="Events" value="events" />
 *   <Tab label="Venues" value="venues" />
 * </Tabs>
 * <Tabs.Panel value={active} index="events">Events content</Tabs.Panel>
 * <Tabs.Panel value={active} index="venues">Venues content</Tabs.Panel>
 * ```
 *
 * Spec: docs/specs/components/tabs.md
 */
const _Tabs = forwardRef<HTMLDivElement, TabsProps>(
  function Tabs(
    {
      value,
      defaultValue,
      variant        = 'standard',
      orientation    = 'horizontal',
      scrollButtons  = 'auto',
      textColor      = 'inherit',
      indicatorColor = 'primary',
      centered       = false,
      onChange,
      className,
      sx,
      children,
    },
    ref
  ) {
    return (
      <StyledTabs
        ref={ref}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value={value as any}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        defaultValue={defaultValue as any}
        variant={variant}
        orientation={orientation}
        scrollButtons={scrollButtons}
        // textColor="inherit" disables MUI's palette color lookup — our TOKEN.tabColor drives the color
        textColor={textColor}
        indicatorColor={indicatorColor}
        centered={centered}
        onChange={onChange}
        className={className}
        sx={sx}
      >
        {children}
      </StyledTabs>
    );
  }
);

_Tabs.displayName = 'Tabs';

// ─── Compound component attachment ─────────────────────────────────────────

export const Tabs = _Tabs as typeof _Tabs & {
  Panel: typeof TabPanel;
};

Tabs.Panel = TabPanel;

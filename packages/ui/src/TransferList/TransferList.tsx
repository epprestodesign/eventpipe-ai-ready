import { forwardRef, useState, useCallback, useMemo, useId } from 'react';
import Box from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import type { TransferListProps, TransferListItem } from './TransferList.types';
import { Checkbox } from '../Checkbox';
import { Button } from '../Button';
import { List, ListItem } from '../List';
import { TextField } from '../TextField';
import { Icon } from '../Icon';
import { useDebounce } from '../hooks/useDebounce';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-transfer-list-* custom properties.

const TOKEN = {
  // List panel
  listBg:           () => `var(--ep-component-transfer-list-list-background)`,
  listBorder:       () => `var(--ep-component-transfer-list-list-border-color)`,
  listRadius:       () => `var(--ep-component-transfer-list-list-border-radius)`,
  listMinH:         () => `var(--ep-component-transfer-list-list-min-height)`,
  listMaxH:         () => `var(--ep-component-transfer-list-list-max-height)`,
  listWidth:        () => `var(--ep-component-transfer-list-list-width)`,
  // Header
  headerBg:         () => `var(--ep-component-transfer-list-header-background)`,
  headerSelectedBg: () => `var(--ep-component-transfer-list-header-selected-background)`,
  headerColor:      () => `var(--ep-component-transfer-list-header-color)`,
  headerPy:         () => `var(--ep-component-transfer-list-header-padding-y)`,
  headerPx:         () => `var(--ep-component-transfer-list-header-padding-x)`,
  headerFontSize:   () => `var(--ep-component-transfer-list-header-font-size)`,
  headerFontWeight: () => `var(--ep-component-transfer-list-header-font-weight)`,
  headerDivider:    () => `var(--ep-component-transfer-list-header-divider-color)`,
  // Search
  searchBorder:     () => `var(--ep-component-transfer-list-search-border-color)`,
  // Item
  checkboxGap:      () => `var(--ep-component-transfer-list-item-checkbox-gap)`,
  // Controls column
  controlsGap:      () => `var(--ep-component-transfer-list-controls-gap)`,
  controlsWidth:    () => `var(--ep-component-transfer-list-controls-width)`,
  // Count
  countColor:       () => `var(--ep-component-transfer-list-count-color)`,
  countFontSize:    () => `var(--ep-component-transfer-list-count-font-size)`,
  // Empty
  emptyColor:       () => `var(--ep-component-transfer-list-empty-color)`,
  emptyFontSize:    () => `var(--ep-component-transfer-list-empty-font-size)`,
  // Focus ring — used on the outer list container for keyboard context
  focusColor:       () => `var(--ep-component-transfer-list-focus-ring-color)`,
  focusWidth:       () => `var(--ep-component-transfer-list-focus-ring-width)`,
  focusOffset:      () => `var(--ep-component-transfer-list-focus-ring-offset)`,
} as const;

// ─── Skeleton row count for loading state (Pattern E) ─────────────────────
const LOADING_ROWS = 5;
const SKELETON_WIDTHS = [140, 100, 160, 120, 80] as const;

// ─── Styled panel container ────────────────────────────────────────────────

const StyledPanel = styled('div')({
  display:       'flex',
  flexDirection: 'column',
  width:         TOKEN.listWidth(),
  minWidth:      TOKEN.listWidth(),
  border:        `1px solid ${TOKEN.listBorder()}`,
  borderRadius:  TOKEN.listRadius(),
  backgroundColor: TOKEN.listBg(),
  overflow: 'hidden',  // structural — clips header + list inside the rounded border
});

// ─── Internal: TransferListPanel ──────────────────────────────────────────
// Not exported. Renders one side (left or right) of the transfer list.

interface PanelProps {
  panelId: string;
  title: React.ReactNode;
  items: TransferListItem[];           // full item list
  filteredItems: TransferListItem[];   // items after client-side search filter
  checked: Set<string>;
  onToggle: (id: string) => void;
  onToggleAll: () => void;
  searchable: boolean;
  searchValue: string;
  onSearchChange: (v: string) => void;
  searchPlaceholder: string;
  isLoading: boolean;
}

const TransferListPanel = ({
  panelId,
  title,
  items,
  filteredItems,
  checked,
  onToggle,
  onToggleAll,
  searchable,
  searchValue,
  onSearchChange,
  searchPlaceholder,
  isLoading,
}: PanelProps) => {
  const eligibleItems = items.filter(i => !i.disabled);
  const allChecked    = eligibleItems.length > 0 && eligibleItems.every(i => checked.has(i.id));
  const someChecked   = eligibleItems.some(i => checked.has(i.id)) && !allChecked;
  const checkedCount  = items.filter(i => checked.has(i.id)).length;

  // Pattern C-like: header background switches on selection
  const headerBg = checkedCount > 0 ? TOKEN.headerSelectedBg() : TOKEN.headerBg();

  const listLabelId = `${panelId}-header`;

  return (
    <StyledPanel>
      {/* ── Header — Pattern C: switches on selection ───────────────────── */}
      <div
        style={{
          display:         'flex',
          alignItems:      'center',
          gap:             TOKEN.checkboxGap(),
          padding:         `${TOKEN.headerPy()} ${TOKEN.headerPx()}`,
          backgroundColor: headerBg,
          borderBottom:    `1px solid ${TOKEN.headerDivider()}`,
          transition:      'background-color 150ms ease',  // structural
          minHeight:       '48px',                          // structural — prevents layout shift
        }}
      >
        {/* Select-all checkbox — Pattern B */}
        <Checkbox
          size="sm"
          checked={allChecked}
          indeterminate={someChecked}
          disabled={isLoading || eligibleItems.length === 0}
          onChange={(e) => {
            if (!e.target.checked && !e.target.indeterminate) {
              // deselect all
            }
            onToggleAll();
          }}
          aria-label={`Select all in ${typeof title === 'string' ? title : 'list'}`}
        />

        {/* Title + count */}
        <div id={listLabelId} style={{ flex: 1 }}>
          <div style={{
            fontSize:   TOKEN.headerFontSize(),
            fontWeight: TOKEN.headerFontWeight(),
            color:      TOKEN.headerColor(),
          }}>
            {checkedCount > 0 ? (
              // Pattern C: selection count shown when items are checked
              <span aria-live="polite">
                {checkedCount}/{items.length} selected
              </span>
            ) : (
              title
            )}
          </div>
          {checkedCount === 0 && (
            <div style={{ fontSize: TOKEN.countFontSize(), color: TOKEN.countColor() }}>
              {items.length} item{items.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>
      </div>

      {/* ── Search field (optional) — MA-2 ───────────────────────────────── */}
      {searchable && (
        <div style={{ borderBottom: `1px solid ${TOKEN.searchBorder()}` }}>
          <TextField
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            size="sm"
            startAdornment={
              <span aria-hidden="true" style={{ display: 'flex', color: 'inherit' }}>
                <Icon name="search" size="sm" />
              </span>
            }
            sx={{
              // Framework reset — remove TextField's bottom margin inside panel
              '& .MuiFormControl-root': { marginBottom: 0 },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0,
                // Remove outer border — panel border handles it
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              },
            }}
          />
        </div>
      )}

      {/* ── List body — Pattern E (loading) ─────────────────────────────── */}
      <div
        role="listbox"
        aria-labelledby={listLabelId}
        aria-multiselectable="true"
        style={{
          overflowY: 'auto',
          minHeight: TOKEN.listMinH(),
          maxHeight: TOKEN.listMaxH(),
          flex:      1,
        }}
      >
        {isLoading ? (
          // Pattern E: loading state — Skeleton rows
          <List disablePadding dense>
            {SKELETON_WIDTHS.map((w, i) => (
              <ListItem key={i} disabled>
                <div style={{ display: 'flex', alignItems: 'center', gap: TOKEN.checkboxGap() }}>
                  <MuiSkeleton variant="rounded" width={16} height={16} />
                  <MuiSkeleton variant="text" width={w} />
                </div>
              </ListItem>
            ))}
          </List>
        ) : filteredItems.length === 0 ? (
          // Pattern F: empty state
          <div
            style={{
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              flexDirection:  'column',
              gap:            '8px',
              padding:        '32px 16px',
              color:          TOKEN.emptyColor(),
              fontSize:       TOKEN.emptyFontSize(),
              textAlign:      'center',
            }}
          >
            {items.length > 0 ? (
              // Filtered empty (search matches nothing)
              <>
                <Icon name="search" size="md" />
                <span>No items match your search</span>
              </>
            ) : (
              // Data empty
              <>
                <Icon name="check" size="md" />
                <span>No items</span>
              </>
            )}
          </div>
        ) : (
          // Data rows — Pattern B: selection drives checkbox + ListItem.selected
          <List disablePadding dense>
            {filteredItems.map((item) => {
              const isChecked = checked.has(item.id);
              return (
                <ListItem
                  key={item.id}
                  selected={isChecked}
                  disabled={item.disabled}
                  onClick={item.disabled ? undefined : () => onToggle(item.id)}
                >
                  <div
                    style={{
                      display:    'flex',
                      alignItems: 'center',
                      gap:        TOKEN.checkboxGap(),
                      // Prevent the inner checkbox from catching the click (ListItem handles it)
                      pointerEvents: 'none',
                    }}
                  >
                    <Checkbox
                      size="sm"
                      checked={isChecked}
                      disabled={item.disabled}
                      // onChange is a no-op — the click is handled by the ListItem row above.
                      // This keeps Checkbox controlled without a separate handler per item.
                      onChange={() => {}}
                    />
                    <span>{item.label}</span>
                  </div>
                </ListItem>
              );
            })}
          </List>
        )}
      </div>
    </StyledPanel>
  );
};

// ─── TransferList ─────────────────────────────────────────────────────────────

/**
 * TransferList — dual-list selection + move system.
 *
 * Patterns used:
 * - Pattern B: selection state — checkbox state is component-internal (transient staging);
 *   list data (leftItems / rightItems) always lives in the consumer.
 * - Pattern C: header selected-state — header background switches on checkedCount > 0.
 * - Pattern E: loading state — Skeleton rows when leftLoading / rightLoading.
 * - Pattern F: empty state — rendered inside each panel when items array is empty.
 * - MA-2: debounce — search inputs debounced at 300ms via useDebounce.
 *
 * Deviation: checkbox selection state is internal (not Pattern B).
 * Rationale: checked items are transient staging state for the move operation.
 * Once items are moved, checked state resets. This is not persistent data selection.
 * Consumer owns the data arrays (leftItems / rightItems) which DO follow Pattern B.
 *
 * Spec: docs/contracts/product-system-rules.md
 */
export const TransferList = forwardRef<HTMLDivElement, TransferListProps>(
  function TransferList(
    {
      leftItems,
      rightItems,
      onChange,
      leftTitle  = 'Available',
      rightTitle = 'Selected',
      searchable = false,
      searchPlaceholder = 'Search...',
      leftLoading  = false,
      rightLoading = false,
      className,
      sx,
    },
    ref
  ) {
    const id = useId();

    // ── Selection state — internal (see deviation note in JSDoc) ────────────
    const [leftChecked,  setLeftChecked]  = useState<Set<string>>(new Set());
    const [rightChecked, setRightChecked] = useState<Set<string>>(new Set());

    // ── Search state — MA-2: internal, debounced ─────────────────────────
    const [leftSearch,  setLeftSearch]  = useState('');
    const [rightSearch, setRightSearch] = useState('');
    const debouncedLeft  = useDebounce(leftSearch,  300);
    const debouncedRight = useDebounce(rightSearch, 300);

    // ── Client-side filter — debounced query against item labels ──────────
    const filteredLeft = useMemo(() => {
      const q = debouncedLeft.toLowerCase();
      return q ? leftItems.filter(i => i.label.toLowerCase().includes(q)) : leftItems;
    }, [leftItems, debouncedLeft]);

    const filteredRight = useMemo(() => {
      const q = debouncedRight.toLowerCase();
      return q ? rightItems.filter(i => i.label.toLowerCase().includes(q)) : rightItems;
    }, [rightItems, debouncedRight]);

    // ── Toggle helpers ────────────────────────────────────────────────────
    const toggleLeft = useCallback((id: string) => {
      setLeftChecked(prev => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      });
    }, []);

    const toggleRight = useCallback((id: string) => {
      setRightChecked(prev => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      });
    }, []);

    const toggleAllLeft = useCallback(() => {
      const eligible = leftItems.filter(i => !i.disabled);
      const allChecked = eligible.every(i => leftChecked.has(i.id));
      setLeftChecked(allChecked ? new Set() : new Set(eligible.map(i => i.id)));
    }, [leftItems, leftChecked]);

    const toggleAllRight = useCallback(() => {
      const eligible = rightItems.filter(i => !i.disabled);
      const allChecked = eligible.every(i => rightChecked.has(i.id));
      setRightChecked(allChecked ? new Set() : new Set(eligible.map(i => i.id)));
    }, [rightItems, rightChecked]);

    // ── Move operations ───────────────────────────────────────────────────

    // Move checked left items → right
    const moveSelectedRight = useCallback(() => {
      const moving = leftItems.filter(i => leftChecked.has(i.id));
      const newLeft  = leftItems.filter(i => !leftChecked.has(i.id));
      const newRight = [...rightItems, ...moving];
      setLeftChecked(new Set());
      onChange(newLeft, newRight);
    }, [leftItems, rightItems, leftChecked, onChange]);

    // Move all left items → right
    const moveAllRight = useCallback(() => {
      const movable = leftItems.filter(i => !i.disabled);
      const newLeft  = leftItems.filter(i => i.disabled);  // keep disabled items
      const newRight = [...rightItems, ...movable];
      setLeftChecked(new Set());
      onChange(newLeft, newRight);
    }, [leftItems, rightItems, onChange]);

    // Move checked right items ← left
    const moveSelectedLeft = useCallback(() => {
      const moving  = rightItems.filter(i => rightChecked.has(i.id));
      const newRight = rightItems.filter(i => !rightChecked.has(i.id));
      const newLeft  = [...leftItems, ...moving];
      setRightChecked(new Set());
      onChange(newLeft, newRight);
    }, [leftItems, rightItems, rightChecked, onChange]);

    // Move all right items ← left
    const moveAllLeft = useCallback(() => {
      const movable = rightItems.filter(i => !i.disabled);
      const newRight = rightItems.filter(i => i.disabled);  // keep disabled items
      const newLeft  = [...leftItems, ...movable];
      setRightChecked(new Set());
      onChange(newLeft, newRight);
    }, [leftItems, rightItems, onChange]);

    // ── Derived disabled states for control buttons ───────────────────────
    const leftCheckedCount  = leftItems.filter(i => leftChecked.has(i.id)).length;
    const rightCheckedCount = rightItems.filter(i => rightChecked.has(i.id)).length;
    const leftMovableCount  = leftItems.filter(i => !i.disabled).length;
    const rightMovableCount = rightItems.filter(i => !i.disabled).length;

    return (
      <Box
        ref={ref}
        className={className}
        sx={sx}
        style={{
          display:    'flex',
          alignItems: 'flex-start',
          gap:        0,
        }}
      >
        {/* ── Left panel ─────────────────────────────────────────────────── */}
        <TransferListPanel
          panelId={`${id}-left`}
          title={leftTitle}
          items={leftItems}
          filteredItems={filteredLeft}
          checked={leftChecked}
          onToggle={toggleLeft}
          onToggleAll={toggleAllLeft}
          searchable={searchable}
          searchValue={leftSearch}
          onSearchChange={setLeftSearch}
          searchPlaceholder={searchPlaceholder}
          isLoading={leftLoading}
        />

        {/* ── Controls column — Pattern D (actions) + Button + Icon system ── */}
        <div
          role="group"
          aria-label="Transfer controls"
          style={{
            display:        'flex',
            flexDirection:  'column',
            alignItems:     'center',
            justifyContent: 'center',
            gap:            TOKEN.controlsGap(),
            width:          TOKEN.controlsWidth(),
            minWidth:       TOKEN.controlsWidth(),
            alignSelf:      'stretch',
            padding:        '0 4px',  // structural — optical centering
          }}
        >
          {/* Move all → */}
          <Button
            variant="outlined"
            size="sm"
            color="primary"
            disabled={leftMovableCount === 0 || leftLoading}
            onClick={moveAllRight}
            aria-label="Move all to selected"
          >
            <Icon name="chevrons-right" size="sm" />
          </Button>

          {/* Move selected → */}
          <Button
            variant="outlined"
            size="sm"
            color="primary"
            disabled={leftCheckedCount === 0}
            onClick={moveSelectedRight}
            aria-label="Move selected to selected"
          >
            <Icon name="arrow-forward" size="sm" />
          </Button>

          {/* Move selected ← */}
          <Button
            variant="outlined"
            size="sm"
            color="primary"
            disabled={rightCheckedCount === 0}
            onClick={moveSelectedLeft}
            aria-label="Move selected back to available"
          >
            <Icon name="arrow-back" size="sm" />
          </Button>

          {/* Move all ← */}
          <Button
            variant="outlined"
            size="sm"
            color="primary"
            disabled={rightMovableCount === 0 || rightLoading}
            onClick={moveAllLeft}
            aria-label="Move all back to available"
          >
            <Icon name="chevrons-left" size="sm" />
          </Button>
        </div>

        {/* ── Right panel ────────────────────────────────────────────────── */}
        <TransferListPanel
          panelId={`${id}-right`}
          title={rightTitle}
          items={rightItems}
          filteredItems={filteredRight}
          checked={rightChecked}
          onToggle={toggleRight}
          onToggleAll={toggleAllRight}
          searchable={searchable}
          searchValue={rightSearch}
          onSearchChange={setRightSearch}
          searchPlaceholder={searchPlaceholder}
          isLoading={rightLoading}
        />
      </Box>
    );
  }
);

TransferList.displayName = 'TransferList';

import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import MuiDialog from '@mui/material/Dialog';
import Fade from '@mui/material/Fade';
import MuiSkeleton from '@mui/material/Skeleton';
import type { CommandPaletteProps, CommandItem, CommandGroup } from './CommandPalette.types';
import { TextField } from '../TextField';
import { List, ListItem, ListDivider } from '../List';
import { Icon } from '../Icon';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-command-palette-* custom properties.
// Active/selected item background reuses the List token namespace (--ep-component-list-item-*).

const TOKEN = {
  // Overlay
  overlayBg:        () => `var(--ep-component-command-palette-overlay-background)`,
  overlayRadius:    () => `var(--ep-component-command-palette-overlay-border-radius)`,
  overlayShadow:    () => `var(--ep-component-command-palette-overlay-shadow)`,
  overlayWidth:     () => `var(--ep-component-command-palette-overlay-width)`,
  overlayTopOffset: () => `var(--ep-component-command-palette-overlay-top-offset)`,
  // Input
  inputFontSize: () => `var(--ep-component-command-palette-input-font-size)`,
  inputPy:       () => `var(--ep-component-command-palette-input-padding-y)`,
  inputPx:       () => `var(--ep-component-command-palette-input-padding-x)`,
  // Divider
  dividerColor: () => `var(--ep-component-command-palette-divider-color)`,
  // Item
  itemPy:          () => `var(--ep-component-command-palette-item-padding-y)`,
  itemPx:          () => `var(--ep-component-command-palette-item-padding-x)`,
  itemFontSize:    () => `var(--ep-component-command-palette-item-font-size)`,
  itemDescSize:    () => `var(--ep-component-command-palette-item-description-font-size)`,
  itemDescColor:   () => `var(--ep-component-command-palette-item-description-color)`,
  itemShortcutClr: () => `var(--ep-component-command-palette-item-shortcut-color)`,
  itemShortcutSz:  () => `var(--ep-component-command-palette-item-shortcut-font-size)`,
  // List
  listMaxHeight: () => `var(--ep-component-command-palette-list-max-height)`,
  // Group
  groupLabelSize:   () => `var(--ep-component-command-palette-group-label-font-size)`,
  groupLabelColor:  () => `var(--ep-component-command-palette-group-label-color)`,
  groupLabelWeight: () => `var(--ep-component-command-palette-group-label-font-weight)`,
  groupLabelPy:     () => `var(--ep-component-command-palette-group-label-padding-y)`,
  // Empty
  emptyFontSize: () => `var(--ep-component-command-palette-empty-font-size)`,
  emptyColor:    () => `var(--ep-component-command-palette-empty-color)`,
} as const;

// ─── PAPER_SX — portal-safe surface styling ────────────────────────────────
// Same PAPER_SX pattern used in Popover, Drawer, etc.
// Token vars set on :root remain accessible inside the MuiDialog Portal.

const PAPER_SX = {
  backgroundColor: TOKEN.overlayBg(),
  borderRadius:    TOKEN.overlayRadius(),
  boxShadow:       TOKEN.overlayShadow(),
  width:           TOKEN.overlayWidth(),
  maxWidth:        TOKEN.overlayWidth(),
  margin:          0,  // structural — override MUI Dialog Paper margin
  overflow:        'hidden',  // structural — clip the list scroll inside the border-radius
} as const;

// ─── Normalise input to CommandGroup[] ─────────────────────────────────────

const isGrouped = (
  commands: CommandItem[] | CommandGroup[]
): commands is CommandGroup[] =>
  commands.length > 0 && 'items' in (commands[0] as object);

const normalise = (commands: CommandItem[] | CommandGroup[]): CommandGroup[] =>
  isGrouped(commands)
    ? commands
    : [{ id: '__flat__', label: '', items: commands }];

// ─── Skeleton widths for loading state (Pattern E) ─────────────────────────
const SKELETON_WIDTHS = [200, 150, 240, 180, 120, 210] as const;

// ─── Internal: CommandPaletteEmpty (Pattern F) ─────────────────────────────
// Not exported.

const CommandPaletteEmpty = ({ message }: { message: string }) => (
  <div
    style={{
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      gap:            '8px',
      padding:        '40px 16px',
      fontSize:       TOKEN.emptyFontSize(),
      color:          TOKEN.emptyColor(),
    }}
  >
    <Icon name="search" size="md" />
    <span>{message}</span>
  </div>
);

// ─── CommandPalette ─────────────────────────────────────────────────────────

/**
 * CommandPalette — application-level command + search overlay.
 *
 * Overlay: MuiDialog directly (same PAPER_SX pattern as Popover/Drawer).
 * Positioned top-center via `sx['& .MuiDialog-container']`.
 *
 * Composition:
 * - TextField: search input (read-write, focus stays here throughout navigation)
 * - List + ListItem: command rows; `selected={idx === activeIndex}` reuses
 *   List token namespace for the active-item highlight — no new selection token.
 * - Icon: command icons (startIcon slot), search icon, empty state icon
 * - Skeleton: loading rows (Pattern E)
 *
 * State owned internally: `searchQuery`, `activeIndex`.
 * State owned by consumer: `open`, `onClose`, `commands`.
 *
 * Keyboard:
 * - ArrowDown / ArrowUp → move activeIndex (wraps)
 * - Enter → execute activeItem.onAction() + onClose()
 * - Escape → onClose() (MuiDialog built-in + redundant handler)
 *
 * Focus: stays on the search input throughout keyboard navigation.
 * DOM focus does NOT move to items (deviation from Menu pattern — intentional;
 * keeps the input active for continuous typing while navigating).
 *
 * Spec: docs/contracts/product-system-rules.md
 */
export const CommandPalette = forwardRef<HTMLDivElement, CommandPaletteProps>(
  function CommandPalette(
    {
      open,
      onClose,
      commands,
      isLoading = false,
      placeholder   = 'Search commands\u2026',
      emptyMessage  = 'No commands found',
      className,
      sx,
    },
    ref
  ) {
    // ── Internal state ──────────────────────────────────────────────────────
    const [searchQuery, setSearchQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);

    // ── Refs ────────────────────────────────────────────────────────────────
    const inputContainerRef = useRef<HTMLDivElement>(null);
    // Map from flatIndex → item DOM node for scroll-into-view
    const itemRefs = useRef<Map<number, HTMLDivElement>>(new Map());

    // ── Normalise + filter commands ─────────────────────────────────────────
    const groups: CommandGroup[] = useMemo(
      () => normalise(commands),
      [commands]
    );

    const filteredGroups = useMemo<CommandGroup[]>(() => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return groups;
      return groups
        .map(g => ({
          ...g,
          items: g.items.filter(
            item =>
              !item.disabled &&
              (item.label.toLowerCase().includes(q) ||
                item.description?.toLowerCase().includes(q))
          ),
        }))
        .filter(g => g.items.length > 0);
    }, [groups, searchQuery]);

    // Flat list for keyboard index tracking
    const flatItems = useMemo<CommandItem[]>(
      () => filteredGroups.flatMap(g => g.items),
      [filteredGroups]
    );

    // ── Effects ─────────────────────────────────────────────────────────────

    // Reset state on close
    useEffect(() => {
      if (!open) {
        setSearchQuery('');
        setActiveIndex(0);
      }
    }, [open]);

    // Reset activeIndex to 0 whenever the visible item list changes
    useEffect(() => {
      setActiveIndex(0);
    }, [searchQuery]);

    // Focus input when palette opens
    useEffect(() => {
      if (open) {
        const id = requestAnimationFrame(() => {
          inputContainerRef.current
            ?.querySelector<HTMLInputElement>('input')
            ?.focus();
        });
        return () => cancelAnimationFrame(id);
      }
      return undefined;
    }, [open]);

    // Scroll active item into view on keyboard navigation
    useEffect(() => {
      itemRefs.current.get(activeIndex)?.scrollIntoView({ block: 'nearest' });
    }, [activeIndex]);

    // ── Keyboard handler ────────────────────────────────────────────────────
    // Attached to a wrapper div — keyboard events from the input bubble up.

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (flatItems.length === 0) return;
          setActiveIndex(i => (i + 1) % flatItems.length);
          return;
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (flatItems.length === 0) return;
          setActiveIndex(i => (i - 1 + flatItems.length) % flatItems.length);
          return;
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          const item = flatItems[activeIndex];
          if (item && !item.disabled) {
            item.onAction();
            onClose();
          }
        }
        // Escape is handled by MuiDialog's onClose prop — no duplicate needed
      },
      [flatItems, activeIndex, onClose]
    );

    // ── Execute item via click ──────────────────────────────────────────────
    const executeItem = useCallback(
      (item: CommandItem) => {
        if (!item.disabled) {
          item.onAction();
          onClose();
        }
      },
      [onClose]
    );

    // ── Render ──────────────────────────────────────────────────────────────

    // Shared divider style — used between input+list and between groups
    const dividerStyle: React.CSSProperties = {
      height:          '1px',
      backgroundColor: TOKEN.dividerColor(),
      margin:          0,
    };

    // Running flat index counter for the item render loop (reset before JSX)
    let renderFlatIdx = 0;

    return (
      <MuiDialog
        ref={ref}
        open={open}
        onClose={onClose}
        fullWidth
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        maxWidth={false as any}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        TransitionComponent={Fade as any}
        transitionDuration={120}  // structural — snappy feel for command UX
        PaperProps={{ sx: PAPER_SX }}
        sx={{
          '& .MuiDialog-container': {
            alignItems: 'flex-start',
            paddingTop: TOKEN.overlayTopOffset(),
          },
          ...(sx as object),
        }}
        className={className}
        aria-label="Command palette"
      >
        {/* ── Keyboard event capture wrapper ────────────────────────────── */}
        <div onKeyDown={handleKeyDown}>

          {/* ── Search input ─────────────────────────────────────────────── */}
          <div ref={inputContainerRef}>
            <TextField
              fullWidth
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={placeholder}
              startAdornment={
                <span
                  aria-hidden="true"
                  style={{ display: 'flex', color: 'inherit' }}
                >
                  <Icon name="search" size="sm" />
                </span>
              }
              inputProps={{
                autoComplete: 'off',
                role: 'combobox',
                'aria-autocomplete': 'list',
                'aria-expanded': true,
              }}
              sx={{
                // Remove the MUI outlined border — structural frame is the dialog
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  fontSize:     TOKEN.inputFontSize(),
                  // Override TextField md-size padding with CommandPalette input tokens
                  '& .MuiOutlinedInput-input': {
                    paddingTop:    TOKEN.inputPy(),
                    paddingBottom: TOKEN.inputPy(),
                    paddingLeft:   0,         // adornment provides left spacing
                    paddingRight:  TOKEN.inputPx(),
                  },
                  paddingLeft: TOKEN.inputPx(),
                },
              }}
            />
          </div>

          {/* ── Divider between input and list ───────────────────────────── */}
          <div aria-hidden="true" style={dividerStyle} />

          {/* ── Command list ─────────────────────────────────────────────── */}
          <div
            style={{
              overflowY: 'auto',
              maxHeight: TOKEN.listMaxHeight(),
            }}
            role="listbox"
            aria-label="Commands"
          >
            {isLoading ? (
              // Pattern E: loading state — Skeleton rows
              <List disablePadding>
                {SKELETON_WIDTHS.map((w, i) => (
                  <ListItem key={i} disabled>
                    <div
                      style={{
                        display:    'flex',
                        alignItems: 'center',
                        gap:        '12px',
                        width:      '100%',
                      }}
                    >
                      <MuiSkeleton variant="rounded" width={20} height={20} />
                      <MuiSkeleton variant="text" width={w} />
                    </div>
                  </ListItem>
                ))}
              </List>
            ) : flatItems.length === 0 ? (
              // Pattern F: empty state
              <CommandPaletteEmpty message={emptyMessage} />
            ) : (
              // Command rows — grouped
              <List disablePadding>
                {filteredGroups.map((group, groupIdx) => {
                  const isLastGroup = groupIdx === filteredGroups.length - 1;
                  return (
                    <div key={group.id} role="group" aria-label={group.label || undefined}>
                      {/* Group header — only when label is non-empty */}
                      {group.label && (
                        <div
                          aria-hidden="true"
                          style={{
                            fontSize:   TOKEN.groupLabelSize(),
                            fontWeight: TOKEN.groupLabelWeight(),
                            color:      TOKEN.groupLabelColor(),
                            padding:    `${TOKEN.groupLabelPy()} ${TOKEN.itemPx()}`,
                            // Divider above group header (except first group)
                            borderTop: groupIdx > 0 ? `1px solid ${TOKEN.dividerColor()}` : 'none',
                          }}
                        >
                          {group.label}
                        </div>
                      )}

                      {group.items.map((item) => {
                        const flatIdx   = renderFlatIdx++;
                        const isActive  = flatIdx === activeIndex;

                        return (
                          // Wrapper div: handles onMouseEnter (ListItem doesn't expose it)
                          // and serves as the scroll-into-view ref target.
                          <div
                            key={item.id}
                            ref={(el) => {
                              if (el) itemRefs.current.set(flatIdx, el);
                              else itemRefs.current.delete(flatIdx);
                            }}
                            onMouseEnter={() => setActiveIndex(flatIdx)}
                          >
                            <ListItem
                              selected={isActive}
                              disabled={item.disabled}
                              onClick={() => executeItem(item)}
                              startIcon={
                                item.icon
                                  ? <Icon name={item.icon} size="sm" />
                                  : undefined
                              }
                              endIcon={
                                item.shortcut
                                  ? (
                                    <kbd
                                      style={{
                                        fontSize:   TOKEN.itemShortcutSz(),
                                        color:      TOKEN.itemShortcutClr(),
                                        // Framework reset — <kbd> has browser default styles
                                        fontFamily: 'inherit',
                                        background: 'none',
                                        border:     'none',
                                        padding:    0,
                                      }}
                                    >
                                      {item.shortcut}
                                    </kbd>
                                  )
                                  : undefined
                              }
                              sx={{
                                // Override List item padding with CommandPalette item tokens
                                padding: `${TOKEN.itemPy()} ${TOKEN.itemPx()} !important`,
                                // Override List item font size
                                fontSize: TOKEN.itemFontSize(),
                                // Prevent focus ring on list items — focus stays on input
                                '&.Mui-focusVisible': { outline: 'none', boxShadow: 'none' },
                              }}
                              aria-selected={isActive}
                            >
                              {/* Label + description layout */}
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div
                                  style={{
                                    fontSize:     TOKEN.itemFontSize(),
                                    overflow:     'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace:   'nowrap',
                                  }}
                                >
                                  {item.label}
                                </div>
                                {item.description && (
                                  <div
                                    style={{
                                      fontSize:     TOKEN.itemDescSize(),
                                      color:        TOKEN.itemDescColor(),
                                      marginTop:    '2px',  // structural
                                      overflow:     'hidden',
                                      textOverflow: 'ellipsis',
                                      whiteSpace:   'nowrap',
                                    }}
                                  >
                                    {item.description}
                                  </div>
                                )}
                              </div>
                            </ListItem>
                          </div>
                        );
                      })}

                      {/* Divider between groups (when both have labels — suppress if next is last empty-label group) */}
                      {!isLastGroup && group.label && filteredGroups[groupIdx + 1]?.label && (
                        <ListDivider />
                      )}
                    </div>
                  );
                })}
              </List>
            )}
          </div>

        </div>
      </MuiDialog>
    );
  }
);

CommandPalette.displayName = 'CommandPalette';

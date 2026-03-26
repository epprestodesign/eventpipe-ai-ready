import type { SxProps, Theme } from '@mui/material';
import type { IconName } from '../icons';

// ─── CommandItem ──────────────────────────────────────────────────────────────

/**
 * A single executable command row in the palette.
 */
export interface CommandItem {
  /** Unique identifier. */
  id: string;
  /** Primary label shown in the command row. Used for client-side filtering. */
  label: string;
  /** Optional secondary text below the label. Also searched in client-side filter. */
  description?: string;
  /** Icon from the icon registry shown at the start of the row. */
  icon?: IconName;
  /**
   * Keyboard shortcut displayed at the end of the row (display only — not wired).
   * E.g. '⌘K', 'Ctrl+P'.
   */
  shortcut?: string;
  /** Called when the command is executed (click or Enter). */
  onAction: () => void;
  /** Prevents the item from being selected or executed. */
  disabled?: boolean;
}

// ─── CommandGroup ─────────────────────────────────────────────────────────────

/**
 * A labelled section containing one or more CommandItems.
 * Pass an empty `label` to render items without a section header.
 */
export interface CommandGroup {
  /** Unique identifier for the group. */
  id: string;
  /**
   * Section header label. Rendered as a non-interactive divider row above the items.
   * Pass `''` (empty string) to suppress the header for this group.
   */
  label: string;
  items: CommandItem[];
}

// ─── CommandPaletteProps ──────────────────────────────────────────────────────

export interface CommandPaletteProps {
  // ── Core ───────────────────────────────────────────────────────────────────

  /** Controls visibility. Consumer owns open state. */
  open: boolean;

  /** Called when the palette requests to close (Escape, backdrop click). */
  onClose: () => void;

  /**
   * Commands to display. Accepts either a flat `CommandItem[]` or grouped
   * `CommandGroup[]`. A flat array is normalised internally to a single group
   * with no visible header.
   */
  commands: CommandItem[] | CommandGroup[];

  // ── States ─────────────────────────────────────────────────────────────────

  /**
   * Shows Skeleton rows instead of the command list. Pattern E.
   * Use while commands are loading asynchronously.
   * @default false
   */
  isLoading?: boolean;

  // ── Text overrides ─────────────────────────────────────────────────────────

  /**
   * Placeholder for the search input.
   * @default 'Search commands…'
   */
  placeholder?: string;

  /**
   * Message shown in the empty state when no commands match the query. Pattern F.
   * @default 'No commands found'
   */
  emptyMessage?: string;

  // ── Escape hatches ─────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

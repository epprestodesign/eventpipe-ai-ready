import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';

// ─── Item ─────────────────────────────────────────────────────────────────────

/**
 * A single item that can exist on either side of the TransferList.
 * Items are identified by `id` — must be unique across both lists.
 */
export interface TransferListItem {
  /** Unique identifier. Used for selection tracking and moves. */
  id: string;
  /** Display label. */
  label: string;
  /** Prevents the item from being checked or moved. */
  disabled?: boolean;
}

// ─── TransferListProps ────────────────────────────────────────────────────────

export interface TransferListProps {
  // ── List data — consumer owns both arrays ─────────────────────────────────

  /** Items in the left (source) list. */
  leftItems: TransferListItem[];
  /** Items in the right (destination) list. */
  rightItems: TransferListItem[];

  /**
   * Called when items are moved in either direction.
   * Receives the full updated arrays — consumer applies them to state.
   *
   * Pattern B: data always lives in the consumer.
   */
  onChange: (left: TransferListItem[], right: TransferListItem[]) => void;

  // ── Column titles ──────────────────────────────────────────────────────────

  /** Header label for the left list. @default 'Available' */
  leftTitle?: ReactNode;
  /** Header label for the right list. @default 'Selected' */
  rightTitle?: ReactNode;

  // ── Optional search per side ───────────────────────────────────────────────

  /**
   * When true, a search field is shown above each list.
   * Search filtering is client-side against item labels.
   * Pattern MA-2: the component owns search state internally.
   * @default false
   */
  searchable?: boolean;

  /** Placeholder for both search fields. @default 'Search...' */
  searchPlaceholder?: string;

  // ── Loading state per side ─────────────────────────────────────────────────

  /** Left list loading state — shows Skeleton items. Pattern E. @default false */
  leftLoading?: boolean;

  /** Right list loading state — shows Skeleton items. Pattern E. @default false */
  rightLoading?: boolean;

  // ── Escape hatches ────────────────────────────────────────────────────────
  className?: string;
  sx?: SxProps<Theme>;
}

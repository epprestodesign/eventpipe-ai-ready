import type { IconName } from '../icons';
import type { EpSize5 } from '../types/shared';

/**
 * IconSize uses the same 5-tier EpSize5 scale as all other components.
 * Maps to --ep-semantic-icon-size-{size} tokens.
 *
 * xs = 12px  sm = 16px  md = 20px (default)  lg = 24px  xl = 32px
 */
export type IconSize = EpSize5;

export interface IconProps {
  /**
   * Semantic icon name from the Phase 1 approved registry.
   * See docs/decisions/006-icon-system.md for governance.
   * TypeScript enforces that only registered names are valid.
   */
  name: IconName;

  /**
   * Size — maps to --ep-semantic-icon-size-* token.
   * @default 'md' (20px)
   */
  size?: IconSize;

  /**
   * Accessible label for **semantic** icons (icons that carry meaning not
   * conveyed by surrounding context).
   *
   * When provided: sets role="img" and aria-label. Announced by screen readers.
   * When omitted:  sets aria-hidden="true". Icon is decorative.
   *
   * Rule: never provide both `label` here AND `aria-label` on a wrapping
   * interactive element — it creates duplicate announcements.
   */
  label?: string;

  /** Additional CSS class applied to the SVG root. */
  className?: string;
}

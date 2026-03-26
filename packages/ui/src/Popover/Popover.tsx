import { forwardRef } from 'react';
import MuiPopover from '@mui/material/Popover';
import { styled } from '@mui/material/styles';
import type { PopoverProps, PopoverContentProps } from './Popover.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-popover-* custom properties.

const TOKEN = {
  background:   () => `var(--ep-component-popover-background)`,
  borderRadius: () => `var(--ep-component-popover-border-radius)`,
  shadow:       () => `var(--ep-component-popover-shadow)`,
  paddingY:     () => `var(--ep-component-popover-padding-y)`,
  paddingX:     () => `var(--ep-component-popover-padding-x)`,
} as const;

// ─── Paper surface sx ─────────────────────────────────────────────────────
// Popover Paper renders in a Portal — descendant CSS selectors from the component root
// do not reach portal content. Styles for the Paper surface must be passed
// via PaperProps.sx where token vars (set on :root) remain accessible.
const PAPER_SX = {
  backgroundColor: TOKEN.background(),
  borderRadius:    TOKEN.borderRadius(),
  boxShadow:       TOKEN.shadow(),
} as const;

// ─── PopoverContent ────────────────────────────────────────────────────────
// Optional styled wrapper that applies popover padding tokens to content inside
// the Popover. Use when the Popover contains generic content (not a list/menu).

const StyledPopoverContent = styled('div')({
  padding: `${TOKEN.paddingY()} ${TOKEN.paddingX()}`,
});

/**
 * PopoverContent — optional content wrapper that applies token padding.
 *
 * Use inside Popover when the content is freeform (text, form fields, etc.).
 * Omit when the Popover contains a List/Menu-style layout that handles its own spacing.
 *
 * Spec: docs/specs/components/popover.md
 */
export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent({ children, className, sx }, ref) {
    return (
      <StyledPopoverContent ref={ref} className={className} sx={sx}>
        {children}
      </StyledPopoverContent>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';

// ─── Popover ──────────────────────────────────────────────────────────────

/**
 * Popover — lightweight positioning overlay anchored to an element.
 *
 * No focus trap — background page remains interactive.
 * Click-away closes via MUI's transparent backdrop layer.
 * No visible Backdrop (transparent click-capture — MUI default).
 *
 * Positioning: set `anchorOrigin` and `transformOrigin` to control which corner of
 * the anchor and the popover align. Default: opens below-left of anchor.
 *
 * For navigation lists use `Menu` instead — it is a list-specific Popover.
 * For persistent, non-anchored panels use `Drawer`.
 *
 * ```tsx
 * <Popover
 *   open={open}
 *   anchorEl={anchorEl}
 *   onClose={() => setOpen(false)}
 *   anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
 * >
 *   <Popover.Content>
 *     Custom content here.
 *   </Popover.Content>
 * </Popover>
 * ```
 *
 * Overlay system: docs/contracts/overlay-pattern.md
 * Spec: docs/specs/components/popover.md
 */
const _Popover = forwardRef<HTMLDivElement, PopoverProps>(
  function Popover(
    {
      open,
      anchorEl,
      onClose,
      anchorOrigin    = { vertical: 'bottom', horizontal: 'left' },
      transformOrigin = { vertical: 'top',    horizontal: 'left' },
      disablePortal   = false,
      keepMounted     = false,
      id,
      className,
      sx,
      children,
    },
    ref
  ) {
    return (
      <MuiPopover
        ref={ref}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        disablePortal={disablePortal}
        keepMounted={keepMounted}
        id={id}
        className={className}
        sx={sx}
        // Portal-safe surface styling — PaperProps.sx uses CSS vars from :root.
        // styled() ancestor selectors do not reach Portal content.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        PaperProps={{ sx: PAPER_SX as any }}
      >
        {children}
      </MuiPopover>
    );
  }
);

_Popover.displayName = 'Popover';

// ─── Compound component attachment ─────────────────────────────────────────

export const Popover = _Popover as typeof _Popover & {
  Content: typeof PopoverContent;
};

Popover.Content = PopoverContent;

import { forwardRef, useCallback } from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { Icon } from '../Icon';
import type { DrawerProps, DrawerHeaderProps, DrawerBodyProps } from './Drawer.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-drawer-* custom properties.

const TOKEN = {
  background:         () => `var(--ep-component-drawer-background)`,
  borderRadius:       () => `var(--ep-component-drawer-border-radius)`,
  shadow:             () => `var(--ep-component-drawer-shadow)`,
  width:              () => `var(--ep-component-drawer-width)`,
  headerPy:           () => `var(--ep-component-drawer-header-padding-y)`,
  headerPx:           () => `var(--ep-component-drawer-header-padding-x)`,
  bodyPy:             () => `var(--ep-component-drawer-body-padding-y)`,
  bodyPx:             () => `var(--ep-component-drawer-body-padding-x)`,
} as const;

// ─── Paper surface sx ─────────────────────────────────────────────────────
// Drawer Paper renders in a Portal — descendant CSS selectors from the component root
// do not reach portal content. Styles for the Paper surface must be passed
// via PaperProps.sx where token vars (set on :root) remain accessible.
// Width is NOT in PAPER_SX — it is applied conditionally based on anchor in render.
const PAPER_SX = {
  backgroundColor: TOKEN.background(),
  borderRadius:    TOKEN.borderRadius(),
  boxShadow:       TOKEN.shadow(),
} as const;

// ─── Styled sub-components ─────────────────────────────────────────────────

// Close button — same pattern as Dialog close button
const StyledCloseButton = styled('button')({
  // ── Reset ──────────────────────────────────────────────────────────────────
  appearance: 'none',
  background: 'none',
  border:     'none',
  margin:     0,
  cursor:     'pointer',
  flexShrink: 0,

  // ── Layout ─────────────────────────────────────────────────────────────────
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
  width:          '32px',  // structural — 32px close button hit area
  height:         '32px',
  borderRadius:   '4px',   // structural — slight rounding on hover state hit area

  // ── Color — inherits from DrawerHeader context ──────────────────────────────
  color: 'var(--ep-semantic-color-text-secondary)',

  '&:hover': {
    color:           'var(--ep-semantic-color-text-primary)',
    backgroundColor: 'var(--ep-semantic-color-action-focus)',
  },

  '&:focus-visible': {
    // Framework convention — 2px width and 2px offset are structural focus ring geometry;
    // color is the design decision (brand.primary).
    outline:       '2px solid var(--ep-semantic-color-brand-primary)',
    outlineOffset: '2px',
  },
});

// DrawerHeader — flex row with optional close button
const StyledDrawerHeader = styled('div')({
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'space-between',
  padding:        `${TOKEN.headerPy()} ${TOKEN.headerPx()}`,
  flexShrink:     0,
});

// DrawerBody — scrollable content region
const StyledDrawerBody = styled('div')({
  flex:      1,
  overflowY: 'auto',
  padding:   `${TOKEN.bodyPy()} ${TOKEN.bodyPx()}`,
});

// ─── Sub-components ────────────────────────────────────────────────────────

/**
 * DrawerHeader — optional header area with token padding and close button.
 *
 * Pass `onClose` to render a keyboard-accessible × button.
 * Typically contains a heading or title.
 *
 * Spec: docs/specs/components/drawer.md
 */
export const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  function DrawerHeader({ children, onClose, className, sx }, ref) {
    return (
      <StyledDrawerHeader ref={ref} className={className} sx={sx}>
        <div>{children}</div>
        {onClose && (
          <StyledCloseButton
            type="button"
            onClick={onClose}
            aria-label="Close drawer"
          >
            <Icon name="close" size="sm" aria-hidden />
          </StyledCloseButton>
        )}
      </StyledDrawerHeader>
    );
  }
);

DrawerHeader.displayName = 'DrawerHeader';

/**
 * DrawerBody — optional scrollable content area with token padding.
 *
 * Spec: docs/specs/components/drawer.md
 */
export const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  function DrawerBody({ children, className, sx }, ref) {
    return (
      <StyledDrawerBody ref={ref} className={className} sx={sx}>
        {children}
      </StyledDrawerBody>
    );
  }
);

DrawerBody.displayName = 'DrawerBody';

// ─── Drawer ───────────────────────────────────────────────────────────────

/**
 * Drawer — sliding panel overlay anchored to a viewport edge.
 *
 * Always controlled: `open` required; `onClose` required for `temporary` variant.
 * Temporary variant: focus trap active; Escape + backdrop click call `onClose`.
 * Persistent/permanent variants: no Backdrop, no focus trap.
 *
 * Width token applies to `left` and `right` anchors.
 * Top/bottom anchors are auto-sized to content height.
 *
 * Do NOT compose standalone `<Backdrop>` with Drawer — MUI provides a built-in backdrop
 * for the temporary variant. See docs/contracts/overlay-pattern.md.
 *
 * ```tsx
 * <Drawer open={open} onClose={handleClose} aria-labelledby="drawer-title">
 *   <DrawerHeader onClose={handleClose}>
 *     <h2 id="drawer-title">Navigation</h2>
 *   </DrawerHeader>
 *   <DrawerBody>
 *     <List>...</List>
 *   </DrawerBody>
 * </Drawer>
 * ```
 *
 * Overlay system: docs/contracts/overlay-pattern.md
 * Spec: docs/specs/components/drawer.md
 */
const _Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  function Drawer(
    {
      open,
      onClose,
      anchor               = 'left',
      variant              = 'temporary',
      keepMounted          = false,
      disableEscapeKeyDown = false,
      hideBackdrop         = false,
      transitionDuration,
      'aria-labelledby': ariaLabelledby,
      className,
      sx,
      children,
    },
    ref
  ) {
    // Expose reason string in onClose — same signature as Dialog
    const handleClose = useCallback(
      (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
        onClose?.(event, reason);
      },
      [onClose]
    );

    // Width token only applies to left/right (vertical) anchors.
    // Top/bottom drawers size to content height; width should be unrestricted.
    const isVertical = anchor === 'left' || anchor === 'right';

    return (
      <MuiDrawer
        ref={ref}
        open={open}
        onClose={handleClose}
        anchor={anchor}
        variant={variant}
        keepMounted={keepMounted}
        disableEscapeKeyDown={disableEscapeKeyDown}
        hideBackdrop={hideBackdrop}
        // 225ms matches --ep-component-drawer-transition-duration token
        transitionDuration={transitionDuration ?? 225}
        aria-labelledby={ariaLabelledby}
        className={className}
        sx={sx}
        // Portal-safe surface styling — PaperProps.sx uses CSS vars from :root.
        // styled() ancestor selectors do not reach Portal content.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        PaperProps={{
          sx: {
            ...PAPER_SX,
            // Width applies to vertical drawers only; horizontal drawers fill viewport width
            ...(isVertical && { width: TOKEN.width() }),
          } as any,
        }}
      >
        {children}
      </MuiDrawer>
    );
  }
);

_Drawer.displayName = 'Drawer';

// ─── Compound component attachment ─────────────────────────────────────────
// Drawer.Header / Drawer.Body allow dot-notation composition.

export const Drawer = _Drawer as typeof _Drawer & {
  Header: typeof DrawerHeader;
  Body:   typeof DrawerBody;
};

Drawer.Header = DrawerHeader;
Drawer.Body   = DrawerBody;

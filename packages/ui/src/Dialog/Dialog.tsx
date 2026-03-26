import { forwardRef, useCallback } from 'react';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import { CircularProgress } from '../CircularProgress';
import { Icon } from '../Icon';
import type {
  DialogProps,
  DialogTitleProps,
  DialogContentProps,
  DialogActionsProps,
} from './Dialog.types';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-dialog-* custom properties.

const TOKEN = {
  background:         () => `var(--ep-component-dialog-background)`,
  borderRadius:       () => `var(--ep-component-dialog-border-radius)`,
  shadow:             () => `var(--ep-component-dialog-shadow)`,

  titlePaddingY:    () => `var(--ep-component-dialog-title-padding-y)`,
  titlePaddingX:    () => `var(--ep-component-dialog-title-padding-x)`,
  titleFontSize:    () => `var(--ep-component-dialog-title-font-size)`,
  titleFontWeight:  () => `var(--ep-component-dialog-title-font-weight)`,

  contentPaddingY:  () => `var(--ep-component-dialog-content-padding-y)`,
  contentPaddingX:  () => `var(--ep-component-dialog-content-padding-x)`,

  actionsPaddingY:  () => `var(--ep-component-dialog-actions-padding-y)`,
  actionsPaddingX:  () => `var(--ep-component-dialog-actions-padding-x)`,
  actionsGap:       () => `var(--ep-component-dialog-actions-gap)`,

  dividerColor:     () => `var(--ep-component-dialog-divider-color)`,

  closeButtonColor:      () => `var(--ep-component-dialog-close-button-color)`,
  closeButtonColorHover: () => `var(--ep-component-dialog-close-button-color-hover)`,
  closeButtonSize:       () => `var(--ep-component-dialog-close-button-size)`,
  closeButtonFocusColor: () => `var(--ep-component-dialog-close-button-focus-color)`,

  loadingBackground:  () => `var(--ep-component-dialog-loading-background)`,
} as const;

// ─── Paper surface sx ─────────────────────────────────────────────────────
// Dialog renders in a Portal — descendant CSS selectors from the component root
// do not reach portal content. Styles for the Paper surface must be passed
// via PaperProps.sx where token vars (set on :root) remain accessible.
const PAPER_SX = {
  backgroundColor: TOKEN.background(),
  borderRadius:    TOKEN.borderRadius(),
  boxShadow:       TOKEN.shadow(),
  // Structural: required so the loading overlay (position: absolute) is
  // clipped within the Paper rather than escaping to the viewport.
  position:        'relative',
  // Framework reset — MUI Paper adds its own elevation boxShadow; replaced via TOKEN.shadow()
} as const;

// ─── Styled sub-components ─────────────────────────────────────────────────

// DialogTitle — flex row to accommodate optional close button at end
interface StyledDialogTitleProps {
  epHasClose: boolean;
}

const StyledDialogTitle = styled(MuiDialogTitle, {
  shouldForwardProp: (prop) => prop !== 'epHasClose',
})<StyledDialogTitleProps>(({ epHasClose: _ }) => ({
  display:        'flex',
  alignItems:     'flex-start',
  justifyContent: 'space-between',
  gap:            TOKEN.actionsGap(), // reuse gap token for title/close-button spacing
  padding:        `${TOKEN.titlePaddingY()} ${TOKEN.titlePaddingX()}`,
  fontSize:       TOKEN.titleFontSize(),
  fontWeight:     TOKEN.titleFontWeight(),
  lineHeight:     1.4, // structural — matches MUI h6 default, not a design decision
  // Framework reset — MUI DialogTitle reduces paddingBottom when followed by DialogContent
  paddingBottom:  TOKEN.titlePaddingY(),
}));

// Close button — bare button with Icon; styled entirely via component tokens
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
  width:          TOKEN.closeButtonSize(),
  height:         TOKEN.closeButtonSize(),
  borderRadius:   '4px', // structural — slight rounding on the hover state hit area

  // ── Color ──────────────────────────────────────────────────────────────────
  color: TOKEN.closeButtonColor(),

  // ── States ─────────────────────────────────────────────────────────────────
  '&:hover': {
    color:           TOKEN.closeButtonColorHover(),
    backgroundColor: TOKEN.loadingBackground(), // action.focus tint — reused as hover bg
  },

  '&:focus-visible': {
    // Framework convention — 2px width and 2px offset are structural focus ring
    // geometry consistent with all EP interactive controls; color is the design decision.
    outline:       `2px solid ${TOKEN.closeButtonFocusColor()}`,
    outlineOffset: '2px',
  },
});

// DialogContent
const StyledDialogContent = styled(MuiDialogContent)({
  padding: `${TOKEN.contentPaddingY()} ${TOKEN.contentPaddingX()}`,

  // Framework reset — MUI forces paddingTop: 0 on DialogContent when it directly follows
  // DialogTitle. We enforce our token value for consistent spacing in all compositions.
  '&:first-of-type': {
    paddingTop: TOKEN.contentPaddingY(),
  },

  // Divider borders — color token applied to MUI's divider variant class
  '&.MuiDialogContent-dividers': {
    borderTopColor:    TOKEN.dividerColor(),
    borderBottomColor: TOKEN.dividerColor(),
  },
});

// DialogActions
const StyledDialogActions = styled(MuiDialogActions)({
  padding:       `${TOKEN.actionsPaddingY()} ${TOKEN.actionsPaddingX()}`,
  gap:           TOKEN.actionsGap(),
  // Framework reset — MUI DialogActions adds marginLeft on children via > :not(:first-of-type)
  '& > :not(:first-of-type)': {
    marginLeft: 0,
  },
});

// ─── Sub-components ────────────────────────────────────────────────────────

/**
 * DialogTitle — header area of a Dialog with optional close (×) button.
 *
 * Pass `id` and reference it via `aria-labelledby` on the parent Dialog.
 * Pass `onClose` to render a keyboard-accessible close button in the top-right.
 *
 * Spec: docs/specs/components/dialog.md
 */
export const DialogTitle = forwardRef<HTMLDivElement, DialogTitleProps>(
  function DialogTitle({ children, onClose, id, className, sx }, ref) {
    return (
      <StyledDialogTitle
        ref={ref}
        epHasClose={Boolean(onClose)}
        id={id}
        className={className}
        sx={sx}
      >
        <span>{children}</span>
        {onClose && (
          <StyledCloseButton
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <Icon name="close" size="sm" aria-hidden />
          </StyledCloseButton>
        )}
      </StyledDialogTitle>
    );
  }
);

DialogTitle.displayName = 'DialogTitle';

/**
 * DialogContent — scrollable content area of a Dialog.
 *
 * Pass `id` and reference it via `aria-describedby` on the parent Dialog.
 * Use `dividers` to add separator lines above and below the content region.
 *
 * Spec: docs/specs/components/dialog.md
 */
export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  function DialogContent({ children, dividers = false, id, className, sx }, ref) {
    return (
      <StyledDialogContent
        ref={ref}
        dividers={dividers}
        id={id}
        className={className}
        sx={sx}
      >
        {children}
      </StyledDialogContent>
    );
  }
);

DialogContent.displayName = 'DialogContent';

/**
 * DialogActions — horizontal button strip at the bottom of a Dialog.
 *
 * Renders action buttons (typically Cancel + Confirm).
 * Buttons are laid out right-to-left by default (per MUI convention).
 *
 * Spec: docs/specs/components/dialog.md
 */
export const DialogActions = forwardRef<HTMLDivElement, DialogActionsProps>(
  function DialogActions({ children, disableSpacing = false, className, sx }, ref) {
    return (
      <StyledDialogActions
        ref={ref}
        disableSpacing={disableSpacing}
        className={className}
        sx={sx}
      >
        {children}
      </StyledDialogActions>
    );
  }
);

DialogActions.displayName = 'DialogActions';

// ─── Dialog ───────────────────────────────────────────────────────────────

/**
 * Dialog — modal overlay panel with focus trap and built-in Backdrop.
 *
 * Always controlled: `open` + `onClose` required.
 * Focus is trapped inside the dialog while open; returns to the trigger on close.
 * Escape key and backdrop click both call `onClose` (distinguishable via `reason`).
 *
 * Compose with Dialog.Title, Dialog.Content, and Dialog.Actions:
 * ```tsx
 * <Dialog open={open} onClose={handleClose} aria-labelledby="title">
 *   <Dialog.Title id="title" onClose={handleClose}>Title</Dialog.Title>
 *   <Dialog.Content>Body content.</Dialog.Content>
 *   <Dialog.Actions>
 *     <Button onClick={handleClose}>Cancel</Button>
 *     <Button onClick={handleConfirm} color="error">Confirm</Button>
 *   </Dialog.Actions>
 * </Dialog>
 * ```
 *
 * Loading state: set `loading={true}` to show a CircularProgress overlay,
 * block all interaction, and suppress `onClose`.
 *
 * Overlay system: docs/contracts/overlay-pattern.md
 * Spec: docs/specs/components/dialog.md
 */
const _Dialog = forwardRef<HTMLDivElement, DialogProps>(
  function Dialog(
    {
      open,
      onClose,
      fullWidth            = false,
      maxWidth             = 'sm',
      fullScreen           = false,
      scroll               = 'paper',
      loading              = false,
      disableEscapeKeyDown = false,
      keepMounted          = false,
      transitionDuration,
      TransitionComponent,
      'aria-labelledby':  ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      className,
      sx,
      children,
    },
    ref
  ) {
    // Suppress all close events when loading — dialog is in a blocking state
    const handleClose = useCallback(
      (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
        if (loading) return;
        onClose?.(event, reason);
      },
      [loading, onClose]
    );

    return (
      <MuiDialog
        ref={ref}
        open={open}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        fullScreen={fullScreen}
        scroll={scroll}
        // Escape is also blocked when loading, in addition to disableEscapeKeyDown prop
        disableEscapeKeyDown={loading || disableEscapeKeyDown}
        keepMounted={keepMounted}
        // 225ms matches --ep-component-dialog-transition-duration token
        transitionDuration={transitionDuration ?? 225}
        TransitionComponent={TransitionComponent}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        className={className}
        sx={sx}
        // Portal-safe surface styling — PaperProps.sx uses CSS vars from :root.
        // styled() ancestor selectors do not reach Portal content.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        PaperProps={{ sx: PAPER_SX as any }}
      >
        {/* Loading overlay — absolutely positioned over Paper content (Paper is relative) */}
        {loading && (
          <div
            role="status"
            aria-label="Loading"
            style={{
              position:        'absolute',
              inset:           0,
              zIndex:          1,
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              backgroundColor: TOKEN.loadingBackground(),
              borderRadius:    TOKEN.borderRadius(),
            }}
          >
            <CircularProgress size="md" color="primary" />
          </div>
        )}
        {children}
      </MuiDialog>
    );
  }
);

_Dialog.displayName = 'Dialog';

// ─── Compound component attachment ─────────────────────────────────────────
// Dialog.Title / Dialog.Content / Dialog.Actions allow dot-notation composition.

export const Dialog = _Dialog as typeof _Dialog & {
  Title:   typeof DialogTitle;
  Content: typeof DialogContent;
  Actions: typeof DialogActions;
};

Dialog.Title   = DialogTitle;
Dialog.Content = DialogContent;
Dialog.Actions = DialogActions;

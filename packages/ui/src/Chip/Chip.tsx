import { forwardRef } from 'react';
import MuiChip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import type { ChipProps } from './Chip.types';
import type { ChipVariant } from './Chip.types';
import type { EpSize3, EpColor } from '../types/shared';
import { Icon } from '../Icon';
import type { IconSize } from '../Icon';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-chip-* custom properties.

const TOKEN = {
  borderRadius:    ()                        => `var(--ep-component-chip-border-radius)`,
  height:          (s: EpSize3)              => `var(--ep-component-chip-size-${s}-height)`,
  fontSize:        (s: EpSize3)              => `var(--ep-component-chip-size-${s}-font-size)`,
  paddingX:        (s: EpSize3)              => `var(--ep-component-chip-size-${s}-padding-x)`,
  iconSize:        (s: EpSize3)              => `var(--ep-component-chip-size-${s}-icon-size)`,
  gap:             (s: EpSize3)              => `var(--ep-component-chip-size-${s}-gap)`,
  bg:              (v: ChipVariant, c: EpColor) => `var(--ep-component-chip-${v}-${c}-background)`,
  bgHover:         (v: ChipVariant, c: EpColor) => `var(--ep-component-chip-${v}-${c}-background-hover)`,
  bgSelected:      (v: ChipVariant, c: EpColor) => `var(--ep-component-chip-${v}-${c}-background-selected)`,
  text:            (v: ChipVariant, c: EpColor) => `var(--ep-component-chip-${v}-${c}-text)`,
  border:          (v: ChipVariant, c: EpColor) => `var(--ep-component-chip-${v}-${c}-border)`,
  disabledBg:      ()                        => `var(--ep-component-chip-disabled-background)`,
  disabledText:    ()                        => `var(--ep-component-chip-disabled-text)`,
  disabledBorder:  ()                        => `var(--ep-component-chip-disabled-border)`,
  focusWidth:      ()                        => `var(--ep-component-chip-focus-ring-width)`,
  focusOffset:     ()                        => `var(--ep-component-chip-focus-ring-offset)`,
  deleteOpacity:   ()                        => `var(--ep-component-chip-delete-icon-opacity)`,
  deleteOpacityHover: ()                     => `var(--ep-component-chip-delete-icon-opacity-hover)`,
} as const;

// ─── Icon size map ─────────────────────────────────────────────────────────
// Map chip size → Icon size for delete/start icons
const ICON_SIZE_MAP: Record<EpSize3, IconSize> = {
  sm: 'xs',
  md: 'sm',
  lg: 'sm',
};

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledChipProps {
  epVariant: ChipVariant;
  epColor:   EpColor;
  epSize:    EpSize3;
}

const StyledChip = styled(MuiChip, {
  shouldForwardProp: (prop) =>
    prop !== 'epVariant' && prop !== 'epColor' && prop !== 'epSize',
})<StyledChipProps>(({ epVariant, epColor, epSize }) => ({
  // ── Shape and size ──────────────────────────────────────────────────────
  height:       TOKEN.height(epSize),
  borderRadius: TOKEN.borderRadius(),
  fontSize:     TOKEN.fontSize(epSize),

  // ── Colors ─────────────────────────────────────────────────────────────
  backgroundColor: TOKEN.bg(epVariant, epColor),
  color:           TOKEN.text(epVariant, epColor),
  // Outlined border — always set; non-outlined values resolve to 'transparent'
  border: `1px solid ${TOKEN.border(epVariant, epColor)}`,

  // ── Label ───────────────────────────────────────────────────────────────
  '& .MuiChip-label': {
    // Framework reset — MUI sets fixed padding per size; token-driven instead
    padding:    `0 ${TOKEN.paddingX(epSize)}`,
    fontSize:   TOKEN.fontSize(epSize),
    lineHeight: 1,
    color:      TOKEN.text(epVariant, epColor),
  },

  // ── Start icon ──────────────────────────────────────────────────────────
  '& .MuiChip-icon': {
    // Framework reset — MUI sets margin-left/right and color via palette
    fontSize:    TOKEN.iconSize(epSize),
    color:       TOKEN.text(epVariant, epColor),
    marginLeft:  TOKEN.gap(epSize),
    marginRight: `calc(-1 * ${TOKEN.gap(epSize)} / 2)`,
    width:       TOKEN.iconSize(epSize),
    height:      TOKEN.iconSize(epSize),
  },

  // ── Delete icon ─────────────────────────────────────────────────────────
  '& .MuiChip-deleteIcon': {
    // Framework reset — MUI sets margin-right and color via palette
    fontSize:     TOKEN.iconSize(epSize),
    color:        TOKEN.text(epVariant, epColor),
    opacity:      TOKEN.deleteOpacity(),
    marginRight:  TOKEN.gap(epSize),
    marginLeft:   `calc(-1 * ${TOKEN.gap(epSize)} / 2)`,
    width:        TOKEN.iconSize(epSize),
    height:       TOKEN.iconSize(epSize),
    display:      'flex',
    alignItems:   'center',
    '&:hover': {
      opacity: TOKEN.deleteOpacityHover(),
      color:   TOKEN.text(epVariant, epColor),
    },
  },

  // ── Hover ───────────────────────────────────────────────────────────────
  '&.MuiChip-clickable:hover': {
    backgroundColor: TOKEN.bgHover(epVariant, epColor),
  },
  '&.MuiChip-deletable:hover': {
    backgroundColor: TOKEN.bgHover(epVariant, epColor),
  },

  // ── Selected ────────────────────────────────────────────────────────────
  '&.ep-chip-selected': {
    backgroundColor: TOKEN.bgSelected(epVariant, epColor),
  },
  '&.ep-chip-selected.MuiChip-clickable:hover': {
    backgroundColor: TOKEN.bgHover(epVariant, epColor),
  },

  // ── Focus (dynamic color — list/interactive surface rule) ───────────────
  // Focus ring color = component foreground token (no separate focusRing.color)
  '&.Mui-focusVisible': {
    outline:    `${TOKEN.focusWidth()} solid ${TOKEN.text(epVariant, epColor)}`,
    outlineOffset: TOKEN.focusOffset(),
    // Framework reset — MUI adds box-shadow on Chip focus
    boxShadow: 'none',
  },

  // ── Disabled ────────────────────────────────────────────────────────────
  '&.Mui-disabled': {
    backgroundColor: TOKEN.disabledBg(),
    color:           TOKEN.disabledText(),
    border:          `1px solid ${TOKEN.disabledBorder()}`,
    // Framework reset — MUI uses 0.38 opacity; we use dedicated tokens
    opacity:         1,
    pointerEvents:   'none',
    '& .MuiChip-label': {
      color: TOKEN.disabledText(),
    },
    '& .MuiChip-icon, & .MuiChip-deleteIcon': {
      color: TOKEN.disabledText(),
    },
  },
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Chip — compact interactive or display element.
 *
 * Three variants: `filled` (solid), `outlined` (bordered), `soft` (tinted).
 * Three sizes: `sm`, `md`, `lg` (EpSize3).
 *
 * Icon slots:
 * - `startIcon` — decorative leading icon
 * - `endIcon` — decorative trailing icon (ignored when `onDelete` is provided)
 * - `onDelete` — shows a delete (close) button in the end slot
 *
 * Focus pattern: dynamic color — focus ring uses the chip's foreground token
 * (not a static brand.primary — follows Checkbox/Radio/Switch rule).
 *
 * Spec: docs/specs/components/chip.md
 */
export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  function Chip(
    {
      variant  = 'filled',
      size     = 'md',
      color    = 'primary',
      label,
      startIcon,
      endIcon,
      selected  = false,
      disabled  = false,
      onClick,
      onDelete,
      className,
      sx,
    },
    ref
  ) {
    // Build className — append ep-chip-selected when selected
    const composedClassName = [className, selected ? 'ep-chip-selected' : undefined]
      .filter(Boolean)
      .join(' ') || undefined;

    // Computed label — endIcon (decorative) rendered inside label slot when no onDelete
    const computedLabel = !onDelete && endIcon ? (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 0 }}>
        {label}
        <span
          aria-hidden="true"
          style={{
            display:     'inline-flex',
            alignItems:  'center',
            marginLeft:  TOKEN.gap(size),
            fontSize:    TOKEN.iconSize(size),
            color:       TOKEN.text(variant, color),
          }}
        >
          {endIcon}
        </span>
      </span>
    ) : label;

    // Delete icon — inject <Icon name="close"> to replace MUI's CancelIcon
    const computedDeleteIcon = onDelete ? (
      <span
        aria-hidden="true"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Icon name="close" size={ICON_SIZE_MAP[size]} />
      </span>
    ) : undefined;

    return (
      <StyledChip
        ref={ref}
        epVariant={variant}
        epColor={color}
        epSize={size}
        // Always pass variant="filled" to MUI — outlined border handled via our TOKEN
        variant="filled"
        // Pass color="default" — all colors controlled via TOKEN overrides
        color="default"
        label={computedLabel}
        icon={startIcon ? (
          <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
            {startIcon}
          </span>
        ) : undefined}
        deleteIcon={computedDeleteIcon}
        onDelete={onDelete}
        onClick={onClick}
        clickable={!!onClick}
        disabled={disabled}
        className={composedClassName}
        sx={sx}
      />
    );
  }
);

Chip.displayName = 'Chip';

import { forwardRef, Children, isValidElement, cloneElement } from 'react';
import { styled } from '@mui/material/styles';
import type { AvatarGroupProps, AvatarGroupSpacing } from './AvatarGroup.types';
import type { EpSize5 } from '../types/shared';
import type { AvatarVariant } from '../Avatar';

// ─── Token helpers ─────────────────────────────────────────────────────────

const TOKEN = {
  avatarWidth:    (s: EpSize5)       => `var(--ep-component-avatar-size-${s}-width)`,
  avatarHeight:   (s: EpSize5)       => `var(--ep-component-avatar-size-${s}-height)`,
  avatarFontSize: (s: EpSize5)       => `var(--ep-component-avatar-size-${s}-font-size)`,
  borderRadius:   (v: AvatarVariant) => `var(--ep-component-avatar-border-radius-${v})`,
  neutralLight:   ()                 => `var(--ep-semantic-color-neutral-light)`,
  textPrimary:    ()                 => `var(--ep-semantic-color-text-primary)`,
  bgPaper:        ()                 => `var(--ep-semantic-color-background-paper)`,
} as const;

// ─── Overlap margins ──────────────────────────────────────────────────────
const OVERLAP_MARGIN: Record<AvatarGroupSpacing, string> = {
  medium: '-8px',
  small:  '-12px',
};

// ─── Styled container ─────────────────────────────────────────────────────
const StyledGroup = styled('div')({
  display:    'inline-flex',
  flexDirection: 'row',
});

// ─── Styled overflow indicator ────────────────────────────────────────────
interface StyledOverflowProps {
  epSize:    EpSize5;
  epVariant: AvatarVariant;
}

const StyledOverflow = styled('div', {
  shouldForwardProp: (prop) => prop !== 'epSize' && prop !== 'epVariant',
})<StyledOverflowProps>(({ epSize, epVariant }) => ({
  display:         'flex',
  alignItems:      'center',
  justifyContent:  'center',
  width:           TOKEN.avatarWidth(epSize),
  height:          TOKEN.avatarHeight(epSize),
  fontSize:        TOKEN.avatarFontSize(epSize),
  borderRadius:    TOKEN.borderRadius(epVariant),
  backgroundColor: TOKEN.neutralLight(),
  color:           TOKEN.textPrimary(),
  border:          `2px solid ${TOKEN.bgPaper()}`,
  boxSizing:       'border-box',
  fontWeight:      500,
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * AvatarGroup — displays a collection of avatars with overlap and optional "+N" overflow.
 *
 * Forces size and variant on all child avatars via cloneElement.
 * Renders an overflow indicator when children count exceeds `max`.
 *
 * Spec: docs/specs/components/avatar-group.md
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup(
    {
      max      = 5,
      size     = 'md',
      spacing  = 'medium',
      variant  = 'circular',
      total,
      children,
      className,
      sx,
      'aria-label': ariaLabel = 'Avatar group',
    },
    ref
  ) {
    // Filter to valid elements only
    const childArray = Children.toArray(children).filter(isValidElement);
    const childCount = childArray.length;
    const effectiveTotal = total ?? childCount;

    // Determine if we need an overflow indicator
    const showOverflow = effectiveTotal > max;
    const visibleCount = showOverflow ? max - 1 : childCount;
    const surplus = effectiveTotal - visibleCount;

    // Slice visible children
    const visibleChildren = childArray.slice(0, visibleCount);

    const overlapMargin = OVERLAP_MARGIN[spacing];

    return (
      <StyledGroup
        ref={ref}
        role="group"
        aria-label={ariaLabel}
        className={className}
        sx={sx}
      >
        {visibleChildren.map((child, index) =>
          cloneElement(child, {
            key: (child as React.ReactElement).key ?? index,
            size,
            variant,
            style: {
              marginLeft: index === 0 ? 0 : overlapMargin,
              zIndex:     visibleChildren.length - index,
              border:     `2px solid ${TOKEN.bgPaper()}`,
              boxSizing:  'border-box' as const,
              position:   'relative' as const,
              ...((child as React.ReactElement).props?.style),
            },
          } as Record<string, unknown>)
        )}
        {showOverflow && (
          <StyledOverflow
            epSize={size}
            epVariant={variant}
            aria-label={`+${surplus} more`}
            style={{
              marginLeft: visibleCount > 0 ? overlapMargin : 0,
              zIndex:     0,
              position:   'relative',
            }}
          >
            +{surplus}
          </StyledOverflow>
        )}
      </StyledGroup>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

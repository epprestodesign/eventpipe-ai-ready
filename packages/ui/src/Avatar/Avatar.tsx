import { forwardRef } from 'react';
import MuiAvatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import type { AvatarProps, AvatarVariant } from './Avatar.types';
import type { EpSize5 } from '../types/shared';
import { Icon } from '../Icon';
import type { IconSize } from '../Icon';

// ─── Token helpers ─────────────────────────────────────────────────────────
// All values pulled exclusively from --ep-component-avatar-* custom properties.

const TOKEN = {
  width:              (s: EpSize5)       => `var(--ep-component-avatar-size-${s}-width)`,
  height:             (s: EpSize5)       => `var(--ep-component-avatar-size-${s}-height)`,
  fontSize:           (s: EpSize5)       => `var(--ep-component-avatar-size-${s}-font-size)`,
  borderRadius:       (v: AvatarVariant) => `var(--ep-component-avatar-border-radius-${v})`,
  background:         ()                 => `var(--ep-component-avatar-background)`,
  color:              ()                 => `var(--ep-component-avatar-color)`,
} as const;

// Icon size to use for the fallback person icon per avatar size
const FALLBACK_ICON_SIZE: Record<EpSize5, IconSize> = {
  xs: 'sm',
  sm: 'md',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

// ─── Styled root ──────────────────────────────────────────────────────────
interface StyledAvatarProps {
  epSize:    EpSize5;
  epVariant: AvatarVariant;
}

const StyledAvatar = styled(MuiAvatar, {
  shouldForwardProp: (prop) => prop !== 'epSize' && prop !== 'epVariant',
})<StyledAvatarProps>(({ epSize, epVariant }) => ({
  // Dimensions
  width:    TOKEN.width(epSize),
  height:   TOKEN.height(epSize),
  fontSize: TOKEN.fontSize(epSize),

  // Fallback surface colors (applies when no image is loaded)
  backgroundColor: TOKEN.background(),
  color:           TOKEN.color(),

  // Shape — MUI applies .MuiAvatar-* classes via the variant prop;
  // we override the border-radius via those classes with our tokens.
  '&.MuiAvatar-circular': {
    borderRadius: TOKEN.borderRadius('circular'),
  },
  '&.MuiAvatar-rounded': {
    borderRadius: TOKEN.borderRadius('rounded'),
  },
  '&.MuiAvatar-square': {
    borderRadius: TOKEN.borderRadius('square'),
  },

  // Icon / SVG inside the avatar: inherit the avatar font-size so it scales correctly
  '& svg': {
    fontSize: 'inherit',
    width:    '0.7em',
    height:   '0.7em',
  },
}));

// ─── Component ────────────────────────────────────────────────────────────

/**
 * Avatar — displays an image, initials, or icon to represent a person or entity.
 *
 * Fallback order: src image → children → person icon (injected automatically).
 * Use 1–2 character initials for text fallback; initials are NOT extracted from `alt`.
 *
 * MUI's default @mui/icons-material/Person fallback is suppressed;
 * the EP Icon system person icon is injected instead.
 *
 * Spec: docs/specs/components/avatar.md
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(
    {
      variant   = 'circular',
      size      = 'md',
      src,
      alt,
      className,
      sx,
      children,
    },
    ref
  ) {
    // Suppress MUI's @mui/icons-material/Person fallback by always providing children.
    // When no src and no caller-provided children, inject the EP Icon fallback.
    const content = children ?? (!src ? <Icon name="person" size={FALLBACK_ICON_SIZE[size]} /> : undefined);

    return (
      <StyledAvatar
        ref={ref}
        epSize={size}
        epVariant={variant}
        variant={variant}
        src={src}
        alt={alt}
        className={className}
        sx={sx}
      >
        {content}
      </StyledAvatar>
    );
  }
);

Avatar.displayName = 'Avatar';

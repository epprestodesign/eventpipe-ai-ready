import { forwardRef } from 'react';
import { iconRegistry } from '../icons/registry';
import type { IconProps } from './Icon.types';

/**
 * Icon — system-level icon rendering component.
 *
 * This is the ONLY sanctioned way to render icons in EventPipe components.
 * Do NOT import @mui/icons-material anywhere outside of src/icons/registry.ts.
 *
 * Sizing: reads --ep-semantic-icon-size-{size} CSS custom properties.
 *         No hardcoded pixel values.
 *
 * Accessibility:
 *   - No `label` → aria-hidden="true" (decorative)
 *   - With `label` → role="img" + aria-label (semantic)
 *
 * Spec: docs/specs/foundations/iconography.md
 * Governance: docs/decisions/006-icon-system.md
 */
export const Icon = forwardRef<SVGSVGElement, IconProps>(
  function Icon({ name, size = 'md', label, className }, ref) {
    const SvgIcon = iconRegistry[name];

    if (process.env.NODE_ENV !== 'production' && !SvgIcon) {
      console.warn(
        `[Icon] "${name}" is not in the registry. ` +
        `See docs/decisions/006-icon-system.md to add it.`
      );
      return null;
    }

    const isDecorative = !label;

    return (
      <SvgIcon
        ref={ref}
        aria-hidden={isDecorative ? true : undefined}
        aria-label={!isDecorative ? label : undefined}
        role={!isDecorative ? 'img' : undefined}
        className={className}
        focusable={false}
        style={{
          // Size via semantic token — no hardcoded values.
          // MUI SvgIcon renders width/height as "1em" so font-size drives the dimensions.
          fontSize: `var(--ep-semantic-icon-size-${size})`,
          // Block display prevents inline baseline gap and enables flexbox alignment.
          display: 'block',
          // Prevent icon from shrinking inside flex containers.
          flexShrink: 0,
          // Inherit color from parent by default.
          color: 'currentColor',
        }}
      />
    );
  }
);

Icon.displayName = 'Icon';

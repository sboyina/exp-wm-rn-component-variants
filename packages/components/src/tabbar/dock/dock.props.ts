import type { TabbarWidgetProps } from '../shared/tabbar-types';
import type { DockTabbarStylesProp, DockTabbarLayoutProp } from './dock.style-props';

export type { DockTabbarStylesProp, DockTabbarLayoutProp } from './dock.style-props';

/**
 * Callbacks this variant fires. Exhaustive: the list comes from the merged
 * component API, not from whatever the implementation happens to call.
 */
export type DockTabbarEvents = {
  /** The widget was tapped. */
  onTap?: () => void;
};

/**
 * Dock Tabbar — `Partial<TabbarWidgetProps>` plus this design's own props.
 *
 * Every member is optional here even where the API manifest marks it required:
 * "required" is a Studio property-panel constraint, and a component that throws
 * on a missing prop is worse than one that falls back. The manifest in
 * dock.api.ts carries the requiredness.
 */
export type DockTabbarProps = Partial<TabbarWidgetProps> & DockTabbarEvents & {
  styles?: DockTabbarStylesProp;
  layout?: DockTabbarLayoutProp;

  /** Extra class names merged into the root style resolution. */
  classname?: string;
  /** Disables interaction. */
  disabled?: boolean;
  /** Widget name, unique within the page. Required by Studio. */
  name?: string;
  /** Whether the widget renders at all. */
  show?: boolean;
};

const DOCK_TABBAR_DEFAULTS: DockTabbarProps = {
  disabled: false,
  show: true,
};

/** Merge caller props with Dock Tabbar defaults. */
export function createDockTabbarProps(partial?: DockTabbarProps): DockTabbarProps {
  return { ...DOCK_TABBAR_DEFAULTS, ...partial };
}

import { useMemo } from 'react';
import { mergeTextStyle, mergeViewStyle } from '../shared/tabbar-style-utils';
import { dockTabbarStyles } from './dock.styles';
import type { DockTabbarStylesProp, DockTabbarLayoutProp } from './dock.style-props';

export function useDockTabbarResolvedStyles(
  stylesProp?: DockTabbarStylesProp,
  layoutProp?: DockTabbarLayoutProp
) {

  const styles = useMemo(
    () => ({
      barFill: mergeViewStyle(dockTabbarStyles.barFill, stylesProp?.barFill),
      barShadow: mergeViewStyle(dockTabbarStyles.barShadow, stylesProp?.barShadow),
      activePill: mergeViewStyle(dockTabbarStyles.activePill, stylesProp?.activePill),
      iconInactive: mergeViewStyle(dockTabbarStyles.iconInactive, stylesProp?.iconInactive),
      iconActive: mergeViewStyle(dockTabbarStyles.iconActive, stylesProp?.iconActive),
    }),
    [stylesProp]
  );

  return { styles, layout: layoutProp ?? {} };
}

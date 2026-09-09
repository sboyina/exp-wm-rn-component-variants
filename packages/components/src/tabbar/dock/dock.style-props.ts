import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

/** `styles` map for {@link DockTabbar}: region keys → React Native style objects. */
export type DockTabbarStylesProp = {
  barFill?: StyleProp<ViewStyle>;
  barShadow?: StyleProp<ViewStyle>;
  activePill?: StyleProp<ViewStyle>;
  iconInactive?: StyleProp<ViewStyle>;
  iconActive?: StyleProp<ViewStyle>;
};

/** Non-style values this design feeds to its SVG. */
export type DockTabbarLayoutProp = {
  cornerRadius?: string;
  itemSpacing?: string;
  iconSize?: string;
};

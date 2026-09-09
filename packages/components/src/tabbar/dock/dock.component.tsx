import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { createDockTabbarProps, type DockTabbarProps } from './dock.props';
import { useDockTabbarResolvedStyles } from './use-dock-styles';

/**
 * Dock Tabbar — generated skeleton, filled in by hand.
 * Source design: dock-tabbar. Regenerating overwrites nothing that exists.
 */
// TODO(implementer): render 5 items, labels: none,
// active treatment: background-pill.
// Every event below is declared in dock.props.ts and listed in dock.api.ts.
// Wire the ones this design can fire; the rest stay declared and unused.
//   onTap() — The widget was tapped.
export function DockTabbar(partial?: DockTabbarProps) {
  const props = createDockTabbarProps(partial);
  const { styles, layout } = useDockTabbarResolvedStyles(
    props.styles,
    props.layout
  );
  const count = 5;
  const activeIndex = 0;

  return (
    <View style={styles.shell}>
      <View style={styles.shell}>
        
        <View style={styles.shell}>
          {Array.from({ length: count }, (_, index) => {
            const active = index === activeIndex;
            return (
              <Pressable
                key={index}
                accessibilityRole="button"
                accessibilityState={{ selected: active }}
                style={styles.shell}
                onPress={() => {
                  props.onTap?.();
                }}
              >
                {/* TODO(implementer): the icon slot */}
                
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

export default DockTabbar;

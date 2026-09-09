/**
 * Dock Tabbar — Examples
 *
 * GENERATED from the component API manifest (dock.api.ts) by
 * scripts/scaffold-stories.ts. One group per property; the default value first,
 * then every other value alphabetically. Add stories, but do not rename or
 * reorder these — the registration gate checks them against the manifest.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { DockTabbar } from '../../../../packages/components/src/tabbar/dock';

const meta = {
  title: 'Tabbar/Dock Tabbar/Examples',
  component: DockTabbar,
  argTypes: {
    onTap: { action: 'onTap' },
  },
} satisfies Meta<typeof DockTabbar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The component exactly as the design specifies it. The verify loop screenshots this story. */
export const Default: Story = {
  args: {},
};

/** A caller restyling the widget through the styles prop. */
export const Themed: Story = {
  args: {
    styles: { barFill: { opacity: 0.9 } },
  },
};

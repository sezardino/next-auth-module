import type { Meta, StoryObj } from "@storybook/react";

import {
  DefaultLayout as Component,
  DefaultLayoutProps as Props,
} from "./DefaultLayout";

const render = (args: Props) => <Component {...args} />;

export default {
  title: "Layout/DefaultLayout",
  component: Component,
  render,
  args: {},
  argTypes: {},
} as Meta<typeof Component>;
type ComponentStory = StoryObj<typeof Component>;

export const DefaultLayout: ComponentStory = {
  args: {},
};

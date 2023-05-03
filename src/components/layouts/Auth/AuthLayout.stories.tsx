import type { Meta, StoryObj } from "@storybook/react";

import {
  AuthLayout as Component,
  AuthLayoutProps as Props,
} from "./AuthLayout";

const render = (args: Props) => <Component {...args} />;

export default {
  title: "Layout/AuthLayout",
  component: Component,
  render,
  args: {},
  argTypes: {},
} as Meta<typeof Component>;
type ComponentStory = StoryObj<typeof Component>;

export const AuthLayout: ComponentStory = {
  args: {},
};

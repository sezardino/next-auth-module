import type { Meta, StoryObj } from "@storybook/react";

import { AuthForm as Component, AuthFormProps as Props } from "./AuthForm";

const render = (args: Props) => <Component {...args} />;

export default {
  title: "Forms/Auth",
  component: Component,
  render,
  args: {},
  argTypes: {},
} as Meta<typeof Component>;
type ComponentStory = StoryObj<typeof Component>;

export const Default: ComponentStory = {
  args: {},
};

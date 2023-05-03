import type { Meta, StoryObj } from "@storybook/react";

import { Icon, IconProps } from "./Icon";

const render = (args: IconProps) => <Icon {...args} />;

export default {
  title: "Components/Icon",
  component: Icon,
  render,
  args: {},
  argTypes: {},
} as Meta<typeof Icon>;
type ComponentStory = StoryObj<typeof Icon>;

export const Default: ComponentStory = {
  args: {
    name: "Md10K",
  },
};

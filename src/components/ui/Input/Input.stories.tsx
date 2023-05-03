import type { Meta, StoryObj } from "@storybook/react";

import { Input, InputProps } from "./Input";

const render = (args: InputProps) => <Input {...args} />;

export default {
  title: "Components/Input",
  component: Input,
  render,
  args: {},
  argTypes: {},
} as Meta<typeof Input>;
type ComponentStory = StoryObj<typeof Input>;

export const Default: ComponentStory = {
  args: {},
};

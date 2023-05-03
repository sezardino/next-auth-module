import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxProps } from "./Checkbox";

const render = (args: CheckboxProps) => <Checkbox {...args} />;

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  render,
  args: {},
  argTypes: {},
} as Meta<typeof Checkbox>;
type ComponentStory = StoryObj<typeof Checkbox>;

export const Default: ComponentStory = {
  args: {},
};

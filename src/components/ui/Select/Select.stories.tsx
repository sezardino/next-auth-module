import type { Meta, StoryObj } from "@storybook/react";

import { Select, SelectProps } from "./Select";

const render = (args: SelectProps) => <Select {...args} />;

export default {
  title: "Components/Select",
  component: Select,
  render,
  args: {},
  argTypes: {},
} as Meta<typeof Select>;
type ComponentStory = StoryObj<typeof Select>;

export const Default: ComponentStory = {
  args: {
    placeholder: "placeholder",
    options: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
  },
};

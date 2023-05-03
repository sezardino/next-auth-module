import type { Meta, StoryObj } from "@storybook/react";

import { Textarea, TextareaProps } from "./Textarea";

const render = (args: TextareaProps) => <Textarea {...args} />;

export default {
  title: "Components/Textarea",
  component: Textarea,
  render,
  args: {},
  argTypes: {},
} as Meta<typeof Textarea>;
type ComponentStory = StoryObj<typeof Textarea>;

export const Default: ComponentStory = {
  args: {},
};

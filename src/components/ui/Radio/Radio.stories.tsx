import type { Meta, StoryObj } from "@storybook/react";

import { Radio, RadioProps } from "./Radio";

const render = (args: RadioProps) => <Radio {...args} />;

export default {
  title: "Components/Radio",
  component: Radio,
  render,
  args: {},
  argTypes: {},
} as Meta<typeof Radio>;
type ComponentStory = StoryObj<typeof Radio>;

export const Default: ComponentStory = {
  args: {},
};

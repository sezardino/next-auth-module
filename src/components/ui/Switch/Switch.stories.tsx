import type { Meta, StoryObj } from "@storybook/react";

import { Switch, SwitchProps } from "./Switch";

const render = (args: SwitchProps) => <Switch {...args} />;

export default {
  title: "Components/Switch",
  component: Switch,
  render,
  args: {
    label: "Label string",
  },
} as Meta<typeof Switch>;
type ComponentStory = StoryObj<typeof Switch>;

export const Default: ComponentStory = {
  args: {},
};

export const Checked: ComponentStory = {
  args: {
    checked: true,
  },
};

export const Disabled: ComponentStory = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: ComponentStory = {
  args: {
    disabled: true,
    checked: true,
  },
};

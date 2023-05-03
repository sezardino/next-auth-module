import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown, DropdownProps } from "./Dropdown";

const render = (args: DropdownProps) => <Dropdown {...args} />;

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  render,
  args: {
    children: (
      <>
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
      </>
    ),
  },
  argTypes: {},
} as Meta<typeof Dropdown>;
type ComponentStory = StoryObj<typeof Dropdown>;

export const Default: ComponentStory = {
  args: {
    label: "Dropdown",
  },
};

export const WithIcon: ComponentStory = {
  args: {
    label: "Dropdown",
  },
};

export const WithTypography: ComponentStory = {
  args: {
    label: "Dropdown",
  },
};

export const Dots: ComponentStory = {
  args: {
    type: "dots",
  },
};

export const Top: ComponentStory = {
  args: {
    label: "Dropdown",
    position: "top",
  },
};

export const Right: ComponentStory = {
  args: {
    label: "Dropdown",
    position: "right",
  },
};

export const Left: ComponentStory = {
  args: {
    label: "Dropdown",
    position: "left",
  },
};

export const Bottom: ComponentStory = {
  args: {
    label: "Dropdown",
    position: "bottom",
  },
};

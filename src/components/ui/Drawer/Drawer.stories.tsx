import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { Drawer, DrawerProps } from "./Drawer";

const Render = (args: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Click to open drawer</button>
      <Drawer {...args} isOpen={isOpen} closeHandler={() => setIsOpen(false)} />
    </>
  );
};

export default {
  title: "Components/Drawer",
  component: Drawer,
  render: Render,
  args: {},
  argTypes: {},
} as Meta<typeof Drawer>;
type ComponentStory = StoryObj<typeof Drawer>;

export const Default: ComponentStory = {
  args: {},
};

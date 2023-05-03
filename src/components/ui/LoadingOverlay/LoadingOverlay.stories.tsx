import type { Meta, StoryObj } from "@storybook/react";

import { LoadingOverlay, LoadingOverlayProps } from "./LoadingOverlay";

const render = (args: LoadingOverlayProps) => <LoadingOverlay {...args} />;

export default {
  title: "Components/LoadingOverlay",
  component: LoadingOverlay,
  render,
  args: {},
  argTypes: {},
} as Meta<typeof LoadingOverlay>;
type ComponentStory = StoryObj<typeof LoadingOverlay>;

export const Default: ComponentStory = {
  args: {},
};

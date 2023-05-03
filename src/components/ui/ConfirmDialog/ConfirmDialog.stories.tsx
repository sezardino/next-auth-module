import type { Meta, StoryObj } from "@storybook/react";

import { ConfirmDialog, ConfirmDialogProps } from "./ConfirmDialog";

const render = (args: ConfirmDialogProps) => <ConfirmDialog {...args} />;

export default {
  title: "Components/ConfirmDialog",
  component: ConfirmDialog,
  render,
  args: {
    isOpen: true,
    title: "Are you sure?",
    info: "This action cannot be undone.",
    triggers: [
      {
        text: "Cancel",
        variant: "alternative",
      },
      {
        text: "Confirm",
        variant: "primary",
      },
    ],
  },
  argTypes: {},
} as Meta<typeof ConfirmDialog>;
type ComponentStory = StoryObj<typeof ConfirmDialog>;

export const Default: ComponentStory = {
  args: {},
};

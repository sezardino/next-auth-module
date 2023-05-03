import type { Meta, StoryObj } from "@storybook/react";

import { Pagination, PaginationProps } from "./Pagination";

const render = (args: PaginationProps) => <Pagination {...args} />;

export default {
  title: "Components/Pagination",
  component: Pagination,
  render,
  args: {
    totalItems: 100,
    currentPage: 1,
    onPageChange: () => {},
  },
  argTypes: {},
} as Meta<typeof Pagination>;
type ComponentStory = StoryObj<typeof Pagination>;

export const Default: ComponentStory = {
  args: {},
};

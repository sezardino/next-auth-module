import type { Meta, StoryObj } from "@storybook/react";

import { Typography, TypographyProps } from "./Typography";

const render = (args: TypographyProps) => <Typography {...args} />;

export default {
  title: "Components/Typography",
  component: Typography,
  render,
  args: {
    text: "Typography text",
  },
  argTypes: {},
} as Meta<typeof Typography>;
type ComponentStory = StoryObj<typeof Typography>;

export const Default: ComponentStory = {
  args: {},
};

export const H1: ComponentStory = {
  args: {
    styling: "h1",
  },
};

export const H2: ComponentStory = {
  args: {
    styling: "h2",
  },
};

export const H3: ComponentStory = {
  args: {
    styling: "h3",
  },
};

export const H4: ComponentStory = {
  args: {
    styling: "h4",
  },
};

export const H5: ComponentStory = {
  args: {
    styling: "h5",
  },
};

export const H6: ComponentStory = {
  args: {
    styling: "h6",
  },
};

export const P: ComponentStory = {
  args: {
    styling: "p",
  },
};

export const Leading: ComponentStory = {
  args: {
    styling: "leading",
  },
};

export const Capture: ComponentStory = {
  args: {
    styling: "capture",
  },
};

export const Light: ComponentStory = {
  args: {
    variant: "light",
  },
};

export const Tag: ComponentStory = {
  args: {
    as: "span",
  },
};

export const Text: ComponentStory = {
  args: {
    text: "Typography text",
  },
};

export const Children: ComponentStory = {
  args: {
    children: "Typography children",
  },
};

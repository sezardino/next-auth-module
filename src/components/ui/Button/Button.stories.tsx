import { StoryObj, type Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

const render = (args: ButtonProps) => <Button {...args} />;

export default {
  title: "Components/Button",
  component: Button,
  render,
  args: {
    text: "Button text",
  },
  argTypes: {
    variant: {
      name: "variant",
      defaultValue: "primary",
      control: {
        type: "select",
      },
    },
    size: {
      name: "size",
      defaultValue: "base",
      control: {
        type: "select",
      },
    },
    isFullWidth: {
      name: "isFullWidth",
      defaultValue: false,
    },
    icon: {
      name: "icon",
      defaultValue: undefined,
      control: {
        type: "select",
      },
    },
  },
} as Meta<typeof Button>;
type ComponentStory = StoryObj<typeof Button>;

// VARIANT START

export const Primary: ComponentStory = {
  args: {
    variant: "primary",
  },
};

export const Alternative: ComponentStory = {
  args: {
    variant: "alternative",
  },
};

export const Dark: ComponentStory = {
  args: {
    variant: "dark",
  },
};

export const Light: ComponentStory = {
  args: {
    variant: "light",
  },
};

export const Green: ComponentStory = {
  args: {
    variant: "green",
  },
};

export const Red: ComponentStory = {
  args: {
    variant: "red",
  },
};

export const Yellow: ComponentStory = {
  args: {
    variant: "yellow",
  },
};

export const Link: ComponentStory = {
  args: {
    variant: "link",
  },
};

// VARIANT END

// SIZE START

export const Xs: ComponentStory = {
  args: {
    size: "xs",
  },
};

export const Sm: ComponentStory = {
  args: {
    size: "sm",
  },
};

export const Base: ComponentStory = {
  args: {
    size: "base",
  },
};

export const Lg: ComponentStory = {
  args: {
    size: "lg",
  },
};

export const Xl: ComponentStory = {
  args: {
    size: "xl",
  },
};

// SIZE END

export const FullWidth: ComponentStory = {
  args: {
    isFullWidth: true,
  },
};

export const WithIcon: ComponentStory = {
  args: {
    text: undefined,
    icon: "Md10K",
  },
};

export const WithIconAndText: ComponentStory = {
  args: {
    icon: "Md10K",
    text: "Button text",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { FormField, FormFieldProps } from "./FormField";

const render = (args: FormFieldProps) => <FormField {...args} />;

export default {
  title: "Components/FormField",
  component: FormField,
  render,
  args: {
    label: "Label string",
  },
  argTypes: {},
} as Meta<typeof FormField>;
type ComponentStory = StoryObj<typeof FormField>;

export const Default: ComponentStory = {
  args: {},
};

export const Switch: ComponentStory = {
  args: {
    type: "switch",
  },
};

export const Input: ComponentStory = {
  args: {
    type: "input",
  },
};

export const Textarea: ComponentStory = {
  args: {
    type: "textarea",
  },
};

export const Checkbox: ComponentStory = {
  args: {
    type: "checkbox",
  },
};

export const Radio: ComponentStory = {
  render: (props) => (
    <>
      <FormField {...props} label="Radio 1" />
      <FormField {...props} label="Radio 2" />
    </>
  ),
  args: {
    type: "radio",
    name: "radio",
    labelPlacement: "right",
  },
};

export const Select: ComponentStory = {
  args: {
    type: "select",
    placeholder: "placeholder",
    options: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
  },
};

export const Error: ComponentStory = {
  args: {
    error: "Error message",
  },
};

export const Description: ComponentStory = {
  args: {
    description: "Description message",
  },
};

export const LabelHidden: ComponentStory = {
  args: {
    isLabelHidden: true,
  },
};

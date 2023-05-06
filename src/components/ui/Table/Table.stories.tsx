import type { Meta, StoryObj } from "@storybook/react";

import { Table, TableProps } from "./Table";

const data = [
  { id: "1", name: "John Doe", age: 32 },
  { id: "2", name: "Jane Doe", age: 31 },
  { id: "3", name: "John Smith", age: 33 },
  { id: "4", name: "Jane Smith", age: 34 },
];

const columns = [
  { name: "Name", accessor: "name", cell: () => <p>name</p> },
  { name: "Age", accessor: "age", cell: () => <p>name</p> },
];

// type from "data"
type Row = (typeof data)[number];

const render = (args: TableProps<Row>) => <Table {...args} />;

export default {
  title: "Components/Table",
  component: Table,
  render,
  args: {},
  argTypes: {},
} as Meta<typeof Table>;
type ComponentStory = StoryObj<typeof Table>;

export const Default: ComponentStory = {
  args: {
    columns,
    data,
  },
};

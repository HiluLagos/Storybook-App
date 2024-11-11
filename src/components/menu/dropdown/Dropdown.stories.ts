import { Dropdown } from "./Dropdown.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: 'Menu/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    dropped: { control: 'boolean' },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    dropped: false,
    title: "Main",
    checkLists: [
      { intent: "default", title: "Tarea 1" },
      { intent: "pressed", title: "Tarea 3" },
      { intent: "done", title: "Tarea 4" },
    ],
    topRightText: "Date",
  },
};

export const Opened: Story = {
  args: {
    dropped: true,
    title: "Main",
    checkLists: [
      { intent: "default", title: "Tarea 1" },
      { intent: "pressed", title: "Tarea 3" },
      { intent: "done", title: "Tarea 4" },
    ],
    topRightText: "Date",
  },
};

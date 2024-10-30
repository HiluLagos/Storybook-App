import { Dropdown } from "./Dropdown";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: 'Menu/dropdown/Dropdown',
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
    title: "Mis Checklists",
    checkLists: [
      { intent: "default", title: "Tarea 1" },
      { intent: "loading", title: "Tarea 2" },
      { intent: "pressed", title: "Tarea 3" },
      { intent: "done", title: "Tarea 4" },
    ],
  },
};

export const Opened: Story = {
  args: {
    dropped: true,
    title: "Mis Checklists",
    checkLists: [
      { intent: "default", title: "Tarea 1" },
      { intent: "loading", title: "Tarea 2" },
      { intent: "pressed", title: "Tarea 3" },
      { intent: "done", title: "Tarea 4" },
    ],
  },
};

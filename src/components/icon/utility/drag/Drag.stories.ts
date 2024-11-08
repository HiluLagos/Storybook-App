import {Meta, StoryObj} from "@storybook/react";
import Drag from "./Drag.tsx";

const meta = {
  title: 'Icon/Utility/Drag',
  component: Drag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'dragged'],
      description: 'The state of the drag indicator'
    },
  }
} satisfies Meta<typeof Drag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
  },
};

export const Dragged: Story = {
  args: {
    state: 'dragged',
  },
};

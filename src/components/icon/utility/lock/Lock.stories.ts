import { Meta, StoryObj } from "@storybook/react";
import Lock from "./Lock";

const meta = {
  title: 'Icon/Utility/lock',
  component: Lock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fill: {
      control: 'select',
      options: ['filled', 'outline'],
      description: 'The fill state of the lock',
    },
  },
} satisfies Meta<typeof Lock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    fill: 'filled',
  },
};

export const Outline: Story = {
  args: {
    fill: 'outline',
  },
};
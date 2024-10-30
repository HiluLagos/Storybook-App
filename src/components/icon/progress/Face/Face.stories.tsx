import { Meta, StoryObj } from "@storybook/react";
import Face from "./Face.tsx";

const meta = {
  title: 'Icon/Progress/Face',
  component: Face,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['happy', 'neutral', 'sad'],
      description: 'The facial expression'
    },
    color: {
      control: 'color',
      description: 'The color of the face'
    }
  },
} satisfies Meta<typeof Face>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Happy: Story = {
  args: {
    state: 'happy',
    color: 'secondary-700',
  },
}

export const Neutral: Story = {
  args: {
    state: 'neutral',
    color: 'secondary-700',
  },
}

export const Sad: Story = {
  args: {
    state: 'sad',
    color: 'secondary-700',
  },
}

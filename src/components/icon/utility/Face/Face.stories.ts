import { Meta, StoryObj } from "@storybook/react";
import Face from "./Face.tsx";

const meta = {
  title: 'Icon/Utility/Face',
  component: Face,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['selected', 'unselected'],
      description: 'The facial expression selection'
    },
    state: {
      control: 'select',
      options: ['happy', 'neutral', 'sad'],
      description: 'The facial expression'
    },
    size: {
      control: 'select',
      options: ['medium', 'large'],
      description: 'The facial size'

    },
  },
} satisfies Meta<typeof Face>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HappyMedium: Story = {
  args: {
    state: 'happy',
    size: 'medium',
  },
}

export const NeutralMedium: Story = {
  args: {
    state: 'neutral',
    size: 'medium',
  },
}

export const SadMedium: Story = {
  args: {
    state: 'sad',
    size: 'medium',
  },
}

export const HappyLarge: Story = {
  args: {
    state: 'happy',
    size: 'large',
  },
}

export const NeutralLarge: Story = {
  args: {
    state: 'neutral',
    size: 'large',
  },
}

export const SadLarge: Story = {
  args: {
    state: 'sad',
    size: 'large',
  },
}
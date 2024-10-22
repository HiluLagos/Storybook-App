import { Meta, StoryObj } from "@storybook/react";
import EmotionalTrack from "./EmotionalTrack.tsx";

const meta = {
  title: 'Components/Progress/EmotionalTrack',
  component: EmotionalTrack,
  parameters: {
    layout: 'centered',
  },
    tags: ['autodocs'],
    argTypes: {
    state: {
      control: 'select',
      options: ['happy', 'neutral', 'sad'],
      description: 'The emotional state to display',
    },
  },
} satisfies Meta<typeof EmotionalTrack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Happy: Story = {
  args: {
    state: 'happy',
  },
};

export const Neutral: Story = {
  args: {
    state: 'neutral',
  },
};

export const Sad: Story = {
  args: {
    state: 'sad',
  },
};
import {Meta, StoryObj} from "@storybook/react";
import ActivityCard from "./ActivityCard.tsx";

const meta = {
  title: 'Cards/Activity/ActivityCard',
  component: ActivityCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    activity: {
      control: 'select',
      options: ['pills', 'salad', 'steps', 'water'],
      description: 'The activity of the component',
    },
    progress: {
      control: 'number',
      description: 'The progress of the activity',
    },
    maxProgress: {
      control: 'number',
      description: 'The maximum progress of the activity',
    }
  },
} satisfies Meta<typeof ActivityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Water: Story = {
  args: {
    progress: 45,
    maxProgress: 100,
    activity: 'water',
  },
};

export const Pills: Story = {
  args: {
    progress: 45,
    maxProgress: 100,
    activity: 'pills',
  },
};

export const Salad: Story = {
  args: {
    progress: 45,
    maxProgress: 100,
    activity: 'salad',
  },
};

export const Steps: Story = {
  args: {
    progress: 45,
    maxProgress: 100,
    activity: 'steps',
  },
};

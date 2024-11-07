import { Meta, StoryObj } from '@storybook/react';
import HomeCard from './HomeCard.tsx';

const meta = {
  title: 'Cards/Home/HomeCard',
  component: HomeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['task', 'log', 'saved', 'survey'],
    },
    progress: {
      control: 'number',
    },
  },
} satisfies Meta<typeof HomeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Task: Story = {
  args: {
    progress: 5,
    type: 'task',
  },
};

export const Log: Story = {
  args: {
    progress: 3,
    type: 'log',
  },
};

export const Saved: Story = {
  args: {
    progress: 54,
    type: 'saved',
  },
};

export const Survey: Story = {
  args: {
    progress: 13,
    type: 'survey',
  },
};

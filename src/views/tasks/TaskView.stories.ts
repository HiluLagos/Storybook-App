import { Meta, StoryObj } from '@storybook/react';
import TasksView from './TasksView';

const meta: Meta<typeof TasksView> = {
  title: 'Views/TasksView',
  component: TasksView,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TasksView>;

export const Default: Story = {};
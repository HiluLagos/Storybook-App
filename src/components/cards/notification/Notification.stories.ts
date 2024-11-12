import {Meta, StoryObj} from "@storybook/react";
import Notification from "./Notification.tsx";

const meta = {
  title: 'Cards/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'danger', 'success', 'info'],
      description: 'The color of the notification',
    },
    icon: {
      control: 'select',
      options: ['pills', 'salad', 'steps', 'water', 'task', 'confetti'],
      description: 'The icon of the notification',
    },
    description: {
      control: 'text',
      description: 'The description of the notification',
    },
    date: {
      control: 'text',
      description: 'The date of the notification',
    },
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'default',
    icon: "pills",
    description: "This is a description",
    date: "19:45 10/09/2002",
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    icon: "pills",
    description: "You are running out of pills",
    date: "19:45 10/09/2002",
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    icon: "steps",
    description: "You have completed your steps",
    date: "19:45 10/09/2002",
  },
};

export const Info: Story = {
  args: {
    color: 'info',
    icon: "water",
    description: "You need 2L to reach your daily goal",
    date: "19:45 10/09/2002",
  },
};

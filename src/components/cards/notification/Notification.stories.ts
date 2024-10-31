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

    }
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'default',
    icon: "pills"
  },
};

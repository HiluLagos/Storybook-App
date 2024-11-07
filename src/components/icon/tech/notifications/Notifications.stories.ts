import {Meta, StoryObj} from "@storybook/react";
import Notifications from "./Notifications.tsx";

const meta = {
  title: 'Icon/Settings/notifications',
  component: Notifications,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'selected'],
      description: 'The way the component is displayed'
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        state: 'default'
    },
};

export const Selected: Story = {
    args: {
        state: 'selected'
    },
};

import {Meta, StoryObj} from "@storybook/react";
import Notifications from "./Notifications.tsx";

const meta = {
  title: 'Icon/Settings/notifications',
  component: Notifications,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

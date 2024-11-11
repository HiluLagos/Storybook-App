import {Meta, StoryObj} from "@storybook/react";
import LogOut from "./LogOut.tsx";

const meta = {
  title: 'Icon/Settings/Logout',
  component: LogOut,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

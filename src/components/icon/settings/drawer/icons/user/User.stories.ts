import {Meta, StoryObj} from "@storybook/react";
import User from "./User.tsx";

const meta = {
  title: 'Icon/Settings/user',
  component: User,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

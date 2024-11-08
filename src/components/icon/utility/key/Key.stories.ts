import {Meta, StoryObj} from "@storybook/react";
import Key from "./Key.tsx";

const meta = {
  title: 'Icon/Utility/Key',
  component: Key,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

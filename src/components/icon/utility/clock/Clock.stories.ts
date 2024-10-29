import {Meta, StoryObj} from "@storybook/react";
import Clock from "./Clock.tsx";

const meta = {
  title: 'Icon/Utility/Clock',
  component: Clock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

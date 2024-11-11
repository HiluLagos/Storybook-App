import {Meta, StoryObj} from "@storybook/react";
import TopNotch from "./TopNotch.tsx";

const meta = {
  title: 'Icon/Settings/Top Notch',
  component: TopNotch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

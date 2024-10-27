import {Meta, StoryObj} from "@storybook/react";
import Homer from "./Homer.tsx";

const meta = {
  title: 'Icon/Utility/homer',
  component: Homer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

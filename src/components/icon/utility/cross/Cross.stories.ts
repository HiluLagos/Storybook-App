import {Meta, StoryObj} from "@storybook/react";
import Cross from "./Cross.tsx";

const meta = {
  title: 'Icon/Utility/Cross',
  component: Cross,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
  }
} satisfies Meta<typeof Cross>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {
};

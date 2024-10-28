import {Meta, StoryObj} from "@storybook/react";
import Typography from "./Typography.tsx";

const meta = {
  title: 'Typography/h1',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    weight: {
      control: 'select',
      options: ['regular', 'semiBold', 'extraBold'],
      description: 'The weight of the text',
    },
    size: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'm'],
      description: 'The size of the text',
    },
  }
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

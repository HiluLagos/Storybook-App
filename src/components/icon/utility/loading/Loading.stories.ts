import {Meta, StoryObj} from "@storybook/react";
import Loading from "./Loading.tsx";

const meta = {
  title: 'Icon/Utility/loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
        description: 'The color of the loading spinner',
        options: ['default', 'primary'],
      },
    },
  }
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'default',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

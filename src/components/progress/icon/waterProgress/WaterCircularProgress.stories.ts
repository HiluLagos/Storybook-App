import {Meta, StoryObj} from "@storybook/react";
import WaterCircularProgress from "./WaterCircularProgress.tsx";

const meta = {
  title: 'Progress/Icon/waterCircularProgress',
  component: WaterCircularProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the circular progress',
    },
    percentage: {
      control: { type: 'range', min: 0, max: 100},
      description: 'The percentage of the progress',
    },
  },
} satisfies Meta<typeof WaterCircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    percentage: 45,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    percentage: 45,
  },
};

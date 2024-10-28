import {Meta, StoryObj} from "@storybook/react";
import CircularProgressComponent from "./CircularProgressComponent.tsx";

const meta = {
  title: 'Progress/Icon/CircularProgressComponent',
  component: CircularProgressComponent,
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
    activity: {
      control: 'select',
      options: ['pills', 'salad', 'steps', 'water'],
      description: 'The activity of the component',
    }
  },
} satisfies Meta<typeof CircularProgressComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WaterSmall: Story = {
  args: {
    size: 'small',
    percentage: 45,
    activity: 'water',
  },
};

export const WaterMedium: Story = {
  args: {
    size: 'medium',
    percentage: 45,
    activity: 'water',
  },
};

export const PillsSmall: Story = {
  args: {
    size: 'small',
    percentage: 45,
    activity: 'pills',
  },
};

export const PillsMedium: Story = {
  args: {
    size: 'medium',
    percentage: 45,
    activity: 'pills',
  },
};

export const SaladSmall: Story = {
  args: {
    size: 'small',
    percentage: 45,
    activity: 'salad',
  },
};

export const SaladMedium: Story = {
  args: {
    size: 'medium',
    percentage: 45,
    activity: 'salad',
  },
};

export const StepsSmall: Story = {
  args: {
    size: 'small',
    percentage: 45,
    activity: 'steps',
  },
};

export const StepsMedium: Story = {
  args: {
    size: 'medium',
    percentage: 45,
    activity: 'steps',
  },
};

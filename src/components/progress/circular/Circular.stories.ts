import {Meta, StoryObj} from "@storybook/react";
import Circular from "./Circular.tsx";

const meta = {
  title: 'Progress/circular',
  component: Circular,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the circular progress',
    },
    activity: {
      control: 'select',
      options: ['pills', 'salad', 'steps', 'water'],
      description: 'The activity of the comment',
    },
    percentage: {
      control: { type: 'range', min: 0, max: 100},
      min: 0,
      max: 100,
      description: 'The percentage of the progress',
    },
    children: {
      control: 'text',
      description: 'The children of the component',
    }
  },
} satisfies Meta<typeof Circular>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PillsMedium: Story = {
  args: {
    size: 'small',
    percentage: 45,
  },
}

export const PillsLarge: Story = {
  args: {
    size: 'medium',
    percentage: 67,
  },
}

export const SaladMedium: Story = {
  args: {
    size: 'small',
    activity: 'salad',
    percentage: 20,
  },
}

export const SaladLarge: Story = {
  args: {
    size: 'medium',
    activity: 'salad',
    percentage: 20,
  },
}

export const StepsMedium: Story = {
  args: {
    size: 'small',
    activity: 'steps',
    percentage: 88,
  },
}

export const StepsLarge: Story = {
  args: {
    size: 'medium',
    activity: 'steps',
    percentage: 88,
  },
}

export const WaterMedium: Story = {
  args: {
    size: 'small',
    activity: 'water',
    percentage: 35,
  },
}

export const WaterLarge: Story = {
  args: {
    size: 'medium',
    activity: 'water',
    percentage: 35,
  },
}

import {Meta, StoryObj} from "@storybook/react";
import ActivityCore from "./ActivityCore.tsx";

const meta = {
  title: 'Menu/Utilities/Core',
  component: ActivityCore,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    activity: {
      control: 'select',
      options: ['water', 'steps', 'pills'],
      description: 'The activity it displays'
    },
    count: {
      control: 'number',
      description: 'The count to display'
    },
    percentage: {
      control: { type: 'range', min: 0, max: 100},
      min: 0,
      max: 100,
      description: 'The percentage of the progress',
    },
  },
} satisfies Meta<typeof ActivityCore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Water: Story = {
  args: {
    activity: 'water',
    count: 159,
    percentage: 45
  },
}

export const Steps: Story = {
  args: {
    activity: 'steps',
    count: 159,
    percentage: 45
  },
}

export const Pills: Story = {
  args: {
    activity: 'pills',
    count: 159,
    percentage: 45
  },
}

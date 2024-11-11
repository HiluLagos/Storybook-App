import {Meta, StoryObj} from "@storybook/react";
import Water from "./Meditation.tsx";

const meta = {
  title: 'Icon/Activities/Meditation',
  component: Water,
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
      options: ['medium', 'large'],
      description: 'The size of the meditation icon',
    },
  },
} satisfies Meta<typeof Water>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

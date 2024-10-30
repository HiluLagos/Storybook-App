import {Meta, StoryObj} from "@storybook/react";
import Salad from "./Salad.tsx";

const meta = {
  title: 'Icon/Activities/salad',
  component: Salad,
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
      description: 'The size of the salad icon',
    },
  },
} satisfies Meta<typeof Salad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
  },
}
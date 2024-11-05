import {Meta, StoryObj} from "@storybook/react";
import Accumulator from "./Accumulator";

const meta = {
  title: 'Menu/Utilities/Accumulator',
  component: Accumulator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    background: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'The variant to display'
    },
    count: {
      control: 'number',
      description: 'The count to display'
    },
    isCounter: {
      control: 'boolean',
      description: 'Whether to display the counter'
    }
  },
} satisfies Meta<typeof Accumulator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    background: 'primary',
    count: 159,
    isCounter: true
  },
}

export const Secondary: Story = {
  args: {
    background: 'secondary',
    count: 159,
    isCounter: true
  },
}

export const Tertiary: Story = {
  args: {
    background: 'tertiary',
    count: 159,
    isCounter: true
  },
}

export const NoCounter: Story = {
  args: {
    background: 'primary',
    count: 159,
    isCounter: false
  },
}

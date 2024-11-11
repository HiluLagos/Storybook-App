import {Meta, StoryObj} from "@storybook/react";
import Math from "./Math.tsx";

const meta = {
  title: 'Icon/Utility/Math',
  component: Math,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    operation: {
      control: 'select',
      options: ['sum', 'sub'],
      description: 'The operation to perform'
    }
  },
} satisfies Meta<typeof Math>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sum: Story = {
  args: {
    operation: 'sum',
  },
}

export const Subtract: Story = {
  args: {
    operation: 'sub',
  },
}

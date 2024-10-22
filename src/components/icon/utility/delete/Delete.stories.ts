import {Meta, StoryObj} from "@storybook/react";
import Delete from "./Delete";

const meta = {
  title: 'Icon/Utility/delete',
  component: Delete,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    fill: {
      control: 'select',
      options: ['outlined', 'solid'],
      description: 'The fill of the delete icon'
    }
  },
} satisfies Meta<typeof Delete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    fill: 'outlined',
  },
}

export const Solid: Story = {
  args: {
    fill: 'solid',
  },
}

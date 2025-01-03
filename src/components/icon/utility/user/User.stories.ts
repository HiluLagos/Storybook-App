import {Meta, StoryObj} from "@storybook/react";
import User from "./User.tsx";

const meta = {
  title: 'Icon/Utility/User',
  component: User,
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
      options: ['extraSmall', 'small'],
      description: 'The size of the user icon'
    }
  },
} satisfies Meta<typeof User>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraSmall: Story = {
  args: {
    size: 'extraSmall',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

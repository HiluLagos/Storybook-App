import {Meta, StoryObj} from "@storybook/react";
import Arrow from "./Arrow.tsx";

const meta = {
  title: 'Icon/Utility/arrow',
  component: Arrow,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    orientation: {
      control: 'select',
      options: ['left', 'up', 'right', 'down'],
      description: 'The direction the arrow is pointing'
    },
    onToggleAction: {
      action: 'toggled',
      description: 'The action to perform when the arrow is toggled'
    },
  },
} satisfies Meta<typeof Arrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    orientation: 'left',
    onToggleAction: () => {},
  },
}

export const Up: Story = {
  args: {
    orientation: 'up',
    onToggleAction: () => {},
  },
}

export const Right: Story = {
  args: {
    orientation: 'right',
    onToggleAction: () => {},
  },
}

export const Down: Story = {
  args: {
    orientation: 'down',
    onToggleAction: () => {},
  },
}

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
    state: {
      control: 'select',
      options: ['default', 'pressed'],
      description: 'The state of the arrow'
    },
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

export const LeftDefault: Story = {
  args: {
    state: 'default',
    orientation: 'left',
    onToggleAction: () => {},
  },
}

export const LeftPressed: Story = {
  args: {
    state: 'pressed',
    orientation: 'left',
    onToggleAction: () => {},
  },
}

export const UpDefault: Story = {
  args: {
    state: 'default',
    orientation: 'up',
    onToggleAction: () => {},
  },
}

export const UpPressed: Story = {
  args: {
    state: 'pressed',
    orientation: 'up',
    onToggleAction: () => {},
  },
}

export const RightDefault: Story = {
  args: {
    state: 'default',
    orientation: 'right',
    onToggleAction: () => {},
  },
}

export const RightPressed: Story = {
  args: {
    state: 'pressed',
    orientation: 'right',
    onToggleAction: () => {},
  },
}

export const DownDefault: Story = {
  args: {
    state: 'default',
    orientation: 'down',
    onToggleAction: () => {},
  },
}

export const DownPressed: Story = {
  args: {
    state: 'pressed',
    orientation: 'down',
    onToggleAction: () => {},
  },
}

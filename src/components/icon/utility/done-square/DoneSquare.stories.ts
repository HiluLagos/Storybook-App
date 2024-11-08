import {Meta, StoryObj} from "@storybook/react";
import DoneSquare from "./DoneSquare.tsx";

const meta = {
  title: 'Icon/Utility/Done Square',
  component: DoneSquare,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    done: {
      control: 'boolean',
      description: 'Whether the square is done or not'
    }
  },
} satisfies Meta<typeof DoneSquare>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotDone: Story = {
  args: {
    done: false,
  },
}

export const Done: Story = {
  args: {
    done: true,
  },
}

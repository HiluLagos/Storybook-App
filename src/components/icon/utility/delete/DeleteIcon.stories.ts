import {Meta, StoryObj} from "@storybook/react";
import DeleteIcon from "./DeleteIcon.tsx";

const meta = {
  title: 'Icon/Utility/Delete',
  component: DeleteIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
} satisfies Meta<typeof DeleteIcon>;

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

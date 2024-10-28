import {Meta, StoryObj} from "@storybook/react";
import Circular from "./Circular.tsx";

const meta = {
  title: 'Progress/circular',
  component: Circular,
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
      options: ['medium', 'small', 'extraSmall'],
      description: 'The size of the comment icon',
    },
    percentage: {
      control: 'number',
      description: 'The percentage of the progress',
    }
  },
} satisfies Meta<typeof Circular>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    size: 'medium',
    percentage: 45,
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    percentage: 67,
  },
}

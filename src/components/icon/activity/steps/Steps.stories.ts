import {Meta, StoryObj} from "@storybook/react";
import Steps from "./Steps.tsx";

const meta = {
  title: 'Icon/Activities/steps',
  component: Steps,
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
      description: 'The size of the steps icon',
    },
  },
} satisfies Meta<typeof Steps>;

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

import {Meta, StoryObj} from "@storybook/react";
import Bar from "./Bar.tsx";

const meta = {
  title: 'Progress/Bar',
  component: Bar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    percentage: {
      control: { type: 'range', min: 0, max: 100},
      min: 0,
      max: 100,
      description: 'The percentage of the progress',
    },
    text: {
      control: 'text',
      description: 'The text to display',
    }
  },
} satisfies Meta<typeof Bar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percentage: 45,
    text: "Sample Text",
  },
}

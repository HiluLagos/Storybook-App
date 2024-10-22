import {Meta, StoryObj} from "@storybook/react";
import Lock from "./Lock";

const meta = {
  title: 'Icon/Utility/lock',
  component: Lock,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
} satisfies Meta<typeof Lock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}

export const Pressed: Story = {

}

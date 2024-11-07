import {Meta, StoryObj} from "@storybook/react";
import Confetti from "./Confetti.tsx";

const meta = {
  title: 'Icon/PopUps/Confetti',
  component: Confetti,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  argTypes: {
    size: {
      control: 'select',
      options: ['medium', 'large'],
      description: 'The size of the confetti icon',
    },
  },
} satisfies Meta<typeof Confetti>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Medium: Story = {
  args: {
    size: 'medium',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'large',
  },
}

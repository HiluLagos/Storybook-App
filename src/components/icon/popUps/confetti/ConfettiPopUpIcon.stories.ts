import {Meta, StoryObj} from "@storybook/react";
import ConfettiDisplay from "./ConfettiDisplay.tsx";

const meta = {
  title: 'Icon/PopUps/Confetti',
  component: ConfettiDisplay,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ConfettiDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {}

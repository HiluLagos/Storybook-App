import {Meta, StoryObj} from "@storybook/react";
import AddLogPopUpIcon from "./AddLogPopUpIcon.tsx";

const meta = {
  title: 'Icon/PopUps/Add Log',
  component: AddLogPopUpIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AddLogPopUpIcon>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {}

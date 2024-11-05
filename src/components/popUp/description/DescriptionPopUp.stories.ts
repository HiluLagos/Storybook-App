import {Meta, StoryObj} from "@storybook/react";
import DescriptionPopUp from "./DescriptionPopUp.tsx";

const meta = {
  title: 'PopUp/Description',
  component: DescriptionPopUp,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the task',
    },
    description: {
      control: 'text',
      description: 'The description of the task',
    },
  }
} satisfies Meta<typeof DescriptionPopUp>;

export default meta;
type Story = StoryObj<typeof meta>;


export const InfoComplete: Story = {args: {
  intent: "default",
  title: "Title of tasks",
  description: "Description of tasks",
  variant: "info"}};

export const InfoIncomplete: Story = {args: {
  intent: "incomplete",
  title: "Title of tasks",
  description: "Description of tasks",
  variant: "info"}};

export const QrComplete: Story = {args: {
    intent: "default",
    title: "Title of tasks",
    description: "Description of tasks",
    variant: "recipe"}};

export const QrIncomplete: Story = {args: {
    intent: "incomplete",
    title: "Title of tasks",
    description: "Description of tasks",
    variant: "recipe"}};
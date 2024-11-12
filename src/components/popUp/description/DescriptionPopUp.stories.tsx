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
      descTitle: {
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


export const InfoComplete: Story = {
    render: (args) => <div className={"w-[500px] h-[500px]"}><DescriptionPopUp {...args} /></div>,
    args: {
        intent: "incomplete",
        description: "Description of tasks",
        variant: "info",
        descTitle: "Task Title",
        closePopUp: () => {},
        updateIntent: () => {}

    }
};

export const InfoIncomplete: Story = {
    render: (args) => <div className={"w-[500px] h-[500px]"}><DescriptionPopUp {...args} /></div>,
    args: {
        intent: "incomplete",
        description: "Description of tasks",
        variant: "info",
        descTitle: "Task Title",
        closePopUp: () => {},
        updateIntent: () => {}
    }
};

export const QrComplete: Story = {
    render: (args) => <div className={"w-[500px] h-[500px]"}><DescriptionPopUp {...args} /></div>,
    args: {
        intent: "complete",
        description: "Description of tasks",
        variant: "recipe",
        descTitle: "Task Title",
        closePopUp: () => {},
        updateIntent: () => {}
    }
};

export const QrIncomplete: Story = {
    render: (args) => <div className={"w-[500px] h-[500px]"}><DescriptionPopUp {...args} /></div>,
    args: {
        intent: "incomplete",
        description: "Description of tasks",
        variant: "recipe",
        descTitle: "Task Title",
        closePopUp: () => {},
        updateIntent: () => {}
    }
};
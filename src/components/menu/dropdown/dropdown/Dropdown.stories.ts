// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import {Dropdown} from "./Dropdown.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: 'Menu/dropdown/Dropdown',
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    dropped: { control: 'boolean' },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    dropped: false,
    children: 'Dropdown content',
  },
};

export const Opened: Story = {
  args: {
    dropped: true,
    children: 'Dropdown content',
  },
};

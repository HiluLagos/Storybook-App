import {Meta, StoryObj} from "@storybook/react";
import Tag from "./Tag.tsx";

const meta = {
  title: 'Tag/tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['green', 'yellow', 'orange', 'lightBlue'],
    },
    children: {
      control: 'text',
      description: 'The text to display in the tag',
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Green: Story = {
  args: {
    state: 'green',
    children: 'Tag',
  }
};

export const Yellow: Story = {
  args: {
    state: 'yellow',
    children: 'Tag',
  }
};

export const Orange: Story = {
  args: {
    state: 'orange',
    children: 'Tag',
  }
};

export const LightBlue: Story = {
  args: {
    state: 'lightBlue',
    children: 'Tag',
  }
};

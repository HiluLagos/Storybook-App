import {Meta, StoryObj} from "@storybook/react";
import Comment from "./Comment.tsx";

const meta = {
  title: 'Icon/Tech/comment',
  component: Comment,
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
      options: ['medium', 'small', 'extraSmall'],
      description: 'The size of the comment icon',
    },
    intent: {
      control: 'select',
      options: ['selected', 'unselected'],
      description: 'The fill of the comment icon',
    },
  },
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MediumOutlined: Story = {
  args: {
    size: 'medium',
    intent: 'unselected',
  },
}

export const MediumSolid: Story = {
  args: {
    size: 'medium',
    intent: 'selected',
  },
}
export const SmallOutlined: Story = {
  args: {
    size: 'small',
    intent: 'unselected',
  },
}

export const SmallSolid: Story = {
  args: {
    size: 'small',
    intent: 'selected',
  },
}

export const ExtraSmallOutlined: Story = {
  args: {
    intent: 'unselected',
    size: 'extraSmall',

  },
}

export const ExtraSmallSolid: Story = {
  args: {
    size: 'extraSmall',
    intent: 'selected',
  },
}

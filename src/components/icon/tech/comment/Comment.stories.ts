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
    fill: {
      control: 'select',
      options: ['outlined', 'solid'],
      description: 'The fill of the comment icon',
    },
  },
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MediumOutlined: Story = {
  args: {
    size: 'medium',
    fill: 'outlined',
  },
}

export const MediumSolid: Story = {
  args: {
    size: 'medium',
    fill: 'solid',
  },
}
export const SmallOutlined: Story = {
  args: {
    size: 'small',
    fill: 'outlined',
  },
}

export const SmallSolid: Story = {
  args: {
    size: 'small',
    fill: 'solid',
  },
}

export const ExtraSmallOutlined: Story = {
  args: {
    fill: 'outlined',
    size: 'extraSmall',

  },
}

export const ExtraSmallSolid: Story = {
  args: {
    size: 'extraSmall',
    fill: 'solid',
  },
}

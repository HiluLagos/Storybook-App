import type { Meta, StoryObj } from '@storybook/react';
import Comment from "./Comment.tsx";

const meta = {
    title: 'Cards/HelpTalks/Comment',
    component: Comment,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Comment>;

export default meta;

type Story = StoryObj<typeof Comment>;

export const Default: Story = {
    args: {
        comment: "Lorem ipsum dolor sit amet consectetur adipiscing elit donec eros phasellus taciti, ad cras mi orci nullam",
        author: "Doctor Geller"
    }
};

export const Expanded: Story = {
    args: {
        comment: "Lorem ipsum dolor sit amet consectetur adipiscing elit donec eros phasellus taciti, ad cras mi orci nullam",
        author: "Doctor House",
        expanded: true
    }
};

export const ShortComment: Story = {
    args: {
        comment: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        author: "Doctor Strange"
    }
}
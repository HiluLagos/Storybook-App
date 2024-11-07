import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag.tsx';

const meta = {
    title: 'Button/Utility/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        intent: {
            control: 'select',
            options: ['unselected', 'selected'],
            description: 'The way the component is displayed'
        },
        size: {
            control: 'select',
            options: ['small', 'medium'],
            description: 'The size of the component'
        },
    },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unselected: Story = {
    args: {
        intent: "unselected",
        size: "medium",
        value: "Tag",
    },
};

export const Selected: Story = {
    args: {
        intent: "selected",
        size: "medium",
        value: "Tag",
    },
};

export const Small: Story = {
    args: {
        intent: "unselected",
        size: "small",
        value: "Tag",
    },
};

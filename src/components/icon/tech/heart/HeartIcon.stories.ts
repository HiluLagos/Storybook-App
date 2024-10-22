import type { Meta, StoryObj } from '@storybook/react';
import {HeartIcon} from "./HeartIcon.tsx";

const meta = {
    title: 'Icon/Tech/Heart',
    component: HeartIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HeartIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Selected: Story = {
    args: {
        size: "medium",
        intent: "selected",
    },
};

export const Unselected: Story = {
    args: {
        size: "medium",
        intent: "unselected",
    },
};
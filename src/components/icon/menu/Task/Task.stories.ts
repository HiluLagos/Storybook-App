import TaskIcon from "./Task.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Icon/Menu/Task',
    component: TaskIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['large', 'medium'],
            description: 'The size of the task icon',
        },
    }
} satisfies Meta<typeof TaskIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'large',
    },
}

export const Medium: Story = {
    args: {
        size: 'medium',
    },
}
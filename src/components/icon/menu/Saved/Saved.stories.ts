import Saved from "./Saved.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta = {
    title: 'Saved Icon',
    component: Saved,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['large', 'medium'],
            description: 'The size of the log icon',
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Saved>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'large',
    },
}

export const Small: Story = {
    args: {
        size: 'medium',
    },
}
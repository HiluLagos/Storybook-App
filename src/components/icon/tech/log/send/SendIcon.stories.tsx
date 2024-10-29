import type { Meta, StoryObj } from '@storybook/react';
import SendIcon from "./SendIcon.tsx";

const meta = {
    title: 'Icon/Tech/Log/Send',
    component: SendIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SendIcon>;

export default meta;

type Story = StoryObj<typeof SendIcon>;

export const Default: Story = {
    args: {
        pressed: false,
    },
};

export const Pressed: Story = {
    render: () => (
        <div className="bg-primary-900">
            <SendIcon pressed={true} />
        </div>
    )
};
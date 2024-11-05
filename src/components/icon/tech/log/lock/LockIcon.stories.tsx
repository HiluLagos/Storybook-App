import type { Meta, StoryObj } from '@storybook/react';
import LockIcon from "./LockIcon.tsx";

const meta = {
    title: 'Icon/Tech/Log/Lock',
    component: LockIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LockIcon>;

export default meta;

type Story = StoryObj<typeof LockIcon>;

export const Default: Story = {
    args: {
        pressed: false,
    },
};

export const Pressed: Story = {
    render: () => (
        <div className="bg-primary-900">
            <LockIcon pressed={true}/>
        </div>
    )
};
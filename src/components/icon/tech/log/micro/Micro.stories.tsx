import type { Meta, StoryObj } from '@storybook/react';
import Micro from "./Micro.tsx";

const meta = {
    title: 'Icon/Tech/Log/Microphone',
    component: Micro,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Micro>;

export default meta;

type Story = StoryObj<typeof Micro>;

export const Default: Story = {
    args: {
        pressed: false,
    },
};

export const Pressed: Story = {
    render: () => (
        <div className="bg-primary-900">
            <Micro pressed={true}/>
        </div>
    )
};
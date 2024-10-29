import type { Meta, StoryObj } from '@storybook/react';
import AiIcon from "./AiIcon.tsx";

const meta = {
    title: 'Icon/Tech/Log/AI',
    component: AiIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AiIcon>;

export default meta;

type Story = StoryObj<typeof AiIcon>;

export const Default: Story = {
    args: {
        pressed: false,
    },
};

export const Pressed: Story = {
    render: () => (
        <div className="bg-primary-900">
            <AiIcon pressed={true}/>
        </div>
    )
};
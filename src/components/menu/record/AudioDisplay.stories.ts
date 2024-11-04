import type { Meta, StoryObj } from '@storybook/react';
import AudioDisplay from "./AudioDisplay.tsx";

const meta = {
    title: 'Menu/Record/AudioDisplay',
    component: AudioDisplay,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AudioDisplay>;

export default meta;

type Story = StoryObj<typeof AudioDisplay>;

export const Default: Story = {
    args: {
        isRecording: false
    }
};

export const Recording: Story = {
    args: {
        isRecording: true
    }
};
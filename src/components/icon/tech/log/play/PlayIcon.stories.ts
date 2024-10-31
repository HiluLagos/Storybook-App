import type { Meta, StoryObj } from '@storybook/react';
import PlayIcon from "./PlayIcon.tsx";

const meta = {
    title: 'Icon/Tech/Log/Play',
    component: PlayIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PlayIcon>;

export default meta;

type Story = StoryObj<typeof PlayIcon>;

export const Default: Story = {
};

export const PausedIcon: Story = {
    args: {
        paused: false
    }
};

export const HelpTalkPlayIcon: Story = {
    args: {
        size: "large"
    }
}
import type { Meta, StoryObj } from '@storybook/react';
import SoundWaveIcon from "./StaticSoundWaveIcon.tsx";

const meta = {
    title: 'Icon/Tech/Log/Wave',
    component: SoundWaveIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SoundWaveIcon>;

export default meta;

type Story = StoryObj<typeof SoundWaveIcon>;

export const ShortWave: Story = {
    args:{
        wavesNumber: 6,
    }
};

export const LongWave: Story = {
    args:{
        wavesNumber: 12,
    }
}
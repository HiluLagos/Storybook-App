import type { Meta, StoryObj } from '@storybook/react';
import Interactions from "./Interactions.tsx";

const meta = {
    title: 'Button/Help Talks/User interactions',
    component: Interactions,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Interactions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

}

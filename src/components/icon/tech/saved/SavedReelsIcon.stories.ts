import type { Meta, StoryObj } from '@storybook/react';
import {SavedReelsIcon} from "./SavedReelsIcon.tsx";

const meta = {
    title: 'Icon/Tech/SavedReels',
    component: SavedReelsIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Size of the icon',
        },
        pressed: {
            control: 'boolean',
            description: 'Intent of the icon',
        }
    }
} satisfies Meta<typeof SavedReelsIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const Selected: Story = {
    args: {
        pressed: true
    },
};

export const Small: Story = {
    args: {
        size: "small",
        pressed: false
    }
};

export const SmallSelected: Story = {
    args: {
        size: "small",
        pressed: true
    }
};

export const Large: Story = {
    args: {
        size: "large",
    }
};

export const LargeSelected: Story = {
    args: {
        size: "large",
        pressed: true
    }
};
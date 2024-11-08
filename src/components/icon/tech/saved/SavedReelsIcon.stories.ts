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
        intent: {
            control: 'select',
            options: ['selected', 'unselected'],
            description: 'Intent of the icon',
        }
    }
} satisfies Meta<typeof SavedReelsIcon>;

export default meta;

export const Default: Story = {
    args: {
        size: "medium",
        intent: "unselected",
    },
};

type Story = StoryObj<typeof meta>;

export const ExtraSmallUnselected: Story = {
    args: {
        size: "extraSmall",
        intent: "unselected"
    }
};

export const ExtraSmallSelected: Story = {
    args: {
        size: "extraSmall",
        intent: "selected"
    }
};

export const SmallUnselected: Story = {
    args: {
        size: "small",
        intent: "unselected"
    },
};

export const SmallSelected: Story = {
    args: {
        size: "small",
        intent: "selected"
    },
};

export const MediumUnselected: Story = {
    args: {
        intent: "unselected"
    }
};

export const MediumSelected: Story = {
    args: {
        intent: "selected"
    }
};


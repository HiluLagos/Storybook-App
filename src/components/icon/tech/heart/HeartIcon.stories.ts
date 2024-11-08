import type { Meta, StoryObj } from '@storybook/react';
import {HeartIcon} from "./HeartIcon.tsx";

const meta = {
    title: 'Icon/Tech/Heart',
    component: HeartIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium'],
            description: 'Size of the icon',
        },
        intent: {
            control: 'select',
            options: ['selected', 'unselected'],
            description: 'Intent of the icon',
        }
    }
} satisfies Meta<typeof HeartIcon>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        size: "small",
        intent: "unselected",
    }
};

export const ExtraSmallUnselected: Story = {
    args: {
        size: "extraSmall",
        intent: "unselected",
    },
};

export const ExtraSmallSelected: Story = {
    args: {
        size: "extraSmall",
        intent: "selected",
    },
};

export const Small: Story = {
    args: {
        size: "small",
        intent: "unselected",
    }
};

export const SmallSelected: Story = {
    args: {
        size: "small",
        intent: "selected",
    }
};

export const MediumUnselected: Story = {
    args: {
        size: "medium",
        intent: "unselected",
    }
};

export const MediumSelected: Story = {
    args: {
        size: "medium",
        intent: "selected",
    }
};
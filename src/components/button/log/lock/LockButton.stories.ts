import LockButton from "./LockButton.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Button/Log/LockButton',
    component: LockButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof LockButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
    args: {
        pressed: false,
    }
};

export const PressedButton: Story = {
    args: {
        pressed: true,
    }
};


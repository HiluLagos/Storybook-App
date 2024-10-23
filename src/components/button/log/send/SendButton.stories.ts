import SendButton from "./SendButton.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Button/Log/SendButton',
    component: SendButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof SendButton>;

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


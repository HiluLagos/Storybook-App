import AIButton from "./AIButton.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Button/Log/AI/AIButton',
    component: AIButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AIButton>;

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


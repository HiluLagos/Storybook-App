import AIButton from "./AIButton.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Button/Log/AIButton',
    component: AIButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AIButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        pressed: false,
    }
};

export const Pressed: Story = {
    args: {
        pressed: true,
    }
};


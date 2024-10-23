import RecordButton from "./RecordButton.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Button/Log/RecordButton',
    component: RecordButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof RecordButton>;

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


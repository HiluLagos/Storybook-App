import {Meta, StoryObj} from "@storybook/react";
import Text from "./Text.tsx";
const meta = {
    title: 'Button/DayView/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        state: {
            control: 'radio',
            options: ['default', 'selected']
        },
        text: {
            control: 'text'
        }
    }
} satisfies Meta<typeof Text>


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        state: 'default',
        text: 'Text'
    }
};

export const Category: Story = {
    args: {
        state: 'default',
        text: 'Category'
    }
}

export const Selected: Story = {
    args: {
        state: 'selected',
        text: 'Time'
    }
}
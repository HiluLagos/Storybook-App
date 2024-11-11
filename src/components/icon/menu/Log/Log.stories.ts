import LogIcon from "./Log.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta = {
    title: 'Icon/Menu/Log',
    component: LogIcon,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['large', 'medium'],
            description: 'The size of the log icon',
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LogIcon>;

export default meta;
 type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'large',
    },
}

export const Medium: Story = {
    args: {
        size: 'medium',
    },
}
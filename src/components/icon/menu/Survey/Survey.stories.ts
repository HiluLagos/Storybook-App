import Survey from "./Survey.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta = {
    title: 'Survey Icon',
    component: Survey,
    argTypes: {
        size: {
            control: 'select',
            options: ['large', 'medium'],
            description: 'The size of the log icon',
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Survey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'large',
    },
}

export const Small: Story = {
    args: {
        size: 'medium',
    },
}
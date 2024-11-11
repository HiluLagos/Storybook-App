import Caption from "./Caption.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Input/Reels/Caption',
    component: Caption,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'The title to display in the description',
        },
        description: {
            control: 'text',
            description: 'The description to display in the description',
        }
    }
} satisfies Meta<typeof Caption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'title',
        description: 'description',
    },
}
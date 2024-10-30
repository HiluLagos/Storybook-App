import Description from "./Description.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Input/Reels/Description',
    component: Description,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        tag: {
            control: 'text',
            description: 'The tag to display in the description',
        }
    }
} satisfies Meta<typeof Description>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tag: 'Description',
    },
}
import {Meta, StoryObj} from "@storybook/react";
import Summary from "./Summary";

const meta = {
    title: 'Menu/Summary/Frame',
    component: Summary,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        intent: {
            control: 'select',
            options: ['pills', 'acts', 'meditation', 'sad', 'happy'],
            description: 'The intent of the summary',
        },
        title: {
            control: 'text',
            description: 'The title of the summary',
        },
        description: {
            control: 'text',
            description: 'The description of the summary',
        },
        observation: {
            control: 'text',
            description: 'The recorded observation of the summary',
        },
    },
} satisfies Meta<typeof Summary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        intent: 'pills',
        title: 'Sample Title',
        description: 'This is a sample description.',
        observation: 'This is a sample observation.',
    },
};
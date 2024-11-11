import { Meta, StoryObj } from "@storybook/react";
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

export const Pills: Story = {
    args: {
        intent: 'pills',
        description: 'This is a sample description for pills.',
        observation: 'This is a sample observation for pills.',
    },
};

export const Acts: Story = {
    args: {
        intent: 'acts',
        description: 'This is a sample description for acts.',
        observation: 'This is a sample observation for acts.',
    },
};

export const Meditation: Story = {
    args: {
        intent: 'meditation',
        description: 'This is a sample description for meditation.',
        observation: 'This is a sample observation for meditation.',
    },
};

export const Sad: Story = {
    args: {
        intent: 'sad',
        description: 'This is a sample description for sad.',
        observation: 'This is a sample observation for sad.',
    },
};

export const Happy: Story = {
    args: {
        intent: 'happy',
        description: 'This is a sample description for happy.',
        observation: 'This is a sample observation for happy.',
    },
};
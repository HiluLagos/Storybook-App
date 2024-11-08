import {Meta, StoryObj} from "@storybook/react";
import HelpTalksIcon from "./HelpTalks.tsx";

const meta = {
    title: 'Icon/Nav/Help Talks',
    component: HelpTalksIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        state: {
            control: 'select',
            options: ['default', 'selected'],
            description: 'The way the component is displayed'
        },
    },
} satisfies Meta<typeof HelpTalksIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        state: 'default'
    },
};

export const Selected: Story = {
    args: {
        state: 'selected'
    },
};

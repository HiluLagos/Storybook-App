import {Meta, StoryObj} from "@storybook/react";
import TalksComponent from "./Talks.tsx";

const meta = {
    title: 'Button/NavBar/talks',
    component: TalksComponent,
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
} satisfies Meta<typeof TalksComponent>;

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

import ActivitiesIcon from "./Activities.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Icon/Menu/Activities',
    component: ActivitiesIcon,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
        control: 'select',
        options: ['large', 'medium'],
        description: 'The size of the activities icon',
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ActivitiesIcon>;

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
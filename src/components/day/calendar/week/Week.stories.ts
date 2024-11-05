import {Meta, StoryObj} from "@storybook/react";
import Week from "./Week.tsx";

const meta = {
    title: 'Day/Calendar/Week',
    component: Week,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        events: {
            control: 'object',
            description: "A list of numbers with the days that have activities"
        }
    }
} satisfies Meta<typeof Week>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        events: [1, 5, 8, 12, 19]
    }
};
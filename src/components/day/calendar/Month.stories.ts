import Month from "./Month.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Day/Calendar/Month',
    component: Month,
    tags: ['autodocs'],
    argTypes: {
        events: {
            control: 'object',
            description: "A list of numbers with the days that have activities"
        }
    }
} satisfies Meta<typeof Month>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        events: [1, 2, 19]
    }
};
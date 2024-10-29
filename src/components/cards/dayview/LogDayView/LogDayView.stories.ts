import {Meta, StoryObj} from "@storybook/react";
import LogDayView from "./LogDayView.tsx";

const meta = {
    title: 'Cards/DayView/LogDayView',
    component: LogDayView,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        tag: {
            control: 'select',
            options: ['missed', 'done', 'info'],
            description: 'The tag of the day view',
        },
        children: {
            control: 'text',
            description: 'The children of the day view',
        },
        header: {
            control: 'text',
            description: 'The header of the day view',
        },
        time:{
            control: 'text',
            description: 'The time of the day view'
        }
    }
} satisfies Meta<typeof LogDayView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Activity: Story = {
    args: {
        children: "Today you have to do the following activities: \n - Go to the gym \n - Study for the exam",
        header: "Activity",
        tag: "info",
        time: "10:00"
    },
}
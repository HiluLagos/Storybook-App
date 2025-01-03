import {Meta, StoryObj} from "@storybook/react";
import TextDayView from "./TextDayView.tsx";

const meta = {
    title: 'Cards/DayView/Text',
    component: TextDayView,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['activity', 'task'],
            description: 'The type of the day view',
        },
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
} satisfies Meta<typeof TextDayView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Activity: Story = {
    args: {
        type: 'activity',
        children: "Today you have to do the following activities: \n - Go to the gym \n - Study for the exam",
        header: "Activity",
        tag: "info",
        time: "10:00"
    },
}
import {Meta, StoryObj} from "@storybook/react";
import LogDayView from "./LogDayView.tsx";

const meta = {
    title: 'Cards/DayView/Log',
    component: LogDayView,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        header: {
            control: 'text',
            description: 'The header of the day view',
        },
        time:{
            control: 'text',
            description: 'The time of the day view'
        },
        audioLength:{
            control: 'text',
            description: 'The length of the audio'
        }
    }
} satisfies Meta<typeof LogDayView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Activity: Story = {
    args: {
        header: "Activity",
        time: "10:00",
        audioLength: "00:30"
    },
}
import {Meta, StoryObj} from "@storybook/react";
import CalendarIcon from "./Calendar.tsx";

const meta = {
    title: 'Icon/NavBar/calendar',
    component: CalendarIcon,
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
} satisfies Meta<typeof CalendarIcon>;

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

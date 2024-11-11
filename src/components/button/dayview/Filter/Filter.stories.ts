import { Meta, StoryObj } from "@storybook/react";
import Filter from "./Filter.tsx";

const meta = {
    title: 'Button/DayView/Filter',
    component: Filter,  // Add this line
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

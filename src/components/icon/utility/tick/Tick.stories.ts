import {Tick} from "./Tick.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Icon/Utility/Tick',
    component: Tick,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tick>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ticked: Story = {
    args: {
        state: "tick",
    },
};

export const unticked: Story = {
    args: {
        state: "untick",
    },
};
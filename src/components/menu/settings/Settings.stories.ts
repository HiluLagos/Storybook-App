import Settings from "./Settings.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta = {
    title: 'Menu/Settings',
    component: Settings,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Settings>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
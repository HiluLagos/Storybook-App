import { Meta, StoryObj } from "@storybook/react";
import NavBar from "./NavBar.tsx";

const meta: Meta = {
    title: 'Menu/NavBar',
    component: NavBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const nothingSelected: Story = {
};

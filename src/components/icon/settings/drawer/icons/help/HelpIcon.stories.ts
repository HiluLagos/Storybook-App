import {Meta, StoryObj} from "@storybook/react";
import HelpIcon from "./HelpIcon.tsx";

const meta = {
    title: 'Icon/Settings/HelpIcon',
    component: HelpIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

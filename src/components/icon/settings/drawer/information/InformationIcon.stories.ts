import {Meta, StoryObj} from "@storybook/react";
import InformationIcon from "./InformationIcon.tsx";

const meta = {
    title: 'Icon/Settings/Information',
    component: InformationIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

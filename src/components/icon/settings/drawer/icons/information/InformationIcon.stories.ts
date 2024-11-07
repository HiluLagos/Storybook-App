import {Meta, StoryObj} from "@storybook/react";
import InformationIcon from "../information/InformationIcon.tsx";

const meta = {
    title: 'Icon/Settings/information',
    component: InformationIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

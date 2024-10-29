//DrawerHeader stories
import {Meta, StoryObj} from "@storybook/react";
import DrawerHeader from "./DrawerHeader.tsx";

const meta = {
    title: 'Button/Settings/DrawerHeader',
    component: DrawerHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        clientName: {
            control: 'text',
            description: 'The name of the client',
            default: "Client"
        },
        doctorName: {
            control: 'text',
            description: 'The name of the doctor',
            default: "Doctor"
        },
    }
} satisfies Meta<typeof DrawerHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        clientName: "Client",
        doctorName: "Doctor"
    },
};

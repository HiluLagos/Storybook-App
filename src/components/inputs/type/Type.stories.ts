import Type from './Type.tsx';
import {Meta, StoryObj} from "@storybook/react";
import HomeIcon from "../../icon/nav/home/HomeIcon.tsx";

const meta = {
    title: 'input/type',
    component: Type,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    }
} satisfies Meta<typeof HomeIcon>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
}
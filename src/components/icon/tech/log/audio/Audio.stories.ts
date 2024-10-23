// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import AudioIcon from "../SendIcon.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Icon/Tech/Log/Audio',
    component: AudioIcon,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
    },
} satisfies Meta<typeof AudioIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        pressed: false,
    }
};

export const Pressed: Story = {
    args: {
        pressed: true
    },
};

import EmotionalSlider from "./EmotionalSliderSt.tsx";
import {StoryObj} from "@storybook/react";

const meta = {
    title: 'Progress/Emotional Slider',
    component: EmotionalSlider,
    parameters: {
        layout: 'centered',
    },
    tags: [ 'autodocs' ],
    argTypes: {
        state: {
            control: 'select',
            options: [ 'default', 'happy', 'neutral', 'sad' ],
            description: 'The state of the slider',
        },
    },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        state: 'default',
    },
};

export const Happy: Story = {
    args: {
        state: 'happy',
    },
};

export const Neutral: Story = {
    args: {
        state: 'neutral',
    },
};

export const Sad: Story = {
    args: {
        state: 'sad',
    },
};
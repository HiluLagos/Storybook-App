import EmotionalSlider from "./EmotionalSliderSt.tsx";
import {StoryObj} from "@storybook/react";

const meta = {
    title: 'Progress/Emotional AI',
    component: EmotionalSlider,
    parameters: {
        layout: 'centered',
    },
    tags: [ 'autodocs' ],

}

export default meta;
type Story = StoryObj<typeof meta>;

export const Happy: Story = {
    args: {
        selectedState: 'happy',
    },
};

export const Neutral: Story = {
    args: {
        selectedState: 'neutral',
    },
};

export const Sad: Story = {
    args: {
        selectedState: 'sad',
    },
};
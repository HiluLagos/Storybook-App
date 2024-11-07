import type { Meta, StoryObj } from '@storybook/react';
import Comments from "./Comments.tsx";

const meta = {
    title: 'Menu/HelpTalks/Comments',
    component: Comments,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Comments>;

export default meta;

const comments = [
    {
        username: "Doctor Strange",
        text: "Great tips on managing stress! Really needed this today. Thanks!",
    },
    {
        username: "Richard Simmons",
        text: "hahahaha",
    },
    {
        username: "Doctor Doom",
        text: "Could you do a video about improving gut health next?",
    },
    {
        username: "Kobe Bryant",
        text: "Taking a few deep breaths really does make a difference. Thanks for the reminder!",
    },
    {
        username: "DoctorGeller",
        text: "Remember to take your pills if you don't want to        \t",
    },
    {
        username: "Doctor House",
        text: "This is perfect timing! I’ve been so stressed lately, and these tips will help a lot.",
    },
    {
        username: "NutritionNerd",
        text: "The section on nutrition was super informative. Learned a lot about healthy fats!",
    },
    {
        username: "Jules",
        text: "Always love the positivity in these videos!",
    },
    {
        username: "Hannah",
        text: "Remember to take your vitamins too!",
    },
];

type Story = StoryObj<typeof Comments>;

export const Default: Story = {
    args: {
        comments
    }
};

export const Empty: Story = {
    args: {
        comments: []
    }
};

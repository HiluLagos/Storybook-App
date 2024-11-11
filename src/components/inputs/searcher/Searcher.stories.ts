import Searcher from "./Searcher.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta = {
    title: 'Input/Searcher',
    component: Searcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Searcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
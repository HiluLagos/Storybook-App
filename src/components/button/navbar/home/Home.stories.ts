import {Meta, StoryObj} from "@storybook/react";
import HomeComponent from "./Home.tsx"

const meta = {
    title: 'Button/NavBar/home',
    component: HomeComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        state: {
            control: 'select',
            options: ['default', 'selected'],
            description: 'The way the component is displayed'
        },
    },
} satisfies Meta<typeof HomeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        state: 'default'
    },
};

export const Selected: Story = {
    args: {
        state: 'selected'
    },
};

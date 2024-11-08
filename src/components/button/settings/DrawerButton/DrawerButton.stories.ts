//DrawerHeader stories
import {Meta, StoryObj} from "@storybook/react";
import DrawerButton from "./DrawerButton.tsx";

const meta = {
    title: 'Button/Settings/Drawer',
    component: DrawerButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['logout', 'helpCenter', 'information'],
            description: 'The variant of the drawer button',
        }
    }
} satisfies Meta<typeof DrawerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'logout'
    },
};

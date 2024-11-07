import {Login} from "./Login.tsx";
import {Meta, StoryObj} from "@storybook/react";
import IconProvider from "../../../icon/IconProvider.tsx";

const meta = {
    title: 'Input/Login/Login',
    component: Login,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['default', 'error', 'disabled'],
            description: 'The color of the login input',
        },
    }
} satisfies Meta<typeof Login>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Email: Story = {
    args: {
        color: 'default',
        placeholder: 'Email',
        variant: 'mail',
        icon: IconProvider,
    },
}

export const Password: Story = {
    args: {
        color: 'default',
        placeholder: 'Password',
        variant: 'lock',
        icon: IconProvider,
    },
}

export const ErrorMail: Story = {
    args: {
        color: 'error',
        placeholder: 'Error',
        variant: 'mail',
        icon: IconProvider,
    },
}

export const ErrorPassword: Story = {
    args: {
        color: 'error',
        placeholder: 'Error',
        variant: 'lock',
        icon: IconProvider,
    },
}

export const DisabledMail: Story = {
    args: {
        color: 'disabled',
        placeholder: 'Disabled',
        variant: 'mail',
        icon: IconProvider,
    },
}

export const DisabledPassword: Story = {
    args: {
        color: 'disabled',
        placeholder: 'Disabled',
        variant: 'lock',
        icon: IconProvider,
    },
}

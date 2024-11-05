import { Meta, StoryObj } from "@storybook/react";
import NavBarSt from "./NavBarSt.tsx";

const meta: Meta = {
    title: 'Menu/navbar/NavBar',
    component: NavBarSt,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        homeState: {
            control: 'select',
            options: ['default', 'selected'],
            description: 'State of the Home button',
        },
        calendarState: {
            control: 'select',
            options: ['default', 'selected'],
            description: 'State of the Calendar button',
        },
        settingsState: {
            control: 'select',
            options: ['default', 'selected'],
            description: 'State of the Settings button',
        },
        talksState: {
            control: 'select',
            options: ['default', 'selected'],
            description: 'State of the Talks button',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const nothingSelected: Story = {
    args: {
        homeState: 'default',
        calendarState: 'default',
        settingsState: 'default',
        talksState: 'default',
    },
};

export const HomeSelected: Story = {
    args: {
        homeState: 'selected',
        calendarState: 'default',
        settingsState: 'default',
        talksState: 'default',
    },
};

export const TalksSelected: Story = {
    args: {
        homeState: 'default',
        calendarState: 'default',
        settingsState: 'default',
        talksState: 'selected',
    },
};

export const CalendarSelected: Story = {
    args: {
        homeState: 'default',
        calendarState: 'selected',
        settingsState: 'default',
        talksState: 'default',
    },
};

export const SettingsSelected: Story = {
    args: {
        homeState: 'default',
        calendarState: 'default',
        settingsState: 'selected',
        talksState: 'default',
    },
};
import { Meta, StoryObj } from "@storybook/react";
import SettingsIcon from "../../icon/utility/navigation/settings/Settings";
import HomeIcon from "../../icon/utility/navigation/home/HomeIcon";
import TalksIcon from "../../icon/utility/navigation/talks/HelpTalks";
import CalendarIcon from "../../icon/utility/navigation/calendar/Calendar";
import NavComponent from "./NavComponent.tsx";

const iconComponents = {
    Settings: SettingsIcon,
    Home: HomeIcon,
    Talks: TalksIcon,
    Calendar: CalendarIcon,
};

const meta: Meta = {
    title: 'Button/NavBar/NavComponent',
    component: NavComponent, // Default component for the meta
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
        IconComponent: {
            control: 'select',
            options: Object.keys(iconComponents),
            mapping: iconComponents,
            description: 'The icon component to display'
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Settings_D: Story = {
    args: {
        state: 'default',
        label: 'Settings',
        IconComponent: SettingsIcon,
    },
};

export const Settings_S: Story = {
    args: {
        state: 'selected',
        label: 'Settings',
        IconComponent: SettingsIcon,
    },
};

export const Home_D: Story = {
    args: {
        state: 'default',
        label: 'Home',
        IconComponent: HomeIcon,
    },
};

export const Home_S: Story = {
    args: {
        state: 'selected',
        label: 'Home',
        IconComponent: HomeIcon,
    },
};

export const Talks_D: Story = {
    args: {
        state: 'default',
        label: 'HelpTalks',
        IconComponent: TalksIcon,
    },
};

export const Talks_S: Story = {
    args: {
        state: 'selected',
        label: 'HelpTalks',
        IconComponent: TalksIcon,
    },
};

export const Calendar_D: Story = {
    args: {
        state: 'default',
        label: 'Calendar',
        IconComponent: CalendarIcon,
    },
};

export const Calendar_S: Story = {
    args: {
        state: 'selected',
        label: 'Calendar',
        IconComponent: CalendarIcon,
    },
};
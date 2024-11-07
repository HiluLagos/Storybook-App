import {CheckList} from "./CheckList.tsx";
import {Meta} from "@storybook/react";

const meta = {
    title: 'Button/Utility/CheckList',
    component: CheckList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    } satisfies Meta<typeof CheckList>;

export default meta;

export const Default = {
    args: {
        intent: "default",
        title: "Checklist",
    },
};

export const Pressed = {
    args: {
        intent: "pressed",
        title: "Checklist",
    },
};

export const Done = {
    args: {
        intent: "done",
        title: "Checklist",
    },
};
import { Meta, StoryObj } from "@storybook/react";
import Videos from "./Videos";

const meta = {
    title: 'Menu/Videos/Videos',
    component: Videos,
} satisfies Meta<typeof Videos>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
}

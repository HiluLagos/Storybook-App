import { Meta, StoryObj } from "@storybook/react";
import PreviewVideos from "./PreviewStories.tsx";

const meta = {
    title: 'Menu/Videos/PreviewVideos',
    component: PreviewVideos,
} satisfies Meta<typeof PreviewVideos>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
}

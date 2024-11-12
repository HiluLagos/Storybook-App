import {Meta, StoryObj} from "@storybook/react";
import AddLogPopUp from "./AddLogPopUp.tsx";

const meta = {
    title: 'PopUp/Add Log',
    component: AddLogPopUp,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AddLogPopUp>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    render: () => <div className={"w-[300px] h-[300px]"}><AddLogPopUp /></div>
}

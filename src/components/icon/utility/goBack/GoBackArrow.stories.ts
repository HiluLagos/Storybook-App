import {Meta, StoryObj} from "@storybook/react";
import GoBackArrow from "./GoBackArrow.tsx";

const meta = {
  title: 'Icon/Utility/Go Back Arrow',
  component: GoBackArrow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GoBackArrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

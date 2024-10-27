import {Meta, StoryObj} from "@storybook/react";
import Mail from "./Mail.tsx";

const meta = {
  title: 'Icon/Utility/mail',
  component: Mail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

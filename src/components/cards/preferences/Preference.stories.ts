import {Meta, StoryObj} from "@storybook/react";
import Preference from "./Preference.tsx";

const meta = {
  title: 'Cards/Preferences',
  component: Preference,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'dragged'],
      description: 'The state of the drag icon',
    },
    activity: {
      control: 'select',
      options: ['pills', 'salad', 'steps', 'water'],
      description: 'The activity to display',
    },
  }
} satisfies Meta<typeof Preference>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "default",
    activity: "pills",
  },
};

export const Dragged: Story = {
  args: {
    state: "dragged",
    activity: "pills",
  },
};

import {Meta, StoryObj} from "@storybook/react";
import Preference from "./Preference.tsx";

const meta = {
  title: 'Cards/Drag Preferences',
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

export const PillDefault: Story = {
  args: {
    state: "default",
    activity: "pills",
  },
};

export const PillDragged: Story = {
  args: {
    state: "dragged",
    activity: "pills",
  },
};

export const SaladDefault: Story = {
  args: {
    state: "default",
    activity: "salad",
  },
};

export const SaladDragged: Story = {
  args: {
    state: "dragged",
    activity: "salad",
  },
};

export const StepsDefault: Story = {
  args: {
    state: "default",
    activity: "steps",
  },
};

export const StepsDragged: Story = {
  args: {
    state: "dragged",
    activity: "steps",
  },
};

export const WaterDefault: Story = {
  args: {
    state: "default",
    activity: "water",
  },
};

export const WaterDragged: Story = {
  args: {
    state: "dragged",
    activity: "water",
  },
};

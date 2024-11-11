import {Meta, StoryObj} from "@storybook/react";
import Medicine from "./Medicine.tsx";

const meta = {
  title: 'Cards/Activity/Medicine',
  component: Medicine,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    complete: {
      control: 'boolean',
      description: 'States if the medicine has been taken or not',
    },
    name: {
      control: 'text',
      description: 'The name of the medicine',
    },
    description: {
      control: 'text',
      description: 'The description of the medicine',
    },
    schedule: {
      control: 'text',
      description: 'The schedule of the medicine',
    },
    completeTime: {
      control: 'text',
      description: 'The time the medicine was taken',
    }
  }
} satisfies Meta<typeof Medicine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Incomplete: Story = {
  args: {
    complete: false,
    name: 'Cloroplatino',
    description: 'medicine hehe yeah',
    schedule: "23:00",
    completeTime: "00:17",
  }
};

export const Complete: Story = {
  args: {
    complete: true,
    name: 'Cloroplatino',
    description: 'medicine hehe yeah',
    schedule: "19:00",
    completeTime: "19:17",
  }
};

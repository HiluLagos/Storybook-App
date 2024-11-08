import {Meta, StoryObj} from "@storybook/react";
import SurveyProgress from "./SurveyProgress.tsx";

const meta = {
  title: 'Cards/Activity/Survey Progress',
  component: SurveyProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    percentage: {
      control: { type: 'range', min: 0, max: 100},
      min: 0,
      max: 100,
      description: 'The percentage of the progress',
    }
  },
} satisfies Meta<typeof SurveyProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percentage: 45,
  }
};

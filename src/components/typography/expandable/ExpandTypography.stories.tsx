import {Meta, StoryObj} from "@storybook/react";
import ExpandTypography from "./ExpandTypography.tsx";

const meta = {
  title: 'Typography/ExpandTypography',
  component: ExpandTypography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "To manage the color of the typography, use text-[COLOR]-[INTENSITY] wherever the Typography element is contained."
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    weight: {
      control: 'select',
      options: ['regular', 'semiBold', 'extraBold'],
      description: 'The weight of the text',
    },
    size: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'm'],
      description: 'The size of the text',
    },
    children: {
      control: 'text',
      description: 'The text to display',
    },
  },
} satisfies Meta<typeof ExpandTypography>;

export default meta;
type Story = StoryObj<typeof ExpandTypography>;

export const Default: Story = {
  render: () => {
    return (
      <div className={"w-96"}>
        <ExpandTypography weight={"regular"} size={"p"}>
          This is a text that is very long and is meant to display the capabilities of the ExpandTypography component.
          As I'm writing this, I'm wondering if this is enough, hold on let me check. Yes, yes it is.
        </ExpandTypography>
      </div>
    )
  }
}

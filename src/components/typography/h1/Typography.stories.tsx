import {Meta, StoryObj} from "@storybook/react";
import Typography from "./Typography.tsx";

const meta = {
  title: 'Typography/typography',
  component: Typography,
  parameters: {
    layout: 'centered',
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
  }
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const H1: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"h1"} />
      <Typography weight={"semiBold"} size={"h1"} />
      <Typography weight={"extraBold"} size={"h1"} />
    </div>
  )
}

export const H2: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"h2"} />
      <Typography weight={"semiBold"} size={"h2"} />
      <Typography weight={"extraBold"} size={"h2"} />
    </div>
  )
}

export const H3: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"h3"} />
      <Typography weight={"semiBold"} size={"h3"} />
      <Typography weight={"extraBold"} size={"h3"} />
    </div>
  )
}

export const H4: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"h4"} />
      <Typography weight={"semiBold"} size={"h4"} />
      <Typography weight={"extraBold"} size={"h4"} />
    </div>
  )
}

export const H5: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"h5"} />
      <Typography weight={"semiBold"} size={"h5"} />
      <Typography weight={"extraBold"} size={"h5"} />
    </div>
  )
}

export const P: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"p"} />
      <Typography weight={"semiBold"} size={"p"} />
      <Typography weight={"extraBold"} size={"p"} />
    </div>
  )
}

export const M: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"m"} />
      <Typography weight={"semiBold"} size={"m"} />
      <Typography weight={"extraBold"} size={"m"} />
    </div>
  )
}

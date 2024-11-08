import {Meta, StoryObj} from "@storybook/react";
import Typography from "./Typography.tsx";

const meta = {
  title: 'Typography/Font',
  component: Typography,
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
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    weight: 'regular',
    size: 'h1',
    children: 'Sample Text',
  },
}

export const H1: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"h1"}>Regular</Typography>
      <Typography weight={"semiBold"} size={"h1"}>Semi Bold</Typography>
      <Typography weight={"extraBold"} size={"h1"}>Extra Bold</Typography>
    </div>
  )
}

export const H2: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"h2"}>Regular</Typography>
      <Typography weight={"semiBold"} size={"h2"}>Semi Bold</Typography>
      <Typography weight={"extraBold"} size={"h2"}>Extra Bold</Typography>
    </div>
  )
}

export const H3: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"h3"}>Regular</Typography>
      <Typography weight={"semiBold"} size={"h3"}>Semi Bold</Typography>
      <Typography weight={"extraBold"} size={"h3"}>Extra Bold</Typography>
    </div>
  )
}

export const H4: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"h4"}>Regular</Typography>
      <Typography weight={"semiBold"} size={"h4"}>Semi Bold</Typography>
      <Typography weight={"extraBold"} size={"h4"}>Extra Bold</Typography>
    </div>
  )
}

export const H5: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"h5"}>Regular</Typography>
      <Typography weight={"semiBold"} size={"h5"}>Semi Bold</Typography>
      <Typography weight={"extraBold"} size={"h5"}>Extra Bold</Typography>
    </div>
  )
}

export const P: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"p"}>Regular</Typography>
      <Typography weight={"semiBold"} size={"p"}>Semi Bold</Typography>
      <Typography weight={"extraBold"} size={"p"}>Extra Bold</Typography>
    </div>
  )
}

export const M: Story = {
  render: () => (
    <div className={"flex flex-col items-center"}>
      <Typography weight={"regular"} size={"m"}>Regular</Typography>
      <Typography weight={"semiBold"} size={"m"}>Semi Bold</Typography>
      <Typography weight={"extraBold"} size={"m"}>Extra Bold</Typography>
    </div>
  )
}

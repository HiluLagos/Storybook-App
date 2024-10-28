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

export const H1Regular: Story = {
  args: {
    weight: 'regular',
    size: 'h1',
  },
}

export const H1SemiBold: Story = {
  args: {
    weight: 'semiBold',
    size: 'h1',
  },
}

export const H1ExtraBold: Story = {
  args: {
    weight: 'extraBold',
    size: 'h1',
  },
}

export const H2Regular: Story = {
  args: {
    weight: 'regular',
    size: 'h2',
  },
}

export const H2SemiBold: Story = {
  args: {
    weight: 'semiBold',
    size: 'h2',
  },
}

export const H2ExtraBold: Story = {
  args: {
    weight: 'extraBold',
    size: 'h2',
  },
}

export const H3Regular: Story = {
  args: {
    weight: 'regular',
    size: 'h3',
  },
}

export const H3SemiBold: Story = {
  args: {
    weight: 'semiBold',
    size: 'h3',
  },
}

export const H3ExtraBold: Story = {
  args: {
    weight: 'extraBold',
    size: 'h3',
  },
}

export const H4Regular: Story = {
  args: {
    weight: 'regular',
    size: 'h4',
  },
}

export const H4SemiBold: Story = {
  args: {
    weight: 'semiBold',
    size: 'h4',
  },
}

export const H4ExtraBold: Story = {
  args: {
    weight: 'extraBold',
    size: 'h4',
  },
}

export const H5Regular: Story = {
  args: {
    weight: 'regular',
    size: 'h5',
  },
}

export const H5SemiBold: Story = {
  args: {
    weight: 'semiBold',
    size: 'h5',
  },
}

export const H5ExtraBold: Story = {
  args: {
    weight: 'extraBold',
    size: 'h5',
  },
}

export const PRegular: Story = {
  args: {
    weight: 'regular',
    size: 'p',
  },
}

export const PSemiBold: Story = {
  args: {
    weight: 'semiBold',
    size: 'p',
  },
}

export const PExtraBold: Story = {
  args: {
    weight: 'extraBold',
    size: 'p',
  },
}

export const MRegular: Story = {
  args: {
    weight: 'regular',
    size: 'm',
  },
}

export const MSemiBold: Story = {
  args: {
    weight: 'semiBold',
    size: 'm',
  },
}

export const MExtraBold: Story = {
  args: {
    weight: 'extraBold',
    size: 'm',
  },
}

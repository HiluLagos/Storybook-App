import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button.tsx';

const meta = {
  title: 'Button/Utility/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: {
        type: 'select',
      },
      description: 'The intent of the button',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium'],
      description: 'The size of the button',
    },
  },
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: "default",
    size: "medium",
    value: "Click me",
  },
};

export const Pressed: Story = {
  args: {
    intent: "pressed",
    size: "medium",
    value: "Click me",
  },
};

export const Disabled: Story = {
  args: {
    intent: "disabled",
    size: "medium",
    value: "Click me",
  },
};

export const Small: Story = {
  args: {
    intent: "default",
    size: "small",
    value: "Click me",
  },
};

export const Incomplete: Story = {
  args: {
    intent: "incomplete",
    size: "medium",
    value: "Click me",
  },
};

export const SmallPressed: Story = {
  args: {
    intent: "pressed",
    size: "small",
    value: "Click me",
  },
};

export const SmallDisabled: Story = {
  args: {
    intent: "disabled",
    size: "small",
    value: "Click me",
  },
};

export const SmallIncomplete: Story = {
  args: {
    intent: "incomplete",
    size: "small",
    value: "Click me",
  },
};




import {Meta, StoryObj} from "@storybook/react";
import Accumulator from "./Accumulator.tsx";
import React from "react";

const meta = {
  title: 'Menu/Utility/Accumulator',
  component: Accumulator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    activity: {
      control: 'select',
      description: 'The variant to display'
    },
    count: {
      control: 'number',
      description: 'The count to display'
    },
    isCounter: {
      control: 'boolean',
      description: 'Whether to display the counter'
    },
    subOperation: {
      description: 'The operation to perform on the count'
    },
    sumOperation: {
      description: 'The operation to perform on the count'
    },
  },
} satisfies Meta<typeof Accumulator>;

export default meta;
type Story = StoryObj<typeof meta>;

const ParentComponent: React.FC = () => {
  const [count, setCount] = React.useState(159);

  return (
    <div className={"flex flex-col justify-items-center"}>
      <Accumulator activity={"water"} count={count} isCounter={true} subOperation={() => setCount(count - 1)} sumOperation={() => setCount(count + 1)} />
    </div>
  );
}

export const Water: StoryObj<typeof Accumulator> = {
  render: () => (
    <ParentComponent/>
  )
}

export const Steps: Story = {
  args: {
    activity: 'steps',
    count: 159,
    isCounter: true
  },
}

export const Pills: Story = {
  args: {
    activity: 'pills',
    count: 159,
    isCounter: true
  },
}

export const NoCounter: Story = {
  args: {
    activity: 'water',
    count: 159,
    isCounter: false
  },
}

export const Salad: Story = {
  args: {
    activity: 'salad',
    count: 159,
    isCounter: true
  },
}

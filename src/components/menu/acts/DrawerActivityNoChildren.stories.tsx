import {Meta, StoryObj} from "@storybook/react";
import DrawerActivityNoChildren from "./DrawerActivityNoChildren.tsx";
import React, {useState} from "react";

const meta = {
  title: 'Menu/Acts/Drawer Act No Children',
  component: DrawerActivityNoChildren,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the drawer is open or not'
    },
    setIsOpen: {
      description: 'The function to set the drawer open or not'
    },
    activity: {
      control: 'select',
      options: ['water', 'steps', 'pills'],
      description: 'The activity to display in the drawer'
    },
    count: {
      control: 'number',
      description: 'The count of the activity'
    },
    max: {
      control: 'number',
      description: 'The maximum count of the activity'
    },
    isCounter: {
      control: 'boolean',
      description: 'Whether to display the count or not'
    },
    subOperation: {
      description: 'The operation to perform on the count'
    },
    sumOperation: {
      description: 'The operation to perform on the count'
    },
  }
} satisfies Meta<typeof DrawerActivityNoChildren>;

export default meta;
type Story = StoryObj<typeof DrawerActivityNoChildren>;

type Props = {
  activity: "water" | "steps",
  isCounter: boolean,
}

const DisplayComponent: React.FC<Props> = ({activity, isCounter}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [count, setCount] = React.useState(10);

  const manageSubtraction = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const manageAddition = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={"flex flex-col justify-items-center"}>
      <button className={"bg-secondary-500 text-black"} onClick={() => setIsDrawerOpen(true)}>Open Drawer from {activity}</button>
      <DrawerActivityNoChildren
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
        activity={activity}
        count={count}
        max={30}
        isCounter={isCounter}
        subOperation={manageSubtraction}
        sumOperation={manageAddition}
      />
    </div>
  );
}

export const Water: Story = {
  render: () => (
    <DisplayComponent activity={"water"} isCounter={true} />
  )
};

export const Steps: Story = {
  render: () => (
    <DisplayComponent activity={"steps"} isCounter={false} />
  )
};

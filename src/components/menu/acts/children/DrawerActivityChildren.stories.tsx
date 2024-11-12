import {Meta, StoryObj} from "@storybook/react";
import DrawerActivityChildren from "./DrawerActivityChildren.tsx";
import React, {useState} from "react";
import Medicine from "../../../cards/medicine/Medicine.tsx";

const meta = {
  title: 'Menu/Acts/Drawer Act Children',
  component: DrawerActivityChildren,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    pxHeight: {
      control: 'number',
      description: 'The height of the drawer'
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the drawer is open or not'
    },
    setIsOpen: {
      description: 'The function to set the drawer open or not'
    },
    activity: {
      control: 'select',
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
} satisfies Meta<typeof DrawerActivityChildren>;

export default meta;
type Story = StoryObj<typeof DrawerActivityChildren>;

const DisplayComponent: React.FC = () => {
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
      <button className={"bg-secondary-500 text-black"} onClick={() => setIsDrawerOpen(true)}>Open Drawer from pills</button>
      <DrawerActivityChildren
        pxHeight={720}
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
        activity={"pills"}
        count={10 - count}
        max={10}
        isCounter={false}>
        {Array.from({length: 10}, () => (
          <Medicine name="Paracetamol" description={""} schedule={""} completeTime={""} onCompletion={manageSubtraction} onDecompletion={manageAddition}/>
        ))}
      </DrawerActivityChildren>
    </div>
  );
}

export const Pills: Story = {
  render: () => (
    <DisplayComponent />
  )
};

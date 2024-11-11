import {Meta, StoryObj} from "@storybook/react";
import DrawerActivityNoChildren from "./DrawerActivityNoChildren.tsx";
import React, {useState} from "react";

const meta = {
  title: 'Menu/Acts/DrawerActNoChildren',
  component: DrawerActivityNoChildren,
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
    }
  }
} satisfies Meta<typeof DrawerActivityNoChildren>;

export default meta;
type Story = StoryObj<typeof DrawerActivityNoChildren>;

const ParentComponent: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={"flex flex-col justify-items-center"}>
      <button className={"bg-secondary-500 text-black"} onClick={() => setIsDrawerOpen(true)}>Open Drawer from Parent</button>
      <DrawerActivityNoChildren isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} activity={"water"} count={15} max={30} isCounter={false}/>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <ParentComponent />
  )
};

const WaterComponent: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [count, setCount] = React.useState(10);

  const manageSubtraction = () => {
    const newValue = count - 1;
    setCount(newValue < 0 ? 0 : newValue);
  };

  return (
    <div className={"flex flex-col justify-items-center"}>
      <button className={"bg-secondary-500 text-black"} onClick={() => setIsDrawerOpen(true)}>Open Drawer from Water</button>
      <DrawerActivityNoChildren isOpen={isDrawerOpen}
                                setIsOpen={setIsDrawerOpen}
                                activity={"water"}
                                count={15}
                                max={30}
                                isCounter={true}
                                subOperation={manageSubtraction}
                                sumOperation={() => setCount(count + 1)}/>
    </div>
  );
}

export const Water: Story = {
  render: () => (
    <WaterComponent />
  )
};

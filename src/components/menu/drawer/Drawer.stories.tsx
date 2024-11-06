import {Meta, StoryObj} from "@storybook/react";
import Drawer from "./Drawer.tsx";

const meta = {
  title: 'Menu/Utilities/Drawer',
  component: Drawer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      description: 'The children to display inside the drawer'
    },
    pxHeight: {
      control: 'number',
      description: 'The maximum height of the drawer in pixels'
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof Drawer>;

import React, { useState } from "react";
import DraggableDrawer from "./Drawer.tsx";

const ParentComponent: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDrawerOpen(true)}>Open Drawer from Parent</button>
      <DraggableDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} pxHeight={300}>
        <div className="w-48 bg-teal-300 rounded-lg flex flex-col items-center">
          <p>Drawer content</p>
        </div>
      </DraggableDrawer>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <div className={"h-[500px] w-[330px] overflow-hidden bg-teal-300 flex flex-col justify-end"}>
      <ParentComponent />
    </div>
  )
}

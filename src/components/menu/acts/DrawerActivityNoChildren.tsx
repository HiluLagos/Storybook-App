import React from "react";
import DraggableDrawer from "../utility/drawer/Drawer.tsx";
import ActivityCore from "../utility/core/ActivityCore.tsx";

interface DrawerActivityNoChildrenProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activity: "water" | "steps" | "pills";
  count: number;
  max: number;
  isCounter: boolean;
  subOperation?: () => void;
  sumOperation?: () => void;
}

const defaultOperation = () => {}

const DrawerActivityNoChildren: React.FC<DrawerActivityNoChildrenProps> = ({ isOpen = false, setIsOpen, activity, count = 10, max = 20, isCounter = false, subOperation = defaultOperation, sumOperation = defaultOperation }) => {
  return (
    <>
      <DraggableDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <ActivityCore activity={activity} count={count} max={max} isCounter={isCounter} subOperation={subOperation} sumOperation={sumOperation}/>
      </DraggableDrawer>
    </>
  )
}

export default DrawerActivityNoChildren;

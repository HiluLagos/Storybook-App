import React from "react";
import DraggableDrawer from "../../utility/drawer/Drawer.tsx";
import ActivityCore from "../../utility/core/ActivityCore.tsx";

interface DrawerActivityNoChildrenProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activity: "water" | "steps" | "pills";
  count: number;
  max: number;
  isCounter: boolean;
  subOperation?: () => void;
  sumOperation?: () => void;
  children?: React.ReactNode;
  pxHeight?: number;
}

const defaultOperation = () => {}

const DrawerActivityChildren: React.FC<DrawerActivityNoChildrenProps> = ({ isOpen = false, setIsOpen, activity, count = 10, max = 20, isCounter = false, subOperation = defaultOperation, sumOperation = defaultOperation, pxHeight, children }) => {
  return (
    <>
      <DraggableDrawer pxHeight={pxHeight} isOpen={isOpen} setIsOpen={setIsOpen}>
        <ActivityCore activity={activity} count={count} max={max} isCounter={isCounter} subOperation={subOperation} sumOperation={sumOperation}>
          {children}
        </ActivityCore>
      </DraggableDrawer>
    </>
  )
}

export default DrawerActivityChildren;

import React from "react";
import { SwipeableDrawer } from "@mui/material";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import TopNotch from "../../icon/settings/drawer/topNotch/TopNotch.tsx";

interface DrawerProps {
  children?: React.ReactNode;
  pxHeight?: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const DraggableDrawer: React.FC<DrawerProps> = ({ children, pxHeight = 300, isOpen, setIsOpen }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const handleStop = (_: DraggableEvent, data: DraggableData) => {
    if (data.y > pxHeight / 5) {
      // Close if dragged halfway down or more
      setIsOpen(false);
    } else {
      // Reset to open position
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      PaperProps={{
        style: { height: `${pxHeight}px`, overflow: "hidden", backgroundColor: "transparent", boxShadow: "none" },
      }}
    >
      <Draggable
        axis="y"
        position={position}
        onStop={handleStop}
        bounds={{ top: 0, bottom: pxHeight }}
      >
        <div
          className="w-full rounded-t-lg flex flex-col items-center bg-secondary-100 transition duration-200 ease-in-out"
          style={{ height: `${pxHeight}px` }}
        >
          <div className="handle w-full pt-4 pb-2 flex justify-center h-auto">
            <TopNotch />
          </div>
          <div className="overflow-scroll" style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
            {children}
          </div>
        </div>
      </Draggable>
    </SwipeableDrawer>
  );
};

export default DraggableDrawer;
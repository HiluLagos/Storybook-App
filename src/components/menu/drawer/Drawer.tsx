import React from "react";
import TopNotch from "../../icon/settings/drawer/topNotch/TopNotch.tsx";
import Draggable from 'react-draggable';

interface DrawerProps {
  children?: React.ReactNode;
  maxPxHeight?: number;
}

const Drawer: React.FC<DrawerProps> = ({children, maxPxHeight = 200}) => {
  return (
    <Draggable
      axis={"y"}
      onStop={() => {

      }}
    >
      <div className={`w-full rounded-t-lg flex flex-col items-center justify-around bg-secondary-100`}
           style={{maxHeight: `${maxPxHeight}px`}}>
        <div className={"w-full pt-4 pb-2 flex justify-center"}>
          <TopNotch/>
        </div>
        {children}
      </div>
    </Draggable>
  )
}

export default Drawer;

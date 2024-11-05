import React from "react";
import TopNotch from "../../icon/settings/drawer/topNotch/TopNotch.tsx";
import Draggable from 'react-draggable';

interface DrawerProps {
  children?: React.ReactNode;
  pxHeight?: number;
}

const Drawer: React.FC<DrawerProps> = ({children, pxHeight = 200}) => {
  const handleStop = () => {

  }

  return (
    <Draggable
      axis={"y"}
      position={{x: 0, y: 0}}
      onStop={handleStop}
    >
      <div className={`w-full rounded-t-lg flex flex-col items-center justify-around bg-secondary-100`}
           style={{height: `${pxHeight}px`}}>
        <div className={"w-full pt-4 pb-2 flex justify-center"}>
          <TopNotch/>
        </div>
        <div className={'overflow-scroll'} style={{msOverflowStyle: 'none', scrollbarWidth: 'none', overflow: 'hidden'}}>
          {children}
        </div>
      </div>
    </Draggable>
  )
}

export default Drawer;

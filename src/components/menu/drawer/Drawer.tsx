import React, {useEffect} from "react";
import TopNotch from "../../icon/settings/drawer/topNotch/TopNotch.tsx";
import Draggable, {DraggableData, DraggableEvent} from 'react-draggable';

interface DrawerProps {
  children?: React.ReactNode;
  pxHeight?: number;
  restart: boolean;
}

const Drawer: React.FC<DrawerProps> = ({children, pxHeight = 200, restart}) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({ x: 0, y: 0 });
  }, [restart]);

  const handleStop = (_e: DraggableEvent, data: DraggableData) => {
    console.log(data);
    if (data.y > 0) {
      setPosition({ x: 0, y: pxHeight });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  }

  return (
    <Draggable
      handle={".handle"}
      axis={"y"}
      position={position}
      onStop={handleStop}
      bounds={{top: 0, bottom: pxHeight}}
    >
      <div className={`w-full rounded-t-lg flex flex-col items-center justify-around bg-secondary-100 transition duration-200 ease-in-out`}
           style={{height: `${pxHeight}px`}}>
        <div className={"handle w-full pt-4 pb-2 flex justify-center"}>
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

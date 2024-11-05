import React from "react";
import TopNotch from "../../icon/settings/drawer/topNotch/TopNotch.tsx";

interface DrawerProps {
  children?: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({children}) => {
  return (
    <div className={"w-full rounded-t-lg flex flex-col items-center justify-around bg-secondary-100"}>
      <div className={"w-full pt-4 pb-2 flex justify-center"}>
        <TopNotch />
      </div>
      {children}
    </div>
  )
}

export default Drawer;

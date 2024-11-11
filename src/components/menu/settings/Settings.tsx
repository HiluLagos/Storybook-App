import DrawerButton from "../../button/settings/DrawerButton/DrawerButton.tsx";
import DrawerHeader from "../../button/settings/DrawerHeader/DrawerHeader.tsx";
import React from "react";
import TopNotch from "../../icon/settings/drawer/topNotch/TopNotch.tsx";

const Settings: React.FC = () => {
    return (
        <div className={"bg-white flex flex-col items-center pt-3 pb-4 gap-2 rounded-lg w-[360px]"}>
            <div><TopNotch/></div>
            <DrawerHeader clientName={"Client"} doctorName={"Doctor"}/>
            <DrawerButton variant={"information"}/>
            <DrawerButton variant={"helpCenter"}/>
            <DrawerButton variant={"logout"}/>
        </div>
    )
 }

export default Settings;
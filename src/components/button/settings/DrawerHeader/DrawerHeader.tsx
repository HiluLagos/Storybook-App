import User from "../../../icon/settings/drawer/icons/user/User.tsx";
import Typography from "../../../typography/basic/Typography.tsx";
import React from "react";

type DrawerHeaderProps = {
    clientName: string,
    doctorName: string,
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({clientName = "Client", doctorName = "Doctor"}) => {
    return (
        <div className="flex flex-row bg-white rounded-lg align-middle items-center gap-2 w-[360px]">
            <User/>
            <div className={"-space-y-1"}>
                <Typography size={"h4"} weight={"semiBold"}>{clientName}</Typography>
                <Typography size={"m"} weight={"regular"}>{"Doctor: " + doctorName}</Typography>
            </div>
        </div>
    )
}

export default DrawerHeader;
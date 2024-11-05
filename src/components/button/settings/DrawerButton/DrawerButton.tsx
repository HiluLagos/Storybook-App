import SettingsIconProvider from "../SettingsIconProvider.tsx";
import React from "react";
import Typography from "../../../typography/basic/Typography.tsx";

type DrawerButtonProps = {

    variant: "logout" | "notification",
}

const variantText = {
    logout: "Log out",
    notification: "Notification",
}

const DrawerButton: React.FC<DrawerButtonProps> = ({variant}) => {
  return (
      <div className="flex flex-row bg-secondary-300 rounded-lg align-middle items-center p-2 gap-4 w-[328px]">
        <SettingsIconProvider icon={variant}/>
        <Typography size={"p"} weight={"semiBold"}>{variantText[variant]}</Typography>
      </div>
  );
}

export default DrawerButton;
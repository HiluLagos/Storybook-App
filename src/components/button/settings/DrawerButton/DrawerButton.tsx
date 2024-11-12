import SettingsIconProvider from "../SettingsIconProvider.tsx";
import React from "react";
import Typography from "../../../typography/basic/Typography.tsx";

type DrawerButtonProps = {

    variant: "logout" | "helpCenter" | "information",
}

const variantText = {
    logout: "Log out",
    helpCenter: "Help Center",
    information: "Information",
}

const DrawerButton: React.FC<DrawerButtonProps> = ({variant}) => {
    const textColor = variant === "logout" ? "text-icon-red" : "text-black";

    return (
      <div className={`flex flex-row bg-white border-2 border-secondary-300 rounded-lg align-middle items-center p-2 gap-4 w-[328px] ${textColor}`}>
        <SettingsIconProvider icon={variant}/>
        <Typography size={"p"} weight={"semiBold"}>
            {variantText[variant]}
        </Typography>
      </div>
  );
}

export default DrawerButton;
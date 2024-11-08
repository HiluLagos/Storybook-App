// src/components/icon/activity/IconProvider.ts
import React from "react";
import LogOut from "../../icon/settings/drawer/icons/logout/LogOut.tsx";
import Information from "../../icon/settings/drawer/icons/information/InformationIcon.tsx";
import HelpIcon from "../../icon/settings/drawer/icons/help/HelpIcon.tsx";

type IconProviderProps = {
    icon: "logout" | "helpCenter" | "information",
};

const iconMap = {
    logout: LogOut,
    helpCenter: HelpIcon,
    information: Information,
};

const SettingsIconProvider: React.FC<IconProviderProps> = ({ icon }) => {
    const IconComponent = iconMap[icon];
    return IconComponent ? <IconComponent /> : null;
};

export default SettingsIconProvider;

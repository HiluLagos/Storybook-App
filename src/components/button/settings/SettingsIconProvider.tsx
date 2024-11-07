// src/components/icon/activity/IconProvider.ts
import React from "react";
import LogOut from "../../icon/settings/drawer/icons/logout/LogOut.tsx";
import Notifications from "../../icon/tech/notifications/Notifications.tsx";
import Information from "../../icon/settings/drawer/icons/information/InformationIcon.tsx";

type IconProviderProps = {
    icon: "logout" | "notification" | "information",
};

const iconMap = {
    logout: LogOut,
    notification: Notifications,
    information: Information,
};

const ActivityIconProvider: React.FC<IconProviderProps> = ({ icon }) => {
    const IconComponent = iconMap[icon];
    return IconComponent ? <IconComponent /> : null;
};

export default ActivityIconProvider;

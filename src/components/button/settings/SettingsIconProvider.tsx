// src/components/icon/activity/IconProvider.ts
import React from "react";
import LogOut from "../../icon/settings/drawer/icons/logout/LogOut.tsx";
import Notifications from "../../icon/tech/notifications/Notifications.tsx";

type IconProviderProps = {
    icon: "logout" | "notification",
};

const iconMap = {
    logout: LogOut,
    notification: Notifications,
};

const ActivityIconProvider: React.FC<IconProviderProps> = ({ icon }) => {
    const IconComponent = iconMap[icon];
    return IconComponent ? <IconComponent /> : null;
};

export default ActivityIconProvider;

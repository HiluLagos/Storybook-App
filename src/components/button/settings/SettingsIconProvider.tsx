// src/components/icon/activity/ActivityIconProvider.ts
import React from "react";
import LogOut from "../../icon/settings/drawer/icons/logout/LogOut.tsx";
import Notifications from "../../icon/settings/drawer/icons/notifications/Notifications.tsx";

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

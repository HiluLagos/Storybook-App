import React from "react";
import SettingsIcon from "../../../icon/utility/navigation/settings/Settings.tsx";
import IconWrapper from "../NavComponent.tsx";

type StateType = "default" | "selected" | null | undefined;

const SettingsComponent: React.FC<{ state: StateType }> = ({ state = "default" }) => {
    return <IconWrapper state={state} IconComponent={SettingsIcon} label="Settings" size="small" />;
};

export default SettingsComponent;
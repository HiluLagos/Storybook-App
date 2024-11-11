import React from "react";
import SettingsIcon from "../../icon/nav/settings/Settings.tsx";
import IconWrapper from "./NavComponent.tsx";
import { StateType } from "../../../../types.ts";

const SettingsComponent: React.FC<{ state: StateType; onClick: () => void }> = ({ state = "default", onClick }) => {
    return <IconWrapper state={state} IconComponent={SettingsIcon} label="Settings" onClick={onClick}/>;
};

export default SettingsComponent;
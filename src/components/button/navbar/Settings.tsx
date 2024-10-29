import React from "react";
import SettingsIcon from "../../icon/utility/navigation/settings/Settings.tsx";
import IconWrapper from "./NavComponent.tsx";
import { StateType } from "../../../../types.ts";

const SettingsComponent: React.FC<{ state: StateType; onClick: () => void }> = ({ state = "default", onClick }) => {
    return <IconWrapper state={state} IconComponent={SettingsIcon} label="Settings" size="small" onClick={onClick}/>;
};

export default SettingsComponent;
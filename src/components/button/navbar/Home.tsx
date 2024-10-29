import React from "react";
import HomeIcon from "../../icon/utility/navigation/home/HomeIcon.tsx";
import IconWrapper from "./NavComponent.tsx";
import { StateType } from "../../../../types.ts";

const SettingsComponent: React.FC<{ state: StateType; onClick: () => void }> = ({ state = "default", onClick }) => {
    return <IconWrapper state={state} IconComponent={HomeIcon} label="Home" size="small" onClick={onClick} />;
};

export default SettingsComponent;
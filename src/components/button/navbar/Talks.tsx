import React from "react";
import TalksIcon from "../../icon/utility/navigation/talks/HelpTalks.tsx"
import IconWrapper from "./NavComponent.tsx";
import { StateType } from "../../../../types.ts";

const SettingsComponent: React.FC<{ state: StateType; onClick: () => void}> = ({ state = "default" , onClick}) => {
    return <IconWrapper state={state} IconComponent={TalksIcon} label="HelpTalks" size="small" onClick={onClick}/>;
};

export default SettingsComponent;
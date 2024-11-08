import React from "react";
import Calendar from "../../icon/nav/calendar/Calendar.tsx";
import IconWrapper from "./NavComponent.tsx";
import { StateType } from "../../../../types.ts";

const SettingsComponent: React.FC<{ state: StateType; onClick: () => void }> = ({ state = "default", onClick}) => {
    return <IconWrapper state={state} IconComponent={Calendar} label="Calendar" onClick={onClick}/>;
};

export default SettingsComponent;
import React from 'react';
import Home from "../../button/navbar/Home.tsx";
import Talks from "../../button/navbar/Talks.tsx";
import Calendar from "../../button/navbar/Calendar.tsx";
import Settings from "../../button/navbar/Settings.tsx";
import { StateType } from "../../../../types.ts";

type NavBarProps = {
    homeState: StateType;
    calendarState: StateType;
    settingsState: StateType;
    talksState: StateType;
    handleHomeClick?: () => void;
    handleCalendarClick?: () => void;
    handleSettingsClick?: () => void;
    handleTalksClick?: () => void;
};

const NavBarSt: React.FC<NavBarProps> = ({
    homeState,
    calendarState,
    settingsState,
    talksState,
    handleHomeClick = () => {},
    handleCalendarClick = () => {},
    handleSettingsClick = () => {},
    handleTalksClick = () => {},
}) => {
    return (
        <div className={`flex flex-row justify-center items-center gap-3 bg-gray-200 w-[360px] h-[92px]`}>
            <Home state={homeState} onClick={handleHomeClick}/>
            <Talks state={talksState} onClick={handleTalksClick}/>
            <Calendar state={calendarState} onClick={handleCalendarClick}/>
            <Settings state={settingsState} onClick={handleSettingsClick}/>
        </div>
    );
};

export default NavBarSt;
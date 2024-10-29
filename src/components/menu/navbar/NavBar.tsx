import React, {useState} from 'react';
import Home from "../../button/navbar/Home.tsx";
import Talks from "../../button/navbar/Talks.tsx";
import Calendar from "../../button/navbar/Calendar.tsx";
import Settings from "../../button/navbar/Settings.tsx";
import {StateType} from "../../../../types.ts";

const NavBar = () => {
    const [homeState, setHomeState] = useState<StateType>("default");
    const [calendarState, setCalendarState] = useState<StateType>("default");
    const [settingsState, setSettingsState] = useState<StateType>("default");
    const [talksState, setTalksState] = useState<StateType>("default");

    const handleHomeClick = () => {
        setHomeState("selected");
        setCalendarState("default");
        setSettingsState("default");
        setTalksState("default");
    };

    const handleCalendarClick = () => {
        setHomeState("default");
        setCalendarState("selected");
        setSettingsState("default");
        setTalksState("default");
    };

    const handleSettingsClick = () => {
        setHomeState("default");
        setCalendarState("default");
        setSettingsState("selected");
        setTalksState("default");
    };

    const handleTalksClick = () => {
        setHomeState("default");
        setCalendarState("default");
        setSettingsState("default");
        setTalksState("selected");
    };


    return (
        <div className="">
            <Home state={homeState} onClick={handleHomeClick} />
            <Talks state={talksState} onClick={handleTalksClick} />
            <Calendar state={calendarState} onClick={handleCalendarClick} />
            <Settings state={settingsState} onClick={handleSettingsClick} />
        </div>
    );
};

export default NavBar;

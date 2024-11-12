import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import Home from "../../button/navbar/Home.tsx";
import Talks from "../../button/navbar/Talks.tsx";
import Calendar from "../../button/navbar/Calendar.tsx";
import Settings from "../../button/navbar/Settings.tsx";
import { StateType } from "../../../../types.ts";

const NavBar = () => {
    const [homeState, setHomeState] = useState<StateType>("default");
    const [calendarState, setCalendarState] = useState<StateType>("default");
    const [settingsState, setSettingsState] = useState<StateType>("default");
    const [talksState, setTalksState] = useState<StateType>("default");

    //const navigate = useNavigate();

    const handleHomeClick = () => {
        setHomeState("selected");
        setCalendarState("default");
        setSettingsState("default");
        setTalksState("default");
        //navigate('/home');
    };

    const handleCalendarClick = () => {
        setHomeState("default");
        setCalendarState("selected");
        setSettingsState("default");
        setTalksState("default");
        //navigate('/calendar');
    };

    const handleSettingsClick = () => {
        setHomeState("default");
        setCalendarState("default");
        setSettingsState("selected");
        setTalksState("default");
        //navigate('/settings');
    };

    const handleTalksClick = () => {
        setHomeState("default");
        setCalendarState("default");
        setSettingsState("default");
        setTalksState("selected");
        //navigate('/talks');
    };

    return (
        <div className={'w-[360px] h-[92px] bg-bg-default pt-3 justify-items-center'}>
            <div className={`flex flex-row gap-3 w-[324px] h-[53px] `}>
                <Home state={homeState} onClick={handleHomeClick}/>
                <Talks state={talksState} onClick={handleTalksClick}/>
                <Calendar state={calendarState} onClick={handleCalendarClick}/>
                <Settings state={settingsState} onClick={handleSettingsClick}/>
            </div>
        </div>
    );
};

export default NavBar;
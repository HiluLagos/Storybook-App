import React from 'react';
import NavBar from "../../components/menu/navbar/NavBar.tsx";
import ActivityCard from "../../components/cards/activity/ActivityCard.tsx";
import Typography from "../../components/typography/basic/Typography.tsx";
import SurveyProgress from "../../components/cards/activity/survey/SurveyProgress.tsx";

export const Activities: React.FC = () => {

    return (
        <div className={'flex flex-col w-[360px] h-[800px] items-center bg-bg-default'}>
            <div className={"flex flex-col items-center"}>
                <Typography weight={"semiBold"} size={"h2"}>
                    Daily Survey
                </Typography>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                    <ActivityCard activity="steps" progress={8000} maxProgress={10000}/>
                    <ActivityCard activity="water" progress={45} maxProgress={100}/>
                </div>
                <div className="flex flex-wrap gap-4">
                    <ActivityCard activity="salad" progress={20} maxProgress={30}/>
                    <ActivityCard activity="pills" progress={30} maxProgress={50}/>
                </div>
            </div>

            <SurveyProgress percentage={80}>
            </SurveyProgress>

            <div className="">
                <NavBar/>
            </div>
        </div>
    );
};

export default Activities;

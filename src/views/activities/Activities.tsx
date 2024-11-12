import React, {useEffect, useState} from 'react';
import NavBar from "../../components/menu/navbar/NavBar.tsx";
import ActivityCard from "../../components/cards/activity/ActivityCard.tsx";
import Typography from "../../components/typography/basic/Typography.tsx";
import SurveyProgress from "../../components/cards/activity/survey/SurveyProgress.tsx";
import Medicine from "../../components/cards/medicine/Medicine.tsx";
import DrawerActivityChildren from "../../components/menu/acts/children/DrawerActivityChildren.tsx";
import WellDoneLogPopUp from "../../components/popUp/wellDoneSurvey/WellDoneLogPopUp.tsx";

export const Activities: React.FC = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [currentActivity, setCurrentActivity] = useState<"water" | "steps" | "pills" | "salad">("pills");

    const [activityMap, setActivityMap] = useState<Record<"water" | "steps" | "pills" | "salad", { value: number, max: number }>>({
        water: { value: 3, max: 4 },
        steps: { value: 8000, max: 8000 },
        pills: { value: 0, max: 2 },
        salad: { value: 4, max: 4 }
    });

    const [progress, setProgress] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [hasShownPopup, setHasShownPopup] = useState(false);

    useEffect(() => {
        const totalValue = Object.values(activityMap).reduce((sum, activity) => sum + (Math.min(activity.value, activity.max) / activity.max), 0);
        const newProgress = (totalValue / Object.keys(activityMap).length) * 100;
        setProgress(Math.floor(newProgress));

        if (Math.floor(newProgress) === 100 && !hasShownPopup) {
            setShowPopup(true);
            setHasShownPopup(true);
        }
    }, [activityMap, hasShownPopup]);


    const openDrawerForActivity = (activity: "water" | "steps" | "pills" | "salad") => {
        setCurrentActivity(activity);
        setIsDrawerOpen(true);
    }

    //In a real scenario, this should call backend to get the data
    const mockMedicine = (activity: "water" | "steps" | "pills" | "salad") => {
        if (activity === "pills") {
            const medicines = [
                { name: "Paracetamol", description: "El paracetamol es un medicamento que se usa para tratar el dolor y la fiebre.", schedule: "09:00hs", id: "paracetamol-1" },
                { name: "Paracetamol", description: "El paracetamol es un medicamento que se usa para tratar el dolor y la fiebre.", schedule: "09:00hs", id: "paracetamol-2" }
            ];

            return (
                <>
                    {medicines.map(medicine => (
                        <Medicine
                            key={medicine.id}
                            name={medicine.name}
                            description={medicine.description}
                            schedule={medicine.schedule}
                            completeTime={"23:05"}
                            onCompletion={() => sumOperation(currentActivity)}
                            onDecompletion={() => subOperation(currentActivity)}
                        />
                    ))}
                </>
            );
        }
    }

    const sumOperation = (activity: "water" | "steps" | "pills" | "salad") => {
        setActivityMap((prevActivityMap) => ({
            ...prevActivityMap,
            [activity]: {
                ...prevActivityMap[activity],
                value: prevActivityMap[activity].value + 1
            }
        }));
    };

    const subOperation = (activity: "water" | "steps" | "pills" | "salad") => {
        setActivityMap((prevActivityMap) => ({
            ...prevActivityMap,
            [activity]: {
                ...prevActivityMap[activity],
                value: Math.max(prevActivityMap[activity].value - 1, 0)
            }
        }));
    };

    return (
        <div className={'flex flex-col w-[360px] h-[800px] bg-bg-default place-content-between items-center pt-16'}>

            {showPopup && (<div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-50" />)}

            <div className={"flex flex-col items-center"}>
                <Typography weight={"semiBold"} size={"h2"}>
                    Daily Survey
                </Typography>
            </div>
            <div className="grid grid-cols-2 gap-6 place-content-center">
                <ActivityCard
                    activity="steps"
                    progress={activityMap["steps"].value}
                    maxProgress={activityMap["steps"].max}
                    onClick={() => openDrawerForActivity("steps")}
                />
                <ActivityCard
                    activity="water"
                    progress={activityMap["water"].value}
                    maxProgress={activityMap["water"].max}
                    onClick={() => openDrawerForActivity("water")}
                />
                <ActivityCard
                    activity="salad"
                    progress={activityMap["salad"].value}
                    maxProgress={activityMap["salad"].max}
                    onClick={() => openDrawerForActivity("salad")}
                />
                <ActivityCard
                    activity="pills"
                    progress={activityMap["pills"].value}
                    maxProgress={activityMap["pills"].max}
                    onClick={() => openDrawerForActivity("pills")}
                />
            </div>

            <SurveyProgress percentage={progress} />

            <div className="">
                <NavBar/>
            </div>

            <DrawerActivityChildren
                isOpen={isDrawerOpen}
                setIsOpen={setIsDrawerOpen}
                activity={currentActivity}
                count={activityMap[currentActivity].value}
                max={activityMap[currentActivity].max}
                isCounter={currentActivity === "salad" || currentActivity === "water"}
                sumOperation={() => sumOperation(currentActivity)}
                subOperation={() => subOperation(currentActivity)}
                pxHeight={currentActivity === "pills" ? 720 : 330}
            >
                {mockMedicine(currentActivity)}
            </DrawerActivityChildren>

            {showPopup && <WellDoneLogPopUp name={"John Doe"} onClick={() => setShowPopup(false)}/>}
        </div>
    );
};

export default Activities;

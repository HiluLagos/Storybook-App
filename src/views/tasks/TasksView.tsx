import React, { useState } from 'react';
import { Dropdown } from '../../components/menu/dropdown/Dropdown';
import { CheckListProps } from '../../components/button/utility/checklist/CheckList';
import Typography from "../../components/typography/basic/Typography.tsx";
import NavBar from "../../components/menu/navbar/NavBar.tsx";
import DescriptionPopUp from "../../components/popUp/description/DescriptionPopUp.tsx";

interface PopUpData {
  intent: "incomplete" | "complete";
  descTitle: string;
  description: string;
  variant: "info" | "recipe";
}

const TasksView: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState<PopUpData>({ intent: "incomplete", descTitle: "", description: "", variant: "info" });

  const openPopUpInfo = (title: string, intent: string, description: string) => {
    setPopUpData({
      intent: intent === "done" ? "complete" : "incomplete",
      descTitle: title,
      description: description,
      variant: "info"
    });
    setShowPopUp(true);
  };

  const openPopUpRecipe = (title: string, intent: string, description: string) => {
    setPopUpData({
      intent: intent === "done" ? "complete" : "incomplete",
      descTitle: title,
      description: description,
      variant: "recipe"
    });
    setShowPopUp(true);
  };

  const [checkLists1, setCheckLists1] = useState<Array<CheckListProps>>([
    { intent: 'default', title: 'Vitamin D supplement', onTitleClick: () => openPopUpRecipe('Vitamin D supplement', 'default', 'Take one pill daily') },
    { intent: 'done', title: 'Omega-3 capsules', onTitleClick: () => openPopUpRecipe('Omega-3 capsules', 'done', 'Take two capsules daily') },
    { intent: 'done', title: 'Ibuprofen', onTitleClick: () => openPopUpRecipe('Ibuprofen', 'done', 'Take one pill as needed for pain') },
    { intent: 'default', title: 'Blood pressure medication', onTitleClick: () => openPopUpRecipe('Blood pressure medication', 'default', 'Take one pill daily in the morning') },
  ]);

  const [checkLists2, setCheckLists2] = useState<Array<CheckListProps>>([
    { intent: 'done', title: 'Get medical records', onTitleClick: () => openPopUpInfo('Get medical records', 'done', 'Request records from the hospital') },
    { intent: 'default', title: 'Go to the A4 clinic', onTitleClick: () => openPopUpInfo('Go to the A4 clinic', 'default', 'Visit the clinic for a checkup') },
  ]);

  const [checkLists3, setCheckLists3] = useState<Array<CheckListProps>>([
    { intent: 'default', title: 'Leg X-Ray', onTitleClick: () => openPopUpInfo('Leg X-Ray', 'default', 'Get an X-Ray of the leg at the radiology department') },
  ]);

  const [checkLists4, setCheckLists4] = useState<Array<CheckListProps>>([
    { intent: 'done', title: 'Complete pre-surgery lab tests', onTitleClick: () => openPopUpInfo('Complete pre-surgery lab tests', 'done', 'Complete all required lab tests before surgery') },
    { intent: 'done', title: 'Meet with anesthesiologist for consultation', onTitleClick: () => openPopUpInfo('Meet with anesthesiologist for consultation', 'done', 'Consult with the anesthesiologist about the surgery') },
    { intent: 'done', title: 'Stop certain medications', onTitleClick: () => openPopUpInfo('Stop certain medications', 'done', 'Stop taking certain medications as advised by the doctor') },
    { intent: 'default', title: 'Arrange transportation to and from the hospital', onTitleClick: () => openPopUpInfo('Arrange transportation to and from the hospital', 'default', 'Arrange for someone to drive you to and from the hospital') },
    { intent: 'default', title: 'Prepare post-surgery recovery items at home', onTitleClick: () => openPopUpInfo('Prepare post-surgery recovery items at home', 'default', 'Prepare items needed for recovery at home after surgery') },
  ]);

  const closePopUp = (title: string, newIntent: "incomplete" | "complete") => {
    updateIntent(title, newIntent);
    setShowPopUp(false);
  };

  const updateIntent = (title: string, newIntent: "incomplete" | "complete") => {
    const mappedIntent = newIntent === "incomplete" ? "default" : "done";

    const updateCheckList = (_checkLists: Array<CheckListProps>, setCheckLists: React.Dispatch<React.SetStateAction<Array<CheckListProps>>>) => {
      setCheckLists(prevCheckLists => prevCheckLists.map(item =>
          item.title === title ? { ...item, intent: mappedIntent } : item
      ));
    };

    updateCheckList(checkLists1, setCheckLists1);
    updateCheckList(checkLists2, setCheckLists2);
    updateCheckList(checkLists3, setCheckLists3);
    updateCheckList(checkLists4, setCheckLists4);
  };

  return (
    <div className={'flex flex-col min-h-screen justify-between w-[360px] h-[800px]'}>
      <div className={'flex flex-col items-center pt-16 pb-2'}>
        <Typography weight={'semiBold'} size={'h2'}>Tasks</Typography>
      </div>
      <div className={'flex flex-col gap-4 flex-grow items-center justify-start overflow-y-auto'}>
        <Dropdown
            checkLists={checkLists1}
            title="Medication Refill"
            dropped={false}
          topRightText="12/11"
        />
        <Dropdown
          checkLists={checkLists2}
          title="Checkup with Dr. Geller"
          dropped={false}
          topRightText="13/11"
        />
        <Dropdown
          checkLists={checkLists3}
          title="Do studies"
          dropped={false}
          topRightText="20/11"
        />
        <Dropdown
          checkLists={checkLists4}
          title="Prepare for surgery"
          dropped={false}
          topRightText="9/12"
        />
      </div>
      <div className="fixed bottom-0 w-full items-center">
        <NavBar />
      </div>
      {showPopUp && <DescriptionPopUp  {...popUpData} closePopUp={closePopUp} updateIntent={updateIntent}/>}
    </div>
  );
};

export default TasksView;
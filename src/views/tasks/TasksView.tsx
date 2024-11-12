import React from 'react';
import { Dropdown } from '../../components/menu/dropdown/Dropdown';
import { CheckListProps } from '../../components/button/utility/checklist/CheckList';
import Typography from "../../components/typography/basic/Typography.tsx";
import NavBar from "../../components/menu/navbar/NavBar.tsx";

const TasksView: React.FC = () => {
  const checkLists1: Array<CheckListProps> = [
    { intent: 'default', title: 'Vitamin D supplement' },
    { intent: 'default', title: 'Omega-3 capsules' },
    { intent: 'default', title: 'Ibuprofen' },
    { intent: 'default', title: 'Blood pressure medication' },
  ];

  const checkLists2: Array<CheckListProps> = [
    { intent: 'default', title: 'Get medical records' },
    { intent: 'default', title: 'Go to the A4 clinic' },
  ];

  const checkLists3: Array<CheckListProps> = [
    { intent: 'default', title: 'Leg X-Ray' },
  ];

  const checkLists4: Array<CheckListProps> = [
    { intent: 'default', title: 'Complete pre-surgery lab tests' },
    { intent: 'default', title: 'Meet with anesthesiologist for consultation' },
    { intent: 'default', title: 'Stop certain medications' },
    { intent: 'default', title: 'Arrange transportation to and from the hospital' },
    { intent: 'default', title: 'Prepare post-surgery recovery items at home' },
  ];

  return (
    <div className={'flex flex-col min-h-screen'}>
      <div className={'flex flex-col gap-4 flex-grow'}>
        <Typography weight={'semiBold'} size={'h2'}>Tasks</Typography>
        <Dropdown
          checkLists={checkLists1}
          title="Medication Refill"
          dropped={true}
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
      <div className="">
        <NavBar />
      </div>
    </div>
  );
};

export default TasksView;
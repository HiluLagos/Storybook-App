import React, { useState, useEffect } from 'react';
import { CheckList, CheckListProps } from '../../../button/utility/checklist/CheckList';
import Arrow from '../../../icon/utility/arrow/Arrow';

interface DropdownProps {
    checkLists: Array<CheckListProps>;
    title: string;
    dropped: boolean;
    topRightText: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ checkLists, title, dropped, topRightText }) => {
    const [isOpen, setIsOpen] = useState(dropped);

    useEffect(() => {
        setIsOpen(dropped);
    }, [dropped]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`w-[328px] border-2 border-primary-100 rounded-2xl p-2 h-fit transition-all`}>
            <div className="flex justify-between items-center w-[308px] h-[24px] p-2 cursor-pointer">
                <div className="flex items-center h-full">
                    <Arrow orientation={isOpen ? 'down' : 'right'} state="default" onToggleAction={toggleDropdown}/>
                    <span className="ml-2 text-base font-medium">{title}</span>
                </div>
                <span className="ml-2 text-primary-900 text-base font-medium">{topRightText}</span>
            </div>

            {isOpen && checkLists.length > 0 && (
                <>
                    <div className="w-[308px]">
                        <div className="border-b-2 border-primary-700 my-2"/>
                    </div>
                    <div className="flex flex-col items-center">
                        {checkLists.map((checkList, index) => (
                            <div key={index} className={`${index !== checkLists.length - 1 ? 'mb-2' : ''} w-fit`}>
                                <CheckList {...checkList} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

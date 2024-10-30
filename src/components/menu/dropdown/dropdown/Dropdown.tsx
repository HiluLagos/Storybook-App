import React, { useState, useEffect } from 'react';
import { CheckList, CheckListProps } from '../../../button/utility/checklist/CheckList';

interface DropdownProps {
    checkLists: Array<CheckListProps>;
    title: string;
    dropped: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({ checkLists, title, dropped }) => {
    const [isOpen, setIsOpen] = useState(dropped);

    // Sincroniza el estado interno de isOpen cuando cambia la prop dropped
    useEffect(() => {
        setIsOpen(dropped);
    }, [dropped]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-80 p-2 border border-gray-300 rounded-lg">
            <div className="cursor-pointer" onClick={toggleDropdown}>
                {title}
            </div>

            {isOpen && checkLists.length > 0 && (
                <div className="mt-2  w-80">
                    {checkLists.map((checkList, index) => (
                        <div key={index} className="mb-2">
                            <CheckList {...checkList} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

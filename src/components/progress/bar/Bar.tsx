import React from "react";

type BarProps = {
  percentage: number;
  text?: string;
};

const Bar: React.FC<BarProps> = ({percentage = 45, text}: BarProps) => {
    return (
        <div
            className="bg-primary-100 w-[320px] h-[72px] rounded-2xl relative overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
            <div className="bg-bg-colorful-lightgreen rounded-2xl absolute top-0 left-0"
                 style={{width: `${percentage}%`, height: '100%'}}></div>
            <div className="absolute inset-0 flex items-center justify-between px-4">
                {text && <span className="text-text-default font-semibold">{text}</span>}
                {text && <span className="text-text-default font-semibold">{`${percentage}%`}</span>}
            </div>
        </div>
    )
}

export default Bar;

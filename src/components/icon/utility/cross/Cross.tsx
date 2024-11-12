import React from "react";


type CrossProps = {
  color?: string;
};

const Cross: React.FC<CrossProps> = ({color = "black"}: CrossProps) => {
  return (
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 7L1 1M7 7L13 13M7 7L13 1M7 7L1 13" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className={`stroke-${color}`}/>
      </svg>

  )
};

export default Cross;

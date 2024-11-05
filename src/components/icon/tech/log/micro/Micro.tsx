import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const audioIconStyles = cva(
  "flex justify-center items-center w-6 h-6", {
    variants: {
      pressed: {
        true: "",
        false: "",
      }
    }
  }
);

type AudioProps = VariantProps<typeof audioIconStyles> & {
    pressed: boolean;
};

const MicroIcon: React.FC<AudioProps> = ({ pressed = false }: AudioProps) => { // Default pressed to false
  return (
    <div className={audioIconStyles({ pressed })}>
        <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.90918 1.18188C7.90918 1.18188 10.9092 1.18188 10.9092 4.18188V10.1819C10.9092 10.1819 10.9092 13.1819 7.90918 13.1819C4.90918 13.1819 4.90918 13.1819 4.90918 10.1819V4.18188C4.90918 4.18188 4.90918 1.18188 7.90918 1.18188Z"
                strokeWidth="1.5" className={pressed ? "fill-secondary-100 stroke-secondary-100 ": "stroke-icon-black"}/>
            <path
                d="M0.90918 9.18188V10.1819C0.90918 14.0479 4.04319 17.1819 7.90918 17.1819C11.7752 17.1819 14.9092 14.0479 14.9092 10.1819V9.18188"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={pressed ? "stroke-secondary-100" : "stroke-icon-black"}/>
            <path d="M7.90918 17.1819V21.1819M7.90918 21.1819H4.90918M7.90918 21.1819H10.9092"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={pressed ? "stroke-secondary-100" : "stroke-icon-black"}/>
        </svg>
    </div>
  );
};

export default MicroIcon;
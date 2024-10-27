import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const lock = cva(
  "", {
    variants: {
      fill: {
        filled: "currentColor",
        outline: "none",
      }
    },
    defaultVariants: {
      fill: "outline",
    }
  }
);

type LockProps = VariantProps<typeof lock>;

const Lock: React.FC<LockProps> = ({ fill = "outline" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         className="size-6">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75"/>

      <path stroke-linecap="round" stroke-linejoin="round" fill={lock({ fill })}
            d="M7.5 10.5m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
    </svg>
  )
};

export default Lock;
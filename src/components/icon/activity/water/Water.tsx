import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const water = cva(
  "", {
    variants: {
      size: {
        medium: "w-8 h-8",
        large: "w-16 h-16",
      }
    },
    defaultVariants: {
      size: "medium",
    }
  }
)

type WaterProps = VariantProps<typeof water>;

const Searcher: React.FC<WaterProps> = ({size = "medium"}:WaterProps) => {
  return (
    <svg className={water({size})} viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.53056 24.4406C12.1223 24.4406 15.0611 21.4529 15.0611 17.8285C15.0611 15.9346 14.1304 14.1388 12.2693 12.6204C10.4082 11.102 9.00394 8.849 8.53056 6.48169C8.05704 8.849 6.66929 11.1183 4.79183 12.6204C2.91437 14.1225 2 15.9509 2 17.8285C2 21.4529 4.93869 24.4406 8.53056 24.4406Z"
        stroke="#62DFF2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path
        d="M17.6081 8.60413C18.731 6.81009 19.5269 4.83113 19.959 2.75928C20.7754 6.84086 23.2242 10.7591 26.4896 13.3714C29.755 15.9837 31.3874 19.0856 31.3874 22.3508C31.4237 31.1233 21.95 36.6453 14.3348 32.2904C13.4603 31.7903 12.656 31.1765 11.9429 30.465"
        stroke="#62DFF2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export default Searcher;

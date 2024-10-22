import {cva, VariantProps} from "class-variance-authority";
import React from "react";

const button = cva("rounded-full", {
  variants: {
    intent: {
      default: "bg-utility-button text-black font-sans",
      disabled: "bg-tertiary-500 text-tertiary-900 font-sans",
      pressed: "bg-utility-pressed-button text-black font-sans",
      loading: "bg-utility-loading-button text-utility-pressed-button font-sans"
    },
    size: {
      small: "w-36 h-8",
      medium: "w-56 h-8",
    },
  }
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({ intent, size, value, ...props }) => {
  return <button className={button({ intent, size })} {...props}>{value}</button>;
};
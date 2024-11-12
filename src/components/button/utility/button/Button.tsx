import { cva, VariantProps } from "class-variance-authority";
import React, { useState } from "react";
import Typography from "../../../typography/basic/Typography.tsx";

const button = cva(
  "rounded-full", {
  variants: {
    intent: {
      default: "bg-primary-700 text-black",
      disabled: "bg-primary-100 text-primary-900",
      pressed: "bg-primary-900 text-black shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]",
      incomplete: "bg-primary-300 text-black",
    },
    size: {
      small: "w-36 h-9",
      medium: "w-72 h-9",
    },
  }
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({ intent, size, value, ...props }) => {
  const [currentIntent, setCurrentIntent] = useState(intent);
  const [previousIntent, setPreviousIntent] = useState(currentIntent);

  const handleMouseDown = () => {
    setPreviousIntent(currentIntent);
    setCurrentIntent("pressed");
  };

  const handleMouseUp = () => {
    if (previousIntent === "default") {
      setCurrentIntent("incomplete");
    } else if (previousIntent==="incomplete") {
        setCurrentIntent("default");
    } else {
      setCurrentIntent(previousIntent);
    }
  };

  return (
    <button
      className={button({ intent: currentIntent, size })}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
    >
      <Typography weight={"semiBold"} size={"p"}>{String(value)}</Typography>
    </button>
  );
};
import React, {useState} from "react";
import {cva, VariantProps} from "class-variance-authority";

const arrow = cva(
  "transform transition-transform", {
    variants: {
      state: {
        default: "text-utility-border",
        pressed: "text-tertiary-700",
      },
      orientation: {
        left: "rotate-0",
        up: "rotate-90",
        right: "rotate-180",
        down: "rotate-[270deg]",
      }
    },
    defaultVariants: {
      state: "default",
      orientation: "right",
    }
  }
)

type ArrowProps = VariantProps<typeof arrow> & {
  onToggleAction: () => void;
};

const Arrow: React.FC<ArrowProps> = ({ orientation = "right", onToggleAction = () => {} }: ArrowProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => setIsPressed(true);
  const handleRelease = () => {
    setIsPressed(false);
    onToggleAction();
  };

  const state = isPressed ? "pressed" : "default";

  return (
    <svg
      className={arrow({orientation, state})}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onPointerDown={handlePress}
      onPointerUp={handleRelease}
    >
      <path
        d="M15.7697 4.3862C15.6483 4.2638 15.5038 4.1667 15.3447 4.1004C15.1856 4.0341 15.0149 4 14.8425 4C14.6701 4 14.4995 4.0341 14.3403 4.1004C14.1812 4.1667 14.0368 4.2638 13.9154 4.3862L7.3863 10.9154C7.2639 11.0368 7.1667 11.1812 7.1004 11.3403C7.0341 11.4995 7 11.6701 7 11.8425C7 12.0149 7.0341 12.1855 7.1004 12.3447C7.1667 12.5038 7.2639 12.6482 7.3863 12.7696L13.9154 19.2988C14.0368 19.4211 14.1812 19.5183 14.3403 19.5846C14.4995 19.651 14.6701 19.685 14.8425 19.685C15.0149 19.685 15.1856 19.651 15.3447 19.5846C15.5038 19.5183 15.6483 19.4211 15.7697 19.2988C15.892 19.1773 15.9892 19.0329 16.0555 18.8739C16.1218 18.7147 16.1559 18.544 16.1559 18.3716C16.1559 18.1992 16.1218 18.0286 16.0555 17.8694C15.9892 17.7104 15.892 17.5659 15.7697 17.4445L10.1546 11.8425L15.7697 6.2405C15.892 6.1191 15.9892 5.9747 16.0555 5.8156C16.1218 5.6564 16.1559 5.4858 16.1559 5.3134C16.1559 5.141 16.1218 4.9703 16.0555 4.8112C15.9892 4.6521 15.892 4.5076 15.7697 4.3862Z"
        fill="currentColor" // Use currentColor so the SVG color is controlled by CSS
      />
    </svg>
  );
}

export default Arrow;

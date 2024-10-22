import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const lock = cva(
  "", {
    variants: {
      state: {
        filled: "",
        outline: "fill-none",
      }
    }
  }
)

type LockProps = VariantProps<typeof lock>;

const Lock: React.FC<LockProps> = ({state}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="Lock--Streamline-Unicons" height="24"
         width="24">
      <desc>Lock Streamline Icon: https://streamlinehq.com</desc>

      <path
        className={lock({state})}
        d="M4.625 12c0-0.8 0.309-1.568 0.855-2.115C6.028 9.339 6.797 9.03 7.596 9.03h8.808c0.8 0 1.568 0.31 2.115 0.855 0.547 0.547 0.856 1.316 0.856 2.115v8.232c0 0.8-0.31 1.568-0.856 2.115-0.547 0.547-1.315 0.855-2.115 0.855H7.596c-0.8 0-1.568-0.309-2.115-0.855-0.546-0.547-0.855-1.316-0.855-2.115V12z"
        fill="#000000" stroke-width="1">
      </path>
      <path
        d="M17.88 8.472V6.12c0 -1.5595 -0.6195 -3.0551 -1.7222 -4.1578S13.5595 0.24 12 0.24c-1.5595 0 -3.0551 0.6195 -4.1578 1.7222S6.12 4.5605 6.12 6.12v2.352h2.352V6.12c0 -0.9357 0.3717 -1.833 1.0333 -2.4947C10.167 2.9637 11.0644 2.592 12 2.592s1.833 0.3717 2.4947 1.0333c0.6616 0.6617 1.0333 1.559 1.0333 2.4947v2.352h2.352Z"
        fill="#000000" stroke-width="1">
      </path>
    </svg>
  )
}

export default Lock;

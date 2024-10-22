import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const deleteConst = cva(
  "", {
    variants: {
      fill: {
        outlined: "fill-none stroke-current",
        solid: "fill-current",
      }
    }
  }
)

type DeleteProps = VariantProps<typeof deleteConst>;

const Delete: React.FC<DeleteProps> = ({fill = "outlined"}: DeleteProps) => {
  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/*Trashcan's handler*/}
      <path
        d="M9.1875 7.3125V4.5C9.1875 4.25136 9.28627 4.0129 9.46209 3.83709C9.6379 3.66127 9.87636 3.5625 10.125 3.5625H13.875C14.1236 3.5625 14.3621 3.66127 14.5379 3.83709C14.7137 4.0129 14.8125 4.25136 14.8125 4.5V7.3125"
        stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

      {/*Trashcan's body lines, from top to bottom*/}
      <path
        className={deleteConst({fill})}
        d="M4.5 7.3125H19.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

      <path
        className={deleteConst({fill})}
        d="M5.4375 7.3125L6.375 18.5625C6.375 19.0598 6.57254 19.5367 6.92417 19.8883C7.27581 20.24 7.75272 20.4375 8.25 20.4375H15.75C16.2473 20.4375 16.7242 20.24 17.0758 19.8883C17.4275 19.5367 17.625 19.0598 17.625 18.5625L18.5625 7.3125"
        stroke="blavk" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

      {/*Trashcan's inner lines*/}
      <path

        d="M10.125 11.0625V16.6875" stroke={fill == "outlined" ? "black": "white"} stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round"/>
      <path

        d="M13.875 11.0625V16.6875" stroke={fill == "outlined" ? "black": "white"} stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round"/>
    </svg>
  )
}

export default Delete;

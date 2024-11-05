import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const doneSquare = cva(
  "rounded-[4px]", {
    variants: {
      done: {
        false: "text-white",
        true: "bg-primary-500 text-primary-500",
      }
    }
  }
)

type DoneSquareProps = VariantProps<typeof doneSquare>;

const DoneSquare: React.FC<DoneSquareProps> = ({done = false}: DoneSquareProps) => {
  return (
    <svg className={doneSquare({done})} width="32" height="32" viewBox="0 0 38 38" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.81017 0.512451H34.1902C36.0113 0.512451 37.4877 1.9888 37.4877 3.80995V34.1899C37.4877 36.0111 36.0113 37.4874 34.1902 37.4874H3.81019C1.98904 37.4874 0.512695 36.0111 0.512695 34.1899V3.80995C0.512695 1.9887 1.98898 0.512372 3.81017 0.512451Z"
        fill="black"
      />

      <path
        d="M4.56969 4.56945H33.4307V33.4304H4.56969V4.56945Z"
        fill="currentColor"
      />

      <path
        d="M15.6084 22.2014L15.962 22.5554L16.3158 22.2016L25.3367 13.1788C26.307 12.2085 27.9637 12.6524 28.3188 13.9778C28.4836 14.5929 28.3078 15.2492 27.8575 15.6995L17.2245 26.3325L17.2239 26.3332C16.5288 27.0306 15.3994 27.0306 14.7043 26.3331L10.1467 21.7774C9.17648 20.8071 9.62042 19.1505 10.9458 18.7953C11.5608 18.6305 12.217 18.8063 12.6672 19.2564L15.6084 22.2014Z"
        fill="black" stroke="black"
      />
    </svg>

  )
}

export default DoneSquare;

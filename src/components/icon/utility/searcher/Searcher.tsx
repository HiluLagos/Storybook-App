import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const searcher = cva(
  "", {
    variants: {
      size: {
        small: "w-6 h-6",
        medium: "w-8 h-8",
      }
    },
    defaultVariants: {
      size: "small",
    }
  }
)

type SearcherProps = VariantProps<typeof searcher>;

const Searcher: React.FC<SearcherProps> = ({size = "small"}:SearcherProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
         className={searcher({size})}>
      <path stroke-linecap="round" stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
    </svg>

  )
}

export default Searcher;

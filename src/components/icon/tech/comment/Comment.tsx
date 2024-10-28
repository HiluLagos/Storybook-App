import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const comment = cva(
  "", {
    variants: {
      size: {
        medium: "w-8 h-8",
        small: "w-6 h-6",
        extraSmall: "w-4 h-4",
      },
      fill: {
        outlined: "fill-none stroke-current",
        solid: "fill-current",
      }
    },
    defaultVariants: {
      size: "small",
      fill: "outlined"
    }
  }
)

type CommentProps = VariantProps<typeof comment>;

const Searcher: React.FC<CommentProps> = ({size = "small", fill = "outlined"}:CommentProps) => {
  return (
    <svg viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg" className={comment({size, fill})}>
      <path
        d="M21.8084 23.2523L22.4341 23.026L22.9713 23.4187C23.6128 23.8877 24.6947 24.5535 25.9839 25.1141C27.1394 25.6147 28.4341 26.0249 29.7049 26.1365C29.7024 26.1334 29.6999 26.1303 29.6974 26.1272C29.4185 25.7869 29.0558 25.2975 28.6887 24.6944L28.6857 24.6895C28.0247 23.5922 27.3621 22.0976 27.2284 20.3737L27.1875 19.8465L27.5374 19.45C29.1584 17.6129 30.0817 15.4017 30.0817 13.0416C30.0817 7.07998 24.0324 1.83325 15.9984 1.83325C7.96437 1.83325 1.91505 7.07998 1.91505 13.0416C1.91505 19.0032 7.96437 24.2499 15.9984 24.2499C18.0769 24.2499 20.0413 23.8913 21.8084 23.2523Z"
        stroke="black" stroke-width="2.5"/>
    </svg>
  )
}

export default Searcher;

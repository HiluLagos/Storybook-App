import React from "react";
import {cva, VariantProps} from "class-variance-authority";

const typography = cva(
  "font-montserrat", {
    variants: {
      weight: {
        regular: "font-regular",
        semiBold: "font-semibold",
        extraBold: "font-extrabold",
      },
      size: {
        h1: "text-h1",
        h2: "text-h2",
        h3: "text-h3",
        h4: "text-h4",
        h5: "text-h5",
        p: "text-p",
        m: "text-m",
      }
    },
    defaultVariants: {
      weight: "regular",
      size: "h1",
    }
  }
)

type TypographyProps = VariantProps<typeof typography> & {
  children: string
};

const Typography: React.FC<TypographyProps> = ({weight = "regular", size = "h1", children = "Sample Text"}: TypographyProps) => {
  return (
    <>
      <h1 className={typography({weight, size})} color={"currentColor"}>{children}</h1>
    </>
  )
};

export default Typography;

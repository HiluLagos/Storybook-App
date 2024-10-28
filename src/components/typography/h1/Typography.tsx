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

type H1TypographyProps = VariantProps<typeof typography>;

const H1Typography: React.FC<H1TypographyProps> = ({weight = "regular", size = "h1"}: H1TypographyProps) => {
  return (
    <>
      <h1 className={typography({weight, size})}>Sample text</h1>
    </>
  )
};

export default H1Typography;

import React, { useState } from "react";
import { cva, VariantProps } from "class-variance-authority";

const placeHolderProps = cva("font-montserrat focus:outline-none bg-transparent placeholder:text-current p-0 m-0 border-none w-full", {
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
    },
  },
  defaultVariants: {
    weight: "regular",
    size: "h1",
  },
});

type TypographyInputProps = VariantProps<typeof placeHolderProps> & {
  weight?: "regular" | "semiBold" | "extraBold";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "m";
  placeholder: string;
  isPassword?: boolean; // New prop for password input
};

const TypographyInput: React.FC<TypographyInputProps> = ({
                                                                 weight = "regular",
                                                                 size = "h1",
                                                                 placeholder,
                                                                 isPassword = false
                                                               }) => {
  const [currentText, setCurrentText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentText(e.target.value);
  };

  return (
      <div className="inline-flex items-center w-full">
        <input
            type={isPassword ? "password" : "text"}
            value={currentText}
            onChange={handleInputChange}
            className={placeHolderProps({ weight, size })}
            placeholder={placeholder}
            autoFocus
        />
      </div>
  );
};

export default TypographyInput;

// src/components/typography/input/TypographyInput.tsx
import React, { useState, useImperativeHandle, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Cross from "../../icon/utility/cross/Cross.tsx";

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
  isPassword?: boolean;
  color?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export type TypographyInputHandle = {
  clearInput: () => void;
  getInputValue: () => string;
};

const TypographyInput = forwardRef<TypographyInputHandle, TypographyInputProps>(({
  weight = "regular",
  size = "h1",
  placeholder,
  isPassword = false,
  color = "",
  onKeyDown,
}, ref) => {
  const [currentText, setCurrentText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentText(e.target.value);
  };

  const handleClear = () => {
    setCurrentText("");
  };

  useImperativeHandle(ref, () => ({
    clearInput: handleClear,
    getInputValue: () => currentText,
  }));

  return (
    <div className={`inline-flex items-center w-full text-${color}`}>
      <input
        type={isPassword ? "password" : "text"}
        value={currentText}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
        className={placeHolderProps({ weight, size })}
        placeholder={placeholder}
        autoFocus
      />
      {currentText && (
        <button onClick={handleClear} className="flex-shrink-0">
          <Cross color={color} />
        </button>
      )}
    </div>
  );
});

export default TypographyInput;